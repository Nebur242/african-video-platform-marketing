"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactCopy = {
    form: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        categoryLabel: string;
        categoryPlaceholder: string;
        categories: Record<string, string>;
        subjectLabel: string;
        subjectPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitLabel: string;
        submittingLabel: string;
    };
    success: {
        title: string;
        description: string;
        backLabel: string;
    };
    error: {
        title: string;
        description: string;
    };
};

type FormState = "idle" | "submitting" | "success" | "error";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export function ContactForm({
    copy,
    contactEmail,
}: Readonly<{ copy: ContactCopy; contactEmail: string }>) {
    const [state, setState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const data = new FormData(form);

        const body = {
            contact_name: data.get("contact_name") as string,
            contact_email: data.get("contact_email") as string,
            subject: data.get("subject") as string,
            message: data.get("message") as string,
            category: data.get("category") as string || undefined,
        };

        try {
            const res = await fetch(`${API_BASE_URL}/support/public`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.message || `Error ${res.status}`);
            }

            setState("success");
            form.reset();
        } catch (err) {
            setErrorMessage(err instanceof Error ? err.message : "Unknown error");
            setState("error");
        }
    }

    if (state === "success") {
        return (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
                    <CheckCircle className="size-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                    {copy.success.title}
                </h3>
                <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    {copy.success.description}
                </p>
                <button
                    type="button"
                    onClick={() => setState("idle")}
                    className="mt-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                    {copy.success.backLabel}
                </button>
            </div>
        );
    }

    const inputClasses =
        "w-full rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20 sm:text-base";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {state === "error" && (
                <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                    <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-500" />
                    <p className="text-sm text-red-600 dark:text-red-400">
                        {copy.error.title}. {errorMessage || copy.error.description}{" "}
                        <a
                            href={`mailto:${contactEmail}`}
                            className="font-semibold underline underline-offset-2"
                        >
                            {contactEmail}
                        </a>
                    </p>
                </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">
                        {copy.form.nameLabel} <span className="text-primary">*</span>
                    </span>
                    <input
                        type="text"
                        name="contact_name"
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder={copy.form.namePlaceholder}
                        className={inputClasses}
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">
                        {copy.form.emailLabel} <span className="text-primary">*</span>
                    </span>
                    <input
                        type="email"
                        name="contact_email"
                        required
                        placeholder={copy.form.emailPlaceholder}
                        className={inputClasses}
                    />
                </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">
                        {copy.form.categoryLabel}
                    </span>
                    <select name="category" className={inputClasses}>
                        <option value="">{copy.form.categoryPlaceholder}</option>
                        {Object.entries(copy.form.categories).map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium text-foreground">
                        {copy.form.subjectLabel} <span className="text-primary">*</span>
                    </span>
                    <input
                        type="text"
                        name="subject"
                        required
                        minLength={5}
                        maxLength={255}
                        placeholder={copy.form.subjectPlaceholder}
                        className={inputClasses}
                    />
                </label>
            </div>

            <label className="block space-y-2">
                <span className="text-sm font-medium text-foreground">
                    {copy.form.messageLabel} <span className="text-primary">*</span>
                </span>
                <textarea
                    name="message"
                    required
                    minLength={20}
                    rows={5}
                    placeholder={copy.form.messagePlaceholder}
                    className={`${inputClasses} resize-y`}
                />
            </label>

            <div className="flex justify-end">
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={state === "submitting"}
                >
                    <Send className="mr-2 size-4" />
                    {state === "submitting"
                        ? copy.form.submittingLabel
                        : copy.form.submitLabel}
                </Button>
            </div>
        </form>
    );
}

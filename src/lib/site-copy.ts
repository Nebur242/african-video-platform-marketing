export type Language = "en" | "fr";

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    creators: string;
    discovery: string;
    trust: string;
    faq: string;
    download: string;
  };
  header: {
    languageLabel: string;
    themeLabel: string;
    launchCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    audienceLabel: string;
    stats: Array<{ value: string; label: string }>;
    liveCards: Array<{ title: string; detail: string }>;
  };
  value: {
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
  };
  creator: {
    title: string;
    description: string;
    pillars: Array<{ title: string; description: string }>;
    revenueTitle: string;
    revenueItems: string[];
  };
  discovery: {
    title: string;
    description: string;
    columns: Array<{ title: string; items: string[] }>;
  };
  trust: {
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
  };
  download: {
    title: string;
    description: string;
    stores: Array<{ name: string; note: string; href: string }>;
    footnote: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const siteCopy: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: "African Video Platform | Stories That Move",
      description:
        "A video platform built for African creators, communities, and cultural momentum. Publish, grow, monetize, and build direct audience relationships.",
    },
    nav: {
      product: "Platform",
      creators: "Creators",
      discovery: "Discovery",
      trust: "Trust",
      faq: "FAQ",
      download: "Download",
    },
    header: {
      languageLabel: "Language",
      themeLabel: "Theme",
      launchCta: "Launch preview",
    },
    hero: {
      eyebrow: "Built for African stories, creators, and communities",
      title: "Your stories deserve scale, not compromise.",
      description:
        "African Video Platform gives creators a sharper path to publish, grow an audience, and earn from content while viewers discover voices, playlists, and short-form culture in one place.",
      primaryCta: "Explore the platform",
      secondaryCta: "See creator value",
      audienceLabel: "Momentum across mobile-first audiences",
      stats: [
        { value: "EN / FR", label: "Landing experience" },
        { value: "Shorts + Playlists", label: "Discovery formats" },
        { value: "Monetization-ready", label: "Creator system" },
      ],
      liveCards: [
        { title: "Creator earnings", detail: "Revenue pathways designed for growth" },
        { title: "Curated discovery", detail: "Trending videos, playlists, and categories" },
        { title: "Trust layer", detail: "Moderation tools that protect the experience" },
      ],
    },
    value: {
      title: "One platform, multiple growth loops.",
      description:
        "The product connects publishing, discovery, community retention, and operational control so the experience works for viewers, creators, and the teams running the ecosystem.",
      cards: [
        {
          title: "Mobile-first publishing",
          description: "Upload and distribute content in formats that match how audiences already consume and share video.",
        },
        {
          title: "Audience growth built in",
          description: "Categories, playlists, trending rails, and short video surfaces help strong content travel farther.",
        },
        {
          title: "Operations with visibility",
          description: "Moderation, support, and platform controls help the product stay reliable as the catalog and user base grow.",
        },
      ],
    },
    creator: {
      title: "A creator engine, not just a feed.",
      description:
        "Creators need more than uploads. They need repeat discovery, community feedback loops, and a clear path to monetize attention.",
      pillars: [
        {
          title: "Publish with intention",
          description: "Long-form video, playlists, and short-form clips create multiple entry points into the same catalog.",
        },
        {
          title: "Build repeat audiences",
          description: "Followers, saved content, playlists, and recommendations turn single views into recurring engagement.",
        },
        {
          title: "Turn reach into revenue",
          description: "The platform supports creator revenue features and payout-oriented workflows that can scale with usage.",
        },
      ],
      revenueTitle: "Monetization signals the platform is designed to support",
      revenueItems: [
        "Creator revenue tracking",
        "Gift and payout workflows",
        "Premium and curated playlist surfaces",
        "Operational support for order and payment experiences",
      ],
    },
    discovery: {
      title: "Discovery that feels alive.",
      description:
        "The viewing experience blends trending content, short-form energy, categories, and editorial playlist moments so the platform feels active every time someone opens it.",
      columns: [
        {
          title: "Viewers discover",
          items: ["Trending videos", "Short-form highlights", "Top creators", "Category-led browsing"],
        },
        {
          title: "Communities keep returning",
          items: ["Saved content", "Bookmarks", "Follower loops", "Personalized recommendations"],
        },
        {
          title: "Teams keep control",
          items: ["Moderation tooling", "Support workflows", "Media management", "Platform configuration"],
        },
      ],
    },
    trust: {
      title: "Trust, safety, and operational clarity are part of the product.",
      description:
        "Audience growth only compounds when people trust the surface. The platform is built with moderation, support handling, and internal visibility in mind.",
      points: [
        {
          title: "Moderation-aware foundation",
          description: "Review flows and admin controls help teams respond quickly when content or behavior needs attention.",
        },
        {
          title: "Support that closes the loop",
          description: "Integrated support and operational tools reduce friction for users and internal staff.",
        },
        {
          title: "Stable media delivery",
          description: "Production media infrastructure is designed for fast playback and consistent distribution.",
        },
      ],
    },
    download: {
      title: "Download links can go live when the stores are ready.",
      description:
        "The landing page is ready for production now. Store buttons are intentionally labeled as placeholders so they can be replaced with final App Store and Google Play URLs later.",
      stores: [
        {
          name: "App Store placeholder",
          note: "Replace with the final iOS listing URL when available.",
          href: "https://example.com/app-store-placeholder",
        },
        {
          name: "Google Play placeholder",
          note: "Replace with the final Android listing URL when available.",
          href: "https://example.com/google-play-placeholder",
        },
      ],
      footnote: "Production deploy requested. Public download links can be swapped in without redesigning the page.",
    },
    faq: {
      title: "Questions teams usually ask before launch.",
      items: [
        {
          question: "Who is this platform designed for?",
          answer: "It is built for African creators, viewers, and operators who need a mobile-first video ecosystem with publishing, discovery, and operational control in one product.",
        },
        {
          question: "Does the platform support creator monetization?",
          answer: "Yes. The product direction clearly supports creator revenue workflows, payout systems, and monetization-oriented experiences that can expand over time.",
        },
        {
          question: "Why highlight moderation on a marketing page?",
          answer: "Because growth without trust does not compound. Moderation and support readiness are part of the platform's credibility story.",
        },
        {
          question: "Can the download buttons be updated later?",
          answer: "Yes. The current links are explicit placeholders so the final store URLs can be swapped in without changing the structure or copy.",
        },
      ],
    },
    footer: {
      tagline: "African Video Platform aligns creator ambition, viewer energy, and operational control in one mobile-first product.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    meta: {
      title: "African Video Platform | Des histoires qui avancent",
      description:
        "Une plateforme video pensee pour les createurs africains, les communautes et la croissance culturelle. Publier, developper son audience, monetiser et construire une relation directe avec son public.",
    },
    nav: {
      product: "Plateforme",
      creators: "Createurs",
      discovery: "Decouverte",
      trust: "Confiance",
      faq: "FAQ",
      download: "Telechargement",
    },
    header: {
      languageLabel: "Langue",
      themeLabel: "Theme",
      launchCta: "Voir l'aperçu",
    },
    hero: {
      eyebrow: "Concue pour les histoires, createurs et communautes africains",
      title: "Vos histoires meritent de la portee, pas des compromis.",
      description:
        "African Video Platform offre aux createurs un chemin plus net pour publier, developper leur audience et monetiser leurs contenus pendant que les spectateurs decouvrent videos, playlists et formats courts au meme endroit.",
      primaryCta: "Explorer la plateforme",
      secondaryCta: "Voir la valeur createur",
      audienceLabel: "Une dynamique pensee pour des audiences d'abord mobiles",
      stats: [
        { value: "EN / FR", label: "Experience bilingue" },
        { value: "Formats courts + playlists", label: "Moteurs de decouverte" },
        { value: "Pret pour la monetisation", label: "Systeme createur" },
      ],
      liveCards: [
        { title: "Revenus createurs", detail: "Des parcours de revenus concus pour la croissance" },
        { title: "Decouverte editee", detail: "Tendances, playlists et categories" },
        { title: "Couche de confiance", detail: "Des outils de moderation pour proteger l'experience" },
      ],
    },
    value: {
      title: "Une plateforme, plusieurs boucles de croissance.",
      description:
        "Le produit relie publication, decouverte, retention communautaire et pilotage operationnel afin que l'experience fonctionne pour les spectateurs, les createurs et les equipes internes.",
      cards: [
        {
          title: "Publication mobile-first",
          description: "Telecharger et distribuer les contenus dans des formats qui correspondent aux usages reels des audiences.",
        },
        {
          title: "Croissance d'audience integree",
          description: "Categories, playlists, contenus tendance et formats courts aident les meilleurs contenus a circuler davantage.",
        },
        {
          title: "Pilotage avec visibilite",
          description: "Moderation, support et parametres plateforme gardent l'experience fiable quand le catalogue et la base utilisateur grandissent.",
        },
      ],
    },
    creator: {
      title: "Un moteur createur, pas seulement un flux.",
      description:
        "Les createurs ont besoin de plus que d'un simple upload. Ils ont besoin de decouverte recurrente, de boucles communautaires et d'un chemin clair vers la monetisation.",
      pillars: [
        {
          title: "Publier avec intention",
          description: "Video longue, playlists et clips courts creent plusieurs points d'entree dans un meme catalogue.",
        },
        {
          title: "Construire une audience recurrente",
          description: "Followers, contenus sauvegardes, playlists et recommandations transforment une vue isolee en engagement regulier.",
        },
        {
          title: "Transformer la portee en revenus",
          description: "La plateforme supporte des fonctionnalites de revenus createurs et des workflows de paiement capables d'evoluer avec l'usage.",
        },
      ],
      revenueTitle: "Signaux de monetisation que la plateforme sait soutenir",
      revenueItems: [
        "Suivi des revenus createurs",
        "Workflows de cadeaux et de paiements",
        "Playlists premium et surfaces editees",
        "Support operationnel pour commandes et paiements",
      ],
    },
    discovery: {
      title: "Une decouverte qui semble vivante.",
      description:
        "L'experience melange contenus tendance, energie des formats courts, categories et moments editoriaux pour que la plateforme paraisse active a chaque ouverture.",
      columns: [
        {
          title: "Les spectateurs decouvrent",
          items: ["Videos tendance", "Highlights formats courts", "Top createurs", "Navigation par categories"],
        },
        {
          title: "Les communautes reviennent",
          items: ["Contenus sauvegardes", "Bookmarks", "Boucles followers", "Recommandations personnalisees"],
        },
        {
          title: "Les equipes gardent le controle",
          items: ["Outils de moderation", "Flux support", "Gestion media", "Configuration plateforme"],
        },
      ],
    },
    trust: {
      title: "La confiance, la securite et la clarte operationnelle font partie du produit.",
      description:
        "La croissance ne dure que si la surface inspire confiance. La plateforme est pensee avec moderation, support et visibilite interne des le depart.",
      points: [
        {
          title: "Fondation sensible a la moderation",
          description: "Les flux de revue et les controles admin aident les equipes a reagir rapidement quand un contenu ou un comportement demande une action.",
        },
        {
          title: "Un support qui ferme la boucle",
          description: "Les outils integres de support et d'exploitation reduisent les frictions pour les utilisateurs comme pour les equipes internes.",
        },
        {
          title: "Une diffusion media stable",
          description: "L'infrastructure media de production vise une lecture rapide et une distribution coherente.",
        },
      ],
    },
    download: {
      title: "Les liens de telechargement pourront etre publies des que les stores seront prets.",
      description:
        "La landing page est prete pour la production. Les boutons de store sont volontairement identifies comme placeholders afin d'etre remplaces plus tard par les liens finaux App Store et Google Play.",
      stores: [
        {
          name: "Placeholder App Store",
          note: "A remplacer par l'URL iOS finale quand elle sera disponible.",
          href: "https://example.com/app-store-placeholder",
        },
        {
          name: "Placeholder Google Play",
          note: "A remplacer par l'URL Android finale quand elle sera disponible.",
          href: "https://example.com/google-play-placeholder",
        },
      ],
      footnote: "Deploiement production demande. Les vrais liens de telechargement pourront etre injectes sans refaire le design.",
    },
    faq: {
      title: "Les questions posees avant un lancement.",
      items: [
        {
          question: "A qui s'adresse la plateforme ?",
          answer: "Elle est concue pour les createurs africains, les spectateurs et les equipes qui ont besoin d'un ecosysteme video mobile-first combinant publication, decouverte et controle operationnel.",
        },
        {
          question: "La plateforme supporte-t-elle la monetisation createur ?",
          answer: "Oui. La direction produit supporte clairement les workflows de revenus createurs, les paiements et des experiences orientees monetisation qui peuvent evoluer dans le temps.",
        },
        {
          question: "Pourquoi mettre la moderation en avant sur une page marketing ?",
          answer: "Parce que la croissance sans confiance ne dure pas. La moderation et la preparation du support font partie de la credibilite du produit.",
        },
        {
          question: "Les boutons de telechargement pourront-ils etre mis a jour plus tard ?",
          answer: "Oui. Les liens actuels sont des placeholders explicites afin de pouvoir remplacer les URLs finales sans changer la structure ni le contenu.",
        },
      ],
    },
    footer: {
      tagline: "African Video Platform relie l'ambition createur, l'energie des audiences et le controle operationnel dans un produit mobile-first.",
      rights: "Tous droits reserves.",
    },
  },
};

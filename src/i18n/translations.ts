export type Language = "fr" | "en" | "ar";

export interface TranslationSchema {
  fullName: string;
  sectionLabel: string;
  tagline: string;
  detailsTitle: string;
  detailDateLabel: string;
  detailTimeLabel: string;
  detailLocationLabel: string;
  detailRoomLabel: string;
  address: string;
  openInMaps: string;
  messageTitle: string;
  invitationMessage: string;
  howToFindTitle: string;
  videoSubtitle: string;
  videoPlaceholderText: string;
  directions: string;
  footerLine: string;
  footerSmall: string;
}

const translations: Record<Language, TranslationSchema> = {
  fr: {
    fullName: "Mohamed Ali Elkahwi",
    sectionLabel: "Soutenance de Stage de Fin d'Études",
    tagline: "vous invite à l'honneur de partager la soutenance de son projet de fin d'études",
    detailsTitle: "Les Détails",
    detailDateLabel: "Date",
    detailTimeLabel: "Heure",
    detailLocationLabel: "Lieu",
    detailRoomLabel: "Salle",
    address: "Route de l'Université, Km 4 — Sousse, Tunisie",
    openInMaps: "Ouvrir dans Google Maps",
    messageTitle: "Un moment à partager",
    invitationMessage:
      "C'est avec une joie sincère et un cœur plein de fierté que je vous convie à partager ce moment qui représente l'aboutissement de plusieurs années de travail, de persévérance et d'apprentissage. Ce jour n'aurait pas la même saveur sans les personnes qui m'ont accompagné tout au long de ce chemin. Votre présence — qu'elle soit celle d'un parent, d'un ami ou d'un proche — transformerait cette étape académique en un véritable souvenir de vie. C'est avec votre soutien que ce moment prend tout son sens, et c'est avec vous que je souhaite le célébrer.",
    howToFindTitle: "Comment trouver la salle",
    videoSubtitle:
      "Une courte vidéo pour guider les visiteurs qui découvrent le campus pour la première fois.",
    videoPlaceholderText: "Vidéo de navigation à venir",
    directions:
      "Depuis le centre-ville de Sousse, empruntez la route de l'Université (Km 4). Le bâtiment principal de l'ISSAT est bien indiqué sur la droite. Un parking gratuit est disponible à proximité de l'entrée.",
    footerLine: "Votre présence nous honore",
    footerSmall:
      "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse",
  },
  en: {
    fullName: "Mohamed Ali Elkahwi",
    sectionLabel: "Final Year Internship Defense",
    tagline: "invites you to the honour of sharing the defense of his final year project",
    detailsTitle: "Event Details",
    detailDateLabel: "Date",
    detailTimeLabel: "Time",
    detailLocationLabel: "Location",
    detailRoomLabel: "Room",
    address: "Route de l'Université, Km 4 — Sousse, Tunisia",
    openInMaps: "Open in Google Maps",
    messageTitle: "A Moment to Share",
    invitationMessage:
      "It is with heartfelt joy and deep gratitude that I invite you to share a moment that represents the culmination of years of hard work, late nights, and relentless effort. This day would not carry the same weight without the people who have believed in me throughout this journey. Whether you are family or a cherished friend, your presence would turn a simple academic milestone into a memory I will carry for a lifetime. It is with your support that this moment truly means something — and it is with you that I wish to celebrate it.",
    howToFindTitle: "How to Find the Room",
    videoSubtitle:
      "A short navigation video to help first-time visitors find their way on campus.",
    videoPlaceholderText: "Navigation video coming soon",
    directions:
      "From downtown Sousse, take the university road (Km 4). The ISSAT main building will be signposted on the right. Free parking is available near the entrance.",
    footerLine: "Your presence honours us",
    footerSmall:
      "Higher Institute of Applied Sciences and Technology of Sousse",
  },
  ar: {
    fullName: "محمد علي القهوي",
    sectionLabel: "مناقشة مشروع التخرج",
    tagline: "يتشرف بدعوتكم لحضور مناقشة مشروع تخرجه",
    detailsTitle: "تفاصيل الحدث",
    detailDateLabel: "التاريخ",
    detailTimeLabel: "الوقت",
    detailLocationLabel: "المكان",
    detailRoomLabel: "القاعة",
    address: "طريق الجامعة، كلم 4 — سوسة، تونس",
    openInMaps: "فتح في خرائط Google",
    messageTitle: "لحظة للمشاركة",
    invitationMessage:
      "بكل فرحة وامتنان عميق، أدعوكم لتشاركوني لحظةً هي ثمرة سنواتٍ من العمل الدؤوب والمثابرة، لم تخلُ من التعب والتحدي. هذا اليوم لن يكتمل بهجته دون وجود من أحبّ وأقدّر. حضوركم — سواء أكنتم أهلاً أم أصدقاء — يُحوّل هذه المحطة الأكاديمية إلى ذكرى تُحفر في القلب. بدعمكم يكتسب هذا اليوم معناه الحقيقي، وبكم يكتمل فرحي.",
    howToFindTitle: "كيف تصل إلى القاعة",
    videoSubtitle: "فيديو قصير لإرشاد الزوار الجدد إلى الحرم الجامعي.",
    videoPlaceholderText: "فيديو الإرشاد قريباً",
    directions:
      "من وسط مدينة سوسة، اتجه نحو طريق الجامعة (كيلومتر 4). مبنى المعهد الرئيسي مُشار إليه على اليمين. تتوفر مواقف سيارات مجانية بالقرب من المدخل.",
    footerLine: "يشرفنا حضوركم",
    footerSmall: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بسوسة",
  },
};

export default translations;

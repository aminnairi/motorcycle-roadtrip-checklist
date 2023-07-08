import { useCallback } from "react";

export interface Translations {
  [sentence: string]: {
    [language: string]: string;
  }
}

export const useTranslation = (translations: Translations) => {
  const translate = useCallback((sentence: string) => {
    const language = navigator.language.split("-")[0];

    if (translations[sentence] === undefined) {
      return sentence;
    }

    if (translations[sentence][language] === undefined) {
      return sentence;
    }

    return translations[sentence][language];
  }, [translations]);

  return {
    translate
  }
};

export const useTranslate = () => {
  const { translate } = useTranslation({
    "Chargement de votre page...": {
      en: "Loading your page...",
    },
    "Aucun éléments": {
      en: "No items",
    },
    "Cachés": {
      en: "Hidden",
    },
    "Aucun éléments cachés": {
      en: "No hidden items",
    },
    "Afficher les éléments cachés": {
      en: "Show hidden items",
    },
    "Vérifier ma liste": {
      en: "Check my list",
    },
    "Liste": {
      en: "Items",
    },
    "Tout décocher": {
      en: "Uncheck all",
    },
    "Administratif": {
      en: "Administrative",
    },
    "Tout cocher": {
      en: "Check all",
    },
    "Tout afficher": {
      en: "Show all",
    },
    "Carte d'identité": {
      en: "Identity card",
    },
    "Trousse de toilette": {
      en: "Toiletry bag",
    },
    "Hygiène": {
      en: "Hygiene",
    },
    "Affaires": {
      en: "Clothes",
    },
    "Moto": {
      en: "Motorcycle",
    },
    "Pilote": {
      en: "Driver"
    },
    "Transport": {
      en: "Luggage",
    },
    "Électronique": {
      en: "Electronic",
    },
    "Photo & Vidéo": {
      en: "Photo & Video",
    },
    "Carte bleu": {
      en: "Credit card",
    },
    "Clés du domicile": {
      en: "House keys",
    },
    "Argent en liquide": {
      en: "Cash",
    },
    "Clés du portail": {
      en: "Gate keys",
    },
    "Télécommande du portail": {
      en: "Gate remote control",
    },
    "Brosse à dents": {
      en: "Toothbrush",
    },
    "Dentifrice": {
      en: "Toothpaste",
    },
    "Coupe-ongles": {
      en: "Nail clipper",
    },
    "Gel douche": {
      en: "Shower gel",
    },
    "Crème anti-douleurs": {
      en: "Anti-inflammatory cream",
    },
    "Parfum": {
      en: "Perfume",
    },
    "Rasoirs": {
      en: "Razors",
    },
    "Trousse de premier soin": {
      en: "First aid kit",
    },
    "Serviette de bain": {
      en: "Bath towel",
    },
    "Tongs": {
      en: "Flip-flops",
    },
    "Sac à linge sale": {
      en: "Dirty laundry bag",
    },
    "T-shirts": {
      en: "T-shirts",
    },
    "Sous-vêtements": {
      en: "Underwear",
    },
    "Chaussettes": {
      en: "Socks",
    },
    "Short de nuit": {
      en: "Night shorts",
    },
    "Pantalon de ville": {
      en: "City pants",
    },
    "Chaussures de ville": {
      en: "City shoes",
    },
    "Maillot de bain": {
      en: "Swimsuit",
    },
    "Clés de contact": {
      en: "Ignition keys",
    },
    "Permis de conduire": {
      en: "Driving license",
    },
    "Carte grise": {
      en: "Registration certificate",
    },
    "Certificat d'assurance": {
      en: "Insurance certificate",
    },
    "Support de téléphone": {
      en: "Phone holder",
    },
    "Câble USB": {
      en: "USB cable",
    },
    "Prise DIN 12v": {
      en: "DIN 12v socket",
    },
    "Gilet jaune de sécurité": {
      en: "Yellow safety vest",
    },
    "Constat amiable": {
      en: "Accident report",
    },
    "Compresseur à air portable": {
      en: "Portable air compressor",
    },
    "Kit anti-crevaison": {
      en: "Puncture repair kit",
    },
    "Système de protection anti-vol": {
      en: "Anti-theft protection system",
    },
    "Graisse pour chaîne": {
      en: "Chain grease",
    },
    "Dégraissant pour chaîne": {
      en: "Chain degreaser",
    },
    "Lingettes microfibres": {
      en: "Microfiber wipes",
    },
    "Trousse à outils": {
      en: "Tool kit",
    },
    "Fusibles de rechange": {
      en: "Spare fuses",
    },
    "Scotch isolant": {
      en: "Insulating tape",
    },
    "Douilles adaptées à la moto": {
      en: "Sockets suitable for the motorcycle",
    },
    "Clé à douilles": {
      en: "Socket wrench",
    },
    "Clés plates adaptées à la moto": {
      en: "Spanners suitable for the motorcycle",
    },
    "Clés Allen adaptées à la moto": {
      en: "Allen keys suitable for the motorcycle",
    },
    "Pince multifonction": {
      en: "Multitool pliers",
    },
    "Serres-câbles": {
      en: "Cable ties",
    },
    "Gants de travail": {
      en: "Work gloves",
    },
    "Bouchons d'oreilles": {
      en: "Earplugs",
    },
    "Masques de protection COVID-19": {
      en: "COVID-19 protective masks",
    },
    "Lunettes de vue": {
      en: "Glasses",
    },
    "Chiffon pour lunettes": {
      en: "Glasses cloth",
    },
    "Anti-buée pour lunettes": {
      en: "Anti-fog for glasses",
    },
    "Gants d'été": {
      en: "Summer gloves",
    },
    "Gants d'hiver": {
      en: "Winter gloves",
    },
    "Pantalon ou cuir": {
      en: "Pants or leather",
    },
    "Chaussures ou bottes": {
      en: "Shoes or boots",
    },
    "Sous-vêtements thermiques": {
      en: "Thermal underwear",
    },
    "Tour de cou": {
      en: "Neck warmer",
    },
    "Lunettes de soleil": {
      en: "Sunglasses",
    },
    "Casquette": {
      en: "Cap",
    },
    "Casque": {
      en: "Helmet",
    },
    "Nettoyant pour visière de casque": {
      en: "Visor cleaner for helmet",
    },
    "Intercom pour casque": {
      en: "Intercom for helmet",
    },
    "Gourde à eau": {
      en: "Water bottle",
    },
    "Pantalon de pluie": {
      en: "Rain pants",
    },
    "Veste de pluie": {
      en: "Rain jacket",
    },
    "Saccoches latérales": {
      en: "Side bags",
    },
    "Saccoche de selle": {
      en: "Saddlebag",
    },
    "Top case": {
      en: "Top case",
    },
    "Sangles à cliquets": {
      en: "Ratchet straps",
    },
    "Sangles élastiques": {
      en: "Elastic straps",
    },
    "Filet d'attache": {
      en: "Attachment net",
    },
    "Saccoche de réservoir": {
      en: "Tank bag",
    },
    "Sac à dos": {
      en: "Backpack",
    },
    "Multiprise secteur USB": {
      en: "USB power strip",
    },
    "Banque de puissance": {
      en: "Power bank",
    },
    "Téléphone": {
      en: "Phone",
    },
    "Câble USB pour téléphone": {
      en: "USB cable for phone",
    },
    "Câble USB pour intercom": {
      en: "USB cable for intercom",
    },
    "Ordinateur": {
      en: "Computer",
    },
    "Housse de transport pour ordinateur": {
      en: "Computer transport case",
    },
    "Prise secteur pour ordinateur": {
      en: "Computer power outlet",
    },
    "GoPro": {
      en: "GoPro",
    },
    "Boîtier de transport pour GoPro": {
      en: "GoPro transport case",
    },
    "Fixation au casque pour GoPro": {
      en: "Helmet mount for GoPro",
    },
    "Boîtier de protection pour GoPro": {
      en: "GoPro protective case",
    },
    "Câble USB pour GoPro": {
      en: "USB cable for GoPro",
    },
    "Batteries supplémentaires pour GoPro": {
      en: "Additional batteries for GoPro",
    },
    "Chargeur de batteries supplémentaires pour GoPro": {
      en: "Additional batteries charger for GoPro",
    },
    "Carte mémoire pour GoPro": {
      en: "Memory card for GoPro",
    },
    "Appareil photo": {
      en: "Camera",
    },
    "Objectif pour appareil photo": {
      en: "Camera lens",
    },
    "Saccoche de transport pour appareil photo": {
      en: "Camera transport case",
    },
    "Câble USB pour appareil photo": {
      en: "USB cable for camera",
    },
    "Carte mémoire pour appareil photo": {
      en: "Memory card for camera",
    },
  });

  return translate;
};

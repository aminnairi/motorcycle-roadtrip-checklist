import { DeepReadonly } from "@aminnairi/react-store";
import { z } from "zod";
import { safeParseJson } from "../library/json";

export const sectionSchema = z.object({
  title: z.string(),
  items: z.array(z.object({
    title: z.string(),
    checked: z.boolean(),
    hidden: z.boolean()
  }))
});

export type Section = DeepReadonly<z.infer<typeof sectionSchema>>;

export const sectionsSchema = z.array(sectionSchema);

export const stateSchema = z.object({
  sections: sectionsSchema
});

export type State = DeepReadonly<z.infer<typeof stateSchema>>;

export const defaultState: State = {
  sections: [
    {
      title: "Administratif",
      items: [
        { title: "Carte d'identité", checked: false, hidden: false },
        { title: "Carte bleu", checked: false, hidden: false },
        { title: "Clés du domicile", checked: false, hidden: false },
        { title: "Argent en liquide", checked: false, hidden: false },
        { title: "Clés du portail", checked: false, hidden: false },
        { title: "Télécommande du portail", checked: false, hidden: false }
      ]
    },
    {
      title: "Hygiène",
      items: [
        { title: "Trousse de toilette", checked: false, hidden: false },
        { title: "Brosse à dents", checked: false, hidden: false },
        { title: "Dentifrice", checked: false, hidden: false },
        { title: "Coupe-ongles", checked: false, hidden: false },
        { title: "Gel douche", checked: false, hidden: false },
        { title: "Crème anti-douleurs", checked: false, hidden: false },
        { title: "Parfum", checked: false, hidden: false },
        { title: "Rasoirs", checked: false, hidden: false },
        { title: "Trousse de premier soin", checked: false, hidden: false },
        { title: "Serviette de bain", checked: false, hidden: false }
      ]
    },
    {
      title: "Affaires",
      items: [
        { title: "Tongs", checked: false, hidden: false },
        { title: "Sac à linge sale", checked: false, hidden: false },
        { title: "T-shirts", checked: false, hidden: false },
        { title: "Sous-vêtements", checked: false, hidden: false },
        { title: "Chaussettes", checked: false, hidden: false },
        { title: "Short de nuit", checked: false, hidden: false },
        { title: "Pantalon de ville", checked: false, hidden: false },
        { title: "Chaussures de ville", checked: false, hidden: false },
        { title: "Maillot de bain", checked: false, hidden: false }
      ]
    },
    {
      title: "Moto",
      items: [
        { title: "Clés de contact", checked: false, hidden: false },
        { title: "Permis de conduire", checked: false, hidden: false },
        { title: "Carte grise", checked: false, hidden: false },
        { title: "Certificat d'assurance", checked: false, hidden: false },
        { title: "Support de téléphone", checked: false, hidden: false },
        { title: "Câble USB", checked: false, hidden: false },
        { title: "Prise DIN 12v", checked: false, hidden: false },
        { title: "Gilet jaune de sécurité", checked: false, hidden: false },
        { title: "Constat amiable", checked: false, hidden: false },
        { title: "Compresseur à air portable", checked: false, hidden: false },
        { title: "Kit anti-crevaison", checked: false, hidden: false },
        { title: "Système de protection anti-vol", checked: false, hidden: false },
        { title: "Graisse pour chaîne", checked: false, hidden: false },
        { title: "Dégraissant pour chaîne", checked: false, hidden: false },
        { title: "Lingettes microfibres", checked: false, hidden: false },
        { title: "Trousse à outils", checked: false, hidden: false },
        { title: "Fusibles de rechange", checked: false, hidden: false },
        { title: "Scotch isolant", checked: false, hidden: false },
        { title: "Douilles adaptées à la moto", checked: false, hidden: false },
        { title: "Clé à douilles", checked: false, hidden: false },
        { title: "Clés plates adaptées à la moto", checked: false, hidden: false },
        { title: "Clés Allen adaptées à la moto", checked: false, hidden: false },
        { title: "Pince multifonction", checked: false, hidden: false },
        { title: "Serres-câbles", checked: false, hidden: false },
        { title: "Gants de travail", checked: false, hidden: false }
      ]
    },
    {
      title: "Pilote",
      items: [
        { title: "Bouchons d'oreilles", checked: false, hidden: false },
        { title: "Masques de protection COVID-19", checked: false, hidden: false },
        { title: "Lunettes de vue", checked: false, hidden: false },
        { title: "Chiffon pour lunettes", checked: false, hidden: false },
        { title: "Anti-buée pour lunettes", checked: false, hidden: false },
        { title: "Gants d'été", checked: false, hidden: false },
        { title: "Gants d'hiver", checked: false, hidden: false },
        { title: "Pantalon ou cuir", checked: false, hidden: false },
        { title: "Chaussures ou bottes", checked: false, hidden: false },
        { title: "Sous-vêtements thermiques", checked: false, hidden: false },
        { title: "Tour de cou", checked: false, hidden: false },
        { title: "Lunettes de soleil", checked: false, hidden: false },
        { title: "Casquette", checked: false, hidden: false },
        { title: "Casque", checked: false, hidden: false },
        { title: "Nettoyant pour visière de casque", checked: false, hidden: false },
        { title: "Intercom pour casque", checked: false, hidden: false },
        { title: "Gourde à eau", checked: false, hidden: false },
        { title: "Pantalon de pluie", checked: false, hidden: false },
        { title: "Veste de pluie", checked: false, hidden: false }
      ]
    },
    {
      title: "Transport",
      items: [
        { title: "Saccoches latérales", checked: false, hidden: false },
        { title: "Saccoche de selle", checked: false, hidden: false },
        { title: "Top case", checked: false, hidden: false },
        { title: "Sangles à cliquets", checked: false, hidden: false },
        { title: "Sangles élastiques", checked: false, hidden: false },
        { title: "Filet d'attache", checked: false, hidden: false },
        { title: "Saccoche de réservoir", checked: false, hidden: false },
        { title: "Sac à dos", checked: false, hidden: false }
      ]
    },
    {
      title: "Électronique",
      items: [
        { title: "Multiprise secteur USB", checked: false, hidden: false },
        { title: "Banque de puissance", checked: false, hidden: false },
        { title: "Téléphone", checked: false, hidden: false },
        { title: "Câble USB pour téléphone", checked: false, hidden: false },
        { title: "Câble USB pour intercom", checked: false, hidden: false }
      ]
    },
    {
      title: "Photo & Vidéo",
      items: [
        { title: "Ordinateur", checked: false, hidden: false },
        { title: "Housse de transport pour ordinateur", checked: false, hidden: false },
        { title: "Prise secteur pour ordinateur", checked: false, hidden: false },
        { title: "GoPro", checked: false, hidden: false },
        { title: "Boîtier de transport pour GoPro", checked: false, hidden: false },
        { title: "Fixation au casque pour GoPro", checked: false, hidden: false },
        { title: "Boîtier de protection pour GoPro", checked: false, hidden: false },
        { title: "Câble USB pour GoPro", checked: false, hidden: false },
        { title: "Batteries supplémentaires pour GoPro", checked: false, hidden: false },
        { title: "Chargeur de batteries supplémentaires pour GoPro", checked: false, hidden: false },
        { title: "Carte mémoire pour GoPro", checked: false, hidden: false },
        { title: "Appareil photo", checked: false, hidden: false },
        { title: "Objectif pour appareil photo", checked: false, hidden: false },
        { title: "Saccoche de transport pour appareil photo", checked: false, hidden: false },
        { title: "Câble USB pour appareil photo", checked: false, hidden: false },
        { title: "Carte mémoire pour appareil photo", checked: false, hidden: false },
      ]
    }
  ]
};

export const localStorageState = window.localStorage.getItem("state") || "";

export const parsedLocalStorageState = stateSchema.safeParse(safeParseJson(localStorageState));

export const oldState: State = parsedLocalStorageState.success ? parsedLocalStorageState.data : defaultState;

export const initialState: State = {
  sections: defaultState.sections.map((section) => {
    return {
      ...section,
      items: section.items.map(item => {
        const oldSection = oldState.sections.find(oldSection => {
          return oldSection.title === section.title;
        });

        if (!oldSection) {
          return item;
        }

        const oldItem = oldSection.items.find(oldItem => {
          return oldItem.title === item.title;
        });

        if (!oldItem) {
          return item;
        }

        return {
          ...item,
          checked: oldItem.checked,
          hidden: oldItem.hidden
        };
      })
    };
  })
};

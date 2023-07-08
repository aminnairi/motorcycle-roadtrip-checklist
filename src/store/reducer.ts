import { createReducer } from "@aminnairi/react-store";
import { State } from "./state";

export enum ActionType {
  SectionItemCheckedToggle = "SECTION_ITEM_CHECKED_TOGGLE",
  HideSectionItem = "HIDE_SECTION_ITEM",
  ShowSectionItem = "SHOW_SECTION_ITEM",
  ToggleSectionItemsChecked = "TOGGLE_SECTION_ITEMS_CHECKED",
  HideSectionItems = "HIDE_SECTION_ITEMS",
  ShowSectionItems = "SHOW_SECTION_ITEMS",
  UncheckAllSectionItems = "UNCHECK_ALL_SECTION_ITEMS",
  ShowAllSectionItems = "SHOW_ALL_SECTION_ITEMS"
}

export type SectionItemCheckedToggleAction = {
  type: ActionType.SectionItemCheckedToggle,
  payload: {
    section: string,
    item: string
  }
}

export type HideSectionItemAction = {
  type: ActionType.HideSectionItem,
  payload: {
    section: string,
    item: string
  }
}

export type ShowSectionItemAction = {
  type: ActionType.ShowSectionItem,
  payload: {
    section: string,
    item: string
  }
}

export type ToggleSectionItemsChecked = {
  type: ActionType.ToggleSectionItemsChecked,
  payload: string
};

export type HideSectionItems = {
  type: ActionType.HideSectionItems,
  payload: string
};

export type ShowSectionItems = {
  type: ActionType.ShowSectionItems,
  payload: string
};

export type UncheckAllSectionItems = {
  type: ActionType.UncheckAllSectionItems,
  payload: null
};

export type ShowAllSectionItems = {
  type: ActionType.ShowAllSectionItems,
  payload: null
};

export type Action =
  | SectionItemCheckedToggleAction
  | HideSectionItemAction
  | ShowSectionItemAction
  | ToggleSectionItemsChecked
  | HideSectionItems
  | ShowSectionItems
  | UncheckAllSectionItems
  | ShowAllSectionItems;

export const reducer = createReducer<State, Action>((state, action) => {
  switch (action.type) {
    case ActionType.SectionItemCheckedToggle:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload.section) {
            return section;
          }

          return {
            ...section,
            items: section.items.map(item => {
              if (item.title !== action.payload.item) {
                return item;
              }

              return {
                ...item,
                checked: !item.checked
              };
            })
          };
        })
      };

    case ActionType.HideSectionItem:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload.section) {
            return section;

          }

          return {
            ...section,
            items: section.items.map(item => {
              if (item.title !== action.payload.item) {
                return item;
              }

              return {
                ...item,
                hidden: true
              };
            })
          };

        })
      };

    case ActionType.ShowSectionItem:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload.section) {
            return section;
          }

          return {
            ...section,
            items: section.items.map(item => {
              if (item.title !== action.payload.item) {
                return item;
              }

              return {
                ...item,
                hidden: false
              };
            })
          };
        })
      };

    case ActionType.ToggleSectionItemsChecked:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload) {
            return section;
          }

          const checked = section.items.every(item => {
            return item.checked;
          });

          return {
            ...section,
            items: section.items.map(item => {
              return {
                ...item,
                checked: !checked
              };
            })
          };
        })
      };

    case ActionType.HideSectionItems:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload) {
            return section;
          }

          return {
            ...section,
            items: section.items.map(item => {
              return {
                ...item,
                hidden: true
              };
            })
          };
        })
      };

    case ActionType.ShowSectionItems:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.title !== action.payload) {
            return section;
          }

          return {
            ...section,
            items: section.items.map(item => {
              return {
                ...item,
                hidden: false
              };
            })
          };
        })
      };


    case ActionType.UncheckAllSectionItems:
      return {
        ...state,
        sections: state.sections.map(section => {
          return {
            ...section,
            items: section.items.map(item => {
              return {
                ...item,
                checked: false
              };
            })
          };
        })
      };

    case ActionType.ShowAllSectionItems:
      return {
        ...state,
        sections: state.sections.map(section => {
          return {
            ...section,
            items: section.items.map(item => {
              return {
                ...item,
                hidden: false
              };
            })
          };
        })
      };

    default:
      return state;
  }
})

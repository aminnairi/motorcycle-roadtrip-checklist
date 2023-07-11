import { useCallback, useMemo, useTransition } from "react";
import { useDispatch, useSelector } from "../store";
import { ActionType } from "../store/reducer";
import { Section } from "../store/state";

export const useSections = () => {
  const [_isPending, startTransition] = useTransition();
  const sections = useSelector(state => state.sections);
  const dispatch = useDispatch();

  const visibleSections = useMemo(() => {
    return sections.map(section => {
      return {
        ...section,
        items: section.items.filter(item => {
          return !item.hidden
        })
      }
    }).filter(section => {
      return section.items.length > 0;
    });
  }, [sections]);

  const hiddenSections = useMemo(() => {
    return sections.map(section => {
      return {
        ...section,
        items: section.items.filter(item => {
          return item.hidden
        })
      }
    }).filter(section => {
      return section.items.length > 0;
    });
  }, [sections]);

  const toggleSectionItem = useCallback((section: string, item: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.SectionItemCheckedToggle,
        payload: {
          section,
          item
        }
      });
    });
  }, []);

  const hideSectionItem = useCallback((section: string, item: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.HideSectionItem,
        payload: {
          section,
          item
        }
      });
    });
  }, []);

  const showSectionItem = useCallback((section: string, item: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.ShowSectionItem,
        payload: {
          section,
          item
        }
      });
    });
  }, []);

  const toggleVisibleSectionItemsChecked = useCallback((section: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.ToggleVisibleSectionItemsChecked,
        payload: section
      });
    });
  }, []);

  const toggleHiddenSectionItemsChecked = useCallback((section: string) => () => {
    console.log("Henlo???");
    startTransition(() => {
      dispatch({
        type: ActionType.ToggleHiddenSectionItemsChecked,
        payload: section
      });
    });
  }, []);

  const isSectionItemsChecked = useCallback((section: Section) => {
    return section.items.every(item => {
      return item.checked;
    });
  }, []);

  const hideSectionItems = useCallback((section: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.HideSectionItems,
        payload: section
      });
    });
  }, []);

  const showSectionItems = useCallback((section: string) => () => {
    startTransition(() => {
      dispatch({
        type: ActionType.ShowSectionItems,
        payload: section
      });
    });
  }, []);

  const showAllSectionItems = useCallback(() => {
    startTransition(() => {
      dispatch({
        type: ActionType.ShowAllSectionItems,
        payload: null
      });
    });
  }, []);

  const uncheckAllSectionItems = useCallback(() => {
    startTransition(() => {
      dispatch({
        type: ActionType.UncheckAllSectionItems,
        payload: null
      });
    });
  }, []);

  const getSectionItemsCheckedCount = useCallback((section: Section) => {
    return section.items.filter(item => item.checked).length;
  }, []);

  const getAllSectionItemsCount = useCallback((sections: Array<Section>) => {
    return sections.reduce((count, section) => {
      return count + section.items.length;
    }, 0);
  }, []);

  const getAllSectionItemsCheckedCount = useCallback((sections: Array<Section>) => {
    return sections.reduce((count, section) => {
      return count + getSectionItemsCheckedCount(section);
    }, 0);
  }, []);

  const getAllSectionItemsHiddenCount = useCallback((sections: Array<Section>) => {
    return sections.reduce((count, section) => {
      return count + section.items.filter(item => item.hidden).length;
    }, 0);
  }, []);

  return {
    sections,
    visibleSections,
    hiddenSections,
    toggleSectionItem,
    hideSectionItem,
    showSectionItem,
    toggleVisibleSectionItemsChecked,
    toggleHiddenSectionItemsChecked,
    isSectionItemsChecked,
    hideSectionItems,
    showSectionItems,
    uncheckAllSectionItems,
    showAllSectionItems,
    getSectionItemsCheckedCount,
    getAllSectionItemsCount,
    getAllSectionItemsCheckedCount,
    getAllSectionItemsHiddenCount,
  };
};

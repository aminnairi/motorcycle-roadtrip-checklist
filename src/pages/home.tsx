import { Fragment, FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";
import { useSections } from "../hooks/sections";
import { useVibrationOf } from "../hooks/vibration";
import { Title } from "../components/title";
import { Button } from "../components/button";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Text } from "../components/text";
import { IconHide } from "../components/icon-hide";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Page } from ".";
import { useTranslate } from "../hooks/translation";

export const HomePage: FunctionComponent = memo(() => {
  const { withVibration } = useVibrationOf(50);
  const [sectionRef] = useAutoAnimate();
  const translate = useTranslate();

  const {
    visibleSections,
    toggleSectionItem,
    hideSectionItem,
    toggleSectionItemsChecked,
    isSectionItemsChecked,
    hideSectionItems,
    uncheckAllSectionItems,
    getSectionItemsCheckedCount,
    getAllSectionItemsCount,
    getAllSectionItemsCheckedCount
  } = useSections();

  return (
    <Fragment>
      <Title variant="h2" align="center">
        {translate("Liste")} ({getAllSectionItemsCheckedCount(visibleSections)}/{getAllSectionItemsCount(visibleSections)})
      </Title>
      <Button onClick={withVibration(uncheckAllSectionItems)} disabled={getAllSectionItemsCheckedCount(visibleSections) === 0}>
        {translate("Tout décocher")}
      </Button>
      {visibleSections.length === 0 ? (
        <Fragment>
          <Title variant="h2" align="center">
            {translate("Aucun éléments")}
          </Title>
          <Link to={Page.Hidden}>
            <Text underlined>
              {translate("Afficher les éléments cachés")}
            </Text>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          {visibleSections.map(section => (
            <Fragment key={section.title}>
              <Title variant="h3" align="center">
                {translate(section.title)} ({getSectionItemsCheckedCount(section)}/{section.items.length})
              </Title>
              <List style={{ width: "100%" }} ref={sectionRef}>
                <ListItem>
                  <input id={section.title} type="checkbox" onChange={withVibration(toggleSectionItemsChecked(section.title))} checked={isSectionItemsChecked(section)} />
                  <label htmlFor={section.title} style={{ flex: 1, cursor: "pointer" }}>
                    <Text align="center" variant="italic" color="grey">
                      {isSectionItemsChecked(section) ? translate("Tout décocher") : translate("Tout cocher")}
                    </Text>
                  </label>
                  <IconHide onClick={withVibration(hideSectionItems(section.title))} />
                </ListItem>
                {section.items.map(item => (
                  <ListItem key={item.title}>
                    <input id={item.title} onChange={withVibration(toggleSectionItem(section.title, item.title))} type="checkbox" checked={item.checked} />
                    <label htmlFor={item.title} style={{ flex: 1, cursor: "pointer" }}>
                      <Text style={{ cursor: "pointer" }}>
                        {translate(item.title)}
                      </Text>
                    </label>
                    <IconHide onClick={withVibration(hideSectionItem(section.title, item.title))} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
});

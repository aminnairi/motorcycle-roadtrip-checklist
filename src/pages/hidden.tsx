import { Link } from "react-router-dom";
import { Fragment, FunctionComponent, memo } from "react";
import { useSections } from "../hooks/sections";
import { Title } from "../components/title";
import { List } from "../components/list";
import { ListItem } from "../components/list-item";
import { Text } from "../components/text";
import { IconReveal } from "../components/icon-reveal";
import { Button } from "../components/button";
import { useVibrationOf } from "../hooks/vibration";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Page } from ".";
import { useTranslate } from "../hooks/translation";

export const HiddenPage: FunctionComponent = memo(() => {
  const { withVibration } = useVibrationOf(50);
  const [sectionRef] = useAutoAnimate();
  const translate = useTranslate();

  const {
    hiddenSections,
    toggleSectionItem,
    toggleSectionItemsChecked,
    isSectionItemsChecked,
    getSectionItemsCheckedCount,
    getAllSectionItemsCheckedCount,
    getAllSectionItemsHiddenCount,
    showAllSectionItems,
    showSectionItems,
    showSectionItem
  } = useSections();

  return (
    <Fragment>
      <Title variant="h2" align="center">
        {translate("Cachés")} ({getAllSectionItemsCheckedCount(hiddenSections)}/{getAllSectionItemsHiddenCount(hiddenSections)})
      </Title>
      <Button onClick={withVibration(showAllSectionItems)} disabled={getAllSectionItemsHiddenCount(hiddenSections) === 0}>
        {translate("Tout afficher")}
      </Button>
      {hiddenSections.length === 0 ? (
        <Fragment>
          <Title variant="h2" align="center">
            {translate("Aucun éléments cachés")}
          </Title>
          <Link to={Page.Home}>
            <Text underlined>
              {translate("Vérifier ma liste")}
            </Text>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          {hiddenSections.map(section => (
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
                  <IconReveal onClick={withVibration(showSectionItems(section.title))} />
                </ListItem>
                {section.items.map(item => (
                  <ListItem key={item.title}>
                    <input id={item.title} onChange={withVibration(toggleSectionItem(section.title, item.title))} type="checkbox" checked={item.checked} />
                    <label htmlFor={item.title} style={{ flex: 1, cursor: "pointer" }}>
                      <Text style={{ cursor: "pointer" }}>
                        {translate(item.title)}
                      </Text>
                    </label>
                    <IconReveal onClick={withVibration(showSectionItem(section.title, item.title))} />
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

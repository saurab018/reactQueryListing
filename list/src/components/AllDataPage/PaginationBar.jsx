import { AddClick, SubClick } from "../../functions/fetchFunctions";

function PaginationBar({
  peoplePage,
  setPeoplePage,
  planetsPage,
  setPlanetsPage,
  list,
}) {
  console.log("peo", peoplePage, "pla", planetsPage);
  return (
    <>
      <button
        disabled={(peoplePage || planetsPage) == 1 ? true : false}
        onClick={() => {
          setPlanetsPage(SubClick(planetsPage, peoplePage));
          setPeoplePage(SubClick(peoplePage, planetsPage));
        }}
        style={{ margin: "2em", paddingLeft: "1em", paddingRight: "1em" }}
      >
        previous
      </button>
      <div style={{ margin: "2em", paddingLeft: "1em", paddingRight: "1em" }}>
        Page No. {peoplePage >= planetsPage ? peoplePage : planetsPage}
      </div>
      <button
        onClick={() => {
          setPeoplePage(AddClick(peoplePage, list[0].data.count));
          setPlanetsPage(AddClick(planetsPage, list[1].data.count));
        }}
        style={{ margin: "2em", paddingLeft: "1em", paddingRight: "1em" }}
      >
        next
      </button>
    </>
  );
}

export default PaginationBar;

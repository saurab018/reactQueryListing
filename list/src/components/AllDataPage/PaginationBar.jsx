import { buttonClick } from "../../functions/fetchFunctions";

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
          setPeoplePage(buttonClick(peoplePage, list[0].data.count, "sub"));
          setPlanetsPage(buttonClick(planetsPage, list[1].data.count, "sub"));
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
          setPlanetsPage(buttonClick(planetsPage, list[1].data.count, "add"));
          setPeoplePage(buttonClick(peoplePage, list[0].data.count, "add"));
        }}
        style={{ margin: "2em", paddingLeft: "1em", paddingRight: "1em" }}
      >
        next
      </button>
    </>
  );
}

export default PaginationBar;

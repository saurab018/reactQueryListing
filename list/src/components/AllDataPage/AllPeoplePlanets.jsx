import React, { useEffect, useState } from "react";
import { fetchItems } from "../../functions/fetchFunctions";
import { useQueries } from "@tanstack/react-query";
import ItemsCard from "./ItemsCard";
import PaginationBar from "./PaginationBar";

function AllPeoplePlanets() {
  const [peoplePage, setPeoplePage] = useState(1);
  const [planetsPage, setPlanetsPage] = useState(1);
  const list = useQueries({
    queries: [
      {
        queryKey: ["people", peoplePage],
        queryFn: () => fetchItems("people", peoplePage),
        staleTime: Infinity,
        keepPreviousData: true,
      },
      {
        queryKey: ["planets", planetsPage],
        queryFn: () => fetchItems("planets", planetsPage),
        staleTime: Infinity,
        keepPreviousData: true,
      },
    ],
  });

  console.log("list  ", list);
  // list && list[0].data.count > page * 10
  // ? page
  // : Math.ceil(data.count / 10),

  //  if (listPeople.isError) return <pre>{JSON.stringify(listPeople.error)}</pre>;
  return (
    <>
      {list[0].isLoading || list[1].isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {list[0].isPreviousData && list[1].isPreviousData && (
            <div>Loading...</div>
          )}
          <ItemsCard list={list} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PaginationBar
              setPeoplePage={setPeoplePage}
              peoplePage={peoplePage}
              setPlanetsPage={setPlanetsPage}
              planetsPage={planetsPage}
              list={list}
            />
          </div>
        </>
      )}
    </>
  );
}

export default AllPeoplePlanets;

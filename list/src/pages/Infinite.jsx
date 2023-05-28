import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchItem, fetchItemsInfinity } from "../functions/fetchFunctions";
import { useState } from "react";

function Infinite() {
  const queryClient = useQueryClient();
  const [category] = useState("people");
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["people", "infinite"],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => fetchItemsInfinity("people", pageParam),
      //   staleTime: Infinity,
    });

  function onHoverOneLink(id) {
    queryClient.prefetchQuery({
      queryKey: ["people", id],
      queryFn: () => fetchItem(id),
    });
  }

  return (
    <>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2em",
          }}
        >
          <div>
            {data.pages
              ?.flatMap((obj) => obj.lists.results)
              .map((item) => (
                <Link
                  key={item.url}
                  to={`/${category}/${Number(item.url.match(/\d+/)[0])}`}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() =>
                      onHoverOneLink(Number(item.url.match(/\d+/)[0]))
                    }
                  >
                    <strong>{item.name}</strong>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
      <button
        disabled={hasNextPage ? false : true}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "next"}
      </button>
    </>
  );
}

export default Infinite;

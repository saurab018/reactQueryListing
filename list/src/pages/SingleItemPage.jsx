import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../functions/fetchFunctions";

function SingleItemPage() {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["people", Number(params.id)],
    queryFn: () => fetchItem(params.id),
    staleTime: Infinity,
    // cacheTime: Infinity,
  });
  console.log("people", params.id);
  return (
    <div style={{ marginTop: "2em" }}>
      {
        // isLoading ? (
        //   <div>Loading...</div>
        // ) : (
        <div>
          <h1>
            <strong>{data?.name}</strong>
          </h1>
          <h4>
            <strong>{data?.hair_color}</strong>
          </h4>
        </div>
        // )
      }
    </div>
  );
}

export default SingleItemPage;

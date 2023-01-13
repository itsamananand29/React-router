import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
export const User = (props) => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("type"));
  return (
    <>
      <h2>
        User {params.userId} {searchParams.get("name")}
      </h2>
      <button onClick={() => setSearchParams({ name: "test", type: "normal" })}>
        SetSearch
      </button>
    </>
  );
};

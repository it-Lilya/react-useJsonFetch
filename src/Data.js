import React from "react";
import useJsonFetch from "./hook";

export function Data({ option, title }) {
  const [data, error, loading] = useJsonFetch(
    `http://localhost:7070/${option}`
  );

  return (
    <div>
      <p>
        {title}:{" "}
        {(loading && "Загрузка...") ||
          (data && data.status) ||
          (error && "Internal Error!")}
      </p>
    </div>
  );
}
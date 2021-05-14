import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import postApi from "../../api/postApi";

DetailPage.propTypes = {};

function DetailPage(props) {
  const params = useRouteMatch();

  const [loading, setLoading] = useState(false);

  const [detail, setDetail] = useState({});

  // side Effect
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await postApi.getById(params.id);
        console.log("data detail", params.id);
        setDetail(data);
        console.log("data detail", data);
      } catch (error) {
        console.log("Failed to fetch to get params.id data", error);
      }

      setLoading(false);
    })();
  }, [params.id]);

  return (
    <div>
      {detail.map((d) => (
        <div key={d.id}></div>
      ))}
    </div>
  );
}

export default DetailPage;

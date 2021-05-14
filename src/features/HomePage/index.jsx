import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadPostStart } from "../../actions";

HomePage.propTypes = {};

function HomePage(props) {
  const dispatch = useDispatch();

  const fetchPost = () => {
    dispatch(loadPostStart());
  };
  const state = useSelector((state) => ({ ...state.post }));

  useEffect(() => {
    (async () => {
      try {
        await fetchPost();
      } catch (error) {
        console.log("Failed to fetch to post data", error);
      }
    })();
  }, []);

  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-between"
        style={{ margin: "10px 20px" }}
      >
        {state.posts.map((post) => (
          <Col className="gutter-row" xs={24} lg={6} key={post.id}>
            <Link to={`/posts/${post.id}/comments`}>
              <Card
                title={post.title}
                style={{
                  height: "200px",
                  textAlign: "center",
                  margin: "20px 10px",
                }}
              >
                <p>{post.body}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePage;

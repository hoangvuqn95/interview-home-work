import { Layout } from "antd";
import Search from "antd/lib/transfer/search";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm } from "../../actions";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  const { Header } = Layout;

  return (
    <div>
      <Header className="header" type="primary">
        <p className="logo">HOANG VU</p>

        <div className="search">
          <Search
            placeholder="Search"
            allowClear
            enterButton="Search"
            size="large"
          />
        </div>
      </Header>
    </div>
  );
}

export default Header;

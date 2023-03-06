import React from "react";
import { Button, Layout, Menu } from "antd";
import logo from "./logo.svg";

import "antd/dist/reset.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const App = () => (
  <>
    <NavBar />

    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
          </div>
        }
      ></Route>
    </Routes>
  </>
);

export default App;

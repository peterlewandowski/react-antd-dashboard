import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Drawer, Menu } from "antd";

const headerStyle = {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  height: "100vh",
  backgroundColor: "#7dbcea",
};

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  //   const onClick = (e) => {
  //     console.log("click ", e);
  //     setCurrent(e.key);
  //   };

  return (
    <header style={headerStyle}>
      <div
        style={{
          backgroundColor: "darkorange",
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <span className="headerMenu">
        <img src={logo} className="App-logo" alt="logo" />
        <AppMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        bodyStyle={{
          backgroundColor: "darkorange",
          color: "white",
          fontSize: 24,
          border: "none",
        }}
      >
        <AppMenu isInline />
      </Drawer>
    </header>
  );
}

function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "darkorange",
        color: "white",
        fontSize: 24,
        border: "none",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={items}
    />
  );
}

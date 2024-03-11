import React, { FC } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AddOutlined,
  ArrowDownwardOutlined,
  EditOutlined,
  ListOutlined,
  LoginOutlined,
  LogoutOutlined,
  PersonAddAlt1Outlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Header: FC = () => {
  return (
    <div
      id="Container"
      className="w-full bg-gradient-to-r from-violet-300 via-purple-300 to-violet-50 z-50 fixed right-0 top-0 backdrop-blur-sm shadow-md py-5 
      px-8 flex place-content-between"
    >
      <h1 className="font-bold text-2xl md:text-4xl text-white place-self-center">
        <a
          target="_self"
          rel="noopener noreferrer"
          href="/"
          className="no-underline max-w-screen-desktop"
          id="Container-title"
        >
          🍇 Vita Del Vino
        </a>
      </h1>

      <div className="flex text-sm md:text-lg items-center justify-start md:justify-end gap-5 text-slate-600 ">
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 border-2 rounded-lg border-white">
            <PersonOutlined /> username
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/add/newReport">
                <AddOutlined /> Add a report on map
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/new">
                <AddOutlined /> Add New Item
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a
                target="_self"
                rel="noopener noreferrer"
                href="/role/edit/vineyard"
              >
                <EditOutlined /> Edit Vineyard
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                target="_self"
                rel="noopener noreferrer"
                href="/role/edit/area"
              >
                <EditOutlined /> Edit Area
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/areas">
                <ListOutlined /> List Areas
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                target="_self"
                rel="noopener noreferrer"
                href="/role/list/vineyard"
              >
                <ListOutlined /> List Vineyards
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                target="_self"
                rel="noopener noreferrer"
                href="/users/listReports"
              >
                <ListOutlined /> List Reports
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/login">
                <LoginOutlined /> Log In
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/logout">
                <LogoutOutlined /> Log Out
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/signup">
                <PersonAddAlt1Outlined /> Sign Up
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a target="_self" rel="noopener noreferrer" href="/users/info">
                <SettingsOutlined /> User Setting
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Header;

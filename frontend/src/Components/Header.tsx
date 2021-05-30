import * as React from "react";
import HeaderText from "./utilities/HeaderText";
import HeaderWrapper from "./utilities/HeaderWrapper";
import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger.svg";
import cartIcon from "../assets/images/icon-cart.svg";

export interface Header {}

export default class App extends React.Component<Header> {
  public render() {
    return (
      <HeaderWrapper>
        <img src={hamburgerMenu}></img>
        <HeaderText>
          <img src={logo}></img>
        </HeaderText>
        <img src={cartIcon}></img>
      </HeaderWrapper>
    );
  }
}

import * as React from "react";
import FooterHeaderImage from "../Components/utilities/FooterImage";
import HeaderH2 from "./utilities/HeaderH2";
import HeaderWrapper from "./utilities/HeaderWrapper";
import Wrapper from "./utilities/Wrapper";
import logo from "../assets/images/logo.svg";
import Ul from "./utilities/Ul";
import Li from "./utilities/Li";
import FooterWrapper from "./utilities/FooterWrapper";
import FooterText from "./utilities/FooterText";
import FooterCopyRight from "./utilities/FooterCopyRight";
import FooterSocialIcons from "./utilities/FooterSocialIcons";
import facebookIcon from "../assets/images/socialMediaIcons/facebook.svg";
import instagramIcon from "../assets/images/socialMediaIcons/instagram.svg";
import twitterIcon from "../assets/images/socialMediaIcons/twitter.svg";

export interface Footer {}

export default class App extends React.Component<Footer> {
  public render() {
    return (
      <div>
        <Wrapper>
          <FooterHeaderImage></FooterHeaderImage>
          <HeaderH2>BRINGING YOU THE BEST AUDIO GEAR</HeaderH2>
          <div>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </div>
        </Wrapper>
        <FooterWrapper>
          <img src={logo}></img>
          <Ul>
            <Li>HOME</Li>
            <Li>HEADPHONES</Li>
            <Li>SPEAKERS</Li>
            <Li>EARPHONES</Li>
          </Ul>
          <FooterText>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterText>
          <FooterCopyRight>Copyright 2021. All Rights Reserved</FooterCopyRight>
          <FooterSocialIcons>
            <img src={facebookIcon}></img>
            <img src={twitterIcon}></img>
            <img src={instagramIcon}></img>
          </FooterSocialIcons>
        </FooterWrapper>
      </div>
    );
  }
}

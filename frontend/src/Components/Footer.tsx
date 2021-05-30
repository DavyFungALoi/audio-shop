import * as React from "react";
import FooterHeaderImage from "../Components/utilities/FooterImage";
import Wrapper from "./utilities/Wrapper";

export interface Footer {}

export default class App extends React.Component<Footer> {
  public render() {
    return (
      <div>
        <Wrapper>
          <FooterHeaderImage></FooterHeaderImage>
        </Wrapper>
        Footer
      </div>
    );
  }
}

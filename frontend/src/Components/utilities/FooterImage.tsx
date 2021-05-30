import styled from "styled-components";
import imagebestgear from "../../assets/images/image-best-gear.jpg";

const FooterHeaderImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

FooterHeaderImage.defaultProps = {
  src: imagebestgear,
};

export default FooterHeaderImage;

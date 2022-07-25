import NextImage from "next/image";
import { chakra, ImageProps } from "@chakra-ui/react";

const Img = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

export default Img;

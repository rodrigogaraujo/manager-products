import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')
// matrics for rotation of phones
const matrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width > height ? height : width,
  width,
  height,
}

export default matrics
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding-top: ${getStatusBarHeight()};
`;

export const FabButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${({theme}) => 20 * theme.RATIOWIDTH}px;
  right: ${({theme}) => 20 * theme.RATIOWIDTH}px;
  width: ${({theme}) => 60 * theme.RATIOWIDTH}px;
  height: ${({theme}) => 60 * theme.RATIOWIDTH}px;
  border-radius: ${({theme}) => 30 * theme.RATIOWIDTH}px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const IconStyled = styled(Icon)`
  
`;

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

interface IText {
  color?: 'GRAY_01' | 'GRAY_02' | 'GRAY_03' | 'GRAY_04' | 'GRAY_05' | 'GRAY_06' | 'GRAY_07'
  align?: 'center' | 'left' | 'right'
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding-top: ${getStatusBarHeight()};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<IText>`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: ${({theme}) => theme.FONTSSIZE.font14};
  color: ${({theme, color}) => theme.COLORS[color || 'GRAY_01']};
`;
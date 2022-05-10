import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

interface IText {
  color?: 'GRAY_01' | 'GRAY_02' | 'GRAY_03' | 'GRAY_04' | 'GRAY_05' | 'GRAY_06' | 'GRAY_07' | 'PRIMARY'
  align?: 'center' | 'left' | 'right'
  bold?: boolean
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
  font-family: ${({theme, bold}) => bold ? theme.FONTS.SEMI_BOLD : theme.FONTS.REGULAR};
  font-size: ${({theme}) => theme.FONTSSIZE.font14};
  color: ${({theme, color}) => theme.COLORS[color || 'GRAY_01']};
`;

export const Title = styled.Text<IText>`
  font-family: ${({theme, bold}) => bold ? theme.FONTS.BOLD : theme.FONTS.REGULAR};
  font-size: ${({theme}) => theme.FONTSSIZE.font18};
  color: ${({theme, color}) => theme.COLORS[color || 'GRAY_01']};
`;

export const LabelWithMarginTop = styled.Text<IText>`
  font-family: ${({theme, bold}) => bold ? theme.FONTS.SEMI_BOLD : theme.FONTS.REGULAR};
  font-size: ${({theme}) => theme.FONTSSIZE.font14};
  color: ${({theme, color}) => theme.COLORS[color || 'GRAY_01']};
  margin-top: 32px;
`;

export const RowBetwenn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

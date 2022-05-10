import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

type IconProps = { type: 'error' | 'success' }

export const Container = styled.View`
  width: 100%;
  height: 56px;
  padding: 16px 0;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_05};
  border-bottom-width: 1px;
`;

export const TextInputStyled =  styled(TextInput).attrs(({theme}) => {
  placeholderTextColor: theme.COLORS.GRAY_04
})`
  flex: 1;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY_01};
  font-size: ${({ theme }) => theme.FONTSSIZE.font14};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;
`;

export const IconStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.COLORS.SUCCESS_900 : theme.COLORS.ALERT_900 }))`
  position: absolute;
  right: 0px;
  top: ${56 / 3}px;
`;

export const IconPasswordStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.COLORS.SUCCESS_900 : theme.COLORS.ALERT_900 }))`
  position: absolute;
  right: 30px;
  top: ${56 / 3}px;
`;

export const IconStyledRelative = styled(Icon).attrs(({ theme }) => ({ color: theme.COLORS.GRAY_04 }))``;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  top: ${56 / 3}px;
`;

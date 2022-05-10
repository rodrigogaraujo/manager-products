import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

interface ButtonProps {
  selected?: boolean
}

export const BodyText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_01};
  font-size: 20px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  text-align: center;
  margin: 8px 0;
`;

export const BackText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-decoration: underline;
  align-self: center;
`;

export const IconCloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 32px;
  top: 24px;
`;

export const IconStyled = styled(Icon).attrs(({ theme }) => 
({ color: theme.COLORS.GRAY_01 }))`
`;

export const ButtonsWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;
`;

export const ButtonItem = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({theme, selected}) => selected ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND};
  padding: 8px;
  border-radius: 8px;
  border-width: ${({selected}) => selected ? 0 : 1}px;
  margin-bottom: 14px;
  border-color: ${({theme, selected}) => selected ? theme.COLORS.BACKGROUND : theme.COLORS.PRIMARY};
`;

export const ButtonItemText = styled.Text<ButtonProps>`
  color: ${({theme, selected}) => selected ? theme.COLORS.TITLE : theme.COLORS.PRIMARY};
  font-size: 14px;
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
`;

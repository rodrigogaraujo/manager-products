import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  min-width: ${({theme}) => 150 * theme.RATIOWIDTH}px;
  height: ${({theme}) => 120 * theme.RATIOHEIGHT}px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  width: 100%;
  color: ${({theme}) => theme.COLORS.GRAY_07};
  font-size:${({theme}) => theme.FONTSSIZE.font16};
  font-family: ${({theme}) => theme.FONTS.SEMI_BOLD};
  text-align: center;
`;

import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  onPre?: () => void;
};

export function Button({ title, type = "PRIMARY", onPre, ...rest }: Props) {
  return (
    <Container type={type} onPress={onPre} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

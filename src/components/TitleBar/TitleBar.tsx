import Container from "../Container/Container";

type TitleBarProps = {
  children?: string;
};

export default function TitleBar(props: TitleBarProps) {
  return <Container>{props.children || "TitleBar"}</Container>;
}

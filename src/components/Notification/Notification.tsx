type Props = {
  message: string;
};

export default function Notification({ message }: Props) {
  return <div>{message}</div>;
}

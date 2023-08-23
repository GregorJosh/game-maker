type Props = {
  message?: string;
  children?: string;
};

export default function Notification({ message, children }: Props) {
  return <div>{message || children}</div>;
}

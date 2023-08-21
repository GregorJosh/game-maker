import "./Button.scss";

type Props = {
  children: string;
  type?: "button" | "submit";
  handler?: () => void;
  value?: string;
};

export default function Button(props: Props) {
  const {
    children: label,
    type = "button",
    handler = undefined,
    value = "",
  } = props;

  return (
    <button className="button" type={type} onClick={handler} data-value={value}>
      {label}
    </button>
  );
}

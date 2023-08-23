import { ReactNode, ReactEventHandler } from "react";

import "./Form.scss";

type FormProps = {
  children: ReactNode;
  submitHandler: ReactEventHandler<HTMLFormElement>;
};

export default function Form(props: FormProps) {
  const { children, submitHandler } = props;

  return (
    <form className="form" onSubmit={submitHandler}>
      {children}
    </form>
  );
}

import { ReactElement, ReactEventHandler } from "react";

import "./Form.scss";

import Button from "components/Button/Button";

type FormProps = {
  children: ReactElement[] | ReactElement;
  submitHandler: ReactEventHandler<HTMLFormElement>;
  submitBtnLabel?: string;
};

export default function Form(props: FormProps) {
  const { children, submitHandler, submitBtnLabel } = props;

  return (
    <form className="form" onSubmit={submitHandler}>
      {children}
      {submitBtnLabel && <Button type="submit">{submitBtnLabel}</Button>}
    </form>
  );
}

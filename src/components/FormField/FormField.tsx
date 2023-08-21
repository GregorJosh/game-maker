import { ReactElement } from 'react';

import './FormField.scss';

type Props = {
  label: string,
  children: ReactElement,
  vertical?: boolean
}

export default function FormField(props: Props) {
  const { label, children, vertical = false } = props;

  return (
    <div className={vertical ? 'vertical' : 'form-field'}>
      <label htmlFor={children.props.name}>{label}</label>
      {children}
    </div>
  );
}

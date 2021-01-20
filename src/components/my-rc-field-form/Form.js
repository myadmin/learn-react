import React from 'react';
import FieldContext from './FieldContext';
import useForm from './index';

const Form = ({ children, onFinish, onFinishFailed }) => {
  const [formInstance] = useForm();

  formInstance.setCallback({
    onFinish,
    onFinishFailed,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;

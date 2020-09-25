import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

function InputBox({label, password, error}) {

  const errorMessage = error ? (<span className='input__error'>{error}</span>) : null;

  return (
    <div className='input__container'>
      <Label>{label}</Label>
      <Input password={password}/>
      {errorMessage}
    </div>
  );
}

export default InputBox;

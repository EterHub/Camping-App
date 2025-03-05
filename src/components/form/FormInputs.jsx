import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormInputs = ({ register,name,type,placeholder }) => {
  return (
    <div>
      <Label>{name}</Label>
      <Input 
      {...register(name)} 
      type={type}
      placeholder={placeholder} />
    </div>
  );
};

export default FormInputs;

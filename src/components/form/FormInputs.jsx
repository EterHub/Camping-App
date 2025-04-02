import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormInputs = ({ register, name, type, placeholder }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Input {...register(name)} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInputs;

import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({ register, name, type, placeholder }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Textarea {...register(name)} 
        rows={5}
      type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextAreaInput;

import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";

const Camping = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data)=>{
    console.log("this is data ",data)
  }

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-8">create camping</h1>
      <div className="border p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="title..."
            />
            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
            />
            <TextAreaInput
              register={register}
              name="description"
              type="texxt"
              placeholder="Input your description"
            />
          </div>
          <div className="flex justify-center">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;

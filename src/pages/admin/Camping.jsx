import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";

const Camping = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors } = formState;
  console.log("this is errors", errors);

  const onSubmit = (data) => {
    console.log("this is data ", data);
  };

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
              errors={errors}
            />
            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
              errors={errors}
            />
            <TextAreaInput
              register={register}
              name="description"
              type="texxt"
              placeholder="Input your description"
              errors={errors}
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

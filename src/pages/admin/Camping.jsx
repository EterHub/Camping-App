import FormInputs from "@/components/form/FormInputs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";

const Camping = () => {
  const { register, handleSubmit } = useForm();

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-8">create camping</h1>
      <div className="border p-8">
        <form onSubmit={handleSubmit()}>
          <FormInputs register={register} name='title' type='text' placeholder='title...'/>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Input {...register("price")} type="number" placeholder="price" />
            <Input
              {...register("description")}
              type="text"
              placeholder="description"
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;

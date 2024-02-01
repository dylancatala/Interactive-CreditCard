import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    cardHolder: yup.string().required(),
    cardNumbers: yup.number().max(16).required(),
    cardMonths: yup.number().max(2).required(),
    cardYears: yup.number().max(2).required(),
    cardCvc: yup.number().min(3).max(3).required(),
  })
  .required();

const Form = ({ onChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  const [holder, setHolder] = useState("");
  const holderChange = (event) => {
    setHolder(event.target.value);
  };

  const [numsCard, setNumsCard] = useState("");
  const numsCardChange = (event) => {
    setNumsCard(event.target.value);
  };

  const [dateMonths, setDateMonths] = useState("");
  const monthDate = (event) => {
    setDateMonths(event.target.value);
  };

  const [dateYears, setDateYears] = useState("");
  const yearsDate = (event) => {
    setDateYears(event.target.value);
  };

  const [cvcCard, setCvcCard] = useState("");
  const cardCvc = (event) => {
    setCvcCard(event.target.value);
  };

  useEffect(() => {
    onChange(holder, numsCard, dateMonths, dateYears, cvcCard);
  }, [holder, numsCard, dateMonths, dateYears, cvcCard]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <label className="text-[#23092E] font-semibold text-sm tracking-[0.2em]">
        CARDHOLDER NAME
      </label>
      <input
        placeholder="e.g. Jane Appleseed"
        {...register("cardHolder", { required: true })}
        onChange={holderChange}
        value={holder}
        className="border border-gray-300 font-medium rounded-lg px-3 py-3"
      />
      <p>{errors.cardHolder?.message}</p>
      <label className="text-[#23092E] font-semibold text-sm tracking-[0.2em]">
        CARD NUMBER
      </label>
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        {...register("cardNumbers", { required: true })}
        onChange={numsCardChange}
        value={numsCard}
        className="border border-gray-300 font-medium rounded-lg px-3 py-3"
      />
      <p>{errors.cardNumbers?.message}</p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <label className="text-[#23092E] font-semibold text-sm tracking-[0.2em]">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-x-1">
            <div>
              <input
                placeholder="MM"
                {...register("cardMonths", { required: true })}
                onChange={monthDate}
                value={dateMonths}
                className="border border-gray-300 font-medium rounded-lg px-3 py-3 w-24"
              />
              <p>{errors.cardMonths?.message}</p>
            </div>
            <div>
              <input
                placeholder="YY"
                {...register("cardYears", { required: true })}
                onChange={yearsDate}
                value={dateYears}
                className="border border-gray-300 font-medium rounded-lg px-3 py-3 w-24"
              />
              <p>{errors.cardYears?.message}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="text-[#23092E] font-semibold text-sm tracking-[0.2em]">
            CVC
          </label>
          <div className="flex">
            <div>
              <input
                placeholder="e.g. 123"
                {...register("cardCvc", { required: true })}
                onChange={cardCvc}
                value={cvcCard}
                className="border border-gray-300 font-medium rounded-lg px-3 py-3 w-full"
              />
              <p>{errors.cardCvc?.message}</p>
            </div>
          </div>
        </div>
      </div>
      <input
        type="submit"
        className="bg-[#23092E] text-white font-semibold rounded-lg py-4"
      />
    </form>
  );
};

export default Form;

import Typography from "@/components/Typography";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { IoCaretBackCircleOutline } from "react-icons/io5"

const BankList = [
  { value: 'OVO', icon: "/images/ovo.svg"},
  { value: 'GO-PAY', icon: "/images/gopay.svg"},
  { value: 'Mandiri', icon: "/images/mandiri.svg"},
  { value: 'BRI', icon: "/images/bri.svg"},
  { value: 'BSI', icon: "/images/bsi.svg"},
  { value: 'BCA', icon: "/images/bca.svg"}
];

interface PopUpBankProp {
  isOpen: boolean;
  onClose: () => void;
}

function PopUpBank({ isOpen, onClose } : PopUpBankProp){
  if (!isOpen) return null;

  const {
    register,
    formState: { errors },
  } = useFormContext();


  const [selected, setSelected] = useState('null');
  const handleRadio = ( event : ChangeEvent<HTMLInputElement>) => {
    console.log("Selected value: ", event.target.value); // Check the value being selected
    console.log("Selected state: ", selected); // Check the value being assigned to state
    console.log("Selected value2: ", event.target.value); // Check the value being selected
    setSelected(event.target.value);
  }

  return(
    <div className="
    w-screen h-screen
    fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300
    z-40 p-auto">
      <div className=" bg-primary-500 opacity-50 w-full h-full"></div>
      <div className="layout fixed top-14 left-10 right-10 bg-primary-500 w-max h-max p-6 rounded-xl lg:left-1/4 lg:right-1/4">
        <div className="flex flex-row w-[20rem] mx-auto">
          <button onClick={onClose} className='text-2xl'>
            <IoCaretBackCircleOutline/>
          </button>
          <Typography sizeVariant='c3' colorVariant='primary' className="font-bold text-center mx-auto">
            Pilih Metode Pembayaran
          </Typography>
        </div>
        {BankList.map(({ value, icon }) => (
          <div 
            key={value} 
            style={ selected === value ? { outline: '2px solid' } : { outline: '2px solid transparent' } }
            className="flex flex-row bg-primary-200 m-3 rounded-xl shadow-xl px-3 py-2 min-w-[20rem] hover:shadow-2xl"
          >
            <div className="min-w-40 px-auto">
              <Image 
                src={icon} 
                alt={value} 
                width={70} 
                height={40} 
                className="w-20 h-10"
              />
            </div>
            <input
              {...register("nama_bank")}
              type="radio"
              id={value}
              name="nama_bank"
              value={value}
              checked={selected == value}
              onChange={handleRadio}
              className='absolute -top-1/2 cursor-pointer -x'
            />
            <label htmlFor={value} className='w-full h-full cursor-pointer ml-3 my-auto'>
              <Typography sizeVariant='c3' colorVariant='primary'>
                {value}
              </Typography>
            </label>
          </div>
        ))}
        <div className='flex justify-center'>
            <button type="submit" className='w-25 rounded-xl bg-secondary-100 py-3 px-5 mt-5'>
              <Typography sizeVariant='c4' colorVariant='secondary'>
                Lanjut
              </Typography>
            </button>
          </div>
      </div>
    </div>
  );
}

export default PopUpBank
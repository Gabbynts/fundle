import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import { RiHandHeartLine } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import ButtonLink from "@/components/buttons/ButtonLink";

function Withdrawal(){
  return(
    <Layout>
      <Seo />
        <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
        <main className="layout w-2/3 p-20 my-14 bg-primary-200 rounded-xl">
          <div className="bg-primary-500 rounded-xl">
            <Image
              src='/images/dummy-poster.svg' //Foto_Event
              alt='Poster Image'
              width={640}
              height={480}
              className='w-full h-40 object-cover rounded-xl'
            />
            <Typography
              sizeVariant='h4'
              colorVariant='primary'
              className='text-wrap my-5 font-bold text-center'
            >
              Save Malta Children From Hunger
            </Typography>
            <Typography
              sizeVariant='c3'
              colorVariant='primary'
              className='opacity-50 font-bold text-center'
            >
              Jumlah Donasi Terkumpul
            </Typography>
            <div className="flex flex-row justify-center flex-wrap">
              {/* Jumlah_Donasi */}
              <Typography
                sizeVariant='h6'
                colorVariant='tertiary'
                className='font-bold'
              >
                Rp. 1000000000
              </Typography>
              {/* Target_Donasi */}
              <Typography sizeVariant='c3' colorVariant='primary' className='opacity-50 font-bold mt-auto'>
                 /Rp. 1000000000000
              </Typography>
            </div>
            <div className='flex flex-row justify-center py-5 flex-wrap'>
              <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
                <div className='my-auto text-3xl text-primary-100'>
                  <RiHandHeartLine />
                </div>
                <div className='my-auto'>
                  {/* Jumlah_Donatur */}
                  <Typography
                    sizeVariant='c1'
                    colorVariant='primary'
                    className=''
                  >
                    4517
                  </Typography>
                  <Typography
                    sizeVariant='c3'
                    colorVariant='primary'
                    className=''
                  >
                    Donasi
                  </Typography>
                </div>
              </div>
              <div className='mx-2 flex min-w-[10rem] flex-row justify-center gap-x-5 rounded-xl bg-primary-500 font-semibold shadow-xl transition duration-500 hover:scale-110'>
                <div className='my-auto text-3xl text-primary-100'>
                  <BiTimeFive />
                </div>
                <div className='my-auto'>
                  {/* Sisa_hari -> integer*/}
                  <Typography
                    sizeVariant='c1'
                    colorVariant='primary'
                    className=''
                  >
                    12 Hari
                  </Typography>
                  <Typography
                    sizeVariant='c3'
                    colorVariant='primary'
                    className=''
                  >
                    Tersisa
                  </Typography>
                </div>
              </div>
            </div>
            <div className="py-5">
              <ButtonLink
                href='/'
                className='mx-auto w-max py-4 px-5 text-2xl font-extrabold hover:bg-secondary-100/60'
              >
                Tarik dana sekarang
              </ButtonLink>
            </div>
          </div>
        </main>
    </Layout>
  );
}

export default Withdrawal
import { floor } from 'lodash';
import React, { useEffect, useState } from 'react';

import ButtonLink from '@/components/buttons/ButtonLink';
import Layout from '@/components/layout/Layout';
import ProgressBar from '@/components/progressbars/progressBar';
import Seo from '@/components/Seo';
import Typography from '@/components/Typography';

import { listDonatur } from '@/constant/listDonatur';
import UpperPart from '@/components/upperDetailDonation/upperPart';
import { DataType, getEventData } from '@/pages/api/event';
import { useRouter } from 'next/router';

function detailDonation() {
  const router = useRouter();
  const { id } = router.query;
  const [donation, setDonation] = useState<DataType>();

  useEffect(() => {
    const fetchEventData = async () => {
      if (typeof id === "string"){
        const data = await getEventData((id));
        //console.log(data.data);
        setDonation(data.data);
      } 
    };
    fetchEventData();
  }, [id])

  let data = 0
  if (typeof donation?.jumlah_donasi === "number" && typeof donation?.max_donasi === "number"){  
    data = floor(( donation?.jumlah_donasi/donation?.max_donasi) * 100);
  }

  return (
    <Layout>
      <Seo />
      <div className='absolute top-0 min-h-[96px] w-full bg-primary-100 lg:min-h-[72px]'></div>
      <main className='layout mt-14 rounded-2xl bg-primary-200 px-20 pt-20 pb-10'>
        <UpperPart 
          namaEvent={donation?.judul_event ? donation?.judul_event : ""}
          fotoEvent={donation?.foto_event && donation.foto_event != "https://example.com/foto.jpg" ? donation?.judul_event : "/images/dummy-poster.svg"}
          jumlahDonasi={donation?.jumlah_donasi ? donation?.jumlah_donasi : 0} 
          targetDonasi={donation?.max_donasi ? donation?.jumlah_donasi : 0} 
          sisaHari={12} 
          jumlahDonatur={4517} 
        />

        {/* Bar progress uang */}
        <div className='my-6 h-2 w-full'>
          <ProgressBar progress={data} />
        </div>

        <div className='rounded-xl bg-primary-500 p-5 transition duration-500 hover:scale-105'>
          {/* Deskripsi Donasi */}
          <Typography
            sizeVariant='h4'
            colorVariant='primary'
            className='font-bold'
          >
            Tentang Donasi
          </Typography>
          <Typography
            sizeVariant='c4'
            colorVariant='primary'
            className='mt-2 text-justify'
          >
            {donation?.deskripsi_event}
          </Typography>
        </div>

        <div className='mt-6 rounded-xl bg-primary-500 p-10'>
          <Typography
            sizeVariant='h6'
            colorVariant='primary'
            className='font-bold'
          >
            Donasi
          </Typography>
          {listDonatur.map(({ id, name, money }) => (
            <div
              key={id}
              className='my-3 rounded-xl bg-primary-200 p-5 shadow-xl'
            >
              <Typography
                sizeVariant='c1'
                colorVariant='primary'
                className='font-bold'
              >
                {name}
              </Typography>
              <Typography sizeVariant='c2' colorVariant='primary'>
                Berhasil melakukan donasi sebesar Rp{money}
              </Typography>
            </div>
          ))}
        </div>

        <ButtonLink
          href='/'
          className='mx-auto mt-10 w-max py-4 px-5 text-2xl font-extrabold hover:bg-secondary-100/60'
        >
          Donasi Sekarang
        </ButtonLink>
      </main>
    </Layout>
  );
}

export default detailDonation;

import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

const User = () => {
  return (
    <div>
      <div className='lg:-top-m20 relative -top-24 z-0 flex h-[80vh] items-center justify-center bg-primary-100'>
        <div className='absolute top-[30vh] left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
          <Image
            src='/images/profile_img.png'
            alt='profile'
            width={130}
            height={130}
          />
        </div>
        <div>
          <Typography
            sizeVariant='h4'
            colorVariant='secondary'
            className='pt-[80px] font-semibold leading-tight'
          >
            M. Naufal Badrutammam
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='secondary'
            className='pt-[10px] text-center font-normal leading-tight'
          >
            Lorem Ipsum is simply dummy text of the printing
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default User;
import React from "react";

const Footer = () => {
  return (
    <div className='bg-slate-800 text-gray-400  py-2 px-4'>
      <div className='uppercase text-sm border-b-[1px] border-gray-400 py-2'>
        <p>formas de pago</p>
        <p>cambios y devoluciones</p>
        <p>asistencia al cliente</p>
      </div>
      <div className='py-2 border-b-[1px] border-gray-400'>
        <h2 className='uppercase text-sm'>Acerca de Nosotros</h2>
        <p className='text-sm py-1'>Contacto</p>
        <p className='text-sm'>Sucursales</p>
      </div>
      <div className='flex py-2 gap-3 border-b-[1px] border-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-facebook'
          width='30'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.2'
          stroke='#9ca3af'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-instagram'
          width='30'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.2'
          stroke='#9ca3af'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <rect x='4' y='4' width='16' height='16' rx='4' />
          <circle cx='12' cy='12' r='3' />
          <line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-twitter'
          width='30'
          height='44'
          viewBox='0 0 24 24'
          strokeWidth='1.2'
          stroke='#9ca3af'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
        </svg>
      </div>
      <div className='pt-2 text-sm'>
        <p className='uppercase'>
          powered by: <span className='normal-case'>Vera Nahuel | 2022</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

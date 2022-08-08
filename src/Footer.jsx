import React from 'react'

const Footer = () => {
  return (
    <div><h1 className='text-lg font-semibold'>Hallo, Terimakasih Sudah Berkunjung ! </h1>
        <p className='text-sm'>Hai perkenalkan nama saya <strong>Tegar Deyustian</strong> terimakasih sudah berkunjung ke salah satu project saya, saya sadar
            bahwasannya masih banyak kekurangan untuk To Do App sederhana yang saya buat ini, namun jika kalian merasa
            ingin berkontribusi atau sekadar mengetahui source code nya silahkan cek di github saya.
            
        </p>
        <br/>
        <h2 className=''>Berikut Social Media Saya Yang Bisa Dihubungi :</h2>
        <ul className='list-disc '> 
            <li className='text-sm'><a href="https://www.instagram.com/tegar_deyustian/" target='_blank'>Insatgram Saya</a></li>
            <li className='text-sm'><a href="https://github.com/tegardm" target='_blank'>Github Saya</a></li>
            <li className='text-sm'><a href="https://tegardm.vercel.app/" target='_blank'>Personal Web Saya</a></li>
        </ul>
    </div>
  )
}

export default Footer
import React, { useEffect } from 'react'
import { useState } from 'react'


const FieldInput = ({getTodo}) => {

    console.log(new Date().toDateString())
    

  const [selectOption, setSelectOption] = useState({
    theId : Math.floor(Math.random() * 349857389437),
    theTitle : '',
    theDesc : '',
    theOption : 'Sangat Penting',
    theDate : new Date().toDateString()
  })

  useEffect(() => {
    
  }, [selectOption])

  const submitForm = () => {
     if (selectOption.theTitle == '' || selectOption.theDesc == '') {
      alert(' Harap Isi Kolom Judul & Deskripsi To Do')
      return false
     } else {

      getTodo(selectOption)

    setSelectOption({
        theDesc : '',
        theTitle : '',
        theOption : 'Sangat Penting',
        theDate : new Date().toDateString()
    })
     }
  }

  return (
    <>
       <form className='flex flex-col gap-y-10 text-thirdy '>
            <div className='w-full flex gap-x-5 md:flex-row flex-1 flex-col'>
            <div className='w-full '>
                 <label className='py-5 font-semibold text-xl block' htmlFor="title">Judul To Do</label>
                 <input  onChange={(e) => {setSelectOption({...selectOption, theTitle : e.target.value})}} 
                 value={selectOption.theTitle} id='title'  
                 className='p-3 text-thirdy outline-thirdy  placeholder-custom-dark-gray w-full bg-gradient-to-r font-semibold to-secondary from-fourty rounded-lg' type="text" required placeholder='Masukan Judul To Do...' />
                 <label className='py-5 font-semibold text-xl block' htmlFor="title">Tingkat Prioritas</label>
                 <select onChange={(e) => {setSelectOption({...selectOption, theOption : e.target.value})}} className='py-3 outline-thirdy  px-5 w-full bg-gradient-to-r  to-secondary from-fourty rounded-lg font-semibold text-custom-dark-gray text-base block' htmlFor="title">
                    <option value="Sangat Penting">Sangat Penting</option>
                    <option value="Penting">Penting</option>
                    <option value="Normal">Normal</option>
                    <option value="Tidak Penting">Tidak Penting</option>

                 </select>
            </div>

            

            <div className='w-full'>
                <label className='font-semibold text-xl py-5 block' htmlFor="desc"> Deskripsi To Do :</label>
                <textarea value={selectOption.theDesc} id='desc'
                 onChange={(e) => {setSelectOption({...selectOption, theDesc : e.target.value})}} rows="10" 
                 className='w-full p-3 outline-thirdy placeholder-custom-dark-gray   bg-gradient-to-r font-semibold to-secondary from-fourty rounded-lg' placeholder='Masukan Deskripsi'></textarea>
            </div>
            
            </div>
            <button type='button' onClick={() => {submitForm()}} className='myButton'>Tambah To Do</button>
       </form>
    </>
  )
}

export default FieldInput
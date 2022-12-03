import React from 'react'

const Find = () => {
    const locations = [

        {
            id: 1,
            location:'https://www.dodighana.com/wp-content/uploads/2020/12/68883140_XXL-1-870x555.jpg?x64457',
        },
        {
            id: 2,
            location:'https://www.dodighana.com/wp-content/uploads/2020/12/68883140_XXL-1-870x555.jpg?x64457',
        
        },
        {

            id: 3,
            location:'https://www.dodighana.com/wp-content/uploads/2020/12/68883140_XXL-1-870x555.jpg?x64457',
           
        },
    ];
  return (
    <div>
      <section class="py-5">
        <div className='flex flex-col items-center justify-center max-w-screen-xl h-full px-3 py-12 text-center'>
             <h2 className='text-3xl font-bold text-center'>Where we work</h2>
             <p className='text-lg text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex excepturi placeat itaque aliqsint dolor pellendus vel? Ipsam, amet.</p>
        </div>
      
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://media.timbu.com/big/0d10de087d6696420c8579fba85d57cc.png?w=400&h=280&c=1"/>
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-white font-medium title-font mb-2">Koforidua</h2>
          
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
        
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://img.directhotels.com/gh/kumasi/golden-tulip-kumasi-city/1.jpg"/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Kumasi</h2>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
        
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://www.dodighana.com/wp-content/uploads/2020/12/68883140_XXL-1-870x555.jpg?x64457"/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-white font-medium title-font mb-2">Accra</h2>
                          
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Find
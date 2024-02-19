import { Button } from 'flowbite-react'
import books from '/public/img/books.png'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className=" flex-1 justify-center flex-col flex">
        <h2 className='text-2xl'>
          Unlock new worlds within our shelves: Your literary escape awaits at our bookstore.
        </h2>
        <p>
          Checkout this recomendatios in our newsletter
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="/proyects" target='_blank' rel='noopener noreferrer'>Learn More</a>
        </Button>
      </div>
      <div className="w-full sm:w-[400px] p-7 flex-1">
  <img src={books} className="w-full h-auto" alt="Libros" />
</div>


    </div>
  )
}

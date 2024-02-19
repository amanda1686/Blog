import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '/img/logo.png'

export default function FormWithImage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // Aquí puedes enviar los datos del formulario a tu servidor o hacer lo que necesites
  };

  return (
    <>
    
    <div className="max-w-md mx-auto  shadow-md flex">
      <div className="mr-6">
        <img src={logo} alt="Imagen de perfil" className="h-16 w-16  mt-10 rounded-full" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-white rounded-lg p-6 mt-10 mb-10">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input {...register("name", { required: true })} type="text" id="name" placeholder="Enter your name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" placeholder="Enter your email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.email && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea {...register("message", { required: true })} id="message" placeholder="Enter your message" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.message && <p className="text-red-500 text-xs italic">Please enter a message.</p>}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}


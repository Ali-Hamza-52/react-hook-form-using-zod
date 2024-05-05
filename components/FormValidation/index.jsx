"use client"
import React from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod";

const schema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
})

const index = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit =async (data) =>{
        await new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        console.log(data)
    }

    // console.log(watch("example"))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='text-gray-900 flex justify-center items-center mt-36 flex-col  gap-5'>
        <div className='mb-5 '>
            <label className='mx-4 text-white' htmlFor="name">Enter Your Name</label>
            <input {...register("username")} type='text' />
            {
                errors.username && <p className='text-red-500'>{errors.username.message}</p>
            }
        </div>
        <div className='mb-5 '>
            <label className='mx-4 text-white' htmlFor="email">Enter Your Email</label>
            <input {...register("email")} type='email' />
            {
                errors.email && <p className='text-red-500'>{errors.email.message}</p>
            }
        </div>
        <div className='mb-5 '>
            <label className='mx-4 text-white' htmlFor="password">Enter Your Password</label>
            <input {...register("password")} type='password' />
            {
                errors.password && <p className='text-red-500'>{errors.password.message}</p>
            }
        </div>
        <button disabled={isSubmitting} type="submit" className='bg-blue-500 p-3 rounded-full'>
            {
                isSubmitting? "Loading..." : "Submit"
            }
        </button>
      </form>
    </div>
  )
}

export default index



// without zod

// "use client"
// import React from 'react'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from "react-hook-form"
// import { z } from "zod";

// const schema = z.object({
//     username: z.string(),
//     email: z.string().email(),
//     password: z.string().min(8),
// })

// const index = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors, isSubmitting },
//     } = useForm({
//         resolver: zodResolver(schema),
//     })

//     const onSubmit = async (data) => {
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve()
//             }, 1000)
//         })
//         console.log(data)
//     }

//     // console.log(watch("example"))

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)} className='text-gray-900 flex justify-center items-center mt-36 flex-col  gap-5'>
//                 <div className='mb-5 '>
//                     <label className='mx-4 text-white' htmlFor="name">Enter Your Name</label>
//                     <input {...register("username", {
//                         required: "username is required",
//                         pattern: {
//                             value: /^[A-Za-z]+$/i,
//                             message: "Please enter a valid name"
//                         }
//                     })} />
//                     {
//                         errors.username && <p className='text-red-500'>{errors.username.message}</p>
//                     }
//                 </div>
//                 <div className='mb-5 '>
//                     <label className='mx-4 text-white' htmlFor="email">Enter Your Email</label>
//                     <input {...register("email", {

//                         required: "email must be provided",
//                         pattern: {
//                             value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
//                             message: "Please enter a valid email"
//                         },

//                     })} />
//                     {
//                         errors.email && <p className='text-red-500'>{errors.email.message}</p>
//                     }
//                 </div>
//                 <div className='mb-5 '>
//                     <label className='mx-4 text-white' htmlFor="password">Enter Your Password</label>
//                     <input {...register("password", {
//                         required: "Please enter your password",
//                         minLength: {
//                             value: 6,
//                             message: "Password must be at least 6 characters"
//                         },
//                         maxLength: {
//                             value: 12,
//                             message: "Password must be at most 12 characters"
//                         }
//                     })} />
//                     {
//                         errors.password && <p className='text-red-500'>{errors.password.message}</p>
//                     }
//                 </div>
//                 <button disabled={isSubmitting} type="submit" className='bg-blue-500 p-3 rounded-full'>
//                     {
//                         isSubmitting ? "Loading..." : "Submit"
//                     }
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default index

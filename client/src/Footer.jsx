import React from 'react'

import TwitterIcon from '@iconscout/react-unicons/icons/uil-twitter'
import InstagramIcon from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedinIcon from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <footer dir='ltr' class="bg-white dark:bg-gray-900 mt-full text-right mb-0">
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between ">
                    <div class="mb-6 md:mb-0 ">
                        <a href="/" class="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/12435/12435328.png" class="h-20 w-15 me-3" alt="اقامتگاه" />
                        </a>
                        <p className='text-gray-800 mt-6'>ما را در شبکه های اجتماعی دنبال کنید</p>
                        <div className='flex flex-row mt-2'>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <TwitterIcon />
                            </div>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <InstagramIcon />
                            </div>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <LinkedinIcon />
                            </div>
                        </div>

                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">نحوه رزرو اقامتگاه</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">راهنمای رزرو اقامتگاه</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">شیوه‌های پرداخت</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" class="hover:underline">لغو رزرو</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">خدمات مشتریان</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">پرسش های متداول مهمان</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">پرسش های متداول میزبان</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">چطور اقامتگاه ثبت کنم؟</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline ">حریم شخصی کاربران </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">راه های ارتباطی</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">تماس با ما</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" class="hover:underline">قوانین و مقررات</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer
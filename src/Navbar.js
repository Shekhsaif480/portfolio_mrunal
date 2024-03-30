import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>

            <nav
                class="relative flex w-full flex-wrap items-center justify-between py-2 shadow-dark-mild" >
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <nav class="w-full rounded-md" aria-label="breadcrumb">
                        <ol class="list-reset ms-2 flex">
                            <li>
                                <a
                                    href="Home"
                                    class="text-3xl text-black/2000 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                                >Home</a
                                >
                            </li>
                            <li>
                                <span class="mx-2 text-3xl text-black/60 ">/</span>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="text-3xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                                >About</a
                                >
                            </li>
                            <li>
                                <span class="mx-2 text-3xl text-black/60 ">/</span>
                            </li>
                            <li>
                                <a
                                    href="mailto:shaiktausif7557@gmail.com"
                                    class="text-3xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                                >Contact Me</a
                                >
                            </li>
                        </ol>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

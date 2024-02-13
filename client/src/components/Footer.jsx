import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom' 
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className=' border border-t-8 border-teal-500'>
        <div className=" w-full max-w-7xl mx-auto">
            <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
                <div className=" mt-5">
                <Link to="/" className=' self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-lg text-white to-pink-500'>Amanda</span>Blogs
                </Link>
                </div>
                <div className=" grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://www.todostuslibros.com/mas_vendidos'
                    target='_blank'
                    rel='noopener noreferrer'
                    > 
                    BestSellers
                    </Footer.Link>
                    <Footer.Link
                    href='/about'
                    target='_blank'
                    rel='noopener noreferrer'
                    > 
                    A Team
                    </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='follow us'/>
                    <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://github.com/amanda1686/Blog'
                    target='_blank'
                    rel='noopener noreferrer'
                    > 
                    Github
                    </Footer.Link>
                    <Footer.Link
                    href='/https://www.linkedin.com/feed'
                    target='_blank'
                    rel='noopener noreferrer'
                    > 
                    Linkedin
                    </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='legal'/>
                    <Footer.LinkGroup col>
                    <Footer.Link
                    href='#'
                    > 
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                    href='#'
                    > 
                    Terms &amp; Conditions
                    </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
        <Footer.Divider/>
        <div className=" w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by='a team' year={new Date().getFullYear()}/>
            <div className=" flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='#' icon={BsGithub}/>
            </div> 
        </div>
        </div>
    </Footer>
  )
}

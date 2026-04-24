import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { smoothScrollTo } from '@/lib/smoothScroll';

const Footer = () => {
  return (
    <footer className='mt-16 border-t border-border bg-card/80 backdrop-blur-md'>
        <div className='container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>      
            <p className='text-sm text-muted-foreground'>
                Mithun Paramathasan
            </p>
            <div className='flex items-center gap-3'>
                <a
                    href="https://github.com/MithunPara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary/15 transition-colors"
                >
                    <FaGithub className='h-5 w-5 text-foreground hover:text-accent transition-colors'/>
                </a>
                <a
                    href="https://linkedin.com/in/mithunparam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary/15 transition-colors"
                >
                    <FaLinkedin className='h-5 w-5 text-foreground hover:text-accent transition-colors'/>
                </a>
                <a
                    href="#top"
                    onClick={(e) => smoothScrollTo(e, "#top")}
                    className="p-2 rounded-full bg-secondary/15 hover:bg-secondary/25 text-accent transition-colors"
                >
                    <IoIosArrowUp className='h-5 w-5' />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
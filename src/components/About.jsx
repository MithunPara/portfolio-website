import React from 'react'

const About = () => {
  return (
    <div className='py-24 relative'>
        <div className='container mx-auto'>
            <h2 className='text-2xl md:text-4xl font-bold mb-8 text-center'>
                About <span className='text-secondary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div className='space-y-5'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut posuere metus sit amet urna cursus, et commodo justo sagittis. 
                        Nunc aliquet erat eget dolor malesuada, ac commodo felis mattis. 
                    </p>
                    <p>
                        Praesent elit neque, commodo eu leo in, molestie molestie libero. 
                        Nullam at varius risus. Sed nec gravida enim, vel sollicitudin nunc. 
                        Morbi eu ante lacinia nulla viverra eleifend. Duis facilisis sodales tempus. 
                        Duis molestie velit ac elementum mattis.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center gap-20 pt-4'>
                        <a href='/contact' className='button accent-button px-4 py-2 md:px-6'>Contact</a>
                        <a href='/resume' className='button accent-button px-4 py-2 md:px-6'>Resume</a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About
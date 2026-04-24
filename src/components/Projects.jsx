import React from 'react'
import project1 from "../assets/gymbuddy-logo.png"
import gymbuddy from "../assets/GymBuddy Homepage.png"
import pocketai from "../assets/Pocket AI Homepage.png"
import gamified from "../assets/Gamified Learning Platform Homepage.png"
import pneumonia from "../assets/Pneumonia Detection Model Test.png"
import { FaGithub } from "react-icons/fa";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const projects = [
    {
      name: "Capstone Project - Pocket AI Mobile App",
      stack: "React Native, TypeScript, Python, Flask, Whisper, Groq LLM, PostgreSQL",
      description: `Voice-driven task management system designed for hands-free use in farm environments. Converts natural speech into structured
      tasks using speech-to-text and LLM-based intent parsing. Supports offline task creation with cloud synchronization for reliability in low-connectivity
      environments. Developed in collaboration with CATTLEytics Inc. as part of an industry-sponsored capstone project (source code not publicly available due to 
      confidentiality agreements).`,
      git: null,
      image: pocketai
    },
    {
      name: "GymBuddy Fitness Tracker",
      stack: "MongoDB, Express, Next.js, Node,js, TypeScript",
      description: "MERN-based fitness application supporting workout routines, food tracking, and data visualization. Integrated USDA FoodData API and developed RESTful backend services for authentication and personalized user metrics.",
      git: "https://github.com/MithunPara/GymBuddy",
      image: gymbuddy
    },
    {
      name: "Pneumonia Detection from Chest X-Ray Images",
      stack: "Python, PyTorch, scikit-learn, NumPy, Matplotlib",
      description: `Developed a machine learning system for a course group project, to classify chest X-ray images as pneumonia or normal using both traditional models and deep learning approaches. Extracted features using a pretrained ResNet18
      model and compared Logistic Regression, SVM, and a Feedforward Neural Network against a Convolutional Neural Network (CNN). Implemented data preprocessing, augmentation, and model evaluation using accuracy and F1-score, with CNN-based classification
      achieving the best performance for this use case.`,
      git: "https://github.com/MithunPara/chest-xray-pneumonia-classification",
      image: pneumonia
    },
    {
      name: "Gamified Learning Application",
      stack: "Python, Flask, JavaScript, HTML/CSS, Google Cloud Platform",
      description: `Built a gamified learning platform featuring interactive quizzes, lessons and leaderboards to boost student engagement, as part of McMaster's 
      Google Developers Student Club open-source extracurricular team. Developed with Python, Flask, and SQLAlchemy, with a dynamic frontend using Jinja templating. Implemented
      secure user authentication, REST APIs, and I also helped optimize database operations for improved performance. Containerized with Docker and deployed on GCP for scalable and reliable access.`,
      git: "https://github.com/MithunPara/Gamified-Learning-Platform",
      image: gamified
    },
]

const Projects = () => {
  return (
    <section id='projects' className='py-12 md:py-24 relative scroll-mt-24'>
      <div className='container mx-auto'>
        <ScrollReveal>
          <h2 className='section-heading'>
            Projects
          </h2>
        </ScrollReveal>
        <div className='space-y-12 md:space-y-16'>
          {
            projects.map((project, index) => (
                <div key={index}>
                  <div className={cn('flex justify-center items-center gap-8 md:gap-16',
                  `${index % 2 == 1 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}`
                  )}>
                    <ScrollReveal className='inline-block md:flex-none'>
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        className='w-full max-w-[90vw] md:max-w-none md:h-80 md:w-auto h-auto object-cover rounded-md border-2 md:border-3 border-accent/80 shadow-[0_0_20px_rgba(123,183,155,0.25)]' 
                      />
                    </ScrollReveal>
                    <ScrollReveal>
                      <div className='space-y-3 max-w-xl text-center md:text-left'>
                        <h3 className='text-xl md:text-3xl font-medium'>{project.name}</h3>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>{project.description}</p>
                        <p className='text-accent text-base md:text-lg font-medium'>{project.stack}</p>
                        {project.git && (
                          <a href={project.git} target="_blank" rel="noopener noreferrer">
                            <div className='inline-flex p-2 rounded-full hover:bg-secondary/15 hover:text-accent transition-colors'>
                              <FaGithub className='h-6 w-6'/>
                            </div>
                          </a>
                        )}
                      </div>
                    </ScrollReveal>
                  </div>
                  <div className='border-b border-border w-full mt-12 md:mt-16'></div>
                </div>
            )) 
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
"use client"
import React, { useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { fadeInUp } from '@/lib/variants';
import { motion } from 'framer-motion';
import { IoIosSend } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoAlertCircle } from "react-icons/io5";
import { cn } from '@/lib/utils';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitted({ type: null, message: "" }); // Reset status to null in case message is being resent after an error 
        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is incomplete. Set environment variables."
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey)

            setSubmitted({
                type: "success",
                message: "Message sent!",
            });
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            console.error("EmailJS error:", err);
            setSubmitted({
                type: "error",
                message: err?.text || err?.message || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <section id='contact' className='py-24 relative scroll-mt-24'>
        <div className='container mx-auto'>
            <h2 className='section-heading'>
                    Let's <span className='text-secondary'>Connect</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12'>
                Always open to new opportunities and collaborations. I'd love to hear from you.
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='flex justify-center'>
                    <motion.div
                        className="glass-card w-full space-y-6 max-w-lg"
                        variants={fadeInUp()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        >
                        <h3 className="text-xl md:text-2xl font-semibold text-center">
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            <a
                                href="mailto:mithun.param03@gmail.com"
                                className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-secondary/10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 transition-colors">
                                    <IoIosMail className="h-5 w-5 text-accent" />
                                </div>

                                <div className="min-w-0">
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div className="font-medium break-all group-hover:text-accent transition-colors">
                                        mithun.param03@gmail.com
                                    </div>
                                </div>
                            </a>

                            <a
                                href="tel:+16476543517"
                                className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-secondary/10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 transition-colors">
                                    <FaPhone className="h-5 w-5 text-accent" />
                                </div>

                                <div className="min-w-0">
                                    <div className="text-sm text-muted-foreground">Phone Number</div>
                                    <div className="font-medium group-hover:text-accent transition-colors">
                                        +1 (647) 654-3517
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className='flex justify-center'>
                    <motion.div
                        className='glass-card w-full max-w-lg'
                        variants={fadeInUp()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name' className='block text-md font-medium mb-2'>Name</label>
                                <input 
                                    id='name' 
                                    type='text' 
                                    required
                                    placeholder='Your full name'
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value })
                                    }}
                                    className='w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-md font-medium mb-2'>Email Address</label>
                                <input 
                                    id='email' 
                                    type='email' 
                                    required 
                                    placeholder='email@example.com'
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value })
                                    }}
                                    className='w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-md font-medium mb-2'>Message</label>
                                <textarea 
                                    rows={6}
                                    required
                                    placeholder='Your message'
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({ ...formData, message: e.target.value })
                                    }}
                                    className='w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none' 
                                />
                            </div>

                            <button 
                                type='submit'
                                className='button accent-button w-full py-3 text-lg inline-flex items-center justify-center gap-2 tracking-wide'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                <>
                                        Sending...
                                </> 
                                ) : (
                                    <>
                                        Send Message
                                        <IoIosSend />
                                    </>
                                )}
                            </button>

                            {submitted.type && (
                                <div className={cn('flex items-center gap-4 p-3 rounded-xl',
                                    submitted.type === "success" 
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                )}>
                                    {submitted.type === "success" ? (
                                        <IoIosCheckmarkCircle className='h-6 w-6 flex-shrink-0' />
                                    ) : (
                                        <IoAlertCircle className='h-6 w-6 flex-shrink-0' />
                                    )}  
                                    <p className='text-sm'>{submitted.message}</p>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
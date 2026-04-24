"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/variants";
import { IoDocumentTextOutline, IoDownloadOutline, IoOpenOutline } from "react-icons/io5";
import ScrollReveal from "./ScrollReveal";

const Resume = () => {
  return (
    <section id="resume" className="py-12 md:py-24 relative scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
            <h2 className="section-heading">
            Resume
            </h2>
        </ScrollReveal>

        <ScrollReveal>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            View or download my resume for a quick overview of my experience,
            technical skills, and project work.
            </p>
        </ScrollReveal>

        <motion.div
          className="glass-card max-w-3xl mx-auto"
          variants={fadeInUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 text-center sm:text-left">
            <div className="mx-auto sm:mx-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 flex-shrink-0">
              <IoDocumentTextOutline className="h-7 w-7 text-accent" />
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold">Mithun Paramathasan</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Software Developer with experience in full-stack development,
                AI-driven applications, and co-op industry projects.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button accent-button px-6 py-3 inline-flex items-center justify-center gap-2"
            >
              <IoOpenOutline className="h-5 w-5" />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download="Mithun-Paramathasan-Resume.pdf"
              className="button px-6 py-3 inline-flex items-center justify-center gap-2 border border-border rounded-full hover:bg-secondary/10 transition-colors"
            >
              <IoDownloadOutline className="h-5 w-5" />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
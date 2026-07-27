import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer, scaleUp } from '../animations/variants';
import { portfolioData } from '../data/portfolio';
import * as Icons from 'react-icons/si';

export default function Technologies() {
  const renderCategory = (title, techs) => (
    <div className="mb-12 last:mb-0">
      <h4 className="text-xl font-bold font-heading mb-6 flex items-center gap-3">
        {title}
        <div className="h-px bg-border flex-grow" />
      </h4>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {techs.map((tech) => {
          // @ts-ignore - Dynamic icon loading
          const IconComponent = Icons[tech.icon];
          return (
            <motion.div 
              key={tech.name}
              variants={scaleUp}
              className="bg-card border border-[rgba(0,119,204,0.3)] rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all group cursor-default relative overflow-hidden w-full hover:border-[#005187]"
            >
              {IconComponent && (
                <IconComponent className="text-3xl text-muted-foreground transition-colors group-hover:text-primary" />
              )}
              <span className="text-sm font-medium text-center">{tech.name}</span>
              
              {/* Skill level bar indicator (subtle) */}
              <div className="absolute bottom-0 left-0 h-1 skill-bar-track opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );

  return (
    <section id="technologies" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
        >
          <h2 className="eyebrow text-sm font-semibold tracking-wider text-primary uppercase mb-2">My Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Technologies & Tools</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A comprehensive overview of my technical expertise, categorized by domain. I stay current with industry standards to choose the right tool for every problem.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {renderCategory("Frontend", portfolioData.technologies.frontend)}
          {renderCategory("Backend", portfolioData.technologies.backend)}
          {renderCategory("Databases", portfolioData.technologies.databases)}
          {renderCategory("Cloud & DevOps", portfolioData.technologies.cloud)}
          {renderCategory("Tools", portfolioData.technologies.tools)}
        </div>
      </div>
    </section>
  );
}

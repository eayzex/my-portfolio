
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Triddle - Fragmented Form Builder",
      description: "Triddle is a full-stack form builder application designed to deliver a seamless experience for both creators and respondents. Built with cutting-edge technologies, it offers a dynamic, responsive frontend and a robust, secure backend—empowering users to easily create, manage, and share custom forms.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express.js"],
      image: "https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1747235154927_Screenshot2025-05-14at160546.png",
      liveUrl: "https://new-front-repo-3e9hsb3xe-eayzexs-projects.vercel.app/",
      githubUrl: "https://github.com/eayzex/tridlle-final-project-fr.git",
    },
    {
      title: "MorocStay - Hotel Booking Platform",
      description: "MorocStay is a smart and seamless hotel booking platform designed to connect travelers with the best stays across Morocco. Whether you're planning a luxurious getaway, a family vacation, or a spontaneous weekend escape, MorocStay offers a curated selection of accommodations to suit every style and budget.",
      technologies: ["ReactVite", "TypeScript", "NodeJs", "Express", "MongoDB", ],
      image: "https://i.imgur.com/zFDRGsA.png",
      liveUrl: "https://hotels-booking-vg4f.vercel.app/login",
      githubUrl: "https://github.com/eayzex/hotels-booking-.git",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work and the technologies I'm passionate about
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="flex-1 hero-gradient text-white">
                        Live Demo
                      </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex-1">
                        Code
                      </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Triddle - Fragmented Form Builder",
      description: "Triddle is a full-stack form builder application designed to deliver a seamless experience for both creators and respondents. Built with cutting-edge technologies, it offers a dynamic, responsive frontend and a robust, secure backend—empowering users to easily create, manage, and share custom forms.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScripte", ],
      image: "https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1747235154927_Screenshot2025-05-14at160546.png",
      liveUrl: "https://new-front-repo-3e9hsb3xe-eayzexs-projects.vercel.app/",
      githubUrl: "tridlle-final-project-fr.vercel.app",
    },
    {
      title: "1 Confirmed WhatsApp Business Platform",
      description: "1 Confirmed WhatsApp Business Platform** is a comprehensive, enterprise-grade web application that showcases and utilizes 1 Confirmed's WhatsApp Business API capabilities. This platform serves as both a demonstration of API functionality and a fully operational business communication solution..",
      technologies: ["React", "TypeScript", "Tailwind CSS" , "Exepress.js" , "Node.js"],
      image: "https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1746707185577_1confirmedphoto.png",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MorocStay - Hotel Booking Platform",
      description: "MorocStay is a smart and seamless hotel booking platform designed to connect travelers with the best stays across Morocco. Whether you're planning a luxurious getaway, a family vacation, or a spontaneous weekend escape, MorocStay offers a curated selection of accommodations to suit every style and budget.",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Sass"],
      image: "hhttps://sdmntpritalynorth.oaiusercontent.com/files/00000000-7b80-6246-8b05-7a7c9bc3150f/raw?se=2025-06-11T21%3A17%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=710f529a-fb38-5a92-b60b-bf0493006a7e&skoid=82a3371f-2f6c-4f81-8a78-2701b362559b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-11T20%3A13%3A39Z&ske=2025-06-12T20%3A13%3A39Z&sks=b&skv=2024-08-04&sig=FKjyuwIe4i5Awz5I2nbRZKCDoYzvLUorRIC%2BY8Gvcpk%3Dp",
      liveUrl: "#",
      githubUrl: "#",
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
                      <Button size="sm" className="flex-1 hero-gradient text-white">
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Code
                      </Button>
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

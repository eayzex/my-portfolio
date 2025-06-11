
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users, Trophy, Target } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const achievements = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Mastery in modern web technologies and frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading development teams and mentoring developers"
    },
    {
      icon: Trophy,
      title: "Award Winner",
      description: "Recognized for excellence in web development"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    }
  ];

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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             I build software that doesn’t just work... it inspires.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                  I’m a passionate and ambitious full-stack developer who enjoys turning ideas into real, functional digital products. I approach challenges with curiosity and smart problem-solving, always striving to learn new technologies and grow in this fast-moving field.
                  I believe in creating digital products that not only work flawlessly but also inspire and delight users.
                  My approach blends technical excellence with creative thinking to deliver practical solutions that drive business growth and enhance user experience.
                  While I’m still early in my career, I bring strong analytical thinking, attention to detail, and a constant drive to improve and deliver my best in every project I work on.




                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                  
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">What I Bring</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enterprise-grade architecture and scalable solutions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advanced performance optimization techniques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Leadership in agile development environments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cross-platform expertise and modern DevOps practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Continuous innovation and technology adoption
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Professional Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in creating digital products that not only function flawlessly but 
                    also inspire and delight users. My approach combines technical excellence with 
                    creative problem-solving to deliver solutions that drive business growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
                className="cursor-pointer"
              >
                <Card className="glass-effect border-0 text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2 gradient-text">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
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

export default About;


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});

  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", level: 90, icon: "⚛️", color: "#61DAFB" },
        { name: "Next.js", level: 60, icon: "▲", color: "#000000" },
        { name: "TypeScript", level: 55, icon: "📘", color: "#3178C6" },
        { name: "Vue.js", level: 25, icon: "💚", color: "#4FC08D" },
        { name: "Tailwind CSS", level: 93, icon: "🎨", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend Development",
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 70, icon: "🟢", color: "#339933" },
        { name: "Express.js", level: 87, icon: "🚀", color: "#000000" },
        { name: "PostgreSQL", level: 85, icon: "🐘", color: "#336791" },
        { name: "MongoDB", level: 88, icon: "🍃", color: "#47A248" },
        { name: "GraphQL", level: 20, icon: "🔗", color: "#E10098" },
      ],
    },
    {
      title: "Tools & Technologies",
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "🐙", color: "#F05032" },
        { name: "Docker", level: 85, icon: "🐳", color: "#2496ED" },
        { name: "AWS", level: 80, icon: "☁️", color: "#FF9900" },
        { name: "Jest/Testing", level: 90, icon: "🧪", color: "#C21325" },
        { name: "Figma", level: 75, icon: "🎯", color: "#F24E1E" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      // Animate progress values
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          const key = `${category.title}-${skill.name}`;
          setTimeout(() => {
            let current = 0;
            const increment = skill.level / 50; // 50 frames for smooth animation
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.level) {
                current = skill.level;
                clearInterval(timer);
              }
              setAnimatedValues(prev => ({ ...prev, [key]: Math.round(current) }));
            }, 30); // 30ms per frame = ~2 second total animation
          }, Math.random() * 500); // Random delay for staggered effect
        });
      });
    }
  }, [inView]);

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
            <motion.h1 
              className="text-5xl md:text-7xl font-bold gradient-text mb-6"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Skills & Expertise
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Technologies and tools I use to create exceptional digital experiences
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="professional-card border-0 h-full overflow-hidden">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl text-white font-bold">
                        {category.title.charAt(0)}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-semibold mb-8 gradient-text"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <div className="space-y-8">
                      {category.skills.map((skill, skillIndex) => {
                        const key = `${category.title}-${skill.name}`;
                        const animatedValue = animatedValues[key] || 0;
                        
                        return (
                          <motion.div 
                            key={skillIndex} 
                            className="space-y-3"
                            variants={skillItemVariants}
                            whileHover={{
                              x: 8,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-3">
                                <motion.span 
                                  className="text-2xl skill-icon"
                                  whileHover={{ 
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  {skill.icon}
                                </motion.span>
                                <motion.span 
                                  className="font-semibold text-lg"
                                  whileHover={{ 
                                    color: skill.color,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  {skill.name}
                                </motion.span>
                              </div>
                              <motion.span 
                                className="text-sm font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full"
                                animate={{ 
                                  scale: animatedValue > 0 ? [1, 1.1, 1] : 1 
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {animatedValue}%
                              </motion.span>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                              className="relative"
                            >
                              <Progress 
                                value={animatedValue} 
                                className="h-3 hover:h-4 transition-all duration-300"
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color}20, ${skill.color}10)`
                                }}
                              />
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                                  width: `${animatedValue}%`,
                                  borderRadius: '9999px',
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${animatedValue}%` }}
                                transition={{ duration: 2, ease: "easeOut" }}
                              />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="professional-card border-0 max-w-5xl mx-auto overflow-hidden">
                <CardContent className="p-10">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full professional-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  >
                    <span className="text-3xl">🚀</span>
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-6 gradient-text">Currently Exploring</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    I'm constantly expanding my skill set and staying ahead of the curve with emerging 
                    technologies. Currently diving deep into AI/ML integration, advanced cloud architecture, 
                    and cutting-edge development practices.
                  </p>
                  
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    variants={containerVariants}
                  >
                    {[
                      { name: "AI/ML Integration", icon: "🤖", color: "#FF6B6B" },
                      { name: "Serverless Architecture", icon: "⚡", color: "#4ECDC4" },
                      { name: "Web3 Development", icon: "🔗", color: "#45B7D1" },
                      { name: "Advanced DevOps", icon: "🛠️", color: "#96CEB4" },
                      { name: "Mobile Development", icon: "📱", color: "#FFEAA7" }
                    ].map((tech, index) => (
                      <motion.span
                        key={tech.name}
                        className="px-6 py-3 professional-card rounded-full text-sm font-semibold cursor-pointer flex items-center space-x-2"
                        variants={skillItemVariants}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${tech.color}20`,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

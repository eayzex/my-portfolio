
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would configure EmailJS with your service ID, template ID, and public key
      // For demo purposes, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your next project or just say hello
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Email</h4>
                      <p className="text-muted-foreground">elalmiyoussef03@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
                      <p className="text-muted-foreground">Casablanca</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">What I Can Help With</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Full-stack web application development
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      UI/UX design and frontend development
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Technical consulting and code reviews
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Performance optimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 hero-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Team collaboration and mentoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="glass-effect border-0"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="glass-effect border-0"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="glass-effect border-0"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="glass-effect border-0 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full hero-gradient text-white py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

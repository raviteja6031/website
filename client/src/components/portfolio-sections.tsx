import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Cloud, 
  Drill, 
  Shield, 
  CheckCircle, 
  GraduationCap, 
  IdCard,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-purple-600/5 dark:from-primary/10 dark:to-purple-600/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent dark:from-primary/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-8"
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-32 h-32 rounded-full mx-auto border-4 border-white dark:border-slate-700 shadow-xl overflow-hidden relative">
            <img 
  src="/profile.jpg" 
  alt="Raviteja Reddy Maruri" 
  className="w-full h-full object-cover absolute inset-0"
  onError={(e) => {
    e.currentTarget.src = ""; // Optional: set a transparent image or remove this
    e.currentTarget.parentElement.querySelector('.fallback').style.display = 'flex';
    e.currentTarget.style.display = 'none';
  }}
/>
<div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-2xl absolute inset-0 fallback hidden">
  RM
</div>

            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4"
            {...fadeInUp}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Raviteja</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium"
            {...fadeInUp}
          >
            AWS Java Engineer & Senior DevOps Engineer
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-3xl mx-auto"
            {...fadeInUp}
          >
            Specializing in scalable AWS infrastructure, Kubernetes orchestration, and CI/CD automation. 
            7+ years of experience delivering high-performance cloud solutions that reduce deployment time by 60% and increase uptime by 90%.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            {...fadeInUp}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white">
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            {...fadeInUp}
          >
            <a href="mailto:raviteja3061@outlook.com" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/raviteja-m-7a769a218/" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/raviteja6031" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const stats = [
    { value: "60%", label: "Faster Deployments" },
    { value: "90%", label: "Faster Issue Detection" },
    { value: "200+", label: "Hours Saved/Quarter" },
    { value: "18%", label: "Cloud Cost Reduction" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about building scalable cloud infrastructure and automating deployment pipelines.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <Code className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400">Modern Tech Workspace</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Senior DevOPS Engineer</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              With over 7 years of experience in DevOps engineering, I specialize in building scalable AWS infrastructure, 
              implementing robust CI/CD pipelines, and managing containerized applications with Kubernetes. My expertise 
              spans across cloud architecture, infrastructure as code, and automation that drives business efficiency.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  variants={fadeInUp}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {["AWS Architecture", "Kubernetes", "CI/CD", "Infrastructure as Code"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "Go", "Bash", "PowerShell", "Groovy", "Java"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS EKS", "AWS RDS", "CloudWatch"]
    },
    {
      icon: Drill,
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "ArgoCD"]
    },
    {
      icon: Shield,
      title: "Monitoring & Security",
      skills: ["Prometheus", "Grafana", "ELK Stack", "SonarQube", "HashiCorp Vault", "AWS Secrets Manager"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and programming languages.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "AWS Java Engineer",
      company: "Fujitsu North America, Inc.",
      location: "Santa Clara, California, USA",
      period: "Jul 2024 – Present",
      achievements: [
        "Reduced deployment time from 3 hours to under 20 minutes",
        "Accelerated release cycles by 60% with automated CI/CD",
        "Cut post-deployment defects by 45% using SonarQube"
      ],
      technologies: ["AWS", "Kubernetes", "Jenkins", "Terraform", "ArgoCD", "Go"]
    },
    {
      title: "Senior DevOps Engineer",
      company: "Farm Bureau Insurance of Tennessee",
      location: "Columbia, Tennessee, USA",
      period: "Mar 2023 – Jun 2024",
      achievements: [
        "Reduced infrastructure setup time by 60% with CloudFormation",
        "Improved scalability and availability by 45%",
        "Maintained 99.9% uptime with Kubernetes management"
      ],
      technologies: ["AWS CloudFormation", "Docker", "Ansible", "SonarQube"]
    },
    {
      title: "DevOps Engineer",
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      period: "Jan 2021 – Dec 2022",
      achievements: [
        "Reduced manual intervention by 70% with CI/CD pipelines",
        "Achieved 95% deployment success rate",
        "Supported 15+ mobile apps with automated deployments"
      ],
      technologies: ["Jenkins", "Docker", "Kubernetes", "Ansible", "Liferay"]
    },
    {
      title: "SFDC Platform Engineer",
      company: "Legacy Health",
      location: "Bangalore, India",
      period: "Mar 2018 – Dec 2020",
      achievements: [
        "Automated Salesforce metadata deployments using Jenkins and Ant, reducing manual errors by 50%",
        "Enabled daily builds and sandbox deployments across dev, test, and prod environments",
        "Accelerated package preparation by 30% using dynamic batch scripts for metadata management"
      ],
      technologies: ["Salesforce", "Jenkins", "Groovy", "Ant", "GitHub"]
    }
    
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            7+ years of progressive experience in DevOps engineering and cloud architecture.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-slate-500 dark:text-slate-400">{exp.location}</p>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium mt-2 md:mt-0">
                      {exp.period}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Legacy to Cloud Migration",
      description: "Led complete migration of monolithic application to AWS cloud-native architecture using Terraform and Kubernetes.",
      technologies: ["AWS", "Terraform", "Kubernetes", "EKS"],
      result: "Reduced deployment time from 3 hours to 20 minutes",
      icon: Cloud
    },
    {
      title: "Automated CI/CD Pipeline",
      description: "Designed GitHub-triggered Jenkins pipeline with automated testing, security scans, and blue-green deployments.",
      technologies: ["Jenkins", "GitHub Actions", "SonarQube", "ArgoCD"],
      result: "60% faster release cycles, 80% fewer manual errors",
      icon: Drill
    },
    {
      title: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring stack with Prometheus, Grafana, and ELK for real-time observability.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
      result: "90% faster issue detection, improved uptime",
      icon: Shield
    },
    {
      title: "Custom DevOps CLI Drill",
      description: "Built Go-based CLI tool to automate internal DevOps workflows and routine operational tasks.",
      technologies: ["Go", "CLI", "Automation", "Workflow"],
      result: "Saved 200+ developer hours per quarter",
      icon: Code
    },
    {
      title: "Container Orchestration",
      description: "Containerized 25+ microservices using Docker and deployed to EKS with GitOps-based deployments.",
      technologies: ["Docker", "Amazon EKS", "Helm", "GitOps"],
      result: "40% reduction in deployment rollbacks",
      icon: Drill
    },
    {
      title: "Cloud Cost Optimization",
      description: "Developed Python ML scripts to analyze AWS billing data and identify cost optimization opportunities.",
      technologies: ["Python", "Machine Learning", "AWS Billing", "Analytics"],
      result: "18% reduction in monthly cloud spend",
      icon: Cloud
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate my expertise in cloud architecture and DevOps automation.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    <strong>Result:</strong> {project.result}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function EducationSection() {
  const certifications = [
    // { name: "AWS Solutions Architect", issuer: "Amazon Web Services", icon: "🔧" },
    // { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", icon: "⚙️" },
    // { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", icon: "🏗️" },
    // { name: "Docker Certified Associate", issuer: "Docker Inc.", icon: "📦" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Continuous learning and professional development in cloud technologies and computer science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp}>
            <Card className="shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                </div>
                
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Master of Science in Computer Science</h4>
                  <p className="text-primary font-medium">California State University, Long Beach</p>
                  <p className="text-slate-500 dark:text-slate-400">Jan 2023 – Dec 2024</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">GPA: 3.6/4.0</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Distributed Computing", "Machine Learning", "Software Engineering"].map((course) => (
                      <Badge key={course} variant="secondary" className="bg-primary/10 text-primary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <IdCard className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">{cert.name}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                      </div>
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to discuss your next DevOps project or cloud infrastructure needs? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">raviteja3061@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300">562-399-6151</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">California, USA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/raviteja-m-7a769a218/" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/raviteja6031" className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:raviteja3061@outlook.com" className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            {/* Contact form will be rendered here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Raviteja M</h3>
          <p className="text-slate-400 mb-6">AWS Java Engineer & Senior DevOps Engineer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:raviteja3061@outlook.com" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/raviteja-m-7a769a218/" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/raviteja6031" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">&copy; 2024 Raviteja Reddy Maruri. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { AboutData } from '@/types/portfolio';

interface AboutProps {
  data: AboutData;
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {data.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {data.kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium w-24">Email:</span>
                <span className="text-foreground">{data.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium w-24">Phone:</span>
                <span className="text-foreground">{data.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-medium w-24">Location:</span>
                <span className="text-foreground">{data.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

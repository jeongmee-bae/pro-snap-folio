import { motion } from 'framer-motion';
import { ExperienceItem } from '@/types/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  items: ExperienceItem[];
}

const Experience = ({ items }: ExperienceProps) => {
  const formatDate = (date: string) => {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="mb-12 md:ml-20 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.25rem] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{item.position}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{item.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {formatDate(item.startDate)} - {formatDate(item.endDate)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

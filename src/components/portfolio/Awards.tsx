import { motion } from 'framer-motion';
import { Award as AwardType } from '@/types/portfolio';
import { Award, GraduationCap, FileCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AwardsProps {
  awards: AwardType[];
}

const Awards = ({ awards }: AwardsProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Award className="h-6 w-6" />;
      case 'certificate':
        return <FileCheck className="h-6 w-6" />;
      case 'education':
        return <GraduationCap className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'bg-primary';
      case 'certificate':
        return 'bg-secondary';
      case 'education':
        return 'bg-accent';
      default:
        return 'bg-primary';
    }
  };

  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return month ? `${monthNames[parseInt(month) - 1]} ${year}` : year;
  };

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Awards & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`${getTypeColor(award.type)} text-primary-foreground p-3 rounded-xl`}>
                    {getIcon(award.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                      <Badge variant="outline" className="text-xs capitalize whitespace-nowrap">
                        {award.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-1">{award.organization}</p>
                    <p className="text-muted-foreground text-xs mb-3">{formatDate(award.date)}</p>

                    {award.description && (
                      <p className="text-sm text-foreground">{award.description}</p>
                    )}
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

export default Awards;

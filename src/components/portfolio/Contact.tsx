import { motion } from 'framer-motion';
import { ContactData } from '@/types/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ContactProps {
  data: ContactData;
}

const Contact = ({ data }: ContactProps) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    toast({
      title: 'Email copied!',
      description: 'Email address has been copied to clipboard.',
    });
  };

  const sendEmail = () => {
    window.location.href = `mailto:${data.email}`;
  };

  const openKakaoTalk = () => {
    if (data.kakaoTalk) {
      window.open(`https://open.kakao.com/o/${data.kakaoTalk}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{data.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{data.location}</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>

                <div className="space-y-4">
                  <Button onClick={sendEmail} className="w-full justify-start" variant="outline" size="lg">
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </Button>

                  <Button onClick={copyEmail} className="w-full justify-start" variant="outline" size="lg">
                    <Copy className="mr-3 h-5 w-5" />
                    Copy Email
                  </Button>

                  {data.kakaoTalk && (
                    <Button onClick={openKakaoTalk} className="w-full justify-start" variant="outline" size="lg">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      KakaoTalk
                    </Button>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4">Connect with me</h4>
                  <div className="flex gap-3">
                    {data.github && (
                      <Button asChild variant="outline" size="icon">
                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {data.linkedin && (
                      <Button asChild variant="outline" size="icon">
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {data.website && (
                      <Button asChild variant="outline" size="icon">
                        <a href={data.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

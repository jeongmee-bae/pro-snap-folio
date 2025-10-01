import { Project } from '@/types/portfolio';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Images */}
          <div className="grid gap-4">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} - ${idx + 1}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About the Project</h3>
            <p className="text-muted-foreground">{project.detailedDescription}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contributions */}
          <div>
            <h3 className="text-xl font-semibold mb-3">My Contributions</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.contributions.map((contribution, idx) => (
                <li key={idx}>{contribution}</li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Results & Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Links</h3>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <Button key={idx} asChild variant="outline">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.type === 'github' && <Github className="mr-2 h-4 w-4" />}
                      {link.type === 'demo' && <ExternalLink className="mr-2 h-4 w-4" />}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

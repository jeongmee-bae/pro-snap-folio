import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Save } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';
import { toast } from '@/hooks/use-toast';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (data: PortfolioData) => void;
}

const AdminPanel = ({ isOpen, onClose, data, onSave }: AdminPanelProps) => {
  const [jsonData, setJsonData] = useState(JSON.stringify(data, null, 2));

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonData);
      onSave(parsed);
      toast({
        title: 'Success!',
        description: 'Portfolio data has been updated.',
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid JSON format. Please check your data.',
        variant: 'destructive',
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: 'Downloaded!',
      description: 'Portfolio data has been downloaded.',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Admin Panel</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">JSON Editor</TabsTrigger>
            <TabsTrigger value="guide">Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Portfolio Data (JSON)</label>
              <textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="w-full h-96 p-4 rounded-lg border border-border bg-background font-mono text-sm"
                spellCheck={false}
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleSave} className="flex-1">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
              <Button onClick={handleDownload} variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download JSON
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="guide" className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold">How to Use Admin Panel</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>Edit the JSON data in the editor tab</li>
                <li>Make sure the JSON format is valid</li>
                <li>Click "Save Changes" to update your portfolio</li>
                <li>Or download the JSON file for backup</li>
              </ol>

              <h3 className="text-lg font-semibold mt-6">Data Structure</h3>
              <p className="text-muted-foreground">
                The portfolio data contains sections for:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li><strong>about:</strong> Personal information and KPIs</li>
                <li><strong>experience:</strong> Work history and achievements</li>
                <li><strong>skills:</strong> Technical skills grouped by category</li>
                <li><strong>projects:</strong> Portfolio projects with details</li>
                <li><strong>awards:</strong> Awards, certificates, and education</li>
                <li><strong>contact:</strong> Contact information and social links</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6">Access Admin Mode</h3>
              <p className="text-muted-foreground">
                Click the "Portfolio" logo 5 times to open this panel.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AdminPanel;

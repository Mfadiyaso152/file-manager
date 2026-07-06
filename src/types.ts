export interface ExternalTool {
  id: string;
  name: string;
  arabicName: string;
  url: string;
  description: string;
  longDescription: string;
  iconName: 'Image' | 'Shuffle' | 'FileSignature';
  accentColor: string;
  hoverColor: string;
  benefits: string[];
  recommendedFor: string[];
}

export interface AnalyzedFile {
  name: string;
  size: number;
  type: string;
  extension: string;
  previewUrl?: string;
  lastModified: number;
}

export interface MemeState {
  isLoading: boolean;
  generatedImage: string | null;
  error: string | null;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum GenerationType {
  RANDOM = 'RANDOM',
  CUSTOM = 'CUSTOM'
}
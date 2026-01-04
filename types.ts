
export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface LegacyStat {
  label: string;
  value: string;
  suffix: string;
}

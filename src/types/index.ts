export interface Patient {
  id: string;
  name: string;
  avatarColor: string;
}

export interface Emotion {
  value: string;
  label: string;
}

export interface CheckIn {
  id: string;
  patientId: string;
  date: string;
  mood: number;
  anxiety: number;
  energy: number;
  sleep: 'poor' | 'fair' | 'good' | 'excellent';
  emotion: string;
  notes: string;
}

export interface Task {
  id: string;
  patientId: string;
  type: 'auto-thought' | 'behavioral' | 'coping-plan' | 'relapse' | 'emotional-diary';
  title: string;
  objective: string;
  dueDate: string;
  status: 'pending' | 'completed';
  response?: TaskResponse;
  createdAt: string;
}

export interface TaskResponse {
  situation: string;
  emotion: string;
  emotionIntensity: number;
  thought: string;
  supportingEvidence: string;
  contradictingEvidence: string;
  alternativeThought: string;
  action: string;
  submittedAt: string;
}

export interface FreeRegistration {
  id: string;
  patientId: string;
  date: string;
  situation: string;
  emotion: string;
  emotionIntensity: number;
  thought: string;
  supportingEvidence: string;
  contradictingEvidence: string;
  alternativeThought: string;
  action: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  type: 'text' | 'audio' | 'exercise' | 'pdf';
  content: string;
}

export interface ClinicalNote {
  patientId: string;
  week: string;
  summary: string;
  averageMood: number;
  averageAnxiety: number;
  completedTasks: number;
  checkInsCount: number;
}

export type SectionId = 'quem-sou-eu' | 'o-que-faco' | 'hobbies';
export type SocialId = 'github' | 'facebook' | 'instagram' | 'linkedin' | 'whatsapp' | 'email';
export type HobbyIcon = 'sports' | 'photography' | 'motorcycle' | 'friends';

export interface CvSection { id: SectionId; title: string }
export interface CvHighlight { value: string; label: string }
export interface CvLanguage { name: string; level: string }
export interface CvEducation { period: string; title: string; school: string; grade?: string }
export interface CvCurrentJob { role: string; company: string; period: string; duties: string[] }
export interface CvPreviousJob { id: string; role: string; company: string; period: string; bullets: string[] }
export interface CvSkillGroup { group: string; items: string[] }
export interface CvHobby { id: string; title: string; text: string; icon: HobbyIcon }
export interface CvSocial { id: SocialId; label: string; href: string }

export interface CvData {
  person: { name: string; title: string; photo: string | null };
  sections: CvSection[];
  highlights: CvHighlight[];
  about: { summary: string; strengths: string[]; languages: CvLanguage[] };
  education: CvEducation[];
  current: CvCurrentJob;
  previous: CvPreviousJob[];
  skills: CvSkillGroup[];
  hobbies: CvHobby[];
  socials: CvSocial[];
}

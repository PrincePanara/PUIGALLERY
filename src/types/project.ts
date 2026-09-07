export type DeviceType = 'mobile' | 'web' | 'desktop';

export type NoteKind = 'INTERACTION' | 'UX DECISION';

export interface ScreenNote {
  /** position inside the logical screen, in percent */
  x: number;
  y: number;
  kind: NoteKind;
  body: string;
}

export interface Screen {
  /** stable id, used by the screen renderer registry */
  id: string;
  number: string;
  title: string;
  /** one or two short lines — never a case study */
  why?: string;
  notes?: ScreenNote[];
  /** components worth inspecting when the visitor zooms in */
  detail?: {
    label: string;
    parts: string[];
  };
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  type: DeviceType;
  category: string;
  role: string;
  year: string;
  status: string;
  /** shown in the address bar of the browser mockup */
  domain?: string;
  /** one line, editorial */
  line: string;
  accent: string;
  screens: Screen[];
}
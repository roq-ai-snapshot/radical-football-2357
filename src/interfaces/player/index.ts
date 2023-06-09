import { ParentInterface } from 'interfaces/parent';
import { PerformanceDataInterface } from 'interfaces/performance-data';
import { UserInterface } from 'interfaces/user';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id: string;
  coach_id?: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  parent?: ParentInterface[];
  performance_data?: PerformanceDataInterface[];
  user?: UserInterface;
  coach?: CoachInterface;
  _count?: {
    parent?: number;
    performance_data?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  coach_id?: string;
  status?: string;
}

import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  player?: PlayerInterface[];
  user?: UserInterface;
  _count?: {
    player?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}

import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceDataInterface {
  id?: string;
  player_id: string;
  data: string;
  status: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  player?: PlayerInterface;
  _count?: {};
}

export interface PerformanceDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  data?: string;
  status?: string;
}

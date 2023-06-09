const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  parents: 'parent',
  'performance-data': 'performance_data',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

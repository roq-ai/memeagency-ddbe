const mapping: Record<string, string> = {
  agencies: 'agency',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

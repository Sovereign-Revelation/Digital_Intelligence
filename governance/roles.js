const roles = {
  ADMIN: 'admin',
  AGENT: 'agent',
  OBSERVER: 'observer',
};

const permissions = {
  admin: ['create', 'read', 'update', 'delete'],
  agent: ['read', 'update'],
  observer: ['read'],
};

function hasPermission(role, action) {
  return permissions[role]?.includes(action);
}

module.exports = { roles, hasPermission };
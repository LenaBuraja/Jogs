const PROTOCOL = 'https';
const SERVER = 'jogtracker.herokuapp.com';
const PREFIX = 'api';
const VERSION = 'v1';
const ROUTE_AUTH = '/auth';
const ROUTE_DATA = '/data';

const PATH = `${PROTOCOL}://${SERVER}/${PREFIX}/${VERSION}`;

export { ROUTE_AUTH, ROUTE_DATA, PATH };

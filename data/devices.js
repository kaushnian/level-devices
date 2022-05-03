const DEVICES = [
  {
    id: 'device-1',
    status: 'REQUESTED',
    name: 'light switch 1',
    type: 'SWITCH',
    state: 'off',
  },
  {
    id: 'device-2',
    status: 'PURCHASED',
    name: 'light switch 2',
    type: 'SWITCH',
    state: 'off',
  },
  {
    id: 'device-3',
    status: 'REQUESTED',
    name: 'light switch 3',
    type: 'SWITCH',
    state: 'off',
  },
  {
    id: 'device-4',
    status: 'SHIPPED',
    name: 'light switch 4',
    type: 'SWITCH',
    state: 'off',
  },
  {
    id: 'device-5',
    status: 'SHIPPED',
    name: 'door lock',
    type: 'LOCK',
    codes: ['1234', '2345', '3456', '4567'],
    locked: true,
  },
  {
    id: 'device-6',
    status: 'INSTALLED',
    name: 'hallway dimmer 1',
    type: 'DIMMER',
    level: 0.85,
  },
  {
    id: 'device-7',
    status: 'SHIPPED',
    name: 'hallway dimmer 2',
    type: 'DIMMER',
    level: 0.85,
  },
  {
    id: 'device-8',
    status: 'INSTALLED',
    name: 'thermostat',
    type: 'THERMO',
    temp: 72.0,
    mode: 'AUTO',
  },
];

export function getDevices() {
  console.log('getDevices');
  return DEVICES;
}

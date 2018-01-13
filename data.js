exports.steps = [
  {
    num: '1',
    step: 'Check main structure for damage and fractures and ensure castor wheel',
    result: '________________kPa'
  },
  {
    num: '2',
    step:
      'Check main structure for damage and fractures and ensure castor wheels are turning freely and grease if necessary. Also ensure castor wheel locks are operating correctly.',
    result: '________________kPa'
  },

  { num: '3', step: 'Visually inspect recirculation system for defect', result: '' },
  { num: '4', step: 'Check pipes and fittings for leaks', result: '' },
  { num: '5', step: 'Verify recirculation pump (PU105) is operating correctly.', result: '' },
  { num: '6', step: 'Verify recirculation pump (PU106) is operating correctly', result: '' },
  { num: '7', step: 'From the HMI, record the pre-filter pressure', result: 'PT101_________kPa' },
  { num: '8', step: 'Record Post Filter Pressure', result: 'PT102_________kPa' },
  { num: '9', step: 'Record recirculation line pressure', result: 'PT103_________kPa' },
  {
    num: '10',
    step: 'Change filters if the pressure difference between PT101 and PT102 is more than 200 kPa',
    result: ''
  }
];

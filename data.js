exports.steps = [
  {
    num: "1",
    step:
      "Check main structure for damage and fractures and ensure castor wheel",
    result: "________________kPa"
  },
  {
    num: "2",
    step:
      "Check main structure for damage and fractures and ensure castor wheels are turning freely and grease if necessary. Also ensure castor wheel locks are operating correctly.",
    result: "________________kPa"
  },

  {
    num: "3",
    step: "Visually inspect recirculation system for defect",
    result: ""
  },
  { num: "4", step: "Check pipes and fittings for leaks", result: "" },
  {
    num: "5",
    step: "Verify recirculation pump (PU105) is operating correctly.",
    result: ""
  },
  {
    num: "6",
    step: "Verify recirculation pump (PU106) is operating correctly",
    result: ""
  },
  {
    num: "7",
    step: "From the HMI, record the pre-filter pressure",
    result: "PT101_________kPa"
  },
  {
    num: "8",
    step: "Record Post Filter Pressure",
    result: "PT102_________kPa"
  },
  {
    num: "9",
    step: "Record recirculation line pressure",
    result: "PT103_________kPa"
  },
  {
    num: "10",
    step:
      "Change filters if the pressure difference between PT101 and PT102 is more than 200 kPa",
    result: ""
  }
];

exports.tasks = [
  {
    TaskNo: "MTDL-002",
    TaskDesp: "Monthly Pre-filtration System Inspection",
    IQNo: "WAT002",
    IQDescription: "Purified Water System",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-003",
    TaskDesp: "Monthly Staging System Inspection",
    IQNo: "WAT002",
    IQDescription: "Purified Water System",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-159",
    TaskDesp: "6 Monthly Service Sampling Room HVAC",
    IQNo: "AC/11",
    IQDescription: "Sampling Room HVAC System",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-160",
    TaskDesp: "Quarterly Particle Counting - Wash Bay",
    IQNo: "FC304",
    IQDescription: "Wash Bay / Air Lock Fan Coil Unit",
    Owner: "Microbiologist"
  },
  {
    TaskNo: "MTDL-161",
    TaskDesp: "Quarterly Particle Counting - Wash Bay Air Lock",
    IQNo: "FC304",
    IQDescription: "Wash Bay / Air Lock Fan Coil Unit",
    Owner: "Microbiologist"
  },
  {
    TaskNo: "MTDL-172",
    TaskDesp: "Quartly Maintenance Heated Single Nozzle Filler",
    IQNo: "FL620",
    IQDescription: "Heated Single Nozzle Filler",
    Owner: "Packaging"
  },
  {
    TaskNo: "MTDL-174",
    TaskDesp: "Quarterly Maintenance on Asset Cap Feeder Line 1",
    IQNo: "CP607",
    IQDescription: "Asset Cap Feeding Machine",
    Owner: "Packaging"
  },
  {
    TaskNo: "MTDL-175",
    TaskDesp: "6 Monthly Maintenance Impresstik Labeller Line 2",
    IQNo: "LB605",
    IQDescription: "Impresstik Labeller Line 2",
    Owner: "Packaging"
  },
  {
    TaskNo: "MTDL-183",
    TaskDesp: "3 Monthly Maintenance Axomatic 1000 tube filler (Axo 2)",
    IQNo: "FL624",
    IQDescription: "Axomatic 1000 Tube Filler (Axo 2)",
    Owner: "Packaging"
  },
  {
    TaskNo: "MTDL-204",
    TaskDesp: "Quarterly Sanitisation of Purified Water Outlet Valves",
    IQNo: "WAT002",
    IQDescription: "Purified Water System",
    Owner: "Manufacturing"
  },
  {
    TaskNo: "MTDL-212",
    TaskDesp: "Monthly Maintenance - Steam Plant",
    IQNo: "AX706",
    IQDescription: "Fulton 30J Boiler",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-213",
    TaskDesp: "Monthly Maintenance - Steam Plant",
    IQNo: "AX707",
    IQDescription: "Fulton 30J Boiler",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-239",
    TaskDesp: "6 Monthly Replacement of pre filter on oven",
    IQNo: "OV811",
    IQDescription: "Labec Depyrogenation Oven",
    Owner: "Maintenance"
  },
  {
    TaskNo: "MTDL-243",
    TaskDesp: "6 Monthly maintenance Impresstik syringe labeller",
    IQNo: "LA604",
    IQDescription: "Impresstik Labeller 2001VAC RCT",
    Owner: "Packaging"
  }
];

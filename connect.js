"use strict";
const rpt = require('./report.js');

const fileLoc =
  "C:\Users\danielp\Desktop\deltaData\backend\ValData.mdb"; /* eslint-disable prettier */
const ADODB = require("node-adodb");
const connection = ADODB.open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\Users\\danielp\\Desktop\\deltaData\\backend\\ValData.mdb;");

async function query() {
  try {
    const tasks = await connection.query("SELECT TaskNo, TaskDesp, IQNo, IQDescription, Owner FROM tblMaintSched WHERE Stage > 0");
    const taskSteps = await connection.query("SELECT * FROM tblMaintTask");
    return rpt.runReport(tasks, taskSteps);
  } catch (error) {
    console.error(error);
  }
}

query();



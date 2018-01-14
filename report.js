let pdf = require("pdfkit");
const fs = require("fs");
const data = require("./data.js");
const header = require("./header.js");
const footer = require("./footer.js");
const procedure = require("./procedure.js");
const taskAct = data.steps;

const fontReg = "./fonts/SourceSansPro-Regular.ttf";
const fontBold = "./fonts/SourceSansPro-Bold.ttf";

exports.runReport = (tasks, taskSteps) => {
  try {
    // Create a document
    doc = new pdf({
      autoFirstPage: false,
      size: [595, 842],
      margin: 5
    });

    // Pipe its output somewhere, like to a file or HTTP response
    doc.pipe(fs.createWriteStream("output.pdf"));

    doc.on("pageAdded", () => {
      doc
        .fontSize(14)
        .font(fontBold)
        .text("Delta Laboratories", 0, 0, { align: "center" });
      doc.text("Preventative Maintenance Task", { align: "center" });
    });

    tasks.forEach(task => {
      header.taskHeader(doc, task, fontReg, fontBold);
      const steps = taskSteps.filter(step => step.TaskNo === task.TaskNo);

      procedure.procedureBody(doc, steps, task);
      footer.footerSection(doc, fontBold, fontReg);
    });

    //   Finalize PDF file
    doc.end();
  } catch (ex) {
    console.log(ex);
  }
};

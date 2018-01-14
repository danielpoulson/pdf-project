let pdf = require("pdfkit");
const fs = require("fs");
const data = require("./data.js");
const header = require("./header.js");
const procedure = require("./procedure.js");
const taskAct = data.steps;

const fontReg = "./fonts/SourceSansPro-Regular.ttf";
const fontBold = "./fonts/SourceSansPro-Bold.ttf";

const commentSection = 560;

exports.runReport = (tasks, taskSteps) => {
  try {
    // Create a document
    doc = new pdf({ autoFirstPage: false });

    // Pipe its output somewhere, like to a file or HTTP response
    doc.pipe(fs.createWriteStream("output.pdf"));

    doc.on("pageAdded", () => {
      doc
        .fontSize(14)
        .font(fontBold)
        .text("Delta Laboratories", 0, 20, { align: "center" });
      doc.text("Preventative Maintenance Task", { align: "center" });
    });

    tasks.forEach(task => {
      header.taskHeader(doc, task, fontReg, fontBold);
      const steps = taskSteps.filter(step => step.TaskNo === task.TaskNo);

      procedure.procedureBody(doc, steps, task);

      doc
        .moveDown()
        .font(fontBold)
        .fontSize(14)
        .text("Comments", 40, commentSection);

      doc.rect(40, commentSection + 30, 520, 120).stroke();

      doc
        .font(fontReg)
        .fontSize(12)
        .text(
          "Maintenance Work Conducted by (Sign)____________________ (Date)______________",
          100,
          commentSection + 130
        );
    });

    //   Finalize PDF file
    doc.end();
  } catch (ex) {
    console.log(ex);
  }
};

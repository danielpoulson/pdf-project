const taskRow = require("./taskRow.js");
const header = require("./header.js");
const fontReg = "./fonts/SourceSansPro-Regular.ttf";
const fontBold = "./fonts/SourceSansPro-Bold.ttf";

exports.procedureBody = (doc, steps, task) => {
  let stepHeight = 204;
  let rowHeight = 0;
  const stepsSorted = steps.sort((a, b) => (a.StepNo > b.StepNo ? 1 : -1));
  stepsSorted.forEach(step => {
    const _lines = Math.ceil(taskRow.rowLines(step.Description));
    taskRow.row(doc, fontReg, 11, stepHeight, step, rowHeight);

    if (stepHeight > 550) {
      doc
        .fontSize(14)
        .font(fontBold)
        .text("This task is contined on the next page", 0, stepHeight + 60, {
          align: "center"
        });
      header.taskHeader(doc, task, fontReg, fontBold);
      rowHeight = 204;
      stepHeight = 204;
    } else {
      rowHeight = _lines > 1 ? stepHeight + 14 * _lines : stepHeight + 18;
    }

    stepHeight = rowHeight;
  });
};

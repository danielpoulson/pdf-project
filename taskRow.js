exports.row = (doc, fontReg, fontSize, stepHeight, step, rowHeight) => {
  doc
    .font(fontReg)
    .fontSize(fontSize)
    .lineGap(0.5)
    .text(step.StepNo, 50, stepHeight)
    .text(step.Description, 70, stepHeight, { width: 350 })
    .text(step.Result, 420, rowHeight - 20);
};

exports.rowLines = step => step.length / 70;

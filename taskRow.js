exports.row = (doc, fontReg, fontSize, stepHeight, step, rowHeight) => {
  doc
    .font(fontReg)
    .fontSize(fontSize)
    .lineGap(0.5)
    .text(step.StepNo, 30, stepHeight)
    .text(step.Description, 50, stepHeight, { width: 350 })
    .text(step.Result, 400, rowHeight - 20)
    .lineWidth(0.5)
    .rect(550, stepHeight, 12, 12)
    .stroke();
};

exports.rowLines = step => step.length / 70;

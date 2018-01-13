exports.row = (doc, fontReg, fontSize, stepHeight, rec, rowHeight) => {
  return doc
    .font(fontReg)
    .fontSize(fontSize)
    .text(rec.num, 50, stepHeight)
    .text(rec.step, 70, stepHeight, { width: 350 })
    .text(rec.result, 420, rowHeight - 20);
};

exports.rowLines = step => step.length / 60;

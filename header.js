const groupHeight1 = 70;
const groupHeight2 = 120;
const groupHeight3 = 150;

exports.taskHeader = (doc, task, fontReg, fontBold) => {
  doc.addPage();
  doc
    .font(fontBold)
    .fontSize(14)
    .text("Department", 50, groupHeight1)
    .text("Equipment", 150, groupHeight1)
    .text("Equipment No", 450, groupHeight1);

  doc
    .moveTo(40, groupHeight1 + 18)
    .lineTo(550, groupHeight1 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text(task.Owner, 50, groupHeight1 + 22)
    .text(task.IQDescription, 150, groupHeight1 + 22)
    .text(task.IQNo, 450, groupHeight1 + 22);

  doc
    .font(fontBold)
    .fontSize(14)
    .text("Task Title", 50, groupHeight2)
    .text("Task No", 450, groupHeight2);

  doc
    .moveTo(40, groupHeight2 + 18)
    .lineTo(550, groupHeight2 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text(task.TaskDesp, 50, groupHeight2 + 22)
    .text(task.TaskNo, 450, groupHeight2 + 22);

  doc
    .font(fontBold)
    .fontSize(14)
    .text("Task Procedure", 50, groupHeight3 + 30)
    .text("Result", 450, groupHeight3 + 30);

  doc
    .moveTo(40, groupHeight3 + 48)
    .lineTo(550, groupHeight3 + 48)
    .stroke()
    .moveDown(1);
};

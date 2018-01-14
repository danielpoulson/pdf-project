const groupHeight1 = 50;
const groupHeight2 = 100;
const groupHeight3 = 130;

exports.taskHeader = (doc, task, fontReg, fontBold) => {
  doc.addPage();

  // Header Section 1

  doc
    .font(fontBold)
    .fontSize(14)
    .text("Department", 30, groupHeight1)
    .text("Equipment", 150, groupHeight1)
    .text("Equipment No", 450, groupHeight1);

  doc
    .moveTo(20, groupHeight1 + 18)
    .lineTo(570, groupHeight1 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text(task.Owner, 30, groupHeight1 + 22)
    .text(task.IQDescription, 150, groupHeight1 + 22)
    .text(task.IQNo, 450, groupHeight1 + 22);

  // Header Section 2
  doc
    .font(fontBold)
    .fontSize(14)
    .text("Task Title", 30, groupHeight2)
    .text("Task No", 450, groupHeight2);

  doc
    .moveTo(20, groupHeight2 + 18)
    .lineTo(570, groupHeight2 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text(task.TaskDesp, 30, groupHeight2 + 22)
    .text(task.TaskNo, 450, groupHeight2 + 22);

  // Header Section 3
  doc
    .font(fontBold)
    .fontSize(14)
    .text("Task Procedure", 30, groupHeight3 + 30)
    .text("Result", 410, groupHeight3 + 30)
    .text("Completed", 500, groupHeight3 + 30);

  doc
    .moveTo(20, groupHeight3 + 48)
    .lineTo(570, groupHeight3 + 48)
    .stroke()
    .moveDown(1);
};

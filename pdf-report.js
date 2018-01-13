let pdf = require('pdfkit');
const fs = require('fs');
const taskRow = require('./taskRow.js');
const data = require('./data.js');

const groupHeight1 = 70;
const groupHeight2 = 120;
const groupHeight3 = 150;
let stepHeight = 204;
const fontReg = './fonts/SourceSansPro-Regular.ttf';
const fontBold = './fonts/SourceSansPro-Bold.ttf';

const taskAct = data.steps;

try {
  // Create a document
  doc = new pdf({ autoFirstPage: false });

  // Pipe its output somewhere, like to a file or HTTP response
  doc.pipe(fs.createWriteStream('output.pdf'));

  doc.on('pageAdded', () => {
    doc
      .fontSize(14)
      .font(fontBold)
      .text('Delta Laboratories', 0, 20, { align: 'center' });
    doc.text('Preventative Maintenance Task', { align: 'center' });
  });

  doc.addPage();
  doc
    .font(fontBold)
    .fontSize(14)
    .text('Department', 50, groupHeight1)
    .text('Equipment', 250, groupHeight1)
    .text('Equipment No', 450, groupHeight1);

  doc
    .moveTo(40, groupHeight1 + 18)
    .lineTo(550, groupHeight1 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text('Validation', 50, groupHeight1 + 22)
    .text('Big Ass Oven', 250, groupHeight1 + 22)
    .text('OV-234', 450, groupHeight1 + 22);

  doc
    .font(fontBold)
    .fontSize(14)
    .text('Task Title', 50, groupHeight2)
    .text('Task No', 450, groupHeight2);

  doc
    .moveTo(40, groupHeight2 + 18)
    .lineTo(550, groupHeight2 + 18)
    .stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text('5 Yearly replacement of sand filter media', 50, groupHeight2 + 22)
    .text('MTDL-142', 450, groupHeight2 + 22);

  doc
    .font(fontBold)
    .fontSize(14)
    .text('Task Procedure', 50, groupHeight3 + 30)
    .text('Result', 450, groupHeight3 + 30);

  doc
    .moveTo(40, groupHeight3 + 48)
    .lineTo(550, groupHeight3 + 48)
    .stroke()
    .moveDown(1);

  taskAct.forEach(function(rec) {
    const _lines = Math.ceil(taskRow.rowLines(rec.step));
    const rowHeight = _lines > 1 ? stepHeight + 20 * _lines : stepHeight + 25;
    taskRow.row(doc, fontReg, 12, stepHeight, rec, rowHeight);
    stepHeight = rowHeight;
  });

  doc
    .moveDown()
    .font(fontBold)
    .fontSize(14)
    .text('Comments', 40, stepHeight + 30);

  doc.rect(40, stepHeight + 60, 520, 120).stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text('Maintenance Work Conducted by (Sign)____________________ (Date)______________', 100, stepHeight + 160);

  //   Finalize PDF file
  doc.end();
} catch (ex) {
  console.log(ex);
}

exports.footerSection = (doc, fontBold, fontReg) => {
  const commentSection = 650;
  doc
    .moveDown()
    .font(fontBold)
    .fontSize(14)
    .text("Comments", 30, commentSection);

  doc.rect(30, commentSection + 30, 540, 120).stroke();

  doc
    .font(fontReg)
    .fontSize(12)
    .text(
      "Maintenance Work Conducted by (Sign)____________________ (Date)______________",
      100,
      commentSection + 130
    );

  doc
    .font(fontReg)
    .fontSize(12)
    .text(
      "Entered into Maintenance Database by (Sign)____________________ (Date)______________",
      75,
      commentSection + 160
    );
};

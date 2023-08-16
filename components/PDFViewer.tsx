import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const PDFViewer = ({ pdfUrl }: any) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <Document file={pdfUrl} error>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PDFViewer;

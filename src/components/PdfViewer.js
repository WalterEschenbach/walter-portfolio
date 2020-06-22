import React from "react";
import Resume from "./Resume.pdf";

export default class PdfViewer extends React.Component {
  render() {
    return (
      <div>
        <a href={Resume} target="_blank">
          Download Pdf
        </a>
      </div>
      //   <iframe
      //     className="border"
      //     src="file:///C:/Users/dabea/Documents/source-code/walter-portfolio/public/files/Resume.pdf"
      //     title="Resume"
      //     width="500"
      //     height="700"
      //   ></iframe>
    );
  }
}

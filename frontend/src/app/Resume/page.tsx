import PDFViewer from "../../components/pdfviewer";

function Resume() {
    return (
        <PDFViewer pdfUrl={`/PatrickMolkaResume0416.pdf`} title={`Patrick Molka's Resume`} />
    );
}

export default Resume
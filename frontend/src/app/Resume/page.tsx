import PDFViewer from "../../components/pdfviewer";

function Resume() {
    return (
        <PDFViewer pdfUrl={`/PatrickMolkaResume20250514.pdf`} title={`Patrick Molka's Resume`} />
    );
}

export default Resume
import PDFViewer from "../../components/pdfviewer";

function Resume() {
    return (
        <PDFViewer pdfUrl={`/PatrickResume.pdf`} title={`Patrick Molka's Resume`} />
    );
}

export default Resume
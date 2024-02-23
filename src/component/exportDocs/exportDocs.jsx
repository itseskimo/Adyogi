import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import { dummyJson } from "../../config/config";
import { formatDate } from "../../utils/utils";

const exportDocs = () => {

    function exportToCSV(data, filename = 'data.csv') {
        // Initialize CSV content with the header
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "id,customer,email,created,dueDate,amount,status\n"; // Header

        // Convert each data object to a CSV row
        data.forEach(row => {
            const csvRow = [
                row.id,
                `"${row.customer.replace(/"/g, '""')}"`, // Escape double quotes
                row.email,
                formatDate(row.created),
                formatDate(row.dueDate),
                row.amount,
                row.status
            ].join(",");
            csvContent += csvRow + "\r\n";
        });

        // Encode the CSV content
        const encodedUri = encodeURI(csvContent);

        // Create a temporary anchor tag to trigger the download
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link); // Required for Firefox

        // Trigger the download and remove the link
        link.click();
        document.body.removeChild(link);
    }



    function exportToPDF(data, filename = 'data.pdf') {
        const doc = new jsPDF();

        // Set the starting position and row height
        let y = 10;
        const rowHeight = 10;
        const headerFontSize = 12;
        const contentFontSize = 10;
        // Optionally, you can define the columns' x positions for a more table-like layout
        const xPositions = [10, 46, 96, 130, 166, 190]; // Adjust based on your needs

        doc.setFontSize(headerFontSize);

        // Add table header
        const headers = ["Customer", "Email", "Created", "Due Date", "Amount", "Status"];
        headers.forEach((header, index) => {
            doc.text(header, xPositions[index], y);
        });

        // Increase `y` to start adding table rows below the header
        y += rowHeight;
        doc.setFontSize(contentFontSize);

        data.forEach(item => {
            doc.text(item.customer, xPositions[0], y);
            doc.text(item.email, xPositions[1], y);
            doc.text(formatDate(item.created), xPositions[2], y);
            doc.text(formatDate(item.dueDate), xPositions[3], y);
            doc.text(item.amount, xPositions[4], y);
            doc.text(item.status, xPositions[5], y);
            y += rowHeight; // Move to the next row
        });

        // Save the PDF
        doc.save(filename);
    }


    function exportToExcel(data, filename = 'data.xlsx') {
        // Create a new workbook and a worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // If you are working in a browser environment:
        XLSX.writeFile(wb, filename)
    }

    return (
        <div className='flex items-center justify-end gap-4 m-6'>
            <button className='bg-red-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToPDF(dummyJson, 'invoices.pdf')}>Download PDF</button>
            <button className='bg-green-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToExcel(dummyJson, 'invoices.xlsx')}>Download EXCEL</button>
            <button className='bg-blue-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToCSV(dummyJson, 'invoices.csv')}>Download CSV</button>
        </div>
        )
}

export default exportDocs
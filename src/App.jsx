import './App.css'
import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './component/dropdown/dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setDropDownType } from './redux/features/general/generalSlice';
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import Pagination from './component/pagination/pagination';

export const res = [
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Raju Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "205.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Sachin Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "330.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Mahendra Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Jindal",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Sri",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Bamzai",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  {
    "id": 'INV-39512',
    "customer": "Camille Jenkins",
    "email": "retha.lehner47@hotmail.com",
    'created': "2022-10-22T02:15:00",
    'dueDate': "2024-01-14T02:15:00",
    "amount": "295.00",
    "status": "Draft"
  },
  {
    "id": 'INV-35515',
    "customer": "Genevieve Hammes",
    "email": "bernard63@yahoo.com",
    'created': "2021-11-22T02:15:00",
    'dueDate': "2024-01-09T03:02:00",
    "amount": "350.00",
    "status": "Draft"
  },
  {
    "id": 'INV-65015',
    "customer": "Alejandro Reichert",
    "email": "wava.muller47@gmail.com",
    'created': "2023-10-22T02:10:00",
    'dueDate': "2024-01-04T03:15:00",
    "amount": "475.00",
    "status": "Draft"
  },
  {
    "id": 'INV-85415',
    "customer": "Carl Bode",
    "email": "virgil.sikles@hotmail.com",
    'created': "2022-02-22T02:15:00",
    'dueDate': "2024-02-01T03:10:00",
    "amount": "295.00",
    "status": "Sent"
  },
  // ... more data objects
]


const App = () => {
  const [originalData, setOriginalData] = useState(res);
  const [data, setData] = useState(res);
  const [dropdown, setDropdown] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const dropRef = useRef(null)
  const sideBarRef = useRef(null)
  const dispatch = useDispatch()

  const { selectedType, paginationCount } = useSelector((state) => state.general);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });
  const [visibleColumns, setVisibleColumns] = useState({
    checked: true,
    customer: true,
    email: true,
    created: true,
    dueDate: true,
    amount: true,
    status: true
  });

  // Sorting logic
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to format the time part
  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(dateString).toLocaleTimeString('en-US', options).replace(/^0(?:0:)?/, '');
  };


  const SortIndicator = ({ column }) => {
    if (sortConfig.key !== column) return null;
    return sortConfig.direction === 'ascending' ? <svg className='rotate-180' fill="#000000" height="20px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 386.257 386.257" xml:space="preserve">
      <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
    </svg> :
      <svg fill="#000000" height="20px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 386.257 386.257" xml:space="preserve">
        <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
      </svg>;
  };

  // Function to sort data
  const sortedData = () => {
    let sortableItems = [...data]
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };


  const maxAmount = Math.max(...res.map(invoice => parseFloat(invoice.amount)))
  const minAmount = Math.min(...res.map(invoice => parseFloat(invoice.amount)));
  const totalAmt = data.slice(paginationCount * 10 - 10, paginationCount * 10).reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.amount);
  }, 0).toFixed(2);

  // Column visibility toggle
  const toggleColumnVisibility = (column) => {
    setVisibleColumns(prevState => {
      const updatedColumns = {
        ...prevState,
        [column]: !prevState[column]
      };

      // Update localStorage right after state is updated within this function
      localStorage.setItem('visibleColumns', JSON.stringify(updatedColumns));

      return updatedColumns;
    });
  };


  const handleClose = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setDropdown(false);
    }
    if (!sideBarRef?.current?.contains(e.target)) {
      setSideBarOpen(false)
    }
  };

  // Retrieve column visibility settings
  useEffect(() => {
    const savedColumns = localStorage.getItem('visibleColumns');
    if (savedColumns) {
      setVisibleColumns(JSON.parse(savedColumns));
    }
    document.addEventListener("click", handleClose, true);
    return () => document.removeEventListener("click", handleClose, true);
  }, []);



  const [amount, setAmount] = useState({ min: minAmount, max: maxAmount });
  const [createdDate, setCreatedDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleClear = () => {
    setAmount({ min: minAmount, max: maxAmount });
    setCreatedDate('');
    setDueDate('');
    dispatch(setDropDownType(''))
    setData(originalData)
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    let temp = originalData.filter((item) => {
      // Check if createdDate matches
      let matchesCreatedDate = createdDate ? item.created.split('T')[0] === createdDate : false;

      // Check if dueDate matches
      let matchesDueDate = dueDate ? item.dueDate.split('T')[0] === dueDate : false;

      // Check if amount is within the specified range
      let withinAmountRange = amount.min && amount.max ? (parseInt(item.amount) >= parseInt(amount.min) && parseInt(item.amount) <= parseInt(amount.max)) : false;

      // Check if status matches selectedType
      let matchesSelectedType = selectedType ? item.status === selectedType : false;

      return matchesDueDate && withinAmountRange && matchesSelectedType && matchesCreatedDate

    });
    console.log(temp)
    setData(temp)
  };

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
    <div>

      {/* Navbar */}
      <nav className='flex items-center justify-between py-2 px-6'>

        <div className="flex items-center relative w-[20%] min-w-28">
          <svg
            className="absolute  w-10 left-1  px-2 cursor-pointer"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9397 19.5002L14.5967 15.1572M14.5967 15.1572C15.3395 14.4143 15.9288 13.5324 16.3309 12.5618C16.7329 11.5911 16.9399 10.5508 16.9399 9.50021C16.9399 8.4496 16.7329 7.40929 16.3309 6.43866C15.9288 5.46803 15.3395 4.58609 14.5967 3.84321C13.8538 3.10032 12.9718 2.51103 12.0012 2.10898C11.0306 1.70693 9.99026 1.5 8.93966 1.5C7.88906 1.5 6.84874 1.70693 5.87811 2.10898C4.90748 2.51103 4.02555 3.10032 3.28266 3.84321C1.78233 5.34354 0.939453 7.37842 0.939453 9.50021C0.939453 11.622 1.78233 13.6569 3.28266 15.1572C4.78299 16.6575 6.81787 17.5004 8.93966 17.5004C11.0614 17.5004 13.0963 16.6575 14.5967 15.1572Z"
              stroke="#1C1C1C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            id="search"
            type="text"
            className="border-solid border-[1px] border-gray-300 rounded-md outline-none  py-[10px] pl-12 pr-2 w-full text-[#4C5864] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:text-[#4C5864]"
            placeholder="Search by anything..."
          />
        </div>


        <div className='flex items-center gap-8'>

          <ul onClick={() => setSideBarOpen(!sideBarOpen)} className='flex items-center gap-2 cursor-pointer border-solid border-[1px] border-gray-300 rounded-md py-2 px-4'>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z" stroke="#1C274C" stroke-width="1.5" />
            </svg>
            <li>Filter</li>
          </ul>

          <div className='relative'>
            <ul onClick={() => setDropdown(!dropdown)} className='grid grid-cols-2 gap-1 relative border-solid border-[1px] border-gray-300 rounded-md py-[11px] px-2 cursor-pointer'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
                <li key={i} className='w-3 h-[1.5px] bg-black'></li>
              ))}


            </ul>
            {
              dropdown && <div ref={dropRef} className='bg-white p-3 grid grid-cols-2  absolute left-[-185px] top-12 w-60 shadow shadow-gray-300 rounded-lg'>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('checked')}><input type='checkbox' checked={!visibleColumns.checked} />Checked</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('customer')}><input type='checkbox' checked={!visibleColumns.customer} /> Customer</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('email')}><input type='checkbox' checked={!visibleColumns.email} />Email</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('created')}><input type='checkbox' checked={!visibleColumns.created} />Created At</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('dueDate')}><input type='checkbox' checked={!visibleColumns.dueDate} />Due Date</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('amount')}><input type='checkbox' checked={!visibleColumns.amount} />Amount</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('status')}><input type='checkbox' checked={!visibleColumns.status} />Status</button>
                <button className='self-start justify-self-start flex items-center gap-2 hover:bg-slate-100 duration-500 py-2 w-full' onClick={() => toggleColumnVisibility('action')}><input type='checkbox' checked={!visibleColumns.action} />Action</button>
              </div>
            }
          </div>

        </div>


      </nav>


      {/* Table */}
      <div className=''>
        <ul className='flex justify-between  sm:grid  items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[50px,repeat(auto-fit,minmax(150px,1fr))]  gap-4 bg-[#f1f1f1] py-2 px-6 text-gray-600'>
          {visibleColumns.checked && <input type='checkbox' className='w-6 h-6 hidden xl:block' disabled onClick={() => requestSort('checked')} />}
          {visibleColumns.customer && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('customer')}>Customer <SortIndicator column="customer" /></li>}
          {visibleColumns.email && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('email')}>Email <SortIndicator column="email" /></li>}
          {visibleColumns.created && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('created')}>Created  <SortIndicator column="created" />   </li>}
          {visibleColumns.dueDate && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('dueDate')}>Due Date <SortIndicator column="dueDate" /></li>}
          {visibleColumns.amount && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('amount')}>Amount <SortIndicator column="amount" /></li>}
          {visibleColumns.status && <li className='flex items-center gap-3 cursor-pointer' onClick={() => requestSort('status')}>Status <SortIndicator column="status" /></li>}
        </ul>

        {sortedData().slice(paginationCount * 10 - 10, paginationCount * 10).map((item, index) => (
          <ul key={index} className='grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[50px,repeat(auto-fit,minmax(150px,1fr))]  gap-4 border-solid border-b-[1px] border-[[#f1f1f1]] py-2 px-6'>
            {visibleColumns.checked && <input type='checkbox' className='w-6 h-6 hidden xl:block' />}
            {visibleColumns.customer && <li className='flex items-center gap-3'>
              <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40px" height="40px" viewBox="796 796 200 200" enable-background="new 796 796 200 200" xml:space="preserve">
                <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100
	C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924
	s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86
	c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761
	c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719
	c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817
	C943.037,973.621,920.691,983.86,896,983.86z"/>
              </svg>
              <div className='flex flex-col'>
                <span>{item.customer}</span>
                <span className='text-sm'>{item.id}</span>
              </div>
            </li>}
            {visibleColumns.email && <li className='grid grid-cols-2 '> <span className='sm:hidden block'>Email</span>  <span>{item.email}</span></li>}
            {visibleColumns.created && <div className='grid grid-cols-2 '>
              <span className='sm:hidden block'>Created At</span>

              <li className='flex flex-col'>
              <span>{formatDate(item.created)}</span>
              <span className='text-sm'>{formatTime(item.created)}</span>
            </li>
              </div>}
            {visibleColumns.dueDate && <div className='grid grid-cols-2 '>
              <span className='sm:hidden block'>Due Date</span>

              <li className='flex flex-col'>
              <span>{formatDate(item.dueDate)}</span>
              <span className='text-sm'>{formatTime(item.dueDate)}</span>
            </li>
              </div>}
            {visibleColumns.amount && <li className='grid grid-cols-2 '> <span className='sm:hidden block'>Amount</span>  <span>{item.amount}</span></li>}
            {visibleColumns.status && <li className='grid grid-cols-2 '> <span className='sm:hidden block'>Status</span>  <span>{item.status}</span></li>}
          </ul>
        ))}



        <ul className='grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[50px,repeat(auto-fit,minmax(150px,1fr))] gap-4 bg-[#f1f1f1] py-2 px-6 text-gray-600'>
          {visibleColumns.checked && <li className=' cursor-pointer xl:block hidden' >-</li>}
          {visibleColumns.customer && <li className=' cursor-pointer xl:block hidden' >-</li>}
          {visibleColumns.email && <li className=' cursor-pointer xl:block hidden' >-</li>}
          {visibleColumns.created && <li className=' cursor-pointer xl:block hidden'>-</li>}
          {visibleColumns.dueDate && <li className=' gap-3 cursor-pointer' >TOTAL</li>}
          {visibleColumns.amount && <li className='flex items-center gap-3 cursor-pointer' >{totalAmt}</li>}
          {visibleColumns.status && <li className=' cursor-pointer xl:block hidden' >-</li>}
        </ul>
      </div>


      {/* Sidebar */}
      <section ref={sideBarRef} className={`${sideBarOpen ? 'left-0' : 'left-[-100%]'}   z-[1]  fixed top-0  w-[360px]  h-screen  ease-in duration-500 bg-white  shadow-2xl py-5 px-4`}>

        <ul className="flex items-center justify-between pb-2">
          <li>Table Filters</li>
          <svg onClick={() => setSideBarOpen(false)} className='cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="#1C1C1C" />
          </svg>
        </ul>

        <div className="border-solid border-b-[1px] border-gray-400"></div>

        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

          <section className="pt-3">
            <label htmlFor="amount-min">Amount</label>
            <div className='flex items-center gap-2'>
              <input
                className='border-solid border-[1px] border-gray-300 rounded-md outline-none  py-[8px]  px-3 w-full text-[#4C5864] placeholder:text-[#4C5864]'
                type="number"
                id="amount-min"
                value={amount.min}
                onChange={(e) => setAmount({ ...amount, min: e.target.value })}
              />
              <span>to</span>
              <input
                type="number"
                id="amount-max"
                className='border-solid border-[1px] border-gray-300 rounded-md outline-none  py-[8px]  px-3 w-full text-[#4C5864] placeholder:text-[#4C5864]'
                value={amount.max}
                onChange={(e) => setAmount({ ...amount, max: e.target.value })}
              />
            </div>
          </section>



          <section>
            <label>Created Date</label>
            <div className='relative overflow-hidden flex items-center border-solid border-[1px] border-gray-300 rounded-md outline-none'>
              <input
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
              />
              <svg className='absolute right-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5555 4.77778L7.99999 10.9691L1.44443 4.77778" stroke="#6B7684" strokeWidth="1.22222" className="select-none pointer-events-none transition-all ease-in"
                />
              </svg>
            </div>
          </section>




          <section>
            <label>Due Date</label>
            <div className='relative overflow-hidden flex items-center border-solid border-[1px] border-gray-300 rounded-md outline-none'>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <svg className='absolute right-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5555 4.77778L7.99999 10.9691L1.44443 4.77778" stroke="#6B7684" strokeWidth="1.22222" className="select-none pointer-events-none transition-all ease-in"
                />
              </svg>
            </div>
          </section>


          <section>
            <label>Status</label>
            <Dropdown options={['Draft', 'Sent']} />
          </section>

          <button className='bg-gray-300 py-[6px] rounded-md flex items-center justify-center gap-2 font-semibold' type="button" onClick={handleClear}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Clear
          </button>
          <button type="submit" className='bg-black text-white py-[6px] rounded-md'>Show Results</button>
        </form>

      </section>


      <div className='flex items-center justify-end gap-4 m-6'>

        <button className='bg-red-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToPDF(res, 'invoices.pdf')}>Download PDF</button>
        <button className='bg-green-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToExcel(res, 'invoices.xlsx')}>Download EXCEL</button>
        <button className='bg-blue-500 text-white text-sm sm:text-base px-2 sm:px-4 py-2 rounded' onClick={() => exportToCSV(res, 'invoices.csv')}>Download CSV</button>
      </div>
      <Pagination totalCount={data} />

    </div>
  );
};

export default App;

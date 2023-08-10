
import { ExportToCsv } from 'export-to-csv';
import Nav from "@/components/Nav"
import { useState, useEffect } from "react"

export default function Export() {


const [type, setType] = useState("all")
const [showDownloadButton, setShowDownloadButton] = useState(true);



const options = { 
    fieldSeparator: ',',
    filename: `export_data_${type}`,
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: `CRM Data Export`,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };


const getNames = () => {
  const csvExporter = new ExportToCsv(options);

  setShowDownloadButton(false)

    if (type === "teams" || type === "donors") {
      fetch(`/api/names/all?datatype=${type}`)
      .then((res) => res.json())
      .then((res) =>  csvExporter.generateCsv(res)) 
      setShowDownloadButton(true);
    } else {
      fetch(`/api/names/all`)
        .then((res) => res.json())
       .then((res) =>  csvExporter.generateCsv(res))
       setShowDownloadButton(true);
    }
  }


    return (
        <div className="flex h-screen bg-neutral-100">

        <Nav />
        <div className=" m-auto">
            <div className=" text-center border rounded bg-white p-5">
            <h1 className=" font-medium text-lg pb-3 mb-2 border-b">Select Export Type</h1>
            Please select the data you would like to export:
            <div className="flex flex-col py-3">
                <div className='flex justify-center gap-2'
                onClick={(e) => setType("all")}>
            <input
        type="radio"
        name="type"
        value="all"
        id="all"
        onChange={(e) => setType(e.target.value)}
        checked={type === "all"}
      />
      <label htmlFor="all">All Data</label>
      </div>

<div className='flex justify-center gap-5'
onClick={(e) => setType("teams")}>
      <input
        type="radio"
        name="type"
        value="teams"
        id="teams"
        checked={type === "teams"}
       onChange={(e) => setType(e.target.value)}
      />
      <label htmlFor="medium">Teams</label>
      </div>


<div className='flex justify-center gap-3'
onClick={(e) => setType("donors")}>
      <input
        type="radio"
        name="type"
        value="donors"
        id="donors"
        checked={type === "donors"}
       onChange={(e) => setType(e.target.value)}
      />
      <label htmlFor="large">Donors</label>
      </div>
      </div>
      <div className='border-t pt-3 flex justify-end'>
           {setShowDownloadButton ? 
            <button className="bg-blue-500 px-3 py-1 rounded text-white"
            onClick={getNames}>
                Export
            </button> : 
           "loading...."}
           </div>
            </div>
        </div>
        </div>
        
    )
}
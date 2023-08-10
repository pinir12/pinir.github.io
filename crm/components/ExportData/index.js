import { ExportToCsv } from 'export-to-csv';

export default function ExportData({names, searchValue}) {


          const options = { 
            fieldSeparator: ',',
            filename: `export_search_${searchValue}`,
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true, 
            showTitle: true,
            title: `Search results for '${searchValue}'`,
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
          };


          const runExport = () => {
            const csvExporter = new ExportToCsv(options);
 
            csvExporter.generateCsv(names)}

            return (
             <div
             
             className="w-1/2 flex justify-end">
              {names.length > 0 ?
              <button
              onClick={runExport}
              className="px-3 py-1 h-fit m-3 text-green-400 border border-green-600 rounded">
              Export search results
              </button> : null}
              </div>
            )
          
}
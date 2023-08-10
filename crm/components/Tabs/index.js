export default function Tabs({dataType, setDataType, getNames, searchValue, setNames}) {


const setType = (type) =>{
  setDataType(type);
  getNames(type);
}

    return (
        <div className="w-1/2">
        
<ul
  className="mb-5 p-1 flex list-none flex-row flex-wrap"
  role="tablist"
  >
  <li role="presentation">
    <span
      onClick={(e) => setType("all")}
      className={`
      ${dataType === `all`?'border-b-2 border-slate-800 bg-neutral-100 rounded-t' : 'border-b-0 bg-transparent'}
      mb-2 block px-7 pb-2.5 pt-4 text-xs font-medium uppercase cursor-default
      leading-tight text-neutral-600  hover:bg-neutral-100 `}
      
      >All</span>
  </li>
  <li role="presentation">
    <span
     onClick={(e) => setType("teams")}
     className={`
     ${dataType === `teams`?'border-b-2 border-slate-800 bg-neutral-100 rounded-t' : 'border-b-0 bg-transparent'}
     ${searchValue.length > 0 ?' hidden': `mb-2 block px-7 pb-2.5 pt-4 text-xs font-medium uppercase leading-tight
          cursor-default text-neutral-600  hover:bg-neutral-100`} `}
      >Teams</span >
  </li>
  <li role="presentation">
    <span
     onClick={(e) => setType("donors")}
     className={`
     ${dataType === `donors`?'border-b-2 border-slate-800 bg-neutral-100 rounded-t' : 'border-b-0 bg-transparent'}
     ${searchValue.length > 0 ?' hidden': `mb-2 block px-7 pb-2.5 pt-4 text-xs font-medium uppercase leading-tight
          cursor-default text-neutral-600  hover:bg-neutral-100`} `}
      >Donors</span >
  </li>
 
</ul>



</div>

    )
}
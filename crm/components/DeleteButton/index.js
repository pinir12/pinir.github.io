import { useState } from "react";


export default function DeleteButton( {name, getNames, setShowModal, dataType, showToast } ) {
    
    const [confirmDelete, setConfirmDelete] = useState(false);
    const id = name.id;

const deleteTicket = (evt) => {
    evt.preventDefault();
    fetch(`/api/names/delete?id=${id}`,
    {
        method: "DELETE",
    }
    )
    .then((res) => res.json());  
    setConfirmDelete(false);
    setShowModal(false);
    getNames(dataType)
    showToast();
}



    return (
    <div className="" onClick={e => e.stopPropagation()}>
         {confirmDelete?
       <div className="px-2 py-1
         font-light border rounded-lg border-red-400
         mx-3 text-red-600
         cursor-pointer" onClick={deleteTicket}>
        Confirm delete?

       </div>
     
       
       : 
       <div className="px-1 py-1 mx-3 border-red-600 border bg-white rounded text-red-600 cursor-pointer" onClick={() => setConfirmDelete(true)}>
       <svg fill="#dc2626" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg></div>
       }
        
   
    </div>
        )
}
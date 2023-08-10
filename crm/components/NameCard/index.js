import { useState } from "react"
import EditModal from "../EditModal.js"
import TypeDisplay from "../TypeDisplay";

export default function NameCard({ getNames, name, dataType, showToast }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="w-1/2"  >
            <div className="flex flex-row  items-center border-b border-gray-300 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setShowModal(true)}>
                <div className="px-3 py-3 w-1/2">
                    <h3 className="font-semibold">{name.first_name} {name.surname}</h3>
                    <span className="font-light">{name.email?name.email: "--no email provided--"}</span>
                </div>
                <div className="flex flex-row basis-1/2">
                <div className="mx-6 flex basis-1/2 justify-center  items-center">
                    <TypeDisplay
                        type={name.type}
                    />
                </div>
                <div className="mx-6 flex basis-1/2">
                    <div className="bg-gray-100 w-fit text-gray-800 text-lg border border-gray-500 font-medium mr-2 px-2.5 py-0.5 rounded">
                        {name.value}
                    </div>
                    </div>
                </div>
               


            </div>
            {showModal ? <EditModal
                setShowModal={setShowModal}
                name={name}
                getNames={getNames}
                dataType={dataType}
                showToast={showToast}
            /> : null}
        </div>
    )
}
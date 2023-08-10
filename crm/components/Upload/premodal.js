import Link from "next/link"



export default function Premodal({ setShowPreModal, setIsOpen }) {

    const actions = () => {
        setShowPreModal(false);
        setIsOpen(true);
    }



    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-brightness-50" onClick={() => setShowPreModal(false)}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col p-4 w-full bg-white outline-none focus:outline-none" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row items-start justify-center rounded-t border-b">
                        <div>
                            <span className=" whitespace-pre-wrap">Import file must be in the correct format for upload. Download template </span>
                            <span className=" whitespace-pre-wrap">
                                <Link className="underline" href={"/assets/ImportTemplate.csv"}>here</Link></span>


                            <div  className="my-3">
                                <span>Required fields are First Name, Surname, Type & Value</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end  m-3 mb-1 ">
                        <button className="px-3 py-1 text-red-500"
                            onClick={() => setShowPreModal(false)}
                        >
                            Cancel
                        </button>
                        <button className="bg-green-500 px-3 py-1 rounded text-white"
                            onClick={actions}
                        >
                            Proceed
                        </button>

                    </div>


                </div></div ></div >
    )
}
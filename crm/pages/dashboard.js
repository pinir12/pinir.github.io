import NameCard from "@/components/NameCard";
import Nav from "@/components/Nav";
import Head from "next/head";
import { useState, useEffect } from "react";
import AddModal from "@/components/AddModal";
import Tabs from "@/components/Tabs";
import SearchBar from "@/components/SearchBar";
import Spinner from "@/components/Spinner";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Upload from "@/components/Upload";
import Premodal from "@/components/Upload/premodal";
import ExportData from "@/components/ExportData";

export default function Dashboard() {
  const [names, setNames] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dataType, setDataType] = useState("all");
  const [responseLength, setResponseLength] = useState();
  const [showPreModal, setShowPreModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let from
  let namesLength
  if (names) {
    from = names.length;
    namesLength = names.length
  }
  const to = from + 14


  useEffect(() => {
    getNames();
  }, []);


  const getNames = (type) => {
    setNames([]);

    setResponseLength(20)
    if (type === "teams" || type === "donors") {
      fetch(`/api/names/names?datatype=${type}`)
        .then((res) => res.json())
        .then((res) => setNames(res));
      setSearchValue("");
    } else {
      fetch(`/api/names/names`)
        .then((res) => res.json())
        .then((res) => setNames(res));
      setSearchValue("");
    }
  }


  const loadMore = () => {
    const type = dataType

    if (type === "teams" || type === "donors") {
      fetch(`/api/names/loadmore?datatype=${type}&from=${from}&to=${to}`)
        .then((res) => res.json())
        .then((res) => {
          setNames(names.concat(res))
          setResponseLength(res.length)
        })
    } else {
      fetch(`/api/names/loadmore?from=${from}&to=${to}`)
        .then((res) => res.json())
        .then((res) => {
          setNames(names.concat(res))
          setResponseLength(res.length)
        })
    }
  }


  const searchMore = (value) => {
    fetch(`/api/names/searchmore?search=${value}&from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((res) => {
        setNames(names.concat(res))
        setResponseLength(res.length)
      })
  }


  const addTicket = () => {
    setShowAddModal(true);
  }



  const toastId = 'editModal'

  let showToast = () => {


    toast.success("Success", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastId,
      transition: Slide
    });
  }


  return (
    <>
      <Head>
        <title>CRM - Dashboard</title>
        <meta name="description" content="CRM Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/crm-icon.png" sizes="any" />

      </Head>
      <div className="flex">

        <Nav />
        <div className="p-8 pt-3 w-full bg-slate-200">

          <div className="flex justify-between items-center bg-white px-5 py-4 rounded">
            <div className="toast-container"><ToastContainer limit={2} /></div>
            <h1 className=" font-semibold text-gray-600 text-2xl text-center ">Names</h1>
            <SearchBar
              names={names}
              setNames={setNames}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setResponseLength={setResponseLength}
              setDataType={setDataType}
              getNames={getNames}

            />


            {showPreModal ? <Premodal setShowPreModal={setShowPreModal} setIsOpen={setIsOpen} /> : null}
            <Upload getNames={getNames} showToast={showToast} setShowPreModal={setShowPreModal} setIsOpen={setIsOpen} isOpen={isOpen} setNames={setNames} />
            <div onClick={addTicket} className="relative inline-flex items-center cursor-pointer justify-center p-2 px-3 py-2 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g id="Edit / Add_Plus">
                    <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>


              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Add contact</span>
              <span class="relative invisible">Add contact</span>
            </div>

          </div>

          <div className=" bg-white mt-5 rounded min-h-screen">
            <div className="flex flex-row justify-between">
              <Tabs
                dataType={dataType}
                setDataType={setDataType}
                getNames={getNames}
                searchValue={searchValue}
                setNames={setNames}
              />
              {searchValue.length > 0 ?
                <ExportData names={names} searchValue={searchValue} /> : null}
            </div>
            {namesLength > 0 ?
              <div className="h-4/5 pb-3">


                {names

                  .map((name, _index) => (
                    <NameCard

                      dataType={dataType}
                      name={name}
                      getNames={getNames}
                      showToast={showToast}
                    />
                  ))}


                {searchValue.length > 0 ?
                  <div className="flex w-1/2 justify-center my-4 underline">
                    <button
                      className={`
                     ${responseLength < 15 ? 'hidden' : null}`}
                      onClick={() => searchMore(searchValue)}>
                      More results
                    </button>
                  </div>
                  :
                  <div className="flex w-1/2 justify-center my-4 underline">
                    <button
                      className={`
                      ${responseLength < 15 ? 'hidden' : null}`}
                      onClick={loadMore}

                    >
                      Load More
                    </button>
                  </div>
                }






              </div>



              : searchValue.length === 0 ?
                <div className="w-1/2 flex justify-center items-center">
                  <Spinner size={8} />
                </div> :
                <div className="w-1/2 flex justify-center items-center">
                  <span className=" text-gray-500">
                    No results found
                  </span>
                </div>}
          </div>


          {showAddModal ? <AddModal
            setShowAddModal={setShowAddModal}
            showToast={showToast}
            getNames={getNames}
            dataType={dataType}

          /> : null}
        </div>
      </div>
    </>
  )
}


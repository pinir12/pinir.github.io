import { useState } from "react";
import SpinnerButton from "../SpinnerButton";


export default function AddModal({ setShowAddModal, dataType, getNames, showToast }) {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("Team");
    const [value, setValue] = useState(0);
    const [note, setNote] = useState("");
    const [id, setId] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [emailError, setEmailError] = useState(false);



    function isEmailValid(mail) {
        if (mail.length === 0) {
            return true;
        } else {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]{2,6}(.[a-z]{2,6})?$/;
        return emailRegex.test(mail);}
      }

    const validateEmail = () => {
        if (isEmailValid(email)) {
            setEmailError(false);
          } else {
            setEmailError(true);
          }}
        

          const successActions = () => {
            setShowAddModal(false);
            getNames(dataType);
            showToast();
          }

    const handleSubmit = (evt) => {
        const toastId = 'addModal'
        evt.preventDefault()
        if (isEmailValid(email)) {
            setEmailError(false);
        setShowSpinner(true);
        fetch(`/api/names/add`, {
            method: "POST",
            body: JSON.stringify({ firstName, surname, address, city, postcode, phone, email, type, value, note }),
        }).then((response) => {
            if (response.status === 200) {
                successActions();
            }
            else if (response.status === 201) {
               successActions();
            }
            toast.error('Error. Data not saved.', {
                position: toast.POSITION.TOP_RIGHT,
                toastId
              });
        })
            .catch((error) => {
                console.error(error);
            });} else {
                setEmailError(true);
            }
    }


    





    return <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-brightness-50" onClick={() => setShowAddModal(false)}>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" onClick={e => e.stopPropagation()}>
                    <div className="flex items-start justify-between p-3 rounded-t border-b">
                        <h3 className="text-2xl font=semibold">Add Name</h3>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit} autocomplete="off">
                        <input autocomplete="false" name="hidden" type="text" className="display-none"/>
                            <div className="flex flex-col">
                                <section className="flex flex-col py-5 [&>*]:mt-2 mx-3">
                                    <div className="flex flex-row">
                                        <div className="relative z-0  px-2 w-full group">

                                        

                                            <input
                                                className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                        text-sm rounded-lg  block w-full p-2.5
                                          focus-visible:outline-none focus-visible:border-blue-300"
                                                id="first-name"
                                                name="first-name"
                                                placeholder="First Name"
                                                type="text"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required={true}
                                                value={firstName}
                                            />

                                        </div>
                                        <div className="relative z-0  px-2 w-full group">

                                            <input
                                                placeholder="Surname"
                                                className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                        text-sm rounded-lg  block w-full p-2.5
                                          focus-visible:outline-none focus-visible:border-blue-300"
                                                id="surname"
                                                name="surname"
                                                type="text"
                                                onChange={(e) => setSurname(e.target.value)}
                                                required={true}
                                                value={surname}
                                            />
                                        </div>

                                    </div>
                                    <div className="px-2 w-full">
                                        <input
                                            className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                                    text-sm rounded-lg  block w-full p-2.5
                                                        focus-visible:outline-none focus-visible:border-blue-300"
                                            id="address"
                                            name="address"
                                            placeholder="Address"
                                            type="text"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                        />
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-2 w-full">
                                            <input
                                                className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                                    text-sm rounded-lg  block w-full p-2.5
                                                        focus-visible:outline-none focus-visible:border-blue-300"
                                                id="city"
                                                name="city"
                                                placeholder="City"
                                                type="text"
                                                onChange={(e) => setCity(e.target.value)}
                                                value={city}
                                            />
                                        </div>
                                        <div className="relative z-0  px-2 w-full group">
                                            <input
                                                className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                                    text-sm rounded-lg  block w-full p-2.5
                                                        focus-visible:outline-none focus-visible:border-blue-300"
                                                id="postcode"
                                                name="postcode"
                                                placeholder="Postcode"
                                                type="text"
                                                onChange={(e) => setPostcode(e.target.value)}
                                                value={postcode}
                                            />
                                        </div>
                                    </div>


                                    <div className="flex flex-row">
                                        <div className="px-2 w-full">
                                            <input
                                                className="h-8  bg-gray-50 border py-55-rem border-gray-300 text-gray-900
                                                    text-sm rounded-lg  block w-full p-2.5
                                                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                                     focus-visible:outline-none focus-visible:border-blue-300"
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone Number"
                                                type="number"
                                                onChange={(e) => setPhone(e.target.value)}
                                                value={phone}
                                            />
                                        </div>
                                        <div className="px-2 w-full">
                                            <input
                                                className={`h-8 lowercase  bg-gray-50 border py-55-rem  text-gray-900
                                                    text-sm rounded-lg  block w-full p-2.5
                                                       ${!emailError? `border-gray-300`:`border-red-500`}
                                                    focus-visible:outline-none focus-visible:border-blue-300`}
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                type="text"
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={validateEmail}
                                                value={email}
                                            />
                                            {emailError ?
                                            <span className="text-red-500 font-light text-xs">Please enter a valid email address</span>: null}
                                        </div>
                                    </div>
                                </section>
                                <section className="pt-3 flex flex-col py-5 [&>*]:mt-2 mx-3">
                                    <div className="mx-2 flex flex-row">
                                        <label className="pr-2 text-gray-500">Type:</label>
                                        <select
                                            className="h-8  px-2 bg-gray-50 border  border-gray-300 text-gray-900
                  text-sm rounded-lg  block w-1/3
                      focus-visible:outline-none focus-visible:border-blue-300"
                                            name="status"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}>
                                            <option selected={type === 'Team'}>Team</option>
                                            <option selected={type === 'Donor'}>Donor</option>

                                        </select>
                                    </div>



                                    <div className="mx-2 flex flex-row items-center ">
                                        <label className="pr-2 text-gray-500" htmlFor="value">Value:</label>
                                        <input type="range"
                                            className="w-full accent-blue-500"
                                            id="value"
                                            name="value"
                                            value={value}
                                            min="0"
                                            max="10"
                                            onChange={(e) => setValue(e.target.value)}
                                        />
                                        <p className="ml-6 bg-gray-100 w-fit text-gray-800 text-lg border border-gray-500 font-medium mr-2 px-2.5 py-0.5 rounded">{value}</p>
                                    </div>

                                    <div className="mx-2 ">
                                        <textarea className="bg-gray-50 border py-55-rem border-gray-300 text-gray-600
                                                    text-sm rounded-lg  block w-full p-2.5
                                                    focus-visible:outline-none focus-visible:border-blue-300 focus-visible:bg-gray-100"
                                        placeholder="Notes"
                                        id="note"
                                            name="note"
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                        >



                                        </textarea>


                                    </div>


                                </section>
                            </div>
                            <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent outline-none 
                                    focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 
                                    inline-flex items-center"
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                >
                                    Close
                                </button>
                               {!showSpinner? 
                          <button
                              className="text-white bg-green-500  hover:bg-green-600 active:bg-green-700  outline-none focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  inline-flex items-center"
                              type="submit"
                            
                          >
                            Submit
                            </button>
                            : <SpinnerButton text={"Saving"} />}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
};
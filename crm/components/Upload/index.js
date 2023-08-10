import { ReactSpreadsheetImport } from "react-spreadsheet-import";

export default function Upload({getNames, showToast, setShowPreModal, setIsOpen, isOpen, setNames}) {


const onClose = () => {
    setIsOpen(false);
    setShowPreModal(false);
}

const successActions = () => {
  setNames([]);
  setIsOpen(false);
  getNames();
  showToast();
}

const onSubmit = (data, file) => {
    fetch(`/api/names/upload`, {
        method: "POST",
        body: JSON.stringify({ data}),
    }).then((response) => {
        if (response.status === 200) {
           successActions();
        }
    })
        .catch((error) => {
            console.error(error);
        });
}



const fields = [
    {
      label: "First Name",
      key: "first_name",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "David",
      validations: [
        {
            rule: "required",
            errorMessage: "Name is required",
            level: "error",
          },
      ],
    },

    {
        label: "Surname",
        key: "surname",
        alternateMatches: ["last name", "last", "surname"],
        fieldType: {
          type: "input",
        },
          example: "Lubelsky",
        validations: [
          {
            rule: "required",
            errorMessage: "Name is required",
            level: "error",
          },
        ],
      },
      
      {
        label: "Email",
        key: "email",
        alternateMatches: ["email address", "Email Address"],
        fieldType: {
          type: "input",
        },
        example: "davidl@charidy.com",
        validations: [
          {
              rule: "required",
              errorMessage: "Name is required",
              level: "error",
            },
           
        ],
      },
      {
        label: "Phone Number",
        key: "phone",
        alternateMatches: ["phone", "phone number", "number"],
        fieldType: {
          type: "input",
        },
        example: "07735627635",
      },

      {
        label: "Address",
        key: "address_1",
        alternateMatches: ["address"],
        fieldType: {
          type: "input",
        },
        example: "54 Oak St",
        
      },
      {
        label: "City",
        key: "address_2",
        alternateMatches: ["city"],
        fieldType: {
          type: "input",
        },
        example: "London",
        
      },
      {
        label: "Postcode",
        key: "address_4",
        fieldType: {
          type: "input",
        },
        alternateMatches: ["postcode", "post code", "zip", "zip code"],
        example: "N16 5EW",
        
      },

      {
        label: "Type",
        key: "type",
        fieldType: {
          type: "input",
        },
        alternateMatches: ["type"],
        example: "Donor",
        validations: [
          {
            rule: "required",
            errorMessage: 'Please provide a type - either "Team" or "Donor"',
            level: "error",
          },
        ],
      },
      {
        label: "Value",
        key: "value",
        alternateMatches: ["value"],
        fieldType: {
          type: "input",
        },
        example: "7",
        validations: [
          {
            rule: "required",
            errorMessage: "Please provide a value between 0 - 10",
            level: "error",
          },
        ],
      },
      {
        label: "Note",
        key: "note",
        alternateMatches: ["note", "notes"],
        fieldType: {          type: "input",
        },
        example: "Great guy...",
       
      },

  ]


    return (
<div onClick={() =>setShowPreModal(true)} className="mr-3 relative inline-flex items-center cursor-pointer justify-center p-2 px-3 py-2 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#ffffff"/>
<path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#ffffff"/>
</svg>


              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Import Data</span>
              <span class="relative invisible">Import Data</span>
              <ReactSpreadsheetImport isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} fields={fields} allowInvalidSubmit={false} 
               translations={{
                uploadStep: {
                  manifestTitle: "Data required:",
                  manifestDescription: "(You can modify your data in next steps)",
                },
                alerts: {
                  confirmClose: {
                    headerTitle: "Cancel import",
                    bodyText: "Are you sure? Your current information will not be saved.",
                    cancelButtonTitle: "Cancel",
                    exitButtonTitle: "Exit",
                  }}
              }}
              
              />
            </div>


      
    )}
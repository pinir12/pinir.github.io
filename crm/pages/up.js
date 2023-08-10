import { useState } from "react";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

export default function Up() {
const [isOpen, setIsOpen] = useState(false);

const onClose = () => {
    setIsOpen(false);
}

const onSubmit = (data, file) => {
    fetch(`/api/names/upload`, {
        method: "POST",
        body: JSON.stringify({ data}),
    }).then((response) => {
        if (response.status === 200) {
            setIsOpen(false);
        }
    })
        .catch((error) => {
            console.error(error);
        });
}



const fields = [
    {
      // Visible in table header and when matching columns.
      label: "First Name",
      // This is the key used for this field when we call onSubmit.
      key: "first_name",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input",
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "David",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
            // Can be "required" / "unique" / "regex"
            rule: "required",
            errorMessage: "Name is required",
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
      ],
    },

    {
        // Visible in table header and when matching columns.
        label: "Surname",
        // This is the key used for this field when we call onSubmit.
        key: "surname",
        // Allows for better automatic column matching. Optional.
        alternateMatches: ["last name", "last"],
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "Lubelsky",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
          {
            // Can be "required" / "unique" / "regex"
            rule: "required",
            errorMessage: "Name is required",
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
        ],
      },
      
      {
        // Visible in table header and when matching columns.
        label: "Email Address",
        // This is the key used for this field when we call onSubmit.
        key: "email",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "davidl@charidy.com",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
          {
            // Can be "required" / "unique" / "regex"
            rule: "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/",
            errorMessage: "Please provide a valid email address",
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
        ],
      },
      {
        // Visible in table header and when matching columns.
        label: "Phone Number",
        // This is the key used for this field when we call onSubmit.
        key: "phone",
        // Allows for better automatic column matching. Optional.
        alternateMatches: ["phone"],
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "07735627635",
        // Can have multiple validations that are visible in Validation Step table.
        
      },

      {
        // Visible in table header and when matching columns.
        label: "Address",
        // This is the key used for this field when we call onSubmit.
        key: "address_1",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "54 Oak St",
        
      },
      {
        // Visible in table header and when matching columns.
        label: "City",
        // This is the key used for this field when we call onSubmit.
        key: "address_2",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "London",
        
      },
      {
        // Visible in table header and when matching columns.
        label: "Postcode",
        // This is the key used for this field when we call onSubmit.
        key: "address_4",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "N16 5EW",
        
      },

      {
        // Visible in table header and when matching columns.
        label: "Type",
        // This is the key used for this field when we call onSubmit.
        key: "type",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "Donor",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
          {
            // Can be "required" / "unique" / "regex"
            rule: "required",
            errorMessage: 'Please provide a type - either "Team" or "Donor"',
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
        ],
      },
      {
        // Visible in table header and when matching columns.
        label: "Value",
        // This is the key used for this field when we call onSubmit.
        key: "value",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "7",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
          {
            // Can be "required" / "unique" / "regex"
            rule: "required",
            errorMessage: "Please provide a value. '0' can be used if no value is applicable",
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
        ],
      },
      {
        // Visible in table header and when matching columns.
        label: "Notes",
        // This is the key used for this field when we call onSubmit.
        key: "notes",
        
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "Great guy...",
       
      },

  ]


    return (
        <div>
<button onClick={() =>setIsOpen(true)}>Open</button>
<ReactSpreadsheetImport isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} fields={fields} />
</div>
    )}
export default function TypeDisplay({ type }) {

    const bgColor = (type) => {
        let colour
        switch (type) {
            case 'Donor': colour = '#DCFCE7'
            break
            case 'donor': colour = '#DCFCE7'
            break
            case 'Team': colour = '#E0E7FF'
            break
            case 'team': colour = '#E0E7FF'
            break
            }
            return colour
        }

            const textColor = (type) => {
                let colour
                switch (type) {
                    case 'Donor': colour = '#166534'
                    break
                    case 'donor': colour = '#166534'
                    break
                    case 'Team': colour = '#3730A3'
                    break
                    case 'team': colour = '#3730A3'
                    break
                    }
            
        

return colour
    }


    return (
        <div className="flex justify-center">
    <div className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded" style={{backgroundColor: bgColor(type),color: textColor(type)}}>
       {type}
    </div>
    </div>
        )
}
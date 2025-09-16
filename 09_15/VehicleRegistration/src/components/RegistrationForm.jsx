import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {

    const[owner, setOwner] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[vehicleType, setVehicleType] = useState('');
    const[vehicleNumber, setVehicleNumber] = useState('');
    const[chessisNumber, setChassisNumber] = useState('');
    const[manufacturingYear, setManufacturingYear] = useState('');

    const[vehicleTypes, setVehicleTypes] = useState(['Car', 'Bike', 'Truck', 'Bus']);

    const[err, setErr] = useState({
        owner: '', email: '', phone: '', vehicleType: '', vehicleNumber: '', chessisNumber: '', manufacturingYear: ''
    });
    const[result, setResult] = useState(null);

    const resetForm = () => {
        setOwner(''); setEmail(''); setPhone(''); setVehicleType(''); 
        setVehicleNumber(''); setChassisNumber(''); setManufacturingYear('');
    };

    function handleSubmit(event) {
        event.preventDefault();
        
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const validVehicleNumberRegex = RegExp(/^[A-Z]{2}-[0-9]{2}-[A-Z]{2}-[0-9]{4}$/);

        let tempErr = Object.assign({}, err);
        tempErr.owner = owner.length < 3 ? "Owner must contain min 3 charaters" : '';
        tempErr.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        tempErr.phone = phone.length != 10 ? "Phone must be 10 digits" : isNaN(phone) ?  'Phone must be numeric' : '';
        tempErr.vehicleType = vehicleType.length < 1 ? "Vehicle Type must be selected" : '';
        tempErr.vehicleNumber = vehicleNumber.length < 1 
            ? "Vehicle Number must be present" : !validVehicleNumberRegex.test(vehicleNumber)
            ? "Vehicle Number must be in format AB-12-CD-3456" : '';
        tempErr.chessisNumber = chessisNumber.length != 17 ? "Chassis Number must be of 17 characters" : '';
        tempErr.manufacturingYear = manufacturingYear.length < 1 ? 'Manufacturing Year must be present' : 
            manufacturingYear < 1990 || manufacturingYear > (new Date()).getFullYear() ? "Manufacturing Year is not valid" : '';
        setErr(tempErr);

        const hasErrors = Object.values(tempErr).some(x => x.length > 0);
        if(hasErrors) {
            setResult(true);
        } else {
            console.log({owner, email, phone, vehicleType, vehicleNumber, chessisNumber, manufacturingYear});
            resetForm();
            setTimeout(() => {
                alert("Vehicle registration successful!");
                setResult(null);
            }, 100);

        }
    }

    return (
        <div className="registration-container">
            <h2>Register your vehicle...</h2>
            <form onSubmit={handleSubmit} noValidate className="registration-form">
                <fieldset>
                    <legend>Sign Up</legend>
                    
                    <div className="form-group">
                        <label>Owner: </label>
                        <input type="text" value={owner} minLength={3} onChange={(e) => setOwner(e.target.value)}/>
                        {err.owner && <div className="error-message">{err.owner}</div>}
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {err.email && <div className="error-message">{err.email}</div>}
                    </div>

                    <div className="form-group">
                        <label>Phone: </label>
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        {err.phone && <div className="error-message">{err.phone}</div>}
                    </div>

                    <div className="form-group">
                        <label>Vehicle Type: </label>
                        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                            <option value=''>Select</option>
                            {vehicleTypes.map((vType) => <option key={vType} value={vType}>{vType}</option>)}
                        </select>
                        {err.vehicleType && <div className="error-message">{err.vehicleType}</div>}
                    </div>

                    <div className="form-group">
                        <label>Vehicle Number: </label>
                        <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)}/>
                        {err.vehicleNumber && <div className="error-message">{err.vehicleNumber}</div>}
                    </div>

                    <div className="form-group">
                        <label>Chassis Number: </label>
                        <input type="text" value={chessisNumber} onChange={(e) => setChassisNumber(e.target.value)}/>
                        {err.chessisNumber && <div className="error-message">{err.chessisNumber}</div>}
                    </div>

                    <div className="form-group">
                        <label>Manufacturing Year: </label>
                        <input type="number" value={manufacturingYear} onChange={(e) => setManufacturingYear(e.target.value)}/>
                        {err.manufacturingYear && <div className="error-message">{err.manufacturingYear}</div>}
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="btn-register">Register</button>
                    </div>
                </fieldset>
            </form>
            {result && <div className="form-error">Please correct the form errors!</div>}
            
        </div>
    );
}
export default RegistrationForm;
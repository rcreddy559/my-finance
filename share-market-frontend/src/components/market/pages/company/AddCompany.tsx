import {FC} from "react";

export const AddCompany:FC = () => {

    return <div className="w3-card-4">
            <div className="w3-container">
                <p>
                    <label className="w3-label w3-text-brown"><b>First Name</b></label>
                    <input className="w3-input w3-border w3-sand" name="first" type="text"/></p>
                <p>
                    <label className="w3-label w3-text-brown"><b>Last Name</b></label>
                    <input className="w3-input w3-border w3-sand" name="last" type="text"/></p>
                <p>
                    <button className="w3-btn w3-brown">Create</button>
                </p>
        </div>
    </div>
}
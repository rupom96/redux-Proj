import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmail = e => {

        setEmail(e.target.value);
    }

    const clickSub = e => {

        const proceed = window.confirm('Are you sure about making the user an ADMIN? (press OK to confirm)');
        if (proceed) {
            setLoading(true);
            const url = `https://immense-thicket-22974.herokuapp.com/users/${email}`;
            fetch(url, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('The User has been given ADMIN role!');

                    }
                }
                )
                .finally(() => setLoading(false));

        }





        e.preventDefault();

    }
    return (
        <div className="mt-4">

            <h1>Make Admin:</h1>

            {loading && <div className="container text-center mt-5 spinner-border"></div>}

            {!loading && <form onSubmit={clickSub}>
                <div className="container w-50">
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address of the user meant to be admin:</label>
                        <input onBlur={handleEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                    </div>
                    {/* submit button */}
                    <div className=" mt-3">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </form>}



        </div>
    );
};

export default MakeAdmin;
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        /* axios
          .post(
            "https://immense-journey-09745.herokuapp.com/add-a-new-service",
            data
          )
          .then((res) => {
            if (res.data?.insertedId) {
              alert(
                "Service added Successfully. Take a look at services page to check."
              );
              reset();
            } else {
              alert(res.data?.caused);
              
            }
          }); */
        reset();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Enter email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-warning">This field is required</span>
                    )}
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;
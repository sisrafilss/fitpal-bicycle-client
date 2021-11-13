import axios from 'axios';
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
    axios
      .put(
        `https://gentle-lake-31657.herokuapp.com/make-admin`,
        data
      )
      .then((res) => {
        if (res.data?.modifiedCount === 1) {
          alert(
            `${data.email} added to Admin List`
          );
          reset();
        }
        else if (res.data?.modifiedCount === 0) {
          alert(
            `${data?.email} already an Admin`
          );
        }
      });
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
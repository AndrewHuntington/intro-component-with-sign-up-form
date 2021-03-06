import { useForm } from "react-hook-form";
import iconError from "./images/icon-error.svg";
import "./Form.css";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit = (data: UserInfo) => {
    console.log("data", data);
    reset();
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Form-field">
          <input
            className={`Form-input ${errors.password ? "Form-error" : ""}`}
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            autoFocus
          />
          {errors.firstName && <div className="Form-error-icon"></div>}
          {errors.firstName && (
            <p className="Form-error-msg">First Name cannot be empty</p>
          )}
        </div>

        <div className="Form-field">
          <input
            className={`Form-input ${errors.password ? "Form-error" : ""}`}
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <div className="Form-error-icon"></div>}
          {errors.lastName && (
            <p className="Form-error-msg">Last Name cannot be empty</p>
          )}
        </div>

        <div className="Form-field">
          <input
            className={`Form-input ${errors.password ? "Form-error" : ""}`}
            type="email"
            id="email"
            placeholder="Email Address"
            {...register("email", {
              required: true,
              pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            })}
          />
          {errors.email && <div className="Form-error-icon"></div>}
          {errors?.email?.type === "required" && (
            <p className="Form-error-msg">Email cannot be empty</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="Form-error-msg">Looks like this is not an email</p>
          )}
        </div>

        <div className="Form-field">
          <input
            className={`Form-input ${errors.password ? "Form-error" : ""}`}
            type="password"
            id="pwd"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <div className="Form-error-icon"></div>}
          {errors.password && (
            <p className="Form-error-msg">Password cannot be empty</p>
          )}
        </div>

        <button type="submit">Claim Your Free Trial</button>
      </form>
      <p className="Form-terms">
        By clicking the button, you are agreeing to our{" "}
        <a
          href="http://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Services
        </a>
      </p>
    </div>
  );
}

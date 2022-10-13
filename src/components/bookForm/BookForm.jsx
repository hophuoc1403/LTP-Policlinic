import styles from "./bookForm.module.scss";
import classNames from "classnames/bind";
import { ButtonBox } from "..";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../GlobalState";

const cx = classNames.bind(styles);

function BookForm({ appointment, contact, widthAppointment,page }) {
  const navigate = useNavigate();

  const { setInfoAppoint, infoAppoint } = useContext(StoreContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const errorNot = () => {
    toast.error("🦄 invalid account!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notify = () =>
    toast.success("🦄 account success!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onAppoint = (data) => {
    // setInfoAppoint([...infoAppoint,JSON.parse(localStorage.getItem("appointment") || "[]")] )
    infoAppoint.push(data);
    console.log(infoAppoint);
    localStorage.setItem("appointment", JSON.stringify(infoAppoint));
    notify();
    navigate("/");
  };

  // const onContact = (data) => {
  //     let data_search = data;

  //     localStorage.setItem("contact",JSON.stringify(data_search))
  //     notify()
  //     navigate("/")
  // }

  return (
    <>
      {contact && (
        <div className={cx("bookForm")}>
          <form className={cx("form")}>
            <div className={cx("form-firstLine")}>
              <div className={cx("inputBox")}>
                <label htmlFor="name">Name</label>
                <input
                  placeholder="your name ...."
                  type="text"
                  name="name"
                  {...register("name", { required: true,pattern:/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/ })}
                />
                {errors.name && (
                  <span className={cx("error_mes")}>Enter your name</span>
                )}
              </div>
              <div className={cx("inputBox")}>
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder="your number ..."
                  type="number"
                  name="phone"
                  {...register("phone", { required: true,pattern:/[0-9]+/ })}
                />
                {errors.phone && (
                  <span className={cx("error_mes")}>Enter your name</span>
                )}
              </div>
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="your email ...."
                type="text"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
                })}
              />
              {errors.email && (
                <span className={cx("error_mes")}>Enter your name</span>
              )}
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="subject">Subject</label>
              <input
                placeholder="your subject ..."
                type="text"
                name="subject"
              />
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="type something to us ....."
                rows={3}
                name="message"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ButtonBox width big content={"Submit"} />
            </div>
          </form>
        </div>
      )}
      {appointment && (
        <div className={cx("bookForm")}>
          <form onSubmit={handleSubmit(onAppoint)} className={cx("form")}>
            {
              page ? "" : <>
                <h3>Book Appointment</h3>
                <p style={{ paddingBlock: "10px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  tenetur inventore sed, placeat laborum suscipit na
                </p>
              </>
            }
            <div className={cx("form-firstLine")}>
              <div className={cx("inputBox")}>
                <label htmlFor="name">Name</label>
                <input
                  placeholder="your name ...."
                  type="text"
                  name="name"
                  {...register("name", { required: true,pattern:/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/ })}
                />
                {errors.name && (
                  <span className={cx("error_mes")}>invalid name</span>
                )}
              </div>
              <div className={cx("inputBox")}>
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder="your number ..."
                  type="text"
                  name="phone"
                  {...register("phone", { required: true,pattern:/[0-9]+/ })}
                />
                {errors.phone && (
                  <span className={cx("error_mes")}>invalid phone</span>
                )}
              </div>
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="your email ...."
                type="text"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className={cx("error_mes")}>invalid email</span>
              )}
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="medical">Medical Care</label>
              <input
                placeholder="your subject ..."
                type="text"
                name="medical"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className={cx("error_mes")}>Enter your subject</span>
              )}
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="date">Date</label>
              <input
                placeholder="your date ..."
                type="date"
                name="date"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className={cx("error_mes")}>invalid date</span>
              )}
            </div>
            <div className={cx("inputBox")}>
              <label htmlFor="date">Messages</label>
              <textarea
                placeholder="type something to us ....."
                rows={3}
                type="text"
                name="date"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ButtonBox width big content={"Submit"} />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default BookForm;

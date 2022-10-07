import Button from "@mui/material/Button";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);
function ButtonBox({ width, small = false, big = false, content }) {
  return (
    <>
      {small && (
        <Button
            type="submit"
          variant="contained"
          component="button"
          sx={{
            borderRadius: "30px",
            bgcolor: "var(--primary-color)",
            fontSize: "12px",
            paddingBlock: "5px",
            textAlign: "center",
          }}
        >
          {content}
        </Button>
      )}

      {big && (
        <Button
            type={"submit"}
          variant="contained"
          component="button"
          sx={{
            borderRadius: "30px",
            bgcolor: "var(--primary-color)",
            fontSize: "15px",
            textAlign: "center",
            padding: "10px 20px",
          }}
          className={cx(width ? "maxWidth" : "", "animation")}
        >
          {content}
        </Button>
      )}
    </>
  );
}

export default ButtonBox;

import Button from "@mui/material/Button";

function ButtonBox({ small, big, content }) {
  return (
    <>
      {small && (
        <Button
          variant="contained"
          component="label"
          sx={{
            borderRadius: "30px",
            bgcolor: "var(--primary-color)",
            fontSize: "12px",
            paddingBlock: "5px",
          }}
        >
          {content}
        </Button>
      )}

      {big && (
        <Button
          variant="contained"
          component="label"
          sx={{
            borderRadius: "30px",
            bgcolor: "var(--primary-color)",
            fontSize: "15px",
            paddingBlock: "10px",
          }}
        >
          {content}
        </Button>
      )}
    </>
  );
}

export default ButtonBox;

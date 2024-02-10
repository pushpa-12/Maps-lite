import { makeStyles } from "@mui/styles";

export default makeStyles({
  title: {
    display: { xs:"none",sm: "block" },
  },
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },

    marginRight: "16px",
    width: { xs:"100%",sm: "auto" },
    marginLeft: { sm: "24px" },

  },
 
  inputRoot: {
    color: "inherit",
    border:"1px solid white",
    borderRadius:"7px"
  },
  inputInput: {
    padding: "10px 10px 10px 0",
    paddingLeft: "calc(1em + 32px)",
    transition: "width 0.3s",
    width: { xs: "100%", md: "20ch", lg: "20ch" },
   
   
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

import { alpha } from "@mui/material/styles";
import { styled } from "@mui/system";

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  "&_sdfasdf": {
    display: "flex",
  },
}));

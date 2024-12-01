import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/500.css"; // Specify weight
import "@fontsource/roboto/700.css"; // Specify weight
import "@fontsource/roboto/300.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Container } from "@mui/material";
import "./firebase/config";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
createRoot(document.getElementById("root")).render(
  <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "50px" }}>
    <RouterProvider router={router}></RouterProvider>
  </Container>
);

import { Typography } from "@mui/material";
import { AddBookForm } from "../components/AddBookForm";
import { useParams } from "react-router-dom";
import { EditBookForm } from "../components/EditBookForm";
export const EditBookPage = () => {
  const params = useParams();
  const bookId = params.id;
  return (
    <>
      <EditBookForm
        title="Hello"
        authorFirstName="Jeevan"
        authorLastName="Banga"
        blurb="He is cool"
        imgUrl="idk"
        bookId={bookId}
      />
    </>
  );
};

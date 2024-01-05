import { AllBooksTable } from "../components/AllBooksTable";
import { BackEndSideBar } from "../components/BackEndSideBar";
export const ViewBooks = () => {
  return (
    <>
      <BackEndSideBar />
      <h1>View Books</h1>
      <AllBooksTable />
    </>
  );
};

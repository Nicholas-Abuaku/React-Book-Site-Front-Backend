import { DashboardNav } from "./components/DashboardNav";
import { DashboardManageButton } from "./components/DashboardManageButton";
import { DashboardViewButton } from "./components/DashboardViewButton";
import { DashboardAddBookButtn } from "./components/DashboardAddBookButtn";
import { DashboardInfo } from "./components/DashboardInfo";
import { ButtonGrid } from "./components/ButtonGrid";
import { Dashboard } from "./pages/Dashboard";
import { AllBooksTable } from "./components/AllBooksTable";
import { ManageTable } from "./components/ManageTable";
import { ViewBooks } from "./pages/ViewBooks";
import "./App.css";
import { ManageBooksButton } from "./components/ManageBooksButton";
import { Route, Routes } from "react-router-dom";
import { AddBook } from "./pages/AddBook";
import { EditBookPage } from "./pages/EditBookPage";
import { Manage } from "./pages/Manage";
function App() {
  return (
    <>
      <DashboardNav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/view-books" element={<ViewBooks />} />
        <Route path="/dashboard/manage" element={<Manage />} />
        <Route path="/dashboard/add-book" element={<AddBook />} />
        <Route path="/dashboard/manage/edit/:id" element={<EditBookPage />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />}/>

        <Route 
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

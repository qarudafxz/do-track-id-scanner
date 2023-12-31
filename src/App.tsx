import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard } from '@/pages';
import AuthContextProvider from '@/context/AuthContextProvider';
import IdScanner from '@/components/IdScanner';
import Signature from './components/Signature';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Fragment>
              <AuthContextProvider>
                <Dashboard />
              </AuthContextProvider>
            </Fragment>
          }
        />
        <Route
          path="/scan"
          element={
            <Fragment>
              <AuthContextProvider>
                <IdScanner />
              </AuthContextProvider>
            </Fragment>
          }
        />
        <Route
          path="/signature"
          element={
            <Fragment>
              <AuthContextProvider>
                <Signature />
              </AuthContextProvider>
            </Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

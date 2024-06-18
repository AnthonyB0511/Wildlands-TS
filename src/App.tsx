import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import styles from "./App.module.scss"


function App() {
  return (
    <div className={`${styles.app}`}>
      <Header />
      <Suspense>
        <div className={styles.main}>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>

  )
}

export default App

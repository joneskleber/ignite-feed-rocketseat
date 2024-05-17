import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        {/* SIDEBAR */}
        <Sidebar />

        {/* POST */}
        <main>
          <Post
            author="Jones Kleber"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque autem aperiam doloribus minima. Cupiditate explicabo vel quidem. Incidunt vero dolor molestias veniam non consequuntur earum voluptate, soluta praesentium cupiditate nam?"
          />

          <Post author="Antonella" content="Post muito legal" />
        </main>
      </div>
    </div>
  );
}

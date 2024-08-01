import Image from "next/image";
import styles from "./page.module.css";
import MovieList from "@/components/MovieList";

export default function Home() {
  return (
    <div>
      <MovieList />
    </div>
  );
}

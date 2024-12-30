import style from "./global-laout.module.css";
import { ReactNode } from "react";
import Link from "next/link";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📖 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @JY</footer>
    </div>
  );
}

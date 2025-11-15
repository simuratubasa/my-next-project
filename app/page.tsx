import  Styles from "./page.module.css" 
import Image from "next/image"

export default function Home() {
  return (
    <section className={Styles.top}>
      <div>
      <h1 className={Styles.title}>テクノロジーの力で世界をかえる</h1>
      <p className={Styles.description}>
        私たちは市場をグローバルスティックカンパニーです。
      </p>
    </div>
    <Image
      className={Styles.bigImage}
      src="/img-mv.jpg"
      alt=""
      width={4000}
      height={1200}
    />
    <img className={Styles.image} src="/img-mv.jpg" alt="" />
  </section>
  );
}
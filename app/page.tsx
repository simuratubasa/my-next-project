import  Styles from "./page.module.css" 
import Image from "next/image"

type News = {
  id:string;
  title:string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
}

const data: {
  contents: News[] } = {
    "contents": [
      {
       "id": "1",
       "title": "渋谷にオフィスを移転しました",
       "category": {
          name: "更新情報",
        },
        publishedAt: "2023・05/19",
        createdAt: "2023/05/19",
      },
      {
        id: "2" ,
        title: "当社CEOが業界リーダートップ30に選出されました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023・05/19",
        createdAt: "2023/05/19",
      },
      {
        id: "3",
        title: "テストの記事です",
          category: {
            name: "更新情報",
          },
          publishedAt: "2023・04/19",
          createdAt: "2023/04/19",
      },
    ],
  };

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
import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  deta: string;
};

export default function Date({ deta }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {deta}
    </span>
  );
}
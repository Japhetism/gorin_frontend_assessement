import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout";
import Information from "@/components/dashboard/information";

export default function Home() {
  return <Layout>
    <div>
      <Information />
      {/* <div>ddddddd</div> */}
    </div>
  </Layout>
}

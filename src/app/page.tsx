import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout";
import Information from "@/components/dashboard/information";
import RealEstates from "@/components/dashboard/realEstate";

export default function Home() {
  return <Layout>
    <div>
      <Information />
      <RealEstates />
    </div>
  </Layout>
}

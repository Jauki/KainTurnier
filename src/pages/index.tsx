import dynamic from "next/dynamic";
import Layout from "./_layout";

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/Tournament'),
  { ssr: false }
)

export default function Home() {

  return (
    <Layout>
      <DynamicComponentWithNoSSR/>
    </Layout>
  )
}

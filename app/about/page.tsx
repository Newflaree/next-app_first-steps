import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['Abaout Page', 'NWFL', 'Información']
}

const AboutPage = () => {
  return (
    <span className='text-7xl'>AboutPage</span>
  );
}

export default AboutPage;

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Hero />
    </Layout>
  );
}

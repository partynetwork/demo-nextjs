import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import useSWR from 'swr/esm/use-swr';

export function HomePage() {
  const { data: user } = useSWR('userData');
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      {JSON.stringify(user)}
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}

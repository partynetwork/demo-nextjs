/**
 *
 * Pokemon
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useSWR from 'swr/esm/use-swr';

interface Props {
}

export const Pokemon = memo((props: Props) => {
  const { data } = useSWR('https://pokeapi.co/api/v2/pokemon/blastoise', { suspense: true });
  return (
    <>
      <Helmet>
        <title>Pokemon</title>
        <meta name="description" content="Description of Pokemon" />
      </Helmet>
      {JSON.stringify(data)}
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} width={200} />
    </>
  );
});

const Div = styled.div``;

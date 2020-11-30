/**
 *
 * TodoPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useSWR from 'swr/esm/use-swr';
import { Table } from 'antd';

interface Props {
}

export const TodoPage = memo((props: Props) => {
  const { data } = useSWR('/api/reminders', { suspense: true, refreshInterval: 0 });
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'text',
      dataIndex: 'text',
      key: 'text',
    },
  ];
  return (
    <>
      <Helmet>
        <title>TodoPage</title>
        <meta name="description" content="Description of TodoPage" />
      </Helmet>
      <Table
        columns={columns}
        dataSource={data.reminders}
      />
    </>
  );
});

const Div = styled.div``;

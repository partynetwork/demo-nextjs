/**
 *
 * TodoMangePage
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import useSWR from 'swr/esm/use-swr';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { AddTodoRecordForm } from '../ReminderForm/AddTodoRecordForm';

interface Props extends RouteComponentProps<{ id: string }> {
}

export const TodoMangePage = memo((props: Props) => {
  const history = useHistory();
  const { data: user } = useSWR('userData');
  const { data, mutate } = useSWR(`/api/reminders/${props.match.params.id}`);
  const [state, setState] = useState({ modalTodoForm: false });
  const handleSubmitTodo = async (formData) => {
    // TODO : Call api to save data
    await mutate((data) => {
      return data;
    }, true);
    await mutate();
  };
  const handleToggleModal = () => {
    setState({ ...state, modalTodoForm: !state.modalTodoForm });
  };
  return (
    <>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <Button onClick={() => history.push('/')}>Home</Button>
      <Button onClick={handleToggleModal}>toggle modal</Button>
      <Modal
        visible={state.modalTodoForm}
        onCancel={handleToggleModal}
        footer={false}
      >
        <AddTodoRecordForm
          initialForm={data}
          onSubmit={handleSubmitTodo}
        />
      </Modal>
    </>
  );
});

const Div = styled.div``;

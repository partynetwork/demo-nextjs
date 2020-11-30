/**
 *
 * BankForm
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Form, Input, Modal } from 'antd';
import { AddTodoRecordForm } from './AddTodoRecordForm';
import { AddTodoRecordForm as RemoveTodoRecordForm } from './AddTodoRecordForm';
import useSWR from 'swr/esm/use-swr';

interface Props {
}

export const ReminderForm = memo((props: Props) => {
  const [form] = Form.useForm();
  const { data, mutate } = useSWR('/api/reminders', { suspense: true });
  const submitFormRootPage = async (data) => {
    await mutate(data);
  };
  const handleRemoveTodo = async (data) => {
    await mutate(data);
  };
  return (
    <>
      <Modal>
        <AddTodoRecordForm
          onSubmit={submitFormRootPage}
        />
      </Modal>
      <Modal>
        <RemoveTodoRecordForm
          onSubmit={handleRemoveTodo}
        />
      </Modal>
      <Form form={form}>
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          label="reminds"
          name="name"
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
});

const Div = styled.div``;

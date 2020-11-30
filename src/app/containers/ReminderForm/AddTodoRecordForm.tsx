/**
 *
 * BankForm
 *
 */

import React, { memo } from 'react';
import { Button, Form, Input } from 'antd';

interface Props {
  initialForm?: {
    id: string
    text: string
  },
  onSubmit: (data) => void
}

export const AddTodoRecordForm = memo((props: Props) => {
  return (
    <>
      <Form
        onFinish={props.onSubmit}
        initialValues={props.initialForm}
      >
        <Form.Item label="id" name="id">
          <Input />
        </Form.Item>
        <Form.Item label="text" name="text">
          <Input />
        </Form.Item>
        <Form.Item label="status" name="status">
          <Input />
        </Form.Item>
        <Button
          htmlType="submit"
        >
          Save
        </Button>
      </Form>
    </>
  );
});

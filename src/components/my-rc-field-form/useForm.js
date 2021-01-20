import React, { useRef } from 'react';

class FormStore {
  constructor() {
    this.store = {}; // 数据仓库，可以存储我们的数据
    this.fieldEntities = [];
    this.callbacks = {};
  }

  // 注册field实例
  registerField = (entity) => {
    this.fieldEntities.push(entity);
  };

  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };

  // 修改数据
  setFieldsValue = (newStore) => {
    // step1: 修改store的数据
    this.store = {
      ...this.store,
      ...newStore,
    };
    // step2: 让组件更新
    this.fieldEntities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          entity.onStoreChange();
        }
      });
    });
  };

  // 获取数据
  getFieldValue = (name) => {
    return this.store[name];
  };

  // 校验数据
  validate = () => {};

  // 提交
  submit = () => {};

  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      registerField: this.registerField,
      setCallback: this.setCallback,
      submit: this.submit,
    };
  };
}
const useForm = () => {
  const formRef = useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
};

export default useForm;

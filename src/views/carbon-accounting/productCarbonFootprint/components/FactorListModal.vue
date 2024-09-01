<template>
  <BasicModal v-bind="$attrs" @register="registerInnerModal" :title="getTitle" :width="1400" @ok="handleSubmit" defaultFullscreen>
    <BasicTable @register="registerTable">
      <template #tableTitle>
        <a-button type="primary" @click="handleCreate"> 新增</a-button>
      </template>
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template>
    </BasicTable>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { saveOrUpdateProduct } from '../product.api';
  import { factorItemColumns, dictItemSearchFormSchema } from '../product.data';
  import { list, deleteProduct } from '../product.api';
  // 声明Emits
  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const factorName = ref('');
  const [registerTable, { reload, setProps }] = useTable({
    //需要配置rowKey，否则会有警告
    rowKey:'id',
    api: list,
    columns: factorItemColumns,
    formConfig: {
      labelWidth: 145,
      schemas: dictItemSearchFormSchema,
      autoSubmitOnEnter: true,
      showAdvancedButton: true,
    },
    striped: true,
    useSearchForm: true,
    // bordered: true,
    showIndexColumn: false,
    canResize: false,
    immediate: false,
    showActionColumn: true,
    actionColumn: {
      width: 110,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });
  const datasetid = ref('');
  const [registerInnerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false });
    console.log('data', data);
    datasetid.value = data.datasetid;
    factorName.value = data.name;
    setProps({ searchInfo: { datasetid: unref(datasetid.value) } });
    reload()
  });

  //设置标题
  const getTitle = computed(() => '详情 - '+ factorName.value);
  /**
   * 操作栏
   */
   function getTableAction(record) {
    return [
      {
        label: '详情',
        onClick: handleEdit.bind(null, record),
      },
      {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }
  /**
   * 新增
   */
  function handleCreate() {
  }

  /**
   * 编辑
   */
  function handleEdit(record) {
    console.log('handleEdit', record);
    // 新打开一个窗口 url: '/basic-setting/environmentFactor/components/FactorListModal.vue',
    window.open('/factor/detail?id=' + record.id + '&datasetid=' + record.datasetid, '_blank');
    // window.open('/about/index', '_blank');
  }

  /**
   * 删除
   */
  async function handleDelete(record) {
    await deleteProduct({ id: record.id }, reload);
  }
  //表单提交事件
  async function handleSubmit() {
    try {
      // const values = await validate();
      // values.dictId = props.dictId;
      setModalProps({ confirmLoading: true });
      //提交表单
      await saveOrUpdateProduct({}, isUpdate.value);
      //关闭弹窗
      closeModal();
      //刷新列表
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }

  
</script>
<style lang="less" scoped>
   /*begin 字典颜色配置样式*/
  .item-tool{
    display: flex;
    flex-wrap: wrap;
    .item-color{
      width: 18px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      margin-right: 10px;
    }
    .item-back{
      width: 18px;
      height: 18px;
      border-radius: 50%;
    }
  }
  .item-color-border{
    visibility: hidden;
  }
  .item-active .item-color-border{
    visibility: visible;
    position: absolute;
    border: 1px solid;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
   /*end 字典颜色配置样式*/
</style>
../factor.api
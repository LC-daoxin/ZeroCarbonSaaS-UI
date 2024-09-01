<template>
  <!--引用表格-->
  <BasicTable @register="registerTable" :rowSelection="rowSelection">
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:plus-outlined" @click="handleCreate"> 新增</a-button>

      <a-dropdown v-if="selectedRowKeys.length > 0">
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="batchHandleDelete">
              <Icon icon="ant-design:delete-outlined"></Icon>
              删除
            </a-menu-item>
          </a-menu>
        </template>
        <a-button
          >批量操作
          <Icon icon="ant-design:down-outlined"></Icon>
        </a-button>
      </a-dropdown>
    </template>
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
  <!--因子库信息弹窗-->
  <FactorModal @register="registerModal" @success="handleSuccess" />
  <!--因子库因子列表弹窗-->
  <FactorListModal @register="registerListModal" />
</template>

<script lang="ts" name="system-dict" setup>
  //ts语法
  import { ref, computed, unref } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import FactorListModal from './components/FactorListModal.vue';
  import FactorModal from './components/FactorModal.vue';
  import { columns, searchFormSchema } from './factor.data';
  import { list, deleteDict, batchDeleteDict } from './factor.api';
  // 因子库信息Model
  const [registerModal, { openModal }] = useModal();
  // 因子库配置Modal
  const [registerListModal, { openModal: openListModal }] = useModal();
  import { useListPage } from '/@/hooks/system/useListPage';


  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'factor-template',
    tableProps: {
      title: '环境影响因子库',
      api: list,
      // 请求之前对参数做处理
      beforeFetch(params) {
        params.order = null
      },
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      },
      actionColumn: {
        width: 240,
      },
    }
  });

  //注册table数据
  const [registerTable, { reload, updateTableDataRecord }, { rowSelection, selectedRowKeys }] = tableContext;

  /**
   * 新增事件
   */
  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }
  /**
   * 编辑事件
   */
  async function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }
  /**
   * 删除事件
   */
  async function handleDelete(record) {
    await deleteDict({ id: record.id }, reload);
  }
  /**
   * 批量删除事件
   */
  async function batchHandleDelete() {
    await batchDeleteDict({ ids: selectedRowKeys.value }, reload);
  }
  /**
   * 成功回调
   */
  function handleSuccess({ isUpdate, values }) {
    if (isUpdate) {
      updateTableDataRecord(values.id, values);
    } else {
      reload();
    }
  }
  /**
   * 因子库因子列表
   */
  function handleItem(record) {
    console.log('handleItem', record);
    openListModal(true, {
      datasetid: record.datasetid,
      name: record.nameabbren,
    });
  }
  /**
   * 操作栏
   */
  function getTableAction(record) {
    return [
      {
        label: '详情',
        onClick: handleItem.bind(null, record),
      },
      {
        label: '基本信息',
        onClick: handleEdit.bind(null, record),
      },
      {
        label: '删除',
        auth: 'factor:permission:libraryDelete', // 根据权限控制是否显示: 有权限，会显示
        popConfirm: {
          title: '确定删除吗?',
          confirm: handleDelete.bind(null, record),
        },
      },
    ];
  }
</script>

<style scoped></style>./factor.api

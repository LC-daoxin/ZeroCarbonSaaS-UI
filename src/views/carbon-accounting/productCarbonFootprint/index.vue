<template>
  <!--引用表格-->
  <BasicTable @register="registerTable" :rowSelection="rowSelection">
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:plus-outlined" @click="handleCreate"> 新增</a-button>
      <a-button type="primary" preIcon="ant-design:plus-outlined" @click="openModel"> 测试模型</a-button>
    </template>
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
  <!--产品信息Drawer-->
  <ProductDrawer @register="registerDrawer" @success="handleSuccess" />
  <!--因子库因子列表弹窗-->
  <FactorListModal @register="registerListModal" />
</template>

<script lang="ts" name="system-dict" setup>
  //ts语法
  import { onMounted } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { useDrawer } from '/@/components/Drawer';
  import FactorListModal from './components/FactorListModal.vue';
  import ProductDrawer from './components/ProductDrawer.vue';
  import { columns, searchFormSchema } from './product.data';
  import { list, deleteProduct, saveOrUpdateProduct, retrieveCarbonProductEnum } from './product.api';
  import { useProductEnumStore } from '/@/store/modules/product'
  import { useUserStore } from '/@/store/modules/user';
  const productEnumStore = useProductEnumStore();
  const userStore = useUserStore();
  // 产品信息新增Drawer
  const [registerDrawer, { openDrawer }] = useDrawer();
  // 因子库配置Modal
  const [registerListModal, { openModal: openListModal }] = useModal();
  import { useListPage } from '/@/hooks/system/useListPage';

  onMounted(() => {
    getProductEnum()
  });
  // const productEnum = productEnumStore.getProductEnum;
  // 获取产品相关配置信息
  function getProductEnum() {
    retrieveCarbonProductEnum().then((res) => {
      productEnumStore.setProductEnum(res);
    });
  }
  // function getEnumValue(enumKey, value) {
  //   return productEnumStore.getProductEnum[enumKey]?.find((item) => item.value === value)?.label;
  // }
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'factor-template',
    tableProps: {
      title: '产品碳足迹',
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
  const [registerTable, { reload }, { rowSelection }] = tableContext; // updateTableDataRecord | selectedRowKeys

  /**
   * 新增事件
   */
  function handleCreate() {
    openDrawer(true, {
      isUpdate: false,
    });
  }
  /**
   * 编辑事件
   */
  async function handleEdit(record: Recordable) {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }
  /**
   * 删除事件
   */
  async function handleDelete(record) {
    await deleteProduct({ id: record.id }, reload);
  }
  /**
   * 成功回调
   */
  function handleSuccess({ isUpdate, values }) {
    let params = { ...values };
    let createBy = userStore.getUserInfo.username;
    params.createBy = createBy;
    console.log('getUserInfo', userStore.getUserInfo, params);
    saveOrUpdateProduct(params, isUpdate).then((res) => {
      console.log('saveOrUpdateProduct', res);
      window.open('/LifeCycleModel/detail?id=' + res.id, '_blank');
      reload();
    });
  }
  function openModel () {
    window.open('/LifeCycleModel/detail', '_blank');
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

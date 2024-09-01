<template>
  <PageWrapper title="因子详情">
    <template #headerContent>
    </template>
    <div class="content">
      <a-card class="info-box bg-g">
        <template #title>
          <span>产品信息</span>
        </template>
        <a-descriptions size="small" :column="2" bordered>
          <a-descriptions-item label="产品因子" :labelStyle="labelStyle" :span="3">
            {{ factorInfo.combinedname || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="产品大类" :contentStyle="contentStyle">{{ factorInfo.productcategory || '-' }}</a-descriptions-item>
          <a-descriptions-item label="单位" :labelStyle="labelStyle" :contentStyle="contentStyle">{{ factorInfo.unit || '-' }}</a-descriptions-item>
          <a-descriptions-item label="产品一级分类">{{ factorInfo.firstclass || '-' }}</a-descriptions-item>
          <a-descriptions-item label="产品工艺">{{ factorInfo.productionprocess || '-' }}</a-descriptions-item>
          <a-descriptions-item label="产品二级分类">{{ factorInfo.secondclass || '-' }}</a-descriptions-item>
          <a-descriptions-item label="测算地区">{{ factorInfo.calculatingarea || '-' }}</a-descriptions-item>
          <a-descriptions-item label="产品三级分类">{{ factorInfo.thirdclass || '-' }}</a-descriptions-item>
          <a-descriptions-item label="适用地区">{{ factorInfo.applyingarea || '-' }}</a-descriptions-item>
          <a-descriptions-item label="产品描述" :span="3">
            {{ factorInfo.productinformation || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="工艺描述" :span="3">
            {{ factorInfo.otherdescription || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="系统开始边界" :span="3">
            {{ factorInfo.includedactivitystart || '-' }}
          </a-descriptions-item>
          <a-descriptions-item label="系统结束边界" :span="3">
            {{ factorInfo.includedactivityend || '-' }}
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
      <BasicTable class="lcia lctable" @register="registerTable"></BasicTable>
      <div class="lci">
        <div class="lci-title">生命周期清单分析(LCI)</div>
        <BasicTable class="lctable" @register="registerTable2">
          <template #tableTitle>
            <div class="lci-head bg-g">输入清单</div>
          </template>
        </BasicTable>
        <BasicTable class="lctable" @register="registerTable3">
          <template #tableTitle>
            <div class="lci-head bg-b">输出清单</div>
          </template>
        </BasicTable>
      </div>
      
      <a-card class="info-box bg-b">
        <template #title>
          <span>环境影响因子库信息</span>
        </template>
        <a-descriptions size="small" :column="2" bordered>
          <a-descriptions-item label="因子库名称" :labelStyle="labelStyle" :contentStyle="contentStyle">{{ libraryInfo.nameabbren || '-' }}</a-descriptions-item>
          <a-descriptions-item label="因子库版本" :labelStyle="labelStyle" :contentStyle="contentStyle">{{ libraryInfo.version || '-' }}</a-descriptions-item>
          <a-descriptions-item label="因子库logo">{{ libraryInfo.logourl || '-' }}</a-descriptions-item>
          <a-descriptions-item label="版权特性">{{ libraryInfo.licenseproperty || '-' }}</a-descriptions-item>
          <a-descriptions-item label="版权所有人">{{ libraryInfo.vercopyrightownersion || '-' }}</a-descriptions-item>
          <a-descriptions-item label="因子库发布时间">{{ new Date(Number(libraryInfo.registertime)).toLocaleString('zh-CN', { hour12: false }) }}</a-descriptions-item>
          <a-descriptions-item label="资源地址URL" :span="3">{{ libraryInfo.url || '-' }}</a-descriptions-item>
          <a-descriptions-item label="使用建议" :span="3">{{ libraryInfo.useadvice || '-' }}</a-descriptions-item>
        </a-descriptions>
      </a-card>
    </div>

    <!--因子库信息弹窗-->
    <FactorModal @register="registerModal"/>
  </PageWrapper>
</template>

<script lang="ts" name="system-dict" setup>
//ts语法
import { ref, onMounted } from 'vue';
import { BasicTable } from '/@/components/Table';
import { PageWrapper } from '/@/components/Page';
import { useModal } from '/@/components/Modal';
import FactorModal from './components/FactorModal.vue';
import { lciaColumns, lciColumns } from './factor.data';
import { list, getFactorDetailInfo, getFactorLCIAlist, getlciListInList, getlciListOutList } from './factor.api';
// 因子库信息Model
const [registerModal, { openModal }] = useModal(); // openModal
import { useListPage } from '/@/hooks/system/useListPage';
const labelStyle = {
  width: '200px',
  // 'text-align': 'right',
  // 'font-weight': 'bold',
};
const contentStyle = {
  width: 'calc(50vw - 240px)',  
};
const libraryInfo = ref<any>({}); // 因子库信息
const factorInfo = ref<any>({}); // 因子信息
const factorLCIAlist = ref<any>([]); // 因子LCIA list
const factorLCIin = ref<any>([]);
const factorLCIout = ref<any>([]);
onMounted(() => {
  // 获取url参数
  const url = window.location.href;
  const params = new URL(url).searchParams;
  const id = params.get('id');
  const datasetid = params.get('datasetid');
  list({ datasetid }).then((res) => {
    if (res.records.length > 0) {
      libraryInfo.value = res.records[0];
    }
  });
  // 生命周期影响评价
  getFactorLCIAlist({ factorid:id }).then((res) => {
    console.log('getFactorLCIAlist', res);
    factorLCIAlist.value = res.records;
  });
  // 因子详情
  getFactorDetailInfo({ id }).then((res) => {
    console.log('getFactorDetailInfo', res);
    factorInfo.value = res;
  });
  // 生命周期清单分析(LCI) 输入
  getlciListInList({ factorid: id }).then((res) => {
    console.log('getlciListInList', res);
    factorLCIin.value = res.records;
  });
  // 生命周期清单分析(LCI) 输出
  getlciListOutList({ factorid: id }).then((res) => {
    console.log('getlciListOutList', res);
    factorLCIout.value = res.records;
  });
});

// 列表页面公共参数、方法
const { tableContext } = useListPage({
  // designScope: 'factor-template',
  tableProps: {
    title: '生命周期影响评价(LCIA)',
    dataSource: factorLCIAlist,
    useSearchForm: false,
    showActionColumn: false,
    columns: lciaColumns,
    minHeight: 10000,
    showTableSetting: false,
    isTreeTable: true,
    pagination: {
      hideOnSinglePage: true,
      current: 1,
      pageSize: 1000,
      pageSizeOptions: ['100', '200', '300'],
    },
  }
});

//注册table数据
const [registerTable, { reload, updateTableDataRecord }, { }] = tableContext;

const { tableContext: tableContext2 } = useListPage({
  // designScope: 'factor-template',
  tableProps: {
    title: '',
    dataSource: factorLCIin,
    useSearchForm: false,
    showActionColumn: false,
    columns: lciColumns,
    minHeight: 10000,
    showTableSetting: false,
    isTreeTable: true,
    pagination: {
      hideOnSinglePage: true,
      simple: true,
      current: 1,
      pageSize: 1,
      pageSizeOptions: ['100', '200', '300'],
    },
  }
});

const [registerTable2, {  }, { }] = tableContext2;

const { tableContext: tableContext3 } = useListPage({
  // designScope: 'factor-template',
  tableProps: {
    title: '',
    dataSource: factorLCIout,
    useSearchForm: false,
    showActionColumn: false,
    columns: lciColumns,
    minHeight: 10000,
    showTableSetting: false,
    isTreeTable: true,
    pagination: {
      hideOnSinglePage: true,
      simple: true,
      current: 1,
      pageSize: 1,
      pageSizeOptions: ['100', '200', '300'],
    },
  }
});
const [registerTable3, {  }, { }] = tableContext3;

</script>

<style lang="less" scoped>
  :deep(.ant-page-header) {
    padding: 10px 20px;
  }
  :deep(.jeecg-page-wrapper-content) {
    margin: 0;
  }
  .content {
    padding: 20px;
    background-color: #f5f6f7;
  }
  .lctable {
    :deep(.ant-table-wrapper) {
      padding: 0;
      .ant-table-title {
        background: #f5f6f7;
      }
    }
    .lci-head {
      &.bg-g {
        background: #e6f6f0;
      }
      &.bg-b {
        background: #e6f6ff;
      }
      width: 100%;
      margin-bottom: 0;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      font-weight: 800;
    }
  }
  .lci {
    margin-top: 10px;
    .lci-title {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.85);
      height: 40px;
      line-height: 40px;
      margin-bottom: 5px;
    }
    :deep(.ant-table-title) {
      padding: 0 !important;
      .flex {
        display: block;
      }
    }
  }
  .info-box {
    margin-top: 20px;
    padding: 0;
    :deep(.ant-card-body) {
      padding: 0;
    }
    :deep(.ant-card-head) {
      min-height: 30px;
      .ant-card-head-title {
        padding: 7px 0;
      }
    }
  }
  .bg-g {
    margin: 0 0 20px 0;
    :deep(.ant-card-head) {
      background: #e6f6f0;
    }
  }
  .bg-b {
    :deep(.ant-card-head) {
      background: #e6f6ff;
    }
  }
</style>

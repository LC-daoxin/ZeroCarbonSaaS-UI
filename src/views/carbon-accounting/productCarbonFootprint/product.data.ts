// import { style } from '@logicflow/extension/es/bpmn-elements/presets/icons';
// import { options } from '../../monitor/mynews/XssWhiteList';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { useProductEnumStore } from '/@/store/modules/product'
const productEnumStore = useProductEnumStore();
import { computed } from 'vue';
// import { rules } from '/@/utils/helper/validator';
// import { h } from "vue";
const statusOptions = computed(() => {
  const authStatus = productEnumStore.getProductEnum.authStatus;
  return authStatus
    ? Object.entries(authStatus).map(([value, label]) => ({
        label,
        value: Number(value),
      }))
    : [];
});
const productTypeOptions = computed(() => {
  const type = productEnumStore.getProductEnum.type;
  return type
});
const unitOptions = computed(() => {
  return productEnumStore.getProductEnum.unit
});
const lifeCycleTypeOptions = computed(() => {
  const lifeCycleType = productEnumStore.getProductEnum.lifeCycleType;
  return lifeCycleType ? Object.entries(lifeCycleType).map(([value, label]) => ({
    label,
    value: Number(value),
  })) : [];
});
export const columns: BasicColumn[] = [
  {
    title: '产品名称',
    dataIndex: 'nameabbren',
    width: 240,
  },
  {
    title: '型号',
    dataIndex: 'type',
    width: 120,
    //  default 预设 custom 自定义 转成中文
    // customRender: ({ text }) => {
    //   return text === 'default' ? '预设' : '用户自定义'
    // },
  },
  {
    title: '数量/单位',
    dataIndex: 'unit',
    width: 120
  },
  {
    title: '单位产品净重/kg',
    dataIndex: 'weightperunit',
    width: 200
  },
  {
    title: '生命周期边界',
    dataIndex: 'lifecycle',
    width: 200
  },
  {
    title: '数据统计时段',
    dataIndex: 'copyrightowner',
    width: 200
  },
  {
    title: '状态',
    dataIndex: 'copyrightowner',
    width: 200
  },
  {
    title: '是否锁定',
    dataIndex: 'copyrightowner',
    width: 200
  },
  {
    title: '状态',
    dataIndex: 'copyrightowner',
    width: 200
  },
  {
    title: '创建人',
    dataIndex: 'copyrightowner',
    width: 200
  },
  {
    title: '创建时间',
    dataIndex: 'registertime',
    width: 180,
    customRender: ({ text }) => {
      return new Date(Number(text)).toLocaleString('zh-CN', { hour12: false })
    }
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '产品名称',
    field: 'name',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      // options: [
      //   { label: '模型创建', value: 1 },
      //   { label: '结果生成', value: 2 },
      //   { label: '认证待提交', value: 3 },
      //   { label: '认证待核查', value: 4 },
      //   { label: '认证核查中', value: 5 },
      //   { label: '认证核查退回', value: 6 },
      //   { label: '认证成功', value: 7 }
      // ],
      options: statusOptions
    },
    colProps: { span: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: '产品类型',
    field: 'type',
    required: true,
    component: 'Cascader',
    componentProps: {
      options: productTypeOptions,
      placeholder: '请选择产品类型',
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
  {
    label: '产品名称',
    field: 'name',
    required: true,
    component: 'Input',
    colProps: { span: 11 },
    labelWidth: 140,
  },
  {
    label: '型号',
    field: 'model',
    component: 'Input',
    colProps: { span: 11 },
    labelWidth: 140,
  },
  {
    label: '数量',
    field: 'amount',
    required: true,
    component: 'InputNumber',
    componentProps: {
      style: { width: '100%' }
    },
    colProps: { span: 11 },
    labelWidth: 140,
  },
  {
    label: '单位',
    field: 'unit',
    required: true,
    component: 'Cascader',
    componentProps: {
      options: unitOptions,
      placeholder: '请选择单位'
    },
    colProps: { span: 11 },
    labelWidth: 140,
  },
  {
    label: '单位产品净重(kg)',
    field: 'weightperunit',
    component: 'InputNumber',
    componentProps: {
      style: { width: '100%' }
    },
    colProps: { span: 11 },
    labelWidth: 140,
  },
  {
    label: '单位产品毛重(kg)',
    field: 'roughWeightPerUnit',
    component: 'InputNumber',
    componentProps: {
      style: { width: '100%' }
    },
    colProps: { span: 11 },
    labelWidth: 140,
    helpMessage: '单位产品毛重(kg) = 单位产品净重(kg) + 包装重量(kg)',
  },
  {
    label: '',
    field: ' ',
    component: 'JText',
    componentProps: ({ formModel }) => {
      let unit = unitOptions.value.find(item => item.value === formModel.unit[0]).children.find(item => item.value === formModel.unit[1]).label;
      return {
        text: `以生产${formModel.amount}${unit}的原料/能源/资源等消耗计算${formModel.name}的碳足迹`,
        style: { 'margin-left': '140px', fontSize: '13px' }
      };
    },
    ifShow: ({ values }) => {
      return values.name && values.amount && values.unit;
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
  {
    label: '数据统计时段',
    field: 'datastatistictime',
    required: true,
    component: 'RangeDate',
    componentProps: {
      style: { width: '100%' }
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
  {
    label: '产品照片',
    field: 'pictureUrl',
    component: 'JImageUpload',
    componentProps: {
      // style: { width: '100%' }
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
  {
    label: '产品生命周期边界',
    field: 'lifecycletype',
    required: true,
    component: 'RadioButtonGroup',
    componentProps: {
      options: lifeCycleTypeOptions,
      style: { width: '100%' }
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
  {
    label: '数据统计时段',
    field: 'datastatistictime',
    component: 'RangeDate',
    componentProps: {
      style: { width: '100%' }
    },
    colProps: { span: 24 },
    labelWidth: 140,
  },
];

export const factorItemColumns: BasicColumn[] = [
  {
    title: '因子名称',
    dataIndex: 'productname',
    width: 200,
  },
  {
    title: '产品大类',
    dataIndex: 'productcategory',
    width: 150,
  },
  {
    title: '产品1级分类',
    dataIndex: 'firstclass',
    width: 180,
  },
  {
    title: '产品2级分类',
    dataIndex: 'secondclass',
    width: 180,
  },
  {
    title: '产品3级分类',
    dataIndex: 'thirdclass',
    width: 180,
  },
  {
    title: '适用地区',
    dataIndex: 'applyingarea',
    width: 120,
  },
  {
    title: '因子单位',
    dataIndex: 'unit',
    width: 100,
  },
  {
    title: '气候变化',
    dataIndex: 'uniformfactordata',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'uniformunit',
    width: 120,
  },
  {
    title: '臭氧消耗',
    dataIndex: 'ozonevalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'ozoneunit',
    width: 120,
  },
  {
    title: '人体毒性(致癌)',
    dataIndex: 'carcinogenichumantoxicityvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'carcinogenichumantoxicityvalue',
    width: 120,
  },
  {
    title: '人体毒性(非致癌)',
    dataIndex: 'noncarcinogenichumantoxicityvalue',
    width: 130,
  },
  {
    title: '',
    dataIndex: 'noncarcinogenichumantoxicityunit',
    width: 120,
  },
  {
    title: '颗粒物',
    dataIndex: 'particulatematterformationvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'particulatematterformationunit',
    width: 120,
  },
  {
    title: '电离辐射',
    dataIndex: 'ionisingradiationvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'ionisingradiationunit',
    width: 120,
  },
  {
    title: '光化学臭氧（人体健康）',
    dataIndex: 'photochemicalozoneformationvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'photochemicalozoneformationunit',
    width: 120,
  },
  {
    title: '酸化',
    dataIndex: 'acidificationvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'acidificationunit',
    width: 120,
  },
  {
    title: '富营养化（陆地）',
    dataIndex: 'eutrophicationterrestrialvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'eutrophicationterrestrialunit',
    width: 120,
  },
  {
    title: '富营养化（淡水）',
    dataIndex: 'eutrophicationfreshwatervalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'eutrophicationfreshwaterunit',
    width: 120,
  },
  {
    title: '富营养化（海洋）',
    dataIndex: 'eutrophicationmarinevalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'eutrophicationmarineunit',
    width: 120,
  },
  {
    title: '生物毒性（淡水）',
    dataIndex: 'ecotoxicityvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'ecotoxicityunit',
    width: 120,
  },
  {
    title: '土地利用',
    dataIndex: 'landusevalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'landuseunit',
    width: 120,
  },
  {
    title: '水资源消耗',
    dataIndex: 'waterusevalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'wateruseunit',
    width: 120,
  },
  {
    title: '资源消耗（矿物和金属）',
    dataIndex: 'materialresourcesmetalsvalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'materialresourcesmetalsunit',
    width: 120,
  },
  {
    title: '资源消耗（化石）',
    dataIndex: 'energyresourcesnonrenewablevalue',
    width: 120,
  },
  {
    title: '',
    dataIndex: 'energyresourcesnonrenewableunit',
    width: 120,
  }
];

export const dictItemSearchFormSchema: FormSchema[] = [
  {
    label: '因子名称',
    field: 'productname',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '因子单位',
    field: 'unit',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '产品大类',
    field: 'productcategory',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '产品1级分类',
    field: 'firstclass',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '产品2级分类',
    field: 'secondclass',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '产品3级分类',
    field: 'thirdclass',
    component: 'JInput',
    colProps: { span: 6 },
  },
];

export const lciaColumns: BasicColumn[] = [
  {
    title: '因子类别',
    dataIndex: 'nameabbren',
    width: 180,
  },
  {
    title: '指标',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '计算方法',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '单位',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '数据',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '数据贡献者',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '数据贡献者联系方式',
    dataIndex: 'version',
    width: 180
  },
  {
    title: '原始数据采集时间',
    dataIndex: 'version',
    width: 180
  },
  {
    title: '数据参考文献',
    dataIndex: 'version',
    width: 180
  },
  {
    title: '其他描述',
    dataIndex: 'version',
    width: 180
  },
];
export const lciColumns: BasicColumn[] = [
  {
    title: '因子名称',
    dataIndex: 'nameabbren',
    width: 240,
  },
  {
    title: '数值',
    dataIndex: 'version',
    width: 120
  }
];

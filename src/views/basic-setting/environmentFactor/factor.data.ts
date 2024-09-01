import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { dictItemCheck } from './factor.api';
// import { rules } from '/@/utils/helper/validator';
// import { h } from "vue";

export const columns: BasicColumn[] = [
  {
    title: '因子库名称',
    dataIndex: 'nameabbren',
    width: 240,
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 120,
    //  default 预设 custom 自定义 转成中文
    customRender: ({ text }) => {
      return text === 'default' ? '预设' : '用户自定义'
    },
  },
  {
    title: '因子库版本',
    dataIndex: 'version',
    width: 120
  },
  {
    title: '版权所有人',
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
  },
  {
    title: '修改时间',
    dataIndex: 'updatetime',
    width: 180,
    customRender: ({ text }) => {
      return new Date(Number(text)).toLocaleString('zh-CN', { hour12: false })
    }
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '因子库名称',
    field: 'nameabbren',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '类型',
    field: 'type',
    component: 'Select',
    componentProps: {
      options: [
        { label: '预设', value: 'default' },
        { label: '用户自定义', value: 'custom' },
      ],
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
    label: '因子库名称',
    field: 'nameabbren',
    required: true,
    component: 'Input',
  },
  {
    label: '因子库类型',
    field: 'type',
    required: true,
    component: 'Select',
    defaultValue: 'custom',
    componentProps: {
      options: [
        { label: '预设', value: 'default' },
        { label: '自定义', value: 'custom' },
      ],
      disabled: true
    }
  },
  {
    label: '因子库版本',
    field: 'version',
    component: 'Input',
  },
  {
    label: '版本特性',
    field: 'licenseproperty',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'license_property',
      //mode: 'multiple',
    },
  },
  {
    label: '版权所有人',
    field: 'copyrightowner',
    component: 'Input',
  },
  {
    label: '因子库发布时间',
    field: 'releasetime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      style: { width: '100%' },
    },
  },
  {
    label: '资源地址URL',
    field: 'sourceurl',
    component: 'Input',
  },
  {
    label: '使用建议',
    field: 'useadvice',
    component: 'InputTextArea',
  }
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

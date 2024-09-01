import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
enum Api {
  list = '/environmentalfactorlibrarycls/environmentalfactorlibrarycls/list', // 因子库列表
  save = '/sys/dict/add',
  edit = '/sys/dict/edit',
  duplicateCheck = '/sys/duplicate/check',
  deleteDict = '/sys/dict/delete',
  deleteBatch = '/sys/dict/deleteBatch',
  importExcel = '/sys/dict/importExcel',
  exportXls = '/sys/dict/exportXls',
  recycleBinList = '/sys/dict/deleteList',
  putRecycleBin = '/sys/dict/back',
  deleteRecycleBin = '/sys/dict/deletePhysic',
  itemList = '/Environmentalfactorlibraryclssubdetails/environmentalfactorlibraryclssubdetails/list', // 因子库因子列表
  detailInfo = '/Environmentalfactorlibraryclssub/environmentalfactorlibraryclssub/queryById', // 因子详情
  factorLCIAlist = '/Factordcategory/factordcategory/list', // 因子-生命周期影响评价list
  lciListIn = '/carbon/lciListIn/queryById', // 生命周期清单分析输入-通过id查询
  lciListInList = '/carbon/lciListIn/list', // 生命周期清单分析输入-列表查询
  lciListOut = '/LciListOut/lciListOut/queryById', // 生命周期清单分析输出-通过id查询
  lciListOutList = '/LciListOut/lciListOut/list', // 生命周期清单分析输入-列表查询
  deleteItem = '/sys/dictItem/delete',
  itemSave = '/sys/dictItem/add',
  itemEdit = '/sys/dictItem/edit',
  dictItemCheck = '/sys/dictItem/dictItemCheck',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 * @param params
 */
export const getImportUrl = Api.importExcel;

export const getFactorDetailInfo = (params) => defHttp.get({ url: Api.detailInfo, params });
export const getFactorLCIAlist = (params) => defHttp.get({ url: Api.factorLCIAlist, params });
export const getlciListIn = (params) => defHttp.get({ url: Api.lciListIn, params });
export const getlciListInList = (params) => defHttp.get({ url: Api.lciListInList, params });
export const getlciListOut = (params) => defHttp.get({ url: Api.lciListOut, params });
export const getlciListOutList = (params) => defHttp.get({ url: Api.lciListOutList, params });


/**
 * 字典列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 删除字典
 */
export const deleteDict = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteDict, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 批量删除字典
 * @param params
 */
export const batchDeleteDict = (params, handleSuccess) => {
  Modal.confirm({
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
      });
    },
  });
};
/**
 * 保存或者更新字典
 * @param params
 */
export const saveOrUpdateDict = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
/**
 * 唯一校验
 * @param params
 */
export const duplicateCheck = (params) => defHttp.get({ url: Api.duplicateCheck, params }, { isTransformResponse: false });
/**
 * 字典回收站列表
 * @param params
 */
export const getRecycleBinList = (params) => defHttp.get({ url: Api.recycleBinList, params });
/**
 * 回收站还原
 * @param params
 */
export const putRecycleBin = (id, handleSuccess) => {
  return defHttp.put({ url: Api.putRecycleBin + `/${id}` }).then(() => {
    handleSuccess();
  });
};
/**
 * 回收站删除
 * @param params
 */
export const deleteRecycleBin = (id, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteRecycleBin + `/${id}` }).then(() => {
    handleSuccess();
  });
};
/**
 * 字典配置列表
 * @param params
 */
export const itemList = (params) => defHttp.get({ url: Api.itemList, params });
/**
 * 字典配置删除
 * @param params
 */
export const deleteItem = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteItem, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 保存或者更新字典配置
 * @param params
 */
export const saveOrUpdateDictItem = (params, isUpdate) => {
  let url = isUpdate ? Api.itemEdit : Api.itemSave;
  return defHttp.post({ url: url, params });
};
/**
 * 校验字典数据值
 * @param params
 */
export const dictItemCheck = (params) => defHttp.get({ url: Api.dictItemCheck, params }, { isTransformResponse: false });

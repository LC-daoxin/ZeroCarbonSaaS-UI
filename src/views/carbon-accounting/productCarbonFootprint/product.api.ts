import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
enum Api {
  list = '/InfoProductBasic/infoProductBasic/list', // 专业版产品信息列表
  save = '/InfoProductBasic/infoProductBasic/add',
  edit = '/InfoProductBasic/infoProductBasic/edit',
  delete = '/InfoProductBasic/infoProductBasic/delete',
  retrieveCarbonProductEnum = '/mock/carbon/common/retrieveCarbonProductEnum',
}


/**
 * 产品列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 通用参数数据
 * @param params
 */
export const retrieveCarbonProductEnum = () => defHttp.post({ url: Api.retrieveCarbonProductEnum });
/**
 * 删除产品
 * @param params
 */
export const deleteProduct = (params, handleSuccess) => {
  Modal.confirm({
    title: '确认删除',
    content: '是否删除选中产品信息',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
      });
    },
  });
};
/**
 * 保存或者更新产品信息
 * @param params
 */
export const saveOrUpdateProduct = (params, isUpdate) => {
  console.log('saveOrUpdateProduct', params);
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};
/**
 * 专业版产品删除
 * @param params
 */
// export const deleteItem = (params, handleSuccess) => {
//   return defHttp.delete({ url: Api.delete, params }, { joinParamsToUrl: true }).then(() => {
//     handleSuccess();
//   });
// };

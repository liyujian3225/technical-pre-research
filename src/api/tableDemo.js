import request from '../utils/http';

//登录
export const getTableData = (params) =>
  request({
    method: "get",
    url: "/v1/topics",
    params
  });

// export const getSmsCode = (data) =>
//   request({
//     method: "post",
//     url: "/auth/code/sms",
//     data,
//   });





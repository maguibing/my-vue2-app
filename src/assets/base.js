/**
 * 判断值是否为空
 * @param {*} data 接受的参数
 * @returns
 */
export const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

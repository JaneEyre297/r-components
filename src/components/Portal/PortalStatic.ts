/*
 * @Author: JaneEyre(lsy@codoon.com)
 * @Date: 2020-09-06 11:18:58
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 13:40:32
 * @Content: Portal Static
 */

import { event } from '@/utils/event';
import { ADD_TYPE, REMOVE_TYPE, UPDATE_TYPE } from './constant';

export type Callback = (...args: any[]) => void;

let key = 1;

class PortalStatic {
  /**
   * 添加节点
   * @param content
   * @param cb
   */
  static add(content: React.ReactNode, cb?: Callback) {
    event.emit(ADD_TYPE, { id: key++, el: content, cb });
    return key;
  }
  /**
   * 移除节点
   * @param id
   */
  static remove(id: number, cb?: Callback) {
    event.emit(REMOVE_TYPE, { id, cb });
  }

  /**
   * 更新节点
   * @param key
   * @param el
   */
  static update(id: number, content: React.ReactNode) {
    if (id >= key) {
      console.log('更新操作的节点ID值不存在');
      return;
    }
    event.emit(UPDATE_TYPE, { id, el: content });
  }
}

export default PortalStatic;

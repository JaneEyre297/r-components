/*
 * @Author: JaneEyre(lsy@codoon.com)
 * @Date: 2020-09-06 11:37:01
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 11:40:34
 * @Content: Toast Static
 */
import React from 'react';
import Toast, { IToastOptions } from '.';
import PortalStatic from '../Portal/PortalStatic';

class ToastStatic {
  static open(options: Omit<IToastOptions, 'visible' | 'onClose'>) {
    const id = PortalStatic.add(
      <Toast
        {...options}
        visible={true}
        onClose={() => {
          PortalStatic.remove(id);
        }}
      />,
    );
  }
}

export default ToastStatic;

/*
 * @Author: JaneEyre(lsy@codoon.com)
 * @Date: 2020-09-06 11:37:01
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 11:40:34
 * @Content: Toast Static
 */
import React from 'react'
import Toast, { IToastOptions } from '.';
import PortalStatic from '../Portal/PortalStatic';

class ToastStatic {
  open(options: IToastOptions) {
    const id = PortalStatic.add(
      <Toast
        {...options}
        onClose={() => {
          PortalStatic.remove(id);
        }}
      />,
    );
  }
}

export default ToastStatic;

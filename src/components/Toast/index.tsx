/*
 * @Author: JaneEyre(lsy@codoon.com) 
 * @Date: 2020-09-06 11:20:52 
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 11:35:29
 * @Content: 
 */
import React, { useState, useEffect } from 'react'
import { Omit } from 'react-router';

export interface IToastOptions {
  // 是否显示
  visible: boolean
  // 提示信息
  message: string
  // 关闭回调
  onClose: () => void
  // 是否自动关闭
  autoHide?: boolean
  // 自动关闭时间
  wait?: number
  // toast样式
  style?: React.CSSProperties
}

const defaultToastOptions: Omit<IToastOptions, 'visible' | 'message'> = {
  wait: 1000,
  onClose: () => {},
  autoHide: true,
}
const Toast: React.FunctionComponent<IToastOptions> = (props: IToastOptions) => {
  const [visible, setVisible] = useState<boolean>(!!props.visible)
  let timer: number

  useEffect(() => {
    if (props.autoHide) {
      timer = setTimeout(() => {
        setVisible(false)
        props.onClose()
      }, props.wait)
    }
    return () => {
      timer && clearTimeout(timer)
    }
  }, [])

  if (!visible) {
    return null
  }
  return <div className="toast" style={props.style}>
    {props.message}
  </div>
}

Toast.defaultProps = defaultToastOptions

export default Toast
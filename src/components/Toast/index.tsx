/*
 * @Author: JaneEyre(lsy@codoon.com)
 * @Date: 2020-09-06 11:20:52
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 11:35:29
 * @Content:
 */
import React, { useState, useEffect } from 'react';
import { Omit } from 'react-router';
import styles from './index.less';

export interface IToastOptions {
  // 是否显示
  visible: boolean;
  // 提示信息
  message: string;
  // 关闭回调
  onClose: () => void;
  // 是否自动关闭
  autoHide?: boolean;
  // 自动关闭时间
  wait?: number;
  // 动画过渡时间
  duration?: number;
  // toast样式
  style?: React.CSSProperties;
}

const defaultToastOptions: Omit<IToastOptions, 'visible' | 'message'> = {
  wait: 5000,
  duration: 1000,
  onClose: () => {},
  autoHide: true,
};
const Toast: React.FunctionComponent<IToastOptions> = (
  props: IToastOptions,
) => {
  const [visible, setVisible] = useState<boolean>(!!props.visible);
  const [animateClass, setAnimateClass] = useState<'fadeIn' | 'fadeOut'>(
    'fadeIn',
  );
  let timer: NodeJS.Timeout;

  useEffect(() => {
    if (!props.autoHide) return;
    timer = setTimeout(handleAutoHide, props.wait);
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  /**
   * 自动关闭
   */
  function handleAutoHide() {
    setAnimateClass('fadeOut');

    setTimeout(() => {
      setVisible(false);
      props.onClose();
    }, props.duration);
  }

  if (!visible) {
    return null;
  }
  return (
    <div className={`${styles.toast} ${animateClass}`} style={props.style}>
      {props.message}
    </div>
  );
};

Toast.defaultProps = defaultToastOptions;

export default Toast;

/*
 * @Author: JaneEyre(lsy@codoon.com) 
 * @Date: 2020-09-06 10:52:53 
 * @Last Modified by: JaneEyre(lsy@codoon.com)
 * @Last Modified time: 2020-09-06 13:45:42
 * @Content: 
 */
import React, { useEffect, useState } from 'react'
import { event } from '@/utils/event';
import { ADD_TYPE, REMOVE_TYPE } from './constant';
import { Callback } from './PortalStatic';

interface IPortalElement {
  id: number
  cb?: Callback
  el?: React.ReactNode
}

const ProtalProvider = () => {
  const [elements, setElements] = useState<IPortalElement[]>([])
  
  useEffect(() => {
    event.on(ADD_TYPE, handleAdd)
    event.on(REMOVE_TYPE, handleRemove)
  }, [])

  /**
   * 添加节点
   * @param params 
   */
  function handleAdd(element: IPortalElement) {
    elements.push(element)
    setElements(elements)
  }

  /**
   * 删除节点
   * @param params 
   */
  function handleRemove(element : IPortalElement) {
    setElements(elements.filter(item => item.id !== element.id))
  }
  
  return <div>
    {/* {React} */}
  </div>
}


export default ProtalProvider;
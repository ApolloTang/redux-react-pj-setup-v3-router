import React from 'react'
import TodoListFilterSettingCtrl from 'app/containers/todo-list-filter-setting-ctrl'

const ControlSection = () => (
  <p>
    Show:
    {" "}
    <TodoListFilterSettingCtrl filterType="all">
      All
    </TodoListFilterSettingCtrl>
    {", "}
    <TodoListFilterSettingCtrl filterType="active">
      Active
    </TodoListFilterSettingCtrl>
    {", "}
    <TodoListFilterSettingCtrl filterType="completed">
      Completed
    </TodoListFilterSettingCtrl>
  </p>
)

export default ControlSection;

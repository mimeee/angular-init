ShareModule#

**应** 包含定义：

- 应用通用自定义业务组件

**应** 导入模块：

- Angular 通用模块：CommonModule、FormsModule、RouterModule、ReactiveFormsModule

- ng-zorro-antd 基础组件模块

- @delon/abc 业务组件模块

- 第三方通用依赖组件模块

**应** 导出所有包含的模块。

**不应** 有 providers 属性。

作用： 一些通用自定义、第三方组件定义，减少业务模块的导入。
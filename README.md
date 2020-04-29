# DataQualityManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## 组织项目目录结构

├── app
    ├── core                                # 核心模块
    ├── routes                              # 路由模块
    ├── layout                              # 布局模块
    ├── shared                              # 共享模块
    ├── app.component.ts                    # 根组件
    └── app.module.ts                       # App 引导模块

组织项目目录的结构参考github上的
- [ng-alain](https://github.com/ng-alain/ng-alain);
- [如何更好地组织Angular项目](https://zhuanlan.zhihu.com/p/63515048);
- [ng-alain模块注册指导原则](https://ng-alain.com/docs/module/zh);
- [Angular项目如何组织一个良好的目录结构 ](https://code-and-zen.com/Angular%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E7%BB%84%E7%BB%87%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84.html);
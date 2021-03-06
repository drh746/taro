import fs from 'fs-extra';
import * as chokidar from 'chokidar';
import createDebug from 'debug';
import chalk from 'chalk';
import { processTypeEnum, IProcessTypeMap } from './constants';
import * as utils from './utils';
import * as npm from './npm';
import createBabelRegister from './babelRegister';

export declare enum PARSE_AST_TYPE {
  ENTRY = "ENTRY",
  PAGE = "PAGE",
  COMPONENT = "COMPONENT",
  NORMAL = "NORMAL",
  EXPORTS = "EXPORTS"
}

declare interface helper {
  npm: typeof npm;
  createBabelRegister: typeof createBabelRegister;
  fs: typeof fs;
  chokidar: typeof chokidar;
  chalk: typeof chalk;
  createDebug: createDebug.Debug & {
    debug: createDebug.Debug;
    default: createDebug.Debug;
  };
  normalizePath(path: string): string;
  isNpmPkg(name: string): boolean;
  isQuickAppPkg(name: string): boolean;
  isAliasPath(name: string, pathAlias?: object): boolean;
  replaceAliasPath(filePath: string, name: string, pathAlias?: object): string;
  promoteRelativePath(fPath: string): string;
  resolveStylePath(p: string): string;
  printLog(type: processTypeEnum, tag: string, filePath?: string | undefined): void;
  recursiveFindNodeModules(filePath: string): string;
  getUserHomeDir(): string;
  getTaroPath(): string;
  getConfig(): object;
  getSystemUsername(): string;
  shouldUseYarn(): boolean;
  shouldUseCnpm(): boolean;
  isEmptyObject(obj: any): boolean;
  resolveScriptPath(p: string): string;
  generateEnvList(env: object): object;
  generateConstantsList(constants: object): object;
  cssImports(content: string): string[];
  emptyDirectory(dirPath: string, opts?: {
    excludes: string[];
  }): void;
  getInstalledNpmPkgPath(pkgName: string, basedir: string): string | null;
  getInstalledNpmPkgVersion(pkgName: string, basedir: string): string | null;
  unzip(zipPath: any): Promise<unknown>;
  getBabelConfig(babel: any): any;
  readDirWithFileTypes(floder: string): utils.FileStat[];
  extnameExpRegOf(filePath: string): RegExp;
  addPlatforms(platform: string): void;
  isNodeModule: (filename: string) => boolean;
  pascalCase: (str: string) => string;
  recursiveMerge: (src: any, ...args: any[]) => any;
  mergeVisitors: (src: any, ...args: any[]) => any;
  applyArrayedVisitors: (obj: any) => any;
  getAllFilesInFloder: (floder: string, filter?: string[]) => Promise<string[]>;
  getModuleDefaultExport: (exports: any) => any;
  PLATFORMS: any;
  processTypeEnum: typeof processTypeEnum;
  processTypeMap: IProcessTypeMap;
  CSS_EXT: string[];
  SCSS_EXT: string[];
  JS_EXT: string[];
  TS_EXT: string[];
  UX_EXT: string[];
  REG_JS: RegExp;
  REG_SCRIPT: RegExp;
  REG_TYPESCRIPT: RegExp;
  REG_SCRIPTS: RegExp;
  REG_SASS: RegExp;
  REG_LESS: RegExp;
  REG_STYLUS: RegExp;
  REG_STYLE: RegExp;
  REG_MEDIA: RegExp;
  REG_IMAGE: RegExp;
  REG_FONT: RegExp;
  REG_JSON: RegExp;
  REG_UX: RegExp;
  REG_TEMPLATE: RegExp;
  REG_WXML_IMPORT: RegExp;
  REG_URL: RegExp;
  CSS_IMPORT_REG: RegExp;
  NODE_MODULES: "node_modules";
  NODE_MODULES_REG: RegExp;
  PROJECT_CONFIG: "config/index.js";
  DEVICE_RATIO: {
    640: number;
    750: number;
    828: number;
  };
  FILE_PROCESSOR_MAP: {
    '.js': string;
    '.scss': string;
    '.sass': string;
    '.less': string;
    '.styl': string;
  };
  PARSE_AST_TYPE: typeof PARSE_AST_TYPE
  UPDATE_PACKAGE_LIST: string[];
  taroJsComponents: "@tarojs/components";
  taroJsQuickAppComponents: "@tarojs/components-qa";
  taroJsFramework: "@tarojs/taro";
  taroJsRedux: "@tarojs/redux";
  taroJsMobx: "@tarojs/mobx";
  taroJsMobxCommon: "@tarojs/mobx-common";
  DEVICE_RATIO_NAME: "deviceRatio";
  isWindows: boolean;
  DEFAULT_TEMPLATE_SRC: "github:NervJS/taro-project-templates#2.0";
  TARO_CONFIG_FLODER: ".taro2";
  TARO_BASE_CONFIG: "index.json";
  OUTPUT_DIR: "dist";
  SOURCE_DIR: "src";
  TEMP_DIR: ".temp";
  NPM_DIR: "npm";
  ENTRY: "app";
}
declare const helper: helper
// @ts-ignore
export = helper

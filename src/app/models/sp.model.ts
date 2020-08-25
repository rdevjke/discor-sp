export interface ISpDto {
  id: string,
  idAsSourceInf?: string,
  codeAsSourceInf?: string,
  nameAsSourceInf?: string,
  idCompAsSourceInf: number,
  codeCompAsSourceInf?: string,
  nameCompAsSourceInf?: string,
  level?: string,
  funcDor?: number[],
  techName?: string,
  description?: string,
  state?: string,
  changeStateDate?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

export interface IComponentSourseInf{
  id: number,
  fkAsSourceInf?: number,
  fkFunction?: number,
  code?: string,
  name?: string,
  regulationcalc?: string,
  type?: string ,
  dateCreate?: string ,
  corTip?: string ,
  dateDelete?: string
}

export interface ISpStructureDto{
  spPart?: ISpPart,
  cursors?: ICursors,
}

interface ISpPart{
  inputParams?: ISpInputParamDto[],
  outputParams?: ISpOutputParamDto[],
  spInfo?: ISpDto
}

interface ICursors {
  cursorColumns?: ISpCursorColumnStructureForCursorDto,
  cursorInfo?: ISpCursorDto,
  presentations?: IPresentation
}

export interface ISpCursorDto {
  id?: number,
  fkSp?: number,
  type?: string,
  techName?: string,
  name?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface ISpCursorColumnStructureForCursorDto {
  cursorColumnInfo?: ISpCursorColumnDto,
  functionFilterCursorColumn?: IFunctionFilterCursorColumnDto,
  functionFormCursorColumn?: IFunctionFormCursorColumnDto
}

interface IPresentation {
  cursorColumns?:  ISpCursorColumnStructureForPresentationDto[],
  filterInputSpParams?: IFilterInputSpParam[],
  presentationColumns?: ISpPresentationColumnStructureForPresentationDto[],
  presentationInfo?: ISpPresentationDto
}

export interface ISpInputParamDto {
  corTip?: string,
  dataType?: string,
  dateCreate?: string,
  dateDelete?: string,
  fkSp?: number,
  id?: number,
  nameInputSpParam?: string,
  techNameInputSpParam?: string
}

export interface ISpOutputParamDto {
  id?: number,
  fkSp?: number,
  techNameOutputSpParam?: string,
  nameOutputSpParam?: string,
  dataType?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface ISpCursorColumnDto {
  id?: number,
  fkSpCursor?: number,
  fkSpCursorColumn?: number,
  virtCol?: boolean,
  pos?: number,
  techName?: string,
  name?: string,
  type?: string,
  dataType?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface IFunctionFilterCursorColumnDto {
  corTip?: string,
  dateCreate?: string,
  dateDelete?: string,
  filterCondition?: string,
  fkSpCursorColumn?: number,
  id?: number
}

interface IFunctionFormCursorColumnDto {
  id?: number,
  fkSpCursorColumn?: number,
  funcVirtSpCursorColumn?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface ISpCursorColumnStructureForPresentationDto {
  cursorColumnInfo?: ISpCursorColumnDto,
  functionFilterPresentationColumn?: IFunctionFilterPresentationColumnDto,
  functionFormCursorColumn?: IFunctionFormCursorColumnDto
}

interface IFilterInputSpParam {
  functionFilterInputSpParamInfo?: IFunctionFilterInputSpParamForPresentationDto,
  inputParam?: ISpInputParamDto
}

interface ISpPresentationColumnStructureForPresentationDto {
  functionFilterPresentationColumn?: IFunctionFilterPresentationColumnDto,
  functionFormPresentationColumn?: IFunctionFormPresentationColumnDto,
  presentationColumnInfo?: ISpPresentationColumnDto
}

interface ISpPresentationDto {
  id?: number,
  fkSpCursor?: number,
  techName?: string,
  name?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface IFunctionFilterPresentationColumnDto {
  columnRefType?: string,
  corTip?: string,
  dateCreate?: string,
  dateDelete?: string,
  filterCondition?: string,
  fkSpCursorColumn?: number,
  fkSpPresentation?: number,
  fkSpPresentationColumn?: number,
  id?: number
}

interface IFunctionFilterInputSpParamForPresentationDto {
  corTip?: string,
  dateCreate?: string,
  dateDelete?: string,
  filterCondition?: string,
  fkSpInputParam?:number,
  fkSpPresentation?: number,
  id?: number
}

interface IFunctionFormPresentationColumnDto {
  id?: number,
  fkSpPresentationColumn?: number,
  funcVirtSpPresentationColumn?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

interface ISpPresentationColumnDto {
  id?: number,
  fkSpPresentation?: number,
  fkSpCursorColumn?:number,
  fkSpPresentationColumn?: number,
  baseColumnType?: string,
  pos?: number,
  techName?: string,
  name?: string,
  type?: string,
  dataType?: string,
  dateCreate?: string,
  dateDelete?: string,
  corTip?: string
}

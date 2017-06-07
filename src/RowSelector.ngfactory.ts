/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './RowSelector';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './DataTable';
export class Wrapper_RowSelector {
  /*private*/ _eventHandler:Function;
  context:import0.RowSelector;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.RowSelector(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_entity(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.entity = currValue;
      this._expr_0 = currValue;
    }
  }
  check_checkboxId(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.checkboxId = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) {
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
      this.context.ngDoCheck();
    }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_RowSelector_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_RowSelector_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.RowSelector>;
  _RowSelector_0_3:Wrapper_RowSelector;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_RowSelector_Host0,renderType_RowSelector_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'mfRowSelector',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_RowSelector0(this.viewUtils,this,0,this._el_0);
    this._RowSelector_0_3 = new Wrapper_RowSelector(this.injectorGet(import9.DataTable,this.parentIndex));
    this.compView_0.create(this._RowSelector_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._RowSelector_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.RowSelector) && (0 === requestNodeIndex))) { return this._RowSelector_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RowSelector_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const RowSelectorNgFactory:import8.ComponentFactory<import0.RowSelector> = new import8.ComponentFactory<import0.RowSelector>('mfRowSelector',View_RowSelector_Host0,import0.RowSelector);
const styles_RowSelector:any[] = ([] as any[]);
var renderType_RowSelector:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_RowSelector,{});
export class View_RowSelector0 extends import2.AppView<import0.RowSelector> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_RowSelector0,renderType_RowSelector,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'input',new import3.InlineArray2(2,'type','checkbox'),(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.checkboxId,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_1,'id',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.isChecked;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_1,'checked',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = import3.inlineInterpolate(1,'',this.context.checkboxId,'');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_3,'for',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>this.context.onChange()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
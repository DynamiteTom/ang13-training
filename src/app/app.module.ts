import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ts_features/
import { ArraysComponent } from './ts-features/copy-array/arrays/arrays.component';
import { ShallowCopyArrayComponent } from './ts-features/copy-array/shallow-copy-array/shallow-copy-array.component';
import { DeepCopyArrayComponent } from './ts-features/copy-array/deep-copy-array/deep-copy-array.component';

import { LetBlockComponent } from './ts-features/const-let-var/let-block/let-block.component';
import { ConstBlockComponent } from './ts-features/const-let-var/const-block/const-block.component';
import { VarGlobComponent } from './ts-features/const-let-var/var-glob/var-glob.component';

import { ClassDefnComponent } from './ts-features/interf-class/class-defn/class-defn.component';
import { InterfaceDefnComponent } from './ts-features/interf-class/interface-defn/interface-defn.component';
import { InheritClassComponent } from './ts-features/interf-class/inherit-class/inherit-class.component';

import { StrongTypesComponent } from './ts-features/types/strong-types/strong-types.component';
import { TypeGenericsComponent } from './ts-features/types/type-generics/type-generics.component';
import { TypeInferenceComponent } from './ts-features/types/type-inference/type-inference.component';
import { DestructuringTypesComponent } from './ts-features/types/destructuring-types/destructuring-types.component';
import { StaticTypeCheckingComponent } from './ts-features/types/static-type-checking/static-type-checking.component';
import { ReadOnlyPropsComponent } from './ts-features/types/read-only-props/read-only-props.component';
import { ReadOnlyTuplesComponent } from './ts-features/types/read-only-tuples/read-only-tuples.component';
import { IntersectionTypesComponent } from './ts-features/types/intersection-types/intersection-types.component';
import { NarrowingComponent } from './ts-features/types/narrowing/narrowing.component';
import { PartialTypesComponent } from './ts-features/types/partial-types/partial-types.component';

import { RestDotsComponent } from './ts-features/dots/rest-dots/rest-dots.component';
import { SpreadDotsComponent } from './ts-features/dots/spread-dots/spread-dots.component';
import { TscTranspilesJsComponent } from './ts-features/ts-other/tsc-transpiles-js/tsc-transpiles-js.component';

import { TsconfigJsonComponent } from './ts-features/ts-other/tsconfig-json/tsconfig-json.component';
import { TscToolingComponent } from './ts-features/ts-other/tsc-tooling/tsc-tooling.component';
import { EsAllBrowsersComponent } from './ts-features/ts-other/es-all-browsers/es-all-browsers.component';
import { GetterSetterComponent } from './ts-features/ts-other/getter-setter/getter-setter.component';
import { NullishCoalescingComponent } from './ts-features/ts-other/nullish-coalescing/nullish-coalescing.component';
import { CatchBugsEarlyComponent } from './ts-features/ts-other/catch-bugs-early/catch-bugs-early.component';
import { TsMenuComponent } from './ts-menu/ts-menu.component';

// import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Test2InfoSysComponent } from './test2-info-sys/test2-info-sys.component';
import { SubjectDataEntryComponent } from './subject-data-entry/subject-data-entry.component';

@NgModule({
  declarations: [
    AppComponent,

    ArraysComponent,
    ShallowCopyArrayComponent,
    DeepCopyArrayComponent,

    LetBlockComponent,
    ConstBlockComponent,
    VarGlobComponent,

    ClassDefnComponent,
    InterfaceDefnComponent,
    InheritClassComponent,

    StrongTypesComponent,
    TypeGenericsComponent,
    TypeInferenceComponent,
    DestructuringTypesComponent,
    StaticTypeCheckingComponent,
    ReadOnlyPropsComponent,
    ReadOnlyTuplesComponent,
    IntersectionTypesComponent,
    RestDotsComponent,
    SpreadDotsComponent,
    TscTranspilesJsComponent,
    TsconfigJsonComponent,
    TscToolingComponent,
    EsAllBrowsersComponent,
    CatchBugsEarlyComponent,
    DestructuringTypesComponent,
    NarrowingComponent,
    PartialTypesComponent,
    TsMenuComponent,
    Test2InfoSysComponent,
    SubjectDataEntryComponent
  ],
  imports: [
    BrowserModule,
   // MaterialModule,
   // FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

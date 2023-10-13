/* empty css                */import{b as A}from"./Well.0f666131.js";import"./Dropdown.449c3bcf.js";import"./Checkbox.c06f0d4e.js";import"./ExpandableGroup.d4553213.js";import"./Icon.a4659328.js";import{a as n,F as o,j as t}from"./jsx-runtime.f86a5495.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.75f9d52a.js";import"./index.ef76cc08.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.14996c25.js";import"../sb-preview/runtime.js";const W={title:"Components (Draft)/Tables/Simple",component:A,parameters:{docs:{description:{component:`
### CFPB DS - TableSimple component

Source: https://cfpb.github.io/design-system/components/tables
`}}}},e={args:{caption:n(o,{children:["This is the"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#standard-table-1",children:"default style"})," ","at the large screen breakpoint. Tables are not responsive by default;"]}),columns:["Column 1 header","Column 2 header","Column 3 header","Column 4 header"],rows:[["Row 1, Column 1","Row 1, Column 2","Row 1, Column 3","Row 1, Column 4"],["Row 2, Column 1","Row 2, Column 2","Row 2, Column 3","Row 2, Column 4"],["Row 3, Column 1","Row 3, Column 2","Row 3, Column 3","Row 3, Column 4"]]}},s={args:{...e.args,caption:n(o,{children:["Use a"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table",children:"Responsive stacked table"})," ","to stack table information on smaller screens and keep the information legible."]}),isResponsive:!0}},a={args:{columns:["Employee name","Phone number","Email address"],rows:[["Andrew Able","(202) XXX-XXXX","aable@example.com"],["Betsy Bort","(202) XXX-XXXX","bbort@example.com"],["Charles Clark","(202) XXX-XXXX","cclark@example.com"]],caption:n(o,{children:["The"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables",children:"directory table"})," ","is a variation of the stacked table. At the small screen breakpoint, the directory table pattern uses first column data (employee name, for instance) as a way to group and label stacks of rows. ."]}),isDirectory:!0}},r={args:{...e.args,caption:n(o,{children:["Use a table with"," ",t("a",{href:"https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll",children:"horizontal scroll"})," ","when the data you\u2019re presenting has more columns than will fit comfortably on the screen, and you want to ensure all information can be accessed in its original tabular structure, even on smaller screens."]}),isScrollableHorizontal:!0}},l={args:{...e.args,caption:n(o,{children:[t("a",{href:"https://cfpb.github.io/design-system/components/tables#striped-table",children:"Striping"})," ","is useful to help the eye track across table rows. Use striping for tables that have more than five columns, or for tables with rows that are difficult to follow across the full width of the table."]}),isStriped:!0}},T=[{header:"Col 1",width:30},"Col 2","Col 3",{header:"Right Aligned",width:40,alignRight:!0}],i={args:{...e.args,columns:T,caption:n(o,{children:[t("a",{href:"https://cfpb.github.io/design-system/components/tables#right-aligned-table",children:"Right-align columns"})," ","of numbers when they\u2019re quantities (counts, dollar amounts, percentages) or ordinals (ranks, item numbers). Use the .o-table_cell__right-align class on a td. ",t("br",{}),t("br",{}),"Left-align columns of numbers when they\u2019re nominal (ZIP codes, room numbers) or non-numeric values (names, phrases)."]})}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    caption: <>
        This is the{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#standard-table-1'>
          default style
        </a>{' '}
        at the large screen breakpoint. Tables are not responsive by default;
      </>,
    columns: ['Column 1 header', 'Column 2 header', 'Column 3 header', 'Column 4 header'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3', 'Row 1, Column 4'], ['Row 2, Column 1', 'Row 2, Column 2', 'Row 2, Column 3', 'Row 2, Column 4'], ['Row 3, Column 1', 'Row 3, Column 2', 'Row 3, Column 3', 'Row 3, Column 4']]
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,d;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        Use a{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table'>
          Responsive stacked table
        </a>{' '}
        to stack table information on smaller screens and keep the information
        legible.
      </>,
    isResponsive: true
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,g,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: ['Employee name', 'Phone number', 'Email address'],
    rows: [['Andrew Able', '(202) XXX-XXXX', 'aable@example.com'], ['Betsy Bort', '(202) XXX-XXXX', 'bbort@example.com'], ['Charles Clark', '(202) XXX-XXXX', 'cclark@example.com']],
    caption: <>
        The{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-stacked-table-with-header-directory-tables'>
          directory table
        </a>{' '}
        is a variation of the stacked table. At the small screen breakpoint, the
        directory table pattern uses first column data (employee name, for
        instance) as a way to group and label stacks of rows. .
      </>,
    isDirectory: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,y,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        Use a table with{' '}
        <a href='https://cfpb.github.io/design-system/components/tables#responsive-table-with-horizontal-scroll'>
          horizontal scroll
        </a>{' '}
        when the data you\u2019re presenting has more columns than will fit
        comfortably on the screen, and you want to ensure all information can be
        accessed in its original tabular structure, even on smaller screens.
      </>,
    isScrollableHorizontal: true
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var X,R,S;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    caption: <>
        <a href='https://cfpb.github.io/design-system/components/tables#striped-table'>
          Striping
        </a>{' '}
        is useful to help the eye track across table rows. Use striping for
        tables that have more than five columns, or for tables with rows that
        are difficult to follow across the full width of the table.
      </>,
    isStriped: true
  }
}`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var k,v,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    columns: columnsWithConfiguration,
    caption: <>
        <a href='https://cfpb.github.io/design-system/components/tables#right-aligned-table'>
          Right-align columns
        </a>{' '}
        of numbers when they\u2019re quantities (counts, dollar amounts, percentages)
        or ordinals (ranks, item numbers). Use the .o-table_cell__right-align
        class on a td. <br />
        <br />
        Left-align columns of numbers when they\u2019re nominal (ZIP codes, room
        numbers) or non-numeric values (names, phrases).
      </>
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const Z=["Standard","Responsive","Directory","HorizontalScroll","Striped","RightAligned"];export{a as Directory,r as HorizontalScroll,s as Responsive,i as RightAligned,e as Standard,l as Striped,Z as __namedExportsOrder,W as default};
//# sourceMappingURL=TableSimple.stories.ea86beb7.js.map

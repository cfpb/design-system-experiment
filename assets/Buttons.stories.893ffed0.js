/* empty css                */import{B as m}from"./Well.0f666131.js";import{B as r}from"./Dropdown.449c3bcf.js";import"./Checkbox.c06f0d4e.js";import"./ExpandableGroup.d4553213.js";import"./Icon.a4659328.js";import{a as d,j as n}from"./jsx-runtime.f86a5495.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.75f9d52a.js";import"./index.ef76cc08.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.14996c25.js";import"../sb-preview/runtime.js";const ee={title:"Components (Verified)/Buttons",component:r,argTypes:{appearance:{control:"select"},size:{control:"select"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>`}}}},e={args:{label:"Button",appearance:"primary",size:"default",disabled:!1,asLink:!1,iconLeft:void 0,iconRight:void 0}},t={args:{...e.args,appearance:"secondary"}},s={args:{...e.args,disabled:!0}},o={args:{...e.args,appearance:"warning"}},i={name:"Destructive action",args:{...e.args,label:"Destructive action",appearance:"warning",size:"full",asLink:!0},render:a=>d(m,{children:[n(r,{label:"Action"}),"\xA0",n(r,{...a})]})},c={name:"Full width (on x-small screens)",args:{...e.args,label:"Button",appearance:"primary",size:"full"}},u={name:"Button group",render:a=>d(m,{children:[n(r,{...a,label:"Yes"},"Yes"),n(r,{...a,label:"No"},"No"),n(r,{...a,label:"Maybe So"},"Maybe So")]})},l={name:"With icon",args:{...e.args},render:a=>d(m,{children:[n(r,{...a,label:"Back",iconLeft:"left"}),n(r,{...a,label:"Next",iconRight:"right"})]})},p={name:"With animated icon",args:{...e.args,label:"Submit your complaint"},render:a=>n(r,{...a,iconRight:"updating"})};var g,b,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
  }
}`,...(h=(b=e.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,y,f;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,k,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(_=(k=s.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var v,D,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
}`,...(x=(D=o.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var G,P,L;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Destructive action',
  args: {
    ...Primary.args,
    label: 'Destructive action',
    appearance: 'warning',
    size: 'full',
    asLink: true
  },
  render: arguments_ => <ButtonGroup>
      <Button label='Action' />
      &nbsp;
      <Button {...arguments_} />
    </ButtonGroup>
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var z,A,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var N,R,W;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Button group',
  render: arguments_ => <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
}`,...(W=(R=u.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,F,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var Y,j,O;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const ae=["Primary","Secondary","Disabled","Destructive","DestructiveAction","FullWidthOnSmallScreens","ButtonsGroup","StaticIconButtons","AnimatedIconButtons"];export{p as AnimatedIconButtons,u as ButtonsGroup,o as Destructive,i as DestructiveAction,s as Disabled,c as FullWidthOnSmallScreens,e as Primary,t as Secondary,l as StaticIconButtons,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Buttons.stories.893ffed0.js.map

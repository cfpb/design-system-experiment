import{w as B,s as r,e,u as d}from"./sleep.2f3972bf.js";/* empty css                */import"./Well.0f666131.js";import"./Dropdown.449c3bcf.js";import"./Checkbox.c06f0d4e.js";import{a as y}from"./ExpandableGroup.d4553213.js";import"./Icon.a4659328.js";import{a as v,j as H}from"./jsx-runtime.f86a5495.js";import"./_baseIsEqual.80ad4be5.js";import"./_commonjsHelpers.712cc82f.js";import"./index.320f77c7.js";import"./uniq.3ace9606.js";import"./index.4b267bee.js";import"./index.67736049.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.75f9d52a.js";import"./index.ef76cc08.js";import"./iframe.14996c25.js";import"../sb-preview/runtime.js";const K={title:"Components (Draft)/Expandable/Single",component:y,parameters:{docs:{description:{component:`
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`}}}},C=v("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem. Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore ipsa?\xA0",H("a",{href:"/?path=/story/components-expandable--default",children:"Lorem link"})]}),t={args:{header:"Expandable Header",children:C}},n={args:{...t.args,header:"Expandable Header",openOnLoad:!0}},o={play:async({canvasElement:f})=>{var p,c;const i=B(f);await r(500);const E=i.getByText((c=(p=n.args)==null?void 0:p.header)!=null?c:"");e(E).toBeInTheDocument();const a=i.getByRole("button");e(a.getAttribute("aria-expanded")).toMatch("false");const s=i.queryByText(/lorem ipsum/gi);e(s).not.toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("true"),e(s).toBeVisible(),d.click(a),await r(500),e(a.getAttribute("aria-expanded")).toMatch("false"),e(s).not.toBeVisible()},args:{...t.args,header:"Expandable Header"}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    header: 'Expandable Header',
    children: Content
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: 'Expandable Header',
    openOnLoad: true
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,w,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const waitTime = 500;
    const canvas = within(canvasElement);

    // Wait for initialization
    await sleep(waitTime);
    const heading = canvas.getByText(OpenOnLoad.args?.header ?? '');
    expect(heading).toBeInTheDocument();

    // Content wrapper collapsed
    const showHide = canvas.getByRole('button');
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');

    // Content hidden
    const content = canvas.queryByText(/lorem ipsum/gi);
    expect(content).not.toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content visible
    expect(showHide.getAttribute('aria-expanded')).toMatch('true');
    expect(content).toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content hidden
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');
    expect(content).not.toBeVisible();
  },
  args: {
    ...Default.args,
    header: 'Expandable Header'
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const Q=["Default","OpenOnLoad","TestExpandCollapse"];export{t as Default,n as OpenOnLoad,o as TestExpandCollapse,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Expandable.stories.f7be7f77.js.map

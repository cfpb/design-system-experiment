/* empty css                */import"./Well.0f666131.js";import"./Dropdown.449c3bcf.js";import"./Checkbox.c06f0d4e.js";import"./ExpandableGroup.d4553213.js";import"./Icon.a4659328.js";import{j as e,a as r}from"./jsx-runtime.f86a5495.js";import{L as n}from"./Layout.b9289319.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.75f9d52a.js";import"./index.ef76cc08.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.14996c25.js";import"../sb-preview/runtime.js";const g={title:"Components (Draft)/Layout/Wrapper",component:n.Wrapper,parameters:{docs:{description:{component:`
### CFPB DS Layout.Wrapper component

Container to help position Content and Sidebar elements.

Source: https://cfpb.github.io/design-system/development/main-content-and-sidebars

### Usage

import Layout from './Layout<br/>

< Layout.Main ><br/>
&nbsp;&nbsp;< Hero / ><br/>
&nbsp;&nbsp;< Layout.Wrapper ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Sidebar ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sidebar Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Sidebar ><br/>
&nbsp;&nbsp;< /Layout.Wrapper ><br/>
< /Layout.Main ><br/>
`}}}},t={args:{children:[e(n.Sidebar,{children:r("div",{children:[e("h2",{children:"Layout.Sidebar"}),r("ul",{children:[e("li",{children:"Item 1"}),e("li",{children:"Item 2"}),e("li",{children:"Item 3"})]})]})},"sidebar"),r(n.Content,{children:[e("h1",{children:"Layout.Content"}),e("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?"})]},"content")]},render:({children:p})=>e(n.Main,{children:e(n.Wrapper,{children:p})})};var i,o,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<Layout.Sidebar key='sidebar'>
        <div>
          <h2>Layout.Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </Layout.Sidebar>, <Layout.Content key='content'>
        <h1>Layout.Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          alias eum ut officiis optio similique explicabo cupiditate architecto
          voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos,
          mollitia possimus error earum?
        </p>
      </Layout.Content>]
  },
  render: ({
    children
  }) => <Layout.Main>
      <Layout.Wrapper>{children}</Layout.Wrapper>
    </Layout.Main>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const v=["Wrapper"];export{t as Wrapper,v as __namedExportsOrder,g as default};
//# sourceMappingURL=LayoutWrapper.stories.78557d69.js.map

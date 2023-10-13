/* empty css                */import{p as m,A as L,q as h}from"./Well.0f666131.js";import"./Dropdown.449c3bcf.js";import"./Checkbox.c06f0d4e.js";import"./ExpandableGroup.d4553213.js";import"./Icon.a4659328.js";import{j as n,a as g,F as f}from"./jsx-runtime.f86a5495.js";import"./index.cfa9e344.js";import"./isNativeReflectConstruct.75f9d52a.js";import"./index.ef76cc08.js";import"./_commonjsHelpers.712cc82f.js";import"./iframe.14996c25.js";import"../sb-preview/runtime.js";const j={title:"Components (Draft)/Banners",component:m,argTypes:{}},o=e=>{e.preventDefault()},a=({children:e,...d})=>n("span",{role:"link",onClick:o,onKeyUp:o,...d,children:e}),i={render:e=>n(m,{...e}),args:{links:[n(a,{children:n("a",{href:"/link",children:"Link 1"})},"Link 1"),n(a,{children:n("a",{href:"/link",children:"Link 2"})},"Link 2"),n(a,{children:n("a",{href:"/link",children:"Link 3"})},"Link 3")]}},r={...i,args:{links:L.filter(e=>e!=="en").map(e=>n(a,{children:n(h,{code:e})},e)),phoneNumber:"1-855-411-2372",tagline:g(f,{children:["An official website of the"," ",n("span",{className:"u-nowrap",children:"United States government"})]})}};var s,t,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: properties => <Banner {...properties} />,
  args: {
    links: [<UnclickableLink key='Link 1'>
        <a href='/link'>Link 1</a>
      </UnclickableLink>, <UnclickableLink key='Link 2'>
        <a href='/link'>Link 2</a>
      </UnclickableLink>, <UnclickableLink key='Link 3'>
        <a href='/link'>Link 3</a>
      </UnclickableLink>]
  }
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,k,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...BannerWithLinks,
  args: {
    links: AllLanguageCodes.filter(code => code !== 'en').map(code => <UnclickableLink key={code}>
        <LanguageLink code={code} />
      </UnclickableLink>),
    phoneNumber: '1-855-411-2372',
    tagline: <>
        An official website of the{' '}
        <span className='u-nowrap'>United States government</span>
      </>
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const E=["BannerWithLinks","CFGovEdition"];export{i as BannerWithLinks,r as CFGovEdition,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Banner.stories.260382de.js.map

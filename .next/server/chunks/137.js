exports.id=137,exports.ids=[137],exports.modules={5146:e=>{e.exports={subCategory:"Category_subCategory__GQdg_",leftBlock:"Category_leftBlock__ePaIx",priceHolder:"Category_priceHolder__bDQxa",discountPercentage:"Category_discountPercentage__OaYho",discountText:"Category_discountText__qK2aD",actualPrice:"Category_actualPrice__W0Cdb",discountPrice:"Category_discountPrice__fmAMD",priceTextHolder:"Category_priceTextHolder__WaGWS",titleText:"Category_titleText__Lkh9H",summaryHolder:"Category_summaryHolder__0Lm4l"}},6137:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>services_SubCatContainer});var r=s(997),t=s(6689),a=s.n(t),n=s(5675),l=s.n(n),c=s(8518),d=s.n(c),o=s(7050),u=s.n(o),m=s(5146),g=s.n(m);let template_CategoryTemplate=e=>{let{title:i,imageBlock:s,backgroundColor:t,categoryProps:a,textColor:n,subCategoryList:c}=e,o="https://sarkarifiling-assets.s3.ap-south-1.amazonaws.com/images/";return(0,r.jsxs)(u(),{children:[r.jsx(d(),{xs:24,md:11,className:`${t} ${g().leftBlock}`,children:(0,r.jsxs)(u(),{children:[r.jsx(d(),{xs:24,md:24,style:{paddingBottom:24},className:"imageBlock",children:s}),r.jsx(d(),{xs:{span:24},className:"block2",children:(0,r.jsxs)("div",{className:`${t}`,children:[r.jsx("div",{className:`${g().titleText} ${n}`,children:i}),r.jsx("div",{className:`${g().summaryHolder}`,children:a?.content})]})})]})}),c&&r.jsx(d(),{xs:{order:1,span:24},sm:{order:1},md:{order:1,span:13},lg:{order:1},className:`${t} block1`,children:r.jsx(u(),{gutter:[16,16],style:{paddingBottom:16},children:c.map(e=>{let i=Math.round((e.pricing_info?.price-e.pricing_info?.discounted_price)/e.pricing_info?.price*100),s=`${o}${e.image_identifier}.png`||`${o}${e.image_identifier}.PNG`;return(0,r.jsxs)(d(),{xs:12,md:12,children:[e.pricing_info?.discounted_price&&(0,r.jsxs)("div",{className:g().priceHolder,children:[r.jsx("div",{className:g().discountPercentage,children:i?r.jsx("div",{className:g().discountText,children:`${i}%`}):null}),(0,r.jsxs)("div",{className:g().priceTextHolder,children:[i?(0,r.jsxs)("div",{className:g().actualPrice,children:["₹",e.pricing_info?.price]}):null,(0,r.jsxs)("div",{className:g().discountPrice,children:["₹",e.pricing_info?.discounted_price]})]})]}),(0,r.jsxs)("div",{className:`${g().subCategory} ${n}`,children:[e.image_identifier&&r.jsx(l(),{src:`${s}`,onError:({currentTarget:i})=>{console.log(i),i.onerror=null,i.src=`${o}${e.image_identifier}.PNG`,i.srcset=`/_next/image?url=${o}${e.image_identifier}.PNG&w=96&q=75 1x, /_next/image?url=${o}${e.image_identifier}.PNG&w=256&q=75 2x`},width:70,height:80,alt:e.display_name}),e.display_name.toUpperCase()]})]},e.id)})})})]})};var _=s(968),x=s.n(_);let services_SubCatContainer=e=>{let{categoryItem:i,subCategoryData:s,seoData:t}=e;return a().useEffect(()=>{let e=document.querySelector(".ant-tabs-tab-active");e instanceof HTMLElement&&e.classList.add(`bg${i?.image_identifier}`)},[i?.image_identifier]),(0,r.jsxs)("div",{children:[r.jsx(x(),{children:(0,r.jsxs)("title",{children:["Sarkari Filing - ",i?.display_name]})}),r.jsx(template_CategoryTemplate,{title:i?.display_name,backgroundColor:`bg${i?.image_identifier}`,textColor:`color${i?.image_identifier}`,imageBlock:r.jsx("div",{className:"border-div",children:r.jsx(l(),{src:`/assets/services/${i?.image_identifier}.jpg`,layout:"responsive",width:300,height:300,alt:i?.display_name})}),categoryProps:{content:r.jsx("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Enim sit amet venenatis urna. Sagittis nisl rhoncus mattis rhoncus urna. Arcu dictum varius duis at consectetur lorem donec massa. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Venenatis urna cursus eget nunc scelerisque viverra mauris. Volutpat lacus laoreet non curabitur gravida arcu. Tristique risus nec feugiat in fermentum. Ornare lectus sit amet est placerat in. In arcu cursus euismod quis viverra nibh. Blandit."})},subCategoryList:s?.result}),r.jsx(u(),{gutter:[0,16],className:`bg${i?.image_identifier} seoContentHolder seoContentParentHolder`,children:r.jsx(d(),{xs:24,children:r.jsx("div",{dangerouslySetInnerHTML:{__html:t?.result?.content}})})})]})}}};
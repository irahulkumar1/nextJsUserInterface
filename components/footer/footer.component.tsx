// 'use client';
// import React from 'react';
// import { FacebookFilled, InstagramFilled, MobileOutlined, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons';
// import styles from './footer.module.css';
// import { Col, Row, Button } from 'antd';
// import Link from 'next/link';
// import fetcher from '../../api/fetcher';
// import useSWR from 'swr';

// class FooterComponent extends React.PureComponent<{}, { footerData: any, category: any }> {

//   constructor(props) {
//     super(props);
//     this.state = { footerData: {}, category: [] };
//   }

//   async componentDidMount() {
//     const footerRes = await fetch('http://65.2.101.63:9000/api/footer');
//     const categoryRes = await fetch('http://65.2.101.63:9000/api/category');
//     if (!footerRes.ok && !categoryRes.ok) {
//       throw new Error('Error');
//     }
//     const footerData = await footerRes.json();
//     const category = await categoryRes.json();
//     this.setState({
//       footerData: footerData.result,
//       category: category.result
//     })
//   }

//   render() {
//     console.log(this.state);
//     return (
//       <>
//         <footer className={styles.footerHolder}>
//           <div>
//             <Row justify='center' className={styles.footerBlock1}>
//               <Col xs={24} md={2}></Col>
//               <Col xs={24} md={13}>
//                 <h2>Take the next step</h2>
//                 <div>Connect with Sarkari Filing for answers to all your business and all your personal financial concers</div>
//               </Col>
//               <Col xs={0} md={7} className={styles.contactHolder}>
//                 <Button type="default" shape="round" className={styles.contactButton}>+91 9123456789</Button>
//               </Col>
//               <Col xs={24} md={0} className={styles.contactHolder}>
//                 <a href="tel:+91 9123456789" className={styles.contactButton}>+91 9123456789</a>
//               </Col>
//               <Col xs={24} md={2}></Col>
//             </Row>
//           </div>
//           <div>
//             <Row className={styles.footerBlock2}>
//               <Col xs={24} md={2}></Col>
//               <Col xs={0} md={7}>
//                 <h2>Our Company</h2>
//                 {this.state?.footerData?.our_company?.map((item) => {
//                   return (
//                     <Link key={item.display_text} href={`/seo${item.redirection_url_identifier}`}>{item.display_text}</Link>
//                   );
//                 })}
//               </Col>
//               <Col xs={0} md={6}>
//                 <h2>Services</h2>
//                 {this.state?.category?.map((item) => {
//                   return (
//                     <Link key={item.id} href={`/services/${item.id}`}>{item.display_name}</Link>
//                   );
//                 })}
//               </Col>
//               <Col xs={24} md={7}>
//                 <h2>Get In Touch</h2>
//                 {this.state?.footerData?.get_in_touth?.map((item) => {
//                   return (
//                     <Link key={item.display_text} href={item.redirection_url_identifier}>{item.display_text}</Link>
//                   );
//                 })}
//                 <div className={styles.socialLinkHolder}>
//                   <FacebookFilled />
//                   <InstagramFilled />
//                   <YoutubeFilled />
//                   <TwitterSquareFilled />
//                 </div>
//               </Col>
//               <Col xs={24} md={2}></Col>
//             </Row>
//           </div>
//         </footer>
//       </>
//     );
//   }
// }

// // export default FooterComponent;
// module.exports = FooterComponent;


// export async function getStaticProps() {
//   try {
//     const footerRes = await fetch('http://65.2.101.63:9000/api/footer');
//     const categoryRes = await fetch('http://65.2.101.63:9000/api/category');
//     if (!footerRes.ok && !categoryRes.ok) {
//       throw new Error('Error');
//     }
//     const footerData = await footerRes.json();
//     const category = await categoryRes.json();

//     return {
//       props: {
//         footerData,
//         category,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);

//     // Handle the error as needed, e.g., return a default value or an error message
//     return {
//       props: {
//         footerData: null, // or an error message
//         category: null,
//       },
//     };
//   }
// }

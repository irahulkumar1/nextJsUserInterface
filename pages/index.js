'use client';

import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import fetcher from '../api/fetcher';

import Image from 'next/image';
import constructRow from '../utils/constructRow';
import LoadingBlockComponent from '../components/loading/loadingBlock';
import LazyLoadComponentOnScroll from './home/LazyLoadComponentOnScroll';
import { Col, Row } from 'antd';
import useSWR from 'swr';

export default function Home(props) {
  // const {testimonials, category: data, seoData} = props;

  const { data } = useSWR('http://65.2.101.63:9000/api/category', fetcher);
  const { data: testimonials } = useSWR('http://65.2.101.63:9000/api/testamonial', fetcher);
  const { data: seoData } = useSWR('http://65.2.101.63:9000/api/seo?entity_id=2&entity_type=CATEGORY', fetcher);

  let dividedRow;
  if (data) {
    dividedRow = constructRow(JSON.parse(JSON.stringify(data.result)));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Sarkari Filing</title>
    {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VLK6BRCXF2"></script>
{/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}}
  gtag('js', new Date());

  gtag('config', 'G-VLK6BRCXF2');
</script> */}
      </Head>

      <main>
        <div id="services" className='blockHolder'>
          {!data ? <LoadingBlockComponent /> : <Row>
            <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
            <Col xs={24} md={22} lg={22} xl={22} xxl={24}>
            <Row>
            <Col xs={24}>
              <div className="heading">Our Services</div>
            </Col>
            {data?.result?.map((item) => {
              if (item.image_identifier) {
                return (
                    <Col className={styles.serviceItemHolder} key={item.id} xs={24} md={12} lg={8}>
                      <Link href={`/services/${item.id}`}>
                      <div className={`${styles.serviceTitle} bg${item.image_identifier}`}>{item.display_name}</div>
                      <Image priority={true} src={`/assets/services/${item.image_identifier}.jpg`} layout="responsive" width={375} height={300} alt={item.display_name} />
                      </Link>
                    </Col>
                )
              } else {
                return null;
              }
            })}
            </Row>
            </Col>
            <Col xs={24} md={1} lg={1} xl={1} xxl={24}></Col>
          </Row>}
        </div>
        <div className={styles.customerSaysContentHolder}>
          <Row>
            <Col className='text-align-center' span={24}>
              <h1 className={styles.h1}>What our customer says</h1>
            </Col>
          </Row>
          <Row>
            <Col span={4}></Col>
            <Col className='text-align-center' span={16}>
              <div className={styles.content}>Sarkari filing works with some of the most dynamic industries accross India and provides hassle free services in financial aspects ., be in tax audits or be in trademarking</div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>

        <div className={`blockHolder ${styles.customerSaysContent}`}>
          <LazyLoadComponentOnScroll slideContent={testimonials} styles={styles} />
        </div>
        <div className={`${styles.customerLogoHolder}`}>
          <Row>
            <Col className={styles.colBlock} xs={24} md={8}>
              <Image alt={'union'} src={'/assets/customer/1.PNG'}  width={200} height={80} />
            </Col>
            <Col className={styles.colBlock} xs={24} md={8}>
              <Image alt={'union'} src={'/assets/customer/2.PNG'}  width={200} height={80} />
            </Col>
            <Col className={styles.colBlock} xs={24} md={8}>
              <Image alt={'union'} src={'/assets/customer/3.PNG'} width={200} height={80} />
            </Col>
          </Row>
        </div>
        {/* <Row className='blockHolder seoContentParentHolder'>
          <Col span={3}></Col>
          <Col span={18}>
            <div className={styles.content}><div dangerouslySetInnerHTML={{ __html: seoData?.result?.content}} /></div>
          </Col>
          <Col span={3}></Col>
        </Row> */}
        
      </main>

    </div>
  );
}


// export async function getStaticProps() {
//   try {
//     const categoryRes = await fetch('http://65.2.101.63:9000/api/category');
//     const response = await fetch('http://65.2.101.63:9000/api/testamonial');
//     const seoRes = await fetch(`http://65.2.101.63:9000/api/seo?entity_id=2&entity_type=CATEGORY`)
//     if (!response.ok && !categoryRes.ok && !seoRes.ok) {
//       throw new Error('Error');
//     }
//     const testimonials = await response.json();
//     const category = await categoryRes.json();
//     const seoData = await seoRes.json();

//     return {
//       props: {
//         testimonials,
//         category,
//         seoData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);

//     // Handle the error as needed, e.g., return a default value or an error message
//     return {
//       props: {
//         testimonials: null, // or an error message
//         data: null,
//       },
//     };
//   }
// }

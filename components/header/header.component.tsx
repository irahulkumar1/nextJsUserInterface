'use client';
import React from 'react';
import Image from "next/image";
import styles from './header.module.css';
import { Button, Col, Drawer, Row } from "antd";
import {
  MobileOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export default function HeaderComponent() {

  const [open, setOpen] = React.useState(false);
  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className={styles.headerHolder}>
        <Row align={'middle'}>
          <Col xs={24} md={12}>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoHolder}>
                <Image priority={true} src={'/assets/logoIcon.png'} width={50} height={70} alt="Sarkari Filing logo" />
                <div className={styles.logoText}>Sarkari Filing</div>
              </Link>
              <div className={`${styles.contactButton} showResponsiveBlock`}><div className={styles.hours24}>24/7</div>+91 9123456789</div>
            </div>
          </Col>
          <Col xs={24} md={0} className={styles.colHolder}>
            <Button type="text">About Us</Button>
            <Button type="text">Sarkari Filings Blog</Button>
          </Col>
          <Col xs={12} md={12} className={`hideResponsiveBlock ${styles.colContactHolder}`}>
            <div className={styles.menuHolder}>
              <Button type="text">About Us</Button>
              <Button type="text">Sarkari Filings Blog</Button>
            </div>
            <div className={styles.contactButton}><div className={styles.hours24}>24/7</div>+91 9123456789</div>
          </Col>
        </Row>
        
      </header>

      <Drawer
        title="Sarkari Filling"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
        width={320}
        className="drawerHolder"
      >
        <Button type="text" onClick={() => scrolltoHash('about-us')}>About Us</Button>
        <Button type="text" onClick={() => scrolltoHash('services')}>Services</Button>
        <Button type="text">Contact Us</Button>
      </Drawer>
    </>
  );
}

import { Col, Row } from 'antd';
import Styles from './loading.module.scss';

const LoadingBlockComponent = () => {
    const renderBlock = (count: any) => {
        let block = [];
        for (let i = 1; i <= count; i++) {
            block.push(<main className={Styles.page} style={{height: '300px', width: '300px',  minHeight: 'auto'}}>
                    <div className={Styles.placeholderContent} style={{height: '100%'}}>
                        <div className={Styles.placeholderContentItem} style={{height: '100%'}}></div>
                    </div>
                </main>);
        }
        return block;
    }
    return (
        <>
        <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            {renderBlock(3)}
        </Row>
        <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            {renderBlock(3)}
        </Row>
        </>
    );
}

export default LoadingBlockComponent;
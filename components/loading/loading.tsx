import Styles from './loading.module.scss';

const LoadingComponent = () => {
    return (
        <main className={Styles.page}>
            <div className={Styles.placeholderContent}>
                <div className={Styles.placeholderContentItem}></div>
                <div className={Styles.placeholderContentItem}></div>
                <div className={Styles.placeholderContentItem}></div>
                <div className={Styles.placeholderContentItem}></div>
                <div className={Styles.placeholderContentItem}></div>
            </div>
        </main>
    );
}

export default LoadingComponent;
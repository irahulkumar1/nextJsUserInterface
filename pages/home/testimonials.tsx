
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import LoadingComponent from '../../components/loading/loading';

const TestimonialsComponent = (props: any) => {
    const {slideContent: data, styles} = props;
    const slideBgColor = ['#c3a7aa', '#90bcf3', '#eec2a1', '#f49352'];
   

    
    return (
    <>
    {!data ? <LoadingComponent /> : <Swiper
        effect={'coverflow'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.result?.map((slide: any, index: number) => {
          return (
            <SwiperSlide key={slide.owner + index} style={{ backgroundColor: slideBgColor[index % 4] }}>
              <div className={styles.slideContent}>
                {slide.display_text}
              </div>
              <div className="text-align-right">
                ~ {slide.owner}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>}
      </>);
}

export default TestimonialsComponent;

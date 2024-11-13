import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const news = [
  {
    id: 1,
    title: '主日聚会时间调整通知',
    image: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?auto=format&fit=crop&w=1200&h=600',
    description: '从下周开始，主日聚会时间调整为上午10点开始。',
  },
  {
    id: 2,
    title: '新一期初信栽培课程',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=1200&h=600',
    description: '欢迎新朋友参加每周四晚上的初信栽培课程。',
  },
  {
    id: 3,
    title: '新一季查经班开始报名',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&h=600',
    description: '罗马书查经班现已开放报名，请有意参加的弟兄姐妹及时登记。',
  },
];

export default function NewsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="rounded-xl overflow-hidden"
    >
      {news.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative h-[400px]">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-xl text-white">{item.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
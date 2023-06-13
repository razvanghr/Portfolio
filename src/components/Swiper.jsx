import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

import img1 from "../assets/img1-min.png";
import img2 from "../assets/img2-min.png";
import img3 from "../assets/img3-min.png";
import img4 from "../assets/img4-min.png";
import img5 from "../assets/img5-min.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        {
          <ProjectCard
            title={"BankApp"}
            image={img4}
            desc={
              "A banking type application that includes both the frontend and the backend part"
            }
            link="https://github.com/razvanghr/BankApp---Client-Server-MySQL"
          />
        }
      </SwiperSlide>
      <SwiperSlide>
        {
          <ProjectCard
            title={"PrettyMansion"}
            image={img2}
            desc={"A landing page made with react for a small restaurant"}
            link="https://github.com/razvanghr/prettymansion-page"
          />
        }
      </SwiperSlide>
      <SwiperSlide>
        {
          <ProjectCard
            title={"DiscordAutoMessage"}
            image={img1}
            desc={
              "The application will send a message entered by the user at a set time interval"
            }
            link="https://github.com/razvanghr/DiscordAutoCoins--Python"
          />
        }
      </SwiperSlide>
      <SwiperSlide>
        {
          <ProjectCard
            title={"TaskTracker"}
            image={img5}
            desc={"A task tracker that will save the data in a mock database"}
            link="https://github.com/razvanghr/TaskTracker---ReactJS"
          />
        }
      </SwiperSlide>
    </Swiper>
  );
};

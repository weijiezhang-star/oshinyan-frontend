import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import BtnPurple from "./components/BtnPurple";
import CustomButton from "../../basic/BasicButton";
import Twitter from "../../basic/icons/Twitter";
import Instagram from "../../basic/icons/Instagram";
import Border from "./components/Border";
import HeartCircle from "../../basic/icons/HeartCircle";
import { CalendarMonthSharp } from "@mui/icons-material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Fanciers from "./components/Fanciers";
import CatDetailCarousel from "./components/CatDetailCarousel";
import CatFavorite from "./components/CatFavorite";
import BtnAdd from "./components/BtnAdd";
import BtnSolid from "./components/BtnSolid";
import CatImage from "./components/CatImage";
import BlogBox from "../../basic/blog/BlogBox";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";
import ImageDetail from "./components/ImageDetail";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
];

const CatImgs = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
];

const CatsInSamePlace = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
];

const actions = [
  "cat_avatar_1.png",
  "cat_avatar_2.png",
  "cat_avatar_3.png",
  "cat_avatar_4.png",
  "cat_avatar_5.png",
  "cat_avatar_6.png",
  "cat_avatar_7.png",
  "cat_avatar_8.png",
];

const CatDetail = () => {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showImageDetail, setShowImageDetail] = useState(false);
  return (
    <div className="w-full relative">
      <CatDetailCarousel />
      <div className="w-full bg-white p-[28px] pt-[0px]">
        <div className="flex justify-between">
          <div className="flex items-center font-bold">
            <img src="/assets/imgs/icons/face_empty.png" alt="cat icon" />
            <span className="text-2xl ms-4">なまむぎなまごめ</span>
          </div>
          <div className="flex gap-[6px] items-center">
            <img src="/assets/imgs/icons/comment_chu.png" alt="" />
            <img src="/assets/imgs/icons/foot_solid.png" alt="" />
          </div>
        </div>
        <div className="mt-2">
          <BtnPurple
            text="ニャンアルバム"
            isShowIcon={true}
            onClick={() => {
              setShowImageGallery(true);
            }}
          />
        </div>
        <div className="mt-4 break-all">
          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
        </div>
        <div className="mt-2">
          <a href="#" className="underline text-base w-[180px] inline-block">
            にゃんにゃんカフェ
          </a>
          <CustomButton value={"東京都"}></CustomButton>
        </div>
        <div className="flex gap-[14px] mt-6">
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
        </div>
        <Border className="mt-6" color="#CCCCCC" />
        <div className="w-full flex gap-8 mt-6">
          <div className="flex gap-2">
            <CalendarMonthSharp fontSize="large" style={{ fill: "#FAD2B5" }} />
            <div className="ms-2">出勤頻度</div>
            <div className="ms-4">
              <CustomButton value={"毎日"} />
            </div>
          </div>
          <div className="flex gap-2">
            <HeartCircle />
            <div className="ms-2">性格</div>
            <div className="ms-4 flex gap-2">
              <CustomButton value={"やさしい"} />
              <CustomButton value={"気分屋さん"} />
            </div>
          </div>
        </div>
        <div className="w-full flex mt-6">
          <StarRateRoundedIcon
            className="me-2"
            style={{ fill: "#FAD2B5", fontSize: "30px" }}
          />
          <div className="w-[150px]">好きなモノ・コト</div>
          <div className="">
            お昼寝、猫じゃらし、頭をやさしくナデナデ、座布団
          </div>
        </div>
        <div className="w-full flex mt-6 items-center h-10">
          <div className="flex items-center">
            <img className="w-6" src="/assets/imgs/mark_chu.png" alt="" />
          </div>
          <div className="text-2xl font-medium ms-2">000ニャン</div>
        </div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="flex flex-wrap mt-4">
          <Fanciers />
        </div>
        <div className="mt-9">推しニャンコメント</div>
        <div className={`w-full border-b border-black mt-5`}></div>
        <div className="flex mt-5">
          <div className="break-all grow-0 break-words text-sm">
            □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□ニャン
          </div>
          <div className="w-[184px] grow ms-10">
            <BtnPurple
              text="ニャンアルバム"
              isShowIcon={false}
              onClick={() => {}}
            />
          </div>
        </div>
        <Border className="mt-4" color="#CCCCCC" />
        {/* 1 */}
        <div className="mt-6">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                className="w-full"
                src="/assets/imgs/info_cat.png"
                alt="cat"
              />
            </div>
            <div className="text-base underline ms-4">猫好きさん</div>
          </div>
          <div className="mt-2 text-xs text-[#767676]">2023.00.00</div>
          <div className="break-all mt-4 text-base">
            □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□…
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          {Cats.map((e, i) => {
            return <CatFavorite imgUrl={e.imgUrl} vote="000" key={i} onClick={() => setShowImageDetail(true)}/>;
          })}
        </div>
        <div className="mt-6">
          <BtnAdd />
        </div>
        <div className="flex gap-2 mt-4">
          {actions.map((e, i) => (
            <img
              className="w-7 h-7"
              src={`/assets/imgs/icons/${e}`}
              alt=""
              key={i}
            />
          ))}
        </div>
        {/* 2 */}
        <Border className="mt-5 border-dashed" color="#CCCCCC" />
        <div className="mt-6">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                className="w-full"
                src="/assets/imgs/icons/cat_avatar_2.png"
                alt="cat"
              />
            </div>
            <div className="text-base underline ms-4">はなこさん</div>
          </div>
          <div className="mt-2 text-xs text-[#767676]">2023.00.00</div>
          <div className="break-all mt-4 text-base">
            □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□…
          </div>
        </div>
        <div className="mt-6">
          <BtnAdd />
        </div>
        <div className="flex gap-2 mt-4">
          {actions.map((e, i) => (
            <img
              className="w-7 h-7"
              src={`/assets/imgs/icons/${e}`}
              alt=""
              key={i}
            />
          ))}
        </div>
        {/* add button */}
        <Border className="mt-5 border-dashed" color="#CCCCCC" />
        <div className="mt-8 flex justify-center">
          <BtnSolid onClick={() => {}} />
        </div>

        {/* album */}
        <div className="text-base mt-14 font-medium">ニャンアルバム</div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="flex justify-between mt-6 flex-wrap gap-y-3">
          {CatImgs.map((e, i) => {
            return (
              <CatImage
                imgUrl={e.imgUrl}
                personName={e.personName}
                vote="000"
                key={i}
              />
            );
          })}
        </div>
      </div>

      {/* signboard cat in the same place */}
      <div className="text-base mt-8 font-medium">
        同じ地域の看板猫を探すニャン！
      </div>
      <div className="w-full border-b border-[#CBB279] mt-4"></div>
      <div className="mt-6 flex flex-wrap justify-between">
        {CatsInSamePlace.map((e, i) => (
          <BlogBox
            key={i}
            imgUrl="/assets/imgs/cats/cat1.png"
            isChu={true}
            name={"heracles"}
            cafe={"cafe"}
            vote={2}
            character={["a", "a"]}
            description={"this is description"}
          />
        ))}
      </div>
      <ImageGallery show={showImageGallery} setShow={setShowImageGallery} />
      <ImageDetail show={showImageDetail} setShow={setShowImageDetail} />
    </div>
  );
};

export default CatDetail;

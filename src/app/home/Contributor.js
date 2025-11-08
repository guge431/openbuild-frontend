/**
 * Copyright 2024 OpenBuild
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

// import { clsx } from 'clsx';

// import { LocationIcon } from '@/components/Icons'
// import { useMediaUrl } from '#/state/application/hooks'
import P1 from 'public/images/home/Qinghao.jpeg';
import P2 from 'public/images/home/King.png';
import P3 from 'public/images/home/nuanxiang.jpeg';
import P4 from 'public/images/home/maimai.jpg';
import P5 from 'public/images/home/Jintol.jpg';
import P6 from 'public/images/home/xiaobai.jpeg' ;
import P7 from 'public/images/home/xujiayuan.jpg';
import P8 from 'public/images/home/zhonghongnian.jpeg';
import P9 from 'public/images/home/meimei.jpg';
import P10 from 'public/images/home/pokemon.jpg';
import P11 from 'public/images/home/wangalvin.jpeg';
import P12 from 'public/images/home/Blake.jpg';
import P13 from 'public/images/home/RickyShao.jpg';
import P14 from 'public/images/home/nuanxiang.jpeg';
import P15 from 'public/images/home/yaco.png';
import P16 from 'public/images/home/liyin.jpg';
import P17 from 'public/images/home/majoson.png';
import P18 from 'public/images/home/yaco.png';

const DATAS = [
  {
    username: 'King',
    email: 'lispking@qq.com',
    x: 'lispking',
    github: 'https://github.com/lispking',
    contact: 'lispking',
    picture: P1,
    identity: 'Contract Engineer;Backend Engineer;Fullstack Engineer',
  },
  {
    username: '微扰 \ Qinghao',
    twitter: 'x.com/weriaolilun',
    x: 'weriaolilun',
    github: 'github.com/wfnuser',
    contact: 'wechat: wfnusee',
    picture: P2,
    identity: 'Fullstack Engineer',
  },
  {
    username: '向暖',
    twitter: '@coco69564520',
    x: 'coco69564520',
    github: 'https://github.com/xiangnuans',
    contact: 'guo1368574',
    picture: P3,
    identity: 'Fullstack Engineer',

  },
  {
    username: 'LeeMaimai',
    twitter: 'https://x.com/LeeMmai',
    x: 'LeeMmai',
    github: 'https://github.com/LeeMaimai',
    contact: 'LizMai123',
    picture: P4,
    identity: 'Marketing',

  },
  {
    username: 'Jintol',
    twitter: '@JintolOfficial',
    x: 'JintolOfficial',
    github: 'https://github.com/JintolChan',
    contact: 'Telegram：JintolOfficial',
    picture: P5,
    identity: 'Fullstack Engineer',
  },
  {
    username: '小白',
    twitter: '0x_cat_Student',
    x: '0x_cat_Student',
    github: '0x-IHRR',
    contact: 'Ox_IHRR',
    picture: P6,
    identity: 'Product Manager;Designer',
  },
  {
    username: '许嘉媛',
    twitter: '许嘉媛',
    x: '许嘉媛',
    github: 'sherryxie995',
    contact: 'xy_939422751',
    picture: P7,
    identity: 'Backend Engineer',
  },
  {
    username: 'Nelson',
    twitter: '@VCNelson_Z',
    x: 'VCNelson_Z',
    github: 'NA',
    contact: 'wechat：nhz_Nelson',
    picture: P8,
    identity: 'Product Manager;Community Operation;Marketing',
  },
  {
    username: '每每',
    twitter: 'everyevery91608',
    x: 'everyevery91608',
    github: 'https://github.com/everyeveryV',
    contact: 'zhiyuxi666',
    picture: P9,
    identity: 'Community Operation;Writer',
  },
  {
    username: '大大黄',
    twitter: '@Alger779503577',
    x: 'Alger779503577',
    github: 'https://github.com/dajiangjunok',
    contact: '微信：_KFC-v50-',
    picture: P10,
    identity: 'Contract Engineer;Frontend Engineer',
  },
  {
    username: 'alvinwang',
    twitter: 'AlvinWang9521',
    x: 'AlvinWang9521',
    github: 'https://github.com/Nakiswen',
    contact: '18627687129',
    picture: P11,
    identity: 'Frontend Engineer;Fullstack Engineer',
  },
  {
    username: 'Blake',
    twitter: 'Blakeesss',
    x: 'Blakeesss',
    github: 'https://github.com/blakeees',
    contact: 'blakees',
    picture: P12,
    identity: 'Writer',
  },
  {
    username: 'veithly',
    twitter: 'RickyEACC',
    x: 'RickyEACC',
    github: 'veithly',
    contact: 'wechat: RICKY-SHA0',
    picture: P13,
    identity: 'Fullstack Engineer;Writer',
  },
  {
    username: '向暖',
    twitter: '@coco69564520',
    x: 'coco69564520',
    github: 'https://github.com/xiangnuans',
    contact: 'guo1368574',
    picture: P14,
    identity: 'Fullstack Engineer',
  },
  {
    username: 'yaco',
    twitter: '0xyaco',
    x: '0xyaco',
    github: 'OS-Lihua',
    contact: 'YaCoTg',
    picture: P15,
    identity: 'Contract Engineer;Product Manager;Community Operation;Writer',
  },
  {
    username: 'Young',
    twitter: 'https://x.com/young_x_',
    x: 'young_x_',
    github: 'https://github.com/liyincode',
    contact: '微信：young-wx-',
    picture: P16,
    identity: 'Frontend Engineer;Fullstack Engineer',
  },
  {
    username: 'Majoson',
    twitter: 'YoukinChen',
    x: 'YoukinChen',
    github: 'majoson-chen',
    contact: 'majoson168（wechat）',
    picture: P17,
    identity: 'Contract Engineer;Backend Engineer;Frontend Engineer;Fullstack Engineer;Product Manager;Community Operation;Writer',
  },
  {
    username: 'YaCo',
    twitter: 'https://x.com/0xYaCo',
    x: '0xYaCo',
    github: 'https://github.com/OS-Lihua',
    contact: 'https://t.me/yacoyaco',
    picture: P18,
    identity: 'Contract Engineer;Backend Engineer;Product Manager;Community Operation',
  },
];
export function Contributor() {
  return (
    <div className="pt-14 rounded-t-2xl bg-home-contributor-bg px-11">
      <div className="max-md:flex-col flex justify-between mb-8 max-md:mb-6">
        <h1 className="max-md:text-center max-md:text-[28px] max-md:leading-9 text-[42px] leading-[52px] max-w-lg" data-aos="fade-right" data-aos-delay="500">OpenBuild Community Contributor</h1>
        <p className="max-md:text-center max-md:mt-4 text-base max-w-xl" data-aos="fade-left" data-aos-delay="500">Provide high-quality Web3 technical content.Share job opportunities/bounties with developers.Build an open community together.</p>
      </div>

      <div className="pb-20 max-md:pb-14" data-aos="zoom-in-up" data-aos-delay="800">
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
          {DATAS.map((contributor, index) => (
            <div
              key={`contributor-card-${index}`}
              className="relative group w-full rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >

              <a
                href={`https://twitter.com/${contributor.x}`}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center transition-all duration-300 group-hover:bg-black"
                onClick={e => e.stopPropagation()}
              >
                <svg
                  className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              <div className="flex flex-col items-center text-center pt-6 px-6">
                <div className="relative mb-4">
                  <img
                    src={contributor.picture?.src || '/images/default-avatar.png'}
                    alt={contributor.username}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h6 className="text-base font-medium text-[#1A1A1A] mb-1 truncate w-full">{contributor.username}</h6>
                <p className="text-sm text-[#666666] mb-4 truncate w-full">{contributor.identity}</p>
              </div>
              <div className="bg-[#F9FAFB] py-4 px-6 flex gap-3 items-center justify-center">
                {contributor.x && (
                  <a
                    href={`https://twitter.com/${contributor.x}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1A1A1A] hover:text-black transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 12" fill="currentColor">
                      <path d="M10.6433 0.3125H12.5729L8.35717 5.13083L13.3167 11.6875H9.43342L6.39192 7.71092L2.91176 11.6875H0.980922L5.49009 6.53375L0.732422 0.3125H4.71426L7.46351 3.94725L10.6433 0.3125ZM9.96601 10.5325H11.0353L4.13326 1.40683H2.98584L9.96601 10.5325Z"/>
                    </svg>
                  </a>
                )}
                {contributor.github && (
                  <a
                    href={contributor.github.startsWith('http') ? contributor.github : `https://github.com/${contributor.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1A1A1A] hover:text-black transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

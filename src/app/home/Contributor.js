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
// import P14 from 'public/images/home/AlongHudson.png';
// import P11 from 'public/images/home/Frank.png';
// import { LocationIcon } from '@/components/Icons'
// import { useMediaUrl } from '#/state/application/hooks'
// import P3 from 'public/images/home/Fred.png';
// import P17 from 'public/images/home/Gabin.jpeg';
// import P13 from 'public/images/home/galois.png';
// import P16 from 'public/images/home/GianM.png';
// import P15 from 'public/images/home/hiCaptainZ.png';
// import P8 from 'public/images/home/HitchhikerW3.png';
// import P18 from 'public/images/home/Ivan.jpeg';
// import P4 from 'public/images/home/jason.svg';
// import P19 from 'public/images/home/Leo.jpg';
// import P10 from 'public/images/home/pseudoyu.jpeg';
// import P7 from 'public/images/home/qc_qizhou.png';
import P1 from 'public/images/home/shooter.jpeg';
// import P5 from 'public/images/home/Sinka.png';
// import P2 from 'public/images/home/Skyhigh.png';
// import P9 from 'public/images/home/uvd.png';
// import P6 from 'public/images/home/xhyumiracle.png';

// const DATAS = [
//   { name: 'NPC_Leo', picture: P19, x: 'NPC_Leo', title: 'Founder of DevBase @DevBase' },
//   { name: 'justin', picture: P15, x: 'hiCaptainZ', title: 'Researcher. Focusing on Onchain Game' },
//   { name: 'GianM', picture: P16, x: 'gianmalarcon', title: 'Developer @Cairo/Rust, Blockchain engineer @Quantum3 Labs' },
//   { name: 'Gabin', picture: P17, x: 'gabinmarignier', title: 'Founder @Focus Tree' },
//   { name: 'Ivan', picture: P18, x: 'Ivan_SpaceShard', title: '' },
//   { name: 'shooter', picture: P1, x: 'liushooter', title: 'Co-Founder @Rebase' },
//   { name: 'Skyhigh', picture: P2, x: 'skyh20', title: 'AA Community Initiator' },
//   { name: '大葱 Fred', picture: P3, x: 'Dacongfred', title: 'Ryze Labs Venture' },
//   { name: 'jason', picture: P4, x: 'jason_movebit', title: 'Security research @ScaleBit' },
//   { name: 'Sinka', picture: P5, x: 'sinka2022', title: 'Founder @Delphinuslab' },
//   { name: '于晓航', picture: P6, x: 'xhyumiracle', title: 'Core Researcher @Hyper Oracle' },
//   { name: '周期博士', picture: P7, x: 'qc_qizhou', title: 'Founder @EthStorage' },
//   { name: '任泓毅', picture: P8, x: 'HitchhikerW3', title: 'Co-founder & research @W3.Hitchhiker' },
//   { name: 'uvd', picture: P9, x: 'wangtxxl', title: 'Technical ambassador @Sui ' },
//   { name: 'pseudoyu', picture: P10, x: 'pseudo_yu', title: 'Back-end & Smart Contract Developer @RSS3 & Crossbell' },
//   { name: 'Frank@Beosin', picture: P11, x: 'BeosinAlert', title: 'Security Researcher & Leader @Beosin Security Incident Team' },
//   { name: 'galois', picture: P13, x: 'YQ996CO28254695', title: 'Backend Developer / EVM & MEV Researcher' },
//   { name: 'Frank', picture: P14, x: 'AlongHudson', title: 'Developer advocate @Chainlink' },
// ];

const DATAS = [
  {
    username: 'King',
    email: 'lispking@qq.com',
    x: 'lispking',
    github: 'https://github.com/lispking',
    contact: 'lispking',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1NEXaoiavtakfnFQuMvlda1kwAf-GKKHG',
    picture: P1,
    identity: 'Contract Engineer;Backend Engineer;Fullstack Engineer',
  },
  {
    username: '微扰 \ Qinghao',
    twitter: 'x.com/weriaolilun',
    x: 'weriaolilun',
    github: 'github.com/wfnuser',
    contact: 'wechat: wfnusee',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1YBbRQANN6koCg8vjmKr7ky7C56tzK0t2',
    picture: P1,
    identity: 'Fullstack Engineer',
  },
  {
    username: '向暖',
    twitter: '@coco69564520',
    x: 'coco69564520',
    github: 'https://github.com/xiangnuans',
    contact: 'guo1368574',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1yRXzq_eVDhs_nIXcjsrvBnCtpFVObFHy',
    picture: P1,
    identity: 'Fullstack Engineer',

  },
  {
    username: 'LeeMaimai',
    twitter: 'https://x.com/LeeMmai',
    x: 'LeeMmai',
    github: 'https://github.com/LeeMaimai',
    contact: 'LizMai123',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=19S-THuCeWxV3Lt8M3HilR6iFcrbD7_5F',
    picture: P1,
    identity: 'Marketing',

  },
  {
    username: 'Jintol',
    twitter: '@JintolOfficial',
    x: 'JintolOfficial',
    github: 'https://github.com/JintolChan',
    contact: 'Telegram：JintolOfficial',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1goRfDDRGdJ9mBpCPXDda5NtYyyEFuuRp',
    picture: P1,
    identity: 'Fullstack Engineer',
  },
  {
    username: '小白',
    twitter: '0x_cat_Student',
    x: '0x_cat_Student',
    github: '0x-IHRR',
    contact: 'Ox_IHRR',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=12Tf8JOlkcErQFV9NXpnZRAQQkaUCXb9f',
    picture: P1,
    identity: 'Product Manager;Designer',
  },
  {
    username: '许嘉媛',
    twitter: '许嘉媛',
    x: '许嘉媛',
    github: 'sherryxie995',
    contact: 'xy_939422751',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1q6vH74y7NvPjgob-nfHY0SKUN8jgrJuN',
    picture: P1,
    identity: 'Backend Engineer',
  },
  {
    username: 'Nelson',
    twitter: '@VCNelson_Z',
    x: 'VCNelson_Z',
    github: 'NA',
    contact: 'wechat：nhz_Nelson',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1LcBeebU8Uq4sDXxn1XErcRGRY9pkOxxl',
    picture: P1,
    identity: 'Product Manager;Community Operation;Marketing',
  },
  {
    username: '每每',
    twitter: 'everyevery91608',
    x: 'everyevery91608',
    github: 'https://github.com/everyeveryV',
    contact: 'zhiyuxi666',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=14JMCgxx9-a-D8tjPGXkMgUAbLoL5Au9s',
    picture: P1,
    identity: 'Community Operation;Writer',
  },
  {
    username: '大大黄',
    twitter: '@Alger779503577',
    x: 'Alger779503577',
    github: 'https://github.com/dajiangjunok',
    contact: '微信：_KFC-v50-',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1HM91FKNULuDau41xP8BBVZXbZdCxhJ5r',
    picture: P1,
    identity: 'Contract Engineer;Frontend Engineer',
  },
  {
    username: 'alvinwang',
    twitter: 'AlvinWang9521',
    x: 'AlvinWang9521',
    github: 'https://github.com/Nakiswen',
    contact: '18627687129',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=13i3MVEkaopG5ZYw6SmSQS-_GEPQS-F_B',
    picture: P1,
    identity: 'Frontend Engineer;Fullstack Engineer',
  },
  {
    username: 'Blake',
    twitter: 'Blakeesss',
    x: 'Blakeesss',
    github: 'https://github.com/blakeees',
    contact: 'blakees',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=19bdHtTk2zDAWJDNNE-Pe5h1mPJ8qr9oP',
    picture: P1,
    identity: 'Writer',
  },
  {
    username: 'veithly',
    twitter: 'RickyEACC',
    x: 'RickyEACC',
    github: 'veithly',
    contact: 'wechat: RICKY-SHA0',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1sHjhMx60O6urpJKgHfNYK6CofArgR4Mq',
    picture: P1,
    identity: 'Fullstack Engineer;Writer',
  },
  {
    username: '向暖',
    twitter: '@coco69564520',
    x: 'coco69564520',
    github: 'https://github.com/xiangnuans',
    contact: 'guo1368574',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=13DeQtuJaG0zwfpOLfRRYCBMq3uqXKm3U',
    picture: P1,
    identity: 'Fullstack Engineer',
  },
  {
    username: 'yaco',
    twitter: '0xyaco',
    x: '0xyaco',
    github: 'OS-Lihua',
    contact: 'YaCoTg',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=18d7B882gQxR6tBXdKmMnBdJE6Bpb7IDH',
    picture: P1,
    identity: 'Contract Engineer;Product Manager;Community Operation;Writer',
  },
  {
    username: 'Young',
    twitter: 'https://x.com/young_x_',
    x: 'young_x_',
    github: 'https://github.com/liyincode',
    contact: '微信：young-wx-',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=18EqYfzQPisL2KVAmHv9n7n4QtBf04xHK',
    picture: P1,
    identity: 'Frontend Engineer;Fullstack Engineer',
  },
  {
    username: 'Majoson',
    twitter: 'YoukinChen',
    x: 'YoukinChen',
    github: 'majoson-chen',
    contact: 'majoson168（wechat）',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=14ZZYLDY1D01K7pxMIaJ24KORSMad5INq',
    picture: P1,
    identity: 'Contract Engineer;Backend Engineer;Frontend Engineer;Fullstack Engineer;Product Manager;Community Operation;Writer',
  },
  {
    username: 'YaCo',
    twitter: 'https://x.com/0xYaCo',
    x: '0xYaCo',
    github: 'https://github.com/OS-Lihua',
    contact: 'https://t.me/yacoyaco',
    avatar: 'https://drive.google.com/u/0/open?usp=forms_web&id=1-oTkDN3goWVJWJhGRTjbROqPzQfXO5DF',
    picture: P1,
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

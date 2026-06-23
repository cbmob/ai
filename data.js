'use strict';

const DEFAULT_TAGS = [
  { key:'chill', label:'🎧 Chill' },
  { key:'classic', label:'👑 Classic' },
  { key:'tension', label:'🔥 Tension' },
  { key:'lyric', label:'📝 Lyric' },
  { key:'beat', label:'🥁 Beat' },
  { key:'dance', label:'🕺 Dance' },
  { key:'emotional', label:'💙 Emotional' },
  { key:'original', label:'🎵 Original' },
  { key:'the_hiphop', label:'🏆 THE HIPHOP' },
  { key:'message', label:'📢 Message' }
];

const DEFAULT_SONGS = [
  {
    id:'song_001',
    title:'My Life',
    artist:'ZORN',
    url:'https://youtu.be/SfEd0PA_rYI?si=vtmt3BGP6LTSXz8-',
    comment:'洗濯物干すのもHIPHOPというワードはダンサーでも知らない人はいないレベルです。',
    tags:['lyric','emotional','the_hiphop','message']
  },
  {
    id:'song_002',
    title:'好きなこと',
    artist:'',
    url:'https://youtu.be/tDri5QEt4bM?si=7nT4mrkTPs4W3e0Q',
    comment:'ワンダでもよくかけています。',
    tags:['chill','lyric','emotional']
  },
  {
    id:'song_003',
    title:'奇跡',
    artist:'',
    url:'https://youtu.be/bFUdubnjm4k?si=trOVq8pzxpm_Q3TM',
    comment:'アナーキーさんの曲でトップクラスに好きな曲です。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_004',
    title:'クズ',
    artist:'',
    url:'https://youtu.be/8OU9dbFjsT0?si=cWli6RlO6LvSjxaF',
    comment:'ガドロさんが人気になったキッカケの曲です。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_005',
    title:'Pellicule',
    artist:'',
    url:'https://youtu.be/ueq2QFIIpu0?si=brem1gCyUbeBxwaH',
    comment:'ポエトリーを流行らせたレジェンドです。',
    tags:['classic','lyric']
  },
  {
    id:'song_006',
    title:'雨降りの月曜',
    artist:'',
    url:'https://youtu.be/yEpKC0wXy4M?si=TYo5YX3m4lb8-k50',
    comment:'トラックもバースも凄く良いです。',
    tags:['chill','beat','dance','emotional']
  },
  {
    id:'song_007',
    title:'27才のリアル',
    artist:'',
    url:'https://youtu.be/tmJBGEFXOvU?si=GpaSJ7FqqBgbssWv',
    comment:'狐火さんは個人的凄く聴いていた時期がありました。ポエトリー好きな人は好きだと思います。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_008',
    title:'Just Right',
    artist:'',
    url:'https://youtu.be/MvC6gZJ3rTM?si=F7a821R-f3GJzD6R',
    comment:'最近出た曲です。凄く好きです。',
    tags:['emotional','beat']
  },
  {
    id:'song_009',
    title:'地元LOVE',
    artist:'',
    url:'https://youtu.be/H29mpVrtbCA?si=dTWPP6ziG-quopXU',
    comment:'組み合わせ最強の2人です。出た時衝撃でした。',
    tags:['tension','dance']
  },
  {
    id:'song_010',
    title:'少ない仲間',
    artist:'',
    url:'https://youtu.be/0EcjmbZYE1Q?si=g8lnyBdRqBIL1WbT',
    comment:'最近出た曲ですが、耳に残る良い曲です。',
    tags:['lyric','emotional']
  },
  {
    id:'song_011',
    title:'Life Style',
    artist:'',
    url:'https://youtu.be/yirVxFBnp2o?si=RqioOLChECeHlT5q',
    comment:'BADHOPの入口として聴いてみると凄く良いです。',
    tags:['tension','dance','emotional']
  },
  {
    id:'song_012',
    title:'希望の炎',
    artist:'',
    url:'https://youtu.be/7-HEkkTSI6k?si=oNvksJgKrccNDBpC',
    comment:'ダンスを始めてすぐくらいに出たアルバムに入っていて、MDで毎日聴いていました。',
    tags:['chill','beat','lyric','emotional']
  },
  {
    id:'song_013',
    title:'未来予想図',
    artist:'R指定',
    url:'https://youtu.be/PP-txvj87sQ?si=i5vfDb0kMTpTGhR3',
    comment:'R指定が歌っている曲で僕は1番好きです。',
    tags:['lyric','emotional']
  },
  {
    id:'song_014',
    title:'人間失格',
    artist:'',
    url:'https://youtu.be/ztiJi2D-TeU?si=wHUOSxpkLszYSDbq',
    comment:'若くしてリアルを歌っている曲です。ゴメスは刺さる人には刺さると思います。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_015',
    title:'LIFE',
    artist:'',
    url:'https://youtu.be/xMpB6NosM3Y?si=rlJGGRrNYF2ouk7y',
    comment:'ポエトリーの中でも詩人として凄い才能だと思います。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_016',
    title:'心配すんな',
    artist:'般若',
    url:'https://youtu.be/INpauGq0MN0?si=2-zE1I0IKD1Ors8B',
    comment:'名曲多いですが、般若さんの曲で1番人気だと思います。',
    tags:['classic','lyric','emotional','the_hiphop','message']
  },
  {
    id:'song_017',
    title:'空を取り戻した日',
    artist:'',
    url:'https://youtu.be/wCIvYlp3ax0?si=jwFJCqVaisyF4By1',
    comment:'先生のお気に入りの一つです。トラックが良すぎます。一時期ずーっと聴いてました。',
    tags:['classic','chill','lyric','beat','emotional','message']
  },
  {
    id:'song_018',
    title:'ゆれる',
    artist:'',
    url:'https://youtu.be/nE1nzTE5ESA?si=TcCKjsSEF_5kv6hr',
    comment:'HIPHOPでChillするならこの曲です。いつかクラシックになると思います。',
    tags:['chill','lyric','beat','dance','emotional']
  },
  {
    id:'song_019',
    title:'ブッダの休日',
    artist:'BUDDHA BRAND',
    url:'https://youtu.be/6VIhuTECXb4?si=5ygQY-6qC23EBGD3',
    comment:'ブッダブランドは必ず覚えて欲しいです。難しい曲が多いですが、この曲と人間発電所はダンスでも使われます。',
    tags:['classic','chill','dance','the_hiphop']
  },
  {
    id:'song_020',
    title:'音色',
    artist:'KREVA',
    url:'https://youtu.be/WRFwZY8Pm6w?si=sti2VRUge6nteFPj',
    comment:'クレバの代表曲です。先生もたくさん聞いた曲です。',
    tags:['lyric','beat','emotional']
  },
  {
    id:'song_021',
    title:'スタート',
    artist:'KREVA',
    url:'https://youtu.be/jIjDxgXcKMI?si=i_BNdvkzgUezoYgq',
    comment:'ライミングセンス抜群のクレバだからこそ作れる曲です。',
    tags:['lyric','emotional']
  },
  {
    id:'song_022',
    title:'CHILDREN',
    artist:'MU-TON',
    url:'https://youtu.be/_4VZFWCcb3Q?si=pAo4xpzc90qIskPR',
    comment:'バトルMCというイメージの強いムートンですが、素晴らしい曲がたくさんあります。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_023',
    title:'トモダチ',
    artist:'ケツメイシ',
    url:'https://youtu.be/BqN0DbhqAYM?si=S3nLzPugpglO5oZh',
    comment:'歳を重ねるごとに響きが強くなる一曲です。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_024',
    title:'椿',
    artist:'TORAUMA',
    url:'https://youtu.be/1kt_lBDZgWo?si=N9QbqXP07qPrEylV',
    comment:'一時期レッスンで使ってました。背中を押される曲の一つです。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_025',
    title:'十八歳の地図',
    artist:'Red Eye',
    url:'https://youtu.be/-_ICs8xX2-U?si=iH13K-r_-iP3Hh3V',
    comment:'HIPHOP、レゲェどちらも力を入れていてMCバトルも出来ます。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_026',
    title:'カフェイン中毒',
    artist:'kiki vivi lily',
    url:'https://youtu.be/5_c1GQsosvs?si=5Lfj5FfWGiUjD2nr',
    comment:'耳に残る良い曲です。若手ダンサーに人気のあるアーティストなのでチェックしておいてください。',
    tags:['chill','beat']
  },
  {
    id:'song_027',
    title:'Patience',
    artist:'Dragon Ash',
    url:'https://youtu.be/sV47CZZU4dQ?si=LG4EO2FwIfkfnNKm',
    comment:'学生の頃から兄の影響でドラゴンアッシュが大好きで、その中でもかなり上位に入る曲です。',
    tags:['chill','beat']
  },
  {
    id:'song_028',
    title:'情熱',
    artist:'UA',
    url:'https://youtu.be/R53CceEY77Y?si=UbpVj1OwuPvJeE1m',
    comment:'現代でもかなり聴く機会の多い曲です。',
    tags:['classic','chill','dance','beat']
  },
  {
    id:'song_029',
    title:'Only Holy Story',
    artist:'Steady&Co.',
    url:'https://youtu.be/0N6LMHaiY5U?si=aa5cOpK_Y9DZVWsJ',
    comment:'冬に聴きたくなる名曲です。先生が中学生くらいの時の曲だと思います。',
    tags:['chill','emotional']
  },
  {
    id:'song_030',
    title:'今日という日',
    artist:'Watson T-Pablow',
    url:'https://youtu.be/EOH7Oz7bSas?si=u-UdCnTTdiX7Qat5',
    comment:'最近ずっと人気が上がっているWatsonとBADHOPのT-Pablowの曲です。',
    tags:['lyric','emotional']
  },
  {
    id:'song_031',
    title:'泣いて',
    artist:'Ashley 柊人',
    url:'https://youtu.be/I2mSjVzPYE4?si=-_9m-UnjW6jBdqws',
    comment:'カルマの時とは違ったアシュリーの一曲。とても良い曲です。',
    tags:['chill','emotional']
  },
  {
    id:'song_032',
    title:'徳之島',
    artist:'輪入道',
    url:'https://youtu.be/mh9IMIQmygE?si=zptGKRbCdv1uyLI4',
    comment:'輪入道さんの代表曲です。とても雰囲気がよく輪入道さんにしか歌えない音楽です。',
    tags:['chill','lyric','emotional']
  },
  {
    id:'song_033',
    title:'いい時間',
    artist:'EVISBEATS',
    url:'https://youtu.be/06yIzV8HToM?si=2l1b7SuXvG5OBof6',
    comment:'エビスビーツはChill HIPHOPの名曲だらけなのでたくさん聴いてください。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_034',
    title:'LIFELINE',
    artist:'KICK THE CAN CREW',
    url:'https://youtu.be/ha15hY_pCkk?si=xN6ix637mBlicSD2',
    comment:'キックザカンクルーはクレバ、リトル、エムシーユーの3名です。',
    tags:['lyric','beat','emotional']
  },
  {
    id:'song_035',
    title:'今夜はブギーバック',
    artist:'小沢健二 featuring スチャダラパー',
    url:'https://youtu.be/6lKTQbrM9RI?si=kO2ELGt_AUuDZbIj',
    comment:'ノリも良く耳に残る曲です。',
    tags:['classic','chill','dance','the_hiphop']
  },
  {
    id:'song_036',
    title:'奮エテ眠レ',
    artist:'ZONE THE DARKNESS',
    url:'https://youtu.be/EggplZC8bM0?si=EdPMDLi8N1VXg5Ye',
    comment:'ZORNさんの昔の名義の曲です。「賭けるものが無いんです。人生でいいですか？」というパンチラインは今でも語り継がれています。',
    tags:['chill','lyric','message']
  },
  {
    id:'song_037',
    title:'MY TOWN',
    artist:'J-REXXX 紅桜',
    url:'https://youtu.be/jEXa6Y-RK5A?si=Hv-37_XPMthCh9Sw',
    comment:'先生も大好きな曲です。',
    tags:['chill','lyric','tension','message']
  },
  {
    id:'song_038',
    title:'世界を嫌った',
    artist:'Liza',
    url:'https://youtu.be/6BVlWRQ3nQA?si=jk8j7Q4pXWrWUKpt',
    comment:'ワンダでも何度もかけています。リーザの初期の曲です。',
    tags:['chill','beat','lyric','emotional','message']
  },
  {
    id:'song_039',
    title:'LOST DOPE',
    artist:'B.I.G. Joe',
    url:'https://www.youtube.com/watch?v=dzcMPegziyo&list=RDdzcMPegziyo&start_radio=1',
    comment:'Chillにもガッツリ練習にも使える最高の一曲です。',
    tags:['chill','beat','lyric']
  },
  {
    id:'song_040',
    title:'ケモノミチ',
    artist:'NITRO MICROPHONE UNDERGROUND',
    url:'https://www.youtube.com/watch?v=1PjD6EFL3Uk&list=RD1PjD6EFL3Uk&start_radio=1',
    comment:'良い意味でニトロらしくない曲だと思っています。ワンダでもたまに流します。',
    tags:['classic','dance','beat','tension','the_hiphop']
  },
  {
    id:'song_041',
    title:'WHOOO',
    artist:'Ozrosaurus',
    url:'https://www.youtube.com/watch?v=E2WkIZScus0&list=RDE2WkIZScus0&start_radio=1',
    comment:'オジロザウルスの代表曲で間違いなくクラシックです。バトルでもたまにかかります。',
    tags:['classic','dance','lyric','tension','the_hiphop']
  },
  {
    id:'song_042',
    title:'AREA AREA',
    artist:'Ozrosaurus',
    url:'https://www.youtube.com/watch?v=GhUxiBp4aYo&list=RDGhUxiBp4aYo&start_radio=1',
    comment:'こちらもオジロの代表曲でありクラシックです。',
    tags:['classic','dance','lyric','tension','the_hiphop']
  },
  {
    id:'song_043',
    title:'蜂と蝶',
    artist:'Soul Scream',
    url:'https://www.youtube.com/watch?v=DCqT4hQiSF4&list=RDDCqT4hQiSF4&start_radio=1',
    comment:'クラシックの中のクラシックです。',
    tags:['classic','dance','lyric','beat','the_hiphop']
  },
  {
    id:'song_044',
    title:'屍を越えて',
    artist:'Gagle',
    url:'https://www.youtube.com/watch?v=pfd7kOmT-kI&list=RDpfd7kOmT-kI&start_radio=1',
    comment:'ガグルにしか出せない雰囲気が全面に出た一曲だと思います。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_045',
    title:'雪ノ革命',
    artist:'Gagle',
    url:'https://www.youtube.com/watch?v=fDLEBI3MYzk&list=RDfDLEBI3MYzk&start_radio=1',
    comment:'僕はガグルの曲で一番好きです。',
    tags:['chill','dance','lyric']
  },
  {
    id:'song_046',
    title:'何回も',
    artist:'YZERR',
    url:'https://www.youtube.com/watch?v=0bG6B5gHQf8&list=PLeq_xZI0luKx7HcOLqpRpVckAQJ7LkBve&index=4',
    comment:'良い曲たくさんあります。',
    tags:['chill','tension']
  },
  {
    id:'song_047',
    title:'Let It Be',
    artist:'Daichi Yamamoto',
    url:'https://www.youtube.com/watch?v=DhPk4YCFoNU&list=RDDhPk4YCFoNU&start_radio=1',
    comment:'ワンダでもよくかけます。音楽性もリリックも素晴らしいです。',
    tags:['chill','dance','lyric']
  },
  {
    id:'song_048',
    title:'Poetry',
    artist:'GOMESS',
    url:'https://www.youtube.com/watch?v=jglQsQyh8y0&list=RDjglQsQyh8y0&start_radio=1',
    comment:'ポエトリーが好きなら刺さる曲だと思います。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_049',
    title:'Walk This Way',
    artist:'ZORN feat.AKLO',
    url:'https://www.youtube.com/watch?v=tOS-Yx4Qb_M&list=RDtOS-Yx4Qb_M&start_radio=1',
    comment:'ZORNさんがAKLOさんとリリースした最高の一曲です。',
    tags:['dance','tension','beat']
  },
  {
    id:'song_050',
    title:'大怪我',
    artist:'大神',
    url:'https://youtu.be/OCoV25z-aBA?si=QHN_Jt8EW8haG_Yw',
    comment:'大神はブッダブランドとシャカゾンビというレジェンド2組によるユニットです。',
    tags:['classic','dance','tension','the_hiphop']
  },
  {
    id:'song_051',
    title:'虹',
    artist:'シャカゾンビ',
    url:'https://youtu.be/PJgQ5VR69Ec?si=vQ1ryQWX9mx5MlC0',
    comment:'こちらもとても良い曲です。',
    tags:['beat','chill']
  },
  {
    id:'song_052',
    title:'アンバランス',
    artist:'KICK THE CAN CREW',
    url:'https://youtu.be/eG5O8VlzPso?si=K55el8rQiel3bwpv',
    comment:'僕が中学生の頃聴いていた曲です。',
    tags:['beat','tension']
  },
  {
    id:'song_053',
    title:'ONE',
    artist:'RIP SLYME',
    url:'https://youtu.be/6LbPC4ZWFok?si=QS05U1yE5gtxh20x',
    comment:'こちらも中学生の頃聴いていました。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_054',
    title:'静かな日々の階段を',
    artist:'Dragon Ash',
    url:'https://youtu.be/kiD4GDWpoRY?si=ONEhDrXsCPx_FO9X',
    comment:'Dragon Ashを語る上で絶対的に外せない1曲です。',
    tags:['classic','chill','lyric','beat']
  },
  {
    id:'song_055',
    title:'Winter Song',
    artist:'KEN THE 390',
    url:'https://youtu.be/rEqN_p4oP-E?si=poLS17bYCNENB4Cv',
    comment:'MCバトルで初期から活躍していたKEN THE 390さんの1曲です。',
    tags:['chill','emotional']
  },
  {
    id:'song_056',
    title:'KARMA',
    artist:'Ashley ft Jin Dogg',
    url:'https://youtu.be/m-Y-Ua86qkg?si=imXF5ePwL1p5SCLU',
    comment:'Jin Doggのラップがめちゃくちゃカッコいいので聴いてください。',
    tags:['dance','beat','tension']
  },
  {
    id:'song_057',
    title:'貧乏なんて気にしない',
    artist:'KOHH',
    url:'https://youtu.be/1Iw_m-CXywo?si=K7V-BU3mUALcb6r2',
    comment:'僕はこの曲をよく聴いています。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_058',
    title:'Wake Up',
    artist:'WILYWNKA',
    url:'https://youtu.be/rDeCOFsZFsA?si=Irz_7PETwJFtDeiu',
    comment:'今では日本のトップチャートにも名前が載るラッパーです。',
    tags:['lyric','tension']
  },
  {
    id:'song_059',
    title:'俺の勝手',
    artist:'呂布カルマ',
    url:'https://youtu.be/onTKv0A44PA?si=aEhFW5pxTnAJoAnV',
    comment:'良い曲もたくさんあります。',
    tags:['lyric','beat']
  },
  {
    id:'song_060',
    title:'シグナル',
    artist:'Libro',
    url:'https://youtu.be/R5396gKwIPg?si=2MO6Oz4X_gylAfgs',
    comment:'リブロさんはとにかくトラックが良い曲が多いです。',
    tags:['chill','beat']
  },
  {
    id:'song_061',
    title:'The Choice Is Yours',
    artist:'RHYMESTER',
    url:'https://youtu.be/OmjJWUM8VcA?si=BJ_u5q1m9ferM1yP',
    comment:'ライムスターは踊れる曲がたくさんあります。',
    tags:['classic','dance','beat','the_hiphop']
  },
  {
    id:'song_062',
    title:'CONCRETE JUNGLE',
    artist:'MURO',
    url:'https://youtu.be/y8IYi2ziXXI?si=mfLMFr4dWuVZTfEO',
    comment:'MUROさんの名曲の一つです。',
    tags:['chill','beat']
  },
  {
    id:'song_063',
    title:'ひとりじゃないのよ',
    artist:'KREVA',
    url:'https://youtu.be/ASyGLelLMLs?si=dqI3bQ199YkVUPJ3',
    comment:'リリックもトラックも凄く良いです。',
    tags:['chill','lyric','beat']
  },
  {
    id:'song_064',
    title:'最ッ低のMC',
    artist:'般若',
    url:'https://youtu.be/oX-16bh9nIc?si=-dbWeUHYZ6iWNhAw',
    comment:'レジェンドの名を連ねたパンチラインが有名です。',
    tags:['classic','lyric','beat','dance','tension']
  },
  {
    id:'song_065',
    title:'NITRO MICROPHONE UNDERGROUND',
    artist:'NITRO MICROPHONE UNDERGROUND',
    url:'https://youtu.be/CLxWD210f5Q?si=7J-OcUP6rEPWp2xK',
    comment:'本当にラップの上手い人が集まったグループによる代表曲です。',
    tags:['classic','dance','beat','tension','the_hiphop']
  },
  {
    id:'song_066',
    title:'紙飛行機',
    artist:'Awich',
    url:'https://youtu.be/WDzPk7bczlI?si=mJR5ev1XIgv2z7ph',
    comment:'表現力や言葉の強さが素晴らしいです。',
    tags:['lyric','dance','emotional','message']
  },
  {
    id:'song_067',
    title:'BlAqDeViL',
    artist:'SILENT KILLA JOINT',
    url:'https://youtu.be/CM2doEKEjzM?si=RsXChGM3_q821S-Y',
    comment:'凄くカッコいいラッパーです。',
    tags:['beat','tension']
  },
  {
    id:'song_068',
    title:'ザ・グレート・アマチュアリズム',
    artist:'RHYMESTER',
    url:'https://youtu.be/HTWNPeuZL8g?si=MdRdU3mP0cckqtMp',
    comment:'BREAKIN\'のバトルでよく使われる曲です。',
    tags:['classic','lyric','dance','tension']
  },
  {
    id:'song_069',
    title:'忘却',
    artist:'宇多田ヒカル KOHH',
    url:'https://youtu.be/JxHubxeh8J4?si=IEWycYyOR9RNeBpk',
    comment:'世界観やトラックがとても良いです。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_070',
    title:'CoCo ga OKINAWA',
    artist:'Rude-α feat.R\'kuma',
    url:'https://youtu.be/6VIPLMeSFVM?si=eCvwo68eqZkjcboa',
    comment:'地元をレペゼンしたとても良い曲です。',
    tags:['chill','dance','emotional']
  },
  {
    id:'song_071',
    title:'Crayon',
    artist:'ZOT on the WAVE/Fuji Taito',
    url:'https://youtu.be/m0x2jkAT6FE?si=2Gn15AvGgCIPApSy',
    comment:'一度は耳にしたことがあると思います。',
    tags:['dance','beat','tension']
  },
  {
    id:'song_072',
    title:'Letter',
    artist:'ZORN',
    url:'https://youtu.be/cq8a0_LedZ8?si=73r3xZiC0Wyo0KS0',
    comment:'トラックもリリックもラップも完璧な一曲です。',
    tags:['chill','lyric','beat','emotional','message']
  },
  {
    id:'song_073',
    title:'百合の咲く場所で',
    artist:'Dragon Ash',
    url:'https://youtu.be/NzmuXSEwKWs?si=v2mFyqr68FnolfU1',
    comment:'凄くテンションの上がる曲です。',
    tags:['beat','tension']
  },
  {
    id:'song_074',
    title:'let go',
    artist:'m-flo YOSHIKA',
    url:'https://youtu.be/HOsiSE_JTOM?si=5Gu41Cjf7O6uIzdR',
    comment:'クラブでもたくさんかかっていました。',
    tags:['chill','emotional']
  },
  {
    id:'song_075',
    title:'NO MORE',
    artist:'JASMINE',
    url:'https://youtu.be/buwIKCfCBr4?si=UtrLIYGyJUNW2tYw',
    comment:'クラブでかかったりショーケースでも使われていました。',
    tags:['chill']
  },
  {
    id:'song_076',
    title:'足跡',
    artist:'19',
    url:'https://youtu.be/U3tRjhI_46I?si=4wMSqnn0y7MY4ovH',
    comment:'凄く良い曲です。',
    tags:['lyric','emotional']
  },
  {
    id:'song_077',
    title:'光',
    artist:'宇多田ヒカル',
    url:'https://youtu.be/AlMdDpUWFFI?si=gHHoT9YcICsI3Hp1',
    comment:'HIPHOPヘッズにも人気のアーティストです。',
    tags:['beat','tension']
  },
  {
    id:'song_078',
    title:'大切',
    artist:'FUNKY MONKEY BABYS',
    url:'https://youtu.be/ww3dlgnT45Y?si=J0lwQn-BIUJRvf5V',
    comment:'良い曲たくさんあるアーティストです。',
    tags:['lyric','emotional']
  },
  {
    id:'song_079',
    title:'雨上がり',
    artist:'VERRY SMoL',
    url:'https://youtu.be/JZZDRgvmRII?si=lNMzXVVhr_pe1Lfc',
    comment:'ラップスタアで一躍有名になったラッパーです。',
    tags:['chill','emotional','tension']
  },
  {
    id:'song_080',
    title:'Magic Voice',
    artist:'Alif Wolf',
    url:'https://youtu.be/bsPed5vxcCU?si=h4ThlphGB1Pp44vz',
    comment:'ひと騒動あった後、音源のクオリティが高く再評価されています。',
    tags:['chill','beat']
  },
  {
    id:'song_081',
    title:'Bane Bane',
    artist:'KTちゃん ft. DOTAMA',
    url:'https://youtu.be/Wxfmduk0SII?si=923Q4kkHbdQHiScZ',
    comment:'MC BATTLEを盛り上げたラッパーです。',
    tags:['dance','tension']
  },
  {
    id:'song_082',
    title:'楽園ベイベー',
    artist:'RIP SLYME',
    url:'https://youtu.be/ZCTdhSLsREE?si=hWYCH6Fy5yOe7bRU',
    comment:'古い曲ですが、今でもたまにかかります。',
    tags:['classic','dance','tension','the_hiphop']
  },
  {
    id:'song_083',
    title:'NINOKUNI',
    artist:'OZworld',
    url:'https://youtu.be/BP2WeQyETiA?si=_ofsnoFFttB3WVw_',
    comment:'雰囲気がとても良いです。',
    tags:['chill','beat','emotional']
  },
  {
    id:'song_084',
    title:'伝説',
    artist:'GOMESS ft daoko',
    url:'https://youtu.be/Ey6BLXv4wd4?si=yfXZlNFQ5STu7lBP',
    comment:'好みによると思いますが、とても惹き込まれます。',
    tags:['lyric','emotional','message']
  },
  {
    id:'song_085',
    title:'越冬',
    artist:'ICE BAHN',
    url:'https://youtu.be/Hi_7ix67GFI?si=A9XwFH3PyRCd3FtQ',
    comment:'アイスバーンの代表曲です。',
    tags:['classic','lyric','dance','tension','the_hiphop','message']
  },
  {
    id:'song_086',
    title:'911',
    artist:'キングギドラ',
    url:'https://youtu.be/S96_XCmKINE?si=TkUFiIEzZPn3nUX3',
    comment:'キングギドラはメッセージ性の強い曲が多いです。',
    tags:['classic','lyric','the_hiphop','message']
  },
  {
    id:'song_087',
    title:'Grateful Days',
    artist:'Dragon Ash ft. Zeebra',
    url:'https://youtu.be/zSYP29oFBk0?si=PJtL5iiTO2bvhtWx',
    comment:'俺は東京生まれHIPHOP育ちというパンチラインはとても有名です。',
    tags:['classic','lyric','beat','dance','emotional','the_hiphop']
  },
  {
    id:'song_088',
    title:'クリスマスイブRap',
    artist:'KICK THE CAN CREW',
    url:'https://youtu.be/L0kztbkg1DQ?si=Wl8KlH5W9wZckmPb',
    comment:'クリスマスに聴きたくなる一曲です。',
    tags:['lyric','emotional','tension']
  },
  {
    id:'song_089',
    title:'Hatsukoino Whats going on',
    artist:'Little & トータス松本',
    url:'https://youtu.be/dDL9sYH0MMI?si=gAA9T6Y17Ju5xq-F',
    comment:'異色の2人によるコラボ曲です。',
    tags:['chill','emotional','tension']
  },
  {
    id:'song_090',
    title:'Street Dreams',
    artist:'Zeebra',
    url:'https://youtu.be/bYd6E8D4XB4?si=vbLFyk_R8suJkqGq',
    comment:'クラシックの一曲と言っても良いと思います。',
    tags:['classic','lyric','beat','dance','tension','the_hiphop']
  },
  {
    id:'song_091',
    title:'I LOVE HIPHOP',
    artist:'Dragon Ash',
    url:'https://youtu.be/ImrbB32fecY?si=ucqzCoTj42zrEz3h',
    comment:'HIPHOP時代にリリースされた一曲です。',
    tags:['classic','dance','tension','the_hiphop']
  },
  {
    id:'song_092',
    title:'そなたの心の隙間',
    artist:'日高大地',
    url:'https://youtu.be/2hYLxY2xOBA?si=2qq4zrktSXua6kbT',
    comment:'ゆったりした良い曲です。',
    tags:['chill','lyric','emotional','message']
  },
  {
    id:'song_093',
    title:'君のまま',
    artist:'百足 & 韻マン',
    url:'https://youtu.be/u7rBhwaMGwM?si=Z1-Ii5Pixe-9I52x',
    comment:'MCバトルから有名になった2人による曲です。',
    tags:['tension','emotional']
  },
  {
    id:'song_094',
    title:'花と雨',
    artist:'SEEDA',
    url:'https://youtu.be/J2cJdA-XydU?si=3mX88IUGXWNdof2L',
    comment:'ワンダでもたまにかけるとても良い曲です。',
    tags:['chill','lyric']
  },
  {
    id:'song_095',
    title:'これからだ',
    artist:'SIMON JAP',
    url:'https://youtu.be/jY2rfvfAMxY?si=FrhJLwO4JeLyAPLL',
    comment:'真っ直ぐなlyricを書くアングラのラッパーです。',
    tags:['lyric','tension','message']
  },
  {
    id:'song_096',
    title:'マジでハイ',
    artist:'梅田サイファー',
    url:'https://youtu.be/vgwhZyKQUU8?si=1L_DNSYIQc85TnG8',
    comment:'テンションの上がるビートも有名な一曲です。',
    tags:['dance','beat','tension']
  },
  {
    id:'song_097',
    title:'新宿ストリート・ドリーム',
    artist:'漢 a.k.a GAMI',
    url:'https://youtu.be/sVmJjDKFy_k?si=nEKMFt7ZgFycfzQa',
    comment:'JHIPHOPの一時代を作った1人です。',
    tags:['classic','lyric','message']
  },
  {
    id:'song_098',
    title:'My Verse',
    artist:'Charlu',
    url:'https://youtu.be/A_de-d18XF8?si=rtJa-uaU_maCtOik',
    comment:'シャルルさんはリアルで印象的なlyricが多いです。',
    tags:['lyric','emotional','tension','message']
  },
  {
    id:'song_099',
    title:'読みかけの本',
    artist:'MOB ARTIST',
    url:'https://youtu.be/N8k8tuCRBxc?si=7aFbAnaBp2JPmn_D',
    comment:'僕が作った曲です。たくさん聴いてください。',
    tags:['original']
  }
];
  {
    id:'song_100',
    title:'一陽来復',
    artist:'CHICO CARLITO ft CHOUJI 唾奇',
    url:'https://youtu.be/ix9YBgjXcn0?si=TTYzS-DQOSTLU_Z8',
    comment:'',
    tags:[]
  },
  {
    id:'song_101',
    title:'GILA GILA',
    artist:'Awich ft JP THE WAVY YZERR',
    url:'https://youtu.be/nJaFpoo9Fl0?si=wrlGro00SJnQ2dbL',
    comment:'',
    tags:[]
  },
  {
    id:'song_102',
    title:'同じ人間',
    artist:'TOKYO世界',
    url:'https://youtu.be/3l5BK5UHgMI?si=Mck-h1Xf8GjtTH29',
    comment:'',
    tags:[]
  },
  {
    id:'song_103',
    title:'Fate',
    artist:'Anarchy',
    url:'https://youtu.be/P4_HwzxnG0I?si=tHTmb8yZv6hE0-6H',
    comment:'',
    tags:[]
  },
  {
    id:'song_104',
    title:'Dandelion',
    artist:'RIP SLYME',
    url:'https://youtu.be/P4_HwzxnG0I?si=tHTmb8yZv6hE0-6H',
    comment:'',
    tags:[]
  },
  {
    id:'song_105',
    title:'イツナロウバ',
    artist:'KICK THE CAN CREW',
    url:'https://youtu.be/6pgm6OdUyAM?si=UZFHaGEGML_eCEh-',
    comment:'',
    tags:[]
  },
  {
    id:'song_106',
    title:'みどり',
    artist:'CHEHON',
    url:'https://youtu.be/Uadex_ZsNAc?si=YSkCVb_Yf-Ywt9wY',
    comment:'',
    tags:[]
  },
  {
    id:'song_107',
    title:'morrow',
    artist:'Dragon Ash',
    url:'https://youtu.be/FbMm_n2GYgM?si=iKJGN-CwMxbTxB-1',
    comment:'',
    tags:[]
  },
  {
    id:'song_108',
    title:'Mellow Akira',
    artist:'Lick-G',
    url:'https://youtu.be/qayqvSdmF30?si=JZPUEMjfbm5AcY4V',
    comment:'',
    tags:[]
  },
  {
    id:'song_109',
    title:'Empire Of The Sun',
    artist:'Zeebra',
    url:'https://youtu.be/6EWImmZfgtc?si=e6iTMs_PoShjX00I',
    comment:'',
    tags:[]
  },
  {
    id:'song_110',
    title:'LOSER',
    artist:'AKLO',
    url:'https://youtu.be/xNd7WA0yWRQ?si=s4mEXtBsM8NWlhgM',
    comment:'',
    tags:[]
  },
  {
    id:'song_111',
    title:'ALL GOOD',
    artist:'RYKEYDADDYDIRTY',
    url:'https://youtu.be/6r8I4IZAma0?si=BSvh8FajQVUgnfaG',
    comment:'',
    tags:[]
  },
  {
    id:'song_112',
    title:'Little Lonely',
    artist:'MuKuRo × Disry',
    url:'https://youtu.be/pcoKAgelaPU?si=X_n2UVVb1RRKluh3',
    comment:'',
    tags:[]
  },
  {
    id:'song_113',
    title:'BLAC',
    artist:'妖艶金魚',
    url:'https://youtu.be/UuHU7k4Q6S0?si=SQtvvDbn_jG2RkSy',
    comment:'',
    tags:[]
  },
  {
    id:'song_114',
    title:'BLACK remix',
    artist:'妖艶金魚 ft MuKuRo',
    url:'https://youtu.be/ul9PsCeWxds?si=Javw1ZyoY6xjb_KJ',
    comment:'',
    tags:[]
  },
  {
    id:'song_115',
    title:'Mountain Top',
    artist:'Novel Core',
    url:'https://youtu.be/vgGZlIU06tg?si=ydAn3cIvoS0CzM6L',
    comment:'',
    tags:[]
  },
  {
    id:'song_116',
    title:'Rep',
    artist:'ZORN ft MACCHO',
    url:'https://youtu.be/tjPQVvUHi3g?si=0gtiMVBv29nXSW_I',
    comment:'',
    tags:[]
  },
  {
    id:'song_117',
    title:'KATTARINA',
    artist:'LANA',
    url:'https://youtu.be/bH7oQC64x1U?si=gn155jRulj6T8ciq',
    comment:'',
    tags:[]
  },
  {
    id:'song_118',
    title:'POOL',
    artist:'おかもとえみ',
    url:'https://youtu.be/qjkRqVQnG7s?si=1bCeiT_qIqIQ7dBP',
    comment:'',
    tags:[]
  },
  {
    id:'song_119',
    title:'rhythm',
    artist:'iri',
    url:'https://youtu.be/R_yT9mpeY3w?si=Rn51QExlA8r0JmKi',
    comment:'',
    tags:[]
  },
  {
    id:'song_120',
    title:'BLACK BOX',
    artist:'Arche',
    url:'https://youtu.be/2Z47rxCnNw8?si=5-SEbC2epF9V3vIX',
    comment:'',
    tags:[]
  },
  {
    id:'song_121',
    title:'琥珀色の街、上海蟹の朝',
    artist:'くるり',
    url:'https://youtu.be/NyddMMiViZc?si=Bs7U0mjdqBA1Qc2U',
    comment:'',
    tags:[]
  },
  {
    id:'song_122',
    title:'スカートの砂',
    artist:'UA',
    url:'https://youtu.be/AEEMOaOZGlM?si=4rn_IwoD3QMmy7X8',
    comment:'',
    tags:[]
  }

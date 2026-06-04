// data.jsx — Fukuoka × Kyushu itinerary (bilingual EN / TH), self-drive.
// Trip: 4–14 Dec 2026 · 10 nights · WWN · World Wide Nick.
// Two entry kinds:
//   • feature → big hero image + caption + reference dock (sightseeing, dining)
//   • step    → compact logistics row with a line-icon (flights, car, transit, check-in)
// Each day carries its own dark `theme` and a `date`. Built to the Content Template.
const L = (en, th) => ({ en, th });

const TRIP = {
  title: L('Kyushu', 'คิวชู'),
  subtitle: L('Ten Nights Around the Southern Island', 'สิบคืนรอบเกาะใต้'),
  dates: L('4 — 14 Dec 2026', '4 — 14 Dec 2026'),
  meta: L('Early Winter · Onsen & Illuminations', 'ต้นฤดูหนาว · ออนเซนและไฟประดับ'),
  origin: L('A self-drive itinerary', 'แผนการเดินทางขับรถเอง'),
  coverId: 'cover-hero',
  days: [
    // ───────────────────────── DAY 1 · FUKUOKA ─────────────────────────
    {
      label: 'Day 01', labelTh: 'วันที่ 01', theme: 'kurogane',
      date: L('Friday · 4 Dec 2026', 'ศุกร์ · 4 Dec 2026'),
      title: L('Fukuoka', 'ฟุกุโอกะ'),
      subtitle: L('Arrival & the First Bowl', 'วันเดินทางถึง & ราเมงชามแรก'),
      note: L(
        'The overnight flight from Bangkok lands at dawn. Ease into Hakata on little sleep — a donut, a bowl of tonkotsu ramen, the winter lights at night, and motsunabe to close.',
        'เที่ยวบินกลางคืนจากกรุงเทพฯ ถึงตอนเช้า ค่อยๆ เริ่มวันแรกที่ฮากาตะแบบไม่รีบ — โดนัทร้านดัง ราเมงทงคตสึ ไฟประดับยามค่ำ และปิดท้ายด้วยโมทสึนาเบะ'
      ),
      coverId: 'day1-cover',
      activities: [
        { type: 'step', time: '01:00', meridiem: 'Pre-dawn', kind: 'Flight', icon: 'plane',
          title: L('Depart Bangkok (BKK)', 'ออกเดินทางจากกรุงเทพฯ (BKK)'),
          place: L('Suvarnabhumi · TG-648 to Fukuoka', 'สุวรรณภูมิ · TG-648 สู่ฟุกุโอกะ'),
          blurb: L('Thai Airways TG-648 lifts off at 01:00 — an overnight 5h 10m flight, landing Fukuoka 08:10.',
                   'การบินไทย TG-648 ออก 01:00 — บินกลางคืน 5 ชม. 10 น. ถึงฟุกุโอกะ 08:10'),
          refs: { reservation: { time: '01:00', code: 'TG-648', party: L('4 travellers · economy', '4 ท่าน · ชั้นประหยัด') }, notes: L('Be at Suvarnabhumi by ~22:30 the night before · check-in opens ~3h prior · 23 kg checked baggage each.', 'ไปถึงสุวรรณภูมิ ~22:30 ของคืนก่อน · เคาน์เตอร์เปิด ~3 ชม.ก่อนบิน · กระเป๋าโหลดคนละ 23 กก.') } },

        { type: 'step', time: '08:10', meridiem: 'Morning', kind: 'Arrival', icon: 'plane',
          title: L('Land at Fukuoka (FUK)', 'ถึงสนามบินฟุกุโอกะ (FUK)'),
          place: L('Thai Airways TG-648 · from Bangkok', 'การบินไทย TG-648 · จากกรุงเทพฯ'),
          blurb: L('Departs Bangkok (BKK) 01:00 — a 5h 10m red-eye in economy, landing at Fukuoka 08:10.',
                   'ออกจากกรุงเทพฯ (BKK) 01:00 บินกลางคืน 5 ชม. 10 น. ชั้นประหยัด ถึงฟุกุโอกะ 08:10'),
          refs: { notes: L('23 kg checked baggage each. Have the Visit Japan Web QR ready before the hall.', 'กระเป๋าโหลดคนละ 23 กก. เตรียม QR จาก Visit Japan Web ให้พร้อมก่อนถึงห้องตรวจ') } },

        { type: 'step', time: '08:40', meridiem: 'Morning', kind: 'Immigration', icon: 'passport',
          title: L('Immigration & Customs', 'ตรวจคนเข้าเมือง & ศุลกากร'),
          place: L('FUK Arrivals Hall', 'ห้องผู้โดยสารขาเข้า FUK'),
          blurb: L('Scan the QR, collect bags, clear the green channel.',
                   'สแกน QR รับกระเป๋า แล้วผ่านช่องเขียว'),
          refs: { notes: L('FUK is small and quick — usually clear within 30 minutes.', 'FUK เล็กและเร็ว ปกติผ่านได้ใน 30 นาที') } },

        { type: 'step', time: '09:15', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Subway → Tenjin', 'รถไฟใต้ดิน → เท็นจิน'),
          place: L('FUK Airport → Tenjin Stn · 11 min', 'สนามบิน FUK → สถานีเท็นจิน · 11 นาที'),
          blurb: L('Fukuoka airport sits right beside the city — straight to Tenjin on the airport line, a minute from the hotel.',
                   'สนามบินฟุกุโอกะอยู่ติดเมือง นั่งสายสนามบินตรงถึงเท็นจิน ห่างโรงแรมแค่นาทีเดียว'),
          refs: { map: 'https://maps.google.com/?q=Tenjin+Station+Fukuoka', booking: L('IC tap · ¥260', 'แตะ IC · ¥260') } },

        { type: 'step', time: '09:40', meridiem: 'Morning', kind: 'Luggage', icon: 'luggage',
          title: L('Drop bags · Hotel Monterey', 'ฝากกระเป๋า · โรงแรมมอนเทอเรย์'),
          place: L('Monterey La Soeur · Daimyo, Tenjin', 'มอนเทอเรย์ ลา ซัวร์ · ไดเมียว เท็นจิน'),
          blurb: L('Too early to check in — leave the cases and head straight out.',
                   'ยังเช็คอินไม่ได้ — ฝากกระเป๋าแล้วออกไปเที่ยวต่อ'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka', notes: L('Too early to check in — bags held at the front desk.', 'ยังเช็คอินไม่ได้ — ฝากกระเป๋าไว้ที่เคาน์เตอร์') } },

        { type: 'feature', time: '10:30', meridiem: 'Morning', kind: 'Coffee', imageId: 'a-d1-imdonut',
          title: L('I’m Donut & Fuk Coffee', 'I’m Donut & Fuk Coffee'),
          place: L('Daimyo · the original', 'ไดเมียว · ต้นตำรับ'),
          blurb: L('The fluffy donut born in Fukuoka — go early before it sells out, with a coffee alongside.',
                   'โดนัทเนื้อนุ่มที่เกิดที่ฟุกุโอกะ ไปเช้าก่อนหมด พร้อมกาแฟสักแก้ว'),
          refs: { map: 'https://maps.google.com/?q=I%27m+Donut+Fukuoka', notes: L('Cash and cards; queue builds fast mid-morning.', 'รับเงินสดและบัตร สายๆ คิวยาว') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d1-ramen',
          title: L('Ippudo · Daimyo (original)', 'อิปปุโด · ไดเมียว (ต้นตำรับ)'),
          place: L('Where the chain began · tonkotsu', 'จุดกำเนิดเชน · ทงคตสึ'),
          blurb: L('First Hakata tonkotsu at the original Ippudo, opened in Daimyo in 1985 — silky pork broth and thin noodles, the bowl that went global.',
                   'ราเมงทงคตสึฮากาตะมื้อแรกที่อิปปุโดต้นตำรับ ย่านไดเมียว เปิดปี 1985 — น้ำซุปหมูเนียนนุ่ม เส้นบาง ชามที่ดังไปทั่วโลก'),
          refs: { map: 'https://maps.google.com/?q=Ippudo+Daimyo+Honten+Fukuoka', official: 'https://www.ippudo.com/en/', notes: L('Try Shiromaru (classic) or Akamaru (miso-garlic). Other great bowls nearby: Hakata Issou, Shin-Shin, Ichiran.', 'ลอง Shiromaru (คลาสสิก) หรือ Akamaru (มิโซะ-กระเทียม) · ร้านเด็ดอื่นแถวนั้น: Hakata Issou, Shin-Shin, Ichiran') } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d1-canalcity',
          title: L('Canal City & Tenjin', 'คาแนลซิตี้ & เท็นจิน'),
          place: L('Easy first afternoon', 'บ่ายแรกแบบสบายๆ'),
          blurb: L('A gentle browse through the canal mall and the Tenjin shopping streets while the jet lag fades.',
                   'เดินเล่นสบายๆ ในห้างริมคลองและย่านช้อปเท็นจิน ระหว่างรอหายเพลียจากไฟลต์'),
          refs: { map: 'https://maps.google.com/?q=Canal+City+Hakata' } },

        { type: 'step', time: '16:00', meridiem: 'Afternoon', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Hotel Monterey', 'เช็คอิน · โรงแรมมอนเทอเรย์'),
          place: L('Monterey La Soeur · Daimyo, Tenjin', 'มอนเทอเรย์ ลา ซัวร์ · ไดเมียว เท็นจิน'),
          blurb: L('Swing back to collect the room (ready from 15:00), drop the day bag and freshen up after the red-eye before the evening out.',
                   'แวะกลับมารับห้อง (พร้อมตั้งแต่ 15:00) เก็บของ พักล้างหน้าหลังบินกลางคืน ก่อนออกไปเที่ยวค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka', reservation: { time: '15:00', code: 'MONTEREY', party: L('Base night 1', 'พักคืน 1') }, notes: L('Room ready from 15:00 · freshen up after the red-eye.', 'ห้องพร้อมตั้งแต่ 15:00 · พักล้างหน้าหลังบินดึก') } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'View', imageId: 'a-d1-illum',
          title: L('Winter Illumination', 'ไฟประดับฤดูหนาว'),
          place: L('Hakata Stn tree + Tenjin park', 'ต้นไฟสถานีฮากาตะ + สวนเท็นจิน'),
          blurb: L('December is peak season — the giant tree at Hakata Station and a belt of light through Tenjin.',
                   'ธันวาคมคือพีค — ต้นไฟยักษ์หน้าสถานีฮากาตะ และไฟประดับยาวต่อเนื่องทั่วเท็นจิน'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Station+Illumination', notes: L('Lights switch on around 17:00.', 'ไฟเปิดประมาณ 17:00') } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d1-motsunabe',
          title: L('Motsunabe', 'โมทสึนาเบะ'),
          place: L('Hakata offal hotpot', 'หม้อไฟเครื่องในวัวฮากาตะ'),
          blurb: L('The signature Hakata hotpot — beef offal, garlic, leek and cabbage in a rich broth.',
                   'หม้อไฟซิกเนเจอร์ฮากาตะ — เครื่องในวัว กระเทียม ต้นหอม และกะหล่ำในน้ำซุปเข้มข้น'),
          refs: { map: 'https://maps.google.com/?q=Motsunabe+Hakata',
                  reservation: { time: '19:30', code: 'MOTSU-01', party: L('Dinner · book ahead', 'มื้อค่ำ · จองล่วงหน้า') } } },

        { type: 'step', time: '21:00', meridiem: 'Night', kind: 'Walk', icon: 'walk',
          title: L('Nakasu yatai stalls', 'แผงยาไต นากาสึ'),
          place: L('Riverside food carts', 'รถเข็นอาหารริมแม่น้ำ'),
          blurb: L('A slow walk past the lantern-lit yatai along the Naka river — the image of Fukuoka at night.',
                   'เดินเล่นผ่านแผงยาไตโคมไฟริมแม่น้ำนากะ — ภาพจำของฟุกุโอกะยามค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Nakasu+Yatai+Fukuoka' } },

        { type: 'feature', time: '21:30', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d1-nightlife',
          title: L('FUKUOKA CRAFT by El Borracho', 'FUKUOKA CRAFT by El Borracho'),
          place: L('Craft beer & tacos · Daimyo', 'คราฟต์เบียร์ & ทาโก้ · ไดเมียว'),
          blurb: L('Ease into the first night with house-brewed pale ales and hazy IPAs (plus Mexican plates) at this easygoing Daimyo taproom.',
                   'เปิดคืนแรกแบบสบายๆ กับเพลเอลและเฮซีไอพีเอที่ brew เองของร้าน (พร้อมอาหารเม็กซิกัน) ที่แทปรูมชิลล์ย่านไดเมียว'),
          refs: { map: 'https://maps.google.com/?q=FUKUOKA+CRAFT+by+El+Borracho+Daimyo', official: 'https://www.fukuoka-now.com/en/food/fukuoka-craft/', notes: L('Daimyo · open to 24:00 (Fri/Sat to 01:00) · on-site brewery.', 'ไดเมียว · เปิดถึง 24:00 (ศุกร์/เสาร์ ถึง 01:00) · มีโรงเบียร์ในร้าน') } },
      ],
    },

    // ───────────────────────── DAY 2 · ASO / KUROKAWA ─────────────────────────
    {
      label: 'Day 02', labelTh: 'วันที่ 02', theme: 'hisui',
      date: L('Saturday · 5 Dec 2026', 'เสาร์ · 5 Dec 2026'),
      title: L('Mt Aso', 'ภูเขาไฟอาโซ'),
      subtitle: L('Pick Up the Car · Caldera & Onsen', 'รับรถ · ปากปล่องและออนเซน'),
      note: L(
        'Collect the rental and drive south into the largest caldera in Japan — rim viewpoints, a grassland, the smoking crater — then over to the hidden onsen village of Kurokawa for the night.',
        'รับรถเช่าแล้วขับลงใต้สู่ปากปล่องภูเขาไฟที่ใหญ่ที่สุดในญี่ปุ่น — จุดชมขอบปล่อง ทุ่งหญ้า ปล่องที่ยังคุกรุ่น แล้วข้ามไปนอนที่หมู่บ้านออนเซนซ่อนตัวคุโรคาวะ'
      ),
      coverId: 'day2-cover',
      activities: [
        { type: 'feature', time: '06:00', meridiem: 'Morning', kind: 'Run', imageId: 'a-d2-cityrun',
          title: L('Morning city run', 'วิ่งเช้าในเมือง'),
          place: L('Ohori Park + Castle loop · ~6.5 km', 'ลูปสวนโอโฮริ + ปราสาท · ~6.5 กม.'),
          blurb: L('A gentle ~6.5 km dawn loop from the hotel — the lake at Ohori Park (its flat 2 km jogging track and the red Ukimido pavilion), up to the Fukuoka Castle ruins for a sunrise city view, then back near the hotel for coffee. Quiet and misty at 6 am — perfect for the vlog.',
                   'ลูปเช้า ~6.5 กม. ชิลล์ๆ จากโรงแรม — บึงสวนโอโฮริ (ลู่วิ่งทางเรียบ 2 กม. กับศาลาแดงอุคิมิโด) ขึ้นซากปราสาทฟุกุโอกะชมวิวเมืองยามอาทิตย์ขึ้น แล้ววนกลับใกล้โรงแรมจิบกาแฟ · ตอน 6 โมงคนน้อย มีไอหมอก เหมาะถ่าย vlog สุดๆ'),
          refs: { map: 'https://maps.google.com/?q=Ohori+Park+Fukuoka', notes: L('Run 06:00–07:00 before the 08:30 check-out · flat & easy · tap each stop below for the map. Cafés open ~8–9, so at 7 am grab a konbini coffee by the hotel to wrap the vlog, or for a lakeside café push to ~08:00 at Starbucks Ohori Park.', 'วิ่ง 06:00–07:00 ก่อนเช็คเอาท์ 08:30 · ทางเรียบ วิ่งง่าย · แตะจุดแวะด้านล่างเพื่อดูแผนที่ · คาเฟ่เปิด ~8–9 ตอน 7 โมงซื้อกาแฟคอนบินิใกล้โรงแรมปิด vlog หรืออยากคาเฟ่ริมบึงเลื่อนไป ~08:00 ที่ Starbucks โอโฮริ') } },

        { type: 'step', time: '08:30', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out · Hotel Monterey', 'เช็คเอาท์ · โรงแรมมอนเทอเรย์'),
          place: L('Settle up before the car', 'เคลียร์บิลก่อนไปรับรถ'),
          blurb: L('Check out (usually by 10:00–11:00), then to the rental desk for the Kyushu loop.',
                   'เช็คเอาท์ (ปกติก่อน 10:00–11:00) แล้วไปเคาน์เตอร์รถเช่าเริ่มลูปคิวชู'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka', notes: L('Check-out 10:00–11:00 · check-in was from 15:00. Bags ride in the rental from here.', 'เช็คเอาท์ 10:00–11:00 · เช็คอินตั้งแต่ 15:00 · ขนกระเป๋าขึ้นรถเช่าได้เลย') } },

        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Pick up the car · Toyota', 'รับรถ · โตโยต้า'),
          place: L('Toyota Rent a Car · Hakata Stn', 'โตโยต้าเร้นท์อะคาร์ · สถานีฮากาตะ'),
          blurb: L('Collect the 8-seater for the Kyushu loop — ask for snow tyres and an ETC card at the desk.',
                   'รับรถ 8 ที่นั่งสำหรับลูปคิวชู — ขอยางหน้าหนาวและบัตร ETC ที่เคาน์เตอร์'),
          refs: { map: 'https://maps.google.com/?q=Toyota+Rent+a+Car+Hakata+Station',
                  reservation: { time: '09:00', code: 'CAR-FUK-5D', party: L('5 days · returns Day 6', '5 วัน · คืน Day 6') },
                  notes: L('International Driving Permit (IDP) required to drive.', 'ต้องมีใบขับขี่สากล (IDP) ในการขับ') } },

        { type: 'step', time: '09:30', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Depart for Aso', 'ออกเดินทางไป Aso'),
          place: L('Kyushu Expressway · ~2.5–3 h', 'ทางด่วนคิวชู · ~2.5–3 ชม.'),
          blurb: L('South past Kurume and Hita, climbing into the mountains of central Kyushu.',
                   'ลงใต้ผ่านคุรุเมะและฮิตะ ไต่ขึ้นสู่ภูเขากลางเกาะคิวชู'),
          refs: { notes: L('In December the high roads can ice over — keep to Route 111 (Panorama Line).', 'เดือนธันวาคมถนนบนเขาอาจมีน้ำแข็ง ใช้เส้น Route 111 (พาโนรามาไลน์)') } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'View', imageId: 'a-d3-daikanbo',
          title: L('Daikanbo viewpoint', 'จุดชมวิวไดคันโบ'),
          place: L('The caldera rim', 'ขอบปากปล่อง'),
          blurb: L('Stand on the rim and the whole 25-km caldera opens below — the central cones lined up like a sleeping figure.',
                   'ยืนบนขอบปล่องแล้วแอ่งปากปล่องกว้าง 25 กม. เปิดออกเบื้องล่าง — กรวยกลางเรียงตัวเหมือนคนนอนหลับ'),
          refs: { map: 'https://maps.google.com/?q=Daikanbo+Aso', notes: L('Wind is fierce on the rim — bring a layer.', 'ลมแรงบนขอบปล่อง พกเสื้อกันหนาว') } },

        { type: 'feature', time: '13:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d3-lunch',
          title: L('Aso Akaushi-don', 'ข้าวหน้าเนื้ออาโซอากาอุชิ'),
          place: L('Aso red-wagyu beef bowl', 'ข้าวหน้าเนื้อแดงวากิวอาโซ'),
          blurb: L('The Aso specialty — grass-fed akaushi (red wagyu) seared and piled over rice with a soft egg. The legendary spot is Imakin Shokudo in Uchinomaki (expect a queue).',
                   'ของขึ้นชื่ออาโซ — เนื้ออากาอุชิ (วากิวแดง) เลี้ยงปล่อย ย่างวางบนข้าวกับไข่ลวก · ร้านในตำนานคือ Imakin Shokudo ที่อุจิโนมากิ (คิวยาว)'),
          refs: { map: 'https://maps.google.com/?q=Imakin+Shokudo+Aso', notes: L('Lunch only · very busy — go early or expect a wait.', 'เปิดเฉพาะมื้อเที่ยง · คนเยอะมาก — ไปเช้าหรือเผื่อรอคิว') } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'Park', imageId: 'a-d3-kusasenri',
          title: L('Kusasenri & Komezuka', 'คุซะเซนริ & โคเมซึกะ'),
          place: L('Grassland under the volcano', 'ทุ่งหญ้าใต้ภูเขาไฟ'),
          blurb: L('A wide meadow with twin crater ponds, and the perfect little grass cone of Komezuka beside the road.',
                   'ทุ่งหญ้ากว้างมีบ่อปล่องคู่ และภูเขาไฟลูกจิ๋วทรงสวยโคเมซึกะข้างถนน'),
          refs: { map: 'https://maps.google.com/?q=Kusasenri+Aso' } },

        { type: 'feature', time: '15:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d3-nakadake',
          title: L('Nakadake Crater', 'ปล่องนากาดาเกะ'),
          place: L('Active smoking crater', 'ปล่องที่ยังคุกรุ่น'),
          blurb: L('A turquoise crater lake hissing sulphurous steam — access depends on the gas reading that day.',
                   'ทะเลสาบปากปล่องสีเทอร์คอยซ์พ่นไอกำมะถัน — เข้าได้หรือไม่ขึ้นกับระดับแก๊สในวันนั้น'),
          refs: { map: 'https://maps.google.com/?q=Nakadake+Crater+Aso', official: 'https://www.aso.ne.jp/~volcano/eng/',
                  notes: L('Winter access 09:00–16:30; may close on high-gas days — check before driving up.', 'หน้าหนาวเปิด 09:00–16:30 อาจปิดวันแก๊สสูง เช็กก่อนขับขึ้น') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d3-sweets',
          title: L('Aso Milk soft serve', 'ซอฟต์ครีมนมอาโซ'),
          place: L('Aso Milk Factory · dairy soft cream', 'อาโซมิลค์แฟกตอรี · ซอฟต์ครีมนมสด'),
          blurb: L('Aso is grazing country — stop for a thick, milky soft-serve (or a bottle of Aso milk) before the drive to Kurokawa.',
                   'อาโซคือเมืองทุ่งเลี้ยงวัว — แวะกินซอฟต์ครีมนมสดเข้มข้น (หรือนมอาโซสักขวด) ก่อนขับไปคุโรคาวะ'),
          refs: { map: 'https://maps.google.com/?q=Aso+Milk+Factory' } },

        { type: 'step', time: '16:00', meridiem: 'Afternoon', kind: 'Transfer', icon: 'car',
          title: L('Drive to Kurokawa Onsen', 'ขับสู่คุโรคาวะออนเซน'),
          place: L('Aso → Kurokawa · ~40 min', 'อาโซ → คุโรคาวะ · ~40 นาที'),
          blurb: L('North out of the caldera to a village hidden in a wooded gorge.',
                   'ขับขึ้นเหนือออกจากปากปล่องสู่หมู่บ้านที่ซ่อนอยู่ในหุบเขาป่า'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen' } },

        { type: 'step', time: '16:45', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Kurokawa ryokan', 'เช็คอิน · เรียวกังคุโระคาวะ'),
          place: L('Traditional onsen village', 'หมู่บ้านออนเซนดั้งเดิม'),
          blurb: L('Tatami, a yukata, and a wooden open-air bath — buy the nyuto-tegata pass to hop three baths.',
                   'เสื่อทาทามิ ยูกาตะ และอ่างไม้กลางแจ้ง — ซื้อพาสนิวโตเทกาตะแช่ได้ 3 ออนเซน'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen+ryokan', reservation: { time: '16:45', code: 'KRW-RYO', party: L('2 nights · half board', '2 คืน · รวมสองมื้อ') },
                  booking: L('Onsen-hop pass · ¥1,500', 'พาสเวียนออนเซน · ¥1,500') } },

        { type: 'feature', time: '19:00', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d3-kaiseki',
          title: L('Ryokan kaiseki', 'ไคเซกิที่เรียวกัง'),
          place: L('In-house · seasonal course', 'ในที่พัก · คอร์สตามฤดู'),
          blurb: L('Course after course of the highlands — Kumamoto wagyu, river fish and winter mountain vegetables.',
                   'คอร์สแล้วคอร์สแห่งที่ราบสูง — วากิวคุมาโมโตะ ปลาแม่น้ำ และผักภูเขาหน้าหนาว'),
          refs: { booking: L('Included in stay', 'รวมในค่าที่พัก') } },
      ],
    },

    // ───────────────────────── DAY 3 · KUMAMOTO ─────────────────────────
    {
      label: 'Day 03', labelTh: 'วันที่ 03', theme: 'kohaku',
      date: L('Sunday · 6 Dec 2026', 'อาทิตย์ · 6 Dec 2026'),
      title: L('Kumamoto', 'คุมาโมโตะ'),
      subtitle: L('Onsen Morning & the Great Castle', 'เช้าออนเซน & ปราสาทยิ่งใหญ่'),
      note: L(
        'A slow soak through the morning, then down to the castle city — one of the great fortresses of Japan, a landscape garden, and horse sashimi for dinner — then back to the same Kurokawa ryokan for a second night.',
        'แช่ออนเซนสบายๆ ทั้งเช้า แล้วลงสู่เมืองปราสาท — หนึ่งในป้อมปราการยิ่งใหญ่ของญี่ปุ่น สวนแบบญี่ปุ่น และม้าดิบเป็นมื้อค่ำ — แล้วกลับเรียวกังคุโรคาวะเดิมค้างคืนที่สอง'
      ),
      coverId: 'day3-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Onsen', icon: 'bed',
          title: L('Morning onsen-hopping', 'เวียนแช่ออนเซนยามเช้า'),
          place: L('Kurokawa · three baths', 'คุโรคาวะ · สามออนเซน'),
          blurb: L('Walk the village in a yukata and try the open-air baths before the crowds arrive.',
                   'เดินเที่ยวหมู่บ้านในชุดยูกาตะ ลองแช่อ่างกลางแจ้งก่อนคนเยอะ'),
          refs: { notes: L('Use the nyuto-tegata pass from check-in.', 'ใช้พาสนิวโตเทกาตะจากตอนเช็คอิน') } },

        { type: 'step', time: '10:00', meridiem: 'Late morning', kind: 'Transfer', icon: 'car',
          title: L('Drive Kurokawa → Kumamoto', 'ขับคุโรคาวะ → คุมาโมโตะ'),
          place: L('~1.5 h down the mountains', '~1.5 ชม. ลงจากภูเขา'),
          blurb: L('West and down out of the highlands toward the city.',
                   'มุ่งตะวันตกและลงจากที่ราบสูงสู่ตัวเมือง'),
          refs: { map: 'https://maps.google.com/?q=Kumamoto+Castle' } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d4-katsuretsu',
          title: L('Katsuretsu-tei', 'คัตสึเร็ตสึเทอิ'),
          place: L('Tonkatsu · AMU Plaza', 'ทงคตสึ · AMU Plaza'),
          blurb: L('A Kumamoto institution for thick, juicy pork cutlet with shredded cabbage and house sauce.',
                   'ร้านดังคุมาโมโตะ ทงคตสึชิ้นหนาฉ่ำ เสิร์ฟกับกะหล่ำซอยและซอสสูตรร้าน'),
          refs: { map: 'https://maps.google.com/?q=Katsuretsutei+Amu+Plaza+Kumamoto', official: 'https://hayashi-sangyo.jp/' } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'Castle', imageId: 'a-d4-castle',
          title: L('Kumamoto Castle', 'ปราสาทคุมาโมโตะ'),
          place: L('One of Japan’s great keeps', 'หนึ่งในปราสาทยิ่งใหญ่ของญี่ปุ่น'),
          blurb: L('Black-and-white towers on cyclopean curved stone walls — the main keep reopened after the 2016 quake.',
                   'หอปราสาทขาว-ดำบนกำแพงหินโค้งมหึมา — หอหลักเปิดอีกครั้งหลังแผ่นดินไหวปี 2016'),
          refs: { map: 'https://maps.google.com/?q=Kumamoto+Castle', official: 'https://castle.kumamoto-guide.jp/en/',
                  booking: L('Keep entry · ¥800', 'เข้าหอปราสาท · ¥800') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Garden', imageId: 'a-d4-suizenji',
          title: L('Suizenji Jojuen', 'สวนซุยเซนจิ'),
          place: L('A miniature Tokaido garden', 'สวนจำลองเส้นทางโทไกโด'),
          blurb: L('A strolling garden that recreates the old road to Edo in miniature — including a little grassy Mt Fuji.',
                   'สวนเดินเล่นที่จำลองเส้นทางสู่เอโดะแบบย่อส่วน — มีภูเขาฟูจิหญ้าจิ๋วด้วย'),
          refs: { map: 'https://maps.google.com/?q=Suizenji+Jojuen', booking: L('Entry · ¥400', 'ค่าเข้า · ¥400') } },

        { type: 'feature', time: '16:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d4-sweets',
          title: L('Ikinari Dango', 'อิคินาริ ดังโงะ'),
          place: L('Kumamoto sweet · Sakuranobaba', 'ขนมคุมาโมโตะ · ซากุระโนะบาบะ'),
          blurb: L('A homely Kumamoto sweet — steamed dough wrapped around a slice of sweet potato and sweet red-bean paste. Grab one at the castle-side Sakuranobaba Josaien.',
                   'ขนมพื้นบ้านคุมาโมโตะ — แป้งนึ่งห่อมันหวานกับถั่วแดงกวน หาซื้อได้ที่ซากุระโนะบาบะข้างปราสาท'),
          refs: { map: 'https://maps.google.com/?q=Ikinari+Dango+Kumamoto+Sakuranobaba' } },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d4-basashi',
          title: L('Basashi dinner', 'มื้อค่ำบาซาชิ'),
          place: L('Horse sashimi · Kumamoto specialty', 'ม้าดิบ · ของขึ้นชื่อคุมาโมโตะ'),
          blurb: L('The local delicacy — lean and fatty cuts of horse, sliced thin with ginger, garlic and sweet soy.',
                   'ของพื้นเมือง — ม้าดิบทั้งส่วนเนื้อแดงและติดมัน หั่นบางเสิร์ฟกับขิง กระเทียม และซีอิ๊วหวาน'),
          refs: { map: 'https://maps.google.com/?q=Basashi+Kumamoto',
                  reservation: { time: '19:00', code: 'BASA-01', party: L('Dinner · book ahead', 'มื้อค่ำ · จองล่วงหน้า') } } },

        { type: 'step', time: '20:45', meridiem: 'Night', kind: 'Transfer', icon: 'car',
          title: L('Drive back to Kurokawa', 'ขับกลับคุโรคาวะ'),
          place: L('~1.5 h · second night', '~1.5 ชม. · คืนที่สอง'),
          blurb: L('Back up into the hills to the same ryokan for a second night — the room is already yours.',
                   'ขับขึ้นเขากลับสู่เรียวกังเดิม ค้างคืนที่สอง — ห้องเป็นของเราอยู่แล้ว'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen', notes: L('Same Kurokawa ryokan as last night — no re-check-in.', 'เรียวกังคุโรคาวะเดิมเหมือนเมื่อคืน — ไม่ต้องเช็คอินใหม่') } },
      ],
    },

    // ───────────────────────── DAY 4 · BEPPU ─────────────────────────
    {
      label: 'Day 04', labelTh: 'วันที่ 04', theme: 'urushi',
      date: L('Monday · 7 Dec 2026', 'จันทร์ · 7 Dec 2026'),
      title: L('Beppu', 'เบปปุ'),
      subtitle: L('Yamanami Highway & the Hells', 'เส้นทางยามานามิ & บ่อนรก'),
      note: L(
        'One of the great drives in Japan — the Yamanami Highway across the highlands to the steaming coast of Beppu, where coloured hot-spring "hells" boil up out of the ground.',
        'หนึ่งในเส้นทางขับรถที่สวยที่สุดในญี่ปุ่น — ยามานามิไฮเวย์ข้ามที่ราบสูงสู่ชายฝั่งที่พ่นไอน้ำของเบปปุ ที่ซึ่ง "บ่อนรก" น้ำพุร้อนสีต่างๆ เดือดพุ่งขึ้นจากพื้น'
      ),
      coverId: 'day4-cover',
      activities: [
        { type: 'step', time: '08:30', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out · Kurokawa ryokan', 'เช็คเอาท์ · เรียวกังคุโรคาวะ'),
          place: L('Two nights done · onward to the coast', 'ครบสองคืน · มุ่งสู่ชายฝั่ง'),
          blurb: L('A last morning soak, then settle up — the scenic Yamanami Highway to Beppu lies ahead.',
                   'แช่ออนเซนเช้าครั้งสุดท้าย แล้วเคลียร์บิล — รออยู่คือยามานามิไฮเวย์วิวสวยสู่เบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen+ryokan', notes: L('Check-out ~10:00 · two nights at Kurokawa.', 'เช็คเอาท์ ~10:00 · พักคุโรคาวะ 2 คืน') } },

        { type: 'step', time: '08:30', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Drive via Yamanami Highway', 'ขับผ่านยามานามิไฮเวย์'),
          place: L('Kurokawa → Beppu · ~2 h', 'คุโรคาวะ → เบปปุ · ~2 ชม.'),
          blurb: L('A ribbon of road over rolling volcanic moorland between Aso and the eastern coast.',
                   'ถนนสายโค้งทอดข้ามทุ่งภูเขาไฟลูกคลื่นระหว่างอาโซกับชายฝั่งตะวันออก'),
          refs: { map: 'https://maps.google.com/?q=Yamanami+Highway',
                  notes: L('Optional detour: Takachiho Gorge (adds time — check winter boat hours).', 'แวะเสริมได้: หุบเขาทาคาชิโฮะ (ใช้เวลาเพิ่ม เช็กรอบเรือหน้าหนาว)') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d5-lunch',
          title: L('Roadside lunch', 'มื้อเที่ยงริมทาง'),
          place: L('Michi-no-eki rest stop', 'จุดพักรถมิจิโนเอกิ'),
          blurb: L('Pull in at a roadside station for dango-jiru dumpling soup and local bento.',
                   'แวะจุดพักรถ สั่งซุปดังโงะจิรุและเบนโตะท้องถิ่น'),
          refs: { map: 'https://maps.google.com/?q=Michi+no+Eki+Aso' } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d5-umijigoku',
          title: L('Umi Jigoku', 'อุมิจิโกกุ'),
          place: L('The cobalt-blue hell', 'บ่อนรกสีฟ้าโคบอลต์'),
          blurb: L('The prettiest of the Beppu hells — a steaming pond the colour of deep cobalt, hot enough to boil eggs.',
                   'สวยที่สุดในบรรดาบ่อนรกเบปปุ — บ่อพ่นไอน้ำสีฟ้าโคบอลต์เข้ม ร้อนพอต้มไข่ได้'),
          refs: { map: 'https://maps.google.com/?q=Umi+Jigoku+Beppu', official: 'https://www.beppu-jigoku.com/',
                  booking: L('Hells pass · ¥2,200 (7 hells)', 'พาสบ่อนรก · ¥2,200 (7 บ่อ)') } },

        { type: 'feature', time: '15:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d5-chinoike',
          title: L('Chinoike Jigoku', 'จิโนะอิเกะจิโกกุ'),
          place: L('The blood-red hell', 'บ่อนรกสีเลือด'),
          blurb: L('Iron-rich clay turns this pond a violent red — steam drifting off a pool the colour of rust.',
                   'ดินเหนียวที่มีธาตุเหล็กทำให้บ่อนี้แดงจัด ไอน้ำลอยจากบ่อสีสนิม'),
          refs: { map: 'https://maps.google.com/?q=Chinoike+Jigoku+Beppu' } },

        { type: 'step', time: '16:00', meridiem: 'Afternoon', kind: 'Onsen', icon: 'bed',
          title: L('Beppu sand bath', 'อาบทรายร้อนเบปปุ'),
          place: L('Buried in volcanic sand', 'ฝังในทรายภูเขาไฟ'),
          blurb: L('Lie down and get shovelled under warm volcanic sand by the sea — a Beppu-only ritual.',
                   'นอนลงแล้วให้กลบด้วยทรายภูเขาไฟอุ่นๆ ริมทะเล — ประสบการณ์เฉพาะเบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Beppu+Beach+Sand+Bath', booking: L('Sand bath · ¥1,500', 'อาบทราย · ¥1,500') } },

        { type: 'feature', time: '16:45', meridiem: 'Evening', kind: 'Sweets', imageId: 'a-d5-sweets',
          title: L('Beppu Purin', 'พุดดิ้งเบปปุ'),
          place: L('Hot-spring steamed pudding', 'พุดดิ้งนึ่งไอน้ำพุร้อน'),
          blurb: L('Beppu is pudding country — a firm, custardy purin, some of it steamed over the hot-spring jigoku. Pick one up around the hells or the station.',
                   'เบปปุคือเมืองพุดดิ้ง — พุดดิ้งคัสตาร์ดเนื้อแน่น บางเจ้านึ่งด้วยไอน้ำจากบ่อนรก หาซื้อแถวบ่อนรกหรือสถานี'),
          refs: { map: 'https://maps.google.com/?q=Beppu+purin+pudding' } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d5-sushi',
          title: L('Katsugyo kaiten sushi', 'ซูชิสายพานปลาเป็น'),
          place: L('Live-fish conveyor sushi', 'ซูชิสายพานปลาสดเป็นๆ'),
          blurb: L('Plates of just-cut seafood circling the counter — the catch fresh from Beppu Bay.',
                   'จานซีฟู้ดหั่นสดๆ วนรอบเคาน์เตอร์ — ปลาสดจากอ่าวเบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Katsugyo+Kaiten+Sushi+Beppu' } },

        { type: 'step', time: '18:30', meridiem: 'Evening', kind: 'Transfer', icon: 'car',
          title: L('Drive Beppu → Yufuin', 'ขับเบปปุ → ยูฟุอิน'),
          place: L('~40 min over the pass', '~40 นาที ข้ามช่องเขา'),
          blurb: L('A short climb over the Yufu hills into the valley town for the night.',
                   'ขับไต่เขายูฟุสั้นๆ ลงสู่เมืองในหุบเขาเพื่อค้างคืน'),
          refs: { map: 'https://maps.google.com/?q=Yufuin' } },

        { type: 'step', time: '19:15', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Yufuin ryokan', 'เช็คอิน · เรียวกังยูฟุอิน'),
          place: L('Mt Yufu view · two nights', 'วิวภูเขายูฟุ · สองคืน'),
          blurb: L('A room with its own bath under the twin-peaked mountain — the headline stay, kept two nights.',
                   'ห้องพักพร้อมอ่างส่วนตัวใต้ภูเขายอดคู่ — ไฮไลต์การพัก เก็บไว้สองคืน'),
          refs: { map: 'https://maps.google.com/?q=Yufuin+ryokan', reservation: { time: '19:15', code: 'YUF-RYO', party: L('2 nights · onsen ryokan', '2 คืน · เรียวกังออนเซน') } } },
      ],
    },

    // ───────────────────────── DAY 5 · YUFUIN ─────────────────────────
    {
      label: 'Day 05', labelTh: 'วันที่ 05', theme: 'botan',
      date: L('Tuesday · 8 Dec 2026', 'อังคาร · 8 Dec 2026'),
      title: L('Yufuin', 'ยูฟุอิน'),
      subtitle: L('Lake Mist & a Mountain Onsen Town', 'ไอหมอกริมบึง & เมืองออนเซนเชิงเขา'),
      note: L(
        'A short, beautiful drive over the hills to the gentlest town of the trip — a misty lake, a long shopping lane, and a night in a ryokan under Mt Yufu.',
        'ขับสั้นๆ ผ่านเนินเขาสู่เมืองที่นุ่มนวลที่สุดของทริป — บึงที่มีไอหมอก ถนนช้อปยาวๆ และค้างคืนในเรียวกังใต้ภูเขายูฟุ'
      ),
      coverId: 'day5-cover',
      activities: [
        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Onsen', icon: 'bed',
          title: L('Morning bath & breakfast', 'แช่น้ำและอาหารเช้า'),
          place: L('Yufuin ryokan', 'เรียวกังยูฟุอิน'),
          blurb: L('A slow soak in the private bath and a quiet breakfast before exploring the town on foot.',
                   'แช่อ่างส่วนตัวสบายๆ และอาหารเช้าเงียบๆ ก่อนออกเดินเที่ยวเมือง'),
          refs: {} },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Lake', imageId: 'a-d6-kinrin',
          title: L('Kinrin Lake', 'บึงคินริน'),
          place: L('Steaming spring-fed lake', 'บึงน้ำพุร้อนที่มีไอน้ำ'),
          blurb: L('Warm springs feed the lake, so on a cold morning a soft mist hangs over the water.',
                   'น้ำพุร้อนหล่อเลี้ยงบึง เช้าที่อากาศเย็นจึงมีไอหมอกบางๆ ลอยเหนือผิวน้ำ'),
          refs: { map: 'https://maps.google.com/?q=Kinrin+Lake+Yufuin', notes: L('Mist is best in the first hour after sunrise.', 'ไอหมอกสวยสุดในชั่วโมงแรกหลังพระอาทิตย์ขึ้น') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d6-mabushi',
          title: L('Yufu Mabushi', 'ยูฟุ มาบุชิ'),
          place: L('Bungo beef over rice', 'เนื้อบุงโกะราดข้าว'),
          blurb: L('Local Bungo beef (or chicken) grilled and served hitsumabushi-style — eaten three ways from one bowl.',
                   'เนื้อบุงโกะท้องถิ่น (หรือไก่) ย่างเสิร์ฟสไตล์ฮิตสึมาบุชิ — กินได้สามแบบจากชามเดียว'),
          refs: { map: 'https://maps.google.com/?q=Yufumabushi+Shin+Yufuin' } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d6-yunotsubo',
          title: L('Yunotsubo Kaido', 'ถนนยูโนทสึโบะ'),
          place: L('Main street & Floral Village', 'ถนนหลัก & Floral Village'),
          blurb: L('A long lane of craft shops, snack stalls and cafés leading from the station to the lake.',
                   'ถนนยาวเรียงรายร้านงานคราฟต์ ร้านของกินเล่น และคาเฟ่ ทอดจากสถานีสู่บึง'),
          refs: { map: 'https://maps.google.com/?q=Yunotsubo+Kaido+Yufuin' } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d6-sweets',
          title: L('Yufuin Sweets · B-speak & Milch', 'ของหวานยูฟุอิน · B-speak & Milch'),
          place: L('Roll cake & cheese tart · Yunotsubo', 'โรลเค้ก & ชีสทาร์ต · ยูโนทสึโบะ'),
          blurb: L('Yufuin is a dessert town — the melt-in-the-mouth P-roll cake at B-speak and warm German-style cheese tarts at Milch, both on Yunotsubo Kaido.',
                   'ยูฟุอินคือเมืองของหวาน — โรลเค้กละลายในปาก P-roll ที่ B-speak และชีสทาร์ตสไตล์เยอรมันอุ่นๆ ที่ Milch ทั้งคู่อยู่บนถนนยูโนทสึโบะ'),
          refs: { map: 'https://maps.google.com/?q=B-speak+roll+cake+Yufuin', notes: L('Milch (cheese tart) is a few doors down on Yunotsubo Kaido.', 'ร้าน Milch (ชีสทาร์ต) อยู่ถัดไปไม่กี่ร้านบนถนนยูโนทสึโบะ') } },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Onsen', icon: 'bed',
          title: L('Private rotenburo', 'อ่างกลางแจ้งส่วนตัว'),
          place: L('In-room open-air bath', 'อ่างกลางแจ้งในห้อง'),
          blurb: L('Steam rising into the cold night air with the mountain just above.',
                   'ไอน้ำลอยขึ้นสู่อากาศค่ำคืนที่หนาวเย็น มีภูเขาอยู่เหนือหัว'),
          refs: {} },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d6-ryokan',
          title: L('Ryokan kaiseki', 'ไคเซกิที่เรียวกัง'),
          place: L('In-house · seasonal course', 'ในที่พัก · คอร์สตามฤดู'),
          blurb: L('A private multi-course dinner of the season, served quietly in the room.',
                   'มื้อค่ำหลายคอร์สตามฤดูแบบส่วนตัว เสิร์ฟเงียบๆ ในห้องพัก'),
          refs: { booking: L('Included in stay', 'รวมในค่าที่พัก') } },
      ],
    },

    // ───────────────────────── DAY 6 · RETURN TO FUKUOKA ─────────────────────────
    {
      label: 'Day 06', labelTh: 'วันที่ 06', theme: 'kurogane',
      date: L('Wednesday · 9 Dec 2026', 'พุธ · 9 Dec 2026'),
      title: L('Return to Hakata', 'กลับสู่ฮากาตะ'),
      subtitle: L('Lake at Dawn & the Drive Back', 'บึงยามเช้า & ขับกลับ'),
      note: L(
        'Catch the lake in its morning mist, then the long drive back north to Fukuoka. Return the car on arrival — the rest of the trip is by train — and close the day with counter tempura.',
        'เก็บภาพบึงในไอหมอกยามเช้า แล้วขับกลับขึ้นเหนือสู่ฟุกุโอกะ คืนรถทันทีที่ถึง — ช่วงที่เหลือใช้รถไฟ — แล้วปิดวันด้วยเทมปุระเคาน์เตอร์'
      ),
      coverId: 'day6-cover',
      activities: [
        { type: 'feature', time: '07:30', meridiem: 'Dawn', kind: 'Lake', imageId: 'a-d7-mist',
          title: L('Kinrin Lake at dawn', 'บึงคินรินยามรุ่ง'),
          place: L('Mist over still water', 'ไอหมอกเหนือผิวน้ำนิ่ง'),
          blurb: L('The reason to stay the night — the lake at its most beautiful before the day-trippers arrive.',
                   'เหตุผลที่ควรค้างคืน — บึงสวยที่สุดก่อนนักท่องเที่ยวไปเช้ากลับเย็นจะมาถึง'),
          refs: { map: 'https://maps.google.com/?q=Kinrin+Lake+Yufuin' } },

        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out · Yufuin ryokan', 'เช็คเอาท์ · เรียวกังยูฟุอิน'),
          place: L('Then drive back to Fukuoka', 'แล้วขับกลับฟุกุโอกะ'),
          blurb: L('Ryokan check-out ~10:00 — settle up after the lake walk and breakfast before the 2h drive north.',
                   'เรียวกังเช็คเอาท์ ~10:00 — เคลียร์บิลหลังเดินชมบึงและอาหารเช้า ก่อนขับขึ้นเหนือ 2 ชม.'),
          refs: { map: 'https://maps.google.com/?q=Yufuin+ryokan', notes: L('Check-out 10:00 · check-in was 16:00.', 'เช็คเอาท์ 10:00 · เช็คอิน 16:00') } },

        { type: 'step', time: '09:30', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Drive Yufuin → Fukuoka', 'ขับยูฟุอิน → ฟุกุโอกะ'),
          place: L('~2 h by expressway', '~2 ชม. ทางด่วน'),
          blurb: L('North-west off the mountains and back onto the expressway to the city.',
                   'มุ่งตะวันตกเฉียงเหนือลงจากภูเขากลับขึ้นทางด่วนสู่เมือง'),
          refs: { notes: L('Optional: stop in the Yame tea country for top-grade gyokuro (skip if not into tea).', 'แวะเสริม: ย่านชายาเมะซื้อชาเกียวคุโระเกรดท็อป (ข้ามได้ถ้าไม่อินชา)') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d7-lunch',
          title: L('Lunch stop · Hita', 'แวะกินเที่ยง · ฮิตะ'),
          place: L('Hita yakisoba · old-town stop', 'ฮิตะยากิโซบะ · แวะเมืองเก่า'),
          blurb: L('Break the drive back in the little castle town of Hita — crispy pan-fried Hita yakisoba, then a stroll through the Edo-era Mameda-machi streets.',
                   'พักระหว่างทางกลับที่เมืองเก่าฮิตะ — ฮิตะยากิโซบะเส้นกรอบ แล้วเดินเล่นย่านมาเมดะมาจิสมัยเอโดะ'),
          refs: { map: 'https://maps.google.com/?q=Hita+yakisoba+Mameda+machi', notes: L('Roughly on the Yufuin → Fukuoka route · skip it if you prefer to push straight to Hakata.', 'อยู่ราวๆ เส้นยูฟุอิน → ฟุกุโอกะ · ข้ามได้ถ้าอยากตรงกลับฮากาตะเลย') } },

        { type: 'step', time: '13:30', meridiem: 'Afternoon', kind: 'Transfer', icon: 'car',
          title: L('Return the car · Fukuoka', 'คืนรถ · ฟุกุโอกะ'),
          place: L('Toyota Rent a Car · Hakata Stn', 'โตโยต้าเร้นท์อะคาร์ · สถานีฮากาตะ'),
          blurb: L('Hand the car back on arrival — the self-drive loop is done. Dazaifu and Itoshima are easy by train from here.',
                   'คืนรถทันทีที่ถึง — จบช่วงขับรถเอง · ดาไซฟุและอิโตชิมะนั่งรถไฟจากนี่สะดวก'),
          refs: { map: 'https://maps.google.com/?q=Toyota+Rent+a+Car+Hakata+Station', reservation: { time: '13:30', code: 'CAR-FUK-5D', party: L('Return · end of loop', 'คืนรถ · จบลูป') } } },

        { type: 'step', time: '14:00', meridiem: 'Afternoon', kind: 'Check-in', icon: 'bed',
          title: L('Check in · city hotel', 'เช็คอิน · โรงแรมในเมือง'),
          place: L('City hotel · return stay (nights 6–10)', 'โรงแรมในเมือง · ช่วงกลับ (คืน 6–10)'),
          blurb: L('Check in to the Fukuoka base for the rest of the trip — one hotel, right through to the flight home.',
                   'เช็คอินโรงแรมฐานฟุกุโอกะสำหรับช่วงที่เหลือ — โรงแรมเดียวยาวจนวันบินกลับ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+city+hotels', reservation: { time: '14:00', code: 'FUK-RETURN', party: L('Base nights 6–10 · to book', 'พักคืนที่ 6–10 · รอจอง') }, notes: L('Separate from the Monterey (night 1) — return-stay hotel still to be decided.', 'คนละที่กับ Monterey (คืน 1) — โรงแรมช่วงกลับยังไม่ได้เลือก') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d7-shopping',
          title: L('Tenjin & Canal City', 'เท็นจิน & คาแนลซิตี้'),
          place: L('Shopping + the lights', 'ช้อปปิ้ง + ไฟประดับ'),
          blurb: L('An afternoon of shops, then back through the winter illuminations after dark.',
                   'บ่ายเดินช้อป แล้ววนกลับผ่านไฟประดับฤดูหนาวหลังพระอาทิตย์ตก'),
          refs: { map: 'https://maps.google.com/?q=Mina+Tenjin+Fukuoka' } },

        { type: 'feature', time: '18:00', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d7-tempura',
          title: L('Tempura Hirao', 'เทมปุระ ฮิราโอะ'),
          place: L('Counter tempura, fried to order', 'เทมปุระเคาน์เตอร์ ทอดสดทีละชิ้น'),
          blurb: L('Piece by piece off the fryer at the counter — a Fukuoka favourite, light and crisp.',
                   'ทอดทีละชิ้นเสิร์ฟที่เคาน์เตอร์ — ร้านโปรดของฟุกุโอกะ เบาและกรอบ'),
          refs: { map: 'https://maps.google.com/?q=Tempura+Hirao+Fukuoka',
                  reservation: { time: '18:00', code: 'HIRAO-01', party: L('Dinner · counter', 'มื้อค่ำ · เคาน์เตอร์') },
                  notes: L('Closes around 20:00 — go early.', 'ปิดราว 20:00 ไปแต่หัวค่ำ') } },
      ],
    },

    // ───────────────────────── DAY 7 · DAZAIFU ─────────────────────────
    {
      label: 'Day 07', labelTh: 'วันที่ 07', theme: 'urushi',
      date: L('Thursday · 10 Dec 2026', 'พฤหัสบดี · 10 Dec 2026'),
      title: L('Dazaifu', 'ดาไซฟุ'),
      subtitle: L('Shrine, Sweets & River Town', 'ศาลเจ้า ขนม และเมืองริมน้ำ'),
      note: L(
        'A train day south of the city — the great shrine of learning and its woven-wood Starbucks, then a flat-bottomed boat down the canals of Yanagawa, and yatai again at night.',
        'วันนั่งรถไฟลงใต้ของเมือง — ศาลเจ้าแห่งการเรียนและ Starbucks ไม้สาน แล้วล่องเรือท้องแบนตามคลองยานางาวะ ปิดท้ายด้วยยาไตอีกครั้งยามค่ำ'
      ),
      coverId: 'day7-cover',
      activities: [
        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Nishitetsu → Dazaifu', 'นิชิเท็ตสึ → ดาไซฟุ'),
          place: L('Tenjin → Dazaifu · ~40 min', 'เท็นจิน → ดาไซฟุ · ~40 นาที'),
          blurb: L('The private line south, changing once at Futsukaichi.',
                   'รถไฟเอกชนมุ่งใต้ เปลี่ยนขบวนหนึ่งครั้งที่ฟุตสึไกจิ'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Station', booking: L('Tabito / IC · ~¥420', 'ตั๋ว Tabito / IC · ~¥420') } },

        { type: 'feature', time: '09:45', meridiem: 'Morning', kind: 'Shrine', imageId: 'a-d2-tenmangu',
          title: L('Dazaifu Tenmangu', 'ดาไซฟุ เท็มมังกู'),
          place: L('Shrine of learning', 'ศาลเจ้าแห่งการเรียน'),
          blurb: L('A vermilion shrine to the deity of scholarship, ringed by ancient plum trees and arched red bridges.',
                   'ศาลเจ้าสีชาดของเทพเจ้าแห่งการเรียน รายล้อมด้วยต้นบ๊วยเก่าแก่และสะพานแดงโค้ง'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Tenmangu', official: 'https://www.dazaifutenmangu.or.jp/en',
                  booking: L('Free entry to grounds', 'เข้าบริเวณฟรี'), notes: L('Buy an omamori charm for good study luck.', 'ซื้อเครื่องรางโอมาโมริขอพรเรื่องการเรียน') } },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Wander', imageId: 'a-d2-omotesando',
          title: L('Omotesando & Umegae Mochi', 'ถนนซันโด & อุเมะกาเอะโมจิ'),
          place: L('The approach street', 'ถนนทางเข้าศาลเจ้า'),
          blurb: L('Grilled umegae mochi straight off the iron — sweet red bean in a crisp rice cake.',
                   'อุเมะกาเอะโมจิย่างร้อนๆ จากเตา — ไส้ถั่วแดงหวานในแป้งข้าวกรอบ'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Tenmangu+Omotesando' } },

        { type: 'feature', time: '11:40', meridiem: 'Late morning', kind: 'Coffee', imageId: 'a-d2-starbucks',
          title: L('Starbucks Dazaifu', 'สตาร์บัคส์ ดาไซฟุ'),
          place: L('Designed by Kengo Kuma', 'ออกแบบโดย Kengo Kuma'),
          blurb: L('Two thousand cedar batons woven across the facade — coffee inside a sculpture.',
                   'ไม้ซีดาร์สองพันชิ้นสานทั่วหน้าร้าน — จิบกาแฟในงานประติมากรรม'),
          refs: { map: 'https://maps.google.com/?q=Starbucks+Dazaifu+Omotesando' } },

        { type: 'step', time: '12:15', meridiem: 'Midday', kind: 'Train', icon: 'train',
          title: L('Nishitetsu → Yanagawa', 'นิชิเท็ตสึ → ยานางาวะ'),
          place: L('Dazaifu → Yanagawa · ~50 min', 'ดาไซฟุ → ยานางาวะ · ~50 นาที'),
          blurb: L('South again across the plain to the canal town.',
                   'มุ่งใต้อีกครั้งข้ามที่ราบสู่เมืองคลอง'),
          refs: { map: 'https://maps.google.com/?q=Nishitetsu+Yanagawa+Station' } },

        { type: 'feature', time: '13:15', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d2-unagi',
          title: L('Yanagawa Unagi Seiro-mushi', 'ข้าวหน้าปลาไหลนึ่ง ยานางาวะ'),
          place: L('Steamed eel on rice · Yanagawa specialty', 'อูนางิเซโระมุชิ · ของขึ้นชื่อยานางาวะ'),
          blurb: L('The signature lunch of Yanagawa — eel grilled then steamed over seasoned rice in a lacquer box, rich and tender. Classic spots: Wakamatsuya or Motoyoshiya.',
                   'มื้อเที่ยงซิกเนเจอร์ของยานางาวะ — ปลาไหลย่างแล้วนึ่งบนข้าวปรุงรสในกล่องไม้ เนื้อนุ่มเข้มข้น · ร้านคลาสสิก เช่น Wakamatsuya หรือ Motoyoshiya'),
          refs: { map: 'https://maps.google.com/?q=Yanagawa+unagi+seiro+mushi', notes: L('Famous shops can queue — go before the boat ride.', 'ร้านดังคิวยาว — ไปก่อนล่องเรือ') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Ferry', imageId: 'a-d2-yanagawa',
          title: L('Yanagawa river boat', 'ล่องเรือยานางาวะ'),
          place: L('Donko-bune punting', 'เรือพายดงโกะบุเนะ'),
          blurb: L('A boatman poles you down willow-lined canals under low stone bridges — in winter, a heated kotatsu boat.',
                   'คนพายพาล่องคลองริมต้นหลิวลอดสะพานหินเตี้ยๆ หน้าหนาวเป็นเรือโคทัตสึอุ่นๆ'),
          refs: { map: 'https://maps.google.com/?q=Yanagawa+River+Cruise', booking: L('Boat · ~¥1,800 pp', 'ค่าเรือ · ~¥1,800/ท่าน') } },

        { type: 'step', time: '17:30', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Return to Hakata', 'กลับสู่ฮากาตะ'),
          place: L('Yanagawa → Tenjin · ~50 min', 'ยานางาวะ → เท็นจิน · ~50 นาที'),
          blurb: L('Limited express back to the city as the light fades.',
                   'นั่งรถด่วนกลับเข้าเมืองขณะแสงค่อยจางลง'),
          refs: { map: 'https://maps.google.com/?q=Nishitetsu+Tenjin+Station' } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d2-yatai',
          title: L('Nakasu Yatai dinner', 'มื้อค่ำยาไต นากาสึ'),
          place: L('Open-air food stalls', 'ร้านรถเข็นกลางแจ้ง'),
          blurb: L('Squeeze onto a stool at a riverside cart for yakitori, ramen and oden under the lanterns.',
                   'เบียดนั่งสตูลที่แผงริมน้ำ สั่งยากิโทริ ราเมง และโอเด้งใต้แสงโคมไฟ'),
          refs: { map: 'https://maps.google.com/?q=Nakasu+Yatai+Fukuoka', notes: L('Most stalls are cash only.', 'ส่วนใหญ่รับเงินสดเท่านั้น') } },

        { type: 'feature', time: '21:30', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d2-nightlife',
          title: L('Seimon-Barai izakaya', 'อิซากายะ Seimon-Barai'),
          place: L('Lively seafood izakaya · Nakasu', 'อิซากายะซีฟู้ดคึกคัก · นากาสึ'),
          blurb: L('A boisterous fisherman-style izakaya in Nakasu — live tanks, super-fresh sashimi and grilled skewers, with sake and beer flowing. Great for a lively group dinner.',
                   'อิซากายะสไตล์ชาวประมงคึกคักย่านนากาสึ — มีบ่อปลาเป็นๆ ซาชิมิสดมาก ของย่างเสียบไม้ พร้อมสาเก-เบียร์ไม่หยุด เหมาะกับมื้อค่ำกลุ่มครึกครื้น'),
          refs: { map: 'https://maps.google.com/?q=Seimon+Barai+izakaya+Nakasu+Fukuoka', notes: L('Nakasu-Kawabata · lively, fresh seafood · book for a group.', 'นากาสึ-คาวาบาตะ · คึกคัก ซีฟู้ดสด · กลุ่มควรจอง') } },
      ],
    },

    // ───────────────────────── DAY 8 · ITOSHIMA ─────────────────────────
    {
      label: 'Day 08', labelTh: 'วันที่ 08', theme: 'ai',
      date: L('Friday · 11 Dec 2026', 'ศุกร์ · 11 Dec 2026'),
      title: L('Itoshima', 'อิโตชิมะ'),
      subtitle: L('Coast, Cafés & Oyster Huts', 'ชายฝั่ง คาเฟ่ และกระท่อมหอยนางรม'),
      note: L(
        'The last day with the car — out west along the Sunset Road coast for photo spots and seaside cafés, with grilled oysters at a winter oyster hut, then return the car at night.',
        'วันสุดท้ายที่มีรถ — ออกไปทางตะวันตกเลียบถนน Sunset Road เก็บจุดถ่ายรูปและคาเฟ่ริมทะเล กินหอยนางรมเผาที่กระท่อมหอยหน้าหนาว แล้วคืนรถตอนค่ำ'
      ),
      coverId: 'day8-cover',
      activities: [
        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Train → Itoshima', 'รถไฟ → อิโตชิมะ'),
          place: L('JR → Chikuzen-Maebaru · ~40 min', 'JR → ชิคุเซน-มาเอบารุ · ~40 นาที'),
          blurb: L('Subway plus the JR Chikuhi line out to Itoshima — then a local bus, taxi or rental cycle to reach the coast.',
                   'รถไฟใต้ดิน + สาย JR ชิคุฮิ ออกสู่อิโตชิมะ — แล้วต่อรถบัส แท็กซี่ หรือจักรยานเช่าไปจุดชายฝั่ง'),
          refs: { map: 'https://maps.google.com/?q=Chikuzen-Maebaru+Station', booking: L('IC · ~¥630', 'แตะ IC · ~¥630'), notes: L('Coast spots are spread out — a taxi, bus pass or rental bike helps without a car.', 'จุดชายฝั่งกระจายตัว — แท็กซี่ บัสพาส หรือจักรยานเช่าช่วยได้ถ้าไม่มีรถ') } },

        { type: 'feature', time: '10:00', meridiem: 'Morning', kind: 'View', imageId: 'a-d8-torii',
          title: L('Sakurai Futamigaura', 'ซากุไร ฟุตามิงาอุระ'),
          place: L('White torii in the sea', 'เสาโทริอิขาวกลางทะเล'),
          blurb: L('A white gate standing in the waves beside the married-couple rocks — the postcard of Itoshima.',
                   'เสาโทริอิสีขาวตั้งกลางคลื่นข้างหินคู่สามีภรรยา — ภาพโปสการ์ดของอิโตชิมะ'),
          refs: { map: 'https://maps.google.com/?q=Sakurai+Futamigaura' } },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Wander', imageId: 'a-d8-cafes',
          title: L('Sunset Road cafés', 'คาเฟ่เลียบ Sunset Road'),
          place: L('Palm Beach · photo spots', 'ปาล์มบีช · จุดถ่ายรูป'),
          blurb: L('A coast road of beach cafés and quirky photo spots — the red London bus, the angel-wings wall, the big "?" sign.',
                   'ถนนเลียบทะเลที่เต็มไปด้วยคาเฟ่ริมหาดและมุมถ่ายรูปน่ารัก — รถบัสลอนดอนแดง กำแพงปีกนางฟ้า และป้าย "?"'),
          refs: { map: 'https://maps.google.com/?q=Itoshima+Sunset+Road' } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d8-oyster',
          title: L('Kaki-goya oyster hut', 'กระท่อมหอยนางรมเผา'),
          place: L('Grill-your-own by the bay', 'เผากินเองริมอ่าว'),
          blurb: L('Winter-only huts along the bay where you grill plump local oysters yourself over a charcoal burner.',
                   'กระท่อมเปิดเฉพาะหน้าหนาวริมอ่าว เผาหอยนางรมตัวอ้วนท้องถิ่นเองบนเตาถ่าน'),
          refs: { map: 'https://maps.google.com/?q=Itoshima+Oyster+Hut+Kakigoya',
                  notes: L('Season Nov–Mar; busiest at weekends — some huts take bookings.', 'ฤดูกาล พ.ย.–มี.ค. เสาร์อาทิตย์คนเยอะ บางร้านจองได้') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d8-keya',
          title: L('Keya no Oto', 'เคยะ โนะ โอโตะ'),
          place: L('Basalt sea cliffs', 'หน้าผาหินบะซอลต์ริมทะเล'),
          blurb: L('Hexagonal basalt columns and a sea cave at the tip of the peninsula — a short detour if there is time.',
                   'เสาหินบะซอลต์หกเหลี่ยมและถ้ำทะเลที่ปลายคาบสมุทร — แวะสั้นๆ ได้ถ้ามีเวลา'),
          refs: { map: 'https://maps.google.com/?q=Keya+no+Oto+Itoshima' } },

        { type: 'feature', time: '16:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d8-sunset',
          title: L('Sunset over the sea', 'พระอาทิตย์ตกริมทะเล'),
          place: L('West-facing coast', 'ชายฝั่งหันตะวันตก'),
          blurb: L('The whole coast faces west — find a beach spot and watch the sun go down around 17:10.',
                   'ชายฝั่งทั้งแนวหันทิศตะวันตก หาจุดริมหาดชมพระอาทิตย์ตกราว 17:10'),
          refs: {} },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Train back to Fukuoka', 'รถไฟกลับฟุกุโอกะ'),
          place: L('Chikuzen-Maebaru → Tenjin / Hakata', 'ชิคุเซน-มาเอบารุ → เท็นจิน / ฮากาตะ'),
          blurb: L('Back along the coast line into the city for dinner.',
                   'นั่งรถไฟเลียบชายฝั่งกลับเข้าเมืองไปกินมื้อค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Chikuzen-Maebaru+Station' } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d8-dinner',
          title: L('Hakata Mizutaki · Hanamidori', 'มิซุทากิฮากาตะ · ฮานามิโดริ'),
          place: L('Chicken hot pot · near Hakata Stn', 'หม้อไฟไก่ · ใกล้สถานีฮากาตะ'),
          blurb: L('A Fukuoka classic you have not had yet — clear, collagen-rich chicken hot pot at Hakata Hanamidori (branches by Hakata Station). Finish with rice porridge in the broth.',
                   'อาหารคลาสสิกฟุกุโอกะที่ยังไม่ได้กิน — หม้อไฟไก่น้ำใสคอลลาเจนเข้มข้นที่ฮานามิโดริ (มีสาขาใกล้สถานีฮากาตะ) · ปิดท้ายด้วยข้าวต้มในน้ำซุป'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Hanamidori+Mizutaki', notes: L('Popular — reserve ahead, especially for a group.', 'ยอดนิยม — จองล่วงหน้า โดยเฉพาะมาเป็นกลุ่ม') } },
      ],
    },

    // ───────────────────────── DAY 9 · FUKUOKA · SLOW DAY ─────────────────────────
    {
      label: 'Day 09', labelTh: 'วันที่ 09', theme: 'kohaku',
      date: L('Saturday · 12 Dec 2026', 'เสาร์ · 12 Dec 2026'),
      title: L('Fukuoka — Slow Day', 'ฟุกุโอกะ — วันชิลล์'),
      subtitle: L('Parks, Cafés & the City', 'สวน คาเฟ่ และในเมือง'),
      note: L(
        'No car, no rush — a lakeside park and the old castle ruins, the cafés and shops of Daimyo, the bay at Momochi, and a good dinner to end.',
        'ไม่มีรถ ไม่ต้องรีบ — สวนริมทะเลสาบและซากปราสาทเก่า คาเฟ่และร้านค้าย่านไดเมียว อ่าวที่โมโมจิ และมื้อค่ำดีๆ ปิดวัน'
      ),
      coverId: 'day9-cover',
      activities: [
        { type: 'feature', time: '09:30', meridiem: 'Morning', kind: 'Park', imageId: 'a-d9-ohori',
          title: L('Ohori Park', 'สวนโอโฮริ'),
          place: L('Lake park & Japanese garden', 'สวนริมทะเลสาบ & สวนญี่ปุ่น'),
          blurb: L('A big city lake circled by a walking path, with a quiet formal Japanese garden tucked in one corner.',
                   'ทะเลสาบใหญ่กลางเมืองมีทางเดินรอบ มีสวนญี่ปุ่นเงียบสงบซ่อนอยู่มุมหนึ่ง'),
          refs: { map: 'https://maps.google.com/?q=Ohori+Park+Fukuoka', booking: L('Japanese garden · ¥250', 'สวนญี่ปุ่น · ¥250') } },

        { type: 'feature', time: '10:30', meridiem: 'Late morning', kind: 'Castle', imageId: 'a-d9-maizuru',
          title: L('Fukuoka Castle ruins', 'ซากปราสาทฟุกุโอกะ'),
          place: L('Maizuru Park', 'สวนไมซุรุ'),
          blurb: L('Massive stone ramparts and a turret are all that remain of the castle — climb up for a view over the city.',
                   'เหลือเพียงกำแพงหินมหึมาและป้อมหนึ่งหลังของปราสาท — ขึ้นไปชมวิวเมืองได้'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+Castle+Ruins+Maizuru+Park' } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d9-lunch',
          title: L('Lunch in Daimyo', 'มื้อเที่ยงย่านไดเมียว'),
          place: L('Hip backstreets', 'ตรอกย่านฮิป'),
          blurb: L('Pick a small bistro or café in the trendiest quarter of the city.',
                   'เลือกร้านบิสโทรหรือคาเฟ่เล็กๆ ในย่านที่ฮิปที่สุดของเมือง'),
          refs: { map: 'https://maps.google.com/?q=Daimyo+Fukuoka' } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d9-daimyo',
          title: L('Daimyo & Tenjin', 'ไดเมียว & เท็นจิน'),
          place: L('Boutiques & coffee', 'ร้านบูทีก & กาแฟ'),
          blurb: L('Independent fashion, record shops and specialty coffee through the lanes of Daimyo.',
                   'ร้านแฟชั่นอิสระ ร้านแผ่นเสียง และกาแฟสเปเชียลตี้ตามตรอกไดเมียว'),
          refs: { map: 'https://maps.google.com/?q=Daimyo+Fukuoka', guide: 'https://kickswrap.com/en/blogs/all/fukuoka-sneaker' } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d9-sweets',
          title: L('Campbell Early', 'แคมป์เบล เอิร์ลลี่'),
          place: L('Famous fruit parfait · Imaizumi', 'พาร์เฟต์ผลไม้ชื่อดัง · อิมาอิซุมิ'),
          blurb: L('The most famous fruit parfaits in Fukuoka — towers of seasonal fruit, cream and jelly (plus fluffy pancakes) at this Imaizumi cafe near Daimyo.',
                   'พาร์เฟต์ผลไม้ที่ดังที่สุดของฟุกุโอกะ — ผลไม้ตามฤดู ครีม และเยลลีจัดเป็นชั้นๆ (มีแพนเค้กฟูๆ ด้วย) ที่คาเฟ่ย่านอิมาอิซุมิใกล้ไดเมียว'),
          refs: { map: 'https://maps.google.com/?q=Campbell+Early+Fukuoka+Imaizumi', notes: L('Very popular — can queue. Seasonal fruit (early Dec: strawberry just starting).', 'ยอดนิยมมาก — อาจต้องรอคิว · ผลไม้ตามฤดู (ต้นธันวา สตรอว์เบอร์รีเพิ่งเริ่ม)') } },

        { type: 'feature', time: '16:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d9-tower',
          title: L('Fukuoka Tower & Momochi', 'ฟุกุโอกะทาวเวอร์ & โมโมจิ'),
          place: L('Bayfront seaside', 'ริมทะเลโมโมจิ'),
          blurb: L('A mirror-glass tower on the bay — go up for the view, or just walk the seaside at golden hour.',
                   'หอกระจกริมอ่าว — ขึ้นไปชมวิว หรือเดินเล่นริมทะเลช่วงแสงทอง'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+Tower', booking: L('Observatory · ¥800', 'หอชมวิว · ¥800') } },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d9-yakiniku',
          title: L('Yakiniku / sushi dinner', 'มื้อค่ำยากินิคุ / ซูชิ'),
          place: L('A proper sit-down night', 'มื้อค่ำนั่งสบายๆ'),
          blurb: L('A relaxed evening over grilled wagyu or a sushi counter — book ahead for the good places.',
                   'ค่ำคืนสบายๆ กับวากิวย่างหรือเคาน์เตอร์ซูชิ — ร้านดีจองล่วงหน้า'),
          refs: { map: 'https://maps.google.com/?q=Yakiniku+Fukuoka',
                  reservation: { time: '19:00', code: 'USHI-01', party: L('Dinner · book ahead', 'มื้อค่ำ · จองล่วงหน้า') } } },

        { type: 'feature', time: '22:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d9-nightlife',
          title: L('Ibiza FUKUOKA', 'Ibiza FUKUOKA'),
          place: L('Nightclub · Daimyo', 'ไนต์คลับ · ไดเมียว'),
          blurb: L('Saturday is the big one — hit Ibiza, the Daimyo club on the 5th floor of The Shops, open 21:00 till 5am.',
                   'คืนเสาร์จัดหนัก — ลุย Ibiza ไนต์คลับย่านไดเมียว ชั้น 5 ตึก The Shops เปิด 21:00 ยันตี 5'),
          refs: { map: 'https://maps.google.com/?q=Ibiza+Fukuoka+Daimyo', official: 'https://www.ibiza-fukuoka.jp/', notes: L('5F The Shops, 1-12-56 Daimyo · 21:00–05:00 · ~6 min from Tenjin Stn.', 'ชั้น 5 The Shops, 1-12-56 ไดเมียว · 21:00–05:00 · ~6 นาทีจากสถานีเท็นจิน') } },
      ],
    },

    // ───────────────────────── DAY 10 · LAST FULL DAY ─────────────────────────
    {
      label: 'Day 10', labelTh: 'วันที่ 10', theme: 'kurogane',
      date: L('Sunday · 13 Dec 2026', 'อาทิตย์ · 13 Dec 2026'),
      title: L('Last Day in Fukuoka', 'วันสุดท้ายในฟุกุโอกะ'),
      subtitle: L('Souvenirs & a Farewell Bowl', 'ของฝาก & ราเมงอำลา'),
      note: L(
        'The last full day — mentaiko and sweets to carry home, one more bowl of ramen, and a final walk through the winter lights before packing.',
        'วันเต็มสุดท้าย — เมนไทโกะและขนมเป็นของฝาก ราเมงอีกหนึ่งชาม และเดินชมไฟประดับฤดูหนาวครั้งสุดท้ายก่อนเก็บกระเป๋า'
      ),
      coverId: 'day10-cover',
      activities: [
        { type: 'feature', time: '10:00', meridiem: 'Morning', kind: 'Market', imageId: 'a-d10-mentaiko',
          title: L('Mentaiko & souvenirs', 'เมนไทโกะ & ของฝาก'),
          place: L('Hakata Stn · Deitos / AMU', 'สถานีฮากาตะ · Deitos / AMU'),
          blurb: L('Spicy cod roe to take home, plus Hakata sweets — all under one roof at the station.',
                   'ไข่ปลาดองเผ็ดเป็นของฝาก พร้อมขนมฮากาตะ — ครบในที่เดียวที่สถานี'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Deitos',
                  notes: L('The Shokudo Mitsu fish market is closed on Sundays — do it another morning.', 'ตลาดปลา Shokudo Mitsu ปิดวันอาทิตย์ — ไปเช้าวันอื่นแทน') } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d10-ramen',
          title: L('Farewell ramen', 'ราเมงอำลา'),
          place: L('Hakata Station ramen street', 'ถนนราเมงในสถานีฮากาตะ'),
          blurb: L('One last bowl of tonkotsu before the city — the ramen street under the station has plenty to choose from.',
                   'ราเมงทงคตสึชามสุดท้ายก่อนลาเมือง — ถนนราเมงใต้สถานีมีให้เลือกหลายร้าน'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Ramen+Stadium' } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d10-canal',
          title: L('Last shopping run', 'ช้อปรอบสุดท้าย'),
          place: L('Canal City / Tenjin', 'คาแนลซิตี้ / เท็นจิน'),
          blurb: L('Pick up anything left on the list before the shops shut.',
                   'เก็บของที่เหลือในลิสต์ก่อนร้านปิด'),
          refs: { map: 'https://maps.google.com/?q=Canal+City+Hakata' } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'View', imageId: 'a-d10-illum',
          title: L('Final illumination stroll', 'เดินชมไฟประดับครั้งสุดท้าย'),
          place: L('Hakata Stn + Tenjin', 'สถานีฮากาตะ + เท็นจิน'),
          blurb: L('One more slow walk through the winter lights to close the trip.',
                   'เดินชมไฟประดับฤดูหนาวช้าๆ อีกครั้งเพื่อปิดทริป'),
          refs: { map: 'https://maps.google.com/?q=Tenjin+Illumination+Fukuoka' } },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d10-dinner',
          title: L('Hakata Yakitori', 'ยากิโทริฮากาตะ'),
          place: L('Skewers · tori-kawa & pork belly', 'ไม้ย่าง · โทริคาวะ & หมูสามชั้น'),
          blurb: L('A lively last dinner — Fukuoka-style yakitori with its signature crispy tori-kawa (rolled chicken skin) and buta-bara pork-belly skewers. Top-rated spots include Tori Kami.',
                   'มื้อค่ำสุดท้ายแบบครึกครื้น — ยากิโทริสไตล์ฟุกุโอกะ เด่นที่โทริคาวะ (หนังไก่ม้วนย่างกรอบ) และหมูสามชั้นเสียบไม้ · ร้านท็อปเช่น Tori Kami'),
          refs: { map: 'https://maps.google.com/?q=Hakata+yakitori+torikawa+Fukuoka', notes: L('Pair with a highball before the nightcap at Bar Gentle.', 'ซดไฮบอลคู่ไม้ย่าง ก่อนไปปิดท้ายที่ Bar Gentle') } },

        { type: 'feature', time: '21:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d10-nightlife',
          title: L('Bar Gentle — a quiet last drink', 'Bar Gentle — ดื่มเบาๆ ส่งท้าย'),
          place: L('Relaxed cocktail bar · Tenjin', 'บาร์ค็อกเทลชิลล์ · เท็นจิน'),
          blurb: L('Close the trip softly — a calm, sophisticated Tenjin bar for one well-made cocktail (or a nightcap beer) before the morning flight.',
                   'ปิดทริปแบบนุ่มๆ — บาร์เท็นจินบรรยากาศสงบ จิบค็อกเทลดีๆ สักแก้ว (หรือเบียร์ส่งท้าย) ก่อนบินเช้าพรุ่งนี้'),
          refs: { map: 'https://maps.google.com/?q=Bar+Gentle+Tenjin+Fukuoka', notes: L('Tenjin · intimate & relaxed · easy early night before flying.', 'เท็นจิน · เล็กอบอุ่น ชิลล์ · นอนเร็วก่อนบิน') } },

        { type: 'step', time: '23:30', meridiem: 'Night', kind: 'Walk', icon: 'walk',
          title: L('Pack & rest', 'เก็บกระเป๋า & พักผ่อน'),
          place: L('City hotel', 'โรงแรมในเมือง'),
          blurb: L('Pack tonight — the flight home leaves late morning tomorrow.',
                   'เก็บกระเป๋าคืนนี้ — เที่ยวบินกลับออกสายพรุ่งนี้'),
          refs: {} },
      ],
    },

    // ───────────────────────── DAY 11 · DEPARTURE ─────────────────────────
    {
      label: 'Day 11', labelTh: 'วันที่ 11', theme: 'ai',
      date: L('Monday · 14 Dec 2026', 'จันทร์ · 14 Dec 2026'),
      title: L('Homeward', 'เดินทางกลับ'),
      subtitle: L('Last Morning, Flight Home', 'เช้าสุดท้าย บินกลับบ้าน'),
      note: L(
        'A quick morning and a short subway ride — Fukuoka airport is right beside the city, so there is no long transfer before the flight home.',
        'เช้าสั้นๆ กับรถไฟใต้ดินไม่กี่นาที — สนามบินฟุกุโอกะอยู่ติดเมือง จึงไม่ต้องเดินทางไกลก่อนบินกลับ'
      ),
      coverId: 'day11-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out · city hotel', 'เช็คเอาท์ · โรงแรมในเมือง'),
          place: L('City base', 'ฐานในเมือง'),
          blurb: L('Settle up and head for the station with time to spare.',
                   'ชำระค่าที่พักและมุ่งสู่สถานีโดยมีเวลาเหลือ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+city+hotels' } },

        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Subway → Fukuoka Airport', 'รถไฟใต้ดิน → สนามบินฟุกุโอกะ'),
          place: L('Hakata → FUK · 6 min', 'ฮากาตะ → FUK · 6 นาที'),
          blurb: L('Two stops on the Kuko line straight to the international terminal shuttle.',
                   'นั่งสายคูโกะ 2 สถานีตรงสู่รถรับส่งอาคารระหว่างประเทศ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+Airport', booking: L('IC tap · ¥260', 'แตะ IC · ¥260') } },

        { type: 'step', time: '09:30', meridiem: 'Morning', kind: 'Departure', icon: 'passport',
          title: L('Check-in & emigration, FUK', 'เช็คอิน & ด่านขาออก, FUK'),
          place: L('International Departures', 'ผู้โดยสารขาออกระหว่างประเทศ'),
          blurb: L('Bags away, a last tax-free run, and a final konbini snack before the gate.',
                   'โหลดกระเป๋า ช้อปปลอดภาษีรอบสุดท้าย และของกินคอนบินิก่อนขึ้นเครื่อง'),
          refs: { reservation: { time: '11:40', code: 'TG-649', party: L('4 travellers · economy', '4 ท่าน · ชั้นประหยัด') } } },

        { type: 'step', time: '11:40', meridiem: 'Late morning', kind: 'Flight', icon: 'plane',
          title: L('Depart Fukuoka (FUK)', 'ออกเดินทางจากฟุกุโอกะ (FUK)'),
          place: L('FUK → Bangkok (BKK)', 'FUK → กรุงเทพฯ (BKK)'),
          blurb: L('Wheels up at midday — ten nights across Kyushu, complete.',
                   'เครื่องทะยานตอนเที่ยง — สิบคืนรอบคิวชู สมบูรณ์แล้ว'),
          refs: { official: 'https://www.thaiairways.com/',
                  notes: L('Thai Airways TG-649, economy, 6h — arrives Bangkok (BKK) 15:40 the same day. 23 kg checked baggage each.', 'การบินไทย TG-649 ชั้นประหยัด บิน 6 ชม. ถึงกรุงเทพฯ (BKK) 15:40 วันเดียวกัน · กระเป๋าโหลดคนละ 23 กก.') } },
      ],
    },
  ],
};

// Reference dock types — bilingual labels + icon names, in dock order.
const REF_TYPES = [
  { key: 'map', label: L('Directions', 'เส้นทาง'), icon: 'map', kind: 'link' },
  { key: 'official', label: L('Official site', 'เว็บไซต์ทางการ'), icon: 'external', kind: 'link' },
  { key: 'guide', label: L('Local guide', 'ไกด์ท้องถิ่น'), icon: 'book', kind: 'link' },
  { key: 'booking', label: L('Cost', 'ค่าใช้จ่าย'), icon: 'ticket', kind: 'text' },
  { key: 'reservation', label: L('Reservation', 'การจอง'), icon: 'clock', kind: 'reservation' },
  { key: 'notes', label: L('Notes', 'บันทึก'), icon: 'note', kind: 'text' },
];

// Token dictionary for short repeated strings (English source → Thai).
const TR = {
  // feature kinds
  Coffee: 'กาแฟ', Sweets: 'ของหวาน', Temple: 'วัด', Dining: 'ร้านอาหาร', Wander: 'เดินเล่น',
  Garden: 'สวน', Grove: 'ป่าไผ่', Journey: 'การเดินทาง',
  Park: 'สวนสาธารณะ', Run: 'วิ่ง', Shrine: 'ศาลเจ้า', Castle: 'ปราสาท', Market: 'ตลาด',
  View: 'จุดชมวิว', Lake: 'ทะเลสาบ', Ferry: 'เรือ', Nightlife: 'ยามค่ำคืน',
  // step kinds
  Flight: 'เที่ยวบิน', Luggage: 'ฝากกระเป๋า', Immigration: 'ตรวจคนเข้าเมือง', Ticket: 'ซื้อตั๋ว', Train: 'รถไฟ',
  Shinkansen: 'ชินคันเซ็น', Bus: 'รถบัส', Transfer: 'เดินทางต่อ', Walk: 'เดินเท้า',
  'Check-in': 'เช็คอิน', 'Check-out': 'เช็คเอาท์', Onsen: 'ออนเซ็น',
  Departure: 'เดินทางกลับ', Arrival: 'เดินทางถึง',
  // meridiems
  'Pre-dawn': 'ก่อนรุ่งสาง', Dawn: 'รุ่งอรุณ', Morning: 'ช่วงเช้า', 'Late morning': 'สายๆ',
  Midday: 'เที่ยงวัน', Afternoon: 'ช่วงบ่าย', Evening: 'ช่วงค่ำ', Night: 'กลางคืน',
  // UI
  Time: 'เวลา', Confirmation: 'เลขยืนยัน', Party: 'จำนวน',
};

const tx = (v, lang) => (v && typeof v === 'object' && 'en' in v ? (v[lang] || v.en) : v);
const tr = (s, lang) => (lang === 'th' ? (TR[s] || s) : s);

// ── Destination presentation (Overview screen) ──────────────────────────
const DESTINATION = {
  island: L('Kyushu', 'คิวชู'),
  islandNative: '九州',
  country: L('Japan', 'ญี่ปุ่น'),
  native: '日本',
  tagline: L('Volcano calderas, hidden onsen towns and a city of ramen — ten nights driving the southern island.',
             'ปากปล่องภูเขาไฟ เมืองออนเซนซ่อนตัว และเมืองแห่งราเมง — สิบคืนขับรถรอบเกาะใต้'),
  facts: [
    { k: L('Duration', 'ระยะเวลา'), v: L('11 days · 10 nights', '11 วัน · 10 คืน') },
    { k: L('Season', 'ฤดูกาล'), v: L('Early winter · December', 'ต้นฤดูหนาว · ธันวาคม') },
    { k: L('Currency', 'สกุลเงิน'), v: L('Japanese Yen · ¥', 'เยนญี่ปุ่น · ¥') },
    { k: L('Travel', 'การเดินทาง'), v: L('Self-drive loop', 'ขับรถวนเอง') },
  ],
  // route stops drive the animated map on the Overview screen; `day` = first day index (0-based)
  route: [
    { city: L('Fukuoka', 'ฟุกุโอกะ'), days: L('Base · Day 1 & 6–10', 'ฐาน · วันที่ 1 & 6–10'), day: 0, theme: 'kurogane', imageId: 'r-fukuoka', mx: 35.5, my: 13.5 },
    { city: L('Aso · Kurokawa', 'อาโซ · คุโรคาวะ'), days: L('Days 2–3', 'วันที่ 2–3'), day: 1, theme: 'hisui', imageId: 'r-aso', mx: 55.5, my: 36.5 },
    { city: L('Kumamoto', 'คุมาโมโตะ'), days: L('Day 3 · day trip', 'วันที่ 3 · ไป-กลับ'), day: 2, theme: 'kohaku', imageId: 'r-kumamoto', mx: 43.5, my: 47 },
    { city: L('Beppu', 'เบปปุ'), days: L('Day 4', 'วันที่ 4'), day: 3, theme: 'urushi', imageId: 'r-beppu', mx: 77, my: 21 },
    { city: L('Yufuin', 'ยูฟุอิน'), days: L('Days 4–5', 'วันที่ 4–5'), day: 4, theme: 'botan', imageId: 'r-yufuin', mx: 67.5, my: 29.5 },
    { city: L('Itoshima', 'อิโตชิมะ'), days: L('Day 8', 'วันที่ 8'), day: 7, theme: 'ai', imageId: 'r-itoshima', mx: 22, my: 21 },
  ],
};

// ── Travel party (placeholders — edit names/details; no phone/social by design) ──
const TRAVELERS = {
  title: L('The Party', 'ผู้ร่วมเดินทาง'),
  subtitle: L('Four travellers, one itinerary', 'สี่ผู้เดินทาง หนึ่งแผนการเดินทาง'),
  people: [
    { name: L('Nick', 'นิค'), role: L('Trip lead · planner', 'หัวหน้าทริป · ผู้วางแผน'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Driver', 'คนขับ'), imageId: 'p-nick' },
    { name: L('Bank', 'แบงค์'), role: L('Co-driver · navigator', 'คนขับสำรอง · นำทาง'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Maps & routes', 'แผนที่ & เส้นทาง'), imageId: 'p-bank' },
    { name: L('Tagot', 'ทาก็อต'), role: L('Food & reservations', 'อาหาร & การจอง'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Books the restaurants', 'จองร้านอาหาร'), imageId: 'p-tagot' },
    { name: L('P’Tum', 'พี่ตุ้ม'), role: L('Photographer', 'ช่างภาพ'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Budget & memories', 'ดูแลงบ & เก็บภาพ'), imageId: 'p-tum' },
  ],
};

// ── Emergency contacts ──────────────────────────────────────────────────
const EMERGENCY = {
  title: L('Emergency Contacts', 'เบอร์ติดต่อฉุกเฉิน'),
  subtitle: L('Keep these to hand throughout the trip', 'เก็บไว้ใกล้ตัวตลอดการเดินทาง'),
  items: [
    { label: L('Japan — Police', 'ญี่ปุ่น — ตำรวจ'), value: '110', icon: 'compass', urgent: true },
    { label: L('Japan — Ambulance / Fire', 'ญี่ปุ่น — รถพยาบาล / ดับเพลิง'), value: '119', icon: 'plus', urgent: true },
    { label: L('Royal Thai Embassy, Tokyo', 'สถานทูตไทย โตเกียว'), value: '+81 3 5789 2433', icon: 'pin' },
    { label: L('Japan Visitor Hotline · 24h', 'สายด่วนนักท่องเที่ยว · 24 ชม.'), value: '+81 50 3816 2787', icon: 'note' },
    { label: L('JAF road assistance', 'JAF ช่วยเหลือรถเสีย'), value: '#8139', icon: 'car' },
    { label: L('Travel insurance · 24h', 'ประกันเดินทาง · 24 ชม.'), value: '+66 2 257 8000', icon: 'book' },
  ],
};

// ── Budget (estimated, per person, Thai Baht) ───────────────────────────
const BUDGET = {
  title: L('Budget', 'งบประมาณ'),
  subtitle: L('Estimated · per person · Thai Baht', 'ประมาณการ · ต่อคน · เงินบาท'),
  currency: '฿',
  items: [
    { label: L('Flights — round trip (TG)', 'ตั๋วเครื่องบิน — ไป-กลับ (TG)'), amount: 30000 },
    { label: L('Accommodation — 10 nights', 'ที่พัก — 10 คืน'), amount: 45000 },
    { label: L('Car rental, fuel & tolls', 'ค่าเช่ารถ น้ำมัน & ทางด่วน'), amount: 12000 },
    { label: L('Food & dining', 'อาหาร & ร้านอาหาร'), amount: 28000 },
    { label: L('Attractions & onsen', 'สถานที่ & ออนเซน'), amount: 6000 },
    { label: L('Shopping & misc', 'ช้อปปิ้ง & เบ็ดเตล็ด'), amount: 14000 },
  ],
  total: 135000,
  note: L('Car cost is per person assuming the rental is split across the party. Excludes personal shopping beyond the estimate.',
          'ค่ารถคิดต่อคนโดยหารกันทั้งกลุ่ม ไม่รวมการช้อปปิ้งส่วนตัวที่เกินประมาณการ'),
};

// ── Convenience stores (konbini) nearest each stay ──────────────────────
const KONBINI = {
  title: L('Near Each Stay', 'ของจำเป็นใกล้ที่พัก'),
  subtitle: L('Konbini · pharmacy · hospital · Don Quijote', 'ร้านสะดวกซื้อ · ร้านยา · โรงพยาบาล · Don Quijote'),
  note: L('Handy spots within a short walk or drive of each stay — tap any to open in Maps.', 'จุดสำคัญใกล้ที่พักแต่ละคืน (เดินถึงหรือขับนิดเดียว) — แตะเพื่อเปิดในแผนที่'),
  areas: [
    { days: L('Day 01', 'วันที่ 01'), area: L('Tenjin · Daimyo', 'เท็นจิน · ไดเมียว'),
      stores: [
        { brand: '7-Eleven', detail: L('Tenjin / Daimyo · ~150 m', 'เท็นจิน / ไดเมียว · ~150 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Tenjin+Fukuoka' },
        { brand: 'Lawson', detail: L('Akasaka / Daimyo · ~200 m', 'อากาซากะ / ไดเมียว · ~200 ม.'), map: 'https://maps.google.com/?q=Lawson+Daimyo+Fukuoka' },
      ],
      pharmacy: [ { brand: 'Matsumoto Kiyoshi', detail: L('Drugstore · Tenjin', 'ร้านขายยา · เท็นจิน'), map: 'https://maps.google.com/?q=Matsumoto+Kiyoshi+Tenjin+Fukuoka' } ],
      hospital: [ { brand: 'Kyushu Medical Center', detail: L('24h emergency · ~2 km', 'ฉุกเฉิน 24 ชม. · ~2 กม.'), map: 'https://maps.google.com/?q=Kyushu+Medical+Center+Fukuoka' } ],
      donki: [ { brand: 'Don Quijote', detail: L('Tenjin · 24h', 'เท็นจิน · 24 ชม.'), map: 'https://maps.google.com/?q=Don+Quijote+Tenjin+Fukuoka' } ] },
    { days: L('Day 02–03', 'วันที่ 02–03'), area: L('Kurokawa · Oguni', 'คุโรคาวะ · โอกุนิ'),
      stores: [
        { brand: '7-Eleven', detail: L('Oguni town · ~10 min by car', 'เมืองโอกุนิ · ~10 นาทีโดยรถ'), map: 'https://maps.google.com/?q=7-Eleven+Oguni+Kumamoto' },
        { brand: 'Lawson', detail: L('Route 442 · ~12 min by car', 'เส้น 442 · ~12 นาทีโดยรถ'), map: 'https://maps.google.com/?q=Lawson+Oguni+Aso' },
      ],
      pharmacy: [ { brand: 'Cosmos', detail: L('Drugstore · Oguni · ~12 min', 'ร้านขายยา · โอกุนิ · ~12 นาที'), map: 'https://maps.google.com/?q=Cosmos+drugstore+Oguni+Kumamoto' } ],
      hospital: [ { brand: 'Oguni Public Hospital', detail: L('Nearest clinic/ER · ~12 min', 'คลินิก/ฉุกเฉินใกล้สุด · ~12 นาที'), map: 'https://maps.google.com/?q=Oguni+Public+Hospital+Kumamoto' } ] },
    { days: L('Day 04–05', 'วันที่ 04–05'), area: L('Yufuin', 'ยูฟุอิน'),
      stores: [
        { brand: 'Lawson', detail: L('Yufuin Stn · ~300 m', 'สถานียูฟุอิน · ~300 ม.'), map: 'https://maps.google.com/?q=Lawson+Yufuin+Station' },
        { brand: '7-Eleven', detail: L('Route 210 · ~600 m', 'เส้น 210 · ~600 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Yufuin' },
      ],
      pharmacy: [ { brand: 'Drugstore', detail: L('Yufuin centre · limited', 'ใจกลางยูฟุอิน · มีจำกัด'), map: 'https://maps.google.com/?q=drugstore+Yufuin' } ],
      hospital: [ { brand: 'Yufuin Hospital', detail: L('Nearest hospital', 'โรงพยาบาลใกล้สุด'), map: 'https://maps.google.com/?q=hospital+Yufuin' } ] },
    { days: L('Day 06–11', 'วันที่ 06–11'), area: L('Hakata · Nakasu', 'ฮากาตะ · นากาสึ'),
      stores: [
        { brand: '7-Eleven', detail: L('Hakata Stn · ~150 m', 'สถานีฮากาตะ · ~150 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Hakata+Station' },
        { brand: 'FamilyMart', detail: L('Canal City · ~200 m', 'คาแนลซิตี้ · ~200 ม.'), map: 'https://maps.google.com/?q=FamilyMart+Canal+City+Hakata' },
      ],
      pharmacy: [ { brand: 'Matsumoto Kiyoshi', detail: L('Drugstore · Tenjin', 'ร้านขายยา · เท็นจิน'), map: 'https://maps.google.com/?q=Matsumoto+Kiyoshi+Tenjin+Fukuoka' } ],
      hospital: [ { brand: 'Kyushu Medical Center', detail: L('24h emergency · ~2 km', 'ฉุกเฉิน 24 ชม. · ~2 กม.'), map: 'https://maps.google.com/?q=Kyushu+Medical+Center+Fukuoka' } ],
      donki: [ { brand: 'Don Quijote', detail: L('Nakasu / Tenjin · 24h', 'นากาสึ / เท็นจิน · 24 ชม.'), map: 'https://maps.google.com/?q=Don+Quijote+Tenjin+Fukuoka' } ] },
  ],
};

const CREDIT = 'Designed by 0xTnk';

// ── Per-day weather (indicative early-December Kyushu forecast) ───────────
const WEATHER = {
  note: L('Typical early-December conditions · highlands are colder · check the forecast before you travel',
          'สภาพอากาศโดยทั่วไปต้นเดือน ธ.ค. · บนภูเขาหนาวกว่า · เช็คพยากรณ์ก่อนเดินทาง'),
  days: {
    1:  { icon: 'cloudSun', hi: 14, lo: 7, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    2:  { icon: 'cloud',    hi: 8,  lo: 1, label: L('Cold highlands, flurries possible', 'ที่สูงหนาว อาจมีหิมะโปรย') },
    3:  { icon: 'cloudSun', hi: 13, lo: 4, label: L('Crisp, light cloud', 'เย็นสบาย มีเมฆบาง') },
    4:  { icon: 'cloudSun', hi: 14, lo: 6, label: L('Mild by the coast', 'อากาศดีริมชายฝั่ง') },
    5:  { icon: 'cloud',    hi: 10, lo: 2, label: L('Cold, misty valley', 'หนาว มีหมอกในหุบเขา') },
    6:  { icon: 'cloudSun', hi: 14, lo: 6, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    7:  { icon: 'cloudSun', hi: 14, lo: 6, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    8:  { icon: 'sun',      hi: 14, lo: 6, label: L('Bright by the sea', 'แดดดีริมทะเล') },
    9:  { icon: 'cloudSun', hi: 13, lo: 6, label: L('Mild, light cloud', 'อากาศดี มีเมฆบาง') },
    10: { icon: 'cloud',    hi: 13, lo: 7, label: L('Overcast, mild', 'ฟ้าครึ้ม อากาศสบาย') },
    11: { icon: 'cloudSun', hi: 14, lo: 7, label: L('Mild — travel day', 'อากาศดี — วันเดินทาง') },
  },
};

// ── Recommended dishes per dining venue (keyed by activity imageId) ─────
const MENUS = {
  'a-d2-cityrun': { items: [
    { name: L('① Start · Hotel Monterey (Daimyo)', '① ออกตัว · โรงแรมมอนเทอเรย์ (ไดเมียว)'), note: L('06:00 — warm up and head west through quiet Akasaka toward the park (~1.3 km).', '06:00 — วอร์มอัพ วิ่งไปทางตะวันตกผ่านอาคาซากะเงียบๆ สู่สวน (~1.3 กม.)'), map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka' },
    { name: L('② Ohori Park · 2 km lake loop', '② สวนโอโฮริ · ลู่วิ่งรอบบึง 2 กม.'), note: L('The flat yellow-rubber jogging track once around the lake — the running heart of the city.', 'ลู่วิ่งยางสีเหลืองทางเรียบ วิ่งรอบบึงหนึ่งรอบ — ลู่วิ่งหัวใจของเมือง'), map: 'https://maps.google.com/?q=Ohori+Park+jogging+course', signature: true },
    { name: L('③ Ukimido pavilion + island bridges', '③ ศาลาอุคิมิโด + สะพานข้ามเกาะ'), note: L('Cross the stone bridges to the island; the red Ukimido is the park symbol — the best photo/vlog spot, mist on the water at dawn.', 'ข้ามสะพานหินไปเกาะกลางบึง · ศาลาแดงอุคิมิโดคือสัญลักษณ์สวน — จุดถ่าย/vlog เด็ดสุด มีไอหมอกเหนือน้ำตอนเช้า'), map: 'https://maps.google.com/?q=Ukimido+Ohori+Park', signature: true },
    { name: L('④ Ohori Japanese Garden (run past)', '④ สวนญี่ปุ่นโอโฮริ (วิ่งผ่าน)'), note: L('Pass the garden wall on the south side (it opens later) to finish the lake loop.', 'วิ่งผ่านกำแพงสวนญี่ปุ่นด้านใต้ (เปิดสายกว่านี้) แล้ววิ่งจบรอบบึง'), map: 'https://maps.google.com/?q=Ohori+Park+Japanese+Garden' },
    { name: L('⑤ Fukuoka Castle ruins · Maizuru Park', '⑤ ซากปราสาทฟุกุโอกะ · สวนไมซุรุ'), note: L('Cross northeast and run up to the Tenshudai (keep base) for a sunrise panorama over the city + the old stone walls (~1.3 km).', 'ข้ามไปทางตะวันออกเฉียงเหนือ วิ่งขึ้นฐานหอปราสาท (เท็นชูได) ชมวิวเมืองยามอาทิตย์ขึ้น + กำแพงหินเก่า (~1.3 กม.)'), map: 'https://maps.google.com/?q=Fukuoka+Castle+Ruins+Tenshudai', signature: true },
    { name: L('⑥ Finish · coffee near the hotel', '⑥ เข้าเส้นชัย · กาแฟใกล้โรงแรม'), note: L('Easy jog back to Daimyo (~1.5 km), around 07:00. Manu Coffee Daimyo (by the hotel) opens 09:00; Starbucks Ohori Park (lakeside) ~08:00. At 7 am, a konbini coffee wraps the vlog.', 'จ็อกกลับไดเมียวสบายๆ (~1.5 กม.) ราว 07:00 · Manu Coffee ไดเมียว (ใกล้โรงแรม) เปิด 09:00; Starbucks โอโฮริ (ริมบึง) ~08:00 · ตอน 7 โมง กาแฟคอนบินิปิด vlog ได้เลย'), map: 'https://maps.google.com/?q=Manu+Coffee+Daimyo+Fukuoka' },
  ] },
  'a-d1-imdonut': { items: [
    { name: L('Original I’m Donut', 'ไอแอมโดนัทออริจินอล'), note: L('The famous fresh, fluffy raised donut.', 'โดนัทเนื้อนุ่มสดที่โด่งดัง'), signature: true },
    { name: L('Pistachio donut', 'โดนัทพิสตาชิโอ'), note: L('Nutty cream filling.', 'ไส้ครีมถั่วพิสตาชิโอ') },
    { name: L('Fuk Coffee latte', 'ลาเต้ Fuk Coffee'), note: L('With the Fukuoka latte art.', 'พร้อมลาเต้อาร์ตรูปฟุกุโอกะ') },
  ] },
  'a-d1-ramen': { items: [
    { name: L('Shiromaru Motoaji', 'ชิโรมารุ โมโตอาจิ'), note: L('The original classic tonkotsu — silky broth, ultra-thin noodles.', 'ทงคตสึคลาสสิกดั้งเดิม — น้ำซุปเนียน เส้นบางพิเศษ'), signature: true },
    { name: L('Akamaru Shinaji', 'อากามารุ ชินอาจิ'), note: L('Tonkotsu refined with special miso paste and fragrant garlic oil.', 'ทงคตสึปรุงด้วยมิโซะพิเศษและน้ำมันกระเทียมหอม'), signature: true },
    { name: L('Karaka-men', 'คาราคะเม็ง'), note: L('The spicy version with minced pork and miso.', 'เวอร์ชันเผ็ดใส่หมูสับและมิโซะ') },
    { name: L('Hakata Hitokuchi Gyoza', 'เกี๊ยวฮากาตะคำเล็ก'), note: L('Bite-size pan-fried gyoza on the side.', 'เกี๊ยวทอดคำเล็กกินคู่') },
  ] },
  'a-d1-motsunabe': { items: [
    { name: L('Soy-broth motsunabe', 'โมทสึนาเบะน้ำซีอิ๊ว'), note: L('Beef offal hotpot with garlic and leek.', 'หม้อไฟเครื่องในวัว กระเทียม ต้นหอม'), signature: true },
    { name: L('Miso-broth motsunabe', 'โมทสึนาเบะน้ำมิโซะ'), note: L('Richer, slightly sweet version.', 'รสเข้มข้นหวานเล็กน้อย') },
    { name: L('Champon noodles', 'เส้นจัมปง'), note: L('Add noodles to the broth at the end.', 'ใส่เส้นลงในน้ำซุปตอนท้าย') },
    { name: L('Mentaiko tamagoyaki', 'ไข่ม้วนเมนไทโกะ'), note: L('Rolled omelette with spicy cod roe.', 'ไข่ม้วนสอดไส้ไข่ปลาเผ็ด') },
  ] },
  'a-d2-starbucks': { items: [
    { name: L('Seasonal latte', 'ลาเต้ตามฤดู'), note: L('Enjoy inside the woven-cedar interior.', 'จิบในร้านไม้ซีดาร์สาน'), signature: true },
    { name: L('Umegae mochi (nearby)', 'อุเมะกาเอะโมจิ (ใกล้ๆ)'), note: L('Grilled red-bean rice cake from the approach street.', 'โมจิย่างไส้ถั่วแดงจากถนนทางเข้า') },
    { name: L('Matcha frappuccino', 'มัทฉะฟรัปปูชิโน'), note: L('A green-tea cold blend.', 'เครื่องดื่มปั่นชาเขียวเย็น') },
  ] },
  'a-d2-yatai': { items: [
    { name: L('Yakitori skewers', 'ยากิโทริเสียบไม้'), note: L('Charcoal-grilled chicken off the cart.', 'ไก่ย่างถ่านจากแผงรถเข็น'), signature: true },
    { name: L('Tonkotsu ramen', 'ราเมงทงคตสึ'), note: L('A small late-night bowl.', 'ราเมงชามเล็กดึกๆ') },
    { name: L('Oden', 'โอเด้ง'), note: L('Simmered radish, egg and fishcake.', 'หัวไชเท้า ไข่ และลูกชิ้นปลาต้ม') },
    { name: L('Mentai tamagoyaki', 'ไข่ม้วนเมนไทโกะ'), note: L('A yatai favourite.', 'เมนูยอดฮิตของยาไต') },
  ] },
  'a-d3-kaiseki': { items: [
    { name: L('Kumamoto wagyu', 'วากิวคุมาโมโตะ'), note: L('Local marbled beef, grilled or in hot pot.', 'เนื้อลายหินอ่อนท้องถิ่น ย่างหรือใส่หม้อไฟ'), signature: true },
    { name: L('River fish shioyaki', 'ปลาแม่น้ำย่างเกลือ'), note: L('Salt-grilled on the bone.', 'ย่างเกลือทั้งตัว') },
    { name: L('Seasonal sakizuke', 'ของเรียกน้ำย่อยตามฤดู'), note: L('The chef’s opening bite.', 'จานเปิดจากเชฟ') },
    { name: L('Mountain-vegetable nimono', 'ผักภูเขาต้มนิโมโนะ'), note: L('Simmered winter sansai.', 'ผักป่าซันไซหน้าหนาวต้ม') },
  ] },
  'a-d4-katsuretsu': { items: [
    { name: L('Loin tonkatsu set', 'เซ็ตทงคตสึสันนอก'), note: L('Thick juicy cutlet with cabbage.', 'ทงคตสึชิ้นหนาฉ่ำเสิร์ฟกับกะหล่ำ'), signature: true },
    { name: L('Fillet tonkatsu', 'ทงคตสึสันใน'), note: L('Leaner, very tender.', 'เนื้อล้วนนุ่มมาก') },
    { name: L('Kuruma-ebi fry', 'กุ้งคุรุมะทอด'), note: L('Crisp prawn cutlet.', 'กุ้งชุบทอดกรอบ') },
    { name: L('Pork-cutlet sandwich', 'แซนด์วิชหมูทอด'), note: L('Katsu-sando to take away.', 'คัตสึซานโดสำหรับซื้อกลับ') },
  ] },
  'a-d4-basashi': { items: [
    { name: L('Lean basashi', 'บาซาชิเนื้อแดง'), note: L('Classic horse sashimi with ginger and soy.', 'ม้าดิบส่วนเนื้อแดงเสิร์ฟกับขิงและซีอิ๊ว'), signature: true },
    { name: L('Fatty (toro) basashi', 'บาซาชิติดมัน (โทโร)'), note: L('Marbled cut that melts on the tongue.', 'ส่วนติดมันลายหินอ่อน ละลายในปาก') },
    { name: L('Karashi renkon', 'รากบัวยัดมัสตาร์ดทอด'), note: L('Kumamoto lotus root with mustard.', 'รากบัวคุมาโมโตะยัดมัสตาร์ด') },
    { name: L('Taipi-en', 'ไทปีเอ็น'), note: L('Glass-noodle soup, a Kumamoto staple.', 'ซุปวุ้นเส้น อาหารคู่คุมาโมโตะ') },
  ] },
  'a-d5-sushi': { items: [
    { name: L('Bungo-bay sashimi', 'ซาชิมิอ่าวบุงโกะ'), note: L('Daily catch from the strait.', 'ปลาสดประจำวันจากช่องแคบ'), signature: true },
    { name: L('Seki-saba', 'ปลาซาบะเซกิ'), note: L('Prized mackerel from the Bungo channel.', 'ปลาซาบะชั้นดีจากช่องบุงโกะ') },
    { name: L('Toriten', 'โทริเท็น'), note: L('Oita-style chicken tempura.', 'ไก่เทมปุระสไตล์โออิตะ') },
    { name: L('Aji nigiri', 'นิงิริปลาทู'), note: L('Horse mackerel, very fresh.', 'ปลาทูม้า สดมาก') },
  ] },
  'a-d6-mabushi': { items: [
    { name: L('Bungo beef mabushi', 'มาบุชิเนื้อบุงโกะ'), note: L('Grilled beef over rice, eaten three ways.', 'เนื้อย่างราดข้าว กินได้สามแบบ'), signature: true },
    { name: L('Jidori chicken mabushi', 'มาบุชิไก่จิโดริ'), note: L('Free-range local chicken version.', 'แบบไก่บ้านเลี้ยงปล่อย') },
    { name: L('Dashi pour-over', 'ราดน้ำดาชิ'), note: L('Finish the last third as ochazuke.', 'กินส่วนสุดท้ายแบบโอชาสึเกะ') },
    { name: L('Yufuin pudding', 'พุดดิ้งยูฟุอิน'), note: L('A famous local dessert.', 'ของหวานขึ้นชื่อท้องถิ่น') },
  ] },
  'a-d6-ryokan': { items: [
    { name: L('Seasonal sakizuke', 'ของเรียกน้ำย่อยตามฤดู'), note: L('The chef’s opening course.', 'คอร์สเปิดจากเชฟ') },
    { name: L('Bungo wagyu shabu', 'ชาบูวากิวบุงโกะ'), note: L('Local beef swished in broth.', 'เนื้อท้องถิ่นลวกในน้ำซุป'), signature: true },
    { name: L('Grilled river fish', 'ปลาน้ำจืดย่าง'), note: L('Salt-grilled, on the bone.', 'ย่างเกลือทั้งตัว') },
    { name: L('Winter vegetable nimono', 'ผักหน้าหนาวต้มนิโมโนะ'), note: L('Simmered until tender.', 'ต้มจนนุ่ม') },
  ] },
  'a-d7-tempura': { items: [
    { name: L('Prawn tempura', 'เทมปุระกุ้ง'), note: L('Fried to order at the counter.', 'ทอดสดที่เคาน์เตอร์'), signature: true },
    { name: L('Seasonal vegetable tempura', 'เทมปุระผักตามฤดู'), note: L('Whatever is best that day.', 'ผักที่ดีที่สุดของวัน') },
    { name: L('Anago tempura', 'เทมปุระปลาไหลทะเล'), note: L('Light, crisp sea eel.', 'ปลาไหลทะเลทอดเบากรอบ') },
    { name: L('Tempura over rice', 'เทมปุระราดข้าว'), note: L('Tendon to finish.', 'เท็นด้งปิดท้าย') },
  ] },
  'a-d8-oyster': { items: [
    { name: L('Grilled oysters', 'หอยนางรมเผา'), note: L('Plump local oysters grilled in the shell.', 'หอยนางรมท้องถิ่นตัวอ้วนเผาทั้งเปลือก'), signature: true },
    { name: L('Grilled scallops', 'หอยเชลล์เผา'), note: L('With butter and soy.', 'ราดเนยและซีอิ๊ว') },
    { name: L('Sazae turban shell', 'หอยซาซาเอะ'), note: L('Grilled spiral shellfish.', 'หอยเผาตัวเกลียว') },
    { name: L('Oyster rice', 'ข้าวหอยนางรม'), note: L('Kaki-meshi to finish.', 'คากิเมชิปิดท้าย') },
  ] },
  'a-d9-yakiniku': { items: [
    { name: L('Kuroge wagyu set', 'เซ็ตวากิวคุโรเกะ'), note: L('Assorted premium grilling cuts.', 'เนื้อย่างพรีเมียมหลายส่วน'), signature: true },
    { name: L('Harami skirt steak', 'เนื้อส่วนฮารามิ'), note: L('Juicy diaphragm cut.', 'เนื้อกะบังลมฉ่ำ') },
    { name: L('Tongue (tan) salt', 'ลิ้นวัวเกลือ'), note: L('Grilled with lemon.', 'ย่างเสิร์ฟกับมะนาว') },
    { name: L('Cold noodles (reimen)', 'เรเม็ง (เส้นเย็น)'), note: L('To finish the meal.', 'ปิดท้ายมื้อ') },
  ] },
  'a-d10-ramen': { items: [
    { name: L('Tonkotsu ramen', 'ราเมงทงคตสึ'), note: L('One last classic Hakata bowl.', 'ราเมงฮากาตะคลาสสิกชามสุดท้าย'), signature: true },
    { name: L('Spicy mentai ramen', 'ราเมงเมนไทเผ็ด'), note: L('With spicy cod roe.', 'ใส่ไข่ปลาเผ็ด') },
    { name: L('Kaedama', 'คาเอดามะ (เพิ่มเส้น)'), note: L('Extra noodles for the broth.', 'เพิ่มเส้นสำหรับน้ำซุป') },
    { name: L('Gyoza', 'เกี๊ยวซ่า'), note: L('Bite-size Hakata dumplings.', 'เกี๊ยวฮากาตะคำเล็ก') },
  ] },
  'a-d1-canalcity': { items: [
    { name: L('GU · Mina Tenjin 2F', 'GU · มินะ เท็นจิน ชั้น 2'), note: L('Only full-lineup GU in Kyushu (Tenjin).', 'GU เต็มไลน์ที่เดียวในคิวชู (เท็นจิน)'), map: 'https://maps.google.com/?q=GU+Mina+Tenjin+Fukuoka', signature: true },
    { name: L('On · Super Sports Xebio', 'On · ซูเปอร์สปอร์ต Xebio'), note: L('On / On Cloud running shoes — Tenjin.', 'รองเท้าวิ่ง On / On Cloud — เท็นจิน'), map: 'https://maps.google.com/?q=Super+Sports+Xebio+Tenjin+Fukuoka', signature: true },
    { name: L('MUJI flagship', 'MUJI แฟลกชิป'), note: L('Two-floor flagship — MUJI BOOKS + Found MUJI.', 'แฟลกชิป 2 ชั้น — MUJI BOOKS + Found MUJI'), map: 'https://maps.google.com/?q=MUJI+Canal+City+Hakata' },
    { name: L('Uniqlo', 'ยูนิโคล่'), note: L('Large anchor store on 1F.', 'ร้านใหญ่ชั้น 1'), map: 'https://maps.google.com/?q=Uniqlo+Canal+City+Hakata' },
    { name: L('Ramen Stadium', 'ราเมงสเตเดียม'), note: L('Eight regional ramen shops, 5F.', 'ราเมง 8 เจ้า ชั้น 5'), map: 'https://maps.google.com/?q=Ramen+Stadium+Canal+City+Hakata' },
    { name: L('Fountain show', 'โชว์น้ำพุ'), note: L('Canal-side water & light show.', 'โชว์น้ำพุ-แสงริมคลอง'), map: 'https://maps.google.com/?q=Canal+City+Hakata' },
  ] },
  'a-d7-shopping': { items: [
    { name: L('GU · Mina Tenjin 2F', 'GU · มินะ เท็นจิน ชั้น 2'), note: L('Only full-lineup GU in Kyushu (Tenjin).', 'GU เต็มไลน์ที่เดียวในคิวชู (เท็นจิน)'), map: 'https://maps.google.com/?q=GU+Mina+Tenjin+Fukuoka', signature: true },
    { name: L('On · Super Sports Xebio', 'On · ซูเปอร์สปอร์ต Xebio'), note: L('On / On Cloud running shoes — Tenjin.', 'รองเท้าวิ่ง On / On Cloud — เท็นจิน'), map: 'https://maps.google.com/?q=Super+Sports+Xebio+Tenjin+Fukuoka', signature: true },
    { name: L('Mina Tenjin', 'มินะ เท็นจิน'), note: L('Biggest Uniqlo in Kyushu + Loft + full-lineup GU (2F).', 'Uniqlo ใหญ่สุดในคิวชู + Loft + GU เต็มไลน์ (ชั้น 2)'), map: 'https://maps.google.com/?q=Mina+Tenjin+Fukuoka', signature: true },
    { name: L('Fukuoka PARCO', 'ฟุกุโอกะ พาร์โก'), note: L('Youth fashion · Onitsuka Tiger 3F.', 'แฟชั่นวัยรุ่น · Onitsuka Tiger ชั้น 3'), map: 'https://maps.google.com/?q=Fukuoka+PARCO' },
    { name: L('Solaria Plaza', 'โซลาเรีย พลาซ่า'), note: L('Young fashion complex by Tenjin station.', 'ห้างแฟชั่นวัยรุ่นข้างสถานีเท็นจิน'), map: 'https://maps.google.com/?q=Solaria+Plaza+Fukuoka' },
    { name: L('Tenjin Chikagai', 'เท็นจิน ชิกางาอิ'), note: L('Underground mall linking Daimaru / Mitsukoshi.', 'ห้างใต้ดินเชื่อม Daimaru / Mitsukoshi'), map: 'https://maps.google.com/?q=Tenjin+Chikagai' },
  ] },
  'a-d9-daimyo': { items: [
    { name: L('GU · Mina Tenjin 2F', 'GU · มินะ เท็นจิน ชั้น 2'), note: L('Only full-lineup GU in Kyushu (Tenjin).', 'GU เต็มไลน์ที่เดียวในคิวชู (เท็นจิน)'), map: 'https://maps.google.com/?q=GU+Mina+Tenjin+Fukuoka', signature: true },
    { name: L('On · Super Sports Xebio', 'On · ซูเปอร์สปอร์ต Xebio'), note: L('On / On Cloud running shoes — Tenjin.', 'รองเท้าวิ่ง On / On Cloud — เท็นจิน'), map: 'https://maps.google.com/?q=Super+Sports+Xebio+Tenjin+Fukuoka', signature: true },
    { name: L('Onitsuka Tiger · PARCO 3F', 'Onitsuka Tiger · พาร์โก ชั้น 3'), note: L('Classic Japanese sneakers.', 'สนีกเกอร์คลาสสิกญี่ปุ่น'), map: 'https://maps.google.com/?q=Onitsuka+Tiger+Fukuoka+PARCO' },
    { name: L('Daimyo boutiques', 'ร้านบูทีกไดเมียว'), note: L('Indie sneaker & streetwear lanes.', 'ตรอกร้านสนีกเกอร์/สตรีทแวร์อิสระ'), map: 'https://maps.google.com/?q=Daimyo+Fukuoka' },
    { name: L('BOOKOFF · Mina Tenjin 7F', 'BOOKOFF · มินะ เท็นจิน ชั้น 7'), note: L('Second-hand sneaker corner.', 'มุมสนีกเกอร์มือสอง'), map: 'https://maps.google.com/?q=BOOKOFF+Mina+Tenjin' },
  ] },
  'a-d10-canal': { items: [
    { name: L('MUJI / Uniqlo · Canal City', 'MUJI / Uniqlo · คาแนลซิตี้'), note: L('Last call on the Hakata side.', 'รอบสุดท้ายฝั่งฮากาตะ'), map: 'https://maps.google.com/?q=Canal+City+Hakata', signature: true },
    { name: L('Mina Tenjin (GU)', 'มินะ เท็นจิน (GU)'), note: L('Back for GU / Uniqlo if needed.', 'กลับไป GU / Uniqlo ถ้ายังเหลือ'), map: 'https://maps.google.com/?q=Mina+Tenjin+Fukuoka' },
    { name: L('Daimyo', 'ไดเมียว'), note: L('One last sneaker hunt · shops close ~21:00.', 'ตามล่าสนีกเกอร์รอบสุดท้าย · ร้านปิด ~21:00'), map: 'https://maps.google.com/?q=Daimyo+Fukuoka' },
  ] },
  'a-d3-sweets': { items: [
    { name: L('Aso milk soft serve', 'ซอฟต์ครีมนมอาโซ'), note: L('Rich, milky soft cream from grass-fed Aso dairy.', 'ซอฟต์ครีมนมสดเข้มข้นจากวัวเลี้ยงปล่อยอาโซ'), signature: true },
    { name: L('Aso milk pudding', 'พุดดิ้งนมอาโซ'), note: L('Silky custard pudding made with Aso milk.', 'พุดดิ้งคัสตาร์ดเนียนนุ่มจากนมอาโซ') },
    { name: L('Bottled Aso milk', 'นมอาโซขวด'), note: L('Fresh local milk — great for the road.', 'นมสดท้องถิ่น พกขึ้นรถได้') },
  ] },
  'a-d4-sweets': { items: [
    { name: L('Classic ikinari dango', 'อิคินาริดังโงะคลาสสิก'), note: L('Steamed dough over sweet potato and sweet red-bean paste.', 'แป้งนึ่งห่อมันหวานกับถั่วแดงกวน'), signature: true },
    { name: L('Mugwort (yomogi) dango', 'ดังโงะใบโยโมงิ'), note: L('Fragrant green-herb dough version.', 'แป้งสีเขียวหอมใบโยโมงิ') },
    { name: L('Honey castella', 'คาสเทลล่าน้ำผึ้ง'), note: L('Soft sponge cake — another Kyushu sweet to pair.', 'เค้กสปันจ์นุ่ม ของหวานคิวชูอีกอย่าง') },
  ] },
  'a-d5-sweets': { items: [
    { name: L('Classic Beppu purin', 'พุดดิ้งเบปปุคลาสสิก'), note: L('Firm, eggy custard pudding with bitter caramel.', 'พุดดิ้งคัสตาร์ดไข่เนื้อแน่น ราดคาราเมลขมนิดๆ'), signature: true },
    { name: L('Jigoku-mushi purin', 'พุดดิ้งนึ่งบ่อนรก'), note: L('Steamed over the natural hot-spring jigoku.', 'นึ่งด้วยไอน้ำจากบ่อน้ำพุร้อนธรรมชาติ'), signature: true },
    { name: L('Purin a la mode', 'พุดดิ้งอะลาโหมด'), note: L('Pudding topped with cream and fruit.', 'พุดดิ้งราดครีมและผลไม้') },
  ] },
  'a-d6-sweets': { items: [
    { name: L('B-speak P-roll', 'B-speak P-roll'), note: L('The famous melt-in-the-mouth Swiss roll cake.', 'โรลเค้กละลายในปากชื่อดัง'), signature: true },
    { name: L('Milch cheese tart (warm)', 'ชีสทาร์ต Milch (อุ่น)'), note: L('German-style mini cheesecake from local milk — best warm.', 'ชีสเค้กชิ้นเล็กสไตล์เยอรมันจากนมท้องถิ่น อร่อยตอนอุ่น'), signature: true },
    { name: L('Milch cheese tart (cold)', 'ชีสทาร์ต Milch (เย็น)'), note: L('The chilled version — firmer and creamier.', 'แบบแช่เย็น เนื้อแน่นครีมมี่กว่า') },
    { name: L('Kinrin Lake croquette', 'โครเก็ตต์ริมบึงคินริน'), note: L('A savoury snack by the lake for a break.', 'ของว่างคาวริมบึง เผื่ออยากสลับ') },
  ] },
  'a-d9-sweets': { items: [
    { name: L('Seasonal fruit parfait', 'พาร์เฟต์ผลไม้ตามฤดู'), note: L('Towers of seasonal fruit, cream and jelly — the signature.', 'ผลไม้ตามฤดู ครีม และเยลลีจัดเป็นชั้น — เมนูซิกเนเจอร์'), signature: true },
    { name: L('Fluffy fruit pancakes', 'แพนเค้กผลไม้ฟูๆ'), note: L('Souffle-style pancakes piled with fruit.', 'แพนเค้กสไตล์ซูเฟล่ โปะผลไม้') },
    { name: L('Fruit sandwich', 'แซนด์วิชผลไม้'), note: L('Cream and fresh fruit in soft milk bread.', 'ครีมและผลไม้สดในขนมปังนมนุ่ม') },
  ] },
};

// ── Pre-trip essentials (Overview quick row) ────────────────────────────
const ESSENTIALS = {
  currency: {
    label: L('Exchange rate', 'อัตราแลกเปลี่ยน'),
    base: '¥100',
    value: '฿22.6',
    note: L('Indicative only', 'โดยประมาณ'),
  },
  visitJapan: {
    label: 'Visit Japan Web',
    desc: L('Immigration & customs — register before you fly', 'ตม. และศุลกากร — ลงทะเบียนก่อนเดินทาง'),
    href: 'https://www.vjw.digital.go.jp/',
  },
};

// ── Before-you-fly checklist (Overview) ─────────────────────────────────
const PACKING = {
  title: L('Before You Fly', 'เตรียมตัวก่อนเดินทาง'),
  subtitle: L('Pack & prepare', 'จัดกระเป๋าและเตรียมพร้อม'),
  groups: [
    { label: L('Documents', 'เอกสาร'), items: [
      L('Passport · 6+ months valid', 'พาสปอร์ต · เหลืออายุ 6 เดือนขึ้นไป'),
      L('Visit Japan Web QR saved', 'บันทึก QR จาก Visit Japan Web'),
      L('International Driving Permit (IDP)', 'ใบขับขี่สากล (IDP)'),
      L('Flight, hotel & car confirmations', 'ใบยืนยันเที่ยวบิน โรงแรม และรถเช่า'),
      L('Travel insurance card', 'บัตรประกันการเดินทาง'),
    ] },
    { label: L('Money & Connectivity', 'เงินและการเชื่อมต่อ'), items: [
      L('Some yen in cash (yatai are cash-only)', 'เงินเยนสด (ยาไตรับเงินสด)'),
      L('Cards enabled for overseas', 'เปิดใช้บัตรในต่างประเทศ'),
      L('eSIM or pocket Wi-Fi', 'eSIM หรือ pocket Wi-Fi'),
      L('IC card · Suica / ICOCA', 'บัตร IC · Suica / ICOCA'),
    ] },
    { label: L('Winter & Driving', 'หน้าหนาว & การขับรถ'), items: [
      L('Warm coat · 5–15°C (colder in the highlands)', 'เสื้อโค้ตกันหนาว · 5–15°C (บนภูเขาหนาวกว่า)'),
      L('Gloves & hat for Aso / Yufuin', 'ถุงมือ & หมวกสำหรับอาโซ / ยูฟุอิน'),
      L('Comfortable walking shoes', 'รองเท้าเดินสบาย'),
      L('Request snow tyres + ETC card', 'ขอยางหน้าหนาว + บัตร ETC'),
      L('Power adapter · Type A', 'ปลั๊กแปลง · Type A'),
    ] },
  ],
};

// ── Useful Japanese phrases (Overview) ──────────────────────────────────
const PHRASES = {
  title: L('Useful Phrases', 'ประโยคที่ใช้บ่อย'),
  subtitle: L('A few words go a long way', 'พูดได้นิดหน่อยก็ช่วยได้มาก'),
  items: [
    { jp: 'こんにちは', romaji: 'Konnichiwa', mean: L('Hello', 'สวัสดี') },
    { jp: 'ありがとう', romaji: 'Arigatō', mean: L('Thank you', 'ขอบคุณ') },
    { jp: 'すみません', romaji: 'Sumimasen', mean: L('Excuse me / sorry', 'ขอโทษ / ขอทาง') },
    { jp: 'いくらですか', romaji: 'Ikura desu ka', mean: L('How much is it?', 'ราคาเท่าไหร่') },
    { jp: 'おいしい', romaji: 'Oishii', mean: L('Delicious', 'อร่อย') },
    { jp: 'お願いします', romaji: 'Onegai shimasu', mean: L('Please', 'ขอ / ได้โปรด') },
    { jp: '英語のメニュー', romaji: 'Eigo no menyū', mean: L('English menu, please', 'ขอเมนูภาษาอังกฤษ') },
    { jp: '駅はどこですか', romaji: 'Eki wa doko desu ka', mean: L('Where is the station?', 'สถานีอยู่ที่ไหน') },
  ],
};

Object.assign(window, { TRIP, REF_TYPES, TR, tx, tr, DESTINATION, TRAVELERS, EMERGENCY, BUDGET, KONBINI, ESSENTIALS, WEATHER, MENUS, PACKING, PHRASES, CREDIT });

// data.jsx - Fukuoka × Kyushu itinerary (bilingual EN / TH), self-drive.
// Trip: 21-29 Nov 2026 - 8 nights - WWN - World Wide Nick.
// Two entry kinds:
//   * feature -> big hero image + caption + reference dock (sightseeing, dining)
//   * step    -> compact logistics row with a line-icon (flights, car, transit, check-in)
// Each day carries its own dark `theme` and a `date`. Built to the Content Template.
const L = (en, th, ja) => ({ en, th, ja });

const TRIP = {
  title: L('Kyushu', 'คิวชู'),
  subtitle: L('Eight Nights Around the Southern Island', 'แปดคืนรอบเกาะใต้'),
  dates: L('21 - 29 Nov 2026', '21 - 29 Nov 2026'),
  meta: L('Autumn Colours - Onsen & Illuminations', 'ใบไม้เปลี่ยนสี - ออนเซนและไฟประดับ'),
  origin: L('A self-drive itinerary', 'แผนการเดินทางขับรถเอง'),
  coverId: 'cover-hero',
  days: [
    {
      label: 'Day 01', labelTh: 'วันที่ 01', theme: 'kurogane',
      date: L('Saturday - 21 Nov 2026', 'เสาร์ - 21 Nov 2026'),
      title: L('Fukuoka', 'ฟุกุโอกะ'),
      subtitle: L('Arrival & the First Bowl', 'วันเดินทางถึง & ราเมงชามแรก'),
      note: L(
        'The overnight flight from Bangkok lands at dawn. Ease into Hakata on little sleep - a donut, a bowl of tonkotsu ramen, the first illuminations of the season at night, and motsunabe to close.',
        'เที่ยวบินกลางคืนจากกรุงเทพฯ ถึงตอนเช้า ค่อยๆ เริ่มวันแรกที่ฮากาตะแบบไม่รีบ - โดนัทร้านดัง ราเมงทงคตสึ ไฟประดับชุดแรกของฤดูยามค่ำ และปิดท้ายด้วยโมทสึนาเบะ'
      ),
      coverId: 'day1-cover',
      visitJapan: true,
      activities: [
        { type: 'step', time: '01:50', meridiem: 'Pre-dawn', kind: 'Flight', icon: 'plane',
          title: L('Depart Bangkok (DMK)', 'ออกเดินทางจากกรุงเทพฯ (DMK)'),
          place: L('Don Mueang - FD-736 to Fukuoka', 'ดอนเมือง - FD-736 สู่ฟุกุโอกะ'),
          blurb: L('Thai AirAsia FD-736 lifts off at 01:50 - an overnight 5h 05m flight, landing Fukuoka 08:55.',
                   'ไทยแอร์เอเชีย FD-736 ออก 01:50 - บินกลางคืน 5 ชม. 5 น. ถึงฟุกุโอกะ 08:55'),
          refs: { reservation: { time: '01:50', code: 'FD-736', party: L('4 travellers - economy', '4 ท่าน - ชั้นประหยัด') }, notes: L('Be at Don Mueang Terminal 1 by ~23:00 the night before - check-in opens ~3h prior - checked baggage is a paid add-on, confirm your allowance on the booking.', 'ไปถึงดอนเมือง อาคาร 1 ~23:00 ของคืนก่อน - เคาน์เตอร์เปิด ~3 ชม.ก่อนบิน - กระเป๋าโหลดเป็นบริการเสริมที่ต้องซื้อ เช็กน้ำหนักในบุ๊กกิ้งอีกที') } },

        { type: 'step', time: '08:55', meridiem: 'Morning', kind: 'Arrival', icon: 'plane',
          title: L('Land at Fukuoka (FUK)', 'ถึงสนามบินฟุกุโอกะ (FUK)'),
          place: L('Thai AirAsia FD-736 - from Bangkok', 'ไทยแอร์เอเชีย FD-736 - จากกรุงเทพฯ'),
          blurb: L('Departs Bangkok (DMK) 01:50 - a 5h 05m red-eye in economy, landing at Fukuoka 08:55.',
                   'ออกจากกรุงเทพฯ (DMK) 01:50 บินกลางคืน 5 ชม. 5 น. ชั้นประหยัด ถึงฟุกุโอกะ 08:55'),
          refs: { notes: L('Have the Visit Japan Web QR ready before the hall.', 'เตรียม QR จาก Visit Japan Web ให้พร้อมก่อนถึงห้องตรวจ') } },

        { type: 'step', time: '09:20', meridiem: 'Morning', kind: 'Immigration', icon: 'passport',
          title: L('Pass immigration', 'ผ่านด่านตรวจคนเข้าเมือง', '入国審査'),
          place: L('FUK Arrivals Hall - scan the QR', 'ห้องผู้โดยสารขาเข้า FUK - สแกน QR'),
          blurb: L('Scan your Visit Japan Web QR, collect your bags, then clear the green customs channel. FUK is small - usually under 30 minutes.',
                   'สแกน QR จาก Visit Japan Web รับกระเป๋า แล้วผ่านช่องศุลกากรสีเขียว - FUK เล็ก ปกติไม่ถึง 30 นาที'),
          refs: { notes: L('Set up your Visit Japan Web QR before you fly - see the box at the top of the day.', 'ตั้งค่า QR จาก Visit Japan Web ให้พร้อมก่อนบิน - ดูกล่องด้านบนสุดของวัน') } },

        { type: 'step', time: '09:50', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Subway -> Tenjin', 'รถไฟใต้ดิน -> เท็นจิน'),
          place: L('FUK Airport -> Tenjin Stn - 11 min', 'สนามบิน FUK -> สถานีเท็นจิน - 11 นาที'),
          blurb: L('Fukuoka airport sits right beside the city - straight to Tenjin on the airport line, a minute from the hotel.',
                   'สนามบินฟุกุโอกะอยู่ติดเมือง นั่งสายสนามบินตรงถึงเท็นจิน ห่างโรงแรมแค่นาทีเดียว'),
          refs: { map: 'https://maps.google.com/?q=Tenjin+Station+Fukuoka', booking: L('IC tap - ¥260', 'แตะ IC - ¥260') } },

        { type: 'step', time: '10:15', meridiem: 'Morning', kind: 'Luggage', icon: 'luggage',
          title: L('Drop bags - Hotel Monterey', 'ฝากกระเป๋า - โรงแรมมอนเทอเรย์'),
          place: L('Monterey La Soeur - Daimyo, Tenjin', 'มอนเทอเรย์ ลา ซัวร์ - ไดเมียว เท็นจิน'),
          blurb: L('Too early to check in - leave the cases and head straight out.',
                   'ยังเช็คอินไม่ได้ - ฝากกระเป๋าแล้วออกไปเที่ยวต่อ'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka', notes: L('Too early to check in - bags held at the front desk.', 'ยังเช็คอินไม่ได้ - ฝากกระเป๋าไว้ที่เคาน์เตอร์') } },

        { type: 'feature', time: '10:40', meridiem: 'Morning', kind: 'Dining', imageId: 'a-d1-ramen',
          title: L('Menya Gaga - Tenjin', 'เมนยะ กาก้า - เท็นจิน'),
          place: L('21-hour tonkotsu - the first bowl', 'ทงคตสึเคี่ยว 21 ชม. - ชามแรก'),
          blurb: L('Straight off the red-eye to the first bowl - a local-loved Hakata tonkotsu in Imaizumi, minutes from Tenjin: a creamy, odour-free pork broth simmered over 21 hours, house-made thin noodles, and an optional spicy garlic tare.',
                   'ลงจากไฟลท์ดึกมาซดชามแรกเลย - ร้านทงคตสึฮากาตะที่คนท้องถิ่นรัก ย่านอิมาอิซุมิ ห่างจากเท็นจินไม่กี่นาที: น้ำซุปหมูเนียนไม่คาว เคี่ยวกว่า 21 ชม. เส้นบางทำเอง และเติมซอสเผ็ดกระเทียมได้'),
          refs: { map: 'https://maps.google.com/?q=Menya+Gaga+Tenjin+Fukuoka', official: 'http://menya-gaga.com/', notes: L('No.1 is the ajitama (soft-egg) ramen; add the house spicy tare, a kaedama refill and a takana onigiri. Check the opening time - if it\'s not open this early, swap to a nearby Hakata ramen.', 'เมนูอันดับ 1 คือราเมงไข่ยางมะตูม; เพิ่มซอสเผ็ด เติมเส้น (คาเอดามะ) และข้าวปั้นทาคานะ - เช็กเวลาเปิดร้าน ถ้ายังไม่เปิดเช้าขนาดนี้ สลับไปร้านราเมงฮากาตะใกล้ๆ ได้') } },

        { type: 'feature', time: '11:20', meridiem: 'Late morning', kind: 'Sweets', imageId: 'a-d1-imdonut',
          title: L('I\'m Donut?', 'I\'m Donut?'),
          place: L('Daimyo - the original', 'ไดเมียว - ต้นตำรับ'),
          blurb: L('The fluffy raised donut born in Fukuoka - go early before it sells out.',
                   'โดนัทเนื้อนุ่มสไตล์ raised ที่เกิดที่ฟุกุโอกะ ไปเช้าก่อนของหมด'),
          refs: { map: 'https://maps.google.com/?q=I%27m+Donut+Fukuoka', notes: L('Cash and cards; queue builds fast mid-morning.', 'รับเงินสดและบัตร สายๆ คิวยาว') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Coffee', imageId: 'a-d1-fukcoffee',
          title: L('Fuk Coffee', 'Fuk Coffee'),
          place: L('Latte art - the Fukuoka map', 'ลาเต้อาร์ต - รูปแผนที่ฟุกุโอกะ'),
          blurb: L('A cosy Fukuoka coffee stand famous for latte art shaped like the map of Fukuoka - a cup and a photo to ease into the morning.',
                   'ร้านกาแฟฟุกุโอกะอบอุ่น ขึ้นชื่อลาเต้อาร์ตรูปแผนที่ฟุกุโอกะ - จิบกาแฟถ่ายรูปเริ่มเช้าสบายๆ'),
          refs: { map: 'https://maps.google.com/?q=Fuk+Coffee+Fukuoka', notes: L('Near Gion / Reizenmachi - small shop, may wait at peak.', 'ย่านกิอน / เรเซนมาจิ - ร้านเล็ก ช่วงพีคอาจรอ') } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'Dining', imageId: 'a-d1-gyukatsu',
          title: L('Gyukatsu - Tenjin', 'กิวคัตสึ - เท็นจิน'),
          place: L('Crisp panko beef - grill-your-own', 'เนื้อชุบเกล็ดขนมปังกรอบ - ย่างเอง'),
          blurb: L('Rare beef in a crisp panko crust, sliced and seared - finish each piece yourself on a little hot stone, with miso soup, barley rice and grated yam. Gyukatsu Motomura or Katsugyu in Tenjin.',
                   'เนื้อแดงชุบเกล็ดขนมปังทอดกรอบ หั่นเป็นชิ้น เสิร์ฟพร้อมหินร้อนให้ย่างเองทีละชิ้น กินคู่ซุปมิโซะ ข้าวบาร์เลย์ และมันภูเขาขูด - ร้าน Gyukatsu Motomura หรือ Katsugyu ย่านเท็นจิน'),
          refs: { map: 'https://maps.google.com/?q=Gyukatsu+Motomura+Tenjin+Fukuoka', notes: L('Popular chain - usually a short queue; counter seats turn over fast.', 'ร้านเชนยอดนิยม - มักมีคิวสั้นๆ ที่นั่งเคาน์เตอร์หมุนเร็ว') } },

        { type: 'feature', time: '15:00', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d1-canalcity',
          title: L('Shopping in Tenjin', 'ช้อปปิ้งย่านเท็นจิน'),
          place: L('Malls & shops near the hotel', 'ห้าง & ร้านใกล้โรงแรม'),
          blurb: L('An easy first afternoon around Tenjin & Daimyo, minutes from the hotel - from UNIQLO/GU to department stores, character goods, homeware and Don Quijote. Tap for the shop list.',
                   'บ่ายแรกสบายๆ เดินช้อปย่านเท็นจิน & ไดเมียว ใกล้โรงแรม - ตั้งแต่ UNIQLO/GU, ห้างสรรพสินค้า, ของคาแรกเตอร์, ของแต่งบ้าน จนถึง Don Quijote - แตะดูรายชื่อร้าน'),
          refs: { map: 'https://maps.google.com/?q=Tenjin+Fukuoka', notes: L('All ~5-12 min walk from the hotel (Tenjin/Daimyo). Don Quijote & the department stores are tax-free with your passport.', 'ทั้งหมดเดิน ~5-12 นาทีจากโรงแรม (เท็นจิน/ไดเมียว) - Don Quijote และห้างสรรพสินค้าซื้อปลอดภาษีได้ด้วยพาสปอร์ต') } },

        { type: 'step', time: '16:00', meridiem: 'Afternoon', kind: 'Check-in', icon: 'bed',
          title: L('Check in - Hotel Monterey', 'เช็คอิน - โรงแรมมอนเทอเรย์'),
          place: L('Monterey La Soeur - Daimyo, Tenjin', 'มอนเทอเรย์ ลา ซัวร์ - ไดเมียว เท็นจิน'),
          blurb: L('Swing back to collect the room (ready from 15:00), drop the day bag and freshen up after the red-eye before the evening out.',
                   'แวะกลับมารับห้อง (พร้อมตั้งแต่ 15:00) เก็บของ พักล้างหน้าหลังบินกลางคืน ก่อนออกไปเที่ยวค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka', reservation: { time: '15:00', code: 'MONTEREY', party: L('Base night 1', 'พักคืน 1') }, notes: L('Room ready from 15:00 - freshen up after the red-eye.', 'ห้องพร้อมตั้งแต่ 15:00 - พักล้างหน้าหลังบินดึก') } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'View', imageId: 'a-d1-illum',
          title: L('Illuminations & Christmas Market', 'ไฟประดับ & คริสต์มาสมาร์เก็ต'),
          place: L('Hakata Stn tree + Tenjin park', 'ต้นไฟสถานีฮากาตะ + สวนเท็นจิน'),
          blurb: L('Fukuoka lights up from mid-November, so the whole trip falls inside the season - the giant tree and Christmas market at Hakata Station, and a belt of light through Tenjin and Canal City.',
                   'ฟุกุโอกะเปิดไฟประดับตั้งแต่กลางพฤศจิกายน ทริปนี้เลยอยู่ในช่วงพอดีทั้งทริป - ต้นไฟยักษ์กับคริสต์มาสมาร์เก็ตหน้าสถานีฮากาตะ และไฟประดับยาวต่อเนื่องย่านเท็นจินถึงคาแนลซิตี้'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Station+Illumination', notes: L('Lights switch on around 17:00. In the 2025 season Hakata Station ran from 1 Nov and Tenjin / Canal City from 13 Nov - 2026 dates are usually published in the autumn, so re-check nearer the time.', 'ไฟเปิดประมาณ 17:00 - ปี 2025 สถานีฮากาตะเริ่ม 1 พ.ย. เท็นจิน/คาแนลซิตี้เริ่ม 13 พ.ย. - วันที่ของปี 2026 มักประกาศช่วงใกล้ฤดู เช็กอีกครั้งก่อนไป') } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d1-motsunabe',
          title: L('Motsunabe Rakutenchi', 'โมทสึนาเบะ ราคุเท็นจิ'),
          place: L('The originator - Imaizumi So-Honten', 'ต้นตำรับโมทสึนาเบะ - สาขาใหญ่อิมาอิซุมิ'),
          blurb: L('Finish day one at the shop that says it invented motsunabe - a 40-year secret soy broth heaped with a tower of garlic chives and fresh beef offal, on the 2nd floor of the Rakutenchi building in Imaizumi. Cheap, lively and very Hakata.',
                   'ปิดวันแรกที่ร้านต้นตำรับผู้ให้กำเนิดโมทสึนาเบะ - น้ำซุปซีอิ๊วสูตรลับกว่า 40 ปี โปะใบกุยช่ายเป็นภูเขากับเครื่องในวัวสด ชั้น 2 ตึกราคุเท็นจิ ย่านอิมาอิซุมิ ราคาเป็นกันเอง บรรยากาศคึกคักสไตล์ฮากาตะ'),
          refs: { map: 'https://maps.google.com/?q=元祖もつ鍋楽天地+天神今泉総本店', official: 'https://rakutenti.com/',
                  notes: L('"Manzoku" course = motsunabe (1.5 servings) + tofu + a small dish + all-you-can-eat champon shime. Soy is the classic broth; miso is also available. 2F Rakutenchi Bldg, 1-19-18 Imaizumi. Book ahead on a weekend.', 'คอร์ส "Manzoku" = โมทสึนาเบะ 1.5 ที่ + เต้าหู้ + กับแกล้ม + จัมปงเติมไม่อั้น - ซีอิ๊วคือสูตรคลาสสิก มีแบบมิโซะด้วย - ชั้น 2 ตึกราคุเท็นจิ 1-19-18 อิมาอิซุมิ - วันหยุดควรจองล่วงหน้า'),
                  reservation: { time: '19:30', code: 'MOTSU-01', party: L('Dinner - book ahead', 'มื้อค่ำ - จองล่วงหน้า') } } },

        { type: 'step', time: '21:00', meridiem: 'Night', kind: 'Walk', icon: 'walk',
          title: L('Nakasu yatai stalls', 'แผงยาไต นากาสึ'),
          place: L('Riverside food carts', 'รถเข็นอาหารริมแม่น้ำ'),
          blurb: L('A slow walk past the lantern-lit yatai along the Naka river - the image of Fukuoka at night.',
                   'เดินเล่นผ่านแผงยาไตโคมไฟริมแม่น้ำนากะ - ภาพจำของฟุกุโอกะยามค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Nakasu+Yatai+Fukuoka' } },

        { type: 'feature', time: '21:30', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d1-nightlife',
          title: L('FUKUOKA CRAFT by El Borracho', 'FUKUOKA CRAFT by El Borracho'),
          place: L('Craft beer & tacos - Daimyo', 'คราฟต์เบียร์ & ทาโก้ - ไดเมียว'),
          blurb: L('Ease into the first night with house-brewed pale ales and hazy IPAs (plus Mexican plates) at this easygoing Daimyo taproom.',
                   'เปิดคืนแรกแบบสบายๆ กับเพลเอลและเฮซีไอพีเอที่ brew เองของร้าน (พร้อมอาหารเม็กซิกัน) ที่แทปรูมชิลล์ย่านไดเมียว'),
          refs: { map: 'https://maps.google.com/?q=FUKUOKA+CRAFT+by+El+Borracho+Daimyo', official: 'https://www.fukuoka-now.com/en/food/fukuoka-craft/', notes: L('Daimyo - open to 24:00 (Fri/Sat to 01:00) - on-site brewery.', 'ไดเมียว - เปิดถึง 24:00 (ศุกร์/เสาร์ ถึง 01:00) - มีโรงเบียร์ในร้าน') } },
      ],
    },
    {
      label: 'Day 02', labelTh: 'วันที่ 02', theme: 'hisui',
      date: L('Sunday - 22 Nov 2026', 'อาทิตย์ - 22 Nov 2026'),
      title: L('Mount Aso', 'ภูเขาไฟอาโซ'),
      subtitle: L('The Caldera & a Village of Baths', 'ปากปล่อง & หมู่บ้านออนเซน'),
      note: L(
        'Pick up the car in Hakata and climb the Milk Road into the largest caldera in Japan. Late November is past the maple season up here - what you get instead is the grassland at its best: bleached-gold slopes and silver susuki plumes across the rim. The Nakadake crater is shut, so Aso Shrine fills the lunch queue instead, then north out of the caldera to Kurokawa Onsen: akaushi kaiseki, lantern-lit lanes and a village full of open-air baths.',
        'รับรถที่ฮากาตะแล้วไต่เส้น Milk Road ขึ้นสู่ปากปล่องภูเขาไฟที่ใหญ่ที่สุดในญี่ปุ่น - ปลายพฤศจิกายนเลยฤดูใบเมเปิลบนนี้ไปแล้ว สิ่งที่ได้แทนคือทุ่งหญ้าในช่วงสวยที่สุด: เนินหญ้าสีทองซีดกับปุยหญ้าซูซูกิสีเงินทั่วขอบปล่อง - ปล่องนากาดาเกะปิดอยู่ เลยเอาศาลเจ้าอาโซมาแทรกช่วงรอคิวข้าวเที่ยงแทน แล้วขับขึ้นเหนือออกจากปากปล่องไปพักคุโรคาวะออนเซน: ไคเซกิเนื้ออาคาอุชิ ตรอกโคมไฟ และหมู่บ้านที่เต็มไปด้วยบ่อกลางแจ้ง'
      ),
      coverId: 'day2-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out - Hotel Monterey', 'เช็คเอาท์ - โรงแรมมอนเทอเรย์'),
          place: L('Settle up before the car', 'เคลียร์บิลก่อนไปรับรถ'),
          blurb: L('Check out and walk over to the rental desk to start the Kyushu loop.',
                   'เช็คเอาท์แล้วเดินไปเคาน์เตอร์รถเช่าเริ่มลูปคิวชู'),
          refs: { map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka' } },

        { type: 'step', time: '08:30', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Pick up the car - Toyota', 'รับรถ - โตโยต้า'),
          place: L('Toyota Rent a Car - Hakata Stn (Hakataguchi)', 'โตโยต้าเร้นท์อะคาร์ - สถานีฮากาตะ (ฮากาตะกุจิ)'),
          blurb: L('Collect the 8-seater for the Kyushu loop - ask for an ETC card at the desk, and about studless tyres if you plan on the high passes.',
                   'รับรถ 8 ที่นั่งสำหรับลูปคิวชู - ขอบัตร ETC ที่เคาน์เตอร์ และถามเรื่องยางสตัดเลสถ้าจะขึ้นที่สูง'),
          refs: { map: 'https://maps.google.com/?q=Toyota+Rent+a+Car+Hakata+Station+Hakataguchi',
                  reservation: { time: '08:30', code: 'CAR-FUK-5D', party: L('5 days - returns Day 6', '5 วัน - คืน Day 6') },
                  notes: L('International Driving Permit (IDP) required to drive.', 'ต้องมีใบขับขี่สากล (IDP) ในการขับ') } },

        { type: 'feature', time: '09:00', meridiem: 'Morning', kind: 'View', imageId: 'a-d2-milkroad',
          title: L('Milk Road', 'มิลค์โร้ด'),
          place: L('Ridge drive up to Aso - ~2 h from Hakata', 'เส้นทางสันเขาขึ้นอาโซ - ~2 ชม. จากฮากาตะ'),
          blurb: L('The scenic ridge road that climbs onto the Aso outer rim - wide pasture, grazing cattle and the caldera opening up ahead. The drive itself is the first sight of the day.',
                   'ถนนสันเขาวิวสวยที่ไต่ขึ้นขอบนอกปากปล่องอาโซ - ทุ่งเลี้ยงสัตว์กว้าง วัวเล็มหญ้า และแอ่งปากปล่องค่อยๆ เปิดออกข้างหน้า - ตัวเส้นทางเองคือวิวแรกของวัน'),
          refs: { map: 'https://maps.google.com/?q=Milk+Road+Aso', notes: L('Allow ~2 h from the rental incl. photo stops. Late November is peak susuki (pampas grass) along the ridge - low sun late in the day lights the plumes up silver. The high ridge can drop near freezing at dawn, so watch for ice early.', 'เผื่อ ~2 ชม. จากร้านเช่ารถรวมแวะถ่ายรูป - ปลายพฤศจิกายนเป็นช่วงหญ้าซูซูกิสวยที่สุดตลอดสันเขา แสงเย็นจะส่องให้ปุยหญ้าเป็นสีเงิน - ตอนเช้ามืดสันเขาสูงใกล้จุดเยือกแข็ง ระวังน้ำแข็ง') } },

        { type: 'feature', time: '11:15', meridiem: 'Late morning', kind: 'View', imageId: 'a-d2-nishiyu',
          title: L('Nishiyunoura Observatory ★', 'จุดชมวิวนิชิยุโนะอุระ ★'),
          place: L('Rim panorama over the caldera', 'พาโนรามาขอบปากปล่อง'),
          blurb: L('A quieter rim observatory with a sweeping panorama of the central cones and the town spread across the caldera floor - a great first stop before Daikanbo.',
                   'จุดชมวิวบนขอบปล่องที่คนน้อยกว่า เห็นพาโนรามากรวยภูเขาไฟกลางและเมืองที่กระจายอยู่บนพื้นปากปล่อง - จุดแวะแรกที่ดีก่อนไปไดคันโบ'),
          refs: { map: 'https://maps.google.com/?q=Nishiyunoura+Observatory+Aso', notes: L('Coming from Fukuoka you reach this one about 15 min before Daikanbo, so the order is right. Budget 2-2.5 h from Hakata, not a flat 2 - you lose time getting out of the city and the ridge road is slow in a van.', 'มาจากฟุกุโอกะจะถึงจุดนี้ก่อนไดคันโบราว 15 นาที ลำดับถูกแล้ว - เผื่อเวลาจากฮากาตะ 2-2.5 ชม. ไม่ใช่ 2 ชม.เป๊ะ เพราะออกจากตัวเมืองก็กินเวลา และถนนสันเขาขับรถตู้ช้า') } },

        { type: 'feature', time: '11:50', meridiem: 'Late morning', kind: 'View', imageId: 'a-d3-daikanbo',
          title: L('Daikanbo viewpoint', 'จุดชมวิวไดคันโบ'),
          place: L('The caldera rim', 'ขอบปากปล่อง'),
          blurb: L('The classic rim viewpoint - the whole 25-km caldera opens below, the central cones lined up like a sleeping figure.',
                   'จุดชมวิวขอบปล่องคลาสสิก - แอ่งปากปล่องกว้าง 25 กม. เปิดออกเบื้องล่าง กรวยกลางเรียงตัวเหมือนคนนอนหลับ'),
          refs: { map: 'https://maps.google.com/?q=Daikanbo+Aso', notes: L('Wind is fierce on the rim - bring a layer.', 'ลมแรงบนขอบปล่อง พกเสื้อกันหนาว') } },

        { type: 'step', time: '12:15', meridiem: 'Midday', kind: 'Transfer', icon: 'car',
          title: L('Drop into Uchinomaki - take a queue ticket', 'ลงมาอุจิโนมากิ - ไปรับบัตรคิว'),
          place: L('Imakin Shokudo - numbered ticket', 'ร้านอิมาคิง - บัตรคิว'),
          blurb: L('Imakin has no reservations, only same-day numbered tickets, and the wait runs 2-3 hours at weekends. Today is a Sunday inside a three-day holiday weekend, so go straight there on arriving and take a ticket BEFORE doing anything else.',
                   'ร้านอิมาคิงจองไม่ได้ ใช้บัตรคิวหน้าร้านอย่างเดียว เสาร์-อาทิตย์รอ 2-3 ชม. - วันนี้เป็นวันอาทิตย์กลางวันหยุดยาว 3 วัน พอถึงให้ตรงไปรับบัตรคิวก่อนทำอย่างอื่น'),
          refs: { map: 'https://maps.google.com/?q=Imakin+Shokudo+Aso', notes: L('Tickets go out from around 10:00-10:30 and CAN run out on a busy day, so have a fallback in mind - there are other akaushi places in Uchinomaki and on Monzenmachi, and the beef is the point, not the queue. Ask what time your number is likely to be called before you drive off to the shrine.', 'แจกบัตรคิวราว 10:00-10:30 และวันที่คนเยอะ บัตรอาจหมดได้ เตรียมแผนสำรองไว้ - แถวอุจิโนมากิและถนนมนเซนมาจิมีร้านอาคาอุชิอื่นอีก จุดสำคัญคือเนื้อ ไม่ใช่การต่อคิว - ก่อนขับไปศาลเจ้า ถามร้านก่อนว่าคิวน่าจะถูกเรียกกี่โมง') } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Shrine', imageId: 'a-d2-asojinja',
          title: L('Aso Shrine & Monzenmachi', 'ศาลเจ้าอาโซ & ถนนมนเซนมาจิ'),
          place: L('Ichinomiya - the restored romon gate', 'อิจิโนมิยะ - ประตูโรมงที่บูรณะเสร็จแล้ว'),
          blurb: L('Over 2,000 years old, with one of the three great two-storey romon gates in Japan. The gate collapsed in the 2016 earthquake and only reopened in December 2023 after a seven-and-a-half year rebuild that reused about 72% of the original timbers. The street in front, Monzenmachi, has fifteen spring-water fountains and is made for eating your way along it - which is exactly what you want while the Imakin queue burns down.',
                   'ศาลเจ้าอายุกว่า 2,000 ปี มีประตูโรมงสองชั้นที่ถือเป็นหนึ่งในสามประตูศาลเจ้ายิ่งใหญ่ที่สุดของญี่ปุ่น - ประตูพังตอนแผ่นดินไหวปี 2016 และเพิ่งเปิดใหม่ธันวาคม 2023 หลังบูรณะ 7 ปีครึ่ง โดยใช้ไม้เดิมกลับมาได้ราว 72% - ถนนหน้าศาลเจ้าชื่อมนเซนมาจิ มีจุดน้ำผุด "มิซุกิ" 15 จุด และเป็นถนนสำหรับเดินกินโดยเฉพาะ ซึ่งพอดีกับการรอคิวอิมาคิงเลย'),
          refs: { map: 'https://maps.google.com/?q=Aso+Shrine+Ichinomiya', official: 'https://asojinja.or.jp/',
                  booking: L('Free', 'เข้าฟรี'),
                  notes: L('This replaces the Nakadake crater, which is shut at Level 3. About 9 km east of Uchinomaki, roughly 15-20 min each way, so it fits a 2-hour wait comfortably - and doing it now rather than late afternoon means the Monzenmachi shops are actually open (most shut around 17:00). Keep an eye on your ticket number; you are 20 minutes from the restaurant.',
                           'จุดนี้มาแทนปล่องนากาดาเกะที่ปิดอยู่ (ระดับ 3) - ห่างอุจิโนมากิไปทางตะวันออกราว 9 กม. ขับราว 15-20 นาทีต่อเที่ยว จึงพอดีกับการรอคิว 2 ชม. - และการมาช่วงนี้แทนช่วงเย็น ทำให้ร้านบนถนนมนเซนมาจิยังเปิดอยู่จริง (ส่วนใหญ่ปิดราว 17:00) - คอยดูเลขคิวด้วย เพราะอยู่ห่างร้าน 20 นาที') } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'Dining', imageId: 'a-d3-lunch',
          title: L('Aso Akaushi-don', 'ข้าวหน้าเนื้ออาโซอากาอุชิ'),
          place: L('Aso red-wagyu beef bowl', 'ข้าวหน้าเนื้อแดงวากิวอาโซ'),
          blurb: L('The Aso specialty - grass-fed akaushi (red wagyu) seared and piled over rice with a soft egg. Eat whenever your number is called; the time here is a guess, not a booking.',
                   'ของขึ้นชื่ออาโซ - เนื้ออากาอุชิ (วากิวแดง) เลี้ยงปล่อย ย่างวางบนข้าวกับไข่ลวก - กินตอนที่เขาเรียกคิว เวลาตรงนี้เป็นแค่การเดา ไม่ใช่เวลาจอง'),
          refs: { map: 'https://maps.google.com/?q=Imakin+Shokudo+Aso', notes: L('Lunch only. DECISION POINT: if you have not been called by about 14:30, give up and eat elsewhere - the afternoon cannot absorb more than that without pushing Kusasenri past sunset and the ryokan check-in past 18:30.', 'เปิดเฉพาะมื้อเที่ยง - จุดตัดสินใจ: ถ้าถึงราว 14:30 แล้วยังไม่ถูกเรียก ให้ถอยไปกินร้านอื่น เพราะบ่ายรับต่อไม่ไหว จะดันคุซะเซนริเลยพระอาทิตย์ตกและเช็คอินเรียวกังเลย 18:30') } },

        { type: 'feature', time: '15:00', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d3-sweets',
          title: L('Aso Milk Factory', 'อาโซมิลค์แฟกตอรี'),
          place: L('Dairy soft cream - Aso grassland milk', 'ซอฟต์ครีมนมสด - นมทุ่งอาโซ'),
          blurb: L('Aso is grazing country - a thick, milky soft-serve and a bottle of fresh Aso milk, 1.1 km from Imakin. Pudding after the beef bowl, then straight on to the cones.',
                   'อาโซคือเมืองทุ่งเลี้ยงวัว - ซอฟต์ครีมนมสดเข้มข้นกับนมอาโซสดสักขวด ห่างจากอิมาคิงแค่ 1.1 กม. - กินเป็นของหวานต่อจากข้าวหน้าเนื้อ แล้วขับต่อขึ้นเขาเลย'),
          refs: { map: 'https://maps.google.com/?q=ASO+MILK+FACTORY+Aso', notes: L('This is ASO MILK FACTORY in Uchinomaki, NOT Aso Milk Farm in Nishihara village - that one is 20 km away on the far side of the caldera. A 20-minute stop, no more; the light is going.', 'ที่นี่คือ ASO MILK FACTORY ในอุจิโนมากิ ไม่ใช่ 阿蘇ミルク牧場 ที่หมู่บ้านนิชิฮาระ - อันนั้นอยู่ไกล 20 กม. คนละฝั่งปากปล่อง - แวะแค่ 20 นาทีพอ แสงกำลังจะหมด') } },

        { type: 'feature', time: '16:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d2-komezuka',
          title: L('Komezuka Observatory ★', 'จุดชมวิวโคเมซึกะ ★'),
          place: L('The perfect grass cone', 'ภูเขาไฟลูกจิ๋วทรงสวย'),
          blurb: L('A textbook miniature volcano - a perfectly rounded grass cone with a scoop out of its top, said to be where a god took rice. By late November the grass has turned bleached gold, which suits it better than summer green.',
                   'ภูเขาไฟจิ๋วในตำรา - กรวยหญ้าทรงกลมสวยมีรอยเว้าตรงยอด เล่าว่าเทพเจ้าตักข้าวไป - ปลายพฤศจิกายนหญ้าเปลี่ยนเป็นสีทองซีด สวยกว่าสีเขียวหน้าร้อนอีก'),
          refs: { map: 'https://maps.google.com/?q=Komezuka+Aso' } },

        { type: 'feature', time: '16:30', meridiem: 'Afternoon', kind: 'Park', imageId: 'a-d3-kusasenri',
          title: L('Kusasenrigahama ★', 'คุซะเซนริกาฮามะ ★'),
          place: L('Grassland under the volcano', 'ทุ่งหญ้าใต้ภูเขาไฟ'),
          blurb: L('A wide meadow with twin crater ponds right under Nakadake - horses graze in summer; in late November it is pale gold kusa-momiji grass and silver susuki under a big sky. Landing here around 16:30 is lucky rather than late: sunset is about 17:20, and low sun through the susuki plumes is the best light of the day.',
                   'ทุ่งหญ้ากว้างมีบ่อปล่องคู่อยู่ใต้นากาดาเกะพอดี - หน้าร้อนมีม้าเล็มหญ้า - ปลายพฤศจิกายนเป็นทุ่งหญ้าสีทองซีดกับหญ้าซูซูกิสีเงินใต้ฟ้ากว้าง - มาถึงราว 16:30 ถือว่าโชคดีไม่ใช่สาย เพราะพระอาทิตย์ตกราว 17:20 แสงเย็นส่องผ่านปุยหญ้าซูซูกิคือแสงที่สวยที่สุดของวัน'),
          refs: { map: 'https://maps.google.com/?q=Kusasenri+Aso', official: 'https://www.aso-volcano.jp/',
                  notes: L('Leave by about 17:15 to reach Kurokawa around 18:00. The Nakadake crater road starts just above here but is shut - Aso went to eruption alert Level 3 on 14 Aug 2026, closing everything within 2 km of the crater. Kusasenri is outside that zone and open as normal. The level moves both ways, so if it drops back to 1 or 2 before you travel, the crater terminal is a short drive further up and you can add it back on the day.', 'ออกจากที่นี่ราว 17:15 จะถึงคุโรคาวะราว 18:00 - ถนนขึ้นปล่องนากาดาเกะเริ่มเหนือจุดนี้ขึ้นไปนิดเดียว แต่ปิดอยู่ - อาโซขึ้นเป็นเตือนภัยระดับ 3 เมื่อ 14 ส.ค. 2026 ปิดทุกอย่างในรัศมี 2 กม. รอบปากปล่อง - ตัวคุซะเซนริอยู่นอกเขตนั้น เปิดปกติ - ระดับเตือนภัยขึ้นลงได้ ถ้าลดเหลือ 1 หรือ 2 ก่อนไป ปล่องอยู่ห่างจากตรงนี้ขึ้นไปแป๊บเดียว เพิ่มกลับเข้าโปรแกรมหน้างานได้เลย') } },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in - Kurokawa Onsen', 'เช็คอิน - คุโรคาวะออนเซน'),
          place: L('Ryokan Sanga - one night', 'เรียวกัง ซังงะ - หนึ่งคืน'),
          blurb: L('Leave the caldera north for Kurokawa, a cedar-lined gorge of thatched inns widely rated one of the loveliest onsen villages in Japan. About 45 min on from Kusasenri - and it puts you on the Yamanami Highway, so tomorrow\'s run to Beppu drops from ~2 h to about 1 h 10. Tell the ryokan you will arrive around 18:00, since dinner is usually served from 18:00-19:00.',
                   'ออกจากปากปล่องขึ้นเหนือสู่คุโรคาวะ หุบเขาต้นซีดาร์ที่มีเรียวกังหลังคาฟาง ได้ชื่อว่าเป็นหมู่บ้านออนเซนที่สวยที่สุดแห่งหนึ่งของญี่ปุ่น - ห่างจากคุซะเซนริราว 45 นาที และอยู่บนเส้นยามานามิพอดี พรุ่งนี้ขับไปเบปปุจึงเหลือราว 1 ชม. 10 นาที จากเดิม ~2 ชม. - แจ้งเรียวกังด้วยว่าจะถึงราว 18:00 เพราะมื้อค่ำมักเริ่ม 18:00-19:00'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen', official: 'https://www.kurokawaonsen.or.jp/en/',
                  reservation: { time: '18:00', code: 'KRW-RYO', party: L('Night 2 - 1 night - to book', 'คืน 2 - 1 คืน - รอจอง') },
                  notes: L('NOT BOOKED YET, and the most urgent booking of the trip: Mon 23 Nov is Labour Thanksgiving Day, so this is the Sunday of a three-day weekend in peak foliage season. First choice is RYOKAN SANGA, sanga-ryokan.com - its own site confirms an Aso akaushi kaiseki, seven baths including open-air and private ones, two private hot-spring sources, 16 rooms and some detached cottages; it is a few minutes by car from the village centre. Alternative if keeping all five in ONE room matters more than the menu: FUMOTO RYOKAN, fumotoryokan.com - 11 private baths, and the Kurokawa association lists a main-building room sleeping up to 8, though its own site says only "Kumamoto wagyu", not akaushi. Cheaper fallback with no detour at all: Aso Plaza Hotel back in Uchinomaki, 200+ parking spaces. Room capacity is unconfirmed at Sanga - ask directly, and say 4-5 people and an 8-seat van.',
                           'ยังไม่จอง และเป็นคืนที่ต้องรีบที่สุดของทริป เพราะ 23 พ.ย. เป็นวันขอบคุณแรงงาน คืนนี้จึงเป็นวันอาทิตย์กลางวันหยุดยาว 3 วัน ตรงกับหน้าใบไม้เปลี่ยนสีพอดี - ตัวเลือกแรกคือ RYOKAN SANGA (sanga-ryokan.com) เว็บทางการยืนยันว่ามีไคเซกิเนื้ออาคาอุชิอาโซ มีบ่อ 7 แบบทั้งกลางแจ้งและแบบเหมาส่วนตัว มีบ่อน้ำแร่ของตัวเอง 2 บ่อ 16 ห้อง มีเรือนแยก อยู่ห่างกลางหมู่บ้านไม่กี่นาทีโดยรถ - ถ้าเรื่องนอนห้องเดียวกันทั้ง 5 คนสำคัญกว่าเมนู ให้ดู FUMOTO RYOKAN (fumotoryokan.com) มีบ่อเหมาส่วนตัว 11 บ่อ และเว็บสมาคมคุโรคาวะระบุว่ามีห้องอาคารหลักนอนได้ถึง 8 คน แต่เว็บตัวเองเขียนแค่ "เนื้อวากิวคุมาโมโตะ" ไม่ระบุอาคาอุชิ - ถ้าอยากประหยัดและไม่อ้อมเลย ใช้ Aso Plaza Hotel ที่อุจิโนมากิ ที่จอดรถ 200+ คัน - จำนวนคนต่อห้องของซังงะยังไม่ยืนยัน ให้ถามตรงๆ พร้อมบอกว่ามา 4-5 คนและมีรถตู้ 8 ที่นั่ง') } },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d2-dinner',
          title: L('Aso akaushi dinner', 'มื้อค่ำเนื้ออาโซอากาอุชิ'),
          place: L('Kaiseki at the ryokan', 'ไคเซกิที่เรียวกัง'),
          blurb: L('Dinner built around Aso red-wagyu (akaushi) - lean, grassy beef raised on the caldera pastures. Sanga\'s own site puts akaushi at the centre of its kaiseki, which is why it is the pick for tonight.',
                   'มื้อค่ำเน้นเนื้อวากิวแดง (อากาอุชิ) ของอาโซ - เนื้อไม่ติดมัน เลี้ยงบนทุ่งหญ้าปากปล่อง - เว็บทางการของซังงะระบุว่าไคเซกิของเขาชูอาคาอุชิเป็นหลัก จึงเลือกที่นี่สำหรับคืนนี้'),
          refs: { map: 'https://maps.google.com/?q=Ryokan+Sanga+Kurokawa', official: 'http://www.sanga-ryokan.com/' } },

        { type: 'feature', time: '20:30', meridiem: 'Night', kind: 'View', imageId: 'a-d2-nightlife',
          title: L('Kurokawa after dark', 'คุโรคาวะยามค่ำ'),
          place: L('Lantern-lit lanes & the ryokan baths', 'ตรอกโคมไฟ & บ่อของเรียวกัง'),
          blurb: L('No nightlife here by design - the village keeps its signs and lighting deliberately low, so after dinner it is lantern-lit lanes along the river and then your own baths. Sanga alone has seven, including private ones you can book.',
                   'ที่นี่ตั้งใจไม่ให้มีย่านกลางคืน - หมู่บ้านคุมป้ายและแสงไฟไว้ให้น้อยที่สุด หลังมื้อค่ำจึงเป็นการเดินตรอกโคมไฟริมลำธาร แล้วกลับมาแช่บ่อของที่พัก - เฉพาะซังงะก็มีถึง 7 บ่อ รวมบ่อเหมาส่วนตัวที่จองได้'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen+village', notes: L('It gets cold and properly dark - bring a layer and use your phone torch on the lanes.', 'อากาศเย็นและมืดจริง - พกเสื้อกันหนาวและใช้ไฟฉายมือถือตอนเดินในตรอก') } },
      ],
    },
    {
      label: 'Day 03', labelTh: 'วันที่ 03', theme: 'urushi',
      date: L('Monday - 23 Nov 2026', 'จันทร์ - 23 Nov 2026'),
      title: L('Beppu', 'เบปปุ'),
      subtitle: L('Yamanami Highway & Mt Tsurumi', 'เส้นทางยามานามิ & กระเช้าสึรุมิ'),
      note: L(
        'One of the great drives in Japan - the Yamanami Highway across the highlands down to steaming Beppu: a ropeway up Mt Tsurumi, the wild monkeys of Takasakiyama, and a hot-sand bath by the sea.',
        'หนึ่งในเส้นทางขับรถที่สวยที่สุดในญี่ปุ่น - ยามานามิไฮเวย์ข้ามที่ราบสูงลงสู่เบปปุที่พ่นไอน้ำ: กระเช้าขึ้นเขาสึรุมิ ลิงป่าทากาซากิยามะ และอาบทรายร้อนริมทะเล'
      ),
      coverId: 'day4-cover',
      activities: [
        { type: 'feature', time: '08:30', meridiem: 'Morning', kind: 'Onsen', imageId: 'a-d3-tegata',
          title: L('Rotenburo-meguri with the tegata', 'ตระเวนบ่อกลางแจ้งด้วยเทงาตะ'),
          place: L('Kurokawa\'s wooden bath-hopping pass', 'บัตรไม้ตระเวนออนเซนของคุโรคาวะ'),
          blurb: L('The reason people stay in Kurokawa: a wooden pass that lets you walk into other inns\' open-air baths. Each ryokan\'s bath is different - river gorge, cave, cedar forest - and the walk between them through the village is half the pleasure.',
                   'เหตุผลที่คนมาพักคุโรคาวะ: บัตรไม้ที่ให้เข้าไปแช่บ่อกลางแจ้งของเรียวกังอื่นได้ - แต่ละที่คนละแบบ ทั้งริมลำธาร ในถ้ำ กลางป่าซีดาร์ - และการเดินระหว่างบ่อผ่านหมู่บ้านก็สนุกไม่แพ้กัน'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen+Kaze+no+Ya', official: 'https://www.kurokawaonsen.or.jp/tegata/',
                  booking: L('Tegata - ¥1,500', 'เทงาตะ - ¥1,500'),
                  notes: L('¥1,500 per adult, valid 6 months. It carries three stickers: two red for open-air baths and one green to spend on food or a souvenir - so it is two baths, not three. Baths take pass holders 08:30-21:00. Buy it at your ryokan or at the association office, Kaze-no-Ya. Doing one bath now still leaves plenty of time for Beppu.',
                           'ผู้ใหญ่ ¥1,500 ใช้ได้ 6 เดือน - มีสติกเกอร์ 3 ดวง แดง 2 ดวงสำหรับบ่อกลางแจ้ง เขียว 1 ดวงใช้แลกของกินหรือของฝาก แปลว่าแช่ได้ 2 บ่อ ไม่ใช่ 3 - บ่อรับคนถือบัตร 08:30-21:00 ซื้อได้ที่เรียวกังหรือที่ทำการสมาคม "คาเซะโนะยะ" - แช่สักบ่อตอนนี้ยังเหลือเวลาไปเบปปุสบายๆ') } },

        { type: 'step', time: '09:45', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out - Kurokawa ryokan', 'เช็คเอาท์ - เรียวกังคุโรคาวะ'),
          place: L('One night done - onward to the coast', 'ครบหนึ่งคืน - มุ่งสู่ชายฝั่ง'),
          blurb: L('Breakfast, one last soak, then load the car - the Yamanami Highway down to Beppu lies ahead.',
                   'กินอาหารเช้า แช่น้ำอีกรอบ แล้วขนของขึ้นรถ - รออยู่คือยามานามิไฮเวย์ลงสู่เบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Kurokawa+Onsen', notes: L('Check-out is usually ~10:00 - one night at Kurokawa.', 'เช็คเอาท์ปกติ ~10:00 - พักคุโรคาวะ 1 คืน') } },

        { type: 'step', time: '10:00', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Drive via Yamanami Highway', 'ขับผ่านยามานามิไฮเวย์'),
          place: L('Kurokawa -> Beppu - ~1 h 10', 'คุโรคาวะ -> เบปปุ - ~1 ชม. 10 นาที'),
          blurb: L('Kurokawa sits right beside Senomoto, where the Yamanami Highway begins its run north-east - a ribbon of road over rolling volcanic moorland down to the eastern coast.',
                   'คุโรคาวะอยู่ติดเซโนโมโตะ ซึ่งเป็นจุดที่ยามานามิไฮเวย์เริ่มทอดขึ้นไปทางตะวันออกเฉียงเหนือ - ถนนสายโค้งข้ามทุ่งภูเขาไฟลูกคลื่นลงสู่ชายฝั่งตะวันออก'),
          refs: { map: 'https://maps.google.com/?q=Yamanami+Highway',
                  notes: L('Staying at Kurokawa instead of inside the caldera cuts this leg roughly in half. One casualty: Takachiho Gorge is now a long detour the wrong way - it lies south of Aso, so from here it would mean driving back down and losing most of the Beppu day. Treat it as a separate trip rather than a stop.', 'การนอนคุโรคาวะแทนในปากปล่องทำให้ช่วงนี้สั้นลงเกือบครึ่ง - สิ่งที่ต้องแลกคือหุบเขาทาคาชิโฮะกลายเป็นทางอ้อมย้อนกลับ เพราะอยู่ทางใต้ของอาโซ ถ้าไปจากที่นี่ต้องขับย้อนลงไปและเสียเวลาเบปปุเกือบทั้งวัน - ให้ถือเป็นทริปแยกดีกว่า') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d5-lunch',
          title: L('Roadside lunch', 'มื้อเที่ยงริมทาง'),
          place: L('Michi-no-eki rest stop', 'จุดพักรถมิจิโนเอกิ'),
          blurb: L('Pull in at a roadside station for dango-jiru dumpling soup and local bento.',
                   'แวะจุดพักรถ สั่งซุปดังโงะจิรุและเบนโตะท้องถิ่น'),
          refs: { map: 'https://maps.google.com/?q=Michi+no+Eki+Aso' } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d3-ropeway',
          title: L('Beppu Ropeway - Mt Tsurumi', 'กระเช้าเบปปุ - เขาสึรุมิ'),
          place: L('1,375 m summit - 10-min cable car', 'ยอดเขา 1,375 ม. - กระเช้า 10 นาที'),
          blurb: L('A 10-minute cable car up Mt Tsurumi for a panorama over Beppu Bay and the steaming town. Go for the view, not the leaves - the summit colours peak in late October and are finished by now; only the base station is still turning.',
                   'นั่งกระเช้า 10 นาทีขึ้นเขาสึรุมิ ชมวิวพาโนรามาอ่าวเบปปุและเมืองที่พ่นไอน้ำ - มาเพื่อวิว ไม่ใช่ใบไม้แดง - ยอดเขาพีคตั้งแต่ปลายตุลาคมและหมดแล้ว เหลือแค่แถวสถานีล่างที่ยังเปลี่ยนสีอยู่'),
          refs: { map: 'https://maps.google.com/?q=Beppu+Ropeway', official: 'https://www.beppu-ropeway.co.jp/', booking: L('Round trip - ~¥1,800', 'ไป-กลับ - ~¥1,800') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d5-umijigoku',
          title: L('Umi Jigoku - the blue pond', 'อุมิจิโกกุ - บ่อฟ้า'),
          place: L('The cobalt-blue hell', 'บ่อนรกสีฟ้าโคบอลต์'),
          blurb: L('The prettiest of the Beppu hells - a steaming pond the colour of deep cobalt, hot enough to boil eggs. The one hell worth keeping.',
                   'สวยที่สุดในบรรดาบ่อนรกเบปปุ - บ่อพ่นไอน้ำสีฟ้าโคบอลต์เข้ม ร้อนพอต้มไข่ได้ - บ่อเดียวที่เก็บไว้'),
          refs: { map: 'https://maps.google.com/?q=Umi+Jigoku+Beppu', official: 'https://www.beppu-jigoku.com/', booking: L('Entry - ¥500 (single hell)', 'ค่าเข้า - ¥500 (บ่อเดียว)') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d3-monkey',
          title: L('Takasakiyama Monkey Park', 'สวนลิงทากาซากิยามะ'),
          place: L('~1,500 wild macaques', 'ลิงป่า ~1,500 ตัว'),
          blurb: L('A hillside reserve where troops of wild Japanese macaques come down to be fed - right up close, and as the weather turns they start bunching together for warmth. The Umitamago aquarium is right next door.',
                   'เขตอนุรักษ์เชิงเขาที่ฝูงลิงแสมญี่ปุ่นป่าลงมากินอาหาร - ดูใกล้ๆ พออากาศเริ่มเย็นลิงจะเกาะกลุ่มกันให้อุ่น - ติดกันคืออควาเรียมอุมิตามาโกะ'),
          refs: { map: 'https://maps.google.com/?q=Takasakiyama+Monkey+Park', official: 'https://www.takasakiyama.jp/', booking: L('Entry - ~¥520 - combo ticket with the Umitamago aquarium', 'ค่าเข้า - ~¥520 - มีตั๋วรวมกับอควาเรียมอุมิตามาโกะ') } },

        { type: 'step', time: '16:00', meridiem: 'Afternoon', kind: 'Onsen', icon: 'bed',
          title: L('Beppu sand bath', 'อาบทรายร้อนเบปปุ'),
          place: L('Buried in volcanic sand', 'ฝังในทรายภูเขาไฟ'),
          blurb: L('Lie down and get shovelled under warm volcanic sand by the sea - a Beppu-only ritual.',
                   'นอนลงแล้วให้กลบด้วยทรายภูเขาไฟอุ่นๆ ริมทะเล - ประสบการณ์เฉพาะเบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Beppu+Beach+Sand+Bath', booking: L('Sand bath - ¥1,500', 'อาบทราย - ¥1,500') } },

        { type: 'feature', time: '16:45', meridiem: 'Evening', kind: 'Sweets', imageId: 'a-d5-sweets',
          title: L('Beppu Purin', 'พุดดิ้งเบปปุ'),
          place: L('Hot-spring steamed pudding', 'พุดดิ้งนึ่งไอน้ำพุร้อน'),
          blurb: L('Beppu is pudding country - a firm, custardy purin, some of it steamed over the hot-spring jigoku. Pick one up around the hells or the station.',
                   'เบปปุคือเมืองพุดดิ้ง - พุดดิ้งคัสตาร์ดเนื้อแน่น บางเจ้านึ่งด้วยไอน้ำจากบ่อนรก หาซื้อแถวบ่อนรกหรือสถานี'),
          refs: { map: 'https://maps.google.com/?q=Beppu+purin+pudding' } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d5-sushi',
          title: L('Katsugyo kaiten sushi', 'ซูชิสายพานปลาเป็น'),
          place: L('Live-fish conveyor sushi', 'ซูชิสายพานปลาสดเป็นๆ'),
          blurb: L('Plates of just-cut seafood circling the counter - the catch fresh from Beppu Bay.',
                   'จานซีฟู้ดหั่นสดๆ วนรอบเคาน์เตอร์ - ปลาสดจากอ่าวเบปปุ'),
          refs: { map: 'https://maps.google.com/?q=Katsugyo+Kaiten+Sushi+Beppu' } },

        { type: 'step', time: '18:30', meridiem: 'Evening', kind: 'Transfer', icon: 'car',
          title: L('Drive Beppu -> Yufuin', 'ขับเบปปุ -> ยูฟุอิน'),
          place: L('~40 min over the pass', '~40 นาที ข้ามช่องเขา'),
          blurb: L('A short climb over the Yufu hills into the valley town for the night.',
                   'ขับไต่เขายูฟุสั้นๆ ลงสู่เมืองในหุบเขาเพื่อค้างคืน'),
          refs: { map: 'https://maps.google.com/?q=Yufuin' } },

        { type: 'step', time: '19:15', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in - Yufuin ryokan', 'เช็คอิน - เรียวกังยูฟุอิน'),
          place: L('Mt Yufu view - two nights', 'วิวภูเขายูฟุ - สองคืน'),
          blurb: L('A room with its own bath under the twin-peaked mountain - the headline stay, kept two nights.',
                   'ห้องพักพร้อมอ่างส่วนตัวใต้ภูเขายอดคู่ - ไฮไลต์การพัก เก็บไว้สองคืน'),
          refs: { map: 'https://maps.google.com/?q=Yufuin+ryokan', reservation: { time: '19:15', code: 'YUF-RYO', party: L('Nights 3-4 - 2 nights - to book', 'คืน 3-4 - 2 คืน - รอจอง') },
                  notes: L('NOT BOOKED YET. Yufuin ryokan are small, so they go early in foliage season - reckon on 8-16 weeks ahead. Three candidates: (1) Yufuin Santoukan, yufuin-santokan.com - the best location, about 2 minutes from both Lake Kinrin and Yunotsubo street, 13 rooms of which 6 have a private open-air bath, kaiseki served in the room; (2) Hinoharu Ryokan - central, roughly 10 minutes from the station, three free private baths and a 24-hour open-air bath, wagyu kaiseki, easy to book in English on Booking.com or Rakuten Travel; (3) Kotobuki Hananosho - the only one found with a room sleeping up to 6, and free parking, so the cheapest way to keep everyone together. The famous ones, Kamenoi Besso and Sanso Murata, are a big step up in price and Sanso Murata has only 12 rooms.', 'ยังไม่จอง - เรียวกังยูฟุอินเป็นที่เล็กๆ ช่วงใบไม้เปลี่ยนสีเต็มเร็ว ควรจองล่วงหน้า 8-16 สัปดาห์ - ตัวเลือก 3 ที่: (1) Yufuin Santoukan (yufuin-santokan.com) ทำเลดีที่สุด ห่างบึงคินรินและถนนยูโนะทสึโบราว 2 นาที มี 13 ห้อง 6 ห้องมีออนเซนกลางแจ้งส่วนตัว เสิร์ฟไคเซกิในห้อง (2) Hinoharu Ryokan อยู่กลางเมือง ห่างสถานีราว 10 นาที มีบ่อแช่ส่วนตัวฟรี 3 บ่อ ออนเซนกลางแจ้ง 24 ชม. ไคเซกิเนื้อวากิว จองภาษาอังกฤษง่ายผ่าน Booking.com หรือ Rakuten Travel (3) Kotobuki Hananosho เป็นที่เดียวที่เจอว่ามีห้องนอนได้ถึง 6 คน และมีที่จอดรถฟรี เป็นวิธีถูกที่สุดที่จะอยู่ห้องเดียวกันทั้งกลุ่ม - ส่วนที่ดังอย่าง Kamenoi Besso กับ Sanso Murata ราคาสูงขึ้นมาก และ Sanso Murata มีแค่ 12 ห้อง') } },

        { type: 'feature', time: '21:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d3-sake',
          title: L('Ryokan nightcap - Oita shochu', 'ดื่มชิลที่เรียวกัง - โชจูโออิตะ'),
          place: L('Lounge by the fire - local sake & mugi-shochu', 'เลานจ์ริมเตาผิง - สาเก & มุงิโชจูท้องถิ่น'),
          blurb: L('Wind down after the bath in the ryokan lounge - Oita is barley-shochu country (Iichiko, Nikaido), with local Yufu sake and plum wine too. A quiet, warm last drink under the mountain.',
                   'ผ่อนคลายหลังแช่ออนเซนที่เลานจ์เรียวกัง - โออิตะคือถิ่นมุงิโชจู (อิจิโกะ, นิคาอิโด) มีสาเกท้องถิ่นยูฟุและอุเมะชู (เหล้าบ๊วย) ด้วย - ดื่มอุ่นๆ เงียบๆ ใต้ภูเขา'),
          refs: { notes: L('Many ryokans have a free lounge bar or a help-yourself sake corner - ask at check-in.', 'เรียวกังหลายแห่งมีเลานจ์บาร์ฟรี หรือมุมสาเกบริการตัวเอง - ถามตอนเช็คอิน') } },
      ],
    },
    {
      label: 'Day 04', labelTh: 'วันที่ 04', theme: 'botan',
      date: L('Tuesday - 24 Nov 2026', 'อังคาร - 24 Nov 2026'),
      title: L('Yufuin', 'ยูฟุอิน'),
      subtitle: L('Lake Mist & a Mountain Onsen Town', 'ไอหมอกริมบึง & เมืองออนเซนเชิงเขา'),
      note: L(
        'A short, beautiful drive over the hills to the gentlest town of the trip - a misty lake, a long shopping lane, and a night in a ryokan under Mt Yufu. The lakeside maples peak mid-November so expect them thinning by now, but the cold mornings that make the mist are exactly what late November brings.',
        'ขับสั้นๆ ผ่านเนินเขาสู่เมืองที่นุ่มนวลที่สุดของทริป (ใบไม้ริมบึงพีคกลางพฤศจิกายน ตอนนี้เริ่มร่วงแล้ว แต่เช้าที่หนาวจัดซึ่งทำให้เกิดไอหมอกคือของดีปลายพฤศจิกายนพอดี) - บึงที่มีไอหมอก ถนนช้อปยาวๆ และค้างคืนในเรียวกังใต้ภูเขายูฟุ'
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
          blurb: L('Warm springs feed the lake, so on a cold morning a soft mist hangs over the water. The lakeside maples peak around mid-November, so by now expect the last of the colour and a lot of fallen leaves on the path.',
                   'น้ำพุร้อนหล่อเลี้ยงบึง เช้าที่อากาศเย็นจึงมีไอหมอกบางๆ ลอยเหนือผิวน้ำ - ใบเมเปิลริมบึงพีคราวกลางพฤศจิกายน ตอนนี้จะเหลือสีช่วงท้ายๆ กับใบร่วงเต็มทางเดิน'),
          refs: { map: 'https://maps.google.com/?q=Kinrin+Lake+Yufuin', notes: L('Mist is best in the first hour after sunrise - and late November is prime mist season, because it needs a cold morning over the warm lake. The leaves may be past their peak but the mist is not.', 'ไอหมอกสวยสุดในชั่วโมงแรกหลังพระอาทิตย์ขึ้น - ปลายพฤศจิกายนคือช่วงไอหมอกดีที่สุด เพราะต้องมีเช้าที่หนาวปะทะน้ำอุ่นในบึง - ใบไม้อาจเลยพีคแล้ว แต่ไอหมอกไม่เลย') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d6-mabushi',
          title: L('Yufu Mabushi', 'ยูฟุ มาบุชิ'),
          place: L('Bungo beef over rice', 'เนื้อบุงโกะราดข้าว'),
          blurb: L('Local Bungo beef (or chicken) grilled and served hitsumabushi-style - eaten three ways from one bowl.',
                   'เนื้อบุงโกะท้องถิ่น (หรือไก่) ย่างเสิร์ฟสไตล์ฮิตสึมาบุชิ - กินได้สามแบบจากชามเดียว'),
          refs: { map: 'https://maps.google.com/?q=Yufumabushi+Shin+Yufuin' } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d6-yunotsubo',
          title: L('Yunotsubo Kaido', 'ถนนยูโนทสึโบะ'),
          place: L('Main street & Floral Village', 'ถนนหลัก & Floral Village'),
          blurb: L('A long lane of craft shops, snack stalls and cafés leading from the station to the lake.',
                   'ถนนยาวเรียงรายร้านงานคราฟต์ ร้านของกินเล่น และคาเฟ่ ทอดจากสถานีสู่บึง'),
          refs: { map: 'https://maps.google.com/?q=Yunotsubo+Kaido+Yufuin' } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d6-sweets',
          title: L('Yufuin Sweets - B-speak & Milch', 'ของหวานยูฟุอิน - B-speak & Milch'),
          place: L('Roll cake & cheese tart - Yunotsubo', 'โรลเค้ก & ชีสทาร์ต - ยูโนทสึโบะ'),
          blurb: L('Yufuin is a dessert town - the melt-in-the-mouth P-roll cake at B-speak and warm German-style cheese tarts at Milch, both on Yunotsubo Kaido.',
                   'ยูฟุอินคือเมืองของหวาน - โรลเค้กละลายในปาก P-roll ที่ B-speak และชีสทาร์ตสไตล์เยอรมันอุ่นๆ ที่ Milch ทั้งคู่อยู่บนถนนยูโนทสึโบะ'),
          refs: { map: 'https://maps.google.com/?q=B-speak+roll+cake+Yufuin', notes: L('Milch (cheese tart) is a few doors down on Yunotsubo Kaido.', 'ร้าน Milch (ชีสทาร์ต) อยู่ถัดไปไม่กี่ร้านบนถนนยูโนทสึโบะ') } },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Onsen', icon: 'bed',
          title: L('Private rotenburo', 'อ่างกลางแจ้งส่วนตัว'),
          place: L('In-room open-air bath', 'อ่างกลางแจ้งในห้อง'),
          blurb: L('Steam rising into the cold night air with the mountain just above.',
                   'ไอน้ำลอยขึ้นสู่อากาศค่ำคืนที่หนาวเย็น มีภูเขาอยู่เหนือหัว'),
          refs: {} },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d6-ryokan',
          title: L('Ryokan kaiseki', 'ไคเซกิที่เรียวกัง'),
          place: L('In-house - seasonal course', 'ในที่พัก - คอร์สตามฤดู'),
          blurb: L('A private multi-course dinner of the season, served quietly in the room.',
                   'มื้อค่ำหลายคอร์สตามฤดูแบบส่วนตัว เสิร์ฟเงียบๆ ในห้องพัก'),
          refs: { booking: L('Included in stay', 'รวมในค่าที่พัก') } },

        { type: 'feature', time: '21:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d4-sake',
          title: L('Nightcap - Yufuin craft beer & sake', 'ดื่มปิดท้าย - คราฟต์เบียร์ยูฟุอิน & สาเก'),
          place: L('Fireside (irori) or a tiny Yufuin bar', 'ริมเตาอิโรริ หรือบาร์เล็กในยูฟุอิน'),
          blurb: L('After the kaiseki, a slow last drink - Yufuin brews its own craft beer, and there\'s Oita sake and shochu. Many ryokans pour it fireside or in the room; or step out to a small Yufuin bar.',
                   'หลังไคเซกิ จิบปิดท้ายช้าๆ - ยูฟุอินมีคราฟต์เบียร์ของตัวเอง และมีสาเก/โชจูโออิตะ - เรียวกังหลายแห่งเสิร์ฟริมเตาอิโรริหรือในห้อง หรือออกไปบาร์เล็กๆ ในเมืองยูฟุอิน'),
          refs: { notes: L('Ask the ryokan for the local pour; Yufuin town also has a few small bars.', 'ถามเรียวกังเรื่องเหล้าท้องถิ่น; ในเมืองยูฟุอินก็มีบาร์เล็กๆ ไม่กี่ร้าน') } },
      ],
    },
    {
      label: 'Day 05', labelTh: 'วันที่ 05', theme: 'kurogane',
      date: L('Wednesday - 25 Nov 2026', 'พุธ - 25 Nov 2026'),
      title: L('Return to Fukuoka', 'กลับสู่ฟุกุโอกะ'),
      subtitle: L('Drive Back & a Fukuoka Evening', 'ขับกลับ & ค่ำคืนฟุกุโอกะ'),
      note: L(
        'Catch the lake in its morning mist, then the drive back to Fukuoka and return the car. The afternoon and evening are free in the city - Ohori Park at the peak of its autumn colour, the bay tower at sunset, the Tenjin shops and illuminations, counter tempura, then Canal City after dark.',
        'เก็บภาพบึงในไอหมอกยามเช้า แล้วขับกลับฟุกุโอกะ คืนรถทันทีที่ถึง - บ่ายและค่ำว่างเที่ยวในเมือง - สวนโอโฮริช่วงใบไม้เปลี่ยนสีพีคพอดี หอคอยริมอ่าวตอนพระอาทิตย์ตก ช้อปเท็นจินกับไฟประดับ เทมปุระเคาน์เตอร์ แล้วปิดท้ายที่คาแนลซิตี้ยามค่ำ'
      ),
      coverId: 'day6-cover',
      activities: [
        { type: 'feature', time: '07:30', meridiem: 'Dawn', kind: 'Lake', imageId: 'a-d7-mist',
          title: L('Kinrin Lake at dawn', 'บึงคินรินยามรุ่ง'),
          place: L('Mist over still water', 'ไอหมอกเหนือผิวน้ำนิ่ง'),
          blurb: L('The reason to stay the night - the lake at its most beautiful before the day-trippers arrive. A cold late-November dawn is the best mist of the year: get there in the first hour of light.',
                   'เหตุผลที่ควรค้างคืน - บึงสวยที่สุดก่อนนักท่องเที่ยวไปเช้ากลับเย็นจะมาถึง - เช้าหนาวปลายพฤศจิกายนคือไอหมอกที่ดีที่สุดของปี ไปให้ทันชั่วโมงแรกของแสง'),
          refs: { map: 'https://maps.google.com/?q=Kinrin+Lake+Yufuin' } },

        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out - Yufuin ryokan', 'เช็คเอาท์ - เรียวกังยูฟุอิน'),
          place: L('Then drive back to Fukuoka', 'แล้วขับกลับฟุกุโอกะ'),
          blurb: L('Ryokan check-out ~10:00 - settle up after the lake walk and breakfast before the 2h drive north.',
                   'เรียวกังเช็คเอาท์ ~10:00 - เคลียร์บิลหลังเดินชมบึงและอาหารเช้า ก่อนขับขึ้นเหนือ 2 ชม.'),
          refs: { map: 'https://maps.google.com/?q=Yufuin+ryokan', notes: L('Check-out 10:00 - check-in was 16:00.', 'เช็คเอาท์ 10:00 - เช็คอิน 16:00') } },

        { type: 'step', time: '09:30', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Drive Yufuin -> Fukuoka', 'ขับยูฟุอิน -> ฟุกุโอกะ'),
          place: L('~2 h by expressway', '~2 ชม. ทางด่วน'),
          blurb: L('North-west off the mountains and back onto the expressway to the city.',
                   'มุ่งตะวันตกเฉียงเหนือลงจากภูเขากลับขึ้นทางด่วนสู่เมือง'),
          refs: { notes: L('Optional: stop in the Yame tea country for top-grade gyokuro (skip if not into tea).', 'แวะเสริม: ย่านชายาเมะซื้อชาเกียวคุโระเกรดท็อป (ข้ามได้ถ้าไม่อินชา)') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d7-lunch',
          title: L('Lunch stop - Hita', 'แวะกินเที่ยง - ฮิตะ'),
          place: L('Hita yakisoba - old-town stop', 'ฮิตะยากิโซบะ - แวะเมืองเก่า'),
          blurb: L('Break the drive back in the little castle town of Hita - crispy pan-fried Hita yakisoba, then a stroll through the Edo-era Mameda-machi streets.',
                   'พักระหว่างทางกลับที่เมืองเก่าฮิตะ - ฮิตะยากิโซบะเส้นกรอบ แล้วเดินเล่นย่านมาเมดะมาจิสมัยเอโดะ'),
          refs: { map: 'https://maps.google.com/?q=Hita+yakisoba+Mameda+machi', notes: L('Roughly on the Yufuin -> Fukuoka route - skip it if you prefer to push straight to Hakata.', 'อยู่ราวๆ เส้นยูฟุอิน -> ฟุกุโอกะ - ข้ามได้ถ้าอยากตรงกลับฮากาตะเลย') } },

        { type: 'step', time: '13:30', meridiem: 'Afternoon', kind: 'Transfer', icon: 'car',
          title: L('Return the car - Fukuoka', 'คืนรถ - ฟุกุโอกะ'),
          place: L('Toyota Rent a Car - Hakata Stn', 'โตโยต้าเร้นท์อะคาร์ - สถานีฮากาตะ'),
          blurb: L('Hand the car back on arrival - the self-drive loop is done. Dazaifu and Itoshima are easy by train from here.',
                   'คืนรถทันทีที่ถึง - จบช่วงขับรถเอง - ดาไซฟุและอิโตชิมะนั่งรถไฟจากนี่สะดวก'),
          refs: { map: 'https://maps.google.com/?q=Toyota+Rent+a+Car+Hakata+Station', reservation: { time: '13:30', code: 'CAR-FUK-5D', party: L('Return - end of loop', 'คืนรถ - จบลูป') } } },

        { type: 'step', time: '14:00', meridiem: 'Afternoon', kind: 'Check-in', icon: 'bed',
          title: L('Check in - city hotel', 'เช็คอิน - โรงแรมในเมือง'),
          place: L('City hotel - return stay (nights 5-8)', 'โรงแรมในเมือง - ช่วงกลับ (คืน 5-8)'),
          blurb: L('Check in to the Fukuoka base for the rest of the trip - one hotel, right through to the flight home.',
                   'เช็คอินโรงแรมฐานฟุกุโอกะสำหรับช่วงที่เหลือ - โรงแรมเดียวยาวจนวันบินกลับ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+city+hotels', reservation: { time: '14:00', code: 'FUK-RETURN', party: L('Base nights 5-8 - to book', 'พักคืนที่ 5-8 - รอจอง') }, notes: L('NOT BOOKED YET, and separate from the Monterey (night 1). Four nights, and Sat 28 Nov will price higher than the weeknights - worth checking whether that one night is cheaper elsewhere. Three candidates: (1) Oriental Hotel Fukuoka Hakata Station, fukuoka-orientalhotel.com/en - one minute from JR Hakata, and its Deluxe Twin takes 5, so the whole group fits in one room; best base for the Dazaifu and Itoshima train days; (2) CROSS Life Hakata Yanagibashi - bunk rooms for 4 and genuine connecting rooms, sits between Hakata and Tenjin, best value of the three; (3) Solaria Nishitetsu Hotel Fukuoka, solaria-h.jp/english.html - three minutes from Tenjin station with a triple room for up to 4, and you can walk home from Daimyo and Nakasu. City hotels have far more supply than the ryokan, so book this one last.', 'ยังไม่จอง และเป็นคนละที่กับ Monterey (คืน 1) - พัก 4 คืน และคืนเสาร์ 28 พ.ย. ราคาจะสูงกว่าวันธรรมดา ลองเช็กว่าคืนนั้นย้ายไปที่อื่นถูกกว่าไหม - ตัวเลือก 3 ที่: (1) Oriental Hotel Fukuoka Hakata Station (fukuoka-orientalhotel.com/en) ห่าง JR ฮากาตะ 1 นาที ห้อง Deluxe Twin นอนได้ 5 คน ทั้งกลุ่มอยู่ห้องเดียวกันได้ และเป็นฐานที่ดีที่สุดสำหรับวันนั่งรถไฟไปดาไซฟุกับอิโตชิมะ (2) CROSS Life Hakata Yanagibashi มีห้องเตียงสองชั้นนอน 4 คน และมีห้องเชื่อมกันจริงๆ อยู่ระหว่างฮากาตะกับเท็นจิน คุ้มที่สุดในสามที่ (3) Solaria Nishitetsu Hotel Fukuoka (solaria-h.jp/english.html) ห่างสถานีเท็นจิน 3 นาที มีห้องทริปเปิลนอนได้ถึง 4 คน และเดินกลับจากไดเมียวหรือนากาสึได้ - โรงแรมในเมืองมีห้องเยอะกว่าเรียวกังมาก จองที่นี่เป็นอันสุดท้ายได้') } },

        { type: 'feature', time: '14:45', meridiem: 'Afternoon', kind: 'Park', imageId: 'a-d9-ohori',
          title: L('Ohori Park', 'สวนโอโฮริ'),
          place: L('Lake park & Japanese garden', 'สวนริมทะเลสาบ & สวนญี่ปุ่น'),
          blurb: L('Drop the bags and unwind by the big city lake - a loop of the water and the quiet Japanese garden tucked in one corner, which is at the peak of its maple colour right now. The ginkgo along the Fukuoka Castle ruins next door turn at the same time.',
                   'วางกระเป๋าแล้วออกมาเดินเล่นริมทะเลสาบกลางเมือง - เดินรอบบึงและแวะสวนญี่ปุ่นเงียบๆ ที่ซ่อนอยู่มุมหนึ่ง ตอนนี้ใบเมเปิลกำลังพีคพอดี - ใบแปะก๊วยแถวซากปราสาทฟุกุโอกะข้างๆ ก็เปลี่ยนสีพร้อมกัน'),
          refs: { map: 'https://maps.google.com/?q=Ohori+Park+Fukuoka', booking: L('Japanese garden - ¥250', 'สวนญี่ปุ่น - ¥250'),
                  notes: L('Japanese garden 09:00-17:00, closed Mondays - fine on a Wednesday. Mid-Nov to early Dec is its window, so this is good timing.', 'สวนญี่ปุ่นเปิด 09:00-17:00 ปิดวันจันทร์ - วันพุธไปได้ - ช่วงสวยคือกลาง พ.ย. ถึงต้น ธ.ค. มาถูกจังหวะพอดี') } },

        { type: 'feature', time: '16:15', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d9-tower',
          title: L('Fukuoka Tower & Momochi', 'ฟุกุโอกะทาวเวอร์ & โมโมจิ'),
          place: L('Bayfront - sunset ~17:10', 'ริมอ่าว - พระอาทิตย์ตก ~17:10'),
          blurb: L('A mirror-glass tower on the bay - go up for the view, or just walk the seaside at golden hour as the lights come on.',
                   'หอกระจกริมอ่าว - ขึ้นไปชมวิว หรือเดินเล่นริมทะเลช่วงแสงทองตอนไฟเริ่มติด'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+Tower', booking: L('Observatory - ¥800', 'หอชมวิว - ¥800') } },

        { type: 'feature', time: '17:30', meridiem: 'Evening', kind: 'Wander', imageId: 'a-d7-shopping',
          title: L('Tenjin & Daimyo', 'เท็นจิน & ไดเมียว'),
          place: L('Shops & illuminations', 'ช้อปปิ้ง & ไฟประดับ'),
          blurb: L('Back near the hotel - the Tenjin shops and the Daimyo backstreets, then the illuminations through Tenjin Chuo Park and the ACROS forest once it is dark.',
                   'กลับมาแถวโรงแรม - ร้านค้าย่านเท็นจินและตรอกไดเมียว แล้วชมไฟประดับที่สวนเท็นจินชูโอและป่า ACROS พอฟ้ามืด'),
          refs: { map: 'https://maps.google.com/?q=Tenjin+Fukuoka' } },

        { type: 'feature', time: '18:00', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d7-tempura',
          title: L('Tempura Hirao', 'เทมปุระ ฮิราโอะ'),
          place: L('Counter tempura, fried to order', 'เทมปุระเคาน์เตอร์ ทอดสดทีละชิ้น'),
          blurb: L('Piece by piece off the fryer at the counter - a Fukuoka favourite, light and crisp.',
                   'ทอดทีละชิ้นเสิร์ฟที่เคาน์เตอร์ - ร้านโปรดของฟุกุโอกะ เบาและกรอบ'),
          refs: { map: 'https://maps.google.com/?q=Tempura+Hirao+Fukuoka',
                  reservation: { time: '18:00', code: 'HIRAO-01', party: L('Dinner - counter', 'มื้อค่ำ - เคาน์เตอร์') },
                  notes: L('Closes around 20:00 - go early.', 'ปิดราว 20:00 ไปแต่หัวค่ำ') } },

        { type: 'feature', time: '20:00', meridiem: 'Night', kind: 'Wander', imageId: 'a-d10-canal',
          title: L('Canal City Hakata', 'คาแนลซิตี้ ฮากาตะ'),
          place: L('Fountain show & illuminations', 'โชว์น้ำพุ & ไฟประดับ'),
          blurb: L('Wind down at the canal-side mall complex - a fountain-and-light show on the hour and the Canal Illumination running from mid-November, with shops and cafés to browse.',
                   'ปิดท้ายที่คอมเพล็กซ์ห้างริมคลอง - โชว์น้ำพุประกอบไฟทุกชั่วโมง กับไฟประดับคาแนลที่เปิดตั้งแต่กลางพฤศจิกายน พร้อมร้านค้าและคาเฟ่ให้เดินเล่น'),
          refs: { map: 'https://maps.google.com/?q=Canal+City+Hakata' } },

        { type: 'feature', time: '21:30', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d5-bar',
          title: L('Bar Higuchi - cocktails', 'บาร์ฮิงุจิ - ค็อกเทล'),
          place: L('Acclaimed cocktail bar - Nakasu / Tenjin', 'บาร์ค็อกเทลระดับตำนาน - นากาสึ / เท็นจิน'),
          blurb: L('One of Fukuoka\'s most celebrated cocktail bars - master bartender Higuchi\'s precise classic drinks in an intimate, old-school room. Ask for a seasonal fresh-fruit cocktail.',
                   'หนึ่งในบาร์ค็อกเทลที่ได้รับการยกย่องที่สุดของฟุกุโอกะ - ค็อกเทลคลาสสิกทำประณีตโดยบาร์เทนเดอร์ระดับมาสเตอร์ ฮิงุจิ ในห้องเล็กบรรยากาศคลาสสิก - ลองสั่งค็อกเทลผลไม้สดตามฤดูกาล'),
          refs: { map: 'https://maps.google.com/?q=Bar+Higuchi+Fukuoka', notes: L('Small counter bar - best for a small group, and a seat/cover charge is normal at Japanese bars. Want it livelier for the whole crew? A Daimyo craft-beer hall is the alternative.', 'บาร์เคาน์เตอร์เล็ก - เหมาะกลุ่มเล็ก และมีค่าที่นั่ง/ค่าโต๊ะตามธรรมเนียมบาร์ญี่ปุ่น - อยากครื้นเครงทั้งกลุ่ม ลองคราฟต์เบียร์ฮอลล์ย่านไดเมียวแทนได้') } },
      ],
    },
    {
      label: 'Day 06', labelTh: 'วันที่ 06', theme: 'kohaku',
      date: L('Thursday - 26 Nov 2026', 'พฤหัสบดี - 26 Nov 2026'),
      title: L('Kumamoto', 'คุมาโมโตะ'),
      subtitle: L('Castle City', 'เมืองปราสาท'),
      note: L(
        'A Shinkansen day-trip from the Fukuoka base - one of the great fortresses of Japan, a strolling garden, the local sweet and horse sashimi, then the bullet train back by night.',
        'เที่ยวเช้าไป-เย็นกลับด้วยชินคันเซนจากฐานฟุกุโอกะ - หนึ่งในป้อมปราการยิ่งใหญ่ของญี่ปุ่น สวนเดินเล่น ขนมพื้นเมือง และม้าดิบ แล้วนั่งชินคันเซนกลับตอนค่ำ'
      ),
      coverId: 'day3-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Shinkansen - Hakata -> Kumamoto', 'ชินคันเซน - ฮากาตะ -> คุมาโมโตะ'),
          place: L('~40 min - Kyushu Shinkansen', '~40 นาที - ชินคันเซนคิวชู'),
          blurb: L('A quick bullet-train hop down from Hakata - no car today. Trains run several times an hour; reserved or non-reserved both fine.',
                   'นั่งชินคันเซนจากฮากาตะลงมาแป๊บเดียว - วันนี้ไม่ใช้รถ - รถออกหลายเที่ยวต่อชั่วโมง จองหรือไม่จองที่นั่งก็ได้'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Station', notes: L('~¥3,300 each way - ~40 min - day-trip from the Fukuoka hotel.', '~¥3,300 ต่อเที่ยว - ~40 นาที - ไป-กลับจากโรงแรมฟุกุโอกะ') } },

        { type: 'feature', time: '09:30', meridiem: 'Morning', kind: 'Castle', imageId: 'a-d4-castle',
          title: L('Kumamoto Castle', 'ปราสาทคุมาโมโตะ'),
          place: L('One of Japan\'s great keeps', 'หนึ่งในปราสาทยิ่งใหญ่ของญี่ปุ่น'),
          blurb: L('Black-and-white towers on cyclopean curved stone walls - the main keep reopened after the 2016 quake. The ginkgo grove in front of it peaks in late November, which is exactly now: the castle is nicknamed Ginnan-jo, the ginkgo castle. Go early before the crowds.',
                   'หอปราสาทขาว-ดำบนกำแพงหินโค้งมหึมา - หอหลักเปิดอีกครั้งหลังแผ่นดินไหวปี 2016 - ดงแปะก๊วยหน้าปราสาทพีคปลายพฤศจิกายนซึ่งตรงกับตอนนี้พอดี ปราสาทนี้มีอีกชื่อว่า "กินนันโจ" หรือปราสาทแปะก๊วย - ไปเช้าก่อนคนเยอะ'),
          refs: { map: 'https://maps.google.com/?q=Kumamoto+Castle', official: 'https://castle.kumamoto-guide.jp/en/',
                  booking: L('Keep entry - ¥800', 'เข้าหอปราสาท - ¥800') } },

        { type: 'feature', time: '11:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d4-katsuretsu',
          title: L('Katsuretsu-tei', 'คัตสึเร็ตสึเทอิ'),
          place: L('Tonkatsu - AMU Plaza', 'ทงคตสึ - AMU Plaza'),
          blurb: L('A Kumamoto institution for thick, juicy pork cutlet with shredded cabbage and house sauce.',
                   'ร้านดังคุมาโมโตะ ทงคตสึชิ้นหนาฉ่ำ เสิร์ฟกับกะหล่ำซอยและซอสสูตรร้าน'),
          refs: { map: 'https://maps.google.com/?q=Katsuretsutei+Amu+Plaza+Kumamoto', official: 'https://hayashi-sangyo.jp/' } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'Castle', imageId: 'a-d4-suizenji',
          title: L('Suizenji Jojuen', 'สวนซุยเซนจิ'),
          place: L('A miniature Tokaido garden', 'สวนจำลองเส้นทางโทไกโด'),
          blurb: L('A strolling garden that recreates the old road to Edo in miniature - including a little grassy Mt Fuji.',
                   'สวนเดินเล่นที่จำลองเส้นทางสู่เอโดะแบบย่อส่วน - มีภูเขาฟูจิหญ้าจิ๋วด้วย'),
          refs: { map: 'https://maps.google.com/?q=Suizenji+Jojuen', booking: L('Entry - ¥400', 'ค่าเข้า - ¥400'),
                  notes: L('Unlike the castle, this garden peaks in early December - expect partial, early-stage colour rather than full autumn. Worth it for the garden itself, not for the leaves.', 'ต่างจากปราสาท - สวนนี้พีคต้นธันวาคม ตอนนี้จะเปลี่ยนสีแค่บางส่วน ยังไม่เต็มที่ - มาเพื่อตัวสวนเอง ไม่ใช่เพื่อใบไม้') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Sweets', imageId: 'a-d4-sweets',
          title: L('Ikinari Dango', 'อิคินาริ ดังโงะ'),
          place: L('Kumamoto sweet - Sakuranobaba', 'ขนมคุมาโมโตะ - ซากุระโนะบาบะ'),
          blurb: L('A homely Kumamoto sweet - steamed dough wrapped around a slice of sweet potato and sweet red-bean paste. Grab one at the castle-side Sakuranobaba Josaien.',
                   'ขนมพื้นบ้านคุมาโมโตะ - แป้งนึ่งห่อมันหวานกับถั่วแดงกวน หาซื้อได้ที่ซากุระโนะบาบะข้างปราสาท'),
          refs: { map: 'https://maps.google.com/?q=Sakuranobaba+Josaien+Kumamoto' } },

        { type: 'feature', time: '17:00', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d4-basashi',
          title: L('Basashi early dinner', 'มื้อเย็นบาซาชิ'),
          place: L('Horse sashimi - Kumamoto specialty', 'ม้าดิบ - ของขึ้นชื่อคุมาโมโตะ'),
          blurb: L('The local delicacy - lean and fatty cuts of horse, sliced thin with ginger, garlic and sweet soy. An early dinner before the train back.',
                   'ของพื้นเมือง - ม้าดิบทั้งส่วนเนื้อแดงและติดมัน หั่นบางเสิร์ฟกับขิง กระเทียม และซีอิ๊วหวาน - มื้อเย็นก่อนขึ้นรถไฟกลับ'),
          refs: { map: 'https://maps.google.com/?q=Basashi+Kumamoto',
                  reservation: { time: '17:00', code: 'BASA-01', party: L('Early dinner - book ahead', 'มื้อเย็น - จองล่วงหน้า') } } },

        { type: 'step', time: '19:00', meridiem: 'Night', kind: 'Train', icon: 'train',
          title: L('Shinkansen - Kumamoto -> Fukuoka', 'ชินคันเซน - คุมาโมโตะ -> ฟุกุโอกะ'),
          place: L('~40 min - back to the city hotel', '~40 นาที - กลับโรงแรมในเมือง'),
          blurb: L('Bullet train back to Hakata and the Fukuoka base for the night - fast trains run late, so no rush.',
                   'นั่งชินคันเซนกลับฮากาตะและฐานฟุกุโอกะเพื่อนอน - รถเที่ยวด่วนมีถึงดึก ไม่ต้องรีบ'),
          refs: { map: 'https://maps.google.com/?q=Kumamoto+Station', notes: L('Sleep in Fukuoka - same city hotel as the other return nights.', 'นอนฟุกุโอกะ - โรงแรมเดิมช่วงกลับ') } },

        { type: 'feature', time: '21:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d6-bar',
          title: L('Late drink in Daimyo', 'ดื่มดึกย่านไดเมียว'),
          place: L('Craft beer / standing bar', 'คราฟต์เบียร์ / บาร์ยืนดื่ม'),
          blurb: L('Back off the bullet train - a low-key nightcap in Daimyo: a craft-beer taproom or a tiny standing bar (kakuuchi) for a sake or highball before bed.',
                   'ลงจากชินคันเซน - ดื่มปิดท้ายสบายๆ ย่านไดเมียว: แท็ปรูมคราฟต์เบียร์ หรือบาร์ยืนดื่มเล็กๆ (คาคุอุจิ) สั่งสาเกหรือไฮบอลก่อนนอน'),
          refs: { map: 'https://maps.google.com/?q=Daimyo+craft+beer+bar+Fukuoka', notes: L('Walkable from Tenjin - plenty of small bars open late.', 'เดินจากเท็นจินได้ - มีบาร์เล็กเปิดดึกเยอะ') } },
      ],
    },
    {
      label: 'Day 07', labelTh: 'วันที่ 07', theme: 'urushi',
      date: L('Friday - 27 Nov 2026', 'ศุกร์ - 27 Nov 2026'),
      title: L('Dazaifu', 'ดาไซฟุ'),
      subtitle: L('Shrine, Sweets & River Town', 'ศาลเจ้า ขนม และเมืองริมน้ำ'),
      note: L(
        'A train day south of the city - the great shrine of learning at the peak of its maple colour, the moss garden next door, its woven-wood Starbucks, then a flat-bottomed boat down the canals of Yanagawa, and yatai again at night.',
        'วันนั่งรถไฟลงใต้ของเมือง - ศาลเจ้าแห่งการเรียนช่วงใบเมเปิลพีคพอดี สวนมอสส์ข้างๆและ Starbucks ไม้สาน แล้วล่องเรือท้องแบนตามคลองยานางาวะ ปิดท้ายด้วยยาไตอีกครั้งยามค่ำ'
      ),
      coverId: 'day7-cover',
      activities: [
        { type: 'feature', time: '06:30', meridiem: 'Morning', kind: 'Run', imageId: 'a-d2-cityrun',
          title: L('Morning city run', 'วิ่งเช้าในเมือง'),
          place: L('Ohori Park + Castle loop - ~6.5 km', 'ลูปสวนโอโฮริ + ปราสาท - ~6.5 กม.'),
          blurb: L('A gentle ~6.5 km dawn loop from the hotel - the lake at Ohori Park (its flat 2 km jogging track and the red Ukimido pavilion), up to the Fukuoka Castle ruins for a sunrise city view, then back near the hotel for coffee. Quiet and misty at 6 am - perfect for the vlog.',
                   'ลูปเช้า ~6.5 กม. ชิลล์ๆ จากโรงแรม - บึงสวนโอโฮริ (ลู่วิ่งทางเรียบ 2 กม. กับศาลาแดงอุคิมิโด) ขึ้นซากปราสาทฟุกุโอกะชมวิวเมืองยามอาทิตย์ขึ้น แล้ววนกลับใกล้โรงแรมจิบกาแฟ - ตอน 6 โมงคนน้อย มีไอหมอก เหมาะถ่าย vlog สุดๆ'),
          refs: { map: 'https://maps.google.com/?q=Ohori+Park+Fukuoka', notes: L('Run 06:30-07:30 before the Dazaifu train - flat & easy - tap each stop below for the map.', 'วิ่ง 06:30-07:30 ก่อนนั่งรถไฟไปดาไซฟุ - ทางเรียบ วิ่งง่าย - แตะจุดแวะด้านล่างเพื่อดูแผนที่') } },

        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Nishitetsu -> Dazaifu', 'นิชิเท็ตสึ -> ดาไซฟุ'),
          place: L('Tenjin -> Dazaifu - ~40 min', 'เท็นจิน -> ดาไซฟุ - ~40 นาที'),
          blurb: L('The private line south, changing once at Futsukaichi.',
                   'รถไฟเอกชนมุ่งใต้ เปลี่ยนขบวนหนึ่งครั้งที่ฟุตสึไกจิ'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Station', booking: L('Tabito / IC - ~¥420', 'ตั๋ว Tabito / IC - ~¥420') } },

        { type: 'feature', time: '09:45', meridiem: 'Morning', kind: 'Shrine', imageId: 'a-d2-tenmangu',
          title: L('Dazaifu Tenmangu', 'ดาไซฟุ เท็มมังกู'),
          place: L('Shrine of learning', 'ศาลเจ้าแห่งการเรียน'),
          blurb: L('A vermilion shrine to the deity of scholarship, ringed by ancient plum trees and arched red bridges - and the maples over the arched bridges are at their peak in late November.',
                   'ศาลเจ้าสีชาดของเทพเจ้าแห่งการเรียน รายล้อมด้วยต้นบ๊วยเก่าแก่และสะพานแดงโค้ง - ใบเมเปิลเหนือสะพานโค้งกำลังพีคช่วงปลายพฤศจิกายนพอดี'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Tenmangu', official: 'https://www.dazaifutenmangu.or.jp/en',
                  booking: L('Free entry to grounds', 'เข้าบริเวณฟรี'), notes: L('Buy an omamori charm for good study luck. Worth knowing: Kamado Jinja, 10 min by bus up the hill, runs a maple light-up from sunset to 21:00 in this exact window (22 Nov - 7 Dec in 2025) - it would mean giving up the Nakasu night, but it is the best evening foliage in the area.', 'ซื้อเครื่องรางโอมาโมริขอพรเรื่องการเรียน - ข้อมูลเสริม: ศาลเจ้าคามาโดะ นั่งรถเมล์ขึ้นเขา 10 นาที มีไลต์อัพใบไม้แดงตั้งแต่พระอาทิตย์ตกถึง 21:00 ตรงกับช่วงนี้พอดี (ปี 2025 คือ 22 พ.ย. - 7 ธ.ค.) - ต้องแลกกับคืนนากาสึ แต่เป็นใบไม้แดงยามค่ำที่ดีที่สุดแถวนี้') } },

        { type: 'feature', time: '10:45', meridiem: 'Late morning', kind: 'Garden', imageId: 'a-d7-komyozenji',
          title: L('Komyozenji moss garden', 'สวนมอสส์โคเมียวเซนจิ'),
          place: L('Moss, raked gravel & maples', 'มอสส์ กรวดเรียว & ใบเมเปิล'),
          blurb: L('A small Zen temple five minutes from the shrine, and the one place in Dazaifu people come specifically for the leaves - a dry gravel garden at the front, and a back garden where red maples stand over deep green moss. You sit on the wooden veranda and look at it.',
                   'วัดเซนเล็กๆ ห่างจากศาลเจ้าห้านาที เป็นที่เดียวในดาไซฟุที่คนตั้งใจมาดูใบไม้โดยเฉพาะ - ด้านหน้าเป็นสวนกรวดแห้ง ด้านหลังเป็นเมเปิลแดงตั้งอยู่บนพื้นมอสส์เขียวเข้ม - นั่งที่ระเบียงไม้แล้วมองเฉยๆ'),
          refs: { map: 'https://maps.google.com/?q=Komyozenji+Dazaifu', booking: L('Entry - ¥200', 'ค่าเข้า - ¥200'),
                  notes: L('Roughly 09:30-16:30, cash only, and photography inside the garden is restricted - check the signs at the gate. Small and gets busy in koyo season, so go straight after the shrine.', 'ประมาณ 09:30-16:30 รับเงินสดเท่านั้น และห้ามถ่ายรูปบางจุดในสวน - ดูป้ายตรงทางเข้า - ที่เล็กและคนเยอะช่วงใบไม้เปลี่ยนสี ควรไปต่อจากศาลเจ้าเลย') } },

        { type: 'feature', time: '11:20', meridiem: 'Late morning', kind: 'Wander', imageId: 'a-d2-omotesando',
          title: L('Omotesando & Umegae Mochi', 'ถนนซันโด & อุเมะกาเอะโมจิ'),
          place: L('The approach street', 'ถนนทางเข้าศาลเจ้า'),
          blurb: L('Grilled umegae mochi straight off the iron - sweet red bean in a crisp rice cake.',
                   'อุเมะกาเอะโมจิย่างร้อนๆ จากเตา - ไส้ถั่วแดงหวานในแป้งข้าวกรอบ'),
          refs: { map: 'https://maps.google.com/?q=Dazaifu+Tenmangu+Omotesando' } },

        { type: 'feature', time: '11:40', meridiem: 'Late morning', kind: 'Coffee', imageId: 'a-d2-starbucks',
          title: L('Starbucks Dazaifu', 'สตาร์บัคส์ ดาไซฟุ'),
          place: L('Designed by Kengo Kuma', 'ออกแบบโดย Kengo Kuma'),
          blurb: L('Two thousand cedar batons woven across the facade - coffee inside a sculpture.',
                   'ไม้ซีดาร์สองพันชิ้นสานทั่วหน้าร้าน - จิบกาแฟในงานประติมากรรม'),
          refs: { map: 'https://maps.google.com/?q=Starbucks+Dazaifu+Omotesando' } },

        { type: 'step', time: '12:15', meridiem: 'Midday', kind: 'Train', icon: 'train',
          title: L('Nishitetsu -> Yanagawa', 'นิชิเท็ตสึ -> ยานางาวะ'),
          place: L('Dazaifu -> Yanagawa - ~50 min', 'ดาไซฟุ -> ยานางาวะ - ~50 นาที'),
          blurb: L('South again across the plain to the canal town.',
                   'มุ่งใต้อีกครั้งข้ามที่ราบสู่เมืองคลอง'),
          refs: { map: 'https://maps.google.com/?q=Nishitetsu+Yanagawa+Station' } },

        { type: 'feature', time: '13:15', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d2-unagi',
          title: L('Yanagawa Unagi Seiro-mushi', 'ข้าวหน้าปลาไหลนึ่ง ยานางาวะ'),
          place: L('Steamed eel on rice - Yanagawa specialty', 'อูนางิเซโระมุชิ - ของขึ้นชื่อยานางาวะ'),
          blurb: L('The signature lunch of Yanagawa - eel grilled then steamed over seasoned rice in a lacquer box, rich and tender. Classic spots: Wakamatsuya or Motoyoshiya.',
                   'มื้อเที่ยงซิกเนเจอร์ของยานางาวะ - ปลาไหลย่างแล้วนึ่งบนข้าวปรุงรสในกล่องไม้ เนื้อนุ่มเข้มข้น - ร้านคลาสสิก เช่น Wakamatsuya หรือ Motoyoshiya'),
          refs: { map: 'https://maps.google.com/?q=Yanagawa+unagi+seiro+mushi', notes: L('Famous shops can queue - go before the boat ride.', 'ร้านดังคิวยาว - ไปก่อนล่องเรือ') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Ferry', imageId: 'a-d2-yanagawa',
          title: L('Yanagawa river boat', 'ล่องเรือยานางาวะ'),
          place: L('Donko-bune punting', 'เรือพายดงโกะบุเนะ'),
          blurb: L('A boatman poles you down willow-lined canals under low stone bridges. Once it turns cold they run the heated kotatsu boats - worth asking whether they have started.',
                   'คนพายพาล่องคลองริมต้นหลิวลอดสะพานหินเตี้ยๆ - พออากาศเย็นจะเปลี่ยนเป็นเรือโคทัตสึอุ่นๆ ลองถามดูว่าเริ่มให้บริการหรือยัง'),
          refs: { map: 'https://maps.google.com/?q=Yanagawa+River+Cruise', booking: L('Boat - ~¥1,800 pp', 'ค่าเรือ - ~¥1,800/ท่าน') } },

        { type: 'step', time: '17:30', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Return to Fukuoka', 'กลับสู่ฟุกุโอกะ'),
          place: L('Yanagawa -> Tenjin - ~50 min', 'ยานางาวะ -> เท็นจิน - ~50 นาที'),
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
          place: L('Lively seafood izakaya - Nakasu', 'อิซากายะซีฟู้ดคึกคัก - นากาสึ'),
          blurb: L('A boisterous fisherman-style izakaya in Nakasu - live tanks, super-fresh sashimi and grilled skewers, with sake and beer flowing. Great for a lively group dinner.',
                   'อิซากายะสไตล์ชาวประมงคึกคักย่านนากาสึ - มีบ่อปลาเป็นๆ ซาชิมิสดมาก ของย่างเสียบไม้ พร้อมสาเก-เบียร์ไม่หยุด เหมาะกับมื้อค่ำกลุ่มครึกครื้น'),
          refs: { map: 'https://maps.google.com/?q=Seimon+Barai+izakaya+Nakasu+Fukuoka', notes: L('Nakasu-Kawabata - lively, fresh seafood - book for a group.', 'นากาสึ-คาวาบาตะ - คึกคัก ซีฟู้ดสด - กลุ่มควรจอง') } },

        { type: 'feature', time: '23:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d9-nightlife',
          title: L('Ibiza FUKUOKA', 'Ibiza FUKUOKA'),
          place: L('Nightclub - Daimyo', 'ไนต์คลับ - ไดเมียว'),
          blurb: L('A proper Friday night out - Ibiza, the Daimyo club on the 5th floor of The Shops (open 21:00 till 5am). Push on from the izakaya for whoever\'s still going.',
                   'จัดหนักคืนศุกร์ - Ibiza ไนต์คลับย่านไดเมียว ชั้น 5 ตึก The Shops (เปิด 21:00 ยันตี 5) - ต่อจากอิซากายะสำหรับคนที่ยังไหว'),
          refs: { map: 'https://maps.google.com/?q=Ibiza+Fukuoka+Daimyo', official: 'https://www.ibiza-fukuoka.jp/', notes: L('5F The Shops, 1-12-56 Daimyo - 21:00-05:00 - ~6 min from Tenjin Stn - pace it - two more days to go.', 'ชั้น 5 The Shops, 1-12-56 ไดเมียว - 21:00-05:00 - ~6 นาทีจากสถานีเท็นจิน - เผื่อแรง ยังเหลืออีก 2 วัน') } },
      ],
    },
    {
      label: 'Day 08', labelTh: 'วันที่ 08', theme: 'ai',
      date: L('Saturday - 28 Nov 2026', 'เสาร์ - 28 Nov 2026'),
      title: L('Itoshima', 'อิโตชิมะ'),
      subtitle: L('Coast, Oysters & the Last Night', 'ชายฝั่ง หอยนางรม และคืนสุดท้าย'),
      note: L(
        'No car today - out west to the Itoshima coast by train and local transport: the white sea-torii, seaside cafés along Sunset Road, grilled oysters at a kaki-goya hut, then back to the city for the last night out.',
        'วันนี้ไม่มีรถ - นั่งรถไฟ + รถท้องถิ่นไปชายฝั่งอิโตชิมะ: เสาโทริอิขาวกลางทะเล คาเฟ่ริมทะเลเลียบ Sunset Road หอยนางรมเผาที่กระท่อมคากิโกยะ แล้วกลับเข้าเมืองไปปาร์ตี้คืนสุดท้าย'
      ),
      coverId: 'day8-cover',
      activities: [
        { type: 'step', time: '09:00', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Train -> Itoshima', 'รถไฟ -> อิโตชิมะ'),
          place: L('JR -> Chikuzen-Maebaru - ~40 min', 'JR -> ชิคุเซน-มาเอบารุ - ~40 นาที'),
          blurb: L('Subway plus the JR Chikuhi line out to Itoshima - then a local bus, taxi or rental cycle to reach the coast.',
                   'รถไฟใต้ดิน + สาย JR ชิคุฮิ ออกสู่อิโตชิมะ - แล้วต่อรถบัส แท็กซี่ หรือจักรยานเช่าไปจุดชายฝั่ง'),
          refs: { map: 'https://maps.google.com/?q=Chikuzen-Maebaru+Station', booking: L('IC - ~¥630', 'แตะ IC - ~¥630'), notes: L('Coast spots are spread out - a taxi, bus pass or rental bike helps without a car.', 'จุดชายฝั่งกระจายตัว - แท็กซี่ บัสพาส หรือจักรยานเช่าช่วยได้ถ้าไม่มีรถ') } },

        { type: 'feature', time: '10:00', meridiem: 'Morning', kind: 'View', imageId: 'a-d8-torii',
          title: L('Sakurai Futamigaura', 'ซากุไร ฟุตามิงาอุระ'),
          place: L('White torii in the sea', 'เสาโทริอิขาวกลางทะเล'),
          blurb: L('A white gate standing in the waves beside the married-couple rocks - the postcard of Itoshima.',
                   'เสาโทริอิสีขาวตั้งกลางคลื่นข้างหินคู่สามีภรรยา - ภาพโปสการ์ดของอิโตชิมะ'),
          refs: { map: 'https://maps.google.com/?q=Sakurai+Futamigaura' } },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Wander', imageId: 'a-d8-cafes',
          title: L('Sunset Road cafés', 'คาเฟ่เลียบ Sunset Road'),
          place: L('Palm Beach - photo spots', 'ปาล์มบีช - จุดถ่ายรูป'),
          blurb: L('A coast road of beach cafés and quirky photo spots - the red London bus, the angel-wings wall, the big "?" sign.',
                   'ถนนเลียบทะเลที่เต็มไปด้วยคาเฟ่ริมหาดและมุมถ่ายรูปน่ารัก - รถบัสลอนดอนแดง กำแพงปีกนางฟ้า และป้าย "?"'),
          refs: { map: 'https://maps.google.com/?q=Itoshima+Sunset+Road' } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d8-oyster',
          title: L('Kaki-goya oyster hut', 'กระท่อมหอยนางรมเผา'),
          place: L('Grill-your-own by the bay', 'เผากินเองริมอ่าว'),
          blurb: L('Seasonal huts along the bay where you grill plump local oysters yourself over a charcoal burner. The season runs roughly October to April, so late November is comfortably inside it.',
                   'กระท่อมตามฤดูริมอ่าว เผาหอยนางรมตัวอ้วนท้องถิ่นเองบนเตาถ่าน - ฤดูกาลราวตุลาคมถึงเมษายน ปลายพฤศจิกายนจึงอยู่ในช่วงสบายๆ'),
          refs: { map: 'https://maps.google.com/?q=Itoshima+Oyster+Hut+Kakigoya',
                  notes: L('Season Nov-Mar; busiest at weekends - some huts take bookings.', 'ฤดูกาล พ.ย.-มี.ค. เสาร์อาทิตย์คนเยอะ บางร้านจองได้') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d8-keya',
          title: L('Keya no Oto', 'เคยะ โนะ โอโตะ'),
          place: L('Basalt sea cliffs', 'หน้าผาหินบะซอลต์ริมทะเล'),
          blurb: L('Hexagonal basalt columns and a sea cave at the tip of the peninsula - a short detour if there is time.',
                   'เสาหินบะซอลต์หกเหลี่ยมและถ้ำทะเลที่ปลายคาบสมุทร - แวะสั้นๆ ได้ถ้ามีเวลา'),
          refs: { map: 'https://maps.google.com/?q=Keya+no+Oto+Itoshima',
                  notes: L('Itoshima\'s famous foliage spot is Raizan Sennyoji Daihioin and its 400-year-old maple, but it is inland in the hills - awkward without a car, and its peak is usually around mid-November, so by the 28th expect a carpet of fallen leaves rather than a full canopy. Only worth a taxi if the reports still look good.', 'จุดใบไม้แดงชื่อดังของอิโตชิมะคือวัดไรซัง เซ็นเนียวจิ ไดฮิโออิน กับต้นเมเปิลอายุ 400 ปี แต่อยู่ลึกเข้าไปในเขา - ไม่มีรถจะลำบาก และปกติพีคราวกลางพฤศจิกายน วันที่ 28 จึงน่าจะเป็นใบร่วงเต็มพื้นมากกว่าใบเต็มต้น - เหมาะจะนั่งแท็กซี่ไปก็ต่อเมื่อรายงานสภาพใบยังดีอยู่') } },

        { type: 'feature', time: '16:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d8-sunset',
          title: L('Sunset over the sea', 'พระอาทิตย์ตกริมทะเล'),
          place: L('West-facing coast', 'ชายฝั่งหันตะวันตก'),
          blurb: L('The whole coast faces west - find a beach spot and watch the sun go down around 17:10.',
                   'ชายฝั่งทั้งแนวหันทิศตะวันตก หาจุดริมหาดชมพระอาทิตย์ตกราว 17:10'),
          refs: {} },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Train back to Fukuoka', 'รถไฟกลับฟุกุโอกะ'),
          place: L('Chikuzen-Maebaru -> Tenjin / Hakata', 'ชิคุเซน-มาเอบารุ -> เท็นจิน / ฮากาตะ'),
          blurb: L('Back along the coast line into the city for dinner.',
                   'นั่งรถไฟเลียบชายฝั่งกลับเข้าเมืองไปกินมื้อค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Chikuzen-Maebaru+Station' } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d8-dinner',
          title: L('Hakata Mizutaki - Hanamidori', 'มิซุทากิฮากาตะ - ฮานามิโดริ'),
          place: L('Chicken hot pot - near Hakata Stn', 'หม้อไฟไก่ - ใกล้สถานีฮากาตะ'),
          blurb: L('A Fukuoka classic you have not had yet - clear, collagen-rich chicken hot pot at Hakata Hanamidori (branches by Hakata Station). Finish with rice porridge in the broth.',
                   'อาหารคลาสสิกฟุกุโอกะที่ยังไม่ได้กิน - หม้อไฟไก่น้ำใสคอลลาเจนเข้มข้นที่ฮานามิโดริ (มีสาขาใกล้สถานีฮากาตะ) - ปิดท้ายด้วยข้าวต้มในน้ำซุป'),
          refs: { map: 'https://maps.google.com/?q=Hakata+Hanamidori+Mizutaki', notes: L('Popular - reserve ahead, especially for a group.', 'ยอดนิยม - จองล่วงหน้า โดยเฉพาะมาเป็นกลุ่ม') } },

        { type: 'feature', time: '22:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d8-bar',
          title: L('Last-night cocktail bar', 'บาร์ค็อกเทลคืนสุดท้าย'),
          place: L('Daimyo craft cocktails', 'ค็อกเทลฝีมือดี ไดเมียว'),
          blurb: L('The last proper night out - settle into one of Daimyo\'s craft cocktail bars (Fukuoka has a serious bar scene) for a slow, well-made drink to close the trip.',
                   'คืนเต็มสุดท้าย - นั่งชิลที่บาร์ค็อกเทลฝีมือดีย่านไดเมียว (ฟุกุโอกะมีวงการบาร์จริงจัง) จิบเครื่องดื่มทำประณีตช้าๆ ปิดทริป'),
          refs: { map: 'https://maps.google.com/?q=cocktail+bar+Daimyo+Fukuoka', notes: L('Many run till ~01:00-02:00 - flight is the next day, so pace it.', 'หลายร้านเปิดถึง ~01:00-02:00 - พรุ่งนี้บิน เผื่อแรงด้วย') } },
      ],
    },
    {
      label: 'Day 09', labelTh: 'วันที่ 09', theme: 'ai',
      date: L('Sunday - 29 Nov 2026', 'อาทิตย์ - 29 Nov 2026'),
      title: L('Homeward', 'เดินทางกลับ'),
      subtitle: L('Last Morning, Flight Home', 'เช้าสุดท้าย บินกลับบ้าน'),
      note: L(
        'An early start for the 10:00 flight - but Fukuoka airport is right beside the city, so the subway ride is only a few minutes.',
        'ตื่นเช้าหน่อยเพราะไฟลท์ 10:00 - แต่สนามบินฟุกุโอกะอยู่ติดเมือง นั่งรถไฟใต้ดินแค่ไม่กี่นาที'
      ),
      coverId: 'day11-cover',
      activities: [
        { type: 'step', time: '06:30', meridiem: 'Early morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out - city hotel', 'เช็คเอาท์ - โรงแรมในเมือง'),
          place: L('City base', 'ฐานในเมือง'),
          blurb: L('Settle up and head for the station with time to spare.',
                   'ชำระค่าที่พักและมุ่งสู่สถานีโดยมีเวลาเหลือ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+city+hotels' } },

        { type: 'step', time: '07:00', meridiem: 'Early morning', kind: 'Train', icon: 'train',
          title: L('Subway -> Fukuoka Airport', 'รถไฟใต้ดิน -> สนามบินฟุกุโอกะ'),
          place: L('Hakata -> FUK - 6 min', 'ฮากาตะ -> FUK - 6 นาที'),
          blurb: L('Two stops on the Kuko line straight to the international terminal shuttle.',
                   'นั่งสายคูโกะ 2 สถานีตรงสู่รถรับส่งอาคารระหว่างประเทศ'),
          refs: { map: 'https://maps.google.com/?q=Fukuoka+Airport', booking: L('IC tap - ¥260', 'แตะ IC - ¥260') } },

        { type: 'step', time: '07:30', meridiem: 'Early morning', kind: 'Departure', icon: 'passport',
          title: L('Check-in & emigration, FUK', 'เช็คอิน & ด่านขาออก, FUK'),
          place: L('International Departures', 'ผู้โดยสารขาออกระหว่างประเทศ'),
          blurb: L('Bags away, a last tax-free run, and a final konbini snack before the gate.',
                   'โหลดกระเป๋า ช้อปปลอดภาษีรอบสุดท้าย และของกินคอนบินิก่อนขึ้นเครื่อง'),
          refs: { reservation: { time: '10:00', code: 'FD-737', party: L('4 travellers - economy', '4 ท่าน - ชั้นประหยัด') } } },

        { type: 'step', time: '10:00', meridiem: 'Morning', kind: 'Flight', icon: 'plane',
          title: L('Depart Fukuoka (FUK)', 'ออกเดินทางจากฟุกุโอกะ (FUK)'),
          place: L('FUK -> Bangkok (DMK)', 'FUK -> กรุงเทพฯ (DMK)'),
          blurb: L('Wheels up mid-morning - eight nights across Kyushu, complete.',
                   'เครื่องทะยานสายๆ - แปดคืนรอบคิวชู สมบูรณ์แล้ว'),
          refs: { official: 'https://www.airasia.com/',
                  notes: L('Thai AirAsia FD-737, economy, 6h - arrives Bangkok (DMK) 14:00 the same day. Checked baggage is a paid add-on.', 'ไทยแอร์เอเชีย FD-737 ชั้นประหยัด บิน 6 ชม. ถึงกรุงเทพฯ (DMK) 14:00 วันเดียวกัน - กระเป๋าโหลดเป็นบริการเสริมที่ต้องซื้อ') } },
      ],
    },
  ],
};

// Reference dock types - bilingual labels + icon names, in dock order.
const REF_TYPES = [
  { key: 'map', label: L('Directions', 'เส้นทาง'), icon: 'map', kind: 'link' },
  { key: 'official', label: L('Official site', 'เว็บไซต์ทางการ'), icon: 'external', kind: 'link' },
  { key: 'guide', label: L('Local guide', 'ไกด์ท้องถิ่น'), icon: 'book', kind: 'link' },
  { key: 'booking', label: L('Cost', 'ค่าใช้จ่าย'), icon: 'ticket', kind: 'text' },
  { key: 'reservation', label: L('Reservation', 'การจอง'), icon: 'clock', kind: 'reservation' },
  { key: 'notes', label: L('Notes', 'บันทึก'), icon: 'note', kind: 'text' },
];

// Token dictionary for short repeated strings (English source -> Thai).
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
  'Pre-dawn': 'ก่อนรุ่งสาง', Dawn: 'รุ่งอรุณ', 'Early morning': 'เช้าตรู่', Morning: 'ช่วงเช้า', 'Late morning': 'สายๆ',
  Midday: 'เที่ยงวัน', Afternoon: 'ช่วงบ่าย', Evening: 'ช่วงค่ำ', Night: 'กลางคืน',
  // UI
  Time: 'เวลา', Confirmation: 'เลขยืนยัน', Party: 'จำนวน',
};

const tx = (v, lang) => (v && typeof v === 'object' && 'en' in v ? (v[lang] || v.en) : v);
const tr = (s, lang) => (lang === 'th' ? (TR[s] || s) : s);

// -- Destination presentation (Overview screen) --------------------------
const DESTINATION = {
  island: L('Kyushu', 'คิวชู'),
  islandNative: '九州',
  country: L('Japan', 'ญี่ปุ่น'),
  native: '日本',
  tagline: L('Volcano calderas, hidden onsen towns and a city of ramen - eight nights driving the southern island at the turn of the leaves.',
             'ปากปล่องภูเขาไฟ เมืองออนเซนซ่อนตัว และเมืองแห่งราเมง - แปดคืนขับรถรอบเกาะใต้ช่วงใบไม้เปลี่ยนสี'),
  facts: [
    { k: L('Duration', 'ระยะเวลา'), v: L('9 days - 8 nights', '9 วัน - 8 คืน') },
    { k: L('Season', 'ฤดูกาล'), v: L('Late autumn - November', 'ปลายฤดูใบไม้ร่วง - พฤศจิกายน') },
    { k: L('Currency', 'สกุลเงิน'), v: L('Japanese Yen - ¥', 'เยนญี่ปุ่น - ¥') },
    { k: L('Travel', 'การเดินทาง'), v: L('Self-drive loop', 'ขับรถวนเอง') },
  ],
  // route stops drive the animated map on the Overview screen; `day` = first day index (0-based)
  route: [
    { city: L('Fukuoka', 'ฟุกุโอกะ'), days: L('Base - Day 1 & 5-8', 'ฐาน - วันที่ 1 & 5-8'), day: 0, theme: 'kurogane', imageId: 'r-fukuoka', mx: 35.5, my: 13.5 },
    { city: L('Aso & Kurokawa', 'อาโซ & คุโรคาวะ'), days: L('Day 2', 'วันที่ 2'), day: 1, theme: 'hisui', imageId: 'r-aso', mx: 55.5, my: 36.5 },
    { city: L('Kumamoto', 'คุมาโมโตะ'), days: L('Day 6', 'วันที่ 6'), day: 5, theme: 'kohaku', imageId: 'r-kumamoto', mx: 43.5, my: 47 },
    { city: L('Beppu', 'เบปปุ'), days: L('Day 3', 'วันที่ 3'), day: 2, theme: 'urushi', imageId: 'r-beppu', mx: 77, my: 21 },
    { city: L('Yufuin', 'ยูฟุอิน'), days: L('Days 3-4', 'วันที่ 3-4'), day: 3, theme: 'botan', imageId: 'r-yufuin', mx: 67.5, my: 29.5 },
    { city: L('Itoshima', 'อิโตชิมะ'), days: L('Day 8', 'วันที่ 8'), day: 7, theme: 'ai', imageId: 'r-itoshima', mx: 22, my: 21 },
  ],
};

// -- Travel party (placeholders - edit names/details; no phone/social by design) --
const TRAVELERS = {
  title: L('The Party', 'ผู้ร่วมเดินทาง'),
  subtitle: L('Five travellers, one itinerary', 'ห้าผู้เดินทาง หนึ่งแผนการเดินทาง'),
  people: [
    { name: L('Nick', 'นิค'), role: L('Trip lead - planner', 'หัวหน้าทริป - ผู้วางแผน'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Itinerary & budget', 'แผนเที่ยว & งบ'), imageId: 'p-nick' },
    { name: L('Bank', 'แบงค์'), role: L('Co-driver - navigator', 'คนขับสำรอง - นำทาง'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Maps & routes', 'แผนที่ & เส้นทาง'), imageId: 'p-bank' },
    { name: L('Tagot', 'ทาก็อต'), role: L('Food & reservations', 'อาหาร & การจอง'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Books the restaurants', 'จองร้านอาหาร'), imageId: 'p-tagot' },
    { name: L('P\'Tam', 'พี่ตั้ม'), role: L('Driver', 'คนขับ'),
      home: L('Tokyo', 'โตเกียว'), detail: L('Friend joining the trip', 'เพื่อนมาเที่ยวด้วย'), imageId: 'p-tum' },
    { name: L('Jane', 'เจน'), role: L('Driver - photographer', 'คนขับ - ช่างภาพ'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Drives & shoots the trip', 'ขับรถ & ถ่ายรูปทริป'), imageId: 'p-ellie' },
  ],
};

// -- Emergency contacts --------------------------------------------------
const EMERGENCY = {
  title: L('Emergency Contacts', 'เบอร์ติดต่อฉุกเฉิน'),
  subtitle: L('Keep these to hand throughout the trip', 'เก็บไว้ใกล้ตัวตลอดการเดินทาง'),
  items: [
    { label: L('Japan - Police', 'ญี่ปุ่น - ตำรวจ'), value: '110', icon: 'compass', urgent: true },
    { label: L('Japan - Ambulance / Fire', 'ญี่ปุ่น - รถพยาบาล / ดับเพลิง'), value: '119', icon: 'plus', urgent: true },
    { label: L('Royal Thai Embassy, Tokyo', 'สถานทูตไทย โตเกียว'), value: '+81 3 5789 2433', icon: 'pin' },
    { label: L('Japan Visitor Hotline - 24h', 'สายด่วนนักท่องเที่ยว - 24 ชม.'), value: '+81 50 3816 2787', icon: 'note' },
    { label: L('JAF road assistance', 'JAF ช่วยเหลือรถเสีย'), value: '#8139', icon: 'car' },
    { label: L('Travel insurance - 24h', 'ประกันเดินทาง - 24 ชม.'), value: '+66 2 257 8000', icon: 'book' },
  ],
};

// -- Budget (estimated, per person, Thai Baht) ---------------------------
const BUDGET = {
  title: L('Budget', 'งบประมาณ'),
  subtitle: L('Estimated - per person - Thai Baht', 'ประมาณการ - ต่อคน - เงินบาท'),
  currency: '฿',
  items: [
    { label: L('Flights - round trip (FD)', 'ตั๋วเครื่องบิน - ไป-กลับ (FD)'), amount: 30000 },
    { label: L('Accommodation - 8 nights', 'ที่พัก - 8 คืน'), amount: 36000 },
    { label: L('Car rental, fuel & tolls', 'ค่าเช่ารถ น้ำมัน & ทางด่วน'), amount: 12000 },
    { label: L('Food & dining', 'อาหาร & ร้านอาหาร'), amount: 28000 },
    { label: L('Attractions & onsen', 'สถานที่ & ออนเซน'), amount: 6000 },
    { label: L('Shopping & misc', 'ช้อปปิ้ง & เบ็ดเตล็ด'), amount: 14000 },
  ],
  total: 126000,
  note: L('Car cost is per person assuming the rental is split across the party. Excludes personal shopping beyond the estimate.',
          'ค่ารถคิดต่อคนโดยหารกันทั้งกลุ่ม ไม่รวมการช้อปปิ้งส่วนตัวที่เกินประมาณการ'),
};

// -- Convenience stores (konbini) nearest each stay ----------------------
const KONBINI = {
  title: L('Near Each Stay', 'ของจำเป็นใกล้ที่พัก'),
  subtitle: L('Konbini - pharmacy - hospital', 'ร้านสะดวกซื้อ - ร้านยา - โรงพยาบาล'),
  note: L('Handy spots within a short walk or drive of each stay - tap any to drop a pin in Maps.', 'จุดสำคัญใกล้ที่พักแต่ละคืน (เดินถึงหรือขับนิดเดียว) - แตะเพื่อปักหมุดในแผนที่'),
  areas: [
    { days: L('Day 01', 'วันที่ 01'), area: L('Tenjin - Daimyo', 'เท็นจิน - ไดเมียว'),
      stores: [
        { brand: '7-Eleven', detail: L('Tenjin / Daimyo - ~150 m', 'เท็นจิน / ไดเมียว - ~150 ม.'), map: 'https://maps.google.com/?q=33.5882,130.3990' },
        { brand: 'Lawson', detail: L('Akasaka / Daimyo - ~200 m', 'อากาซากะ / ไดเมียว - ~200 ม.'), map: 'https://maps.google.com/?q=33.5870,130.3972' },
      ],
      pharmacy: [ { brand: 'Matsumoto Kiyoshi', detail: L('Drugstore - Tenjin', 'ร้านขายยา - เท็นจิน'), map: 'https://maps.google.com/?q=33.5905,130.3992' } ],
      hospital: [ { brand: 'Kyushu Medical Center', detail: L('24h emergency - ~2 km', 'ฉุกเฉิน 24 ชม. - ~2 กม.'), map: 'https://maps.google.com/?q=33.5808,130.3768' } ] },
    { days: L('Day 02', 'วันที่ 02'), area: L('Kurokawa Onsen', 'คุโรคาวะออนเซน'),
      stores: [
        { brand: 'Yamazaki Y-shop', detail: L('Route 442 - the only one in the village', 'เส้น 442 - ร้านเดียวในหมู่บ้าน'), map: 'https://maps.google.com/?q=Yamazaki+Y-shop+Kurokawa+Onsen' },
        { brand: 'Konbini', detail: L('Oguni town - ~10-15 min by car', 'ตัวเมืองโอกุนิ - ขับ ~10-15 นาที'), map: 'https://maps.google.com/?q=convenience+store+Oguni+Kumamoto' },
      ],
      pharmacy: [ { brand: 'Drugstore', detail: L('Oguni town - bring what you need', 'ตัวเมืองโอกุนิ - เตรียมของไปเองดีกว่า'), map: 'https://maps.google.com/?q=drugstore+Oguni+Kumamoto' } ],
      hospital: [ { brand: 'Nearest hospital', detail: L('Oguni town - ~15 min', 'ตัวเมืองโอกุนิ - ~15 นาที'), map: 'https://maps.google.com/?q=hospital+Oguni+Kumamoto' } ] },
    { days: L('Day 03-04', 'วันที่ 03-04'), area: L('Yufuin', 'ยูฟุอิน'),
      stores: [
        { brand: 'Lawson', detail: L('Yufuin Stn - ~300 m', 'สถานียูฟุอิน - ~300 ม.'), map: 'https://maps.google.com/?q=33.2638,131.3558' },
        { brand: '7-Eleven', detail: L('Route 210 - ~600 m', 'เส้น 210 - ~600 ม.'), map: 'https://maps.google.com/?q=33.2665,131.3505' },
      ],
      pharmacy: [ { brand: 'Drugstore', detail: L('Yufuin centre - limited', 'ใจกลางยูฟุอิน - มีจำกัด'), map: 'https://maps.google.com/?q=33.2650,131.3560' } ],
      hospital: [ { brand: 'Yufuin Hospital', detail: L('Nearest hospital', 'โรงพยาบาลใกล้สุด'), map: 'https://maps.google.com/?q=33.2685,131.3548' } ] },
    { days: L('Day 05-09', 'วันที่ 05-09'), area: L('Hakata - Nakasu', 'ฮากาตะ - นากาสึ'),
      stores: [
        { brand: '7-Eleven', detail: L('Hakata Stn - ~150 m', 'สถานีฮากาตะ - ~150 ม.'), map: 'https://maps.google.com/?q=33.5898,130.4200' },
        { brand: 'FamilyMart', detail: L('Canal City - ~200 m', 'คาแนลซิตี้ - ~200 ม.'), map: 'https://maps.google.com/?q=33.5897,130.4110' },
      ],
      pharmacy: [ { brand: 'Matsumoto Kiyoshi', detail: L('Drugstore - Tenjin', 'ร้านขายยา - เท็นจิน'), map: 'https://maps.google.com/?q=33.5905,130.3992' } ],
      hospital: [ { brand: 'Kyushu Medical Center', detail: L('24h emergency - ~2 km', 'ฉุกเฉิน 24 ชม. - ~2 กม.'), map: 'https://maps.google.com/?q=33.5808,130.3768' } ] },
  ],
};

const CREDIT = 'Designed by 0xTnk';

// -- Per-day weather (indicative late-November Kyushu forecast) -----------
const WEATHER = {
  note: L('Typical late-November conditions - highlands are colder - check the forecast before you travel',
          'สภาพอากาศโดยทั่วไปปลายเดือน พ.ย. - บนภูเขาหนาวกว่า - เช็คพยากรณ์ก่อนเดินทาง'),
  days: {
    1:  { icon: 'cloudSun', hi: 17, lo: 10, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    2:  { icon: 'cloud',    hi: 11,  lo: 4, label: L('Cold caldera, chance of frost', 'ปากปล่องหนาว อาจมีน้ำค้างแข็ง') },
    3:  { icon: 'cloudSun', hi: 17, lo: 9, label: L('Mild by the coast', 'อากาศดีริมชายฝั่ง') },
    4:  { icon: 'cloud',    hi: 13, lo: 5, label: L('Cold, misty valley', 'หนาว มีหมอกในหุบเขา') },
    5:  { icon: 'cloudSun', hi: 17, lo: 9, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    6:  { icon: 'cloudSun', hi: 16, lo: 7, label: L('Crisp castle city, light cloud', 'เมืองปราสาทอากาศเย็นสบาย มีเมฆบาง') },
    7:  { icon: 'cloudSun', hi: 17, lo: 9, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    8:  { icon: 'sun',      hi: 17, lo: 9, label: L('Bright by the sea', 'แดดดีริมทะเล') },
    9:  { icon: 'cloudSun', hi: 16, lo: 9, label: L('Mild - travel day', 'อากาศดี - วันเดินทาง') },
  },
};

// -- Recommended dishes per dining venue (keyed by activity imageId) -----
const MENUS = {
  'a-d1-canalcity': { items: [
    { name: L('Mina Tenjin', 'มีนะ เท็นจิน'), note: L('Flagship UNIQLO & GU, plus Loft (lifestyle/stationery) and ABC-Mart shoes.', 'UNIQLO & GU ร้านใหญ่ + Loft (ของไลฟ์สไตล์/เครื่องเขียน) และ ABC-Mart รองเท้า'), map: 'https://maps.google.com/?q=Mina+Tenjin', signature: true },
    { name: L('Fukuoka PARCO', 'ฟุกุโอกะ พาร์โก'), note: L('Trendy fashion + anime/game & character goods (Pokémon Center, Jump Shop) and cosmetics.', 'แฟชั่นวัยรุ่น + ของอนิเมะ/เกม & คาแรกเตอร์ (Pokémon Center, Jump Shop) และเครื่องสำอาง'), map: 'https://maps.google.com/?q=Fukuoka+PARCO' },
    { name: L('ONE FUKUOKA BLDG. (ワンビル)', 'ONE FUKUOKA BLDG. (ワンビル)'), note: L('New 2024 Tenjin tower - premium & select-brand fashion, lifestyle and dining (Ritz-Carlton above).', 'ตึกใหม่ปี 2024 ย่านเท็นจิน - แฟชั่นพรีเมียม/เซเลกต์แบรนด์ ไลฟ์สไตล์ และร้านอาหาร (มี Ritz-Carlton ด้านบน)'), map: 'https://maps.google.com/?q=ONE+FUKUOKA+BLDG+Tenjin' },
    { name: L('Iwataya Main Store', 'อิวาตายะ (ห้างหลัก)'), note: L('Classic department store - luxury fashion & cosmetics, and a superb basement food hall (depachika) for sweets & gifts.', 'ห้างสรรพสินค้าคลาสสิก - แฟชั่นหรู & เครื่องสำอาง และโซนอาหารชั้นใต้ดิน (เดปาจิกะ) ของหวาน & ของฝากเด็ด'), map: 'https://maps.google.com/?q=Iwataya+Honten+Fukuoka' },
    { name: L('Don Quijote', 'ดองกิโฮเต้'), note: L('Discount mega-store - snacks, cosmetics, electronics, souvenirs; tax-free and open late.', 'ร้านลดราคาสารพัด - ขนม เครื่องสำอาง เครื่องใช้ไฟฟ้า ของฝาก - ปลอดภาษี เปิดดึก'), map: 'https://maps.google.com/?q=Don+Quijote+Tenjin+Fukuoka' },
    { name: L('B-B-B POTTERS', 'B-B-B POTTERS'), note: L('Stylish homeware select shop - kitchenware, tableware and design goods, with a café upstairs.', 'ร้านของแต่งบ้านสไตล์ดี - เครื่องครัว ภาชนะ ของดีไซน์ มีคาเฟ่ชั้นบน'), map: 'https://maps.google.com/?q=BBB+POTTERS+Fukuoka' },
  ] },
  'a-d2-cityrun': { items: [
    { name: L('① Start - Hotel Monterey (Daimyo)', '① ออกตัว - โรงแรมมอนเทอเรย์ (ไดเมียว)'), note: L('06:00 - warm up and head west through quiet Akasaka toward the park (~1.3 km).', '06:00 - วอร์มอัพ วิ่งไปทางตะวันตกผ่านอาคาซากะเงียบๆ สู่สวน (~1.3 กม.)'), map: 'https://maps.google.com/?q=Hotel+Monterey+La+Soeur+Fukuoka' },
    { name: L('② Ohori Park - 2 km lake loop', '② สวนโอโฮริ - ลู่วิ่งรอบบึง 2 กม.'), note: L('The flat yellow-rubber jogging track once around the lake - the running heart of the city.', 'ลู่วิ่งยางสีเหลืองทางเรียบ วิ่งรอบบึงหนึ่งรอบ - ลู่วิ่งหัวใจของเมือง'), map: 'https://maps.google.com/?q=Ohori+Park+jogging+course', signature: true },
    { name: L('③ Ukimido pavilion + island bridges', '③ ศาลาอุคิมิโด + สะพานข้ามเกาะ'), note: L('Cross the stone bridges to the island; the red Ukimido is the park symbol - the best photo/vlog spot, mist on the water at dawn.', 'ข้ามสะพานหินไปเกาะกลางบึง - ศาลาแดงอุคิมิโดคือสัญลักษณ์สวน - จุดถ่าย/vlog เด็ดสุด มีไอหมอกเหนือน้ำตอนเช้า'), map: 'https://maps.google.com/?q=Ukimido+Ohori+Park', signature: true },
    { name: L('④ Ohori Japanese Garden (run past)', '④ สวนญี่ปุ่นโอโฮริ (วิ่งผ่าน)'), note: L('Pass the garden wall on the south side (it opens later) to finish the lake loop.', 'วิ่งผ่านกำแพงสวนญี่ปุ่นด้านใต้ (เปิดสายกว่านี้) แล้ววิ่งจบรอบบึง'), map: 'https://maps.google.com/?q=Ohori+Park+Japanese+Garden' },
    { name: L('⑤ Fukuoka Castle ruins - Maizuru Park', '⑤ ซากปราสาทฟุกุโอกะ - สวนไมซุรุ'), note: L('Cross northeast and run up to the Tenshudai (keep base) for a sunrise panorama over the city + the old stone walls (~1.3 km).', 'ข้ามไปทางตะวันออกเฉียงเหนือ วิ่งขึ้นฐานหอปราสาท (เท็นชูได) ชมวิวเมืองยามอาทิตย์ขึ้น + กำแพงหินเก่า (~1.3 กม.)'), map: 'https://maps.google.com/?q=Fukuoka+Castle+Ruins+Tenshudai', signature: true },
    { name: L('⑥ Finish - coffee near the hotel', '⑥ เข้าเส้นชัย - กาแฟใกล้โรงแรม'), note: L('Easy jog back to Daimyo (~1.5 km), around 07:00. Manu Coffee Daimyo (by the hotel) opens 09:00; Starbucks Ohori Park (lakeside) ~08:00. At 7 am, a konbini coffee wraps the vlog.', 'จ็อกกลับไดเมียวสบายๆ (~1.5 กม.) ราว 07:00 - Manu Coffee ไดเมียว (ใกล้โรงแรม) เปิด 09:00; Starbucks โอโฮริ (ริมบึง) ~08:00 - ตอน 7 โมง กาแฟคอนบินิปิด vlog ได้เลย'), map: 'https://maps.google.com/?q=Manu+Coffee+Daimyo+Fukuoka' },
  ] },
  'a-d1-imdonut': { items: [
    { name: L('Original I\'m Donut', 'ไอแอมโดนัทออริจินอล'), note: L('The famous fresh, fluffy raised donut.', 'โดนัทเนื้อนุ่มสดที่โด่งดัง'), signature: true },
    { name: L('Pistachio donut', 'โดนัทพิสตาชิโอ'), note: L('Nutty cream filling.', 'ไส้ครีมถั่วพิสตาชิโอ') },
    { name: L('Custard donut', 'โดนัทคัสตาร์ด'), note: L('Silky vanilla custard cream filling.', 'ไส้ครีมคัสตาร์ดวานิลลาเนียนนุ่ม') },
  ] },
  'a-d1-fukcoffee': { items: [
    { name: L('Fukuoka-map latte', 'ลาเต้รูปแผนที่ฟุกุโอกะ'), note: L('Signature latte art shaped like Fukuoka.', 'ลาเต้อาร์ตซิกเนเจอร์รูปฟุกุโอกะ'), signature: true },
    { name: L('Drip coffee', 'ดริปกาแฟ'), note: L('Single-origin hand pour-over.', 'ดริปมือซิงเกิลออริจิน') },
  ] },
  'a-d1-ramen': { items: [
    { name: L('Tonkotsu ramen', 'ราเมงทงคตสึ'), note: L('The 21-hour creamy, odour-free pork broth with thin house-made noodles - add the spicy garlic tare.', 'น้ำซุปหมูเนียนไม่คาว เคี่ยว 21 ชม. กับเส้นบางทำเอง - เพิ่มซอสเผ็ดกระเทียมได้'), signature: true },
    { name: L('Ajitama ramen', 'ราเมงไข่ยางมะตูม'), note: L('The shop\'s No.1 - topped with a melty soft-boiled flavoured egg.', 'เมนูอันดับ 1 ของร้าน - ใส่ไข่ต้มยางมะตูมปรุงรสเนื้อเนียน'), signature: true },
    { name: L('Chashu ramen', 'ราเมงชาชู'), note: L('Loaded with extra braised pork chashu.', 'จัดหมูชาชูตุ๋นเพิ่มเต็มชาม') },
    { name: L('Gyoza', 'เกี๊ยวซ่า'), note: L('Original pan-fried gyoza, made dim-sum style.', 'เกี๊ยวซ่าทอดสูตรร้าน ทำสไตล์ติ่มซำ') },
  ] },
  'a-d1-motsunabe': { items: [
    { name: L('Motsunabe - soy broth', 'โมทสึนาเบะ - น้ำซีอิ๊ว'), note: L('The 40-year secret soy broth, heaped with a tower of garlic chives and fresh beef offal.', 'น้ำซุปซีอิ๊วสูตรลับ 40 ปี โปะใบกุยช่ายเป็นภูเขากับเครื่องในวัวสด'), signature: true },
    { name: L('Motsunabe - miso broth', 'โมทสึนาเบะ - น้ำมิโซะ'), note: L('The bolder, slightly sweet miso version.', 'เวอร์ชันมิโซะ รสเข้มข้นหวานเล็กน้อย') },
    { name: L('Champon shime', 'จัมปงปิดท้าย'), note: L('Old-style champon noodles dropped into the leftover broth to finish - all-you-can-eat on the Manzoku course.', 'เส้นจัมปงสไตล์ดั้งเดิมใส่ในน้ำซุปที่เหลือเพื่อปิดท้าย - เติมไม่อั้นในคอร์ส Manzoku'), signature: true },
    { name: L('Su-motsu', 'ซึโมทสึ'), note: L('Chilled vinegared offal - a refreshing, tangy starter.', 'เครื่องในคลุกน้ำส้มสายชูเย็นๆ ออเดิร์ฟรสเปรี้ยวสดชื่น') },
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
    { name: L('Seasonal sakizuke', 'ของเรียกน้ำย่อยตามฤดู'), note: L('The chef\'s opening bite.', 'จานเปิดจากเชฟ') },
    { name: L('Mountain-vegetable nimono', 'ผักภูเขาต้มนิโมโนะ'), note: L('Simmered autumn sansai.', 'ผักป่าซันไซหน้าใบไม้ร่วงต้ม') },
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
    { name: L('Seasonal sakizuke', 'ของเรียกน้ำย่อยตามฤดู'), note: L('The chef\'s opening course.', 'คอร์สเปิดจากเชฟ') },
    { name: L('Bungo wagyu shabu', 'ชาบูวากิวบุงโกะ'), note: L('Local beef swished in broth.', 'เนื้อท้องถิ่นลวกในน้ำซุป'), signature: true },
    { name: L('Grilled river fish', 'ปลาน้ำจืดย่าง'), note: L('Salt-grilled, on the bone.', 'ย่างเกลือทั้งตัว') },
    { name: L('Autumn vegetable nimono', 'ผักหน้าใบไม้ร่วงต้มนิโมโนะ'), note: L('Simmered until tender.', 'ต้มจนนุ่ม') },
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
  'a-d7-shopping': { items: [
    { name: L('GU - Mina Tenjin 2F', 'GU - มินะ เท็นจิน ชั้น 2'), note: L('Only full-lineup GU in Kyushu (Tenjin).', 'GU เต็มไลน์ที่เดียวในคิวชู (เท็นจิน)'), map: 'https://maps.google.com/?q=GU+Mina+Tenjin+Fukuoka', signature: true },
    { name: L('On - Super Sports Xebio', 'On - ซูเปอร์สปอร์ต Xebio'), note: L('On / On Cloud running shoes - Tenjin.', 'รองเท้าวิ่ง On / On Cloud - เท็นจิน'), map: 'https://maps.google.com/?q=Super+Sports+Xebio+Tenjin+Fukuoka', signature: true },
    { name: L('Mina Tenjin', 'มินะ เท็นจิน'), note: L('Biggest Uniqlo in Kyushu + Loft + full-lineup GU (2F).', 'Uniqlo ใหญ่สุดในคิวชู + Loft + GU เต็มไลน์ (ชั้น 2)'), map: 'https://maps.google.com/?q=Mina+Tenjin+Fukuoka', signature: true },
    { name: L('Fukuoka PARCO', 'ฟุกุโอกะ พาร์โก'), note: L('Youth fashion - Onitsuka Tiger 3F.', 'แฟชั่นวัยรุ่น - Onitsuka Tiger ชั้น 3'), map: 'https://maps.google.com/?q=Fukuoka+PARCO' },
    { name: L('Solaria Plaza', 'โซลาเรีย พลาซ่า'), note: L('Young fashion complex by Tenjin station.', 'ห้างแฟชั่นวัยรุ่นข้างสถานีเท็นจิน'), map: 'https://maps.google.com/?q=Solaria+Plaza+Fukuoka' },
    { name: L('Tenjin Chikagai', 'เท็นจิน ชิกางาอิ'), note: L('Underground mall linking Daimaru / Mitsukoshi.', 'ห้างใต้ดินเชื่อม Daimaru / Mitsukoshi'), map: 'https://maps.google.com/?q=Tenjin+Chikagai' },
  ] },
  'a-d9-daimyo': { items: [
    { name: L('GU - Mina Tenjin 2F', 'GU - มินะ เท็นจิน ชั้น 2'), note: L('Only full-lineup GU in Kyushu (Tenjin).', 'GU เต็มไลน์ที่เดียวในคิวชู (เท็นจิน)'), map: 'https://maps.google.com/?q=GU+Mina+Tenjin+Fukuoka', signature: true },
    { name: L('On - Super Sports Xebio', 'On - ซูเปอร์สปอร์ต Xebio'), note: L('On / On Cloud running shoes - Tenjin.', 'รองเท้าวิ่ง On / On Cloud - เท็นจิน'), map: 'https://maps.google.com/?q=Super+Sports+Xebio+Tenjin+Fukuoka', signature: true },
    { name: L('Onitsuka Tiger - PARCO 3F', 'Onitsuka Tiger - พาร์โก ชั้น 3'), note: L('Classic Japanese sneakers.', 'สนีกเกอร์คลาสสิกญี่ปุ่น'), map: 'https://maps.google.com/?q=Onitsuka+Tiger+Fukuoka+PARCO' },
    { name: L('Daimyo boutiques', 'ร้านบูทีกไดเมียว'), note: L('Indie sneaker & streetwear lanes.', 'ตรอกร้านสนีกเกอร์/สตรีทแวร์อิสระ'), map: 'https://maps.google.com/?q=Daimyo+Fukuoka' },
    { name: L('BOOKOFF - Mina Tenjin 7F', 'BOOKOFF - มินะ เท็นจิน ชั้น 7'), note: L('Second-hand sneaker corner.', 'มุมสนีกเกอร์มือสอง'), map: 'https://maps.google.com/?q=BOOKOFF+Mina+Tenjin' },
  ] },
  'a-d10-canal': { items: [
    { name: L('MUJI / Uniqlo - Canal City', 'MUJI / Uniqlo - คาแนลซิตี้'), note: L('Last call on the Hakata side.', 'รอบสุดท้ายฝั่งฮากาตะ'), map: 'https://maps.google.com/?q=Canal+City+Hakata', signature: true },
    { name: L('Mina Tenjin (GU)', 'มินะ เท็นจิน (GU)'), note: L('Back for GU / Uniqlo if needed.', 'กลับไป GU / Uniqlo ถ้ายังเหลือ'), map: 'https://maps.google.com/?q=Mina+Tenjin+Fukuoka' },
    { name: L('Daimyo', 'ไดเมียว'), note: L('One last sneaker hunt - shops close ~21:00.', 'ตามล่าสนีกเกอร์รอบสุดท้าย - ร้านปิด ~21:00'), map: 'https://maps.google.com/?q=Daimyo+Fukuoka' },
  ] },
  'a-d3-sweets': { items: [
    { name: L('Aso milk soft serve', 'ซอฟต์ครีมนมอาโซ'), note: L('Rich, milky soft cream from grass-fed Aso dairy.', 'ซอฟต์ครีมนมสดเข้มข้นจากวัวเลี้ยงปล่อยอาโซ'), signature: true },
    { name: L('Aso milk pudding', 'พุดดิ้งนมอาโซ'), note: L('Silky custard pudding made with Aso milk.', 'พุดดิ้งคัสตาร์ดเนียนนุ่มจากนมอาโซ') },
    { name: L('Bottled Aso milk', 'นมอาโซขวด'), note: L('Fresh local milk - great for the road.', 'นมสดท้องถิ่น พกขึ้นรถได้') },
  ] },
  'a-d4-sweets': { items: [
    { name: L('Classic ikinari dango', 'อิคินาริดังโงะคลาสสิก'), note: L('Steamed dough over sweet potato and sweet red-bean paste.', 'แป้งนึ่งห่อมันหวานกับถั่วแดงกวน'), signature: true },
    { name: L('Mugwort (yomogi) dango', 'ดังโงะใบโยโมงิ'), note: L('Fragrant green-herb dough version.', 'แป้งสีเขียวหอมใบโยโมงิ') },
    { name: L('Honey castella', 'คาสเทลล่าน้ำผึ้ง'), note: L('Soft sponge cake - another Kyushu sweet to pair.', 'เค้กสปันจ์นุ่ม ของหวานคิวชูอีกอย่าง') },
  ] },
  'a-d5-sweets': { items: [
    { name: L('Classic Beppu purin', 'พุดดิ้งเบปปุคลาสสิก'), note: L('Firm, eggy custard pudding with bitter caramel.', 'พุดดิ้งคัสตาร์ดไข่เนื้อแน่น ราดคาราเมลขมนิดๆ'), signature: true },
    { name: L('Jigoku-mushi purin', 'พุดดิ้งนึ่งบ่อนรก'), note: L('Steamed over the natural hot-spring jigoku.', 'นึ่งด้วยไอน้ำจากบ่อน้ำพุร้อนธรรมชาติ'), signature: true },
    { name: L('Purin a la mode', 'พุดดิ้งอะลาโหมด'), note: L('Pudding topped with cream and fruit.', 'พุดดิ้งราดครีมและผลไม้') },
  ] },
  'a-d6-sweets': { items: [
    { name: L('B-speak P-roll', 'B-speak P-roll'), note: L('The famous melt-in-the-mouth Swiss roll cake.', 'โรลเค้กละลายในปากชื่อดัง'), signature: true },
    { name: L('Milch cheese tart (warm)', 'ชีสทาร์ต Milch (อุ่น)'), note: L('German-style mini cheesecake from local milk - best warm.', 'ชีสเค้กชิ้นเล็กสไตล์เยอรมันจากนมท้องถิ่น อร่อยตอนอุ่น'), signature: true },
    { name: L('Milch cheese tart (cold)', 'ชีสทาร์ต Milch (เย็น)'), note: L('The chilled version - firmer and creamier.', 'แบบแช่เย็น เนื้อแน่นครีมมี่กว่า') },
    { name: L('Kinrin Lake croquette', 'โครเก็ตต์ริมบึงคินริน'), note: L('A savoury snack by the lake for a break.', 'ของว่างคาวริมบึง เผื่ออยากสลับ') },
  ] },
  'a-d9-sweets': { items: [
    { name: L('Seasonal fruit parfait', 'พาร์เฟต์ผลไม้ตามฤดู'), note: L('Towers of seasonal fruit, cream and jelly - the signature.', 'ผลไม้ตามฤดู ครีม และเยลลีจัดเป็นชั้น - เมนูซิกเนเจอร์'), signature: true },
    { name: L('Fluffy fruit pancakes', 'แพนเค้กผลไม้ฟูๆ'), note: L('Souffle-style pancakes piled with fruit.', 'แพนเค้กสไตล์ซูเฟล่ โปะผลไม้') },
    { name: L('Fruit sandwich', 'แซนด์วิชผลไม้'), note: L('Cream and fresh fruit in soft milk bread.', 'ครีมและผลไม้สดในขนมปังนมนุ่ม') },
  ] },
};

// -- Pre-trip essentials (Overview quick row) ----------------------------
const ESSENTIALS = {
  currency: {
    label: L('Exchange rate', 'อัตราแลกเปลี่ยน'),
    base: '¥100',
    value: '฿22.6',
    note: L('Indicative only', 'โดยประมาณ'),
  },
  visitJapan: {
    label: 'Visit Japan Web',
    desc: L('Immigration & customs - register before you fly', 'ตม. และศุลกากร - ลงทะเบียนก่อนเดินทาง'),
    href: 'https://www.vjw.digital.go.jp/',
  },
};

// -- Before-you-fly checklist (Overview) ---------------------------------
const PACKING = {
  title: L('Pre-Trip Checklist', 'เช็กลิสต์ก่อนเดินทาง', '出発前チェックリスト'),
  subtitle: L('Pack & prepare before you fly', 'จัดกระเป๋าและเตรียมตัวให้พร้อม', '荷造りと準備'),
  groups: [
    { label: L('Documents', 'เอกสาร'), items: [
      L('Passport - 6+ months valid', 'พาสปอร์ต - เหลืออายุ 6 เดือนขึ้นไป'),
      L('Visit Japan Web QR saved', 'บันทึก QR จาก Visit Japan Web'),
      L('International Driving Permit (IDP)', 'ใบขับขี่สากล (IDP)'),
      L('Flight, hotel & car confirmations', 'ใบยืนยันเที่ยวบิน โรงแรม และรถเช่า'),
      L('Travel insurance card', 'บัตรประกันการเดินทาง'),
    ] },
    { label: L('Money & Connectivity', 'เงินและการเชื่อมต่อ'), items: [
      L('Some yen in cash (yatai are cash-only)', 'เงินเยนสด (ยาไตรับเงินสด)'),
      L('Cards enabled for overseas', 'เปิดใช้บัตรในต่างประเทศ'),
      L('eSIM or pocket Wi-Fi', 'eSIM หรือ pocket Wi-Fi'),
      L('IC card - Suica / ICOCA', 'บัตร IC - Suica / ICOCA'),
    ] },
    { label: L('Late Autumn & Driving', 'ปลายฤดูใบไม้ร่วง & การขับรถ'), items: [
      L('Warm coat - 5-15°C (colder in the highlands)', 'เสื้อโค้ตกันหนาว - 5-15°C (บนภูเขาหนาวกว่า)'),
      L('Gloves & hat for Aso / Yufuin', 'ถุงมือ & หมวกสำหรับอาโซ / ยูฟุอิน'),
      L('Comfortable walking shoes', 'รองเท้าเดินสบาย'),
      L('ETC card + ask about studless tyres', 'ขอบัตร ETC + ถามเรื่องยางสตัดเลส'),
      L('Power adapter - Type A', 'ปลั๊กแปลง - Type A'),
    ] },
  ],
};

// -- Useful Japanese phrases (Overview) ----------------------------------
const VISITJAPAN = {
  badge: L('Important - do before you fly', 'สำคัญ - ทำก่อนบิน', '重要'),
  title: 'Visit Japan Web',
  desc: L('Register before you fly - immigration + customs become one QR. At FUK you just scan it and walk through.',
          'ลงทะเบียนก่อนบิน - รวม ตม. + ศุลกากร เป็น QR เดียว - ที่ FUK แค่สแกนแล้วเดินผ่าน',
          '出発前に登録 - 入国と税関がQR1つに。'),
  points: [
    L('Do it a few days before departure', 'ทำล่วงหน้าก่อนบินสัก 2-3 วัน'),
    L('One QR for immigration & customs', 'QR เดียว ใช้ทั้ง ตม. และศุลกากร'),
    L('Screenshot the QR in case of no signal', 'แคปหน้าจอ QR ไว้ เผื่อเน็ตไม่มี'),
  ],
  cta: L('Open Visit Japan Web', 'เปิด Visit Japan Web', 'Visit Japan Web を開く'),
  href: 'https://www.vjw.digital.go.jp/',
};

const SOUVENIRS = {
  title: L('Souvenirs to grab', 'ของฝากที่ต้องซื้อ', 'お土産'),
  subtitle: L('Kyushu picks - tick as you buy', 'ของเด็ดคิวชู - ติ๊กตอนซื้อ', '九州のおすすめ'),
  groups: [
    { label: L('Sweets', 'ขนม', 'お菓子'), items: [
      L('Hakata Torimon (博多通りもん)', 'ฮากาตะ โทริมง'),
      L('Tsuru-no-ko / Hiyoko', 'สึรุโนะโกะ / ฮิโยโกะ'),
      L('Regional Kit-Kat (matcha - sake)', 'คิทแคทรสภูมิภาค (มัทฉะ - สาเก)'),
      L('Ikinari dango (Kumamoto)', 'อิคินาริดังโงะ (คุมาโมโตะ)'),
    ] },
    { label: L('Food', 'ของกิน', '食品'), items: [
      L('Mentaiko (spicy cod roe)', 'เมนไทโกะ (ไข่ปลาเผ็ด)'),
      L('Instant tonkotsu ramen', 'ราเมงทงคตสึสำเร็จรูป'),
      L('Yuzu kosho (citrus chili paste)', 'ยุซุโคโช (พริกส้ม)'),
      L('Aso milk - caramel / cookies', 'นมอาโซ - คาราเมล / คุกกี้'),
    ] },
    { label: L('Drinks', 'เครื่องดื่ม', '飲み物'), items: [
      L('Kyushu shochu / local sake', 'โชจู / สาเกคิวชู'),
      L('Matcha / hojicha', 'มัทฉะ / โฮจิฉะ'),
    ] },
    { label: L('Goods & beauty', 'ของใช้ & ความงาม', '雑貨・コスメ'), items: [
      L('Kumamon goods', 'ของคุมามง'),
      L('Drugstore haul (Matsukiyo - Don Quijote)', 'ของร้านยา (มัตสึคิโยะ - ดองกี้)'),
      L('Onsen skincare / bath salts', 'สกินแคร์ออนเซน / เกลือแช่'),
    ] },
  ],
};

const DRIVING = {
  title: L('Driving in Japan', 'ขับรถในญี่ปุ่น', '日本での運転'),
  subtitle: L('Self-drive cheat-sheet', 'สรุปสำหรับขับรถเอง', 'セルフドライブのコツ'),
  tips: [
    { icon: 'car', label: L('Keep LEFT', 'ขับเลนซ้าย'), note: L('Left-hand traffic, wheel on the right. Slow lane = left, overtake on the right.', 'จราจรชิดซ้าย พวงมาลัยขวา - เลนช้า = ซ้าย แซงทางขวา') },
    { icon: 'alert', label: L('IDP + licence', 'IDP + ใบขับขี่'), note: L('Always carry the International Driving Permit, your Thai licence and passport when driving.', 'พกใบขับขี่สากล (IDP) + ใบขับขี่ไทย + พาสปอร์ต ทุกครั้งที่ขับ') },
    { icon: 'ticket', label: L('ETC for tolls', 'ETC ผ่านทางด่วน'), note: L('Use the ETC card from the rental - drive through the purple ETC lanes, no stopping at booths.', 'ใช้บัตร ETC จากร้านเช่า - ขับผ่านเลนสีม่วง ไม่ต้องจอดจ่าย') },
    { icon: 'pin', label: L('Navigate by MAPCODE', 'นำทางด้วย MAPCODE'), note: L('Car GPS takes a phone number or MAPCODE - set the destination before you set off; Google Maps works too.', 'GPS รถใช้เบอร์โทรหรือ MAPCODE - ตั้งจุดหมายก่อนออก หรือใช้ Google Maps ก็ได้') },
    { icon: 'store', label: L('Self-serve fuel', 'ปั๊มเซลฟ์เซอร์วิส'), note: L('"Self" (セルフ) pumps: pay at the machine, touch the static pad, レギュラー = regular petrol.', 'ปั๊ม "セルフ": จ่ายที่ตู้ แตะแผ่นไล่ไฟฟ้าสถิต - レギュラー = น้ำมันธรรมดา') },
    { icon: 'wallet', label: L('Paid parking', 'ที่จอดเก็บเงิน'), note: L('Coin lots lock a plate under the car - pay the machine before driving off. Hotels often charge parking separately.', 'ที่จอดหยอดเหรียญมีแผ่นล็อกใต้รถ - จ่ายตู้ก่อนถอยออก - โรงแรมมักคิดค่าจอดแยก') },
    { icon: 'cloud', label: L('Cold & mountain roads', 'อากาศเย็น & ถนนบนเขา'), note: L('Snow is unlikely in late November, but dawn frost and black ice on the high passes are not - the Aso rim and Makinoto Pass sit above 1,000 m. Studless tyres are cheap insurance rather than a must; keep to Route 111 (Panorama Line) and ease off on bridges and in shade.', 'ปลายพฤศจิกายนหิมะไม่ค่อยตก แต่น้ำค้างแข็งและถนนลื่นตอนเช้ามืดบนช่องเขาสูงมีจริง - สันเขาอาโซกับช่องเขามากิโนโตะสูงเกิน 1,000 ม. - ยางสตัดเลสเป็นการเผื่อไว้ ไม่ถึงกับต้องมี - ใช้เส้น 111 (พาโนรามาไลน์) ชะลอบนสะพานและช่วงที่ร่มเงา') },
  ],
};

const CULTURE = {
  title: L('Culture & etiquette', 'วัฒนธรรม & มารยาท', '文化とマナー'),
  subtitle: L('Good manners to know in Japan', 'มารยาทที่ควรรู้ในญี่ปุ่น', '日本で知っておきたいマナー'),
  tips: [
    { icon: 'walk', label: L('Quiet on trains', 'เงียบบนรถไฟ'), note: L('Phones on silent, no calls on trains, talk softly. Don\'t eat on local trains.', 'เปิดมือถือระบบสั่น ไม่คุยโทรศัพท์บนรถไฟ พูดเบาๆ - ไม่กินบนรถไฟท้องถิ่น') },
    { icon: 'wallet', label: L('Cash & no tipping', 'เงินสด & ไม่ต้องทิป'), note: L('Carry cash - tipping isn\'t a thing and can confuse. Place money on the little tray, not in hands.', 'พกเงินสด - ญี่ปุ่นไม่มีวัฒนธรรมทิป - วางเงินบนถาดรับเงิน ไม่ยื่นมือต่อมือ') },
    { icon: 'bowl', label: L('Don\'t eat & walk', 'ไม่กินเดินไป'), note: L('Finish food/drinks standing by the shop or a konbini rather than walking the street.', 'กิน/ดื่มให้เสร็จยืนข้างร้านหรือคอนบินิ ไม่เดินกินไปตามถนน') },
    { icon: 'store', label: L('Shoes off', 'ถอดรองเท้า'), note: L('Take shoes off at ryokan, some restaurants and homes - watch for a raised step or slippers.', 'ถอดรองเท้าที่เรียวกัง บางร้าน และบ้าน - สังเกตพื้นยกระดับหรือรองเท้าแตะ') },
    { icon: 'cloud', label: L('Onsen manners', 'มารยาทออนเซน'), note: L('Wash & rinse fully before the bath; no swimwear or towels in the water; tattoos may be restricted.', 'อาบ-ล้างตัวให้สะอาดก่อนลงบ่อ - ห้ามใส่ชุดว่ายน้ำ/ผ้าเช็ดตัวลงน้ำ - รอยสักอาจถูกห้าม') },
    { icon: 'check', label: L('Queue & escalators', 'ต่อแถว & บันไดเลื่อน'), note: L('Line up neatly. In Kyushu/west Japan stand on the LEFT of escalators, pass on the right.', 'ต่อแถวเป็นระเบียบ - คิวชู/ญี่ปุ่นตะวันตก ยืนชิดซ้ายบนบันไดเลื่อน เดินแซงทางขวา') },
    { icon: 'alert', label: L('Trash & sorting', 'ขยะ & แยกประเภท'), note: L('Public bins are rare - carry rubbish until you find one (often by konbini); sort burnable / PET / cans.', 'ถังขยะสาธารณะหายาก พกขยะติดตัวจนเจอถัง (มักอยู่หน้าคอนบินิ) - แยกเผาได้/ขวด PET/กระป๋อง') },
  ],
};

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

Object.assign(window, { TRIP, REF_TYPES, TR, tx, tr, DESTINATION, TRAVELERS, EMERGENCY, BUDGET, KONBINI, ESSENTIALS, WEATHER, MENUS, PACKING, SOUVENIRS, DRIVING, VISITJAPAN, CULTURE, PHRASES, CREDIT });

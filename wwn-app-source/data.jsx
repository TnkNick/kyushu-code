// data.jsx — Kyoto lookbook itinerary (bilingual EN / TH).
// Two entry kinds:
//   • feature → big hero image + caption + reference dock (sightseeing, dining)
//   • step    → compact logistics row with a line-icon (flights, tickets, transit)
// Each day carries its own dark `theme` and a `date`.
const L = (en, th) => ({ en, th });

const TRIP = {
  title: L('Japan', 'ญี่ปุ่น'),
  subtitle: L('Ten Days Across the Old & New', 'สิบวันข้ามผ่านเก่าและใหม่'),
  dates: L('14 — 23 November 2026', '14 — 23 พฤศจิกายน 2026'),
  meta: L('Late Autumn · Momiji Season', 'ปลายฤดูใบไม้ร่วง · ฤดูใบไม้แดงโมมิจิ'),
  origin: L('A private itinerary', 'แผนการเดินทางส่วนตัว'),
  coverId: 'cover-hero',
  days: [
    // ───────────────────────── DAY 1 ─────────────────────────
    {
      label: 'Day 01', labelTh: 'วันที่ 01', theme: 'kurogane',
      date: L('Friday · 14 November 2026', 'ศุกร์ · 14 พฤศจิกายน 2026'),
      title: L('Higashiyama', 'ฮิงาชิยามะ'),
      subtitle: L('Arrival & the Eastern Hills', 'วันเดินทางถึง & เนินเขาตะวันออก'),
      note: L(
        'Touch down at Kansai at dawn, glide into Kyoto by express train, and spend the first day on foot through the lantern-lit lanes of Higashiyama, ending in Gion.',
        'ลงเครื่องที่คันไซตอนเช้า นั่งรถไฟด่วนเข้าเกียวโต แล้วใช้วันแรกเดินเท้าผ่านตรอกซอกซอยที่ส่องแสงโคมไฟของฮิงาชิยามะ ปิดท้ายที่ย่านกิออน'
      ),
      coverId: 'day1-cover',
      activities: [
        { type: 'step', time: '06:55', meridiem: 'Dawn', kind: 'Flight', icon: 'plane',
          title: L('Land at Kansai (KIX)', 'ถึงสนามบินคันไซ (KIX)'),
          place: L('Terminal 1 · International Arrivals', 'อาคาร 1 · ผู้โดยสารขาเข้าระหว่างประเทศ'),
          blurb: L('The overnight flight from Bangkok touches down on time. Follow the airbridge to immigration.',
                   'เที่ยวบินกลางคืนจากกรุงเทพฯ ลงตรงเวลา เดินตามงวงไปยังด่านตรวจคนเข้าเมือง'),
          refs: { reservation: { time: '06:55', code: 'TG-622', party: L('Seats 32A / 32C', 'ที่นั่ง 32A / 32C') },
                  notes: L('Have the Visit Japan Web QR ready before you reach the hall.',
                           'เตรียม QR จาก Visit Japan Web ให้พร้อมก่อนถึงห้องตรวจ') } },

        { type: 'step', time: '07:25', meridiem: 'Dawn', kind: 'Immigration', icon: 'passport',
          title: L('Immigration & Customs', 'ตรวจคนเข้าเมือง & ศุลกากร'),
          place: L('KIX Arrivals Hall', 'ห้องผู้โดยสารขาเข้า KIX'),
          blurb: L('Scan the QR, collect the landing slip, grab the single checked bag, and clear customs.',
                   'สแกน QR รับสลิปขาเข้า รับกระเป๋าโหลด แล้วผ่านศุลกากร'),
          refs: { notes: L('Keep the customs slip — it is collected at the green channel exit.',
                           'เก็บสลิปศุลกากรไว้ จะถูกเก็บที่ทางออกช่องเขียว') } },

        { type: 'step', time: '08:10', meridiem: 'Morning', kind: 'Ticket', icon: 'ticket',
          title: L('Collect ICOCA & Haruka', 'รับบัตร ICOCA & Haruka'),
          place: L('JR Ticket Office, KIX', 'ที่จำหน่ายตั๋ว JR, KIX'),
          blurb: L('Pick up the pre-reserved IC card and discounted Haruka express ticket at the green JR counter.',
                   'รับบัตร IC ที่จองไว้และตั๋วรถไฟด่วน Haruka ราคาพิเศษที่เคาน์เตอร์ JR สีเขียว'),
          refs: { map: 'https://maps.google.com/?q=JR+Ticket+Office+Kansai+Airport',
                  official: 'https://www.westjr.co.jp/global/en/ticket/haruka/',
                  booking: L('ICOCA & Haruka · ¥3,600', 'ICOCA & Haruka · ¥3,600'),
                  notes: L('Charge the ICOCA with ¥3,000 here — it covers buses, subways and konbini all trip.',
                           'เติมเงิน ICOCA ¥3,000 ที่นี่ ใช้ได้ทั้งรถบัส รถไฟใต้ดิน และร้านสะดวกซื้อตลอดทริป') } },

        { type: 'step', time: '08:46', meridiem: 'Morning', kind: 'Train', icon: 'train',
          title: L('Haruka Express → Kyoto', 'รถไฟด่วน Haruka → เกียวโต'),
          place: L('KIX → Kyoto Stn · 80 min', 'KIX → สถานีเกียวโต · 80 นาที'),
          blurb: L('A quiet reserved seat and a first look at the countryside sliding past on the way north.',
                   'ที่นั่งจองเงียบสงบ พร้อมชมวิวชนบทเลื่อนผ่านระหว่างทางขึ้นเหนือ'),
          refs: { reservation: { time: '08:46', code: 'HRK-1180', party: L('Car 4 · reserved', 'ตู้ 4 · ที่นั่งจอง') },
                  notes: L('Sit on the left for the better view. Large bags go on the rack by the door.',
                           'นั่งฝั่งซ้ายวิวสวยกว่า กระเป๋าใบใหญ่วางที่ชั้นวางใกล้ประตู') } },

        { type: 'step', time: '10:20', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Taxi to Gion, drop bags', 'แท็กซี่สู่กิออน ฝากกระเป๋า'),
          place: L('Ryokan Yoshi-ima, Higashiyama', 'เรียวกังโยชิอิมะ, ฮิงาชิยามะ'),
          blurb: L('Too early to check in — leave the luggage at the front desk and step straight out into the morning.',
                   'ยังเช็คอินไม่ได้ — ฝากกระเป๋าไว้ที่เคาน์เตอร์แล้วออกไปรับเช้าทันที'),
          refs: { map: 'https://maps.google.com/?q=Gion+Kyoto', notes: L('Around ¥1,800 from Kyoto Station.', 'ราว ¥1,800 จากสถานีเกียวโต') } },

        { type: 'feature', time: '10:45', meridiem: 'Morning', kind: 'Coffee', imageId: 'a-d1-arabica',
          title: L('% Arabica, Higashiyama', '% Arabica ฮิงาชิยามะ'),
          place: L('Yasaka · riverside counter', 'ยาซากะ · เคาน์เตอร์ริมแม่น้ำ'),
          blurb: L('A flat white at the marble counter — the gentlest possible overture to three days on foot.',
                   'แฟลตไวต์ที่เคาน์เตอร์หินอ่อน — บทเปิดที่นุ่มนวลที่สุดของสามวันแห่งการเดินเท้า'),
          refs: { map: 'https://maps.google.com/?q=%25+Arabica+Kyoto+Higashiyama', official: 'https://arabica.coffee/',
                  notes: L('Cash-free, counter only. The queue builds fast — go before the temple opens.',
                           'รับเฉพาะบัตร มีแต่เคาน์เตอร์ คิวยาวเร็ว ไปก่อนวัดเปิด') } },

        { type: 'feature', time: '11:30', meridiem: 'Morning', kind: 'Temple', imageId: 'a-d1-kiyomizu',
          title: L('Kiyomizu-dera', 'วัดคิโยมิซุเดระ'),
          place: L('UNESCO World Heritage Temple', 'วัดมรดกโลก UNESCO'),
          blurb: L('The great wooden stage juts over a hillside of maples in full crimson. Walk the Otowa spring and the vermilion pagoda below.',
                   'ระเบียงไม้ขนาดใหญ่ยื่นเหนือเนินเขาที่เต็มไปด้วยใบเมเปิลแดงฉาน เดินชมน้ำพุโอโตวะและเจดีย์สีชาดด้านล่าง'),
          refs: { map: 'https://maps.google.com/?q=Kiyomizu-dera', official: 'https://www.kiyomizudera.or.jp/en/',
                  booking: L('Entry ¥500 · pay at gate', 'ค่าเข้า ¥500 · จ่ายหน้าประตู'), guide: 'https://www.japan-guide.com/e/e3901.html',
                  notes: L('Enter from Chawan-zaka. The night illumination runs this week.', 'เข้าทางถนนชาวันซากะ สัปดาห์นี้มีไฟประดับยามค่ำ') } },

        { type: 'feature', time: '13:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d1-kikunoi',
          title: L('Kikunoi Roan', 'คิคุโนอิ โรอัน'),
          place: L('Kaiseki · Kiyamachi', 'ไคเซกิ · คิยามาจิ'),
          blurb: L('A counter lunch from a three-Michelin-star kitchen — autumn on a lacquer tray: matsutake, hamo, the first crab.',
                   'มื้อเที่ยงที่เคาน์เตอร์จากครัวสามดาวมิชลิน — ฤดูใบไม้ร่วงบนถาดเครื่องเขิน ทั้งเห็ดมัตสึทาเกะ ปลาฮาโม และปูตัวแรกของฤดู'),
          refs: { map: 'https://maps.google.com/?q=Kikunoi+Roan+Kyoto', official: 'https://kikunoi.jp/kikunoiweb/Roan/',
                  reservation: { time: '13:30', code: 'KNR-22184', party: L('Party of 2', 'โต๊ะ 2 ท่าน') },
                  booking: L('Prepaid · ¥11,000 pp', 'ชำระล่วงหน้า · ¥11,000/ท่าน'),
                  notes: L('Smart casual. Mention the kaiseki course on arrival.', 'แต่งตัวสุภาพ แจ้งว่ามาทานคอร์สไคเซกิเมื่อไปถึง') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d1-lanes',
          title: L('Sannenzaka & Ninenzaka', 'ซันเนนซากะ & นิเนนซากะ'),
          place: L('Preserved stone lanes', 'ตรอกหินที่ได้รับการอนุรักษ์'),
          blurb: L('Sloping streets of timber machiya, tea shops and the soft clack of geta — the most photographed approach in Japan.',
                   'ถนนลาดชันเรียงรายด้วยบ้านไม้มาจิยะ ร้านน้ำชา และเสียงเกี๊ยะเบาๆ — ทางเดินที่ถูกถ่ายรูปมากที่สุดในญี่ปุ่น'),
          refs: { map: 'https://maps.google.com/?q=Sannenzaka+Kyoto', guide: 'https://www.insidekyoto.com/ninen-zaka-sannen-zaka',
                  notes: L('Duck into Yasaka Koshindo for the kukurizaru charms.', 'แวะวัดยาซากะโคชินโดชมตุ๊กตาคุคุริซารุ') } },

        { type: 'step', time: '17:15', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Ryokan Yoshi-ima', 'เช็คอิน · เรียวกังโยชิอิมะ'),
          place: L('Gion · garden room', 'กิออน · ห้องวิวสวน'),
          blurb: L('Tatami, a welcome tea, and a yukata laid out. Soak away the flight before dinner.',
                   'เสื่อทาทามิ ชาต้อนรับ และยูกาตะที่จัดวางไว้ แช่น้ำคลายเมื่อยจากเที่ยวบินก่อนมื้อค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Yoshi-ima+Gion+Kyoto', reservation: { time: '17:15', code: 'YIM-2026', party: L('2 nights · garden room', '2 คืน · ห้องวิวสวน') } } },

        { type: 'feature', time: '19:30', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d1-gion',
          title: L('Gion Karyo', 'กิออน คาเรียว'),
          place: L('Kappo dining · Hanamikoji', 'อาหารคัปโป · ฮานามิโคจิ'),
          blurb: L('Dinner in the heart of the geisha district — seasonal kappo behind a noren curtain, steps from the Shirakawa canal.',
                   'มื้อค่ำใจกลางย่านเกอิชา อาหารคัปโปตามฤดูกาลหลังม่านโนเร็น ห่างจากคลองชิราคาวะไม่กี่ก้าว'),
          refs: { map: 'https://maps.google.com/?q=Gion+Karyo+Kyoto', official: 'https://www.gion-karyo.com/',
                  reservation: { time: '19:30', code: 'GK-7790', party: L('Party of 2 · counter', '2 ท่าน · เคาน์เตอร์') } } },

        { type: 'step', time: '21:00', meridiem: 'Night', kind: 'Walk', icon: 'walk',
          title: L('Night stroll, Shirakawa', 'เดินเล่นยามค่ำ ชิราคาวะ'),
          place: L('Gion · willow-lined canal', 'กิออน · คลองริมต้นหลิว'),
          blurb: L('Walk Hanamikoji slowly — maiko hurry between teahouses, and the canal lanterns double on the water.',
                   'เดินถนนฮานามิโคจิช้าๆ ไมโกะรีบเดินระหว่างร้านน้ำชา และโคมไฟริมคลองสะท้อนซ้อนบนผิวน้ำ'),
          refs: { map: 'https://maps.google.com/?q=Shirakawa+Gion' } },
      ],
    },

    // ───────────────────────── DAY 2 ─────────────────────────
    {
      label: 'Day 02', labelTh: 'วันที่ 02', theme: 'hisui',
      date: L('Saturday · 15 November 2026', 'เสาร์ · 15 พฤศจิกายน 2026'),
      title: L('Arashiyama', 'อาราชิยามะ'),
      subtitle: L('The Western Mountains', 'ขุนเขาฝั่งตะวันตก'),
      note: L(
        'A full day west among bamboo, river and garden. Move before dawn to have the famous groves to yourself, and end with an onsen and kaiseki back at the ryokan.',
        'หนึ่งวันเต็มทางตะวันตกท่ามกลางป่าไผ่ สายน้ำ และสวน ออกก่อนรุ่งสางเพื่อได้ป่าไผ่ชื่อดังไว้กับตัวเอง ปิดท้ายด้วยออนเซ็นและไคเซกิที่เรียวกัง'
      ),
      coverId: 'day2-cover',
      activities: [
        { type: 'step', time: '06:20', meridiem: 'Pre-dawn', kind: 'Train', icon: 'train',
          title: L('JR San-in Line → Saga', 'รถไฟสาย JR ซันอิน → ซากะ'),
          place: L('Kyoto Stn → Saga-Arashiyama · 17 min', 'สถานีเกียวโต → ซากะ-อาราชิยามะ · 17 นาที'),
          blurb: L('The first westbound local. Empty carriages and a pale, just-breaking sky.',
                   'รถไฟท้องถิ่นขบวนแรกมุ่งตะวันตก ตู้โดยสารว่างเปล่ากับท้องฟ้าซีดที่เพิ่งเริ่มสาง'),
          refs: { map: 'https://maps.google.com/?q=Saga-Arashiyama+Station',
                  notes: L('Tap in with ICOCA — no ticket needed for the local.', 'แตะ ICOCA เข้าได้เลย รถไฟท้องถิ่นไม่ต้องใช้ตั๋ว') } },

        { type: 'feature', time: '07:00', meridiem: 'Dawn', kind: 'Grove', imageId: 'a-d2-bamboo',
          title: L('Bamboo Grove', 'ป่าไผ่ซากาโนะ'),
          place: L('Sagano · before the crowds', 'ซากาโนะ · ก่อนคนพลุกพล่าน'),
          blurb: L('Towering green corridors filter a pale morning light. Arrive at dawn and the path is yours and the wind\u2019s alone.',
                   'ทางเดินสีเขียวสูงตระหง่านกรองแสงเช้าอ่อนๆ มาถึงตอนรุ่งอรุณแล้วทางเดินเป็นของคุณกับสายลมเท่านั้น'),
          refs: { map: 'https://maps.google.com/?q=Arashiyama+Bamboo+Grove', guide: 'https://www.japan-guide.com/e/e3912.html',
                  notes: L('Enter from the Nonomiya shrine side. Truly empty only before eight.', 'เข้าทางศาลเจ้าโนโนมิยะ ว่างจริงๆ ก่อนแปดโมงเท่านั้น') } },

        { type: 'feature', time: '08:30', meridiem: 'Morning', kind: 'Garden', imageId: 'a-d2-okochi',
          title: L('Okochi Sanso Villa', 'วิลล่าโอโคจิ ซันโซ'),
          place: L('Garden & teahouse', 'สวนและเรือนน้ำชา'),
          blurb: L('The hillside estate of a silent-film star: mossed stone paths, a teahouse, and a city view that comes with matcha.',
                   'คฤหาสน์บนเนินเขาของดาราหนังเงียบ ทางเดินหินปกคลุมมอส เรือนน้ำชา และวิวเมืองที่มาพร้อมมัทฉะ'),
          refs: { map: 'https://maps.google.com/?q=Okochi+Sanso+Villa', booking: L('Entry ¥1,000 · incl. matcha', 'ค่าเข้า ¥1,000 · รวมมัทฉะ'),
                  guide: 'https://www.insidekyoto.com/okochi-sanso-villa',
                  notes: L('Keep the tea ticket — redeem it at the teahouse near the top.', 'เก็บตั๋วชาไว้ ใช้แลกที่เรือนน้ำชาใกล้ยอด') } },

        { type: 'feature', time: '10:30', meridiem: 'Late morning', kind: 'Temple', imageId: 'a-d2-tenryuji',
          title: L('Tenryu-ji', 'วัดเท็นริวจิ'),
          place: L('Sogenchi pond garden', 'สวนบ่อโซเง็นจิ'),
          blurb: L('Kyoto\u2019s first-ranked Zen temple. The 14th-century pond garden borrows the Arashiyama peaks as its backdrop.',
                   'วัดเซนอันดับหนึ่งของเกียวโต สวนบ่อน้ำสมัยศตวรรษที่ 14 ยืมทิวเขาอาราชิยามะเป็นฉากหลัง'),
          refs: { map: 'https://maps.google.com/?q=Tenryu-ji', official: 'https://www.tenryuji.com/en/',
                  booking: L('Garden ¥500 · +¥300 buildings', 'สวน ¥500 · +¥300 อาคาร') } },

        { type: 'step', time: '12:30', meridiem: 'Midday', kind: 'Walk', icon: 'walk',
          title: L('Cross Togetsukyo Bridge', 'ข้ามสะพานโทเง็ตสึเคียว'),
          place: L('Katsura River', 'แม่น้ำคัตสึระ'),
          blurb: L('A short walk over the “moon-crossing bridge,” mountains rising straight from the far bank.',
                   'เดินสั้นๆ ข้าม “สะพานข้ามดวงจันทร์” มีภูเขาตั้งตระหง่านจากฝั่งตรงข้าม'),
          refs: { map: 'https://maps.google.com/?q=Togetsukyo+Bridge' } },

        { type: 'feature', time: '13:00', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d2-shoraian',
          title: L('Shoraian', 'โชไรอัน'),
          place: L('Tofu kaiseki · riverside', 'ไคเซกิเต้าหู้ · ริมแม่น้ำ'),
          blurb: L('Hidden up a wooded path above the Hozu river — a multi-course tofu kaiseki served over the rushing water.',
                   'ซ่อนตัวอยู่บนทางเดินในป่าเหนือแม่น้ำโฮซุ — ไคเซกิเต้าหู้หลายคอร์สเสิร์ฟเหนือสายน้ำเชี่ยว'),
          refs: { map: 'https://maps.google.com/?q=Shoraian+Arashiyama', official: 'https://www.shoraian.jp/',
                  reservation: { time: '13:00', code: 'SRA-3315', party: L('Party of 2 · river room', '2 ท่าน · ห้องริมน้ำ') },
                  booking: L('Yudofu course · ¥6,500 pp', 'คอร์สยูโดฟุ · ¥6,500/ท่าน') } },

        { type: 'step', time: '15:00', meridiem: 'Afternoon', kind: 'Ticket', icon: 'ticket',
          title: L('Collect Torokko tickets', 'รับตั๋วรถไฟโทร็อกโกะ'),
          place: L('Torokko Saga Station', 'สถานีโทร็อกโกะ ซากะ'),
          blurb: L('Pick up the reserved seats for the scenic line — the open car sells out first.',
                   'รับที่นั่งจองสำหรับรถไฟชมวิว — ตู้เปิดโล่งเต็มเร็วที่สุด'),
          refs: { map: 'https://maps.google.com/?q=Torokko+Saga+Station', official: 'https://www.sagano-kanko.co.jp/en/',
                  booking: L('Reserved · ¥880 ea', 'จองแล้ว · ¥880/ท่าน') } },

        { type: 'feature', time: '15:36', meridiem: 'Afternoon', kind: 'Journey', imageId: 'a-d2-train',
          title: L('Sagano Romantic Train', 'รถไฟสายโรแมนติกซากาโนะ'),
          place: L('Torokko scenic railway', 'ทางรถไฟชมวิวโทร็อกโกะ'),
          blurb: L('An open-window vintage train tracing the Hozugawa gorge through a tunnel of late-autumn colour.',
                   'รถไฟโบราณหน้าต่างเปิดโล่งเลาะหุบเขาโฮซุกาวะผ่านอุโมงค์ใบไม้เปลี่ยนสีปลายฤดู'),
          refs: { map: 'https://maps.google.com/?q=Saga+Torokko+Station',
                  reservation: { time: '15:36', code: 'TRK-4471', party: L('Car 5 · open carriage', 'ตู้ 5 · ตู้เปิดโล่ง') },
                  notes: L('Sit on the right, downhill, for the river views.', 'นั่งฝั่งขวาทิศลงเขาเพื่อชมวิวแม่น้ำ') } },

        { type: 'step', time: '17:10', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Return to Gion', 'กลับสู่กิออน'),
          place: L('Kameoka → Kyoto → Gion', 'คาเมโอกะ → เกียวโต → กิออน'),
          blurb: L('JR back to the city, then a short taxi as the light goes amber over the rooftops.',
                   'นั่ง JR กลับเข้าเมือง แล้วต่อแท็กซี่สั้นๆ ขณะแสงเปลี่ยนเป็นสีเหลืองอำพันเหนือหลังคาบ้าน'),
          refs: { map: 'https://maps.google.com/?q=Kameoka+Station' } },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Onsen', icon: 'bed',
          title: L('Onsen & rest', 'ออนเซ็น & พักผ่อน'),
          place: L('Ryokan Yoshi-ima', 'เรียวกังโยชิอิมะ'),
          blurb: L('A long soak in the cedar bath, then into a fresh yukata as the garden lanterns warm up.',
                   'แช่อ่างไม้สนนานๆ แล้วเปลี่ยนยูกาตะใหม่ขณะโคมไฟในสวนค่อยๆ อุ่นขึ้น'),
          refs: { reservation: { time: '18:00', code: 'ONS-15', party: L('Private bath · 60 min', 'อ่างส่วนตัว · 60 นาที') } } },

        { type: 'feature', time: '19:30', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d2-ryokan',
          title: L('Ryokan Kaiseki', 'ไคเซกิที่เรียวกัง'),
          place: L('In-house · private room', 'ในที่พัก · ห้องส่วนตัว'),
          blurb: L('A private kaiseki served course by course in the room, the garden glowing softly beyond the shoji.',
                   'ไคเซกิส่วนตัวเสิร์ฟทีละคอร์สในห้องพัก สวนเรืองแสงนวลผ่านบานโชจิ'),
          refs: { booking: L('Half-board · included in stay', 'รวมมื้ออาหาร · รวมในค่าที่พัก'),
                  reservation: { time: '19:30', code: 'RYO-2026', party: L('Garden room', 'ห้องวิวสวน') } } },
      ],
    },

    // ───────────────────────── DAY 3 ─────────────────────────
    {
      label: 'Day 03', labelTh: 'วันที่ 03', theme: 'urushi',
      date: L('Sunday · 16 November 2026', 'อาทิตย์ · 16 พฤศจิกายน 2026'),
      title: L('Northern Kyoto', 'เกียวโตตอนเหนือ'),
      subtitle: L('Gold, Stone & Departure', 'ทอง หิน และการอำลา'),
      note: L(
        'The celebrated north — a pavilion of gold, a garden of fifteen stones — a last market wander, then the long, quiet drift back to the airport.',
        'ตอนเหนืออันเลื่องชื่อ — ศาลาทองและสวนหินสิบห้าก้อน — เดินตลาดครั้งสุดท้าย ก่อนค่อยๆ เดินทางเงียบสงบกลับสู่สนามบิน'
      ),
      coverId: 'day3-cover',
      activities: [
        { type: 'step', time: '07:30', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out, store luggage', 'เช็คเอาท์ ฝากกระเป๋า'),
          place: L('Ryokan front desk', 'เคาน์เตอร์เรียวกัง'),
          blurb: L('Settle the bill, leave the bags behind the desk, and keep only a day pack for the north.',
                   'ชำระค่าที่พัก ฝากกระเป๋าไว้หลังเคาน์เตอร์ พกเพียงเป้ใบเล็กไปตอนเหนือ'),
          refs: { notes: L('Bags collected on the way to the station this afternoon.', 'มารับกระเป๋าระหว่างทางไปสถานีช่วงบ่าย') } },

        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Transfer', icon: 'car',
          title: L('Taxi to Kinkaku-ji', 'แท็กซี่สู่คินคะคุจิ'),
          place: L('Higashiyama → Kita-ku · 25 min', 'ฮิงาชิยามะ → เขตคิตะ · 25 นาที'),
          blurb: L('Cross the waking city by taxi to be first through the gate of the Golden Pavilion.',
                   'นั่งแท็กซี่ข้ามเมืองที่กำลังตื่นเพื่อเป็นคนแรกที่ผ่านประตูศาลาทอง'),
          refs: { map: 'https://maps.google.com/?q=Kinkaku-ji', notes: L('About ¥2,400. Ask for the Kinkaku-ji main gate.', 'ราว ¥2,400 บอกให้ไปประตูหลักคินคะคุจิ') } },

        { type: 'feature', time: '08:30', meridiem: 'Morning', kind: 'Temple', imageId: 'a-d3-kinkakuji',
          title: L('Kinkaku-ji', 'วัดคินคะคุจิ'),
          place: L('The Golden Pavilion', 'ศาลาทอง'),
          blurb: L('Two storeys leafed in pure gold, mirrored in a still reflecting pond. Arrive at opening before the surface is broken.',
                   'ศาลาสองชั้นปิดทองคำเปลวแท้ สะท้อนในบ่อน้ำนิ่งสนิท ไปถึงตอนเปิดก่อนผิวน้ำจะกระเพื่อม'),
          refs: { map: 'https://maps.google.com/?q=Kinkaku-ji', official: 'https://www.shokoku-ji.jp/en/kinkakuji/',
                  booking: L('Entry ¥500 · pay at gate', 'ค่าเข้า ¥500 · จ่ายหน้าประตู'),
                  notes: L('The reflection is cleanest in the first half hour.', 'เงาสะท้อนใสที่สุดในครึ่งชั่วโมงแรก') } },

        { type: 'feature', time: '10:00', meridiem: 'Morning', kind: 'Garden', imageId: 'a-d3-ryoanji',
          title: L('Ryoan-ji', 'วัดเรียวอันจิ'),
          place: L('The rock garden', 'สวนหิน'),
          blurb: L('Fifteen stones in raked white gravel — never all visible at once. The most famous karesansui in the world, best read in silence.',
                   'หินสิบห้าก้อนในกรวดขาวที่ถูกคราด — มองไม่เห็นครบพร้อมกัน สวนหินที่โด่งดังที่สุดในโลก ชมในความเงียบดีที่สุด'),
          refs: { map: 'https://maps.google.com/?q=Ryoan-ji', official: 'http://www.ryoanji.jp/top.html',
                  booking: L('Entry ¥600', 'ค่าเข้า ¥600'), guide: 'https://www.japan-guide.com/e/e3909.html' } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d3-toriiwaro',
          title: L('Toriiwaro', 'โทริอิวาโร'),
          place: L('Kyo-ryori · Kamogawa', 'อาหารเกียวโต · ริมแม่น้ำคาโม'),
          blurb: L('A century-old riverside house for refined Kyoto cuisine — a last unhurried lunch over the Kamo river.',
                   'บ้านริมแม่น้ำอายุร้อยปีสำหรับอาหารเกียวโตชั้นเลิศ — มื้อเที่ยงสุดท้ายแบบไม่เร่งรีบเหนือแม่น้ำคาโม'),
          refs: { map: 'https://maps.google.com/?q=Toriiwaro+Kyoto', official: 'https://www.toriiwaro.co.jp/',
                  reservation: { time: '12:30', code: 'TIW-1180', party: L('Party of 2 · river deck', '2 ท่าน · ระเบียงริมน้ำ') } } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d3-nishiki',
          title: L('Nishiki Market', 'ตลาดนิชิกิ'),
          place: L('\u201cKyoto\u2019s Kitchen\u201d', '“ครัวของเกียวโต”'),
          blurb: L('Five narrow covered blocks of pickles, knives, tea and sweets — the last browsing, and any gifts to carry home.',
                   'ตลาดมีหลังคาห้าช่วงตึกแคบๆ เต็มไปด้วยของดอง มีด ชา และขนมหวาน — เดินชมครั้งสุดท้ายและซื้อของฝากกลับบ้าน'),
          refs: { map: 'https://maps.google.com/?q=Nishiki+Market', guide: 'https://www.insidekyoto.com/nishiki-market',
                  notes: L('Aritsugu for a finishing knife; Konnamonja for soy-milk doughnuts.', 'ร้านอาริตสึงุสำหรับมีดทำครัว ร้านคอนนะมอนจะสำหรับโดนัทนมถั่วเหลือง') } },

        { type: 'step', time: '16:10', meridiem: 'Afternoon', kind: 'Transfer', icon: 'car',
          title: L('Collect luggage → Kyoto Stn', 'รับกระเป๋า → สถานีเกียวโต'),
          place: L('Gion → Kyoto Station', 'กิออน → สถานีเกียวโต'),
          blurb: L('Swing by the ryokan for the bags, then straight to the station with time to spare.',
                   'แวะเรียวกังรับกระเป๋า แล้วตรงไปสถานีโดยมีเวลาเหลือ'),
          refs: { map: 'https://maps.google.com/?q=Kyoto+Station' } },

        { type: 'feature', time: '17:10', meridiem: 'Evening', kind: 'Journey', imageId: 'a-d3-onward',
          title: L('Kintetsu Express → Nara', 'รถไฟด่วนคินเท็ตสึ → นารา'),
          place: L('Kyoto Stn → Kintetsu-Nara · 45 min', 'สถานีเกียวโต → คินเท็ตสึนารา · 45 นาที'),
          blurb: L('A short hop south-east to the very first capital, bags and all, as dusk settles over the rice plains.',
                   'นั่งสั้นๆ ลงทิศตะวันออกเฉียงใต้สู่เมืองหลวงแห่งแรก พร้อมกระเป๋า ขณะสนธยาปกคลุมที่ราบนาข้าว'),
          refs: { map: 'https://maps.google.com/?q=Kintetsu+Nara+Station',
                  reservation: { time: '17:10', code: 'KTN-3380', party: L('Limited Express · reserved', 'รถด่วนพิเศษ · ที่นั่งจอง') },
                  notes: L('Bags fit on the overhead rack; the express has no luggage car.', 'กระเป๋าวางบนชั้นเหนือศีรษะได้ รถด่วนไม่มีตู้สัมภาระ') } },

        { type: 'step', time: '18:30', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Nara Hotel', 'เช็คอิน · โรงแรมนารา'),
          place: L('Est. 1909 · classic wing', 'ก่อตั้ง 1909 · อาคารคลาสสิก'),
          blurb: L('A grand old railway hotel above Nara Park — wood, brass and a hundred years of guests.',
                   'โรงแรมรถไฟเก่าแก่หรูหราเหนือสวนนารา — ไม้ ทองเหลือง และแขกนับร้อยปี'),
          refs: { map: 'https://maps.google.com/?q=Nara+Hotel', official: 'https://www.narahotel.co.jp/en/',
                  reservation: { time: '18:30', code: 'NRH-2026', party: L('1 night · classic twin', '1 คืน · ทวินคลาสสิก') } } },
      ],
    },

    // ───────────────────────── DAY 4 · NARA ─────────────────────────
    {
      label: 'Day 04', labelTh: 'วันที่ 04', theme: 'ai',
      date: L('Monday · 17 November 2026', 'จันทร์ · 17 พฤศจิกายน 2026'),
      title: L('Nara', 'นารา'),
      subtitle: L('Deer, Bronze & the First Capital', 'กวาง สำริด และเมืองหลวงแรก'),
      note: L('A slow day among the bowing deer and giant bronze Buddha of Japan\u2019s 8th-century capital, before the train west to Osaka.',
              'วันสบายๆ ท่ามกลางกวางที่โค้งคำนับและพระพุทธรูปสำริดยักษ์แห่งเมืองหลวงศตวรรษที่ 8 ก่อนนั่งรถไฟไปโอซากา'),
      coverId: 'day4-cover',
      activities: [
        { type: 'feature', time: '08:30', meridiem: 'Morning', kind: 'Park', imageId: 'a-d4-park',
          title: L('Nara Park & the Deer', 'สวนนารา & ฝูงกวาง'),
          place: L('1,200 free-roaming deer', 'กวางเดินอิสระ 1,200 ตัว'),
          blurb: L('Bow to a deer and it bows back. Buy the shika-senbei crackers and walk the misty morning lawns.',
                   'โค้งให้กวางแล้วมันจะโค้งตอบ ซื้อขนมชิกะเซมเบ้แล้วเดินบนสนามหญ้ายามเช้าที่มีหมอก'),
          refs: { map: 'https://maps.google.com/?q=Nara+Park', guide: 'https://www.japan-guide.com/e/e4100.html',
                  notes: L('Deer can nip — hold crackers high and feed quickly.', 'กวางอาจงับได้ ยกขนมให้สูงและป้อนเร็วๆ') } },

        { type: 'feature', time: '10:00', meridiem: 'Morning', kind: 'Temple', imageId: 'a-d4-todaiji',
          title: L('Todai-ji', 'วัดโทไดจิ'),
          place: L('Great Buddha Hall', 'วิหารพระใหญ่'),
          blurb: L('The world\u2019s largest wooden hall, sheltering a 15-metre bronze Buddha cast in 752.',
                   'วิหารไม้ที่ใหญ่ที่สุดในโลก ปกป้องพระพุทธรูปสำริดสูง 15 เมตรหล่อขึ้นในปี 752'),
          refs: { map: 'https://maps.google.com/?q=Todai-ji', official: 'https://www.todaiji.or.jp/en/',
                  booking: L('Entry ¥800', 'ค่าเข้า ¥800'),
                  notes: L('Squeeze through the pillar hole at the back for good luck.', 'ลอดรูเสาด้านหลังเพื่อความโชคดี') } },

        { type: 'feature', time: '12:30', meridiem: 'Midday', kind: 'Dining', imageId: 'a-d4-lunch',
          title: L('Kakinoha-zushi lunch', 'มื้อเที่ยงคากิโนฮะซูชิ'),
          place: L('Persimmon-leaf sushi · Naramachi', 'ซูชิห่อใบพลับ · นารามาจิ'),
          blurb: L('Pressed mackerel sushi wrapped in persimmon leaves — Nara\u2019s mountain-country specialty.',
                   'ซูชิปลาซาบะอัดห่อใบพลับ — ของขึ้นชื่อแห่งเมืองภูเขานารา'),
          refs: { map: 'https://maps.google.com/?q=Naramachi+Nara', notes: L('Unwrap the leaf before eating.', 'แกะใบออกก่อนทาน') } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'Shrine', imageId: 'a-d4-kasuga',
          title: L('Kasuga Taisha', 'ศาลเจ้าคาสึงะไทฉะ'),
          place: L('Three thousand stone lanterns', 'ตะเกียงหินสามพันต้น'),
          blurb: L('A vermilion shrine deep in cedar forest, its paths lined with moss-covered lanterns.',
                   'ศาลเจ้าสีชาดกลางป่าซีดาร์ ทางเดินเรียงรายด้วยตะเกียงหินปกคลุมมอส'),
          refs: { map: 'https://maps.google.com/?q=Kasuga+Taisha', official: 'https://www.kasugataisha.or.jp/',
                  booking: L('Inner area ¥500', 'พื้นที่ชั้นใน ¥500') } },

        { type: 'step', time: '16:45', meridiem: 'Evening', kind: 'Train', icon: 'train',
          title: L('Kintetsu → Osaka', 'คินเท็ตสึ → โอซากา'),
          place: L('Nara → Osaka-Namba · 40 min', 'นารา → โอซากานัมบะ · 40 นาที'),
          blurb: L('West into the neon city as the lights come on.', 'มุ่งตะวันตกเข้าสู่เมืองนีออนขณะไฟเริ่มสว่าง'),
          refs: { map: 'https://maps.google.com/?q=Osaka+Namba+Station', booking: L('IC tap · ¥570', 'แตะ IC · ¥570') } },

        { type: 'step', time: '17:45', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Namba', 'เช็คอิน · นัมบะ'),
          place: L('Design hotel, Minami', 'โรงแรมดีไซน์ ย่านมินามิ'),
          blurb: L('Drop the bags high above the buzz of Dotonbori.', 'เก็บกระเป๋าบนชั้นสูงเหนือความคึกคักของโดทงโบริ'),
          refs: { reservation: { time: '17:45', code: 'NMB-4410', party: L('2 nights · city view', '2 คืน · วิวเมือง') } } },

        { type: 'feature', time: '19:30', meridiem: 'Night', kind: 'Dining', imageId: 'a-d4-dotonbori',
          title: L('Dotonbori street food', 'สตรีทฟู้ดโดทงโบริ'),
          place: L('Takoyaki, kushikatsu, neon', 'ทาโกยากิ คุชิคัตสึ และนีออน'),
          blurb: L('Eat your way along the canal under the running Glico man — Osaka\u2019s kuidaore spirit.',
                   'กินไปตามคลองใต้ป้ายกูลิโกะวิ่ง — จิตวิญญาณ \u201cกินจนล้ม\u201d ของโอซากา'),
          refs: { map: 'https://maps.google.com/?q=Dotonbori', guide: 'https://www.japan-guide.com/e/e4001.html' } },
      ],
    },

    // ───────────────────────── DAY 5 · OSAKA ─────────────────────────
    {
      label: 'Day 05', labelTh: 'วันที่ 05', theme: 'kohaku',
      date: L('Tuesday · 18 November 2026', 'อังคาร · 18 พฤศจิกายน 2026'),
      title: L('Osaka', 'โอซากา'),
      subtitle: L('Castle, Kitchen & Neon', 'ปราสาท ครัว และนีออน'),
      note: L('Japan\u2019s brash, big-hearted kitchen city — a castle by day, the depths of Dotonbori and Shinsekai by night.',
              'เมืองครัวที่ห้าวหาญและใจกว้างของญี่ปุ่น — ปราสาทยามกลางวัน และคืนลึกของโดทงโบริและชินเซไก'),
      coverId: 'day5-cover',
      activities: [
        { type: 'feature', time: '09:00', meridiem: 'Morning', kind: 'Castle', imageId: 'a-d5-castle',
          title: L('Osaka Castle', 'ปราสาทโอซากา'),
          place: L('Hideyoshi\u2019s fortress', 'ป้อมปราการของฮิเดโยชิ'),
          blurb: L('A gold-trimmed keep on cyclopean stone walls, moats blazing with late-autumn colour.',
                   'หอปราสาทขลิบทองบนกำแพงหินมหึมา คูเมืองเปล่งสีสันปลายฤดูใบไม้ร่วง'),
          refs: { map: 'https://maps.google.com/?q=Osaka+Castle', official: 'https://www.osakacastle.net/',
                  booking: L('Keep entry ¥600', 'เข้าหอปราสาท ¥600') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Market', imageId: 'a-d5-kuromon',
          title: L('Kuromon Ichiba', 'ตลาดคุโรมง'),
          place: L('\u201cOsaka\u2019s Kitchen\u201d', '\u201cครัวของโอซากา\u201d'),
          blurb: L('Grilled scallops, uni, fatty tuna and fruit eaten standing among the stalls.',
                   'หอยเชลล์ย่าง ไข่หอยเม่น ทูน่าติดมัน และผลไม้ ทานยืนกลางแผงค้า'),
          refs: { map: 'https://maps.google.com/?q=Kuromon+Ichiba+Market', guide: 'https://www.japan-guide.com/e/e4006.html' } },

        { type: 'feature', time: '14:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d5-umeda',
          title: L('Umeda Sky Building', 'ตึกอุเมดะสกาย'),
          place: L('Floating Garden Observatory', 'หอชมวิวสวนลอยฟ้า'),
          blurb: L('Two towers joined by a sky-ring 170 m up — the whole Kansai plain at your feet.',
                   'สองหอเชื่อมด้วยวงแหวนลอยฟ้าสูง 170 เมตร — ที่ราบคันไซทั้งผืนอยู่ใต้เท้า'),
          refs: { map: 'https://maps.google.com/?q=Umeda+Sky+Building', booking: L('Observatory ¥1,500', 'หอชมวิว ¥1,500') } },

        { type: 'feature', time: '18:30', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d5-shinsekai',
          title: L('Shinsekai & kushikatsu', 'ชินเซไก & คุชิคัตสึ'),
          place: L('Tsutenkaku tower district', 'ย่านหอคอยสึเทนคาคุ'),
          blurb: L('Retro neon, deep-fried skewers and the no-double-dipping rule — old downtown Osaka after dark.',
                   'นีออนย้อนยุค ไม้เสียบทอด และกฎห้ามจุ่มซอสซ้ำ — ดาวน์ทาวน์เก่าโอซากายามค่ำ'),
          refs: { map: 'https://maps.google.com/?q=Shinsekai+Osaka',
                  notes: L('One dip in the communal sauce only — never twice.', 'จุ่มซอสรวมได้ครั้งเดียว ห้ามจุ่มซ้ำ') } },
      ],
    },

    // ───────────────────────── DAY 6 · HAKONE ─────────────────────────
    {
      label: 'Day 06', labelTh: 'วันที่ 06', theme: 'hisui',
      date: L('Wednesday · 19 November 2026', 'พุธ · 19 พฤศจิกายน 2026'),
      title: L('Hakone', 'ฮาโกเน่'),
      subtitle: L('Shinkansen, Sulphur & Hot Springs', 'ชินคันเซ็น กำมะถัน และน้ำพุร้อน'),
      note: L('Board the bullet train east, then loop Hakone by mountain railway, cable car, sulphur valley and pirate ship — ending in an onsen ryokan.',
              'ขึ้นรถไฟหัวกระสุนมุ่งตะวันออก แล้ววนฮาโกเน่ด้วยรถไฟภูเขา กระเช้า หุบเขากำมะถัน และเรือโจรสลัด ปิดท้ายที่เรียวกังออนเซ็น'),
      coverId: 'day6-cover',
      activities: [
        { type: 'step', time: '08:12', meridiem: 'Morning', kind: 'Shinkansen', icon: 'train',
          title: L('Shinkansen → Odawara', 'ชินคันเซ็น → โอดาวาระ'),
          place: L('Shin-Osaka → Odawara · 2h 40m', 'ชินโอซากา → โอดาวาระ · 2 ชม. 40 น.'),
          blurb: L('Reserved seats on the Nozomi; Mt Fuji flashes by on the right near Mishima.',
                   'ที่นั่งจองบนรถโนโซมิ ภูเขาไฟฟูจิแวบผ่านทางขวาใกล้มิชิมะ'),
          refs: { official: 'https://www.japan-guide.com/e/e2361.html',
                  reservation: { time: '08:12', code: 'NZM-7012', party: L('Car 7 · seats D/E', 'ตู้ 7 · ที่นั่ง D/E') },
                  notes: L('Sit on the right (D/E) for the Fuji view.', 'นั่งฝั่งขวา (D/E) เพื่อชมฟูจิ') } },

        { type: 'feature', time: '11:30', meridiem: 'Late morning', kind: 'Journey', imageId: 'a-d6-railway',
          title: L('Hakone Tozan Railway', 'รถไฟฮาโกเน่โทซัง'),
          place: L('Switchback mountain line', 'ทางรถไฟภูเขาสลับฟันปลา'),
          blurb: L('A tiny three-car train zig-zags up through hydrangea slopes and tunnels.',
                   'รถไฟสามตู้เล็กๆ ไต่ซิกแซกขึ้นผ่านเนินไฮเดรนเยียและอุโมงค์'),
          refs: { map: 'https://maps.google.com/?q=Hakone+Tozan+Railway', booking: L('Hakone Free Pass · ¥6,100', 'ฮาโกเน่ฟรีพาส · ¥6,100') } },

        { type: 'feature', time: '13:30', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d6-owakudani',
          title: L('Owakudani Valley', 'หุบเขาโอวาคุดานิ'),
          place: L('Volcanic sulphur vents', 'ปล่องกำมะถันภูเขาไฟ'),
          blurb: L('Steam hisses from the old crater; eat a black egg boiled in the springs for seven more years of life.',
                   'ไอน้ำพวยพุ่งจากปากปล่องเก่า กินไข่ดำต้มในบ่อน้ำพุร้อนเพื่ออายุยืนอีกเจ็ดปี'),
          refs: { map: 'https://maps.google.com/?q=Owakudani', guide: 'https://www.japan-guide.com/e/e5210.html',
                  notes: L('Cable car may close on windy gas days — check the board.', 'กระเช้าอาจปิดวันลมแรง ตรวจป้ายประกาศ') } },

        { type: 'feature', time: '15:30', meridiem: 'Afternoon', kind: 'Ferry', imageId: 'a-d6-lake',
          title: L('Lake Ashi pirate ship', 'เรือโจรสลัดทะเลสาบอาชิ'),
          place: L('Hakone-machi → Togendai', 'ฮาโกเน่มาจิ → โทเก็นได'),
          blurb: L('A gaudy galleon glides across the caldera lake toward the floating red torii.',
                   'เรือใบฉูดฉาดแล่นข้ามทะเลสาบปากปล่องสู่เสาโทริอิแดงลอยน้ำ'),
          refs: { map: 'https://maps.google.com/?q=Lake+Ashi', official: 'https://www.hakone-kankosen.co.jp/foreign/en/' } },

        { type: 'step', time: '17:30', meridiem: 'Evening', kind: 'Onsen', icon: 'bed',
          title: L('Check in · onsen ryokan', 'เช็คอิน · เรียวกังออนเซ็น'),
          place: L('Private open-air bath', 'อ่างกลางแจ้งส่วนตัว'),
          blurb: L('A room with its own hinoki rotenburo, steam rising into the cold mountain night.',
                   'ห้องพักพร้อมอ่างไม้ฮิโนกิกลางแจ้งส่วนตัว ไอน้ำลอยขึ้นสู่ค่ำคืนภูเขาที่หนาวเย็น'),
          refs: { reservation: { time: '17:30', code: 'HKN-2026', party: L('1 night · half board', '1 คืน · รวมสองมื้อ') } } },

        { type: 'feature', time: '19:00', meridiem: 'Evening', kind: 'Dining', imageId: 'a-d6-kaiseki',
          title: L('Mountain kaiseki', 'ไคเซกิแห่งขุนเขา'),
          place: L('In-room · seasonal course', 'ในห้อง · คอร์สตามฤดูกาล'),
          blurb: L('Course after course of the mountains — yuba, river fish, wagyu on a hot stone.',
                   'คอร์สแล้วคอร์สแห่งขุนเขา — ฟองเต้าหู้ ปลาแม่น้ำ และวากิวบนหินร้อน'),
          refs: { booking: L('Included in stay', 'รวมในค่าที่พัก') } },
      ],
    },

    // ───────────────────────── DAY 7 · FUJI ─────────────────────────
    {
      label: 'Day 07', labelTh: 'วันที่ 07', theme: 'ai',
      date: L('Thursday · 20 November 2026', 'พฤหัสบดี · 20 พฤศจิกายน 2026'),
      title: L('Mt Fuji', 'ภูเขาไฟฟูจิ'),
      subtitle: L('Lakes, Reflections & the Sacred Cone', 'ทะเลสาบ เงาสะท้อน และกรวยศักดิ์สิทธิ์'),
      note: L('Cross to the Fuji Five Lakes for the mountain in full — reflected in Kawaguchiko, framed by a pagoda, then the express into Tokyo.',
              'ข้ามไปยังทะเลสาบทั้งห้าของฟูจิเพื่อชมภูเขาเต็มองค์ — สะท้อนในทะเลสาบคาวากุจิโกะ มีเจดีย์เป็นกรอบ ก่อนนั่งรถด่วนเข้าโตเกียว'),
      coverId: 'day7-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Bus', icon: 'car',
          title: L('Bus → Kawaguchiko', 'รถบัส → คาวากุจิโกะ'),
          place: L('Hakone → Fuji Five Lakes · 1h', 'ฮาโกเน่ → ทะเลสาบทั้งห้าฟูจิ · 1 ชม.'),
          blurb: L('A winding highland road; the cone grows in the windscreen the whole way.',
                   'ถนนที่ราบสูงคดเคี้ยว กรวยภูเขาค่อยใหญ่ขึ้นในกระจกหน้าตลอดทาง'),
          refs: { map: 'https://maps.google.com/?q=Kawaguchiko+Station', booking: L('Highway bus · ¥2,300', 'รถบัสทางหลวง · ¥2,300') } },

        { type: 'feature', time: '09:30', meridiem: 'Morning', kind: 'View', imageId: 'a-d7-chureito',
          title: L('Chureito Pagoda', 'เจดีย์ชูเรโตะ'),
          place: L('Arakurayama · 398 steps', 'อารากุระยามะ · 398 ขั้น'),
          blurb: L('Climb the steps for the postcard: red pagoda, autumn maples and Fuji stacked in one frame.',
                   'ไต่บันไดเพื่อภาพโปสการ์ด เจดีย์แดง ใบเมเปิลฤดูใบไม้ร่วง และฟูจิซ้อนในเฟรมเดียว'),
          refs: { map: 'https://maps.google.com/?q=Chureito+Pagoda', guide: 'https://www.japan-guide.com/e/e6915.html',
                  notes: L('Clearest air is before 10am — go straight up.', 'อากาศใสที่สุดก่อน 10 โมง ขึ้นไปเลย') } },

        { type: 'feature', time: '12:00', meridiem: 'Midday', kind: 'Lake', imageId: 'a-d7-lake',
          title: L('Lake Kawaguchi shore', 'ริมทะเลสาบคาวากุจิ'),
          place: L('Reflection of \u201cinverted Fuji\u201d', 'เงาสะท้อน \u201cฟูจิกลับหัว\u201d'),
          blurb: L('On a still noon the mountain doubles perfectly on the water — the famous sakasa-Fuji.',
                   'ในเที่ยงวันที่นิ่งสงบ ภูเขาสะท้อนสมบูรณ์บนผิวน้ำ — \u201cซากาสะฟูจิ\u201d อันโด่งดัง'),
          refs: { map: 'https://maps.google.com/?q=Lake+Kawaguchi', notes: L('Wind ripples ruin it after midday.', 'ลมทำให้ผิวน้ำกระเพื่อมหลังเที่ยง') } },

        { type: 'step', time: '15:30', meridiem: 'Afternoon', kind: 'Train', icon: 'train',
          title: L('Limited Express → Tokyo', 'รถด่วนพิเศษ → โตเกียว'),
          place: L('Kawaguchiko → Shinjuku · 2h', 'คาวากุจิโกะ → ชินจูกุ · 2 ชม.'),
          blurb: L('The Fuji Excursion train runs straight into the heart of the capital.',
                   'รถไฟฟูจิเอ็กซ์เคอร์ชันวิ่งตรงเข้าสู่ใจกลางเมืองหลวง'),
          refs: { reservation: { time: '15:30', code: 'FJX-2218', party: L('Car 1 · reserved', 'ตู้ 1 · ที่นั่งจอง') } } },

        { type: 'step', time: '18:00', meridiem: 'Evening', kind: 'Check-in', icon: 'bed',
          title: L('Check in · Shinjuku', 'เช็คอิน · ชินจูกุ'),
          place: L('Tower hotel, 40th floor', 'โรงแรมตึกสูง ชั้น 40'),
          blurb: L('The city stretches to the horizon in every direction, glittering awake.',
                   'เมืองทอดยาวสู่ขอบฟ้าทุกทิศทาง ส่องประกายตื่นขึ้น'),
          refs: { reservation: { time: '18:00', code: 'TKY-9004', party: L('3 nights · skyline room', '3 คืน · ห้องวิวเมือง') } } },
      ],
    },

    // ───────────────────────── DAY 8 · TOKYO ─────────────────────────
    {
      label: 'Day 08', labelTh: 'วันที่ 08', theme: 'botan',
      date: L('Friday · 21 November 2026', 'ศุกร์ · 21 พฤศจิกายน 2026'),
      title: L('Tokyo — East', 'โตเกียว — ฝั่งตะวันออก'),
      subtitle: L('Temples, Gardens & the Old City', 'วัด สวน และเมืองเก่า'),
      note: L('Begin where Tokyo began — Asakusa\u2019s great temple, a sumida cruise, the old quarters of Yanaka, and dinner high above Ginza.',
              'เริ่มต้นที่จุดกำเนิดโตเกียว — วัดใหญ่แห่งอาซากุสะ ล่องเรือสุมิดะ ย่านเก่ายานากะ และมื้อค่ำเหนือกินซ่า'),
      coverId: 'day8-cover',
      activities: [
        { type: 'feature', time: '08:30', meridiem: 'Morning', kind: 'Temple', imageId: 'a-d8-sensoji',
          title: L('Senso-ji, Asakusa', 'วัดเซ็นโซจิ อาซากุสะ'),
          place: L('Tokyo\u2019s oldest temple', 'วัดเก่าแก่ที่สุดของโตเกียว'),
          blurb: L('Through the giant red lantern of Kaminarimon and up the stall-lined Nakamise to the incense haze.',
                   'ลอดโคมแดงยักษ์คามินาริมงขึ้นถนนนากามิเสะที่เรียงรายแผงค้าสู่ม่านควันธูป'),
          refs: { map: 'https://maps.google.com/?q=Senso-ji', official: 'https://www.senso-ji.jp/about/',
                  notes: L('Arrive by nine — Nakamise fills fast.', 'มาถึงก่อนเก้าโมง ถนนนากามิเสะแน่นเร็ว') } },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Journey', imageId: 'a-d8-sumida',
          title: L('Sumida River cruise', 'ล่องเรือแม่น้ำสุมิดะ'),
          place: L('Asakusa → Hamarikyu', 'อาซากุสะ → ฮามาริคิว'),
          blurb: L('A futuristic water bus slides under a dozen bridges to a garden by the bay.',
                   'เรือบัสน้ำล้ำอนาคตลอดใต้สะพานนับสิบสู่สวนริมอ่าว'),
          refs: { map: 'https://maps.google.com/?q=Hamarikyu+Gardens', booking: L('Cruise ¥1,000 + garden ¥300', 'ล่องเรือ ¥1,000 + สวน ¥300') } },

        { type: 'feature', time: '14:00', meridiem: 'Afternoon', kind: 'Wander', imageId: 'a-d8-yanaka',
          title: L('Yanaka old town', 'ย่านเก่ายานากะ'),
          place: L('Shitamachi backstreets', 'ตรอกซอยชิตามาจิ'),
          blurb: L('The Tokyo that survived the war and the bubble — cats, craft shops and wooden houses.',
                   'โตเกียวที่รอดจากสงครามและยุคฟองสบู่ — แมว ร้านงานคราฟต์ และบ้านไม้'),
          refs: { map: 'https://maps.google.com/?q=Yanaka+Ginza', guide: 'https://www.japan-guide.com/e/e3034.html' } },

        { type: 'feature', time: '19:00', meridiem: 'Night', kind: 'Dining', imageId: 'a-d8-ginza',
          title: L('Sushi counter, Ginza', 'เคาน์เตอร์ซูชิ กินซ่า'),
          place: L('Edomae omakase', 'โอมากาเสะเอโดมาเอะ'),
          blurb: L('Twenty pieces, no menu, the chef reading the room — Tokyo Bay fish at its source.',
                   'ยี่สิบคำ ไม่มีเมนู เชฟอ่านใจลูกค้า — ปลาอ่าวโตเกียวจากต้นทาง'),
          refs: { map: 'https://maps.google.com/?q=Ginza+Tokyo',
                  reservation: { time: '19:00', code: 'GNZ-1188', party: L('Counter · 2 seats', 'เคาน์เตอร์ · 2 ที่นั่ง') },
                  booking: L('Omakase · ¥22,000 pp', 'โอมากาเสะ · ¥22,000/ท่าน') } },
      ],
    },

    // ───────────────────────── DAY 9 · TOKYO ─────────────────────────
    {
      label: 'Day 09', labelTh: 'วันที่ 09', theme: 'kurogane',
      date: L('Saturday · 22 November 2026', 'เสาร์ · 22 พฤศจิกายน 2026'),
      title: L('Tokyo — West', 'โตเกียว — ฝั่งตะวันตก'),
      subtitle: L('Pop, Crossings & Skyline', 'ป๊อป ทางม้าลาย และเส้นขอบฟ้า'),
      note: L('The other Tokyo — a forest shrine, the world\u2019s busiest crossing, the youth riot of Harajuku, and the city from above at night.',
              'โตเกียวอีกด้าน — ศาลเจ้ากลางป่า ทางม้าลายที่พลุกพล่านที่สุดในโลก ความจัดจ้านของฮาราจูกุ และเมืองจากเบื้องบนยามค่ำ'),
      coverId: 'day9-cover',
      activities: [
        { type: 'feature', time: '09:00', meridiem: 'Morning', kind: 'Shrine', imageId: 'a-d9-meiji',
          title: L('Meiji Jingu', 'ศาลเจ้าเมจิ'),
          place: L('Forest shrine, Harajuku', 'ศาลเจ้ากลางป่า ฮาราจูกุ'),
          blurb: L('A hundred thousand donated trees hide the city; gravel paths lead to vast cypress torii.',
                   'ต้นไม้บริจาคนับแสนซ่อนเมืองไว้ ทางกรวดนำสู่เสาโทริอิไซเปรสขนาดมหึมา'),
          refs: { map: 'https://maps.google.com/?q=Meiji+Jingu', official: 'https://www.meijijingu.or.jp/en/' } },

        { type: 'feature', time: '11:30', meridiem: 'Late morning', kind: 'Wander', imageId: 'a-d9-harajuku',
          title: L('Harajuku & Omotesando', 'ฮาราจูกุ & โอโมเตซันโด'),
          place: L('Takeshita St → flagship avenue', 'ถนนทาเคชิตะ → ถนนแบรนด์เนม'),
          blurb: L('Crepes and chaos on Takeshita, then architect-designed flagships down leafy Omotesando.',
                   'เครปและความวุ่นวายบนทาเคชิตะ แล้วต่อด้วยแฟลกชิปดีไซน์โดยสถาปนิกบนโอโมเตซันโดร่มรื่น'),
          refs: { map: 'https://maps.google.com/?q=Omotesando+Tokyo' } },

        { type: 'feature', time: '15:00', meridiem: 'Afternoon', kind: 'View', imageId: 'a-d9-shibuya',
          title: L('Shibuya Crossing & Sky', 'ชิบุยะครอสซิ่ง & สกาย'),
          place: L('The world\u2019s busiest scramble', 'ทางม้าลายที่พลุกพล่านที่สุดในโลก'),
          blurb: L('Three thousand people every light change — watched from the open-air deck 230 m up.',
                   'สามพันคนทุกครั้งที่ไฟเปลี่ยน — มองจากดาดฟ้ากลางแจ้งสูง 230 เมตร'),
          refs: { map: 'https://maps.google.com/?q=Shibuya+Scramble+Crossing', booking: L('Shibuya Sky · ¥2,500', 'ชิบุยะสกาย · ¥2,500') } },

        { type: 'feature', time: '20:00', meridiem: 'Night', kind: 'Nightlife', imageId: 'a-d9-omoide',
          title: L('Omoide Yokocho', 'โอโมอิเดะโยโกโจ'),
          place: L('Memory Lane · Shinjuku', 'ตรอกแห่งความทรงจำ · ชินจูกุ'),
          blurb: L('Smoke, yakitori and tiny six-seat bars in a lantern-lit alley under the tracks.',
                   'ควัน ยากิโทริ และบาร์เล็กหกที่นั่งในตรอกโคมไฟใต้ทางรถไฟ'),
          refs: { map: 'https://maps.google.com/?q=Omoide+Yokocho', notes: L('Cash only in most stalls.', 'ส่วนใหญ่รับเงินสดเท่านั้น') } },
      ],
    },

    // ───────────────────────── DAY 10 · DEPARTURE ─────────────────────────
    {
      label: 'Day 10', labelTh: 'วันที่ 10', theme: 'urushi',
      date: L('Sunday · 23 November 2026', 'อาทิตย์ · 23 พฤศจิกายน 2026'),
      title: L('Tokyo & Home', 'โตเกียว & กลับบ้าน'),
      subtitle: L('Last Morning, Long Way Home', 'เช้าสุดท้าย ทางไกลกลับบ้าน'),
      note: L('A quiet last market and a final coffee, then the long, smooth glide out to Narita and the night flight home.',
              'ตลาดเงียบสงบครั้งสุดท้ายและกาแฟแก้วสุดท้าย ก่อนเดินทางราบรื่นสู่นาริตะและเที่ยวบินกลางคืนกลับบ้าน'),
      coverId: 'day10-cover',
      activities: [
        { type: 'step', time: '08:00', meridiem: 'Morning', kind: 'Check-out', icon: 'luggage',
          title: L('Check out, store bags', 'เช็คเอาท์ ฝากกระเป๋า'),
          place: L('Shinjuku tower hotel', 'โรงแรมตึกสูงชินจูกุ'),
          blurb: L('Settle up, leave the cases with the bell desk, keep a day pack for the morning.',
                   'ชำระค่าที่พัก ฝากกระเป๋าไว้กับพนักงาน พกเป้ใบเล็กไว้ตอนเช้า'),
          refs: { notes: L('Bags collected at 13:00 on the way to the airport.', 'มารับกระเป๋า 13:00 ระหว่างทางไปสนามบิน') } },

        { type: 'feature', time: '09:00', meridiem: 'Morning', kind: 'Market', imageId: 'a-d10-tsukiji',
          title: L('Tsukiji Outer Market', 'ตลาดนอกสึกิจิ'),
          place: L('Last bites by the old fish market', 'คำสุดท้ายข้างตลาดปลาเก่า'),
          blurb: L('Tamagoyaki on a stick, grilled scallops and a final fatty-tuna hand roll.',
                   'ทามาโกยากิเสียบไม้ หอยเชลล์ย่าง และเทมากิทูน่าติดมันคำสุดท้าย'),
          refs: { map: 'https://maps.google.com/?q=Tsukiji+Outer+Market', guide: 'https://www.japan-guide.com/e/e3021.html' } },

        { type: 'feature', time: '11:00', meridiem: 'Late morning', kind: 'Coffee', imageId: 'a-d10-coffee',
          title: L('Last Tokyo coffee', 'กาแฟโตเกียวแก้วสุดท้าย'),
          place: L('Kissaten, backstreet', 'คิสซาเต็น ตรอกหลัง'),
          blurb: L('A slow hand-drip in a wood-panelled old café — the trip in the rear-view.',
                   'ดริปมือช้าๆ ในคาเฟ่เก่าผนังไม้ — มองทริปผ่านกระจกหลัง'),
          refs: { notes: L('Order the thick-cut pizza toast if it\u2019s on.', 'สั่งพิซซ่าโทสต์ชิ้นหนาถ้ามี') } },

        { type: 'step', time: '13:30', meridiem: 'Afternoon', kind: 'Train', icon: 'train',
          title: L('Narita Express → NRT', 'นาริตะเอ็กซ์เพรส → NRT'),
          place: L('Shinjuku → Narita · 90 min', 'ชินจูกุ → นาริตะ · 90 นาที'),
          blurb: L('Bags reclaimed, the N\u2019EX runs straight to the airport from beneath the hotel.',
                   'รับกระเป๋าคืนแล้ว รถ N\u2019EX วิ่งตรงสู่สนามบินจากใต้โรงแรม'),
          refs: { official: 'https://www.jreast.co.jp/multi/en/nex/', booking: L('Reserved · ¥3,250', 'ที่นั่งจอง · ¥3,250') } },

        { type: 'step', time: '15:30', meridiem: 'Afternoon', kind: 'Departure', icon: 'passport',
          title: L('Check-in & emigration, NRT', 'เช็คอิน & ด่านขาออก, NRT'),
          place: L('Terminal 1 · Intl Departures', 'อาคาร 1 · ผู้โดยสารขาออกระหว่างประเทศ'),
          blurb: L('Bags away, last tax-free run, and a final bowl of ramen before the gate.',
                   'โหลดกระเป๋า ช้อปปลอดภาษีรอบสุดท้าย และราเมงชามสุดท้ายก่อนขึ้นเครื่อง'),
          refs: { reservation: { time: '17:55', code: 'TG-677', party: L('Seats 31A / 31C', 'ที่นั่ง 31A / 31C') } } },

        { type: 'step', time: '17:55', meridiem: 'Evening', kind: 'Flight', icon: 'plane',
          title: L('Depart Narita (NRT)', 'ออกเดินทางจากนาริตะ (NRT)'),
          place: L('NRT → Bangkok (BKK)', 'NRT → กรุงเทพฯ (BKK)'),
          blurb: L('Wheels up into the dusk — ten days across Japan, complete.',
                   'เครื่องทะยานสู่สนธยา — สิบวันทั่วญี่ปุ่น สมบูรณ์แล้ว'),
          refs: { official: 'https://www.thaiairways.com/', notes: L('Arrives BKK 22:35 the same evening.', 'ถึงกรุงเทพฯ 22:35 เย็นวันเดียวกัน') } },
      ],
    },
  ],
};

// Reference dock types — bilingual labels + icon names, in dock order.
const REF_TYPES = [
  { key: 'map', label: L('Directions', 'เส้นทาง'), icon: 'map', kind: 'link' },
  { key: 'official', label: L('Official site', 'เว็บไซต์ทางการ'), icon: 'external', kind: 'link' },
  { key: 'guide', label: L('Local guide', 'ไกด์ท้องถิ่น'), icon: 'book', kind: 'link' },
  { key: 'booking', label: L('Booking', 'การจอง'), icon: 'ticket', kind: 'text' },
  { key: 'reservation', label: L('Reservation', 'สำรองที่นั่ง'), icon: 'clock', kind: 'reservation' },
  { key: 'notes', label: L('Notes', 'บันทึก'), icon: 'note', kind: 'text' },
];

// Token dictionary for short repeated strings (English source → Thai).
const TR = {
  // feature kinds
  Coffee: 'กาแฟ', Temple: 'วัด', Dining: 'ร้านอาหาร', Wander: 'เดินเล่น',
  Garden: 'สวน', Grove: 'ป่าไผ่', Journey: 'การเดินทาง',
  Park: 'สวนสาธารณะ', Shrine: 'ศาลเจ้า', Castle: 'ปราสาท', Market: 'ตลาด',
  View: 'จุดชมวิว', Lake: 'ทะเลสาบ', Ferry: 'เรือ', Nightlife: 'ยามค่ำคืน',
  // step kinds
  Flight: 'เที่ยวบิน', Immigration: 'ตรวจคนเข้าเมือง', Ticket: 'ซื้อตั๋ว', Train: 'รถไฟ',
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
  island: L('Honshu', 'ฮอนชู'),
  islandNative: '本州',
  country: L('Japan', 'ญี่ปุ่น'),
  native: '日本',
  tagline: L('From the old capital to the neon coast — ten days, five regions, one autumn.',
             'จากเมืองหลวงเก่าสู่ชายฝั่งนีออน — สิบวัน ห้าภูมิภาค หนึ่งฤดูใบไม้ร่วง'),
  facts: [
    { k: L('Duration', 'ระยะเวลา'), v: L('10 days · 9 nights', '10 วัน · 9 คืน') },
    { k: L('Season', 'ฤดูกาล'), v: L('Late autumn · momiji', 'ปลายใบไม้ร่วง · โมมิจิ') },
    { k: L('Currency', 'สกุลเงิน'), v: L('Japanese Yen · ¥', 'เยนญี่ปุ่น · ¥') },
    { k: L('Language', 'ภาษา'), v: L('Japanese · 日本語', 'ญี่ปุ่น · 日本語') },
  ],
  // route stops drive the animated map on the Overview screen; `day` = first day index
  route: [
    { city: L('Kyoto', 'เกียวโต'), days: L('Days 1–3', 'วันที่ 1–3'), day: 0, theme: 'kurogane', imageId: 'r-kyoto', mx: 25, my: 28 },
    { city: L('Nara', 'นารา'), days: L('Day 4', 'วันที่ 4'), day: 3, theme: 'ai', imageId: 'r-nara', mx: 32, my: 50 },
    { city: L('Osaka', 'โอซากา'), days: L('Day 5', 'วันที่ 5'), day: 4, theme: 'kohaku', imageId: 'r-osaka', mx: 16, my: 58 },
    { city: L('Hakone', 'ฮาโกเน่'), days: L('Day 6', 'วันที่ 6'), day: 5, theme: 'hisui', imageId: 'r-hakone', mx: 65, my: 48 },
    { city: L('Mt Fuji', 'ฟูจิ'), days: L('Day 7', 'วันที่ 7'), day: 6, theme: 'ai', imageId: 'r-fuji', mx: 57, my: 64 },
    { city: L('Tokyo', 'โตเกียว'), days: L('Days 8–10', 'วันที่ 8–10'), day: 7, theme: 'botan', imageId: 'r-tokyo', mx: 84, my: 30 },
  ],
};

// ── Travel party ────────────────────────────────────────────────────────
const TRAVELERS = {
  title: L('The Party', 'ผู้ร่วมเดินทาง'),
  subtitle: L('Four travellers, one itinerary', 'สี่ผู้เดินทาง หนึ่งแผนการเดินทาง'),
  people: [
    { name: L('Naya P.', 'นยา พ.'), role: L('Trip lead · planner', 'หัวหน้าทริป · ผู้วางแผน'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Seat 32A · room lead', 'ที่นั่ง 32A · หัวหน้าห้องพัก'), imageId: 'p-naya' },
    { name: L('Tee S.', 'ตี๋ ส.'), role: L('Photographer', 'ช่างภาพ'),
      home: L('Chiang Mai', 'เชียงใหม่'), detail: L('Seat 32C · early riser', 'ที่นั่ง 32C · ตื่นเช้า'), imageId: 'p-tee' },
    { name: L('Mali R.', 'มะลิ ร.'), role: L('Food & reservations', 'อาหาร & การจอง'),
      home: L('Bangkok', 'กรุงเทพฯ'), detail: L('Seat 30A · vegetarian', 'ที่นั่ง 30A · มังสวิรัติ'), imageId: 'p-mali' },
    { name: L('Krit W.', 'กฤต ว.'), role: L('Logistics & transit', 'โลจิสติกส์ & การเดินทาง'),
      home: L('Phuket', 'ภูเก็ต'), detail: L('Seat 30C · JR Pass holder', 'ที่นั่ง 30C · ถือ JR Pass'), imageId: 'p-krit' },
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
    { label: L('Travel insurance · 24h', 'ประกันเดินทาง · 24 ชม.'), value: '+66 2 257 8000', icon: 'book' },
  ],
};

// ── Budget (estimated, per person, Thai Baht) ───────────────────────────
const BUDGET = {
  title: L('Budget', 'งบประมาณ'),
  subtitle: L('Estimated · per person · Thai Baht', 'ประมาณการ · ต่อคน · เงินบาท'),
  currency: '฿',
  items: [
    { label: L('Flights — round trip', 'ตั๋วเครื่องบิน — ไป-กลับ'), amount: 30000 },
    { label: L('Accommodation — 9 nights', 'ที่พัก — 9 คืน'), amount: 42000 },
    { label: L('Rail & transit', 'รถไฟ & การเดินทาง'), amount: 14000 },
    { label: L('Food & dining', 'อาหาร & ร้านอาหาร'), amount: 25000 },
    { label: L('Attractions & activities', 'สถานที่ & กิจกรรม'), amount: 6000 },
    { label: L('Shopping & misc', 'ช้อปปิ้ง & เบ็ดเตล็ด'), amount: 13000 },
  ],
  total: 130000,
  note: L('Excludes personal shopping & souvenirs beyond the estimate.', 'ไม่รวมการช้อปปิ้งส่วนตัวและของฝากที่เกินประมาณการ'),
};

// ── Convenience stores (konbini) nearest each stay ──────────────────────
const KONBINI = {
  title: L('Konbini Near Each Stay', 'ร้านสะดวกซื้อใกล้ที่พัก'),
  subtitle: L('24-hour convenience stores', 'ร้านสะดวกซื้อ 24 ชั่วโมง'),
  note: L('Japanese konbini stay open round the clock for cash withdrawal, SIM top-ups, tickets and hot food — tap a store to open it in Maps.',
          'ร้านสะดวกซื้อญี่ปุ่นเปิด 24 ชม. กดเงินสด เติมซิม ซื้อตั๋ว และอาหารร้อนได้ครบ — แตะที่ร้านเพื่อเปิดในแผนที่'),
  areas: [
    { days: L('Day 01–02', 'วันที่ 01–02'), area: L('Gion · Higashiyama', 'กิออน · ฮิงาชิยามะ'), stores: [
      { brand: '7-Eleven', detail: L('Higashiyama-dori · ~150 m', 'ถนนฮิงาชิยามะ · ~150 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Gion+Higashiyama+Kyoto' },
      { brand: 'Lawson', detail: L('Shijo-dori · ~300 m', 'ถนนชิโจ · ~300 ม.'), map: 'https://maps.google.com/?q=Lawson+Gion+Shijo+Kyoto' },
      { brand: 'FamilyMart', detail: L('Gion-Shijo Stn · ~250 m', 'สถานีกิอง-ชิโจ · ~250 ม.'), map: 'https://maps.google.com/?q=FamilyMart+Gion-Shijo+Station+Kyoto' },
    ] },
    { days: L('Day 03', 'วันที่ 03'), area: L('Nara · Noborioji', 'นารา · โนโบริโอจิ'), stores: [
      { brand: 'FamilyMart', detail: L('Noborioji-dori · ~200 m', 'ถนนโนโบริโอจิ · ~200 ม.'), map: 'https://maps.google.com/?q=FamilyMart+Noborioji+Nara' },
      { brand: '7-Eleven', detail: L('Sanjo-dori · ~400 m', 'ถนนซันโจ · ~400 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Sanjo+Nara' },
      { brand: 'Lawson', detail: L('Kintetsu-Nara Stn · ~500 m', 'สถานีคินเท็ตสึนารา · ~500 ม.'), map: 'https://maps.google.com/?q=Lawson+Kintetsu-Nara+Station' },
    ] },
    { days: L('Day 04–05', 'วันที่ 04–05'), area: L('Namba · Dotonbori', 'นัมบะ · โดทงโบริ'), stores: [
      { brand: 'Lawson', detail: L('Dotonbori · ~80 m', 'โดทงโบริ · ~80 ม.'), map: 'https://maps.google.com/?q=Lawson+Dotonbori+Osaka' },
      { brand: '7-Eleven', detail: L('Namba Stn · ~200 m', 'สถานีนัมบะ · ~200 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Namba+Station+Osaka' },
      { brand: 'FamilyMart', detail: L('Sennichimae · ~150 m', 'เซนนิจิมาเอะ · ~150 ม.'), map: 'https://maps.google.com/?q=FamilyMart+Sennichimae+Osaka' },
    ] },
    { days: L('Day 06', 'วันที่ 06'), area: L('Hakone-Yumoto', 'ฮาโกเน่ยูโมโตะ'), stores: [
      { brand: '7-Eleven', detail: L('Hakone-Yumoto Stn · ~300 m', 'สถานีฮาโกเน่ยูโมโตะ · ~300 ม.'), map: 'https://maps.google.com/?q=7-Eleven+Hakone-Yumoto+Station' },
      { brand: 'Lawson', detail: L('Yumoto-chaya · ~600 m', 'ยูโมโตะจายะ · ~600 ม.'), map: 'https://maps.google.com/?q=Lawson+Hakone-Yumoto' },
      { brand: 'NewDays', detail: L('Inside Yumoto Stn', 'ในสถานียูโมโตะ'), map: 'https://maps.google.com/?q=NewDays+Hakone-Yumoto+Station' },
    ] },
    { days: L('Day 07–10', 'วันที่ 07–10'), area: L('Nishi-Shinjuku', 'นิชิชินจูกุ'), stores: [
      { brand: '7-Eleven', detail: L('Nishi-Shinjuku · in-building', 'นิชิชินจูกุ · ในตัวอาคาร'), map: 'https://maps.google.com/?q=7-Eleven+Nishi-Shinjuku+Tokyo' },
      { brand: 'Lawson', detail: L('Shinjuku Stn West · ~200 m', 'สถานีชินจูกุฝั่งตะวันตก · ~200 ม.'), map: 'https://maps.google.com/?q=Lawson+Shinjuku+West+Tokyo' },
      { brand: 'FamilyMart', detail: L('Tocho-mae · ~250 m', 'โทโจมาเอะ · ~250 ม.'), map: 'https://maps.google.com/?q=FamilyMart+Tochomae+Shinjuku+Tokyo' },
    ] },
  ],
};

const CREDIT = 'Designed by 0xTnk';

// ── Per-day weather (indicative mid-November forecast) ───────────────
const WEATHER = {
  note: L('Typical mid-November conditions · check the forecast before you travel',
          'สภาพอากาศโดยทั่วไปกลางเดือน พ.ย. · เช็คพยากรณ์ก่อนเดินทาง'),
  days: {
    1:  { icon: 'cloudSun', hi: 17, lo: 8, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    2:  { icon: 'sun',      hi: 18, lo: 8, label: L('Clear autumn day', 'แจ่มใส อากาศใบไม้ร่วง') },
    3:  { icon: 'cloudSun', hi: 16, lo: 7, label: L('Crisp with light cloud', 'เย็นสบาย มีเมฆบาง') },
    4:  { icon: 'sun',      hi: 17, lo: 7, label: L('Clear and cool', 'แจ่มใส อากาศเย็น') },
    5:  { icon: 'cloudSun', hi: 18, lo: 9, label: L('Mild, partly cloudy', 'อากาศดี มีเมฆบางส่วน') },
    6:  { icon: 'cloud',    hi: 13, lo: 5, label: L('Cool, overcast hills', 'เย็น ฟ้าครึ้มบนภูเขา') },
    7:  { icon: 'sun',      hi: 10, lo: 2, label: L('Cold, clear skies', 'หนาว ฟ้าใส') },
    8:  { icon: 'sun',      hi: 17, lo: 9, label: L('Bright and mild', 'แดดดี อากาศสบาย') },
    9:  { icon: 'cloudSun', hi: 17, lo: 9, label: L('Mild, light cloud', 'อากาศดี มีเมฆบาง') },
    10: { icon: 'cloud',    hi: 16, lo: 9, label: L('Overcast, mild', 'ฟ้าครึ้ม อากาศสบาย') },
  },
};

// ── Recommended dishes per dining venue (keyed by activity imageId) ─────
const MENUS = {
  'a-d1-kikunoi': { items: [
    { name: L('Matsutake dobin-mushi', 'โดบินมุชิเห็ดมัตสึทาเกะ'), note: L('Pine mushroom steeped in a clear teapot broth — autumn in a cup.', 'เห็ดมัตสึทาเกะในน้ำซุปใสเสิร์ฟในกาน้ำ — ฤดูใบไม้ร่วงในถ้วยเดียว'), signature: true },
    { name: L('Hamo & matsutake hot pot', 'หม้อไฟปลาฮาโมกับเห็ดมัตสึทาเกะ'), note: L('Pike conger and mushroom simmered tableside.', 'ปลาฮาโมและเห็ดต้มสดข้างโต๊ะ') },
    { name: L('First snow crab', 'ปูหิมะตัวแรกของฤดู'), note: L('The season\u2019s opening catch, lightly dressed.', 'ปูตัวแรกของฤดูปรุงรสบางเบา') },
    { name: L('Chestnut rice', 'ข้าวหุงเกาลัด'), note: L('Kuri-gohan to close the course.', 'คุริโกฮังปิดท้ายคอร์ส') },
  ] },
  'a-d1-gion': { items: [
    { name: L('Sashimi moriawase', 'ปลาดิบรวมโมริอาวาเสะ'), note: L('Daily catch on ice.', 'ปลาสดประจำวัน') },
    { name: L('Saikyo miso-grilled fish', 'ปลาย่างมิโซะไซเกียว'), note: L('Sweet-savoury, grilled over binchotan.', 'หวานเค็มกลมกล่อม ย่างถ่านบินโชตัน'), signature: true },
    { name: L('Assorted tempura', 'เทมปุระรวม'), note: L('Seasonal vegetables and prawn.', 'ผักตามฤดูและกุ้ง') },
    { name: L('Dashimaki tamago', 'ไข่ม้วนดาชิ'), note: L('Rolled omelette in warm dashi.', 'ไข่ม้วนในน้ำดาชิอุ่น') },
  ] },
  'a-d2-shoraian': { items: [
    { name: L('Yudofu hot pot', 'หม้อไฟเต้าหู้ยูโดฟุ'), note: L('Silken tofu poached at the table by the river.', 'เต้าหู้นุ่มต้มข้างโต๊ะริมแม่น้ำ'), signature: true },
    { name: L('Yuba sashimi', 'ยูบะซาชิมิ'), note: L('Fresh tofu skin with wasabi.', 'ฟิล์มเต้าหู้สดเสิร์ฟกับวาซาบิ') },
    { name: L('Ganmodoki', 'กังโมโดกิ'), note: L('Tofu-and-vegetable fritter.', 'เต้าหู้ทอดผสมผัก') },
    { name: L('Goma-dofu', 'โกมะโดฟุ'), note: L('Sesame tofu, silky and cold.', 'เต้าหู้งา เนื้อเนียนเย็น') },
  ] },
  'a-d2-ryokan': { items: [
    { name: L('Seasonal sakizuke', 'ของเรียกน้ำย่อยตามฤดู'), note: L('The chef\u2019s opening bite.', 'จานเปิดจากเชฟ') },
    { name: L('Wagyu shabu-shabu', 'ชาบูเนื้อวากิว'), note: L('Marbled beef swished in kombu broth.', 'เนื้อลายหินอ่อนลวกในน้ำซุปคอมบุ'), signature: true },
    { name: L('Grilled river fish', 'ปลาน้ำจืดย่าง'), note: L('Salt-grilled ayu on the bone.', 'ปลาอายุย่างเกลือทั้งตัว') },
    { name: L('Local vegetable nimono', 'ผักท้องถิ่นต้มนิโมโนะ'), note: L('Simmered until just tender.', 'ต้มจนนุ่มกำลังดี') },
  ] },
  'a-d3-toriiwaro': { items: [
    { name: L('Kamo nasu dengaku', 'มะเขือเกียวโตราดมิโซะ'), note: L('Kyoto eggplant glazed with sweet miso.', 'มะเขือเกียวโตราดมิโซะหวาน'), signature: true },
    { name: L('Saba-zushi', 'ซูชิปลาซาบะอัด'), note: L('Pressed mackerel sushi, a Kyoto staple.', 'ซูชิปลาแมคเคอเรลอัด อาหารคู่เกียวโต') },
    { name: L('Obanzai assortment', 'โอบันไซรวม'), note: L('Kyoto home-style small dishes.', 'กับข้าวสไตล์บ้านเกียวโต') },
    { name: L('Yuba donburi', 'ข้าวหน้ายูบะ'), note: L('Tofu skin over rice in dashi.', 'ฟิล์มเต้าหู้ราดข้าวในน้ำดาชิ') },
  ] },
  'a-d4-lunch': { items: [
    { name: L('Saba kakinoha-zushi', 'คากิโนฮะซูชิปลาซาบะ'), note: L('Mackerel sushi wrapped in persimmon leaf.', 'ซูชิปลาซาบะห่อใบพลับ'), signature: true },
    { name: L('Salmon kakinoha-zushi', 'คากิโนฮะซูชิแซลมอน'), note: L('The milder counterpart.', 'รสนุ่มกว่าแบบปลาซาบะ') },
    { name: L('Miwa somen', 'เส้นโซเม็งมิวะ'), note: L('Nara\u2019s ultra-thin wheat noodles.', 'เส้นสาลีบางพิเศษของนารา') },
    { name: L('Cha-gayu', 'ข้าวต้มชาฉะงายุ'), note: L('Tea rice porridge, a local breakfast.', 'ข้าวต้มชา อาหารเช้าท้องถิ่น') },
  ] },
  'a-d4-dotonbori': { items: [
    { name: L('Takoyaki', 'ทาโกยากิ'), note: L('Octopus balls, crisp outside, molten within.', 'ลูกชิ้นปลาหมึกนอกกรอบในไหล'), signature: true },
    { name: L('Kushikatsu', 'คุชิคัตสึ'), note: L('Deep-fried skewers — no double dipping.', 'ของทอดเสียบไม้ — ห้ามจุ่มซอสซ้ำ') },
    { name: L('Okonomiyaki', 'โอโคโนมิยากิ'), note: L('Osaka savoury pancake.', 'แพนเค้กคาวสไตล์โอซากา') },
    { name: L('Ikayaki', 'อิคายากิ'), note: L('Grilled squid off the griddle.', 'ปลาหมึกย่างจากกระทะร้อน') },
  ] },
  'a-d6-kaiseki': { items: [
    { name: L('Hot-spring tofu', 'เต้าหู้น้ำพุร้อน'), note: L('Made with onsen mineral water.', 'ทำจากน้ำแร่ออนเซ็น') },
    { name: L('Ashitaka beef sukiyaki', 'สุกี้ยากี้เนื้ออาชิตากะ'), note: L('Local highland wagyu, sweet soy.', 'วากิวที่ราบสูงท้องถิ่น ซีอิ๊วหวาน'), signature: true },
    { name: L('Salt-grilled ayu', 'ปลาอายุย่างเกลือ'), note: L('Sweetfish from mountain streams.', 'ปลาน้ำจืดจากลำธารบนภูเขา') },
    { name: L('Mountain-vegetable soba', 'โซบะผักภูเขา'), note: L('Buckwheat noodles with sansai.', 'เส้นโซบะกับผักป่าซันไซ') },
  ] },
  'a-d8-ginza': { items: [
    { name: L('Otoro', 'โอโทโร'), note: L('Fattiest cut of tuna, melts on the tongue.', 'ทูน่าส่วนมันที่สุด ละลายในปาก'), signature: true },
    { name: L('Kohada', 'โคฮาดะ'), note: L('Cured gizzard shad — the Edomae benchmark.', 'ปลาโคฮาดะหมัก มาตรฐานเอโดมาเอะ') },
    { name: L('Uni gunkan', 'อูนิกุงคัง'), note: L('Sea urchin wrapped in nori.', 'ไข่หอยเม่นห่อสาหร่าย') },
    { name: L('Simmered anago', 'อานาโกะตุ๋น'), note: L('Sea eel brushed with sweet glaze.', 'ปลาไหลทะเลทาซอสหวาน') },
  ] },
  'a-d1-arabica': { items: [
    { name: L('Caffè Latte', 'คาเฟ่ลาเต้'), note: L('House Arabica blend, riverside.', 'เมล็ดอาราบิก้าสูตรร้าน ริมแม่น้ำ'), signature: true },
    { name: L('Spanish Latte', 'สแปนิชลาเต้'), note: L('Sweetened with condensed milk.', 'หวานด้วยนมข้น') },
    { name: L('Single-origin pour-over', 'ดริปซิงเกิลออริจิน'), note: L('Rotating beans, hand-brewed.', 'เมล็ดหมุนเวียน ดริปมือ') },
  ] },
  'a-d10-coffee': { items: [
    { name: L('Hand-drip kōhī', 'กาแฟดริปมือ'), note: L('Slow pour-over, kissaten style.', 'ดริปช้าๆ สไตล์คิสซาเต็น'), signature: true },
    { name: L('Cream soda', 'ครีมโซดา'), note: L('Retro melon float with a cherry.', 'เมลอนโซดาวินเทจหยอดเชอร์รี') },
    { name: L('Napolitan', 'สปาเกตตีนาโปริตัน'), note: L('Ketchup spaghetti — a Showa classic.', 'สปาเกตตีซอสมะเขือเทศ คลาสสิกยุคโชวะ') },
    { name: L('Purin', 'พุดดิ้งพูริน'), note: L('Firm custard pudding.', 'คัสตาร์ดพุดดิ้งเนื้อแน่น') },
  ] },
};

// ── Pre-trip essentials (Overview quick row) ────────────────────────────
const ESSENTIALS = {
  currency: {
    label: L('Exchange rate', 'อัตราแลกเปลี่ยน'),
    base: '¥100',
    value: '฿22.6',
    note: L('Indicative · tap for live rate', 'โดยประมาณ · แตะดูเรตสด'),
    href: 'https://www.google.com/search?q=100+JPY+to+THB',
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
      L('Flight & hotel confirmations', 'ใบยืนยันเที่ยวบินและโรงแรม'),
      L('Travel insurance card', 'บัตรประกันการเดินทาง'),
    ] },
    { label: L('Money & Connectivity', 'เงินและการเชื่อมต่อ'), items: [
      L('Some yen in cash', 'เงินเยนสดติดตัว'),
      L('Cards enabled for overseas', 'เปิดใช้บัตรในต่างประเทศ'),
      L('eSIM or pocket Wi-Fi', 'eSIM หรือ pocket Wi-Fi'),
      L('IC card · Suica / ICOCA', 'บัตร IC · Suica / ICOCA'),
    ] },
    { label: L('Autumn Layers', 'เสื้อผ้าหน้าหนาว'), items: [
      L('Warm jacket · 10–18°C', 'เสื้อแจ็คเก็ตกันหนาว · 10–18°C'),
      L('Comfortable walking shoes', 'รองเท้าเดินสบาย'),
      L('Compact umbrella', 'ร่มพับ'),
      L('Power adapter · Type A', 'ปลั๊กแปลง · Type A'),
    ] },
  ],
};

// ── Useful Japanese phrases (Overview) ──────────────────────────────────
const PHRASES = {
  title: L('Useful Phrases', 'วลีที่ใช้บ่อย'),
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

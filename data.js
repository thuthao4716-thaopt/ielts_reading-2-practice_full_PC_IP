const ACTIVITIES = [
  {
    id: 1,
    part: "01. DẠNG BÀI SENTENCE COMPLETION",
    title: "Activity 1: AMAZING HOMES",
    instruction: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    passage: [
      { en: "Most people live in a house or a flat. When they go on holiday they stay in a hotel or a guest house. But some places where you can live or stay are a bit different.", vi: "Hầu hết mọi người sống trong một ngôi nhà hoặc căn hộ. Khi đi nghỉ, họ thường ở khách sạn hoặc nhà nghỉ. Nhưng một số nơi mà bạn có thể sinh sống hoặc lưu trú lại có phần khác biệt." },
      { en: "A One unusual place to live is a houseboat. Amsterdam in Holland is famous for its houseboats - there are about 2,500 of them. They have everything that normal houses have: a living room, bedroom, kitchen, bathroom and even sometimes a terrace on the roof. They are cheaper than houses and people who live on houseboats enjoy being close to nature. Some houseboats can be moved to other parts of the river, while others are permanently in one place.", vi: "A Một nơi ở khác thường là nhà thuyền. Amsterdam ở Hà Lan nổi tiếng với những ngôi nhà thuyền – có khoảng 2.500 ngôi nhà như vậy. Chúng có mọi thứ mà những ngôi nhà bình thường có: phòng khách, phòng ngủ, nhà bếp, phòng tắm và đôi khi thậm chí còn có cả sân thượng trên mái. Nhà thuyền rẻ hơn nhà ở thông thường và những người sống trên đó thích cảm giác được gần gũi với thiên nhiên. Một số nhà thuyền có thể được di chuyển đến những khu vực khác của dòng sông, trong khi những ngôi nhà khác được neo cố định tại một chỗ." },
      { en: "B In Tokyo, Japan, there is a see-through house. It is like a normal Japanese house but all the walls are made of glass. There is plenty of daylight but no privacy. Architect Sou Fujimoto designed it for a couple to make their home. He based his idea on early man living in trees. It wouldn't suit everyone but the couple who live there love the feeling of being surrounded by the natural world.", vi: "B Ở Tokyo, Nhật Bản, có một ngôi nhà trong suốt. Nó giống như một ngôi nhà bình thường của Nhật Bản, nhưng tất cả các bức tường đều được làm bằng kính. Ngôi nhà có rất nhiều ánh sáng tự nhiên nhưng lại không có sự riêng tư. Kiến trúc sư Sou Fujimoto đã thiết kế ngôi nhà này cho một cặp vợ chồng. Ông lấy cảm hứng từ ý tưởng về những người thời kỳ đầu sống trên cây. Kiểu nhà này không phù hợp với tất cả mọi người, nhưng cặp vợ chồng sống ở đó rất thích cảm giác được bao quanh bởi thế giới tự nhiên." },
      { en: "C All around the world, people live in homes made from shipping containers. Some use only one container, while others are made from several containers joined together. One house in Chile was built from 12 containers. They are cheap to buy and eco-friendly. They can also be placed in the garden or drive as guest rooms, studies or utility rooms.", vi: "C Trên khắp thế giới, mọi người sống trong những ngôi nhà được làm từ container vận chuyển hàng hóa. Một số ngôi nhà chỉ sử dụng một container, trong khi những ngôi nhà khác được làm từ nhiều container ghép lại với nhau. Một ngôi nhà ở Chile được xây dựng từ 12 container. Những container này có giá mua rẻ và thân thiện với môi trường. Chúng cũng có thể được đặt trong vườn hoặc trên lối xe chạy vào nhà để làm phòng cho khách, phòng làm việc hoặc phòng tiện ích." },
      { en: "D In Germany, you can stay in a one-metre-square house, the smallest house in the world, called the House NA. Van Bo Le-Mentzel, a refugee from Laos, built it to draw attention to the world housing shortage. It is a wooden structure on wheels and weighs 40 kg. It has a locking door and window. You can turn it onto its side when you want to lie down. Franz from Munich spent the night in one recently 'just to see what it was like'. He found it a bit uncomfortable!", vi: "D Ở Đức, bạn có thể ở trong một ngôi nhà rộng một mét vuông, ngôi nhà nhỏ nhất thế giới, được gọi là House NA. Van Bo Le-Mentzel, một người tị nạn đến từ Lào, đã xây dựng ngôi nhà này nhằm thu hút sự chú ý đến tình trạng thiếu nhà ở trên thế giới. Đây là một công trình bằng gỗ có bánh xe và nặng 40 kg. Nó có một cánh cửa có khóa và một cửa sổ. Bạn có thể xoay nó nằm nghiêng khi muốn nằm xuống. Franz đến từ Munich gần đây đã qua đêm trong một ngôi nhà như vậy “chỉ để xem cảm giác sẽ như thế nào”. Anh thấy nó hơi không thoải mái!" },
      { en: "E For an unusual holiday you can stay in an igloo, a house made of ice. These can be found in several countries including Sweden, Norway and Finland. They are built new every winter. Jenny and Callum, visitors from Australia, told us, 'We slept in an igloo last night. It's so cold there - minus 5 degrees centigrade. We used reindeer skins to keep warm.'", vi: "E Để có một kỳ nghỉ khác thường, bạn có thể ở trong lều tuyết, một ngôi nhà làm bằng băng. Những ngôi nhà như vậy có thể được tìm thấy ở một số quốc gia, bao gồm Thụy Điển, Na Uy và Phần Lan. Chúng được xây mới vào mỗi mùa đông. Jenny và Callum, hai du khách đến từ Úc, kể với chúng tôi: “Đêm qua chúng tôi đã ngủ trong một căn lều tuyết. Ở đó lạnh đến mức nhiệt độ xuống tới âm 5 độ C. Chúng tôi đã dùng da tuần lộc để giữ ấm.”" },
      { en: "F Another couple, Shaun and Rachel from Manchester, enjoyed a recent holiday in a treehouse in Sussex, England. They said, 'It was right up in the trees and had everything we needed, even wifi! It had a small kitchen and we did our own cooking. It was the perfect place to get away from our busy lives.'", vi: "F Một cặp đôi khác, Shaun và Rachel đến từ Manchester, đã tận hưởng một kỳ nghỉ gần đây trong một ngôi nhà trên cây ở Sussex, Anh. Họ cho biết: “Ngôi nhà nằm ngay trên cao giữa những tán cây và có mọi thứ chúng tôi cần, thậm chí có cả Wi-Fi. Nó có một căn bếp nhỏ và chúng tôi tự nấu ăn. Đây là nơi hoàn hảo để rời xa cuộc sống bận rộn của mình.”" }
    ],
    questions: [
      { q: "1. The two people who live in the transparent house love it, but it wouldn't _______", ans: ["suit everyone"], loc: "Đoạn B: 'It wouldn't suit everyone but the couple who live there love...'", exp: "Đoạn B chỉ rõ ngôi nhà kính không phù hợp với tất cả mọi người ('suit everyone')." },
      { q: "2. The designer of the smallest house hopes to _______ to the lack of houses all over the world.", ans: ["draw attention"], loc: "Đoạn D: '...built it to draw attention to the world housing shortage.'", exp: "'draw attention' có nghĩa là thu hút sự chú ý đến sự thiếu hụt nhà ở." },
      { q: "3. People who stay in igloos sometimes protect themselves from the cold by making use of _______", ans: ["reindeer skins"], loc: "Đoạn E: 'We used reindeer skins to keep warm.'", exp: "Họ sử dụng da tuần lộc ('reindeer skins') để giữ ấm." },
      { q: "4. People who have _______ would find a holiday in a treehouse ideal.", ans: ["busy lives"], loc: "Đoạn F: 'It was the perfect place to get away from our busy lives.'", exp: "Ngôi nhà trên cây lý tưởng cho người có cuộc sống bận rộn ('busy lives')." }
    ],
    paraphraseTable: [
      { qWord: "transparent house", pWord: "see-through house", note: "Ngôi nhà kính trong suốt" },
      { qWord: "two people", pWord: "the couple", note: "Hai người / cặp đôi" },
      { qWord: "the designer", pWord: "Architect Sou Fujimoto / built it", note: "Nhà thiết kế, kiến trúc sư" },
      { qWord: "lack of houses", pWord: "housing shortage", note: "Thiếu nhà ở" },
      { qWord: "protect themselves from the cold", pWord: "keep warm", note: "Bảo vệ khỏi cái lạnh / giữ ấm" },
      { qWord: "making use of", pWord: "used", note: "Tận dụng, sử dụng" },
      { qWord: "ideal holiday", pWord: "perfect place to get away", note: "Kỳ nghỉ lý tưởng" }
    ],
    vocab: [
      { word: "transparent", type: "Tính từ", ipa: "/trænˈsperənt/", def: "trong suốt", ex: "The two people who live in the transparent house love it, but it wouldn't suit everyone.", viEx: "Hai người sống trong ngôi nhà trong suốt rất yêu thích nó, nhưng nó sẽ không phù hợp với tất cả mọi người." },
      { word: "designer", type: "Danh từ", ipa: "/dɪˈzaɪnər/", def: "nhà thiết kế", ex: "The designer created a beautiful house.", viEx: "Nhà thiết kế đã tạo ra một ngôi nhà đẹp." },
      { word: "hopes to", type: "Cụm động từ", ipa: "/hoʊps tə/", def: "hy vọng sẽ", ex: "She hopes to travel around Europe next year.", viEx: "Cô ấy hy vọng sẽ đi du lịch khắp châu Âu vào năm sau." },
      { word: "lack of houses", type: "Cụm danh từ", ipa: "/læk əv ˈhaʊzɪz/", def: "tình trạng thiếu nhà ở", ex: "Many cities have a lack of houses.", viEx: "Nhiều thành phố đang thiếu nhà ở." },
      { word: "all over the world", type: "Cụm trạng từ", ipa: "/ɔːl ˈoʊvər ðə wɝːld/", def: "trên khắp thế giới", ex: "People all over the world enjoy music.", viEx: "Mọi người trên khắp thế giới đều yêu thích âm nhạc." },
      { word: "protect themselves", type: "Cụm động từ", ipa: "/prəˈtekt ðəmˈselvz/", def: "tự bảo vệ bản thân", ex: "People wear warm clothes to protect themselves from the cold.", viEx: "Mọi người mặc quần áo ấm để bảo vệ bản thân khỏi cái lạnh." },
      { word: "making use of", type: "Cụm động từ", ipa: "/ˈmeɪkɪŋ juːs əv/", def: "tận dụng; sử dụng", ex: "We are making use of every small space.", viEx: "Chúng tôi đang tận dụng mọi không gian nhỏ." },
      { word: "treehouse", type: "Danh từ", ipa: "/ˈtriːhaʊs/", def: "nhà trên cây", ex: "Another couple enjoyed a recent holiday in a treehouse in Sussex, England.", viEx: "Một cặp đôi đã tận hưởng kỳ nghỉ gần đây trong một ngôi nhà trên cây ở Sussex, Anh." },
      { word: "ideal", type: "Tính từ", ipa: "/aɪˈdiːəl/", def: "lý tưởng", ex: "This hotel is ideal for families.", viEx: "Khách sạn này rất lý tưởng cho các gia đình." },
      { word: "see-through", type: "Tính từ", ipa: "/ˈsiː θruː/", def: "trong suốt; nhìn xuyên qua được", ex: "In Tokyo, Japan, there is a see-through house.", viEx: "Ở Tokyo, Nhật Bản có một ngôi nhà trong suốt." },
      { word: "made of glass", type: "Cụm tính từ", ipa: "/meɪd əv ɡlæs/", def: "được làm bằng kính", ex: "All the walls are made of glass.", viEx: "Tất cả các bức tường đều được làm bằng kính." },
      { word: "couple", type: "Danh từ", ipa: "/ˈkʌpəl/", def: "cặp đôi", ex: "Architect Sou Fujimoto designed it for a couple to make their home.", viEx: "Kiến trúc sư Sou Fujimoto đã thiết kế nó cho một cặp đôi làm nơi sinh sống." },
      { word: "make their home", type: "Cụm động từ", ipa: "/meɪk ðer hoʊm/", def: "biến thành nơi sinh sống; làm tổ ấm", ex: "Architect Sou Fujimoto designed it for a couple to make their home.", viEx: "Kiến trúc sư Sou Fujimoto đã thiết kế nó để một cặp đôi biến nơi đó thành ngôi nhà của mình." },
      { word: "suit everyone", type: "Cụm động từ", ipa: "/suːt ˈevriwʌn/", def: "phù hợp với tất cả mọi người", ex: "It wouldn't suit everyone.", viEx: "Nó sẽ không phù hợp với tất cả mọi người." },
      { word: "stay", type: "Động từ", ipa: "/steɪ/", def: "ở; lưu trú", ex: "In Germany, you can stay in a one-metre-square house.", viEx: "Ở Đức, bạn có thể ở trong một ngôi nhà rộng một mét vuông." },
      { word: "one-metre-square house", type: "Cụm danh từ", ipa: "/wʌn ˈmiːtər skwer haʊs/", def: "ngôi nhà rộng một mét vuông", ex: "In Germany, you can stay in a one-metre-square house.", viEx: "Ở Đức, bạn có thể ở trong một ngôi nhà rộng một mét vuông." },
      { word: "refugee", type: "Danh từ", ipa: "/ˌrefjuˈdʒiː/", def: "người tị nạn", ex: "Van Bo Le-Mentzel, a refugee from Laos, built it.", viEx: "Van Bo Le-Mentzel, một người tị nạn đến từ Lào, đã xây ngôi nhà này." },
      { word: "draw attention", type: "Cụm động từ", ipa: "/drɔː əˈtenʃən/", def: "thu hút sự chú ý", ex: "Van Bo Le-Mentzel built it to draw attention to the world housing shortage.", viEx: "Van Bo Le-Mentzel đã xây nó để thu hút sự chú ý đến tình trạng thiếu nhà ở trên thế giới." },
      { word: "housing shortage", type: "Cụm danh từ", ipa: "/ˈhaʊzɪŋ ˈʃɔːrtɪdʒ/", def: "tình trạng thiếu nhà ở", ex: "Van Bo Le-Mentzel built it to draw attention to the world housing shortage.", viEx: "Van Bo Le-Mentzel đã xây nó để thu hút sự chú ý đến tình trạng thiếu nhà ở trên thế giới." },
      { word: "made of ice", type: "Cụm tính từ", ipa: "/meɪd əv aɪs/", def: "được làm bằng băng", ex: "For an unusual holiday you can stay in an igloo, a house made of ice.", viEx: "Để có một kỳ nghỉ khác thường, bạn có thể ở trong một ngôi nhà băng." },
      { word: "winter", type: "Danh từ", ipa: "/ˈwɪntər/", def: "mùa đông", ex: "They are built new every winter.", viEx: "Chúng được xây mới vào mỗi mùa đông." },
      { word: "reindeer skins", type: "Cụm danh từ", ipa: "/ˈreɪndɪr skɪnz/", def: "da tuần lộc", ex: "We used reindeer skins to keep warm.", viEx: "Chúng tôi dùng da tuần lộc để giữ ấm." },
      { word: "keep warm", type: "Cụm động từ", ipa: "/kiːp wɔːrm/", def: "giữ ấm", ex: "We used reindeer skins to keep warm.", viEx: "Chúng tôi dùng da tuần lộc để giữ ấm." },
      { word: "perfect place", type: "Cụm danh từ", ipa: "/ˈpɝːfɪkt pleɪs/", def: "nơi lý tưởng", ex: "It was the perfect place to get away from our busy lives.", viEx: "Đó là nơi lý tưởng để tạm rời xa cuộc sống bận rộn của chúng tôi." },
      { word: "get away", type: "Cụm động từ", ipa: "/ɡet əˈweɪ/", def: "tránh xa; tạm rời khỏi", ex: "It was the perfect place to get away from our busy lives.", viEx: "Đó là nơi lý tưởng để tạm rời xa cuộc sống bận rộn của chúng tôi." },
      { word: "busy lives", type: "Cụm danh từ", ipa: "/ˈbɪzi laɪvz/", def: "cuộc sống bận rộn", ex: "It was the perfect place to get away from our busy lives.", viEx: "Đó là nơi lý tưởng để tạm rời xa cuộc sống bận rộn của chúng tôi." }
    ]
  },
  {
    id: 2,
    part: "01. DẠNG BÀI SENTENCE COMPLETION",
    title: "Activity 2: HOME FROM HOME",
    instruction: "Read the passage and complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
    passage: [
      { en: "I remember feeling the first time I left home that I would never be able to feel at home anywhere but in my home. No other place would have my mum and dad, my annoying little brother and my cat, Tilly. Nowhere would smell like my home – my mum's roast chicken in the oven and the salty, seaweed smell that drifted in from the nearby beach. The sound of seagulls squawking was the sound of home. Nowhere else would I feel comfortable enough to put my feet up under me and gaze into the log fire dreaming of the future.", vi: "Tôi nhớ lần đầu tiên rời khỏi nhà, tôi đã cảm thấy rằng mình sẽ không bao giờ có thể cảm thấy thoải mái như ở nhà khi ở bất kỳ nơi nào khác. Không nơi nào khác có mẹ và bố đáng yêu của tôi, cậu em trai phiền phức của tôi và chú mèo Tilly. Không nơi nào có mùi giống như ở nhà – mùi món gà quay của mẹ trong lò nướng và mùi mằn mặn của rong biển trôi dạt vào từ bãi biển gần đó. Tiếng chim mòng biển kêu là âm thanh của quê nhà. Không nơi nào khác tôi có thể cảm thấy đủ thoải mái để gác chân lên ghế và ngồi nhìn vào ngọn lửa, mơ về tương lai." },
      { en: "I was 15 when I first went away from home on a school trip to Germany. My friends were going too, but we would all stay with different families. I was nervous about this. I knew the home I was going to would not be as comfortable as mine, the family would not be as kind, and who knew what the German food would be like? I knew I would spend three weeks, homesick and sad, missing my family back home.", vi: "Tôi 15 tuổi khi lần đầu tiên xa nhà trong một chuyến đi của trường tới Đức. Bạn bè tôi cũng đi, nhưng tất cả chúng tôi sẽ ở với những gia đình khác nhau. Tôi rất lo lắng về điều này. Tôi biết ngôi nhà mà mình sắp ở sẽ không thoải mái như nhà mình, gia đình đó sẽ không tử tế bằng gia đình tôi, và ai mà biết được đồ ăn Đức sẽ như thế nào? Tôi biết mình sẽ phải trải qua ba tuần nhớ nhà và buồn bã, nhớ gia đình ở quê nhà." },
      { en: "We arrived in Germany late at night after a long journey by coach and boat. I was tired and hungry. We went into the school hall, where the host families were waiting to meet us. I wondered which one would be mine. Would they give me dinner at this time and would I be able to eat the unfamiliar food? Suddenly I heard my name called and the name of my exchange partner, Brigitte Schmitt. A pretty, blonde girl stepped forward, smiling widely. Behind her stood her parents, a pleasant-looking couple who were also smiling. They held out their hands and said, 'Wilkommen in Deutschland. Welcome to Germany.'", vi: "Chúng tôi đến Đức vào đêm muộn sau một hành trình dài bằng xe khách và tàu thủy. Tôi mệt và đói. Chúng tôi bước vào hội trường của trường, nơi những gia đình chủ nhà đang chờ để gặp chúng tôi. Tôi tự hỏi gia đình nào sẽ là gia đình của mình. Liệu họ có cho tôi ăn tối vào giờ này không và liệu tôi có thể ăn những món ăn xa lạ đó không? Đột nhiên, tôi nghe thấy tên mình được gọi cùng với tên của bạn học cùng chương trình trao đổi, Brigitte Schmitt. Một cô gái tóc vàng xinh xắn bước lên phía trước, nở nụ cười thật tươi. Đứng phía sau cô ấy là bố mẹ cô, một cặp vợ chồng trông dễ mến và cũng đang mỉm cười. Họ chìa tay ra và nói: 'Willkommen in Deutschland. Chào mừng đến với nước Đức.'" },
      { en: "I spent three happy weeks with the Schmitt family. Brigitte had an elder brother, Hendrik, and a younger sister, Lisa. They had two cats, Ping and Pong, who sat on my lap as I looked into the fire in the evenings. The whole family were kind and welcoming. My room was cosy and warm and we looked out onto a forest. The fresh clean smell of the trees and of apples baking in the oven became familiar and comforting, like the smells of home. I learnt in those three weeks that you can feel at home anywhere that people are kind to you.", vi: "Tôi đã trải qua ba tuần vui vẻ cùng gia đình Schmitt. Brigitte có một người anh trai tên Hendrik và một cô em gái tên Lisa. Họ có hai chú mèo, Ping và Pong, chúng thường ngồi trong lòng tôi khi tôi nhìn vào ngọn lửa vào buổi tối. Cả gia đình đều rất tốt bụng và thân thiện. Căn phòng của tôi ấm áp, dễ chịu và nhìn ra một khu rừng. Mùi thơm của cây cối tươi sạch và những quả táo nướng trong lò đã trở nên quen thuộc và dễ chịu, giống như những mùi hương ở nhà. Trong ba tuần đó, tôi đã học được rằng bạn có thể cảm thấy như đang ở nhà ở bất cứ nơi nào mà mọi người đối xử tốt với bạn." },
      { en: "Later that year, Brigitte came to stay with me in the UK. I gave her my room and moved in with my brother. I cleared space for her clothes and put fresh flowers in a vase by the bed. I asked my mum to make her famous roast chicken and an apple pie to make our guest feel at home. We made a welcome banner and put it up on the front door. I did everything I could to help Brigitte feel at home with us. I now understood the importance of a warm welcome.", vi: "Cuối năm đó, Brigitte đến ở cùng tôi tại Vương quốc Anh. Tôi nhường phòng của mình cho cô ấy và chuyển sang ở cùng phòng với em trai. Tôi dọn chỗ để quần áo của cô ấy và cắm những bông hoa tươi vào một chiếc bình cạnh giường. Tôi nhờ mẹ làm món gà quay nổi tiếng của bà và một chiếc bánh táo để vị khách của chúng tôi cảm thấy như đang ở nhà. Chúng tôi làm một tấm biểu ngữ chào mừng và treo nó ở cửa trước. Tôi đã làm tất cả những gì có thể để giúp Brigitte cảm thấy thoải mái như ở nhà khi ở cùng chúng tôi. Giờ đây, tôi đã hiểu được tầm quan trọng của một lời chào đón nồng nhiệt." }
    ],
    questions: [
      { q: "1. The writer's mother often cooks _______", ans: ["roast chicken"], loc: "Đoạn 1: '...my mum's roast chicken in the oven...'", exp: "Món ăn mẹ tác giả thường nấu nướng trong lò là món 'roast chicken'." },
      { q: "2. She thought the visit to Germany would make her feel _______", ans: ["homesick and sad"], loc: "Đoạn 2: 'I knew I would spend three weeks, homesick and sad...'", exp: "Tác giả từng nghĩ mình sẽ có 3 tuần buồn bã và nhớ nhà ('homesick and sad')." },
      { q: "3. Brigitte came to pick up the girl with _______", ans: ["her parents"], loc: "Đoạn 3: 'Behind her stood her parents, a pleasant-looking couple...'", exp: "Brigitte đi cùng với bố mẹ cô ấy ('her parents')." },
      { q: "4. The Schmitt family's pets' names are _______", ans: ["ping and pong"], loc: "Đoạn 4: 'They had two cats, Ping and Pong...'", exp: "Tên hai chú mèo cưng là 'Ping and Pong'." },
      { q: "5. From her bedroom the girl could see _______", ans: ["a forest", "forest"], loc: "Đoạn 4: 'My room was cosy and warm and we looked out onto a forest.'", exp: "Khung cảnh nhìn từ phòng ngủ là một khu rừng ('a forest')." },
      { q: "6. The girl and her family tried hard to make Brigitte _______", ans: ["feel at home"], loc: "Đoạn 5: 'I did everything I could to help Brigitte feel at home with us.'", exp: "Gia đình đã làm tất cả để Brigitte thấy như ở nhà ('feel at home')." }
    ],
    paraphraseTable: [
      { qWord: "mother", pWord: "mum", note: "Mẹ / má" },
      { qWord: "cook", pWord: "in the oven", note: "Nấu / nướng chín trong lò nướng" },
      { qWord: "the visit to Germany", pWord: "a school trip to Germany", note: "Chuyến đi / tham quan tới nước Đức" },
      { qWord: "She thought", pWord: "I knew", note: "Cô ấy từng nghĩ / Tôi đã biết trước" },
      { qWord: "came to pick up the girl with", pWord: "Behind her stood", note: "Đến đón cùng với / Đứng phía sau cô là" },
      { qWord: "pets", pWord: "cats", note: "Thú cưng / những chú mèo" },
      { qWord: "could see", pWord: "looked out onto", note: "Có thể nhìn thấy / trông ra hướng" },
      { qWord: "tried hard to make", pWord: "did everything I could to help", note: "Nỗ lực hết mình để giúp ai đó" }
    ],
    vocab: [
      { word: "writer", type: "Danh từ", ipa: "/ˈraɪtər/", def: "người viết; tác giả", ex: "The writer remembers leaving home for the first time.", viEx: "Người viết nhớ lần đầu tiên rời xa nhà." },
      { word: "visit", type: "Danh từ", ipa: "/ˈvɪzɪt/", def: "chuyến thăm; chuyến đi", ex: "My visit to Germany was exciting.", viEx: "Chuyến đi đến Đức của tôi rất thú vị." },
      { word: "Germany", type: "Danh từ riêng", ipa: "/ˈdʒɝːməni/", def: "Đức", ex: "I was 15 when I first went away from home on a school trip to Germany.", viEx: "Tôi 15 tuổi khi lần đầu tiên rời xa nhà để tham gia một chuyến đi của trường đến Đức." },
      { word: "make her feel", type: "Cụm động từ", ipa: "/meɪk hɚ fiːl/", def: "khiến cô ấy cảm thấy", ex: "We wanted to make her feel welcome.", viEx: "Chúng tôi muốn khiến cô ấy cảm thấy được chào đón." },
      { word: "pick up", type: "Cụm động từ", ipa: "/pɪk ʌp/", def: "đón", ex: "My parents came to pick me up after school.", viEx: "Bố mẹ tôi đến đón tôi sau giờ học." },
      { word: "pets", type: "Danh từ số nhiều", ipa: "/pets/", def: "thú cưng", ex: "Many families have pets at home.", viEx: "Nhiều gia đình nuôi thú cưng ở nhà." },
      { word: "bedroom", type: "Danh từ", ipa: "/ˈbedruːm/", def: "phòng ngủ", ex: "My bedroom is clean and comfortable.", viEx: "Phòng ngủ của tôi sạch sẽ và thoải mái." },
      { word: "tried hard", type: "Cụm động từ", ipa: "/traɪd hɑːrd/", def: "cố gắng hết sức", ex: "She tried hard to help her friend.", viEx: "Cô ấy đã cố gắng hết sức để giúp bạn mình." },
      { word: "Nowhere", type: "Trạng từ", ipa: "/ˈnoʊwer/", def: "không nơi nào", ex: "Nowhere would smell like my home.", viEx: "Không nơi nào có mùi hương giống như ngôi nhà của tôi." },
      { word: "smell", type: "Động từ", ipa: "/smel/", def: "có mùi; ngửi thấy mùi", ex: "Nowhere would smell like my home.", viEx: "Không nơi nào có mùi hương giống như ngôi nhà của tôi." },
      { word: "roast chicken", type: "Cụm danh từ", ipa: "/roʊst ˈtʃɪkɪn/", def: "gà quay", ex: "My mum's roast chicken in the oven...", viEx: "Món gà quay của mẹ tôi trong lò nướng..." },
      { word: "oven", type: "Danh từ", ipa: "/ˈʌvən/", def: "lò nướng", ex: "My mum's roast chicken in the oven...", viEx: "Món gà quay của mẹ tôi trong lò nướng..." },
      { word: "salty, seaweed smell", type: "Cụm danh từ", ipa: "/ˈsɔːlti ˈsiːwiːd smel/", def: "mùi rong biển mặn", ex: "The salty, seaweed smell drifted in from the nearby beach.", viEx: "Mùi rong biển mặn thoảng vào từ bãi biển gần đó." },
      { word: "drifted in", type: "Cụm động từ", ipa: "/ˈdrɪftɪd ɪn/", def: "thoảng vào; bay vào", ex: "The salty, seaweed smell drifted in from the nearby beach.", viEx: "Mùi rong biển mặn thoảng vào từ bãi biển gần đó." },
      { word: "nearby beach", type: "Cụm danh từ", ipa: "/ˈnɪrbaɪ biːtʃ/", def: "bãi biển gần đó", ex: "The salty, seaweed smell drifted in from the nearby beach.", viEx: "Mùi rong biển mặn thoảng vào từ bãi biển gần đó." },
      { word: "went away from home", type: "Cụm động từ", ipa: "/went əˈweɪ frəm hoʊm/", def: "rời xa nhà", ex: "I was 15 when I first went away from home on a school trip to Germany.", viEx: "Tôi 15 tuổi khi lần đầu tiên rời xa nhà để tham gia chuyến đi của trường đến Đức." },
      { word: "school trip", type: "Cụm danh từ", ipa: "/skuːl trɪp/", def: "chuyến đi của trường", ex: "I was 15 when I first went away from home on a school trip to Germany.", viEx: "Tôi 15 tuổi khi lần đầu tiên rời xa nhà để tham gia chuyến đi của trường đến Đức." },
      { word: "nervous", type: "Tính từ", ipa: "/ˈnɝːvəs/", def: "lo lắng", ex: "I was nervous about this.", viEx: "Tôi rất lo lắng về điều đó." },
      { word: "comfortable", type: "Tính từ", ipa: "/ˈkʌmftərbl/", def: "thoải mái", ex: "I knew the home I was going to would not be as comfortable as mine.", viEx: "Tôi biết ngôi nhà mình sắp đến sẽ không thoải mái bằng nhà mình." },
      { word: "mine", type: "Đại từ sở hữu", ipa: "/maɪn/", def: "của tôi", ex: "I knew the home I was going to would not be as comfortable as mine.", viEx: "Tôi biết ngôi nhà mình sắp đến sẽ không thoải mái bằng nhà của tôi." },
      { word: "kind", type: "Tính từ", ipa: "/kaɪnd/", def: "tốt bụng", ex: "The family would not be as kind.", viEx: "Gia đình đó sẽ không tốt bụng bằng." },
      { word: "German food", type: "Cụm danh từ", ipa: "/ˈdʒɝːmən fuːd/", def: "đồ ăn Đức", ex: "Who knew what the German food would be like?", viEx: "Ai mà biết đồ ăn Đức sẽ như thế nào chứ?" },
      { word: "homesick", type: "Tính từ", ipa: "/ˈhoʊmsɪk/", def: "nhớ nhà", ex: "I knew I would spend three weeks, homesick and sad.", viEx: "Tôi biết mình sẽ trải qua ba tuần nhớ nhà và buồn bã." },
      { word: "exchange partner", type: "Cụm danh từ", ipa: "/ɪksˈtʃeɪndʒ ˈpɑːrtnər/", def: "bạn trao đổi", ex: "I heard my name called and the name of my exchange partner, Brigitte Schmitt.", viEx: "Tôi nghe thấy tên mình được gọi cùng với tên của bạn trao đổi là Brigitte Schmitt." },
      { word: "blonde girl", type: "Cụm danh từ", ipa: "/blɑːnd ɡɝːl/", def: "cô gái tóc vàng", ex: "A pretty, blonde girl stepped forward, smiling widely.", viEx: "Một cô gái tóc vàng xinh xắn bước lên phía trước và mỉm cười rạng rỡ." },
      { word: "stepped forward", type: "Cụm động từ", ipa: "/stept ˈfɔːrwərd/", def: "bước lên phía trước", ex: "A pretty, blonde girl stepped forward, smiling widely.", viEx: "Một cô gái tóc vàng xinh xắn bước lên phía trước và mỉm cười rạng rỡ." },
      { word: "smiling widely", type: "Cụm động từ", ipa: "/ˈsmaɪlɪŋ ˈwaɪdli/", def: "mỉm cười rạng rỡ", ex: "A pretty, blonde girl stepped forward, smiling widely.", viEx: "Một cô gái tóc vàng xinh xắn bước lên phía trước và mỉm cười rạng rỡ." },
      { word: "pleasant-looking", type: "Tính từ", ipa: "/ˈplezənt ˌlʊkɪŋ/", def: "có vẻ ngoài dễ mến", ex: "Behind her stood her parents, a pleasant-looking couple.", viEx: "Đằng sau cô ấy là bố mẹ cô, một cặp vợ chồng có vẻ ngoài rất dễ mến." },
      { word: "lap", type: "Danh từ", ipa: "/læp/", def: "lòng (đùi khi ngồi)", ex: "They had two cats, Ping and Pong, who sat on my lap.", viEx: "Họ có hai con mèo, Ping và Pong, chúng ngồi trên lòng tôi." },
      { word: "cosy", type: "Tính từ", ipa: "/ˈkoʊzi/", def: "ấm cúng", ex: "My room was cosy and warm.", viEx: "Phòng của tôi rất ấm cúng và ấm áp." },
      { word: "looked out onto a forest", type: "Cụm động từ", ipa: "/lʊkt aʊt ˈɑːntu ə ˈfɔːrɪst/", def: "nhìn ra khu rừng", ex: "We looked out onto a forest.", viEx: "Chúng tôi nhìn ra một khu rừng." },
      { word: "fresh flowers", type: "Cụm danh từ", ipa: "/freʃ ˈflaʊərz/", def: "hoa tươi", ex: "I put fresh flowers in a vase by the bed.", viEx: "Tôi đặt hoa tươi vào một chiếc bình bên cạnh giường." },
      { word: "vase", type: "Danh từ", ipa: "/veɪs/", def: "bình hoa", ex: "I put fresh flowers in a vase by the bed.", viEx: "Tôi đặt hoa tươi vào một chiếc bình bên cạnh giường." },
      { word: "apple pie", type: "Cụm danh từ", ipa: "/ˌæpl ˈpaɪ/", def: "bánh táo", ex: "I asked my mum to make her famous roast chicken and an apple pie.", viEx: "Tôi nhờ mẹ làm món gà quay nổi tiếng và một chiếc bánh táo." },
      { word: "feel at home", type: "Cụm động từ", ipa: "/fiːl æt hoʊm/", def: "cảm thấy như ở nhà", ex: "We made our guest feel at home.", viEx: "Chúng tôi khiến vị khách cảm thấy như đang ở nhà." },
      { word: "welcome banner", type: "Cụm danh từ", ipa: "/ˈwelkəm ˈbænər/", def: "biểu ngữ chào mừng", ex: "We made a welcome banner and put it up on the front door.", viEx: "Chúng tôi làm một biểu ngữ chào mừng và treo nó lên cửa trước." }
    ]
  },
  {
    id: 3,
    part: "01. DẠNG BÀI SENTENCE COMPLETION",
    title: "Activity 3: FOOD CULTURE SHOCK",
    instruction: "Complete these sentences using a word from the text.",
    passage: [
      { en: "A CHARLES: You would think that eating with your fingers would be easy. In the US, there are only certain things you can eat with your fingers, like burgers, for example, and that is easy enough. When I went to South India, though, I realised that it is a whole new skill to learn to eat rice and curry with your fingers. You have to mix the curries together and with the rice and form a ball. Daal* is particularly helpful as a kind of glue. You use your fingertips, never the palm of your hand, and use your thumb to pop it into your mouth. I thought I knew where my mouth was, but my first few attempts were a disaster. There was food everywhere! (*Daal is a lentil curry widely eaten in the Indian subcontinent.)", vi: "A. CHARLES: Bạn có thể nghĩ rằng ăn bằng tay thì hẳn là rất dễ. Ở Mỹ, chỉ có một số món nhất định mà bạn có thể ăn bằng tay, chẳng hạn như bánh burger, và việc đó khá đơn giản. Tuy nhiên, khi đến miền Nam Ấn Độ, tôi nhận ra rằng ăn cơm và cà ri bằng tay là cả một kỹ năng hoàn toàn mới cần phải học. Bạn phải trộn các món cà ri với nhau và với cơm rồi vo thành một viên. Daal đặc biệt hữu ích vì nó giống như một loại chất kết dính. Bạn dùng các đầu ngón tay, tuyệt đối không dùng lòng bàn tay, và dùng ngón cái để đẩy thức ăn vào miệng. Tôi cứ nghĩ mình biết miệng mình nằm ở đâu, nhưng vài lần thử đầu tiên của tôi đúng là một thảm họa. Thức ăn vương vãi khắp nơi!" },
      { en: "B ALFREDO: For me, when I travel, the 'fast food' culture always shocks me. I can't believe there are people in the world who live on 'junk food' like burgers and just grab a sandwich for lunch. Back home, food is very important to us. We cook fresh food for lunch and dinner and sit down and eat as a family at least once a day, twice at weekends. A lot of people grow their own vegetables and keep chickens. Food is part of your identity, so what are you saying about yourself when you eat some rubbish which contains chemicals and goodness knows what else? The worst thing I have seen on my travels is a baby being given a fizzy drink in a bottle. That really shocked me!", vi: "B. ALFREDO: Đối với tôi, khi đi du lịch, văn hóa “đồ ăn nhanh” luôn khiến tôi bị sốc. Tôi không thể tin rằng trên thế giới lại có những người sống bằng những loại “đồ ăn vặt” như bánh burger và chỉ đơn giản mua một chiếc bánh sandwich cho bữa trưa. Ở quê tôi, đồ ăn rất quan trọng đối với chúng tôi. Chúng tôi nấu đồ ăn tươi cho bữa trưa và bữa tối rồi ngồi xuống ăn cùng gia đình ít nhất một lần mỗi ngày, và hai lần vào cuối tuần. Rất nhiều người tự trồng rau và nuôi gà. Thức ăn là một phần bản sắc của bạn, vậy bạn đang nói gì về chính mình khi ăn những thứ đồ ăn tạp nham chứa hóa chất và chẳng ai biết còn có những gì khác trong đó? Điều tồi tệ nhất tôi từng thấy trong những chuyến đi của mình là một em bé được cho uống nước có ga bằng bình sữa. Điều đó thực sự khiến tôi bị sốc!" },
      { en: "C QIANG SHI: I enjoy trying food from different countries, but what interests me more is the culture and habits surrounding food and eating. In China, when we go to a restaurant with colleagues, when we are offered something, we say 'No thanks', even though we want it, because the person will definitely repeat the offer. In other countries, though, 'no' means 'no', so if you are trying to be polite and don't take it the first time, you will end up with nothing! To me, it feels wrong to take something the first time it's offered, so it took me a while to get used to that when I travel abroad.", vi: "C. QIANG SHI: Tôi thích thử đồ ăn từ nhiều quốc gia khác nhau, nhưng điều khiến tôi quan tâm hơn cả là văn hóa và những thói quen xoay quanh đồ ăn và việc ăn uống. Ở Trung Quốc, khi chúng tôi đi ăn nhà hàng cùng đồng nghiệp, khi được mời một món gì đó, chúng tôi sẽ nói “Không, cảm ơn”, mặc dù chúng tôi muốn món đó, bởi vì người mời chắc chắn sẽ tiếp tục mời. Tuy nhiên, ở những quốc gia khác, “không” có nghĩa là “không”, vì vậy nếu bạn cố tỏ ra lịch sự và không nhận món đó ngay lần đầu tiên, bạn sẽ chẳng nhận được gì cả! Đối với tôi, việc nhận một món gì đó ngay lần đầu tiên được mời có vẻ không lịch sự, vì vậy tôi đã mất một thời gian để làm quen với điều đó khi đi du lịch nước ngoài." },
      { en: "D PAULINE: Being a vegetarian is so easy here in the UK that we forget that not everyone in the world understands vegetarianism. For vegans the situation is even more difficult. Probably the best place I've been to is India, as everything is divided into 'veg' or 'non veg' so you know exactly what you're getting. In many countries, they don't even realise that there is a concept of not eating meat for ethical reasons. In many parts of the world, meat equates to prosperity, so the idea of going out for a meal and not having meat is alien to them. I have travelled to places where, as a vegetarian, all I have been able to eat is salad, fruit and chips. I'm glad to get home where we have special vegetarian products.", vi: "D. PAULINE: Làm người ăn chay ở Anh dễ đến mức chúng tôi quên rằng không phải tất cả mọi người trên thế giới đều hiểu về việc ăn chay. Đối với người ăn chay thuần chay, tình hình còn khó khăn hơn. Có lẽ nơi tốt nhất tôi từng đến là Ấn Độ, vì ở đó mọi thứ đều được phân chia thành “đồ chay” hoặc “đồ không chay”, nên bạn biết chính xác mình sẽ nhận được món gì. Ở nhiều quốc gia, người ta thậm chí còn không nhận ra rằng có quan niệm không ăn thịt vì những lý do đạo đức. Ở nhiều nơi trên thế giới, thịt đồng nghĩa với sự sung túc, vì vậy ý tưởng ra ngoài ăn một bữa mà không có thịt là điều xa lạ đối với họ. Tôi đã đi đến những nơi mà với tư cách là một người ăn chay, tất cả những gì tôi có thể ăn chỉ là salad, trái cây và khoai tây chiên. Tôi rất vui khi trở về nhà, nơi chúng tôi có những cửa hàng đặc biệt cho người ăn chay." },
      { en: "E AILEEN: I think breakfast is the meal where food culture really hits you. In Australia, there are certain foods you eat for breakfast and certain foods you don't. We usually eat cereal or toast, maybe yoghurt and fruit. We would never eat chicken or vegetables. But when I travelled in Asia, I realised that in many places, there is no difference between breakfast and dinner: rice, curry, noodles, soup, steamed vegetables and fish all appeared at breakfast. Even though I love all those things, I just can't face them at breakfast!", vi: "E. AILEEN: Tôi nghĩ bữa sáng là bữa ăn mà sự khác biệt về văn hóa ẩm thực thực sự tác động mạnh đến bạn. Ở Úc, có một số món nhất định mà bạn ăn vào bữa sáng và một số món thì không. Chúng tôi thường ăn ngũ cốc hoặc bánh mì nướng, có thể thêm sữa chua và trái cây. Chúng tôi sẽ không bao giờ ăn thịt gà hoặc rau. Nhưng khi đi du lịch ở châu Á, tôi nhận ra rằng ở nhiều nơi, không có sự khác biệt giữa bữa sáng và bữa tối: cơm, cà ri, mì, súp, rau hấp và cá đều xuất hiện vào bữa sáng. Mặc dù tôi rất thích tất cả những món đó, nhưng tôi thực sự không thể ăn chúng vào bữa sáng!" }
    ],
    questions: [
      { q: "1. In China, if you refuse food, the host will usually _______ the offer.", ans: ["repeat"], loc: "Đoạn C: '...because the person will definitely repeat the offer.'", exp: "Chủ nhà sẽ lặp lại lời mời ('repeat')." },
      { q: "2. For Alfredo, food plays an important role in a person's _______", ans: ["identity"], loc: "Đoạn B: 'Food is part of your identity...'", exp: "Thực phẩm thể hiện bản sắc ('identity') cá nhân." },
      { q: "3. In India, you should not use your _______ when eating.", ans: ["palm", "palms"], loc: "Đoạn A: 'You use your fingertips, never the palm of your hand...'", exp: "Không bao giờ được dùng lòng bàn tay ('palm')." },
      { q: "4. In some countries, eating meat represents _______", ans: ["prosperity"], loc: "Đoạn D: '...meat equates to prosperity...'", exp: "Ăn thịt tượng trưng cho sự thịnh vượng, sung túc ('prosperity')." },
      { q: "5. In many places in _______ there is no difference between foods eaten for breakfast and dinner.", ans: ["asia"], loc: "Đoạn E: 'But when I travelled in Asia, I realised that in many places...'", exp: "Ở nhiều nơi tại Châu Á ('Asia')." }
    ],
    paraphraseTable: [
      { qWord: "refuse food", pWord: "say 'No thanks'", note: "Từ chối đồ ăn / nói không cảm ơn" },
      { qWord: "plays an important role", pWord: "is part of", note: "Đóng vai trò quan trọng / là một phần" },
      { qWord: "eating represents", pWord: "equates to", note: "Đại diện cho / đồng nghĩa với" },
      { qWord: "no difference between", pWord: "all appeared at breakfast", note: "Không có sự phân biệt / đều xuất hiện" }
    ],
    vocab: [
      { word: "China", type: "Danh từ riêng", ipa: "/ˈtʃaɪnə/", def: "Trung Quốc", ex: "In China, when we go to a restaurant with colleagues, when we are offered something, we say 'No thanks'.", viEx: "Ở Trung Quốc, khi chúng tôi đến nhà hàng với đồng nghiệp và được mời món gì đó, chúng tôi sẽ nói: 'Không, cảm ơn.'" },
      { word: "refuse", type: "Động từ", ipa: "/rɪˈfjuːz/", def: "từ chối", ex: "If you refuse the food, the host may offer it again.", viEx: "Nếu bạn từ chối món ăn, chủ nhà có thể sẽ mời lại." },
      { word: "host", type: "Danh từ", ipa: "/hoʊst/", def: "chủ nhà", ex: "The host welcomed us with a big smile.", viEx: "Chủ nhà chào đón chúng tôi bằng một nụ cười tươi." },
      { word: "offer", type: "Danh từ", ipa: "/ˈɔːfər/", def: "lời mời; lời đề nghị", ex: "The person will definitely repeat the offer.", viEx: "Người đó chắc chắn sẽ mời lại." },
      { word: "plays an important role", type: "Cụm động từ", ipa: "/pleɪz ən ɪmˈpɔːrtnt roʊl/", def: "đóng vai trò quan trọng", ex: "Food plays an important role in our lives.", viEx: "Thức ăn đóng vai trò quan trọng trong cuộc sống của chúng ta." },
      { word: "India", type: "Danh từ riêng", ipa: "/ˈɪndiə/", def: "Ấn Độ", ex: "When I went to South India, though, I realised that it is a whole new skill to learn to eat rice and curry with your fingers.", viEx: "Tuy nhiên, khi tôi đến miền Nam Ấn Độ, tôi nhận ra rằng ăn cơm và cà ri bằng tay là một kỹ năng hoàn toàn mới." },
      { word: "use", type: "Động từ", ipa: "/juːz/", def: "sử dụng", ex: "You use your fingertips, never the palm of your hand, and use your thumb to pop it into your mouth.", viEx: "Bạn dùng đầu ngón tay, không bao giờ dùng lòng bàn tay, rồi dùng ngón cái để đưa thức ăn vào miệng." },
      { word: "represents", type: "Động từ", ipa: "/ˌreprɪˈzents/", def: "tượng trưng cho; thể hiện", ex: "In some countries, meat represents prosperity.", viEx: "Ở một số quốc gia, thịt tượng trưng cho sự thịnh vượng." },
      { word: "no difference", type: "Cụm danh từ", ipa: "/noʊ ˈdɪfrəns/", def: "không có sự khác biệt", ex: "In many places, there is no difference between breakfast and dinner.", viEx: "Ở nhiều nơi, không có sự khác biệt giữa bữa sáng và bữa tối." },
      { word: "breakfast", type: "Danh từ", ipa: "/ˈbrekfəst/", def: "bữa sáng", ex: "I think breakfast is the meal where food culture really hits you.", viEx: "Tôi nghĩ bữa sáng là bữa ăn mà bạn cảm nhận rõ nhất sự khác biệt về văn hóa ẩm thực." },
      { word: "dinner", type: "Danh từ", ipa: "/ˈdɪnər/", def: "bữa tối", ex: "We cook fresh food for lunch and dinner and sit down and eat as a family.", viEx: "Chúng tôi nấu thức ăn tươi cho bữa trưa và bữa tối rồi cùng ngồi ăn như một gia đình." },
      { word: "fingers", type: "Danh từ số nhiều", ipa: "/ˈfɪŋɡərz/", def: "các ngón tay", ex: "It is a whole new skill to learn to eat rice and curry with your fingers.", viEx: "Ăn cơm và cà ri bằng tay là một kỹ năng hoàn toàn mới." },
      { word: "mix", type: "Động từ", ipa: "/mɪks/", def: "trộn", ex: "You have to mix the curries together and with the rice and form a ball.", viEx: "Bạn phải trộn các món cà ri với nhau và với cơm rồi vo thành một viên." },
      { word: "curries", type: "Danh từ số nhiều", ipa: "/ˈkɝːiz/", def: "các món cà ri", ex: "You have to mix the curries together and with the rice and form a ball.", viEx: "Bạn phải trộn các món cà ri với nhau và với cơm rồi vo thành một viên." },
      { word: "form a ball", type: "Cụm động từ", ipa: "/fɔːrm ə bɔːl/", def: "vo thành một viên", ex: "You have to mix the curries together and with the rice and form a ball.", viEx: "Bạn phải trộn các món cà ri với nhau và với cơm rồi vo thành một viên." },
      { word: "particularly helpful", type: "Cụm tính từ", ipa: "/pərˈtɪkjələrli ˈhelpfəl/", def: "đặc biệt hữu ích", ex: "Daal is particularly helpful as a kind of glue.", viEx: "Món daal đặc biệt hữu ích vì nó giống như một loại keo kết dính." },
      { word: "glue", type: "Danh từ", ipa: "/ɡluː/", def: "keo dán", ex: "Daal is particularly helpful as a kind of glue.", viEx: "Món daal đặc biệt hữu ích vì nó giống như một loại keo kết dính." },
      { word: "fingertips", type: "Danh từ số nhiều", ipa: "/ˈfɪŋɡərtɪps/", def: "đầu ngón tay", ex: "You use your fingertips, never the palm of your hand.", viEx: "Bạn dùng đầu ngón tay, không bao giờ dùng lòng bàn tay." },
      { word: "palm of your hand", type: "Cụm danh từ", ipa: "/pɑːm əv jʊr hænd/", def: "lòng bàn tay", ex: "You use your fingertips, never the palm of your hand.", viEx: "Bạn dùng đầu ngón tay, không bao giờ dùng lòng bàn tay." },
      { word: "thumb", type: "Danh từ", ipa: "/θʌm/", def: "ngón cái", ex: "Use your thumb to pop it into your mouth.", viEx: "Hãy dùng ngón cái để đưa thức ăn vào miệng." },
      { word: "pop it into your mouth", type: "Cụm động từ", ipa: "/pɑːp ɪt ˈɪntuː jʊr maʊθ/", def: "đưa nó vào miệng", ex: "Use your thumb to pop it into your mouth.", viEx: "Hãy dùng ngón cái để đưa thức ăn vào miệng." },
      { word: "identity", type: "Danh từ", ipa: "/aɪˈdentəti/", def: "bản sắc; danh tính", ex: "Food is part of your identity.", viEx: "Ẩm thực là một phần bản sắc của bạn." },
      { word: "rubbish", type: "Danh từ", ipa: "/ˈrʌbɪʃ/", def: "đồ ăn tệ; rác rưởi", ex: "What are you saying about yourself when you eat some rubbish?", viEx: "Bạn đang nói gì về bản thân khi ăn những đồ ăn rác?" },
      { word: "contains chemicals", type: "Cụm động từ", ipa: "/kənˈteɪnz ˈkemɪkəlz/", def: "chứa hóa chất", ex: "...when you eat some rubbish which contains chemicals?", viEx: "...khi bạn ăn những đồ ăn rác chứa hóa chất?" },
      { word: "goodness", type: "Danh từ", ipa: "/ˈɡʊdnəs/", def: "chất tốt; điều tốt", ex: "...contains chemicals and goodness knows what else.", viEx: "...chứa hóa chất và đủ thứ khác nữa." },
      { word: "colleagues", type: "Danh từ số nhiều", ipa: "/ˈkɑːliːɡz/", def: "đồng nghiệp", ex: "In China, when we go to a restaurant with colleagues...", viEx: "Ở Trung Quốc, khi chúng tôi đi nhà hàng cùng đồng nghiệp..." },
      { word: "even though", type: "Liên từ", ipa: "/ˈiːvən ðoʊ/", def: "mặc dù", ex: "...we say 'No thanks', even though we want it...", viEx: "...chúng tôi nói 'Không, cảm ơn', mặc dù chúng tôi muốn nhận." },
      { word: "definitely", type: "Trạng từ", ipa: "/ˈdefɪnətli/", def: "chắc chắn", ex: "The person will definitely repeat the offer.", viEx: "Người đó chắc chắn sẽ mời lại." },
      { word: "repeat the offer", type: "Cụm động từ", ipa: "/rɪˈpiːt ði ˈɔːfər/", def: "mời lại; nhắc lại đề nghị", ex: "The person will definitely repeat the offer.", viEx: "Người đó chắc chắn sẽ mời lại." },
      { word: "realise", type: "Động từ", ipa: "/ˈriːəlaɪz/", def: "nhận ra", ex: "I realised that it is a whole new skill.", viEx: "Tôi nhận ra đó là một kỹ năng hoàn toàn mới." },
      { word: "concept", type: "Danh từ", ipa: "/ˈkɑːnsept/", def: "khái niệm", ex: "They don't even realise that there is a concept of not eating meat.", viEx: "Họ thậm chí không nhận ra có khái niệm không ăn thịt." },
      { word: "ethical reasons", type: "Cụm danh từ", ipa: "/ˈeθɪkl ˈriːzənz/", def: "lý do đạo đức", ex: "...not eating meat for ethical reasons.", viEx: "...không ăn thịt vì lý do đạo đức." },
      { word: "equates to", type: "Cụm động từ", ipa: "/ɪˈkweɪts tuː/", def: "đồng nghĩa với; tương đương", ex: "Meat equates to prosperity.", viEx: "Thịt được xem là biểu tượng của sự thịnh vượng." },
      { word: "prosperity", type: "Danh từ", ipa: "/prɑːˈsperəti/", def: "sự thịnh vượng", ex: "In many parts of the world, meat equates to prosperity.", viEx: "Ở nhiều nơi trên thế giới, thịt được xem là biểu tượng của sự thịnh vượng." },
      { word: "alien", type: "Tính từ", ipa: "/ˈeɪliən/", def: "xa lạ; kỳ quặc", ex: "The idea of going out for a meal and not having meat is alien to them.", viEx: "Ý tưởng đi ăn ngoài mà không có thịt là điều rất xa lạ đối với họ." },
      { word: "food culture", type: "Cụm danh từ", ipa: "/fuːd ˈkʌltʃər/", def: "văn hóa ẩm thực", ex: "Breakfast is the meal where food culture really hits you.", viEx: "Bữa sáng là bữa ăn mà bạn cảm nhận rõ nhất văn hóa ẩm thực." },
      { word: "hits", type: "Động từ", ipa: "/hɪts/", def: "tác động mạnh đến", ex: "Food culture really hits you.", viEx: "Văn hóa ẩm thực thực sự tác động mạnh đến bạn." },
      { word: "certain foods", type: "Cụm danh từ", ipa: "/ˈsɝːtn fuːdz/", def: "một số thực phẩm nhất định", ex: "There are certain foods you eat for breakfast.", viEx: "Có một số loại thực phẩm bạn ăn vào bữa sáng." },
      { word: "cereal", type: "Danh từ", ipa: "/ˈsɪriəl/", def: "ngũ cốc", ex: "We usually eat cereal or toast.", viEx: "Chúng tôi thường ăn ngũ cốc hoặc bánh mì nướng." },
      { word: "toast", type: "Danh từ", ipa: "/toʊst/", def: "bánh mì nướng", ex: "We usually eat cereal or toast.", viEx: "Chúng tôi thường ăn ngũ cốc hoặc bánh mì nướng." },
      { word: "yoghurt", type: "Danh từ", ipa: "/ˈjoʊɡərt/", def: "sữa chua", ex: "Maybe yoghurt and fruit.", viEx: "Có thể là sữa chua và trái cây." },
      { word: "face", type: "Động từ", ipa: "/feɪs/", def: "chấp nhận; đối mặt", ex: "I just can't face them at breakfast!", viEx: "Tôi không thể ăn chúng vào bữa sáng được!" }
    ]
  },
  {
    id: 4,
    part: "01. DẠNG BÀI SENTENCE COMPLETION",
    title: "Activity 4: OUR FRIENDS AND PROTECTORS",
    instruction: "Write NO MORE THAN TWO/THREE WORDS from the passage for each answer.",
    passage: [
      { en: "A When asked their favourite animals, many people answer 'dolphins'. They are known as friendly, intelligent creatures that have a special relationship with humans. Experts think they may understand that humans are similar to them and try to protect them from predators and other dangers.", vi: "A Khi được hỏi về loài động vật yêu thích, nhiều người trả lời là “cá heo”. Chúng thân thiện, thông minh và có mối quan hệ đặc biệt với con người. Chuyên gia cho rằng chúng nhận biết con người giống chúng và cố gắng bảo vệ con người." },
      { en: "B There are many stories about dolphins protecting humans from sharks. Wildlife filmmaker Hardy Jones was filming a group of dolphins, when a large shark swam towards him ready to attack. Four dolphins came to his rescue and drove the shark away. In fact, Jones was a well-known campaigner against the killing of dolphins. In another incident, four swimmers were protected by a pod forming a ring. As they had not yet seen the shark, one tried to swim away.", vi: "B Nhà làm phim Hardy Jones được 4 con cá heo giải cứu khi bị cá mập tấn công. Ông là nhà vận động nổi tiếng chống giết hại cá heo. Trong một sự việc khác, 4 người bơi được đàn cá heo tạo vòng tròn bảo vệ." },
      { en: "C A scuba diver survived 56 hours in the water, watched over by a pod of about 150 dolphins. In 2014, Joey Trevino was losing hope after his boat sank. A friendly dolphin approached him and gently pushed him, as if to say 'don't give up'.", vi: "C Thợ lặn sống sót 56 giờ nhờ đàn 150 cá heo trông chừng. Joey Trevino trôi dạt 24 giờ cũng được cá heo huých nhẹ động viên." },
      { en: "D In New Zealand, two pygmy sperm whales were in difficulty next to a sand bank. 'Moko', a bottlenose dolphin, led them to a channel which took them back to the ocean.", vi: "D Cá heo Moko dẫn đường cho 2 con cá nhà táng lùn thoát khỏi bãi cạn trở về biển." },
      { en: "E In California, a BBC Planet Earth film crew filmed humpback whales protecting migrating grey whales from attacks by orcas over a period of at least seven hours. In China, Yang Yun couldn't move her legs due to freezing temperatures. Two beluga whales sensed she was in trouble. Mila gripped Yang Yun's leg in her mouth and pushed Yun to the surface, saving her life.", vi: "E Cá voi lưng gù bảo vệ cá voi xám di cư trước cá voi sát thủ suốt hơn 7 giờ. Cá voi trắng Mila ngậm chân kéo thợ lặn Yang Yun lên khi cô bị cóng chân." },
      { en: "F Stories of marine mammals date back to Ancient Greece. Many people feel that is a good reason for us to do whatever we can to protect them.", vi: "F Lòng trắc ẩn của chúng là lý do xác đáng để con người bảo vệ chúng." }
    ],
    questions: [
      { q: "1. A pod of dolphins saved the life of a man called _______ while he was videoing them.", ans: ["hardy jones"], loc: "Đoạn B: 'filmmaker Hardy Jones was filming a group of dolphins...'", exp: "Người được cứu là 'Hardy Jones'." },
      { q: "2. The man was a famous _______ for the protection of dolphins.", ans: ["campaigner"], loc: "Đoạn B: 'Jones was a well-known campaigner against the killing of dolphins.'", exp: "Ông là nhà vận động ('campaigner')." },
      { q: "3. Orcas were trying to catch and hurt a group of _______", ans: ["grey whales"], loc: "Đoạn E: '...protecting migrating grey whales from attacks by orcas...'", exp: "Cá voi xám ('grey whales')." },
      { q: "4. The migrating whales were helped by _______", ans: ["humpback whales"], loc: "Đoạn E: 'a group of humpback whales who were protecting...'", exp: "Cá voi lưng gù ('humpback whales')." },
      { q: "5. The whole incident lasted more than _______", ans: ["seven hours", "7 hours"], loc: "Đoạn E: '...over a period of at least seven hours.'", exp: "Kéo dài hơn 7 giờ ('seven hours')." },
      { q: "6. Because of icy waters the diver was unable to _______", ans: ["move her legs"], loc: "Đoạn E: 'Yang Yun found she couldn't move her legs...'", exp: "Không cử động được chân ('move her legs')." },
      { q: "7. One whale saved her life by taking hold of her _______ and giving a push upward.", ans: ["leg"], loc: "Đoạn E: 'Mila gripped Yang Yun's leg in her mouth...'", exp: "Ngậm vào chân ('leg') để đẩy lên." }
    ],
    paraphraseTable: [
      { qWord: "videoing them", pWord: "was filming", note: "Quay phim, ghi hình" },
      { qWord: "famous campaigner", pWord: "well-known campaigner", note: "Nhà vận động nổi tiếng" },
      { qWord: "catch and hurt", pWord: "attacks", note: "Tấn công, làm hại" },
      { qWord: "travelling from one place to another", pWord: "migrating", note: "Di cư từ nơi này sang nơi khác" },
      { qWord: "taking hold of", pWord: "gripped in her mouth", note: "Ngoạm lấy, giữ chặt" }
    ],
    vocab: [
      { word: "pod of dolphins", type: "Cụm danh từ", ipa: "/pɑːd əv ˈdɑːlfɪnz/", def: "đàn cá heo", ex: "Four people were saved from a great white shark by a pod of dolphins.", viEx: "Bốn người đã được một đàn cá heo cứu khỏi một con cá mập trắng lớn." },
      { word: "famous", type: "Tính từ", ipa: "/ˈfeɪməs/", def: "nổi tiếng", ex: "Hardy Jones was famous for protecting dolphins.", viEx: "Hardy Jones nổi tiếng vì bảo vệ cá heo." },
      { word: "protection", type: "Danh từ", ipa: "/prəˈtekʃən/", def: "sự bảo vệ", ex: "Dolphins' protection of humans might not be just automatic.", viEx: "Việc cá heo bảo vệ con người có thể không chỉ đơn thuần là bản năng." },
      { word: "catch", type: "Động từ", ipa: "/kætʃ/", def: "bắt", ex: "Orcas tried to catch the whales.", viEx: "Những con cá voi sát thủ cố gắng bắt những con cá voi khác." },
      { word: "hurt", type: "Động từ", ipa: "/hɝːt/", def: "làm hại; làm bị thương", ex: "The shark wanted to hurt the swimmer.", viEx: "Con cá mập muốn làm hại người bơi." },
      { word: "travelling", type: "Động từ", ipa: "/ˈtrævəlɪŋ/", def: "di chuyển", ex: "The whales were travelling together.", viEx: "Những con cá voi đang di chuyển cùng nhau." },
      { word: "migrating whales", type: "Cụm danh từ", ipa: "/ˈmaɪɡreɪtɪŋ weɪlz/", def: "những con cá voi đang di cư", ex: "A group of humpback whales were protecting migrating grey whales.", viEx: "Một nhóm cá voi lưng gù đang bảo vệ những con cá voi xám di cư." },
      { word: "whole incident", type: "Cụm danh từ", ipa: "/hoʊl ˈɪnsɪdənt/", def: "toàn bộ sự việc", ex: "The whole incident lasted for many hours.", viEx: "Toàn bộ sự việc kéo dài nhiều giờ." },
      { word: "diver", type: "Danh từ", ipa: "/ˈdaɪvər/", def: "thợ lặn", ex: "A scuba diver was hit by a boat.", viEx: "Một thợ lặn bình dưỡng khí đã bị một chiếc thuyền đâm." },
      { word: "get to the surface", type: "Cụm động từ", ipa: "/ɡet tə ðə ˈsɝːfɪs/", def: "lên mặt nước", ex: "She couldn't get to the surface by herself.", viEx: "Cô ấy không thể tự mình lên mặt nước." },
      { word: "icy waters", type: "Cụm danh từ", ipa: "/ˈaɪsi ˈwɔːtərz/", def: "vùng nước băng giá", ex: "The diver was trapped in icy waters.", viEx: "Người thợ lặn bị mắc kẹt trong vùng nước băng giá." },
      { word: "unable to", type: "Cụm tính từ", ipa: "/ʌnˈeɪbl tə/", def: "không thể", ex: "Yang Yun found she couldn't move her legs.", viEx: "Yang Yun nhận ra cô ấy không thể cử động chân." },
      { word: "saved her life", type: "Cụm động từ", ipa: "/seɪvd hɚ laɪf/", def: "cứu sống cô ấy", ex: "Mila gripped Yang Yun's leg and saved her life.", viEx: "Mila ngoạm chân Yang Yun và cứu sống cô." },
      { word: "taking hold", type: "Cụm động từ", ipa: "/ˈteɪkɪŋ hoʊld/", def: "nắm lấy; giữ chặt", ex: "The dolphin was taking hold of the diver's leg.", viEx: "Con cá heo đang nắm lấy chân người thợ lặn." },
      { word: "push upwards", type: "Cụm động từ", ipa: "/pʊʃ ˈʌpwərdz/", def: "đẩy lên trên", ex: "The whale pushed the diver upwards.", viEx: "Con cá voi đẩy người thợ lặn lên trên." },
      { word: "came to his rescue", type: "Cụm động từ", ipa: "/keɪm tə hɪz ˈreskjuː/", def: "đến giải cứu anh ấy", ex: "Four dolphins came to his rescue and drove the shark away.", viEx: "Bốn con cá heo đã đến giải cứu anh ấy và đuổi cá mập đi." },
      { word: "campaigner", type: "Danh từ", ipa: "/kæmˈpeɪnər/", def: "nhà vận động", ex: "Jones was a well-known campaigner against the killing of dolphins.", viEx: "Jones là nhà vận động nổi tiếng chống giết hại cá heo." },
      { word: "killer whales", type: "Cụm danh từ", ipa: "/ˈkɪlər weɪlz/", def: "cá voi sát thủ", ex: "Migrating grey whales from attacks by orcas (killer whales).", viEx: "Những con cá voi xám di cư khỏi cuộc tấn công của cá voi sát thủ." },
      { word: "move her legs", type: "Cụm động từ", ipa: "/muːv hɚ leɡz/", def: "cử động chân", ex: "Yang Yun found she couldn't move her legs due to the freezing temperatures.", viEx: "Yang Yun nhận ra cô không thể cử động chân vì nhiệt độ đóng băng." },
      { word: "gripped", type: "Động từ", ipa: "/ɡrɪpt/", def: "giữ chặt; ngoạm chặt", ex: "Mila gripped Yang Yun's leg in her mouth.", viEx: "Mila ngoạm chặt chân của Yang Yun bằng miệng." },
      { word: "surface", type: "Danh từ", ipa: "/ˈsɝːfɪs/", def: "mặt nước; bề mặt", ex: "Pushed Yun to the surface, saving her life.", viEx: "Đẩy Yun lên mặt nước, cứu sống cô." }
    ]
  },
  {
    id: 5,
    part: "01. DẠNG BÀI SENTENCE COMPLETION",
    title: "Activity 5: THE MODERN ZOO",
    instruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    passage: [
      { en: "Until the late twentieth century, the main purpose of zoos was for entertainment. In 1959, famous wildlife expert Gerald Durrell opened the first zoo which put conservation of animals first.", vi: "Mục đích ban đầu là giải trí. Năm 1959 Gerald Durrell mở sở thú ưu tiên bảo tồn." },
      { en: "Nowadays zoos' aims are: conservation, education, entertainment, in that order. WAZA educates people and coordinates breeding programmes.", vi: "Mục tiêu hiện nay là bảo tồn, giáo dục và giải trí." },
      { en: "From the 1990s, zoos began saving threatened species like Siberian tigers and orangutans. Borneo Orangutan Rescue teaches orangutans how to live in the wild to return them to their natural habitats.", vi: "Đưa loài nguy cấp về môi trường tự nhiên (natural habitats). Học cách sinh tồn hoang dã (the wild)." },
      { en: "Zoos try to provide 'enrichment' for the animals to improve their wellbeing: climbing frames, feeding puzzles, and mixing compatible species.", vi: "Cung cấp sự phong phú (enrichment) để nâng cao chất lượng sống của muông thú." },
      { en: "In Indianapolis Zoo, there is a functional forest. In many zoos there are webcams in some enclosures so visitors can view animals from home.", vi: "Webcam giúp công chúng theo dõi các con vật từ nhà." }
    ],
    questions: [
      { q: "1. Before the 1990s, zoos existed mainly for _______", ans: ["entertainment"], loc: "Đoạn 1: 'the main purpose of zoos was for entertainment.'", exp: "Giải trí ('entertainment')." },
      { q: "2. The first zoo to focus on protecting animals was started by _______", ans: ["gerald durrell"], loc: "Đoạn 1: 'Gerald Durrell opened the first zoo which put conservation...'", exp: "Gerald Durrell." },
      { q: "3. Programmes aim to breed threatened animals and return them to their _______", ans: ["natural habitats"], loc: "Đoạn 3: '...reintroduce endangered species into their natural habitats.'", exp: "Môi trường sống tự nhiên ('natural habitats')." },
      { q: "4. But first the animals have to learn how to survive in the _______", ans: ["wild"], loc: "Đoạn 3: '...teaches orangutans how to live in the wild.'", exp: "Nơi hoang dã ('wild')." },
      { q: "5. Zoos offer animals _______ by making it challenging to find food and climb.", ans: ["enrichment"], loc: "Đoạn 4: 'Zoos try to provide enrichment for the animals...'", exp: "Biện pháp làm giàu môi trường sống ('enrichment')." },
      { q: "6. _______ enable the public to view zoo animals from their homes.", ans: ["webcams"], loc: "Đoạn 5: 'webcams in some enclosures so visitors can keep up...'", exp: "Webcam ('webcams')." }
    ],
    paraphraseTable: [
      { qWord: "focus on protecting animals", pWord: "put conservation first", note: "Tập trung bảo tồn muông thú" },
      { qWord: "return them to", pWord: "reintroduce into", note: "Tái thả về nơi cư trú tự nhiên" },
      { qWord: "view from their homes", pWord: "webcams in enclosures", note: "Xem qua máy quay tại gia" }
    ],
    vocab: [
      { word: "existed", type: "Động từ", ipa: "/ɪɡˈzɪstɪd/", def: "tồn tại", ex: "They existed to give people the chance to see animals.", viEx: "Các sở thú tồn tại để cho mọi người cơ hội ngắm nhìn động vật." },
      { word: "mainly", type: "Trạng từ", ipa: "/ˈmeɪnli/", def: "chủ yếu", ex: "Zoos were mainly for entertainment in the past.", viEx: "Trước đây, sở thú chủ yếu phục vụ mục đích giải trí." },
      { word: "focus on", type: "Cụm động từ", ipa: "/ˈfoʊkəs ɑːn/", def: "tập trung vào", ex: "Each zoo focuses on a small number of species.", viEx: "Mỗi sở thú tập trung vào một số ít loài động vật." },
      { word: "protecting", type: "Động từ", ipa: "/prəˈtektɪŋ/", def: "bảo vệ", ex: "They now play an important role in protecting animals.", viEx: "Ngày nay, các sở thú đóng vai trò quan trọng trong việc bảo vệ động vật." },
      { word: "introduced", type: "Động từ", ipa: "/ˌɪntrəˈduːst/", def: "triển khai; giới thiệu", ex: "Many zoos introduced new breeding programmes.", viEx: "Nhiều sở thú đã triển khai các chương trình nhân giống mới." },
      { word: "programmes", type: "Danh từ số nhiều", ipa: "/ˈproʊɡræmz/", def: "chương trình", ex: "It also helps to coordinate breeding programmes.", viEx: "Tổ chức này cũng giúp điều phối các chương trình nhân giống." },
      { word: "aim", type: "Danh từ", ipa: "/eɪm/", def: "mục tiêu", ex: "Often the aim is to reintroduce endangered species.", viEx: "Mục tiêu thường là tái thả các loài có nguy cơ tuyệt chủng." },
      { word: "breed threatened animals", type: "Cụm động từ", ipa: "/briːd ˈθretn̩d ˈænɪməlz/", def: "nhân giống các loài bị đe dọa", ex: "Many zoos breed threatened animals to protect them.", viEx: "Nhiều sở thú nhân giống các loài động vật bị đe dọa để bảo tồn." },
      { word: "survive", type: "Động từ", ipa: "/sɚˈvaɪv/", def: "sinh tồn", ex: "Young animals must learn how to survive in the wild.", viEx: "Những con vật non phải học cách sinh tồn trong tự nhiên." },
      { word: "challenging", type: "Tính từ", ipa: "/ˈtʃælɪndʒɪŋ/", def: "mang tính thử thách", ex: "The activities are challenging for the animals.", viEx: "Các hoạt động này mang tính thử thách đối với động vật." },
      { word: "climbing equipment", type: "Cụm danh từ", ipa: "/ˈklaɪmɪŋ ɪˈkwɪpmənt/", def: "thiết bị leo trèo", ex: "The zoo provides climbing equipment for monkeys.", viEx: "Sở thú cung cấp các thiết bị leo trèo cho khỉ." },
      { word: "species", type: "Danh từ", ipa: "/ˈspiːʃiːz/", def: "loài", ex: "Each zoo focuses on a small number of species.", viEx: "Mỗi sở thú tập trung vào một số ít loài động vật." },
      { word: "enable", type: "Động từ", ipa: "/ɪˈneɪbl/", def: "cho phép", ex: "Webcams enable people to see animals from home.", viEx: "Camera trực tuyến cho phép mọi người quan sát động vật tại nhà." },
      { word: "public", type: "Danh từ", ipa: "/ˈpʌblɪk/", def: "công chúng", ex: "Technology has been used to engage the public.", viEx: "Công nghệ được dùng để thu hút công chúng quan tâm hơn." },
      { word: "view", type: "Động từ", ipa: "/vjuː/", def: "xem; quan sát", ex: "People can view zoo animals from their homes.", viEx: "Mọi người có thể quan sát động vật trong sở thú ngay từ nhà." },
      { word: "entertainment", type: "Danh từ", ipa: "/ˌentərˈteɪnmənt/", def: "sự giải trí", ex: "Until the late twentieth century, the main purpose was entertainment.", viEx: "Cho đến cuối thế kỷ 20, mục đích chính là phục vụ giải trí." },
      { word: "conservation", type: "Danh từ", ipa: "/ˌkɑːnsərˈveɪʃn/", def: "sự bảo tồn", ex: "Put conservation of animals first.", viEx: "Đặt việc bảo tồn động vật lên hàng đầu." },
      { word: "breeding programmes", type: "Cụm danh từ", ipa: "/ˈbriːdɪŋ ˈproʊɡræmz/", def: "chương trình nhân giống", ex: "Saved through breeding programmes run by zoos.", viEx: "Được cứu nhờ các chương trình nhân giống của sở thú." },
      { word: "reintroduce", type: "Động từ", ipa: "/ˌriːˌɪntrəˈduːs/", def: "tái thả tự nhiên", ex: "The aim is to reintroduce endangered species into their natural habitats.", viEx: "Mục tiêu là tái thả các loài nguy cấp về môi trường sống tự nhiên." },
      { word: "endangered species", type: "Cụm danh từ", ipa: "/ɪnˈdeɪndʒərd ˈspiːʃiːz/", def: "loài có nguy cơ tuyệt chủng", ex: "Protect endangered species from extinction.", viEx: "Bảo vệ các loài có nguy cơ tuyệt chủng khỏi sự biến mất." },
      { word: "natural habitats", type: "Cụm danh từ", ipa: "/ˈnætʃrəl ˈhæbɪtæts/", def: "môi trường sống tự nhiên", ex: "Return them to their natural habitats.", viEx: "Đưa chúng trở lại môi trường sống tự nhiên." },
      { word: "the wild", type: "Cụm danh từ", ipa: "/ðə waɪld/", def: "môi trường hoang dã", ex: "Teaches orangutans how to live in the wild.", viEx: "Dạy đười ươi cách sinh sống ngoài tự nhiên." },
      { word: "enrichment", type: "Danh từ", ipa: "/ɪnˈrɪtʃmənt/", def: "hoạt động làm phong phú", ex: "Provide enrichment for the animals to improve wellbeing.", viEx: "Cung cấp hoạt động làm phong phú môi trường sống để cải thiện sức khỏe thú." },
      { word: "webcams", type: "Danh từ số nhiều", ipa: "/ˈwebˌkæmz/", def: "camera trực tuyến", ex: "In many zoos there are webcams in some enclosures.", viEx: "Nhiều sở thú có lắp camera trực tuyến trong các khu chuồng." },
      { word: "enclosures", type: "Danh từ số nhiều", ipa: "/ɪnˈkloʊʒərz/", def: "khu chuồng nuôi nhốt", ex: "Visitors can view animals in their enclosures.", viEx: "Du khách có thể ngắm các loài vật trong khu chuồng của chúng." }
    ]
  },
  {
    id: 6,
    part: "02. DẠNG BÀI SUMMARY COMPLETION",
    title: "Activity 6: UNUSUAL SPORTS",
    instruction: "Complete summary: [A boring, B change, C clever, D feature, E horses, F join, G mixed, H moving, I serious, J sport, K strange, L trampolines]",
    passage: [
      { en: "There are plenty of new and unusual sports out there... mix of existing sports, with a local element added. Bossaball, buzkashi on horseback, chess boxing mixing brains and brawn where you switch quickly.", vi: "Các môn thể thao lạ kết hợp nhiều yếu tố..." }
    ],
    questions: [
      { q: "1. You can try a number of [1] _______ new sports.", ans: ["k", "strange", "k (strange)"], loc: "unusual sports -> strange", exp: "K (strange) đồng nghĩa với unusual." },
      { q: "2. Some of these were created when people [2] _______ two well-known sports.", ans: ["g", "mixed", "g (mixed)"], loc: "a mix of existing sports -> mixed", exp: "G (mixed): nhào trộn." },
      { q: "3. Sometimes they added a [3] _______ from their world.", ans: ["d", "feature", "d (feature)"], loc: "local element added -> feature", exp: "D (feature): nét đặc trưng." },
      { q: "4. Buzkashi is played on [4] _______", ans: ["e", "horses", "e (horses)"], loc: "on horseback -> on horses", exp: "E (horses): trên lưng ngựa." },
      { q: "5. In chess boxing you need to [5] _______ rapidly.", ans: ["b", "change", "b (change)"], loc: "switch quickly -> change rapidly", exp: "B (change): thay đổi mau chóng." },
      { q: "6. You need to be [6] _______ and also fit.", ans: ["c", "clever", "c (clever)"], loc: "mix of brains and brawn -> clever", exp: "C (clever): khôn ngoan, trí tuệ." }
    ],
    paraphraseTable: [
      { qWord: "unusual", pWord: "strange", note: "Mới lạ, kỳ lạ" },
      { qWord: "combine / a mix", pWord: "mixed", note: "Kết hợp, nhào trộn" },
      { qWord: "local element", pWord: "feature", note: "Yếu tố, đặc điểm" },
      { qWord: "on horseback", pWord: "on horses", note: "Trên lưng ngựa" },
      { qWord: "switch quickly", pWord: "change rapidly", note: "Chuyển trạng thái mau lẹ" },
      { qWord: "brains", pWord: "clever", note: "Đầu óc / thông minh" }
    ],
    vocab: [
      { word: "get bored with", type: "Cụm động từ", ipa: "/ɡet bɔːrd wɪð/", def: "chán ngấy; chán", ex: "Do you ever get bored with the same old sports?", viEx: "Bạn có bao giờ cảm thấy chán những môn thể thao quen thuộc không?" },
      { word: "same old sports", type: "Cụm danh từ", ipa: "/seɪm oʊld spɔːrts/", def: "môn thể thao cũ kỹ", ex: "Tired of the same old sports.", viEx: "Chán những môn thể thao quen thuộc cũ kỹ." },
      { word: "tired of", type: "Cụm tính từ", ipa: "/ˈtaɪərd əv/", def: "chán", ex: "Tired of tennis, fed up with football.", viEx: "Chán quần vợt, ngán bóng đá." },
      { word: "unusual sports", type: "Cụm danh từ", ipa: "/ʌnˈjuːʒuəl spɔːrts/", def: "những môn thể thao độc đáo", ex: "Plenty of new and unusual sports to try.", viEx: "Rất nhiều môn thể thao độc đáo mới lạ để thử." },
      { word: "local element", type: "Cụm danh từ", ipa: "/ˈloʊkl ˈelɪmənt/", def: "yếu tố địa phương", ex: "With a local element added.", viEx: "Được bổ sung thêm yếu tố địa phương." },
      { word: "horseback", type: "Danh từ", ipa: "/ˈhɔːrsbæk/", def: "lưng ngựa", ex: "Players on horseback trying to get hold of a dead goat.", viEx: "Người chơi trên lưng ngựa tranh giành con dê chết." },
      { word: "dead goat", type: "Cụm danh từ", ipa: "/ded ɡoʊt/", def: "con dê chết", ex: "Get hold of a dead goat.", viEx: "Giành lấy một con dê chết." },
      { word: "Olympic status", type: "Cụm danh từ", ipa: "/əˈlɪmpɪk ˈsteɪtəs/", def: "tư cách môn Olympic", ex: "Hope to get Olympic status for the sport.", viEx: "Hy vọng môn này được công nhận là môn thi đấu Olympic." },
      { word: "switch quickly", type: "Cụm động từ", ipa: "/swɪtʃ ˈkwɪkli/", def: "chuyển đổi nhanh chóng", ex: "Be able to switch quickly between the two.", viEx: "Có khả năng chuyển đổi nhanh chóng giữa hai môn." },
      { word: "brawn", type: "Danh từ", ipa: "/brɔːn/", def: "sức mạnh cơ bắp", ex: "A classic mix of brains and brawn.", viEx: "Sự kết hợp kinh điển giữa trí tuệ và cơ bắp." }
    ]
  },
  {
    id: 7,
    part: "02. DẠNG BÀI SUMMARY COMPLETION",
    title: "Activity 7: Parkour",
    instruction: "Complete summary using words A-M.",
    passage: [
      { en: "Parkour is based on obstacle training: running, climbing, jumping... Traceurs believe parkour can never be a competitive sport. Practicing in limited gyms conflicts with freedom. Freerunning focuses more on the individual.", vi: "Parkour là môn vượt chướng ngại vật chú trọng phát triển cá nhân..." }
    ],
    questions: [
      { q: "9. Parkour involves [9] _______ in many ways.", ans: ["h", "moving", "h (moving)"], loc: "how you move -> moving", exp: "H (moving)." },
      { q: "10. People who practise are called [10] _______", ans: ["m", "traceurs", "m (traceurs)"], loc: "traceurs", exp: "M (traceurs)." },
      { q: "11. Can never be part of a [11] _______", ans: ["c", "competition", "c (competition)"], loc: "competitive sport -> competition", exp: "C (competition)." },
      { q: "12. Values are adaptability, [12] _______ and freedom.", ans: ["e", "creativity", "e (creativity)"], loc: "creative -> creativity", exp: "E (creativity)." },
      { q: "13. Overcoming [13] _______", ans: ["b", "barriers", "b (barriers)"], loc: "getting over barriers", exp: "B (barriers)." },
      { q: "14. Gyms [14] _______ with the discipline's values.", ans: ["d", "conflicts", "d (conflicts)"], loc: "conflicts with values", exp: "D (conflicts)." },
      { q: "15. Freerunning is more about [15] _______ development.", ans: ["i", "personal", "i (personal)"], loc: "focus on individual -> personal", exp: "I (personal)." }
    ],
    paraphraseTable: [
      { qWord: "how you move", pWord: "moving", note: "Cách thức vận động" },
      { qWord: "competitive sport", pWord: "competition", note: "Cuộc thi đấu ganh đua" },
      { qWord: "be creative", pWord: "creativity", note: "Tính sáng tạo" },
      { qWord: "get over barriers", pWord: "overcoming barriers", note: "Vượt qua rào cản" },
      { qWord: "focus on individual", pWord: "personal development", note: "Phát triển cá nhân" }
    ],
    vocab: [
      { word: "adaptability", type: "Danh từ", ipa: "/əˌdæptəˈbɪləti/", def: "khả năng thích nghi", ex: "Parkour teaches adaptability in different situations.", viEx: "Parkour rèn luyện khả năng thích nghi trong nhiều tình huống." },
      { word: "freedom", type: "Danh từ", ipa: "/ˈfriːdəm/", def: "sự tự do", ex: "It is about freedom and self-expression.", viEx: "Đó là về sự tự do và thể hiện bản thân." },
      { word: "overcoming", type: "Động từ", ipa: "/ˌoʊvərˈkʌmɪŋ/", def: "vượt qua", ex: "Overcoming physical and mental barriers.", viEx: "Vượt qua rào cản thể chất và tinh thần." },
      { word: "discipline", type: "Danh từ", ipa: "/ˈdɪsəplɪn/", def: "bộ môn; kỷ luật", ex: "Parkour is more than a sport discipline.", viEx: "Parkour không chỉ đơn thuần là một bộ môn thể thao." },
      { word: "barriers", type: "Danh từ số nhiều", ipa: "/ˈbæriərz/", def: "rào cản", ex: "Getting over mental as well as physical barriers.", viEx: "Vượt qua rào cản tinh thần cũng như thể chất." },
      { word: "conflicts", type: "Động từ", ipa: "/kənˈflɪkts/", def: "mâu thuẫn; đi ngược lại", ex: "Conflicts with the values of parkour.", viEx: "Đi ngược lại các giá trị của parkour." },
      { word: "creativity", type: "Danh từ", ipa: "/ˌkriːeɪˈtɪvəti/", def: "sự sáng tạo", ex: "Parkour encourages creativity.", viEx: "Parkour khuyến khích sự sáng tạo." },
      { word: "obstacle", type: "Danh từ", ipa: "/ˈɑːbstəkəl/", def: "chướng ngại vật", ex: "Based on military obstacle course training.", viEx: "Dựa trên việc huấn luyện vượt chướng ngại vật quân đội." },
      { word: "self-expression", type: "Danh từ", ipa: "/ˌself ɪkˈspreʃn/", def: "sự thể hiện bản thân", ex: "It is about freedom and self-expression.", viEx: "Đó là về sự tự do và thể hiện bản thân." }
    ]
  },
  {
    id: 8,
    part: "03. DẠNG BÀI TRUE/FALSE/NOT GIVEN",
    title: "Activity 8: UNUSUAL SPORTS (TFNG)",
    instruction: "Write TRUE, FALSE or NOT GIVEN.",
    passage: [
      { en: "Bossaball is played on an inflatable pitch. Buzkashi hopes to get Olympic status. Kabaddi is similar in some ways to tag. First chess boxing championship in 2003 was won by a Dutchman, Iepe Rubingh. Roshambo is taken so seriously with world championships.", vi: "Bossaball chơi trên sân bơm hơi..." }
    ],
    questions: [
      { q: "1. People play bossaball on a soft surface.", ans: ["true"], loc: "inflatable pitch -> soft surface", exp: "TRUE: Sân bơm hơi là mặt đệm mềm." },
      { q: "2. Buzkashi is an Olympic sport.", ans: ["false"], loc: "hopes to get Olympic status", exp: "FALSE: Chưa được vào Olympic." },
      { q: "3. Kabaddi is often played in schools.", ans: ["not given"], loc: "Chỉ so với trò tag trẻ con chơi.", exp: "NOT GIVEN: Không khẳng định hay chơi ở trường." },
      { q: "4. Iepe Rubingh invented chess boxing.", ans: ["not given"], loc: "Chỉ nêu anh thắng giải năm 2003.", exp: "NOT GIVEN: Không nói ai phát minh." },
      { q: "5. Iepe Rubingh is from Germany.", ans: ["false"], loc: "Dutchman -> người Hà Lan", exp: "FALSE: Người Hà Lan, không phải Đức." },
      { q: "6. People consider roshambo a serious sport.", ans: ["true"], loc: "taken so seriously", exp: "TRUE: Được coi trọng tổ chức giải nghiêm túc." }
    ],
    paraphraseTable: [
      { qWord: "soft surface", pWord: "inflatable pitch", note: "Bề mặt mềm / sân bơm hơi" },
      { qWord: "Olympic sport", pWord: "get Olympic status", note: "Môn thể thao Olympic" },
      { qWord: "from Germany", pWord: "a Dutchman", note: "Quốc tịch Đức / người Hà Lan" }
    ],
    vocab: [
      { word: "soft surface", type: "Cụm danh từ", ipa: "/sɔːft ˈsɝːfɪs/", def: "bề mặt mềm", ex: "Bossaball is played on a soft surface.", viEx: "Bossaball được chơi trên một bề mặt mềm." },
      { word: "inflatable pitch", type: "Cụm danh từ", ipa: "/ɪnˈfleɪtəbl pɪtʃ/", def: "sân bơm hơi", ex: "Played on an inflatable pitch with a trampoline.", viEx: "Chơi trên sân bơm hơi có bạt nhún lò xo." },
      { word: "trampoline", type: "Danh từ", ipa: "/ˈtræmpəliːn/", def: "tấm bạt lò xo", ex: "With a trampoline in the middle.", viEx: "Có bạt lò xo ở chính giữa." },
      { word: "Dutchman", type: "Danh từ", ipa: "/ˈdʌtʃmən/", def: "người Hà Lan", ex: "Won by a Dutchman, Iepe Rubingh.", viEx: "Giành chiến thắng bởi người Hà Lan Iepe Rubingh." },
      { word: "taken so seriously", type: "Cụm động từ", ipa: "/ˈteɪkən soʊ ˈsɪriəsli/", def: "được coi là rất nghiêm túc", ex: "Surprising that it is called a sport and taken so seriously.", viEx: "Đáng ngạc nhiên khi nó được gọi là môn thể thao và xem trọng đến vậy." }
    ]
  },
  {
    id: 9,
    part: "03. DẠNG BÀI TRUE/FALSE/NOT GIVEN",
    title: "Activity 9: Parkour (TFNG)",
    instruction: "Write TRUE, FALSE or NOT GIVEN.",
    passage: [
      { en: "No limits on how you move. Developed in France in the 1980s (20th century). Yamakasi: members had to arrive on time. Raymond Belle: always take the more difficult road. The founder refused to teach moves. Freerunning and parkour have more similarities than differences.", vi: "Parkour ra đời thập niên 1980 ở Pháp..." }
    ],
    questions: [
      { q: "1. You have to use a limited number of moves in parkour.", ans: ["false"], loc: "No limits on how you move", exp: "FALSE: Không có giới hạn." },
      { q: "2. Parkour is mainly done in the countryside.", ans: ["not given"], loc: "Không đề cập miền quê.", exp: "NOT GIVEN: Không có thông tin." },
      { q: "3. Parkour began in the twentieth century.", ans: ["true"], loc: "1980s -> 20th century", exp: "TRUE: Năm 1980 thuộc thế kỷ 20." },
      { q: "4. The Yamakasi did not allow latecomers.", ans: ["true"], loc: "had to arrive on time", exp: "TRUE: Cấm đi trễ." },
      { q: "5. Raymond Belle recommends you always choose easier route.", ans: ["false"], loc: "always take the more difficult one", exp: "FALSE: Khuyên chọn đường khó." },
      { q: "6. There are many gyms in France where you can do parkour.", ans: ["not given"], loc: "Chỉ nói chung chung some gyms.", exp: "NOT GIVEN: Không rõ số lượng tại Pháp." },
      { q: "7. The founder was a very good teacher.", ans: ["not given"], loc: "refused to teach", exp: "NOT GIVEN: Từ chối dạy, không xét năng lực dạy." },
      { q: "8. Freerunning and parkour are similar.", ans: ["true"], loc: "more similarities than differences", exp: "TRUE: Rất tương đồng." }
    ],
    paraphraseTable: [
      { qWord: "limited number of moves", pWord: "no limits on how you move", note: "Giới hạn / không hạn chế cử động" },
      { qWord: "did not allow latecomers", pWord: "had to arrive on time", note: "Cấm trễ / phải đến đúng giờ" },
      { qWord: "choose easier route", pWord: "take the more difficult one", note: "Chọn đường dễ / đi lối khó" },
      { qWord: "are similar", pWord: "more similarities than differences", note: "Tương đồng nhau" }
    ],
    vocab: [
      { word: "strict rules", type: "Cụm danh từ", ipa: "/strɪkt ruːlz/", def: "các quy tắc nghiêm ngặt", ex: "In the Yamakasi, there were strict rules.", viEx: "Trong nhóm Yamakasi có những quy tắc rất nghiêm ngặt." },
      { word: "arrive on time", type: "Cụm động từ", ipa: "/əˈraɪv ɑːn taɪm/", def: "đến đúng giờ", ex: "Members had to arrive on time.", viEx: "Các thành viên phải đến đúng giờ." },
      { word: "make excuses", type: "Cụm động từ", ipa: "/meɪk ɪkˈskjuːsɪz/", def: "viện cớ, bào chữa", ex: "Not allowed to complain or make excuses.", viEx: "Không được phép phàn nàn hay viện cớ." },
      { word: "refused to teach", type: "Cụm động từ", ipa: "/rɪˈfjuːzd tə tiːtʃ/", def: "từ chối dạy", ex: "The founder refused to teach people how to do moves.", viEx: "Người sáng lập từ chối dạy các động tác." },
      { word: "similarities", type: "Danh từ số nhiều", ipa: "/ˌsɪməˈlerətiz/", def: "những điểm tương đồng", ex: "More similarities than differences between the two.", viEx: "Nhiều điểm tương đồng hơn là khác biệt giữa hai môn." }
    ]
  },
  {
    id: 10,
    part: "03. DẠNG BÀI TRUE/FALSE/NOT GIVEN",
    title: "Activity 10: BECOME RICH AND FAMOUS",
    instruction: "Write YES, NO or NOT GIVEN.",
    passage: [
      { en: "In the past you needed talent. Creating your own blog is possibly the best way to become internet famous. Facebook won't last for fame. Learning vines helps achieve fame.", vi: "Xưa kia cần tài năng để nổi tiếng..." }
    ],
    questions: [
      { q: "1. Before internet you didn't need special skills to become famous.", ans: ["no"], loc: "needed a talent", exp: "NO: Xưa kia bắt buộc phải có tài năng." },
      { q: "2. If you choose specialist subject, more likely to get known.", ans: ["not given"], loc: "Chỉ là một gợi ý.", exp: "NOT GIVEN: Không so sánh tỷ lệ nổi tiếng." },
      { q: "3. Having own blog is an excellent way to find fame.", ans: ["yes"], loc: "blog is the best way", exp: "YES: Blog là kênh tuyệt vời nhất." },
      { q: "4. You can get famous easily through Facebook.", ans: ["no"], loc: "not for those who want to be famous", exp: "NO: Facebook không dễ để nổi danh." },
      { q: "5. It is not worth the effort to get famous through Twitter.", ans: ["not given"], loc: "Không có nhận định này.", exp: "NOT GIVEN: Tác giả không nói không đáng công." },
      { q: "6. Learning to make 'vines' could help you become famous.", ans: ["yes"], loc: "Learn to create vines... achieve fame", exp: "YES: Làm vine giúp đạt danh tiếng." }
    ],
    paraphraseTable: [
      { qWord: "special skills", pWord: "a talent", note: "Kỹ năng đặc biệt / tài năng" },
      { qWord: "excellent way", pWord: "the best way", note: "Phương thức xuất sắc / tốt nhất" },
      { qWord: "get famous easily", pWord: "not for those who want to be famous", note: "Dễ nổi tiếng" }
    ],
    vocab: [
      { word: "special skills", type: "Cụm danh từ", ipa: "/ˈspeʃəl skɪlz/", def: "kỹ năng đặc biệt", ex: "In the past, you needed a talent.", viEx: "Trước đây, bạn cần có tài năng đặc biệt." },
      { word: "own blog", type: "Cụm danh từ", ipa: "/oʊn blɑːɡ/", def: "blog cá nhân", ex: "Creating your own blog is the best way to become famous.", viEx: "Tạo blog cá nhân là cách tốt nhất để nổi tiếng." },
      { word: "current affairs", type: "Cụm danh từ", ipa: "/ˌkɝːənt əˈferz/", def: "thời sự", ex: "News and current affairs.", viEx: "Tin tức và các vấn đề thời sự." },
      { word: "raising money", type: "Cụm động từ", ipa: "/ˈreɪzɪŋ ˈmʌni/", def: "gây quỹ", ex: "Raising money for a charity.", viEx: "Gây quỹ cho một tổ chức từ thiện." },
      { word: "good platform", type: "Cụm danh từ", ipa: "/ɡʊd ˈplætfɔːrm/", def: "nền tảng tốt", ex: "Facebook is a good platform to make money.", viEx: "Facebook là nền tảng tốt để kiếm tiền." },
      { word: "achieve the fame", type: "Cụm động từ", ipa: "/əˈtʃiːv ðə feɪm/", def: "đạt được sự nổi tiếng", ex: "You can achieve the fame you've always dreamed of.", viEx: "Bạn có thể đạt được danh tiếng mà mình hằng mơ ước." }
    ]
  },
  {
    id: 11,
    part: "03. DẠNG BÀI TRUE/FALSE/NOT GIVEN",
    title: "Activity 11: Famous animals (YES/NO/NG)",
    instruction: "Write YES, NO or NOT GIVEN.",
    passage: [
      { en: "Animals have personality and talents. Ueno died suddenly. Railway staff gradually gave treats. Knut suffered without mother and contact. Born Free does important work. Humans benefit from fame, not animals.", vi: "Động vật có cá tính riêng. Hachiko đợi chủ mất đột ngột..." }
    ],
    questions: [
      { q: "8. All animals are very much the same.", ans: ["no"], loc: "each have own personality", exp: "NO: Mỗi con một tính cách riêng." },
      { q: "9. There are many reasons why animals are remembered.", ans: ["yes"], loc: "Some through films... work...", exp: "YES: Rất nhiều lý do." },
      { q: "10. Ueno died after a long illness.", ans: ["no"], loc: "died suddenly", exp: "NO: Mất đột ngột." },
      { q: "11. After some time, railway staff were kind to Hachiko.", ans: ["yes"], loc: "gradually people gave food", exp: "YES: Dần dần mọi người đối tốt." },
      { q: "12. Songs written about Knut were very popular.", ans: ["not given"], loc: "Chỉ nói có bài hát.", exp: "NOT GIVEN: Không nói bài hát có nổi không." },
      { q: "13. Knut had a happy life because of fame.", ans: ["no"], loc: "suffered in short life", exp: "NO: Knut sống buồn bã khổ sở." },
      { q: "14. The Adamsons made money from Elsa.", ans: ["not given"], loc: "Không đề cập thu lợi.", exp: "NOT GIVEN: Không có thông tin." },
      { q: "15. Born Free Foundation does useful work.", ans: ["yes"], loc: "important work includes...", exp: "YES: Làm nhiều việc thiết thực." },
      { q: "16. Famous animals get many advantages from fame.", ans: ["no"], loc: "humans benefit, not animals", exp: "NO: Động vật không hưởng lợi." }
    ],
    paraphraseTable: [
      { qWord: "very much the same", pWord: "each have own personality", note: "Rất giống nhau / cá tính riêng" },
      { qWord: "died after long illness", pWord: "died suddenly", note: "Mất sau bệnh dài / mất đột ngột" },
      { qWord: "were kind to", pWord: "gave food and treats", note: "Đối đãi tử tế / cho ăn thức ngon" },
      { qWord: "useful work", pWord: "important work", note: "Công việc hữu ích, quan trọng" },
      { qWord: "get many advantages", pWord: "benefit from that fame", note: "Thu lợi / hưởng ưu thế" }
    ],
    vocab: [
      { word: "commemorate", type: "Động từ", ipa: "/kəˈmem.ə.reɪt/", def: "tưởng niệm, làm lễ kỷ niệm", ex: "Ceremony to commemorate him at the railway station.", viEx: "Buổi lễ tưởng niệm chú chó tại nhà ga." },
      { word: "substantial", type: "Tính từ", ipa: "/səbˈstæn.ʃəl/", def: "đáng kể, to lớn", ex: "The zoo made substantial amounts of money.", viEx: "Sở thú đã kiếm được khoản tiền đáng kể." }
    ]
  },
  {
    id: 12,
    part: "04. DẠNG BÀI SHORT ANSWER QUESTIONS",
    title: "Activity 12: SOCIAL MEDIA & FRIENDSHIP",
    instruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
    passage: [
      { en: "Social media has helped expand friendships. People are geographically mobile nowadays. Workers have less security at work making it harder to build relations. Young children choose friends because of convenience. Friends reduce mental health problems.", vi: "Mạng xã hội giúp mở rộng kết bạn. Người ta dịch chuyển địa lý nhiều hơn..." }
    ],
    questions: [
      { q: "1. What has enabled people to have more friends than in the past?", ans: ["social media"], loc: "social media has helped us expand", exp: "Mạng xã hội ('social media')." },
      { q: "2. What phrase describes people who don't stay in the same place?", ans: ["geographically mobile"], loc: "more geographically mobile nowadays", exp: "'geographically mobile'." },
      { q: "3. What work-related problem makes them less likely to form friendships?", ans: ["less security"], loc: "less security at work", exp: "Sự bấp bênh ('less security')." },
      { q: "4. What frequently influences friendships of young children?", ans: ["convenience"], loc: "because of convenience", exp: "Sự tiện lợi ('convenience')." },
      { q: "5. What are people with friends less likely to suffer from?", ans: ["mental health problems"], loc: "fewer mental health problems", exp: "Bệnh tâm thần ('mental health problems')." }
    ],
    paraphraseTable: [
      { qWord: "enabled to have more friends", pWord: "helped expand friendships", note: "Giúp kết thêm nhiều bạn bè" },
      { qWord: "don't stay in the same place", pWord: "geographically mobile", note: "Di chuyển liên tục / linh hoạt địa lý" },
      { qWord: "influences friendships", pWord: "choose friends because of", note: "Ảnh hưởng tới việc chọn bạn" },
      { qWord: "less likely to suffer from", pWord: "have fewer problems", note: "Ít nguy cơ mắc phải" }
    ],
    vocab: [
      { word: "convenience", type: "Danh từ", ipa: "/kənˈviː.ni.əns/", def: "sự thuận tiện, tiện lợi", ex: "Young children choose friends because of convenience.", viEx: "Trẻ nhỏ chọn bạn vì sự thuận tiện." },
      { word: "geographically mobile", type: "Cụm tính từ", ipa: "/ˌdʒiː.əˈɡræf.ɪ.kəl.i ˈmoʊ.bəl/", def: "dễ dàng dịch chuyển địa lý", ex: "People are more geographically mobile nowadays.", viEx: "Ngày nay con người có xu hướng dịch chuyển địa lý nhiều hơn." }
    ]
  },
  {
    id: 13,
    part: "05. DẠNG BÀI MATCHING SENTENCE ENDINGS",
    title: "Activity 13: OUR FRIENDS AND PROTECTORS",
    instruction: "Complete each sentence with correct ending (a-h).",
    passage: [
      { en: "Dolphins understand humans are similar. Shark attacked Hardy Jones -> drove shark away. Swimmer left ring because he had not seen shark. Dolphin nudged Trevino to encourage him. We should protect them.", vi: "Cá heo nhận thấy con người tương đồng..." }
    ],
    questions: [
      { q: "1. Dolphins may protect humans _______", ans: ["d"], loc: "humans are similar to them -> d", exp: "1 - d: Vì thấy con người giống chúng." },
      { q: "2. Dolphins swam towards Hardy Jones _______", ans: ["g"], loc: "shark ready to attack -> g", exp: "2 - g: Vì cá mập sắp tấn công ông." },
      { q: "3. Swimmer tried to leave protective ring _______", ans: ["f"], loc: "had not yet seen shark -> f", exp: "3 - f: Vì chưa thấy cá mập." },
      { q: "4. A dolphin nudged Joey Trevino _______", ans: ["b"], loc: "pushed as if say don't give up -> b", exp: "4 - b: Động viên đừng nản lòng." },
      { q: "5. Dolphins and whales help us _______", ans: ["a"], loc: "reason for us to protect them -> a", exp: "5 - a: Nên chúng ta cần bảo vệ chúng." }
    ],
    paraphraseTable: [
      { qWord: "recognise that humans are similar", pWord: "understand humans are similar", note: "Nhận thức con người tương đồng" },
      { qWord: "nudged", pWord: "gently pushed", note: "Huých nhẹ / đẩy khẽ" },
      { qWord: "not lose hope", pWord: "don't give up", note: "Không đánh mất hy vọng / đừng từ bỏ" }
    ],
    vocab: [
      { word: "nudge", type: "Động từ", ipa: "/nʌdʒ/", def: "huých nhẹ, đẩy khẽ", ex: "A dolphin nudged Joey Trevino gently.", viEx: "Một chú cá heo đã huých nhẹ Joey Trevino." }
    ]
  },
  {
    id: 14,
    part: "05. DẠNG BÀI MATCHING SENTENCE ENDINGS",
    title: "Activity 14: THE MODERN ZOO",
    instruction: "Complete each sentence with correct ending A-H.",
    passage: [
      { en: "Early zoo belonged to royalty (private collection). WAZA educates and coordinates. Borneo rescues orangutans to return to wild. Colchester has several species together. Indianapolis has functional forest.", vi: "Sở thú hoàng gia là bộ sưu tập cá nhân..." }
    ],
    questions: [
      { q: "7. The first zoo _______", ans: ["h"], loc: "belonged to royalty -> H", exp: "7 - H: Bộ sưu tập cá nhân hoàng tộc." },
      { q: "8. WAZA _______", ans: ["g"], loc: "educates and coordinates -> G", exp: "8 - G: Giáo dục và kết nối vườn thú." },
      { q: "9. Borneo Orangutan Rescue _______", ans: ["d"], loc: "teaches orangutans live in wild -> D", exp: "9 - D: Tập thả đười ươi về tự nhiên." },
      { q: "10. Colchester Zoo _______", ans: ["e"], loc: "several species together -> E", exp: "10 - E: Không tách biệt các loài thú." },
      { q: "11. Indianapolis Zoo _______", ans: ["a"], loc: "functional forest like Indonesia -> A", exp: "11 - A: Tái hiện sinh cảnh rừng." }
    ],
    paraphraseTable: [
      { qWord: "private collection", pWord: "belonged to royalty", note: "Bộ sưu tập tư nhân của hoàng gia" },
      { qWord: "not always separate", pWord: "several species live together", note: "Không chia tách / sống cùng nhau" },
      { qWord: "copies natural habitat", pWord: "functional forest", note: "Tái hiện môi trường tự nhiên" }
    ],
    vocab: [
      { word: "functional forest", type: "Cụm danh từ", ipa: "/ˈfʌŋk.ʃən.əl ˈfɔːr.ɪst/", def: "khu rừng chức năng mô phỏng", ex: "A functional forest called the Hutan trail.", viEx: "Một khu rừng chức năng mang tên đường mòn Hutan." }
    ]
  },
  {
    id: 15,
    part: "06. DẠNG BÀI MATCHING FEATURES",
    title: "Activity 15: FAMOUS ANIMALS (Matching)",
    instruction: "Choose animal [A Hachiko, B Knut, C Elsa].",
    passage: [
      { en: "Hachiko waited 10 years, ceremony held every year. Knut made 5 million euros, had toys, suffered without mother. Elsa lived in wild, Born Free started in memory.", vi: "Hachiko trung thành, Knut kiếm nhiều tiền..." }
    ],
    questions: [
      { q: "1. Which animal never forgot human friend?", ans: ["a"], loc: "Hachiko waited until death", exp: "1 - A: Hachiko trung thành không quên chủ." },
      { q: "2. Lived part of life in wild?", ans: ["c"], loc: "Elsa adult life in wild", exp: "2 - C: Elsa sống ngoài tự nhiên." },
      { q: "3. Made large profits for humans?", ans: ["b"], loc: "Knut 5 million euros revenue", exp: "3 - B: Knut đem lại lợi nhuận khổng lồ." },
      { q: "4. Was not wanted by parent?", ans: ["b"], loc: "Knut rejected by mother", exp: "4 - B: Knut bị mẹ chối bỏ." },
      { q: "5. Has had valuable work done in memory?", ans: ["c"], loc: "Elsa Born Free Foundation", exp: "5 - C: Elsa truyền cảm hứng lập quỹ." },
      { q: "6. Formally remembered at regular times?", ans: ["a"], loc: "Hachiko yearly ceremony", exp: "6 - A: Hachiko có lễ tưởng niệm hàng năm." },
      { q: "7. Had souvenirs of them made?", ans: ["b"], loc: "Knut toys and candy", exp: "7 - B: Đồ lưu niệm hình Knut." }
    ],
    paraphraseTable: [
      { qWord: "never forgot human friend", pWord: "waited faithfully until death", note: "Không bao giờ quên người bạn" },
      { qWord: "made large profits", pWord: "increased revenue by 5 million", note: "Tạo lợi nhuận lớn" },
      { qWord: "not wanted by parent", pWord: "rejected by mother", note: "Bị mẹ đẻ chối bỏ" },
      { qWord: "formally remembered", pWord: "ceremony to commemorate", note: "Lễ kỷ niệm chính thức" },
      { qWord: "souvenirs made", pWord: "selling toys and products", note: "Bán đồ lưu niệm" }
    ],
    vocab: [
      { word: "souvenir", type: "Danh từ", ipa: "/ˌsuː.vəˈnɪr/", def: "đồ lưu niệm", ex: "Selling toys, candy and other souvenirs.", viEx: "Bán đồ chơi, kẹo và các đồ lưu niệm khác." }
    ]
  },
  {
    id: 16,
    part: "07. DẠNG BÀI MATCHING PARAGRAPH INFORMATION",
    title: "Activity 16: FOOD TV",
    instruction: "Which paragraphs contain the information? Write A-G.",
    passage: [
      { en: "A: 343.5 hours food TV. B: Julia Child wrote cookbook first. D: Two biker pairs. E: Cooking TV is entertainment (Masterchef). F: Studies show people cook less, Jamie Oliver 15 min meals most influential. G: Teaching children to cook.", vi: "A nói về giờ phát sóng..." }
    ],
    questions: [
      { q: "1. The cooking show that affects people most", ans: ["f"], loc: "Paragraph F (Jamie Oliver most influential)", exp: "1 - F." },
      { q: "2. A TV chef who was first famous as an author", ans: ["b"], loc: "Paragraph B (Julia Child published recipes first)", exp: "2 - B." },
      { q: "3. The number of food shows on TV", ans: ["a"], loc: "Paragraph A (343.5 hours)", exp: "3 - A." },
      { q: "4. Cookery shows for enjoyment rather than learning", ans: ["e"], loc: "Paragraph E (entertainment than education)", exp: "4 - E." },
      { q: "5. Why children should be taught to cook", ans: ["g"], loc: "Paragraph G (teaching children)", exp: "5 - G." },
      { q: "6. Research about amount of time people cook", ans: ["f"], loc: "Paragraph F (spend less time cooking)", exp: "6 - F." },
      { q: "7. Examples of famous cookery partners", ans: ["d"], loc: "Paragraph D (pairs of chefs on motorbikes)", exp: "7 - D." }
    ],
    paraphraseTable: [
      { qWord: "affects people most", pWord: "most influential show", note: "Có sức ảnh hưởng nhất" },
      { qWord: "famous as an author", pWord: "published recipes, instant success", note: "Nổi tiếng nhờ xuất bản sách" },
      { qWord: "enjoyment rather than learning", pWord: "entertainment than education", note: "Giải trí hơn là giáo dục" }
    ],
    vocab: [
      { word: "influential", type: "Tính từ", ipa: "/ˌɪn.fluˈen.ʃəl/", def: "có tầm ảnh hưởng", ex: "The most influential show was Jamie Oliver's 15 Minute Meals.", viEx: "Chương trình có ảnh hưởng nhất là bữa ăn 15 phút của Jamie Oliver." }
    ]
  },
  {
    id: 17,
    part: "08. DẠNG BÀI MATCHING HEADINGS",
    title: "Activity 17: MARKETS AROUND THE WORLD",
    instruction: "Choose heading for B-F: [i Local craft, ii Cheap countryside food, iv New style at bargain, vi Winter gifts, vii Sell what you don't need]",
    passage: [
      { en: "B: Cheapest freshest food from farmers. C: Clothes to create unique look at bargain prices. D: Flea market where you sell unwanted items. E: Tourist market with handicrafts and souvenirs. F: Christmas winter seasonal market.", vi: "B bán thực phẩm quê rẻ. C thời trang giá hời..." }
    ],
    questions: [
      { q: "1. Heading for Paragraph B", ans: ["ii"], loc: "Paragraph B: freshest food from farmers -> ii", exp: "B -> ii (Thực phẩm rẻ từ quê)." },
      { q: "2. Heading for Paragraph C", ans: ["iv"], loc: "Paragraph C: unique look at bargain -> iv", exp: "C -> iv (Phong cách mới giá hời)." },
      { q: "3. Heading for Paragraph D", ans: ["vii"], loc: "Paragraph D: sell unwanted items -> vii", exp: "D -> vii (Bán đồ không dùng)." },
      { q: "4. Heading for Paragraph E", ans: ["i"], loc: "Paragraph E: souvenirs, handicrafts -> i", exp: "E -> i (Đồ thủ công mua về)." },
      { q: "5. Heading for Paragraph F", ans: ["vi"], loc: "Paragraph F: Christmas gifts -> vi", exp: "F -> vi (Quà cho lễ hội mùa đông)." }
    ],
    paraphraseTable: [
      { qWord: "things to eat straight from countryside", pWord: "farmers sell direct, freshest food", note: "Đồ ăn tươi trực tiếp từ nông dân" },
      { qWord: "new style at bargain prices", pWord: "unique look, bargain price", note: "Phong cách mới lạ với giá hời" },
      { qWord: "sell what you don't need", pWord: "sell unwanted items", note: "Bán đồ không còn cần dùng" },
      { qWord: "gifts for winter celebrations", pWord: "Christmas gifts for festive season", note: "Quà tặng lễ hội mùa đông" }
    ],
    vocab: [
      { word: "bargain", type: "Danh từ", ipa: "/ˈbɑːr.ɡɪn/", def: "món hời, giá rẻ bất ngờ", ex: "Get something really special at a bargain price.", viEx: "Mua được thứ đặc biệt với giá hời." }
    ]
  },
  {
    id: 18,
    part: "09. DẠNG BÀI MULTIPLE CHOICE",
    title: "Activity 18: EDUCATION & WORKPLACE",
    instruction: "Read and answer multiple choice questions.",
    passage: [
      { en: "Apprenticeships were common in past. 1944 education system did not produce good results. Blended learning convenient for working people as they don't miss work. Challenges: finding teachers to teach at different times.", vi: "Học nghề từng phổ biến trong quá khứ..." }
    ],
    questions: [
      { q: "1. Apprenticeships: A new, B common in past, C only past, D did not help.", ans: ["b"], loc: "common way in the past -> B", exp: "1 - B: Từng phổ biến trong quá khứ." },
      { q: "2. Education system 1944: A only 0.5%, B only technical, C not a great success, D gifted.", ans: ["c"], loc: "did not produce good results -> C", exp: "2 - C: Không thành công lớn." },
      { q: "3. Blended learning: A retired, B face to face, C nursing, D convenient for working people.", ans: ["d"], loc: "don't miss work -> D", exp: "3 - D: Thuận tiện cho người đi làm." },
      { q: "4. Challenges: A practical issues like class times, B inexperienced students, C acceptable, D computer.", ans: ["a"], loc: "different places and times -> A", exp: "4 - A: Vấn đề thực tế như giờ học." }
    ],
    paraphraseTable: [
      { qWord: "were common in the past", pWord: "a common way of learning in the past", note: "Từng rất phổ biến trong quá khứ" },
      { qWord: "was not a great success", pWord: "did not produce good results", note: "Không đem lại kết quả tốt" },
      { qWord: "convenient for working people", pWord: "don't have to miss work to go to classes", note: "Tiện lợi cho người đang đi làm" },
      { qWord: "practical issues like when classes held", pWord: "different places and at different times", note: "Thời gian và địa điểm tổ chức" }
    ],
    vocab: [
      { word: "apprenticeship", type: "Danh từ", ipa: "/əˈpren.tɪs.ʃɪp/", def: "sự học nghề, chế độ thực tập", ex: "Apprenticeships were a common way of learning in the past.", viEx: "Học nghề từng là cách học tập phổ biến trong quá khứ." }
    ]
  }
];
const kanjiData = [
        // --- Page 11 (Nature/Elements) ---
        { char: "山", meaning: "mountain", readings: [{r:"yama", k:"やま", t:"kun"}, {r:"san", k:"サン", t:"on"}] },
        { char: "川", meaning: "river", readings: [{r:"kawa", k:"かわ", t:"kun"}, {r:"sen", k:"セン", t:"on"}] },
        { char: "田", meaning: "rice field", readings: [{r:"ta", k:"た", t:"kun"}, {r:"den", k:"デン", t:"on"}] },
        { char: "日", meaning: "sun / day", readings: [{r:"hi", k:"ひ", t:"kun"}, {r:"bi", k:"び", t:"kun"}, {r:"ka", k:"か", t:"kun"}, {r:"nichi", k:"ニチ", t:"on"}, {r:"ni", k:"ニ", t:"on"}, {r:"jitsu", k:"ジツ", t:"on"}] },
        { char: "月", meaning: "Moon / Month", readings: [{r:"tsuki", k:"つき", t:"kun"}, {r:"getsu", k:"ゲツ", t:"on"}, {r:"gatsu", k:"ガツ", t:"on"}] },

        // --- Numbers (No. 11-20) with Special Date Readings ---
        { 
            char: "一", 
            meaning: "One\nEx: 一月 (Ichigatsu), 一日 (Tsuitachi)", 
            readings: [
                {r:"hito", k:"ひと", t:"kun"}, {r:"hito(tsu)", k:"ひと(つ)", t:"kun"}, 
                {r:"ichi", k:"イチ", t:"on"}, {r:"i-", k:"イッ", t:"on"},
                {r:"tsuitachi", k:"ついたち", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "二", 
            meaning: "Two\nEx: 二月 (Nigatsu), 二日 (Futsuka)", 
            readings: [
                {r:"futa", k:"ふた", t:"kun"}, {r:"futa(tsu)", k:"ふた(つ)", t:"kun"}, 
                {r:"ni", k:"ニ", t:"on"},
                {r:"futsuka", k:"ふつか", t:"kun"}, // Added special date
                {r:"futari", k:"ふたり", t:"kun"}   // Added counter (people)
            ] 
        },
        { 
            char: "三", 
            meaning: "Three\nEx: 三月 (Sangatsu), 三日 (Mikka)", 
            readings: [
                {r:"mi-", k:"みっ", t:"kun"}, {r:"mi(ttsu)", k:"み(っつ)", t:"kun"}, 
                {r:"san", k:"サン", t:"on"},
                {r:"mikka", k:"みっか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "四", 
            meaning: "Four\nEx: 四月 (Shigatsu), 四日 (Yokka)", 
            readings: [
                {r:"yo", k:"よ", t:"kun"}, {r:"yo-", k:"よっ", t:"kun"}, {r:"yo(ttsu)", k:"よ(っつ)", t:"kun"}, {r:"yon", k:"よん", t:"kun"}, 
                {r:"shi", k:"シ", t:"on"},
                {r:"yokka", k:"よっか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "五", 
            meaning: "Five\nEx: 五月 (Gogatsu), 五日 (Itsuka)", 
            readings: [
                {r:"itsu", k:"いつ", t:"kun"}, {r:"itsu(tsu)", k:"いつ(つ)", t:"kun"}, 
                {r:"go", k:"ゴ", t:"on"},
                {r:"itsuka", k:"いつか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "六", 
            meaning: "Six\nEx: 六月 (Rokugatsu), 六日 (Muika)", 
            readings: [
                {r:"mu-", k:"むっ", t:"kun"}, {r:"mu(ttsu)", k:"む(っつ)", t:"kun"}, 
                {r:"roku", k:"ロク", t:"on"}, {r:"ro-", k:"ロッ", t:"on"},
                {r:"muika", k:"むいか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "七", 
            meaning: "Seven\nEx: 七月 (Shichigatsu), 七日 (Nanoka)", 
            readings: [
                {r:"nana", k:"なな", t:"kun"}, {r:"nana(tsu)", k:"なな(つ)", t:"kun"}, 
                {r:"shichi", k:"シチ", t:"on"},
                {r:"nanoka", k:"なのか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "八", 
            meaning: "Eight\nEx: 八月 (Hachigatsu), 八日 (Youka)", 
            readings: [
                {r:"ya-", k:"やっ", t:"kun"}, {r:"ya(ttsu)", k:"や(っつ)", t:"kun"}, {r:"you", k:"よう", t:"kun"}, 
                {r:"hachi", k:"ハチ", t:"on"}, {r:"ha-", k:"ハッ", t:"on"},
                {r:"youka", k:"ようか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "九", 
            meaning: "Nine\nEx: 九月 (Kugatsu), 九日 (Kokonoka)", 
            readings: [
                {r:"kokono", k:"ここの", t:"kun"}, {r:"kokono(tsu)", k:"ここの(つ)", t:"kun"}, 
                {r:"kyuu", k:"キュウ", t:"on"}, {r:"ku", k:"ク", t:"on"},
                {r:"kokonoka", k:"ここのか", t:"kun"} // Added special date
            ] 
        },
        { 
            char: "十", 
            meaning: "Ten\nEx: 十月 (Juugatsu), 十日 (Tooka)", 
            readings: [
                {r:"too", k:"とお", t:"kun"}, 
                {r:"juu", k:"ジュウ", t:"on"}, {r:"ju-", k:"ジュッ", t:"on"}, {r:"ji-", k:"ジッ", t:"on"},
                {r:"tooka", k:"とおか", t:"kun"} // Added special date
            ] 
        },

        // --- Page 1 (No. 41, 42, 43, 44, 45 + top #6) ---
        { char: "父", meaning: "Father", readings: [{r:"chichi", k:"ちち", t:"kun"}, {r:"fu", k:"フ", t:"on"}] },
        { char: "母", meaning: "Mother", readings: [{r:"haha", k:"はは", t:"kun"}, {r:"bo", k:"ボ", t:"on"}] },
        { char: "先", meaning: "Foregoing / Previous", readings: [{r:"saki", k:"さき", t:"kun"}, {r:"sen", k:"セン", t:"on"}] },
        { char: "生", meaning: "to be born / to live", readings: [{r:"u(mareru)", k:"う(まれる)", t:"kun"}, {r:"i(kiru)", k:"い(きる)", t:"kun"}, {r:"sei", k:"セイ", t:"on"}] },
        { char: "学", meaning: "Study", readings: [{r:"mana(bu)", k:"まな(ぶ)", t:"kun"}, {r:"gaku", k:"ガク", t:"on"}, {r:"gakk", k:"ガッ", t:"on"}] },

        // --- Page 2 (No. 46, 47, 48, 49, 50) ---
        { char: "校", meaning: "School", readings: [{r:"kou", k:"コウ", t:"on"}] },
        { char: "友", meaning: "Friend", readings: [{r:"tomo", k:"とも", t:"kun"}, {r:"yuu", k:"ユウ", t:"on"}] },
        { char: "本", meaning: "book, root, origin", readings: [{r:"moto", k:"もと", t:"kun"}, {r:"hon", k:"ホン", t:"on"}, {r:"bon", k:"ボン", t:"on"}, {r:"pon", k:"ポン", t:"on"}] },
        { char: "毎", meaning: "Every", readings: [{r:"mai", k:"マイ", t:"on"}] },
        { char: "何", meaning: "What !!!", readings: [{r:"nani", k:"なに", t:"kun"}, {r:"nan", k:"なん", t:"kun"}] },

        // --- Page 3 (No. 36, 37, 38, 39, 40) ---
        { char: "口", meaning: "Mouth", readings: [{r:"kuchi", k:"くち", t:"kun"}, {r:"guchi", k:"ぐち", t:"kun"}, {r:"kou", k:"コウ", t:"on"}] },
        { char: "耳", meaning: "Ear", readings: [{r:"mimi", k:"みみ", t:"kun"}, {r:"ji", k:"ジ", t:"on"}] },
        { char: "手", meaning: "Hand", readings: [{r:"te", k:"て", t:"kun"}, {r:"shu", k:"シュ", t:"on"}] },
        { char: "足", meaning: "Leg", readings: [{r:"ashi", k:"あし", t:"kun"}, {r:"ta(su)", k:"た(す)", t:"kun"}, {r:"soku", k:"ソク", t:"on"}] },
        { char: "力", meaning: "Power", readings: [{r:"chikara", k:"ちから", t:"kun"}, {r:"ryoku", k:"リョク", t:"on"}, {r:"riki", k:"リキ", t:"on"}] },

        // --- Page 4 (No. 31, 32, 33, 34, 35) ---
        { char: "人", meaning: "Person, human", readings: [{r:"hito", k:"ひと", t:"kun"}, {r:"jin", k:"ジン", t:"on"}, {r:"nin", k:"ニン", t:"on"}] },
        { char: "子", meaning: "Child", readings: [{r:"ko", k:"こ", t:"kun"}, {r:"shi", k:"シ", t:"on"}] },
        { char: "女", meaning: "Female, women", readings: [{r:"onna", k:"おんな", t:"kun"}, {r:"jo", k:"ジョ", t:"on"}] },
        { char: "男", meaning: "Man\n(Ex: field + power)", readings: [{r:"otoko", k:"おとこ", t:"kun"}, {r:"dan", k:"ダン", t:"on"}, {r:"nan", k:"ナン", t:"on"}] },
        { char: "目", meaning: "Eye", readings: [{r:"me", k:"め", t:"kun"}, {r:"moku", k:"モク", t:"on"}] },

        // --- Page 5 (No. 27, 28, 29, 30) ---
        { char: "下", meaning: "under", readings: [{r:"shita", k:"した", t:"kun"}, {r:"sa(geru)", k:"さ(げる)", t:"kun"}, {r:"ka", k:"カ", t:"on"}, {r:"ge", k:"ゲ", t:"on"}] },
        { char: "中", meaning: "middle / inside", readings: [{r:"naka", k:"なか", t:"kun"}, {r:"chuu", k:"チュウ", t:"on"}, {r:"juu", k:"ジュウ", t:"on"}] },
        { char: "半", meaning: "half", readings: [{r:"han", k:"ハン", t:"on"}] },
        { char: "分", meaning: "divide / understand / minute\n(Ex: divide->understand)", readings: [{r:"wa(keru)", k:"わ(ける)", t:"kun"}, {r:"wa(karu)", k:"わ(かる)", t:"kun"}, {r:"bun", k:"ブン", t:"on"}, {r:"fun", k:"フン", t:"on"}, {r:"pun", k:"プン", t:"on"}] },

        // --- Page 6 (No. 26, 21, 22, 23, 24, 25) ---
        { char: "上", meaning: "above / on", readings: [{r:"ue", k:"うえ", t:"kun"}, {r:"a(garu)", k:"あ(がる)", t:"kun"}, {r:"jou", k:"ジョウ", t:"on"}] },
        { char: "百", meaning: "Hundred", readings: [{r:"hyaku", k:"ヒャク", t:"on"}, {r:"byaku", k:"ビャク", t:"on"}, {r:"pyaku", k:"ピャク", t:"on"}] },
        { char: "千", meaning: "Thousand", readings: [{r:"chi", k:"ち", t:"kun"}, {r:"sen", k:"セン", t:"on"}, {r:"zen", k:"ゼン", t:"on"}] },
        { char: "万", meaning: "Ten thousand", readings: [{r:"man", k:"マン", t:"on"}, {r:"ban", k:"バン", t:"on"}] },
        { char: "円", meaning: "Japanese Yen / Circle", readings: [{r:"en", k:"エン", t:"on"}] },
        { char: "年", meaning: "Year / age", readings: [{r:"toshi", k:"とし", t:"kun"}, {r:"nen", k:"ネン", t:"on"}] },
        
        // --- Elements (No. 6-10) ---
        { char: "火", meaning: "fire", readings: [{r:"hi", k:"ひ", t:"kun"}, {r:"ka", k:"カ", t:"on"}] },
        { char: "水", meaning: "water", readings: [{r:"mizu", k:"みず", t:"kun"}, {r:"sui", k:"スイ", t:"on"}] },
        { char: "木", meaning: "tree", readings: [{r:"ki", k:"き", t:"kun"}, {r:"moku", k:"モク", t:"on"}] },
        { char: "金", meaning: "Gold / Money", readings: [{r:"kane", k:"かね", t:"kun"}, {r:"kin", k:"キン", t:"on"}] },
        { char: "土", meaning: "soil", readings: [{r:"tsuchi", k:"つち", t:"kun"}, {r:"do", k:"ド", t:"on"}, {r:"to", k:"ト", t:"on"}] }
    ];

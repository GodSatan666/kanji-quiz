const kanjiData = [
    // --- File 11 (Nature) ---
    { 
        char: "山", 
        meaning: "mountain", 
        readings: [
            {r: "yama", k: "やま", t: "kun"}, 
            {r: "san", k: "サン", t: "on"}
        ] 
    },
    { 
        char: "川", 
        meaning: "river", 
        readings: [
            {r: "kawa", k: "かわ", t: "kun"}, 
            {r: "sen", k: "セン", t: "on"}
        ] 
    },
    { 
        char: "田", 
        meaning: "rice field", 
        readings: [
            {r: "ta", k: "た", t: "kun"}, 
            {r: "den", k: "デン", t: "on"}
        ] 
    },
    { 
        char: "日", 
        meaning: "sun / day", 
        readings: [
            {r: "hi", k: "ひ", t: "kun"}, 
            {r: "bi", k: "び", t: "kun"}, 
            {r: "nichi", k: "ニチ", t: "on"}, 
            {r: "ni", k: "ニ", t: "on"}
        ] 
    },
    { 
        char: "月", 
        meaning: "moon", 
        readings: [
            {r: "tsuki", k: "つき", t: "kun"}, 
            {r: "getsu", k: "ゲツ", t: "on"}, 
            {r: "gatsu", k: "ガツ", t: "on"}
        ] 
    },

    // --- Files 7, 8, 9 (Numbers & Dates) ---
    { 
        char: "一", 
        meaning: "one", 
        readings: [
            {r: "hitotsu", k: "ひとつ", t: "kun"}, 
            {r: "ichi", k: "イチ", t: "on"}, 
            {r: "i-", k: "イッ", t: "on"},
            {r: "tsuitachi", k: "ついたち", t: "kun"}, // 1st day
            {r: "ichinichi", k: "いちにち", t: "kun"}  // one day
        ] 
    },
    { 
        char: "二", 
        meaning: "two", 
        readings: [
            {r: "futatsu", k: "ふたつ", t: "kun"}, 
            {r: "ni", k: "ニ", t: "on"},
            {r: "futsuka", k: "ふつか", t: "kun"}, // 2nd day
            {r: "futari", k: "ふたり", t: "kun"}   // two people
        ] 
    },
    { 
        char: "三", 
        meaning: "three", 
        readings: [
            {r: "mittsu", k: "みっつ", t: "kun"}, 
            {r: "san", k: "サン", t: "on"},
            {r: "mikka", k: "みっか", t: "kun"} // 3rd day
        ] 
    },
    { 
        char: "四", 
        meaning: "four", 
        readings: [
            {r: "yottsu", k: "よっつ", t: "kun"}, 
            {r: "yon", k: "よん", t: "kun"}, 
            {r: "yo", k: "よ", t: "kun"}, 
            {r: "shi", k: "シ", t: "on"},
            {r: "yokka", k: "よっか", t: "kun"} // 4th day
        ] 
    },
    { 
        char: "五", 
        meaning: "five", 
        readings: [
            {r: "itsutsu", k: "いつつ", t: "kun"}, 
            {r: "go", k: "ゴ", t: "on"},
            {r: "itsuka", k: "いつか", t: "kun"} // 5th day
        ] 
    },
    { 
        char: "六", 
        meaning: "six", 
        readings: [
            {r: "muttsu", k: "むっつ", t: "kun"}, 
            {r: "roku", k: "ロク", t: "on"}, 
            {r: "ro-", k: "ロッ", t: "on"},
            {r: "muika", k: "むいか", t: "kun"} // 6th day
        ] 
    },
    { 
        char: "七", 
        meaning: "Seven", 
        readings: [
            {r: "nanatsu", k: "ななつ", t: "kun"}, 
            {r: "shichi", k: "シチ", t: "on"},
            {r: "nanoka", k: "なのか", t: "kun"} // 7th day
        ] 
    },
    { 
        char: "八", 
        meaning: "eight", 
        readings: [
            {r: "yattsu", k: "やっつ", t: "kun"}, 
            {r: "you", k: "よう", t: "kun"}, 
            {r: "hachi", k: "ハチ", t: "on"}, 
            {r: "ha-", k: "ハッ", t: "on"},
            {r: "youka", k: "ようか", t: "kun"} // 8th day
        ] 
    },
    { 
        char: "九", 
        meaning: "nine", 
        readings: [
            {r: "kokonotsu", k: "ここのつ", t: "kun"}, 
            {r: "kyuu", k: "キュウ", t: "on"}, 
            {r: "ku", k: "ク", t: "on"},
            {r: "kokonoka", k: "ここのか", t: "kun"} // 9th day
        ] 
    },
    { 
        char: "十", 
        meaning: "ten", 
        readings: [
            {r: "too", k: "とお", t: "kun"}, 
            {r: "juu", k: "ジュウ", t: "on"}, 
            {r: "ju-", k: "ジュッ", t: "on"}, 
            {r: "ji-", k: "ジッ", t: "on"},
            {r: "tooka", k: "とおか", t: "kun"} // 10th day
        ] 
    },

    // --- File 1 (Family/School) ---
    { 
        char: "父", 
        meaning: "Father", 
        readings: [
            {r: "chichi", k: "ちち", t: "kun"}, 
            {r: "fu", k: "フ", t: "on"}
        ] 
    },
    { 
        char: "母", 
        meaning: "Mother", 
        readings: [
            {r: "haha", k: "はは", t: "kun"}, 
            {r: "bo", k: "ボ", t: "on"}
        ] 
    },
    { 
        char: "先", 
        meaning: "Foregoing / Previous", 
        readings: [
            {r: "saki", k: "さき", t: "kun"}, 
            {r: "sen", k: "セン", t: "on"}
        ] 
    },
    { 
        char: "生", 
        meaning: "to be born / to live", 
        readings: [
            {r: "u(mareru)", k: "う(まれる)", t: "kun"}, 
            {r: "i(kiru)", k: "い(きる)", t: "kun"}, 
            {r: "sei", k: "セイ", t: "on"}
        ] 
    },
    { 
        char: "学", 
        meaning: "Study", 
        readings: [
            {r: "mana(bu)", k: "まな(ぶ)", t: "kun"}, 
            {r: "gaku", k: "ガク", t: "on"}, 
            {r: "gakk", k: "ガッ", t: "on"}
        ] 
    },

    // --- File 2 (School/Time/Misc) ---
    { 
        char: "校", 
        meaning: "School", 
        readings: [
            {r: "kou", k: "コウ", t: "on"}
        ] 
    },
    { 
        char: "友", 
        meaning: "Friend", 
        readings: [
            {r: "tomo", k: "とも", t: "kun"}, 
            {r: "yuu", k: "ユウ", t: "on"}
        ] 
    },
    { 
        char: "本", 
        meaning: "book, root, origin", 
        readings: [
            {r: "moto", k: "もと", t: "kun"}, 
            {r: "hon", k: "ホン", t: "on"}, 
            {r: "bon", k: "ボン", t: "on"}, 
            {r: "pon", k: "ポン", t: "on"}
        ] 
    },
    { 
        char: "毎", 
        meaning: "Every", 
        readings: [
            {r: "mai", k: "マイ", t: "on"}
        ] 
    },
    { 
        char: "何", 
        meaning: "What !!!", 
        readings: [
            {r: "nani", k: "なに", t: "kun"}, 
            {r: "nan", k: "なん", t: "kun"}
        ] 
    },

    // --- File 3 (Body) ---
    { 
        char: "口", 
        meaning: "Mouth", // Corrected: This is Mouth, not Month
        readings: [
            {r: "kuchi", k: "くち", t: "kun"}, 
            {r: "guchi", k: "ぐち", t: "kun"}, 
            {r: "kou", k: "コウ", t: "on"}
        ] 
    },
    { 
        char: "耳", 
        meaning: "Ear", 
        readings: [
            {r: "mimi", k: "みみ", t: "kun"}, 
            {r: "ji", k: "ジ", t: "on"}
        ] 
    },
    { 
        char: "手", 
        meaning: "Hand", 
        readings: [
            {r: "te", k: "て", t: "kun"}, 
            {r: "shu", k: "シュ", t: "on"}
        ] 
    },
    { 
        char: "足", 
        meaning: "Leg", 
        readings: [
            {r: "ashi", k: "あし", t: "kun"}, 
            {r: "ta(riru)", k: "た(りる)", t: "kun"}
            {r: "soku", k: "ソク", t: "on"}
        ] 
    },
    { 
        char: "力", 
        meaning: "Power", 
        readings: [
            {r: "chikara", k: "ちから", t: "kun"}, 
            {r: "ryoku", k: "リョク", t: "on"}, 
            {r: "riki", k: "リキ", t: "on"}
        ] 
    },

    // --- File 4 (People) ---
    { 
        char: "人", 
        meaning: "Person, human", 
        readings: [
            {r: "hito", k: "ひと", t: "kun"}, 
            {r: "jin", k: "ジン", t: "on"}, 
            {r: "nin", k: "ニン", t: "on"}
        ] 
    },
    { 
        char: "子", 
        meaning: "Child", 
        readings: [
            {r: "ko", k: "こ", t: "kun"}, 
            {r: "shi", k: "シ", t: "on"} // Removed 'su'
        ] 
    },
    { 
        char: "女", 
        meaning: "Female, woman", 
        readings: [
            {r: "onna", k: "おんな", t: "kun"}, 
            {r: "jo", k: "ジョ", t: "on"}
        ] 
    },
    { 
        char: "男", 
        meaning: "Man", 
        readings: [
            {r: "otoko", k: "おとこ", t: "kun"}, 
            {r: "dan", k: "ダン", t: "on"}, 
            {r: "nan", k: "ナン", t: "on"}
        ] 
    },
    { 
        char: "目", 
        meaning: "Eye", 
        readings: [
            {r: "me", k: "め", t: "kun"}, 
            {r: "moku", k: "モク", t: "on"}
        ] 
    },

    // --- File 5 (Position/Time) ---
    { 
        char: "下", 
        meaning: "under", 
        readings: [
            {r: "shita", k: "した", t: "kun"}, 
            {r: "sa(garu)", k: "さ(げる)", t: "kun"}, 
            {r: "ka", k: "カ", t: "on"}, 
            {r: "ge", k: "ゲ", t: "on"}
        ] 
    },
    { 
        char: "中", 
        meaning: "middle / inside", 
        readings: [
            {r: "naka", k: "なか", t: "kun"}, 
            {r: "chuu", k: "チュウ", t: "on"}, 
            {r: "juu", k: "ジュウ", t: "on"}
        ] 
    },
    { 
        char: "半", 
        meaning: "half", 
        readings: [
            {r: "han", k: "ハン", t: "on"}
        ] 
    },
    { 
        char: "分", 
        meaning: "divide, understand, minute", 
        readings: [
            {r: "wa(keru)", k: "わ(ける)", t: "kun"}, 
            {r: "wa(karu)", k: "わ(かる)", t: "kun"}, 
            {r: "fun", k: "フン", t: "on"}, 
            {r: "bun", k: "ブン", t: "on"}, 
            {r: "pun", k: "プン", t: "on"}
        ] 
    },

    // --- File 6 (Large Numbers/Misc) ---
    { 
        char: "上", 
        meaning: "above / on / up", 
        readings: [
            {r: "ue", k: "うえ", t: "kun"}, 
            {r: "a(garu)", k: "あ(がる)", t: "kun"}, 
            {r: "jou", k: "ジョウ", t: "on"}
        ] 
    },
    { 
        char: "百", 
        meaning: "Hundred", 
        readings: [
            {r: "hyaku", k: "ヒャク", t: "on"}, 
            {r: "byaku", k: "ビャク", t: "on"}, 
            {r: "pyaku", k: "ピャク", t: "on"}
        ] 
    },
    { 
        char: "千", 
        meaning: "Thousand", 
        readings: [
            {r: "chi", k: "ち", t: "kun"}, 
            {r: "sen", k: "セン", t: "on"}, 
            {r: "zen", k: "ゼン", t: "on"}
        ] 
    },
    { 
        char: "万", 
        meaning: "Ten thousand", 
        readings: [
            {r: "man", k: "マン", t: "on"}, 
            {r: "ban", k: "バン", t: "on"}
        ] 
    },
    { 
        char: "円", 
        meaning: "Japanese Yen / Circle", 
        readings: [
            {r: "en", k: "エン", t: "on"} // Removed 'maru'
        ] 
    },
    { 
        char: "年", 
        meaning: "Year / age", 
        readings: [
            {r: "toshi", k: "とし", t: "kun"}, 
            {r: "nen", k: "ネン", t: "on"}
        ] 
    },

    // --- File 10 (Elements) ---
    { 
        char: "火", 
        meaning: "fire", 
        readings: [
            {r: "hi", k: "ひ", t: "kun"}, 
            {r: "ka", k: "カ", t: "on"}
        ] 
    },
    { 
        char: "水", 
        meaning: "water", 
        readings: [
            {r: "mizu", k: "みず", t: "kun"}, 
            {r: "sui", k: "スイ", t: "on"}
        ] 
    },
    { 
        char: "木", 
        meaning: "tree", 
        readings: [
            {r: "ki", k: "き", t: "kun"}, 
            {r: "moku", k: "モク", t: "on"}
        ] 
    },
    { 
        char: "金", 
        meaning: "Gold / Money", 
        readings: [
            {r: "kane", k: "かね", t: "kun"}, 
            {r: "kin", k: "キン", t: "on"}
        ] 
    },
    { 
        char: "土", 
        meaning: "soil", 
        readings: [
            {r: "tsuchi", k: "つち", t: "kun"}, 
            {r: "do", k: "ド", t: "on"}, 
            {r: "to", k: "ト", t: "on"}
        ] 
    }
];

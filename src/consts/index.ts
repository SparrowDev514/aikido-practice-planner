export const tachikataList = ["立技", "半身半立", "座技"];

export const torikataList = [
  {
    name: "正面打ち",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "横面打ち",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "突き",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "片手取り",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "肩取り",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "両肩取り",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "両手取り",
    TachikataAreNotAbleTo: [],
  },
  {
    name: "諸手取り",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "交差取り",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "後両手取り",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "後両肩取り",
    TachikataAreNotAbleTo: ["座技"],
  },
  {
    name: "後襟取り",
    TachikataAreNotAbleTo: ["座技"],
  },
  {
    name: "後首絞め",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "肩取り面打ち",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
  },
];

export const wazaList = [
  {
    name: "呼吸法",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "一教",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "二教",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "三教",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四教",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "五教",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "六教(肘極め)",
    TachikataAreNotAbleTo: ["半身半立"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四方投げ",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "入身投げ",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "小手返し",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "回転投げ",
    TachikataAreNotAbleTo: ["半身半立"],
    TorikataAreNotAbleTo: ["両肩取り", "肩取り面打ち"],
  },
  {
    name: "隅落とし",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "天秤投げ",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "天地投げ",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: [
      "正面打ち",
      "横面打ち",
      "突き",
      "片手取り",
      "肩取り",
      "両肩取り",
      "諸手取り",
      "交差取り",
      "後両手取り",
      "後両肩取り",
      "後襟取り",
      "後首絞め",
      "肩取り面打ち",
    ],
  },
  {
    name: "十字投げ",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [
      "正面打ち",
      "横面打ち",
      "突き",
      "片手取り",
      "肩取り",
      "交差取り",
    ],
  },
  {
    name: "絡み二教",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: ["両肩取り", "肩取り面打ち"],
  },
  {
    name: "一教返し",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "袖投げ",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: ["正面打ち", "横面打ち", "突き", "片手取り"],
  },
  {
    name: "腰投げ",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "合気落とし",
    TachikataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "一教投げ",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "二教投げ",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "三教投げ",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四教投げ",
    TachikataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "呼吸投げ",
    TachikataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
];

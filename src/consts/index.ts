import { Torikata } from "../types/type";
import { Waza } from "../types/type";

export const TachiKataList: string[] = ["立技", "半身半立", "座技"];

export const TorikataList: Torikata[] = [
  {
    name: "正面打ち",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "横面打ち",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "突き",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "片手取り",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "肩取り",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "両肩取り",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "両手取り",
    TachiKataAreNotAbleTo: [],
  },
  {
    name: "諸手取り",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "交差取り",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "後両手取り",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "後両肩取り",
    TachiKataAreNotAbleTo: ["座技"],
  },
  {
    name: "後襟取り",
    TachiKataAreNotAbleTo: ["座技"],
  },
  {
    name: "後首絞め",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
  {
    name: "肩取り面打ち",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
  },
];

export const WazaList: Waza[] = [
  {
    name: "呼吸法",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "一教",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "二教",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "三教",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四教",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "五教",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "六教(肘極め)",
    TachiKataAreNotAbleTo: ["半身半立"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四方投げ",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "入身投げ",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "小手返し",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "回転投げ",
    TachiKataAreNotAbleTo: ["半身半立"],
    TorikataAreNotAbleTo: ["両肩取り", "肩取り面打ち"],
  },
  {
    name: "天秤投げ",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "天地投げ",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
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
    TachiKataAreNotAbleTo: [],
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
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: ["両肩取り", "肩取り面打ち"],
  },
  {
    name: "一教返し",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "袖投げ",
    TachiKataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: ["正面打ち", "横面打ち", "突き", "片手取り"],
  },
  {
    name: "腰投げ",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "合気落とし",
    TachiKataAreNotAbleTo: ["半身半立", "座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "一教投げ",
    TachiKataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "二教投げ",
    TachiKataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "三教投げ",
    TachiKataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "四教投げ",
    TachiKataAreNotAbleTo: ["座技"],
    TorikataAreNotAbleTo: [],
  },
  {
    name: "呼吸投げ",
    TachiKataAreNotAbleTo: [],
    TorikataAreNotAbleTo: [],
  },
];

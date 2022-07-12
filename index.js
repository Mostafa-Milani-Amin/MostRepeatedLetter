const firstMostRepeatedLetter = str => str.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]|(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]|Ⓐ|☭|✯|✙|ᛋ|卐|卍|࿕|࿖|࿗|࿘|ꖦ|☫|☤|❥|웃|유|☏|♚|▲|⚤|☒|♛|▼|♫|⌘|¡|♡|ღ|ツ|☼|❅|✎|✪|➳|✞|✿|✄|✫|★|\s+/gu, '').split('').reduce((acc, char) => (((str.split(char).length - 1) > acc[1]) ? [char, (str.split(char).length - 1)] : acc), ['', 0])[0];

module.exports = { firstMostRepeatedLetter };

#### markdown syntax production

`space -> ' '`
`breakLine -> '\n'`
`anyChar -> { this production represents any character }`

1. text
   `text -> anyChar | text anyChar`
   `boldText -> space__text__space | **text**`
   `italicText -> space_text_space | *text*`
   `generalText -> boldText italicText text | boldText text italicText | italicText boldText text | italicText text boldText | text boldText italicText | text italicText boldText`
2. title
   `titlePrefix -> # | titlePrefix#`
   `title -> titlePrefix space generalText breakLine`

3. list
   `singleNumber -> 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 `
   `number -> singleNumber | singleNumber number`
   `orderList -> number.space generalText`
   `unorderList -> -space generalText | +space generalText | *space generalText`

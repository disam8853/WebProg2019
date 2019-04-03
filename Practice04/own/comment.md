# Comment : Prctice 1
### [1] 完成度
100%，大致上基本的功能都有完成，可以刪除、勾選任意item，統計未完成數目，filter已完成/未完成，一鍵刪除。

### [2] Coding quality
整體很不錯，分層清楚，主要控制clearComplete、Status的function都寫在最外層App.js裡面，然後再去呼叫container裡面footer.js item.js main.js的class，最後才是compenent裡面，然後整體code算是簡潔。

### [3] 正確性
沒有看到明顯錯誤

### [4] 值得學習
主要就是功能都很完整，code的寫法也多用老師上課教的方式寫，所以算是簡潔，三個filter的按鍵呼叫this.props.changeStatus()來用setState完成切換不同filter，算是寫的蠻好。


### [5] 建議改進
唯一美中不足是在改變filter已完成/未完成/全部時，按鍵上看不出目前在的是哪一個filter，可以透過在目前的fiter按鈕上加上個border之類的來讓使用者看出目前status。

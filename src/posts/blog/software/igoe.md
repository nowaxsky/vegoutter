---
title: "IGOE 是什麼？"
category: "software"
tags: ["Business Process"]
date: "2022-09-09 16:00:00 +08:00"
desc: "業務流程分析中的 Input、Guide、Output、Enabler。"
difficulty: "easy"
thumbnail: "../../images/software/igoe/igoe-template.png"
alt: "igoe"
extended: [""]
---

在軟體專案的開發上，我們通常需要先理解業務需求，才能開始進行各種系統分析、開發和測試等工作。在和客戶或是需求單位溝通之後，我們該如何有效地描述並記載這些需求呢？這篇文章將介紹 IGOE 方法，可以讓讀者輕鬆地運用在未來的專案中。

## 業務流程

IGOE 是一種記錄服務面向的流程概念，是四個字的縮寫：
- **I**nput：代表輸入，可以被消耗或改變的東西。
- **G**uide：代表規則，在輸入的東西轉換的過程中，需要使用到的規則或是活動等。
- **O**utput：代表輸出，即最後的結果。
- **E**nabler：代表推動者，就是讓輸入可以轉換成輸出的推動者。

<img src="../../images/software/igoe/igoe-template.png" alt="IGOE template"/>

<p><center style="font-size:85%">IGOE Template，圖片來源：<a href="http://www.brcommunity.com/a2012/b634.html">What is an IGOE?</a></center></p>

這四個要素其實就是業務流程（business process）的基本要素。IGOE 的概念源自於專門用來描述製造業的功能模型 
<a href="https://en.wikipedia.org/wiki/IDEF0" target="_blank">IDEF0</a>，在經過調整改良後，IGOE 適用在服務面向的流程中。

軟體專案的開發常常是以服務為導向的產品，自然也適合 IGOE 的概念方法，用來清楚描述業務流程。

## 範例：汽車加油

以汽車加油這個業務流程為例，我們把車子開到加油站，輸入就是汽車和錢。最後車子駛離加油站，錢變少了、車子內的油被加滿了，所以輸出同樣是汽車和錢，只是狀態有所變化。

一開始的狀態（人有錢、車沒油）不會自然地變到最後的狀態（錢變少、車有油），需要透過推動者來提供，也就是加油站、服務人員、和他所操作的油槍。

在這個加油的過程中，會有一些規則需要遵循，例如不可能無限制地加油，因為車子的油箱容量是有限的。不同的車子也會需要對應不同等級的油，例如卡車需要柴油、轎車需要 95 無鉛汽油等。除此之外還有支付的方式，並非所有的加油站都能夠使用行動支付，或是並不是支援所有銀行的信用卡等。

所以這些業務流程，可以簡單地整理出 IGOE 來表示如下：

- I：汽車和錢。
- G：油箱容量、汽油種類、汽油添加規則、預算、錢的使用方式等。
- O：汽車和錢。
- E：加油站、服務人員、油槍。

## 範例：網路書店

接下來舉一個和軟體專案相關的例子。假設要設計一個線上網路書店系統，其中有一項功能就是使用者買書，現在業務單位要求我們設計一支 API 來支援這樣的服務。這是一種業務流程，我們可以使用 IGOE 來進行分析。

- I：輸入包括使用者資訊、購買的商品名稱、購買的數量等。
- G：規則可能是某些商品有對應的優惠訊息，或是查詢數量不足時無法購買等。
- O：輸出就是成功購買後的資訊、或是購買失敗的錯誤訊息。
- E：推動者像是伺服器系統等等，但在軟體專案上我們可以簡化成對某個資料表進行操作。以這個例子來說可能會有一個資料表來記錄所有的訂購記錄。

上面這樣的 IGOE 就可以完成對需求的初步分析。所以在開發軟體專案的初期階段，我們可以透過建立一個很大的表格來描述各種業務流程，以利未來的專案開發。

Use Case No.|Use Case Name|Input|Output|Enabler|Guides|Memo
--|--|--|--|--|--|--
C1|購買書籍|I11<br />I12|O11|T1|G11<br />G12<br />G13<br />G14<br />|N/A
C2|新增一本書|I21|O21|T2|G21<br />G22<br />|M1
...|...|...|...|...|...|...

### 參考資料
[Kathy A. Long, "What is an IGOE?" Business Rules Journal, Vol. 13, No. 1, (Jan. 2012)](http://www.brcommunity.com/a2012/b634.html)<br/>
[Business process](https://en.wikipedia.org/wiki/Business_process)<br/>
[IDEF0](https://en.wikipedia.org/wiki/IDEF0)
import React from "react";
const articles=["EKG快速判讀,1.Rhythm 2.Rate 3.Axis 4.P wave 5.PR interval 6.Q wave 7.QRS complex 8.QT interval 9.ST segment 10.T wave",
"糖尿病重點整理, 糖尿病診斷Criteria 符合任一個都能診斷為Diabetes Mellitus 1. FPG >= 126 mg / dL 至少空腹8小時 2. 2 - h PG >= 200 mg / dL during an OGTT. (75g糖水測試)  3. A1C >= 6.5 % 4. 糖尿病典型症狀或急性症狀出現，且隨機血糖值 >= 200 mg / dL.", 
"核心肌群訓練: '頭頸：想像有一條線把頭向上拉，耳垂與肩峰、平行 肚子：肚子內縮，像憋尿一樣，屁股後坐 平常就要維持動作、保持脊椎穩定度", 
"生化數值: 'Lipid profile 整理 Lipid = TG + Cholesterol T - Cholesterol(Total cholesterol)= Chylomicron + VLDL - C + LDL - C + IDL - C + HDL - C",
"網誌開張', '2016.12.25 Christmas 網誌開張紀念"];

export default ({ id }) => {
    return (
        <article>
            <h1>Post #{id}</h1>
            <p>This is the {id}-th post</p>
            <p>{articles[(id-1)/2]}</p>
        </article>
    );
};

// ========== FILE: prayers.js ==========
// File chứa tất cả dữ liệu kinh nguyện tiếng Việt và tiếng Anh
// Chỉ cần sửa file này khi muốn thay đổi nội dung kinh nguyện

const prayersData = {
vi: {
‘Kinh Tin Kính’: ‘Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Đức Chúa Giêsu Kitô là con một Đức Chúa Cha cùng là Chúa chúng tôi; bởi phép Đức Chúa Thánh Thần mà người xuống thai, sinh bởi Bà Maria đồng trinh: chịu nạn đời quan Phong-xi-ô Phi-la-tô, chịu đóng đanh trên cây Thánh Giá, chết và táng xác, xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết sống lại; lên trời ngự bên hữu Đức Chúa Cha phép tắc vô cùng; ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết. Tôi tin kính Đức Chúa Thánh Thần. Tôi tin có hội Thánh hằng có ở khắp thế này, các Thánh thông công. Tôi tin phép tha tội tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy, Amen.’,

```
    'Kinh Lạy Cha': 'Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày và tha nợ chúng con như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi mọi sự dữ. Amen.',
    
    'Kinh Kính Mừng': 'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội khi này và trong giờ lâm tử. Amen.',
    
    'Kinh Sáng Danh': 'Sáng danh Đức Chúa Cha, và Đức Chúa Con, và Đức Chúa Thánh Thần. Như đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. Amen.',
    
    'Kinh Lạy Nữ Vương': 'Lạy Nữ Vương, Mẹ nhân lành, làm cho chúng con được sống, được vui, được cậy, thân lạy Mẹ. Chúng con là con cái Eva ở chốn khách đây này, kêu đến cùng Bà. Than van kêu khóc trong nơi khóc lóc khổ này. Ôi! Lạy Chúa bấu chúng con, xin ghé mặt thương xem chúng con. Đến sau khỏi đây, xin cho chúng con được thấy Đức Chúa Giêsu, Con lòng Bà gồm phúc lạ. Ôi khoan thay! Nhân thay! Dịu thay! Thánh Maria trọn đời đồng trinh. Amen.',
    
    'Lời Nguyện Mân Côi': 'Lạy Chúa Giêsu, xin tha tội cho chúng con, xin cứu chúng con khỏi sa hỏa ngục, xin đem các linh hồn lên thiên đàng, nhất là những linh hồn cần đến lòng Chúa thương xót hơn. Amen.'
},

en: {
    'Apostles\' Creed': 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
    
    'The Lord\'s Prayer': 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
    
    'Hail Mary': 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
    
    'Glory Be': 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
    
    'Hail Holy Queen': 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Amen.',
    
    'Fatima Prayer': 'O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to heaven, especially those in most need of thy mercy. Amen.'
}
```

};

// Export để sử dụng trong file khác
if (typeof module !== ‘undefined’ && module.exports) {
module.exports = prayersData;
}
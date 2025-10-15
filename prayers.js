// ========== FILE: prayers.js (UPDATED - NO ABBREVIATIONS) ==========

var prayersData = {
    vi: {
        // ===== KINH MÂN CÔI =====
        'Kinh Tin Kính': 'Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Đức Chúa GiêSu Kitô là con một Đức Chúa Cha cùng là Chúa chúng tôi; bởi phép Đức Chúa Thánh Thần mà người xuống thai, sinh bởi Bà Maria đồng trinh: chịu nạn đời quan Phong-xi-Ô Phi-la-tô, chịu đóng đanh trên cây Thánh Giá, chết và táng xác, xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết sống lại; lên trời ngự bên hữu Đức Chúa Cha phép tắc vô cùng; ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết. Tôi tin kính Đức Chúa Thánh Thần. Tôi tin có hội Thánh hằng có ở khắp thế này, các Thánh thông công. Tôi tin phép tha tội tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy, Amen.',
        
        'Kinh Lạy Cha': 'Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày và tha nợ chúng con như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi mọi sự dữ. Amen.',
        
        'Kinh Kính Mừng': 'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội khi này và trong giờ lâm tử. Amen.',
        
        'Kinh Sáng Danh': 'Sáng danh Đức Chúa Cha, và Đức Chúa Con, và Đức Chúa Thánh Thần. Như đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. Amen.',
        
        'Kinh Lạy Nữ Vương': 'Lạy Nữ Vương, Mẹ nhân lành, làm cho chúng con được sống, được vui, được cậy, thân lạy Mẹ. Chúng con là con cái Eva ở chốn khách đầy này, kêu đến cùng Bà. Than van kêu khóc trong nơi khóc lóc khổ này. Ôi! Lạy Bà bầu chúng con, xin ghé mặt thương xem chúng con. Đến sau khỏi đây, xin cho chúng con được thấy Đức Chúa Giêsu, Con lòng Bà gồm phúc lạ. Ôi khoan thay! Nhân thay! Dịu thay! Thánh Maria trọn đời đồng trinh. Amen.',
        
        'Lời Nguyện Mân Côi': 'Lạy Chúa Giêsu, xin tha tội cho chúng con, xin cứu chúng con khỏi sa hỏa ngục, xin đem các linh hồn lên thiên đàng, nhất là những linh hồn cần đến lòng Chúa thương xót hơn. Amen.',
        
        // ===== CHUỖI LÒNG THƯƠNG XÓT CHÚA - KINH CHÍNH =====
        'Kinh Hạt Lớn Lòng Thương Xót Chúa': 'Lạy Cha Hằng Hữu, con xin dâng Cha Mình, Máu, Linh hồn, và Thiên tính của Con yêu dấu Cha là Đức Giêsu Kitô, Chúa chúng con, để đền tạ tội lỗi chúng con và tội lỗi toàn thế giới.',
        
        'Kinh Hạt Nhỏ Lòng Thương Xót Chúa': 'Vì cuộc tử nạn đau buồn của Chúa Giêsu, xin thương xót chúng con và toàn thế giới.',
        
        'Lời Nguyện Kết Lòng Thương Xót Chúa': 'Lạy Cha Chí Thánh, Đấng Toàn Năng, Đấng Hằng Hữu, xin thương xót chúng con và toàn thế giới.',
        
        // ===== CHUỖI LÒNG THƯƠNG XÓT CHÚA - LỜI NGUYỆN GIỜ CAO ĐIỂM (3 GIỜ CHIỀU) =====
        'Lời Nguyện 3 Giờ Chiều': 'Lạy Chúa Giêsu, Chúa vừa trút hơi thở cuối cùng, nhưng nguồn sống đã tuôn trào đến các linh hồn, và cả một đại dương Lòng Chúa Thương Xót được mở ra cho toàn thế giới. Ôi, Nguồn Mạch Sự Sống là Lòng Thương Xót khôn dò, xin hãy bao trùm toàn thế giới và trút hết toàn thân Ngài trên chúng con.',
        
        'Kinh Máu Và Nước': 'Ôi, Máu và Nước tuôn ra từ Trái Tim Chúa Giêsu để nên nguồn mạch Lòng Thương Xót cho chúng con, con tin cậy vào Chúa.'
    },
    
    en: {
        // ===== ROSARY PRAYERS =====
        'Apostles\' Creed': 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
        
        'The Lord\'s Prayer': 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
        
        'Hail Mary': 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        
        'Glory Be': 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
        
        'Hail Holy Queen': 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this vale of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Amen.',
        
        'Fatima Prayer': 'O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to heaven, especially those in most need of thy mercy. Amen.',
        
        // ===== DIVINE MERCY CHAPLET - MAIN PRAYERS =====
        'Large Bead Prayer Divine Mercy': 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
        
        'Small Bead Prayer Divine Mercy': 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
        
        'Closing Prayer Divine Mercy': 'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
        
        // ===== DIVINE MERCY CHAPLET - 3 O'CLOCK PRAYERS =====
        '3PM Prayer': 'You expired, O Jesus, but the source of life gushed forth for souls and an ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.',
        
        'Blood and Water Prayer': 'O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You.'
    }
};

// Also expose to window for extra safety
window.prayersData = prayersData;

// Keep Node.js export for compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = prayersData;
}

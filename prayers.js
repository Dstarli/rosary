// ========== FILE: prayers.js (UPDATED - NO ABBREVIATIONS) ==========

var prayersData = {
    vi: {
        // ===== KINH MÂN CÔI =====
        'Kinh Tin Kính': 'Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất.\n\nTôi tin kính Đức Chúa GiêSu Kitô là con một Đức Chúa Cha cùng là Chúa chúng tôi; bởi phép Đức Chúa Thánh Thần mà người xuống thai, sinh bởi Bà Maria đồng trinh; chịu nạn đời quan Phong-xi-Ô Phi-la-tô, chịu đóng đanh trên cây Thánh Giá, chết và táng xác, xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết sống lại; lên trời ngự bên hữu Đức Chúa Cha phép tắc vô cùng; ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết.\n\nTôi tin kính Đức Chúa Thánh Thần. Tôi tin có hội Thánh hằng có ở khắp thế này, các Thánh thông công.\n\nTôi tin phép tha tội, tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy, Amen.',

        'Kinh Lạy Cha': 'Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời.\n\nXin Cha cho chúng con hôm nay lương thực hằng ngày và tha nợ chúng con như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi mọi sự dữ. Amen.',

        'Kinh Kính Mừng': 'Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ.\n\nThánh Maria Đức Mẹ Chúa Trời, cầu cho chúng con là kẻ có tội khi này và trong giờ lâm tử. Amen.',

        'Kinh Sáng Danh': 'Sáng danh Đức Chúa Cha, và Đức Chúa Con, và Đức Chúa Thánh Thần.\n\nNhư đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. Amen.',

        'Kinh Lạy Nữ Vương': 'Lạy Nữ Vương, Mẹ nhân lành, làm cho chúng con được sống, được vui, được cậy, thân lạy Mẹ!\n\nChúng con, con cháu E-và ở chốn khách đày kêu đến cùng Bà, chúng con ở nơi khóc lóc than thở kêu khấn Bà thương.\n\nHỡi ôi! Bà là Chúa bầu chúng con, xin ghé mặt thương xem chúng con.\n\nĐến sau khỏi đày, xin cho chúng con được thấy Đức Chúa Giêsu, con lòng Bà gồm phúc lạ.\n\nÔi khoan thay, nhân thay, dịu thay, Thánh Maria trọn đời đồng trinh. Amen.',

        'Lời Nguyện Mân Côi': 'Lạy Chúa Giêsu, xin tha tội cho chúng con, xin cứu chúng con khỏi sa hỏa ngục, xin đem các linh hồn lên thiên đàng, nhất là những linh hồn cần đến lòng Chúa thương xót hơn. Amen.',

        // ===== CHUỖI LÒNG THƯƠNG XÓT CHÚA - KINH CHÍNH =====
        'Kinh Hạt Lớn Lòng Thương Xót Chúa': 'Lạy Cha Hằng Hữu, con xin dâng Cha Mình, Máu, Linh hồn, và Thiên tính của Con yêu dấu Cha là Đức Giêsu Kitô, Chúa chúng con, để đền tạ tội lỗi chúng con và tội lỗi toàn thế giới.',

        'Kinh Hạt Nhỏ Lòng Thương Xót Chúa': 'Vì cuộc tử nạn đau buồn của Chúa Giêsu, xin thương xót chúng con và toàn thế giới.',

        'Lời Nguyện Kết Lòng Thương Xót Chúa': 'Lạy Cha Chí Thánh, Đấng Toàn Năng, Đấng Hằng Hữu, xin thương xót chúng con và toàn thế giới.',

        // ===== CHUỖI LÒNG THƯƠNG XÓT CHÚA - LỜI NGUYỆN GIỜ CAO ĐIỂM (3 GIỜ CHIỀU) =====
        'Lời Nguyện 3 Giờ Chiều': 'Lạy Chúa Giêsu, Chúa vừa trút hơi thở cuối cùng, nhưng nguồn sống đã tuôn trào đến các linh hồn, và cả một đại dương Lòng Chúa Thương Xót được mở ra cho toàn thế giới.\n\nÔi, Nguồn Mạch Sự Sống là Lòng Thương Xót khôn dò, xin hãy bao trùm toàn thế giới và trút hết toàn thân Ngài trên chúng con.',

        'Kinh Máu Và Nước': 'Ôi, Máu và Nước tuôn ra từ Trái Tim Chúa Giêsu để nên nguồn mạch Lòng Thương Xót cho chúng con, con tin cậy vào Chúa.',

        // ===== CÁC KINH KÍNH ĐỨC MẸ =====
        'Kinh Trông Cậy': 'Chúng con trông cậy rất thánh Đức Mẹ Chúa Trời, xin chớ chê chớ bỏ lời chúng con nguyện trong cơn gian nan thiếu thốn. Đức Nữ Đồng Trinh hiển vinh sáng láng, hằng chữa chúng con cho khỏi mọi sự dữ. Amen.',

        'Kinh Hãy Nhớ': 'Lạy Thánh Nữ Đồng Trinh Maria là Mẹ rất nhân từ, xin hãy nhớ xưa nay chưa từng nghe có người nào chạy đến cùng Đức Mẹ, xin bầu chữa cứu giúp mà Đức Mẹ từ bỏ chẳng nhậm lời.\n\nNhân vì sự ấy, con lấy lòng trông cậy than van chạy đến sấp mình xuống dưới chân Đức Mẹ, là Nữ Đồng Trinh trên hết các kẻ đồng trinh. Xin Đức Mẹ đoái đến con là kẻ tội lỗi.\n\nLạy Mẹ là Mẹ Chúa Cứu Thế, xin chớ bỏ lời con kêu xin, một dủ lòng thương mà nhậm lời con cùng. Amen.',

        'Lời Nguyện Dâng Mình Cho Đức Mẹ': 'Lạy Mẹ Maria, con xin dâng cho Mẹ trọn con người con: thân xác, linh hồn, những việc con làm, niềm vui và nỗi buồn của con.\n\nXin Mẹ dẫn con đến gần Chúa Giêsu, dạy con biết lắng nghe Lời Chúa, khiêm nhường vâng theo thánh ý Người và yêu thương mọi người. Xin Mẹ gìn giữ gia đình con trong bình an và nâng đỡ con trung thành với Chúa mỗi ngày. Amen.',

        // ===== THÁNH GIUSE =====
        'Kinh Ông Thánh Giuse Bầu Cử': 'Lạy ơn Ông Thánh Giuse. Chúng con chạy đến cùng Người, trong cơn gian nan chúng con mắc phải. Chúng con đã kêu van cùng Rất Thánh Đức Bà là Đấng đã làm Bạn cùng Người, phù hộ gìn giữ chúng con, thì chúng con cũng lấy lòng trông cậy cho vững vàng, mà xin Ông Thánh Giuse bầu cử cho chúng con như vậy.\n\nChúng con xin vì nhân đức kính mến, mà Người làm Bạn cùng Rất Thánh Đồng Trinh là Mẹ Chúa Trời, và là Đấng chẳng mắc phải tội tổ tông truyền, cùng vì lòng thương Người đã ẵm lấy Đức Chúa Giêsu, thì chúng con xin Ông Thánh Giuse ghé mặt lại mà thương đến Hội Thánh, là phần sản nghiệp Đức Chúa Giêsu đã lấy Máu Thánh mình mà chuộc. Lại xin Người dùng sức mạnh thiêng liêng và quyền phép Người, mà giúp đỡ những sự chúng con còn thiếu thốn.\n\nLạy Đấng đã coi sóc Đức Chúa Giêsu cùng Đức Bà cho cẩn thận, thì chúng con xin Người bênh vực con cái Đức Chúa Giêsu đã chọn. Lạy Cha rất thương yêu! Chúng con xin Người cất mọi sự dối trá cùng mọi tội lỗi, cho chúng con khỏi mắc phải những sự ấy. Lạy Đấng rất mạnh đang ở trên trời hay gìn giữ chúng con, xin Người dủ lòng thương mà che chở chúng con đang khi chiến trận cùng kẻ thù tối tăm là các ma quỷ.\n\nNhư xưa Người đã gìn giữ Đức Chúa Giêsu cho khỏi cơn hiểm nghèo thế nào, thì rầy chúng con cũng xin Người cứu chữa lấy Hội Thánh, cho khỏi các mưu kế giặc thù, và các sự gian nan khốn khó như vậy, cùng xin Người hằng bầu cử cho chúng con được bắt chước Người, và trông cậy vì quyền thế Người, cho được giữ đạo cho trọn, cùng được chết lành, và được hưởng phúc vô cùng trên thiên đàng. Amen.',

        'Lời Nguyện Ngắn Cùng Thánh Giuse': 'Lạy Thánh Giuse, người công chính và là Đấng gìn giữ Chúa Giêsu cùng Đức Maria, chúng con chạy đến xin người che chở.\n\nXin dạy chúng con biết lắng nghe tiếng Chúa, âm thầm chu toàn bổn phận, yêu thương gia đình và trung thành trong mọi thử thách. Xin người cầu bầu cho Hội Thánh, cho những người lao động, cho các gia đình và cho chúng con được sống thánh thiện, chết lành trong ơn nghĩa Chúa. Amen.',

        // ===== CÁC THÁNH VÀ CHÂN PHƯỚC =====
        'Kinh Ông Thánh Lôrensô': 'Chúng con lạy ơn ông Thánh Lôrensô là đấng xưa đã làm nhiều phép lạ và làm cho kẻ tối mắt sáng ra cùng chia cho kẻ khó khăn các của về Hội Thánh. Chúng con xin ông Thánh Lôrensô cầu cho chúng con, đáng chịu lấy những sự Chúa Kitô đã hứa.\n\nChúng con xin Đức Chúa Trời có phép vô cùng làm cho lửa đốt nết xấu hổ trong mình chúng con tắt đi, như ban sức cho ông Thánh Lôrensô chịu được các sự khốn nạn bởi lửa đốt Người mà ra, vì Đức Chúa Giêsu Kitô là Chúa chúng con. Amen.',

        'Lời Nguyện Ngắn Cùng Thánh Lôrensô': 'Lạy Thánh Lôrensô, phó tế và tử đạo, người đã trung thành phục vụ Hội Thánh, yêu thương người nghèo và can đảm làm chứng cho Chúa đến cùng.\n\nXin cầu cho chúng con biết nhận ra Chúa Kitô nơi những người bé nhỏ, biết quảng đại chia sẻ những gì mình có và giữ vững đức tin giữa mọi thử thách. Amen.',

        'Kinh Kính Thánh Martinô de Porres': 'Lạy Thánh Martinô rất khiêm nhường, lòng thương yêu nồng nhiệt của Người chẳng những che chở các anh em túng nghèo, mà lại cả những thú vật ngoài đồng, thật là gương huy hoàng của đức bác ái, chúng con kính mừng và cầu khẩn Người.\n\nTừ tòa cao Người ngự, xin đoái thương nhậm lời anh em túng nghèo kêu xin, để chúng con được bắt chước nhân đức Người mà yên vui trong địa vị Chúa đã đặt, và được mạnh mẽ, can đảm vác Thánh Giá theo chân Chúa Cứu Thế và Mẹ Sầu Bi, sau hết được về nước Thiên Đàng. Vì công nghiệp Chúa Giêsu Kitô là Chúa chúng con. Amen.',

        'Lời Nguyện Ngắn Cùng Thánh Martinô de Porres': 'Lạy Thánh Martinô de Porres, người đã sống khiêm nhường, yêu thương người nghèo, chăm sóc người đau yếu và đem bình an đến cho mọi người.\n\nXin cầu cùng Chúa cho chúng con có một trái tim hiền lành, không phân biệt ai, biết phục vụ bằng những việc nhỏ bé và trở nên khí cụ hòa giải trong gia đình cũng như ngoài xã hội. Amen.',

        'Kinh Thánh Têrêsa Hài Đồng Giêsu': '(Sách kinh Bùi Chu)\n\nLạy ơn bà Thánh Têrêxa Hài đồng Giêsu, Người sống ở đời này không được là bao, mà đã hóa nên gương rất trinh tuyết về đức sạch sẽ như Thiên thần, kính mến Đức Chúa Trời cho vững chí, và được phó mình trong tay Chúa cho trọn vẹn, vậy Người đang hưởng trọn phúc xứng đáng các nhân đức Người đã làm.\n\nCon xin Người ghé mặt lại thương xem chúng con là kẻ hết lòng trông cậy Người; cùng nhận lấy sự lo khốn khó con như là sự âu lo khốn khó Người vậy, mà khẩn nguyện cho con trước mặt Đức Nữ Đồng Trinh Vô Nhiễm Nguyên Tội, vì Người khi còn ở đời này đã được nên như hoa xinh đẹp lòng Đức Mẹ cách riêng; xin Người bầu cử cho con trước tòa Nữ Vương cai trị trên trời, là đấng đã tỏ mình ra mà mỉm cười với Người còn thuở bé, xin Người kêu van cùng Đức Mẹ, vì Người có thần thế rất mạnh cùng Trái tim Đức Chúa Con, để Đức Mẹ cầu bầu cho con một ơn riêng con khát vọng trong giờ này, cùng làm phép lành cho con được vững lòng đang khi còn sống ở đời này, và phù hộ con trong giờ sau hết, đoạn đem linh hồn con về chốn thanh thơi đời đời. Amen.',

        'Lời Nguyện Ngắn Cùng Thánh Têrêsa Hài Đồng Giêsu': 'Lạy Thánh Têrêsa Hài Đồng Giêsu, người đã chọn con đường thơ ấu thiêng liêng, sống đơn sơ, khiêm nhường và hoàn toàn phó thác vào tình yêu Chúa.\n\nXin cầu cho chúng con biết làm những việc nhỏ với tình yêu lớn, kiên vững khi gặp khó khăn và luôn tin tưởng vào lòng thương xót của Thiên Chúa. Amen.',

        'Kinh Ông Thánh Vicente': 'Chúng tôi ơn ông thánh Vincentê, là sự sáng nước Tây Ban Nha, cùng là sự sáng mới nước Ý, và là sự vẻ vang cùng sự phượng danh thành Valentia, kẻ mù, kẻ què, kẻ đã chết cùng kẻ ốm yếu tật nguyền chạy đến cùng Người; sự chết cùng những sự nguy hiểm cheo leo vâng lời Người. Khí trời cùng đám mây, ôn dịch cùng lửa nóng, biển sông cùng sóng gió, ma quỉ cùng thế gian; cả thảy thảy phải thua Người. Các dân thiên hạ hãy vui mừng, hãy đồng thanh kêu tên Vincentê, hãy ngợi khen Người đời đời.\n\nChúng tôi xin ông thánh Vincentê cầu cho chúng tôi.\n\nĐáng chịu lấy những sự Chúa Kitô đã hứa.\n\nChúng tôi cầu xin lạy ơn Đức Chúa Trời xưa đã làm cho ông thánh Vincentê hiển tu được nên cao trọng sáng láng bởi những nhân đức cùng những công nghiệp vô vàn vô số, và đã nghe lời Người cầu xin, mà làm cho kẻ ốm yếu tật nguyền được đã, thì chúng tôi xin Chúa ban sức cho chúng tôi được noi gương bắt chước Người mà khinh chê những sự đời này, cùng trìu mến những sự trên trời, cho được chỗi dậy ra khỏi những tội lỗi chúng tôi đã mắc phải, cùng được khỏi những cơn bệnh nóng nảy phần hồn phần xác, vì lời Người cầu bầu cho chúng tôi, Vì Đức Chúa Giêsu Kitô là Chúa chúng tôi. Amen.',

        'Kinh Chân Phước Phanxicô Xaviê Trương Bửu Diệp': 'Lạy Thiên Chúa toàn năng hằng hữu, chúng con cảm tạ Chúa đã ban cho Giáo Hội Việt Nam một vị mục tử nhân lành là Chân phước Phan-xi-cô Xa-vi-ê Trương Bửu Diệp.\n\nLà một Ki-tô hữu, ngài đã sống xứng đáng ơn gọi làm con Chúa, với lòng tin son sắt, lòng cậy bền đỗ và lòng mến dạt dào đối với Chúa, đối với Giáo Hội và đối với mọi người.\n\nLà một linh mục, ngài nên hiện thân của Đức Ki-tô, vị Mục Tử tối cao, đã tự nguyện hiến dâng mạng sống mình để đoàn chiên được sống và sống dồi dào.\n\nLà một tông đồ luôn thao thức loan báo Tin mừng, ngài phản chiếu lòng thương xót của Chúa đối với anh chị em lương dân và những ai nghèo khổ về phần xác cũng như phần hồn.\n\nThân lạy Chân phước Phan-xi-cô Xa-vi-ê Trương Bửu Diệp, xin cầu bầu cùng Chúa cho chúng con\n\n… (thinh lặng dâng ước nguyện riêng)\n\nXin cho chúng con luôn vững vàng trong niềm tin, nồng nàn trong lòng mến Chúa, và quảng đại quên mình phục vụ tha nhân. Amen.',

        // ===== CÁC TỔNG LÃNH THIÊN THẦN =====
        'Kinh Tổng Lãnh Thiên Thần Micae': 'Lạy Thánh Micae Tổng Lãnh Thiên Thần, xin bảo vệ chúng con trong trận chiến, chống lại sự hiểm ác và mưu chước ma quỷ.\n\nChúng con khiêm nhường xin Thiên Chúa chế ngự nó; và xin ngài là nguyên soái đạo binh thiên quốc, nhờ quyền năng Thiên Chúa, hãy xua đuổi Satan cùng các thần dữ đang rảo quanh thế gian tìm cách làm hại các linh hồn. Amen.',

        'Lời Nguyện Cùng Ba Tổng Lãnh Thiên Thần': 'Lạy các Tổng Lãnh Thiên Thần Micae, Gabriel và Raphael, xin đồng hành với chúng con trên đường theo Chúa.\n\nXin Thánh Micae bảo vệ chúng con trước sự dữ; xin Thánh Gabriel giúp chúng con lắng nghe và can đảm loan báo Lời Chúa; xin Thánh Raphael dẫn đường, chữa lành và nâng đỡ những người đau yếu. Xin các ngài cầu bầu để chúng con luôn sống trong chân lý, bình an và tình yêu của Thiên Chúa. Amen.'
    },

    en: {
        // ===== ROSARY PRAYERS =====
        'Apostles\' Creed': 'I believe in God, the Father almighty, Creator of heaven and earth.\n\nI believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead.\n\nI believe in the Holy Spirit, the holy catholic Church, the communion of saints.\n\nI believe in the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',

        'The Lord\'s Prayer': 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven.\n\nGive us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',

        'Hail Mary': 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\n\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',

        'Glory Be': 'Glory be to the Father, and to the Son, and to the Holy Spirit.\n\nAs it was in the beginning, is now, and ever shall be, world without end. Amen.',

        'Hail Holy Queen': 'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope.\n\nTo thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this vale of tears.\n\nTurn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus.\n\nO clement, O loving, O sweet Virgin Mary. Amen.',

        'Fatima Prayer': 'O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to heaven, especially those in most need of thy mercy. Amen.',

        // ===== DIVINE MERCY CHAPLET - MAIN PRAYERS =====
        'Large Bead Prayer Divine Mercy': 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',

        'Small Bead Prayer Divine Mercy': 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',

        'Closing Prayer Divine Mercy': 'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',

        // ===== DIVINE MERCY CHAPLET - 3 O'CLOCK PRAYERS =====
        '3PM Prayer': 'You expired, O Jesus, but the source of life gushed forth for souls; and an ocean of mercy opened up for the whole world.\n\nO Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.',

        'Blood and Water Prayer': 'O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You.',

        // ===== PRAYERS TO OUR LADY =====
        'Sub Tuum Praesidium': 'We fly to your protection, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.',

        'Memorare': 'Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to your protection, implored your help, or sought your intercession was left unaided.\n\nInspired by this confidence, I fly unto you, O Virgin of virgins, my Mother. To you I come; before you I stand, sinful and sorrowful.\n\nO Mother of the Word Incarnate, despise not my petitions, but in your mercy hear and answer me. Amen.',

        'Prayer of Consecration to Mary': 'Mary, my Mother, I entrust to you my whole self: my body and soul, my work, my joys, and my sorrows.\n\nLead me closer to Jesus. Teach me to listen to God’s word, humbly follow His will, and love every person. Keep my family in peace and help me remain faithful to God each day. Amen.',

        // ===== SAINT JOSEPH =====
        'Prayer to Saint Joseph after the Rosary': 'To you, O blessed Joseph, do we come in our tribulation, and having implored the help of your most holy Spouse, we confidently invoke your patronage also.\n\nThrough that charity which bound you to the Immaculate Virgin Mother of God and through the paternal love with which you embraced the Child Jesus, we humbly beg you graciously to regard the inheritance which Jesus Christ has purchased by his Blood, and with your power and strength to aid us in our necessities.\n\nO most watchful guardian of the Holy Family, defend the chosen children of Jesus Christ; O most loving father, ward off from us every contagion of error and corrupting influence; O our most mighty protector, be kind to us and from heaven assist us in our struggle with the power of darkness.\n\nAs once you rescued the Child Jesus from deadly peril, so now protect God’s Holy Church from the snares of the enemy and from all adversity; shield, too, each one of us by your constant protection, so that, supported by your example and your aid, we may be able to live piously, to die in holiness, and to obtain eternal happiness in heaven. Amen.',

        'Short Prayer to Saint Joseph': 'Saint Joseph, just man and guardian of Jesus and Mary, we come to you for protection.\n\nTeach us to listen to God, faithfully fulfill our duties, love our families, and remain steadfast in every trial. Intercede for the Church, for workers, for families, and for us, that we may live holy lives and die peacefully in God’s grace. Amen.',

        // ===== SAINTS AND BLESSED =====
        'Prayer to Saint Lawrence, Deacon and Martyr': 'O generous patron of the Church’s poor, Saint Lawrence, pray to the one God, Father, Son, and Holy Spirit, that all the poor of the Church in need in every corner of the world may feel the effect of the love of their brothers and sisters who seek to help them.\n\nDeliver the Church from the greed and envy of the powerful and protect her rights and property so that she may serve the needy in freedom, giving them good things for soul and body.\n\nMay we come some day with all those whom we helped on earth to the bright mansions of heaven, where we will enjoy the riches of God’s house and the company of the Savior who lives and reigns forever and ever. Amen.',

        'Short Prayer to Saint Lawrence': 'Saint Lawrence, deacon and martyr, you faithfully served the Church, loved the poor, and courageously witnessed to Christ until death.\n\nPray that we may recognize Christ in the lowly, generously share what we have, and remain firm in faith through every trial. Amen.',

        'Prayer Honoring Saint Martin de Porres': 'Most humble Saint Martin, your fervent love protected not only the poor but even the animals of the fields. You are a radiant example of charity; we honor you and ask your intercession.\n\nFrom your place in heaven, graciously hear the cry of the poor. Help us imitate your virtues, live peacefully in the state of life where God has placed us, and courageously carry the Cross in the footsteps of our Savior and Our Lady of Sorrows, so that at last we may enter the Kingdom of Heaven. Through the merits of Jesus Christ our Lord. Amen.',

        'Short Prayer to Saint Martin de Porres': 'Saint Martin de Porres, you lived humbly, loved the poor, cared for the sick, and brought peace to those around you.\n\nPray that we may have gentle hearts, welcome every person without discrimination, serve through small deeds, and become instruments of reconciliation in our families and communities. Amen.',

        'Short Prayer to Saint Thérèse of the Child Jesus': 'Saint Thérèse of the Child Jesus, you followed the little way of spiritual childhood, living with simplicity, humility, and complete trust in God’s love.\n\nPray that we may do small things with great love, persevere in hardship, and always trust in the mercy of God. Amen.',

        'Prayer to Saint Vincent Ferrer (Vicente)': 'We honor Saint Vincent, the light of Spain, a new light to Italy, and the glory and renown of Valencia. The blind, the lame, the dead, the sick, and the infirm come to him; death and every peril obey him. The sky and clouds, pestilence and fire, rivers and seas with their waves, demons and the world—all yield before him. Let every nation rejoice, call together upon the name of Vincent, and praise him forever.\n\nSaint Vincent, pray for us.\n\nThat we may be made worthy of the promises of Christ.\n\nLet us pray. O God, who made Saint Vincent Your confessor glorious through countless virtues and merits, and who heard his intercession and restored the sick and infirm, grant us the strength to imitate him: to reject the passing things of this world, cherish the things of heaven, rise from the sins we have committed, and be delivered from every fever of soul and body through his intercession. Through Jesus Christ our Lord. Amen.',

        'Prayer to Blessed Francis Xavier Truong Buu Diep': 'Almighty and eternal God, we thank You for giving the Church in Vietnam a good shepherd, Blessed Francis Xavier Truong Buu Diep.\n\nAs a Christian, he lived worthily his calling as a child of God, with steadfast faith, enduring hope, and ardent love for You, for the Church, and for every person.\n\nAs a priest, he became an image of Christ, the Supreme Shepherd, freely offering his life so that the flock might have life and have it abundantly.\n\nAs an apostle always eager to proclaim the Gospel, he reflected Your mercy toward people of other faiths and toward all who were poor in body or spirit.\n\nBlessed Francis Xavier Truong Buu Diep, intercede with God for us.\n\n(Pause to offer your personal intention.)\n\nMay we remain steadfast in faith, fervent in our love for God, and generous in selflessly serving others. Amen.',

        // ===== ARCHANGELS =====
        'Prayer to Saint Michael the Archangel': 'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.\n\nMay God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.',

        'Prayer to the Three Archangels': 'Holy Archangels Michael, Gabriel, and Raphael, accompany us as we follow the Lord.\n\nSaint Michael, defend us from evil. Saint Gabriel, help us listen to and courageously proclaim God’s word. Saint Raphael, guide, heal, and strengthen the sick. Intercede for us, that we may always live in God’s truth, peace, and love. Amen.'
    }
};

// Also expose to window for extra safety
window.prayersData = prayersData;

// Keep Node.js export for compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = prayersData;
}

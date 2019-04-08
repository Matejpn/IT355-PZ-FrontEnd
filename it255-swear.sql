-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2018 at 02:19 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

create database it255swear;
use it255swear;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255-swear`
--

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Nike'),
(2, 'Adidas'),
(3, 'New Balance');

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`id`, `name`) VALUES
(2, 'Male'),
(3, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `kategorija`
--

CREATE TABLE `kategorija` (
  `id` int(11) NOT NULL,
  `naziv` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategorija`
--

INSERT INTO `kategorija` (`id`, `naziv`) VALUES
(1, 'Patika'),
(2, 'Trenerka');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE `korpa` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korpa`
--

INSERT INTO `korpa` (`id`, `user_id`, `flag`) VALUES
(1, 24, 1),
(2, 5, 2),
(3, 5, 2),
(4, 5, 2),
(5, 27, 2),
(6, 27, 1),
(7, 5, 2),
(8, 5, 2),
(9, 5, 2),
(10, 5, 2),
(11, 5, 2),
(12, 5, 2),
(13, 13, 2),
(14, 5, 1),
(15, 13, 1);

-- --------------------------------------------------------

--
-- Table structure for table `narudzbina`
--

CREATE TABLE `narudzbina` (
  `id` int(11) NOT NULL,
  `korpa_id` int(11) NOT NULL,
  `idProizvoda` int(11) NOT NULL,
  `kolicina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `narudzbina`
--

INSERT INTO `narudzbina` (`id`, `korpa_id`, `idProizvoda`, `kolicina`) VALUES
(180, 1, 4, 1),
(183, 5, 1, 1),
(228, 9, 15, 7),
(244, 13, 1, 10),
(246, 14, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `prodavnica`
--

CREATE TABLE `prodavnica` (
  `id` int(11) NOT NULL,
  `naziv` text NOT NULL,
  `adresa` text NOT NULL,
  `radnoVreme` text NOT NULL,
  `urlMape` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prodavnica`
--

INSERT INTO `prodavnica` (`id`, `naziv`, `adresa`, `radnoVreme`, `urlMape`) VALUES
(1, 'SportsWear', 'Ivankovacka 6, Beograd', 'Ponedeljak - Nedelja 09h-20h\r\n', 'sadas');

-- --------------------------------------------------------

--
-- Table structure for table `proizvod`
--

CREATE TABLE `proizvod` (
  `id` int(11) NOT NULL,
  `katID` int(11) NOT NULL,
  `ime` text NOT NULL,
  `brand_id` int(11) NOT NULL,
  `cena` int(11) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proizvod`
--

INSERT INTO `proizvod` (`id`, `katID`, `ime`, `brand_id`, `cena`, `url`) VALUES
(1, 1, 'Air Huarache', 1, 120, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKayIdOFL2MD97w0y4qa8lr1U8arX9aMMDawIPExD_ySPdJiAlQ'),
(2, 1, 'Roshe One', 1, 100, 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/vh0o39z7diaqmozcpssi/roshe-one-mens-shoe-3zTbJdBZ.jpg'),
(3, 1, 'Air Max 270', 1, 140, 'https://4.kixify.com/sites/default/files/imagecache/product_list/product/2018/05/21/p_22928661_117975071_5732876.jpg'),
(4, 1, 'Tubular Women\'s', 2, 90, 'https://www.sneakersgear.com/16161-home_default/adidas-tubular-shadow-knit-unisex-running-whitecore-black-bb8941.jpg'),
(5, 1, '574', 3, 60, 'http://www.petservantlv.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/s/h/shoes_new_balance_ml574saa_nb_14_i_discount.jpg'),
(6, 1, 'ZX Flux', 2, 90, 'http://www.maxinejonesdesign.co.uk/images/Sneakers%20UK/Men%20s%20Shoes%20Adidas%20ZX%20Flux%20ADV%20Asymm328.jpg'),
(7, 1, 'NMD', 2, 70, 'http://www.honeyfieldtrailers.co.uk/images/Sneakers%20UK/Tubular%20Defiant%20398%20Adidas%20Tubular%20Defiant%20Women%20s%20Shoes.jpg'),
(8, 1, '996', 3, 60, 'http://www.leviathanseo.co.uk/images/Sneakers%20UK/New%20Balance%20996%20Men%20s%20New%20Balance%20996%20Ski%20Made%20In%20US%20825.jpg'),
(9, 1, 'Fresh Lezr', 3, 60, 'data:image/jpeg;base64,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adEQwXObjdzjxJOaxrcun8taTHq1tPZVer/FqfCb9FP5vN5FvJbDA7HoUfkpifqPicerjdZ6LUwk3S5XohSiLbIiIgIiICIiCEREEoiIIha/aGxqNa7mw7R7TuuHmM/NbFFLJeqy2dHlq+ycZSvSqNrN+moN1/8AmFj1IWvqbaqUjFfD1afMDfb6i/svcQhaDmud4d/HLTz/AL5bmc/Kf08bh+0GHflVbPA2PoYKzqeLYciD0K2mM2Fhqvz0WHnEH2Wpr9hcIfk+JTP3Hn81n7s7S+F+3e9nlkCr18lPxYydPJa89jXt/h4yq3k4b35hQezeNHy4tvmxOfKfhfH7OTHtlPLYGpOqjeP1Stf/APHMcc8W3yYqh2RrO/iYyoRwaI95Tny7YXx+zkx75Tz+mVWxLGiXuDepAWuq7fw4s0mq7hTaXe+XutjhuxWEaZeH1Dxe6Vu8LgKVIRTY1vQBNOLfaeT7c974eXotx1f5KbaDD9qod53UNyC2mzezNKmd+oXVqn1PuB0bkFvIUrU4U65bpeJek2RClEXVzEREBERAREQEREBERBCIiCUREBERAREQERECEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z'),
(10, 2, 'Tech Nite', 2, 80, 'https://www.aphrodite1994.com/media/catalog/product/cache/1/small_image/250x/1aaff30b52f4c5aabd76de7c932173d6/n/i/nike_tech_jacket_heather_black_grey_11274_01.jpg'),
(11, 2, 'Windrunner Jacket ', 1, 50, 'http://www.aquaexpress.co.uk/images/aquaexpress.co.uk/Comfortable-Wear-black-white-nike-windrunner-jacket-mens-3W.jpg'),
(12, 2, 'Tennis Shorts', 1, 25, 'https://basketo.co.uk/eng_il_Nike-BlackTop-Shorts-831392-435-20406.jpg'),
(13, 2, 'Track-Pants', 1, 30, 'https://basketo.co.uk/eng_il_Nike-BlackTop-Shorts-831392-435-20406.jpg'),
(14, 2, 'Tennis Skirt', 3, 40, 'https://www.decathlon.co.uk/media/837/8372767/classic_ee12584f-302d-4e28-9221-9bff1fe2fb79.jpg'),
(15, 2, 'Sport T-Shirt', 1, 10, 'https://5.imimg.com/data5/EV/RX/MY-3712041/nike-dry-fit-t-shirts-250x250.png'),
(16, 2, 'T-Shirt', 3, 12, 'https://store.rolandgarros.com/media/catalog/product/cache/4/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/a/t/atsw0318-ecr-beige-adidas-tee-shirt-manches-courtes-en-jersey-adidas-roland-garros-femme---ecru-tint-4.jpg'),
(17, 2, 'SweatShirt', 3, 20, 'https://kickz.akamaized.net/en/media/images/p/250/new_balance-MT81574_Sweatshirt-AG_ATHLETIC_GREY-1.jpg'),
(18, 2, 'Pocket T-Shirt', 1, 12, 'https://fgl.scene7.com/is/image/FGLSportsLtd/332416497_06_a-Nike-Dry-Mens-Legend-Camo-Printed-T-Shirt-909350-027?resMode=sharp2&op_sharpen=1&hei=250&wid=250');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(0, 'User'),
(1, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `address` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `role_id` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `address`, `email`, `password`, `role_id`, `token`) VALUES
(1, 'Wyatt', 'Ray', 'Amet natus anim dignissimos eos ut omnis commodo aliqua Ullamco', 'zogakitica@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, 'af0b4384d000b84b82f16d4472a0614f55dd4870'),
(2, 'Gareth', 'Mendoza', 'Accusantium in officia consectetur et totam rem beatae', 'jegatotul@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, 'dccf3dadf0c78d2bf37025200192a29949268152'),
(3, 'Zenia', 'Colon', 'Minim animi occaecat totam nemo eos pariatur Enim dignissimos totam', 'rytob@mailinator.net', '21232f297a57a5a743894a0e4a801fc3', 0, '183c0d8e8aecd1150ef32edee4c7941e4150dcd7'),
(4, 'Hedy', 'Macdonald', 'Voluptas magnam nemo consectetur sit', 'xavamy@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, '47f6c9d8a59e24eeb53ebdaa56f13c9f41662eac'),
(5, 'Matej', 'Petrovic ', 'Ivankovacka 6', 'matejp91@gmail.com', '32b129e5f0ea3b6909afad64979b6187', 1, '4f55591d0e1ef7d1204dd4ad347287ff06f69d6c'),
(6, 'Ivy', 'Torres', 'Sint tenetur enim voluptatem qui aut numquam autem aliquip dolor qui enim dolor', 'weto@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, 'caeaf2f6d15d765800bc9f151a82a35f9a418757'),
(7, 'Justine', 'Newman', 'Sit fuga Non accusamus lorem itaque minus perferendis obcaecati voluptate', 'tenulohola@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, '8d430003423bed465f47cf3edf689c4efd59a635'),
(8, 'Petra', 'Solis', 'Impedit cupidatat cillum debitis deserunt sit eum Nam ex illo excepturi nostrum excepturi voluptas dignissimos nihil', 'qakelati@mailinator.net', 'c5c1c1c6bfb1ac9e3271536994530701', 0, '022a1c3384d5ebbe3a237d3bf34b9527f300daa4'),
(9, 'Placeat ullamco expedita dolor nihil minus et vel non nostrum eum voluptas earum sint sunt quis adipisci', 'Et molestiae vitae eligendi est', '', 'wurimigice@mailinator.net', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 0, '325e1efeed825f58d4e2dd1f768e459c8903c27f'),
(10, 'Ivy', 'Santiago', 'Dolor illum est sed fugiat excepturi autem rerum sit in corrupti quibusdam id rem ut sint', 'Cum omnis do veritatis fugiat officiis qui impedit dolor pariatur Nulla voluptate quo ut ut dolorem', '1c1fcbb73a3286ec2b414007a5406638', 0, 'd3e14fe785b6b63ffd64b2f29846b911ecbeedf6'),
(11, 'Herrod', 'Branch', 'Qui perspiciatis ratione enim accusantium officia eum', 'djole', '12e4ab372d691ef8dd83060fac440a58', 0, '741266212c5828dc090ca862706c7ccaaec353b1'),
(12, 'Bradley', 'Huff', 'Provident assumenda lorem ullamco aute distinctio Distinctio Dolor pariatur Assumenda deleniti sint', 'Sit eu aut laborum id reprehenderit proident', '54ffebe4ede76559061773c228e8dabf', 0, 'e83c3ea0379772653a564603dd552d71788aa6a8'),
(13, 'Peter', 'Avila', 'matej', 'matej', '485c859f2df22f1147ba3798b4485d48', 0, '5d298396301c84f53806fa5efdfd9dc3d7330758'),
(14, 'Jesse', 'Buck', 'Est vero voluptatibus hic veritatis quaerat consequatur rem natus sit dolorum ut aut in', 'Magna neque nisi iure officia corrupti aut dolorem', '47af3c0842758686f942bf660a44c994', 0, '3bba332ccb4c91c392f39a29be15376c57469961'),
(15, 'Dennis', 'Yates', 'In atque quia eiusmod corporis aut', 'Cum sint vitae maiores est facilis adipisci voluptatem Voluptatem minima sed', '9459f053a2f37ca0a27479fe7f2c89bc', 0, '9eae7a2216bc18960a8a88ffb51f3259f2432912'),
(16, 'luka', 'petrovic', 'maamsas', 'dsaasdasda', '2e4f22d6c537aac7840ed3e98fcef21d', 0, '20d8f9b5db1d4c0fbbc87373e0da7c78e8876d34'),
(17, 'ivaaaaaaaaa', 'ivaaaaaaaaaaaaa', 'ivaaaaaaaaaa', 'ivaaaaaaaaaa', '44e7b5e3c15bebbccf2fb2d5eb60ca1d', 0, 'eee1c32d43fbdf1486e023f47282542dfef589ce'),
(18, 'iva', 'golubovi', 'dostojevskog 4', 'ivagolubovic@gmail.com', '9fabf350e51bb2973c7eda08cd87f911', 0, '901507c98e926f8a217321195e9d0968f2f1f91d'),
(19, 'Casey', 'Barber', 'Libero assumenda minim illum soluta unde facere ut corporis deleniti qui at aut dolorem aut do quidem', 'Enim ratione irure ex voluptas fuga Voluptatem odio aliquid qui dignissimos soluta fuga', '4a665ec568b5be7eef7eab7b2b07504e', 0, 'c7344a74889d7528da78f8489e003992163494a7'),
(20, 'Shelley', 'Macias', 'Quas sit voluptatum sint ut ut sed temporibus sit ullam consequuntur anim est quae est enim rem ducimus ipsam vel', 'Libero ut minus sed velit et veniam atque ullam excepteur iusto in atque dolor sed', '82af5f98dcc44a57edba6aa7e9af5e9c', 0, '079a41c1784d751b8c8d2234f560e3b96a076529'),
(21, 'Buffy', 'Bates', 'Est aliquam illum voluptate perspiciatis ut non ea architecto ratione saepe dignissimos blanditiis molestiae atque voluptatem in in ex qui', 'peraperapera', '192f590f1e150c5fb987109aea848053', 0, '537307fa7ebfc5ae28daf6a9796328ce03e21e1c'),
(22, 'Aurora', 'Mcmillan', 'Mollit occaecat velit laboris voluptatem quo nostrum quo et id quisquam cupiditate voluptate quis', 'noviakaunt', '7bba00468b1e42fd139f1cdec1cef275', 0, '57b8d9f76ba13b564990c0a6a6afbc7105f031f3'),
(23, 'Dalton', 'Palmer', 'Officiis labore delectus cupidatat voluptatem sint autem amet sed voluptatem voluptatibus ex minim Nam tempore et duis', 'matejpetrovic', '3d4699ff84715dfd49f39f4229452974', 0, 'd2489e8008be2a85ee45667ac6fdae62d3e3a80f'),
(24, 'Xandra', 'Adkins', 'Ducimus ut quia ut non', 'djolence', 'c788bd6e77f781a4cdc3e98b2d706797', 0, '16c02ab66f13730ad53bc645d0ea127f4094744b'),
(25, 'Lunea', 'Davenport', 'Nisi libero aliquam velit et sed eos cum est quo a consectetur delectus ipsa officia quo ullam tempor sunt', 'pekica', '9f021d6fa57c8c8f8553e11c7bff08de', 0, 'e971edc37034b7b5c0d2e7c0ceccca030ee635e0'),
(26, 'Hadley', 'Chandler', 'Officia incidunt velit quo libero error explicabo Quis', 'djokica', '1f4ba891729c32a3428e3d967dbb2014', 0, 'a6ac7a12939af6e533bf07eccf9b2116ba21574a'),
(27, 'Matej', 'Petrovic', 'Dostojevskog 1', 'matejpn97', 'eece0d74601ab49387f752df4b70a1ec', 0, '1e73b3a88c32e9d9efdbde21c26ac5cdb9900808');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategorija`
--
ALTER TABLE `kategorija`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korpa`
--
ALTER TABLE `korpa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `narudzbina`
--
ALTER TABLE `narudzbina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `korpa_id` (`korpa_id`),
  ADD KEY `idProizvoda` (`idProizvoda`);

--
-- Indexes for table `prodavnica`
--
ALTER TABLE `prodavnica`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proizvod`
--
ALTER TABLE `proizvod`
  ADD PRIMARY KEY (`id`),
  ADD KEY `katID` (`katID`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kategorija`
--
ALTER TABLE `kategorija`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `korpa`
--
ALTER TABLE `korpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `narudzbina`
--
ALTER TABLE `narudzbina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `prodavnica`
--
ALTER TABLE `prodavnica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proizvod`
--
ALTER TABLE `proizvod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `korpa`
--
ALTER TABLE `korpa`
  ADD CONSTRAINT `korpa_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `narudzbina`
--
ALTER TABLE `narudzbina`
  ADD CONSTRAINT `narudzbina_ibfk_1` FOREIGN KEY (`korpa_id`) REFERENCES `korpa` (`id`),
  ADD CONSTRAINT `narudzbina_ibfk_2` FOREIGN KEY (`idProizvoda`) REFERENCES `proizvod` (`id`);

--
-- Constraints for table `proizvod`
--
ALTER TABLE `proizvod`
  ADD CONSTRAINT `proizvod_ibfk_1` FOREIGN KEY (`katID`) REFERENCES `kategorija` (`id`),
  ADD CONSTRAINT `proizvod_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

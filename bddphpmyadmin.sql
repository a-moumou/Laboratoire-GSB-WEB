-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 20 déc. 2024 à 21:11
-- Version du serveur : 5.7.24
-- Version de PHP : 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gsb_2`
--

-- --------------------------------------------------------

--
-- Structure de la table `active_tokens`
--

CREATE TABLE `active_tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `active_tokens`
--

INSERT INTO `active_tokens` (`id`, `user_id`, `token`, `created_at`, `expires_at`) VALUES
(1, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI3MTI3LCJleHAiOjE3MzQ4MTM1Mjd9.3AhD6nUxKlwK-ubpzsDGtA8yaWdn0TgTaGzZsisE-FM', '2024-12-20 20:38:47', '2024-12-21 20:38:47'),
(2, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI3MzE4LCJleHAiOjE3MzQ4MTM3MTh9.AjH1X0-dNryl5IkurG3HL0TS-xUNBk0UBt8vt4IIuJA', '2024-12-20 20:41:58', '2024-12-21 20:41:58'),
(3, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI3NDY0LCJleHAiOjE3MzQ4MTM4NjR9.H1zDsGSwLB5-kDqVH9Sqpqg2_pbW3PI2a9btMM16JYs', '2024-12-20 20:44:24', '2024-12-21 20:44:24'),
(4, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI3NjIwLCJleHAiOjE3MzQ4MTQwMjB9.lUHtf3WFSa2_hqIOlw0jUq2GiLVfNAM5oBsIkAv0VlI', '2024-12-20 20:47:00', '2024-12-21 20:47:00'),
(5, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJqZWFuQGdzYi5mciIsIm5hbWUiOiJKZWFuIER1cG9udCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0NzI3ODA5LCJleHAiOjE3MzQ4MTQyMDl9.Rfm0ZXnIeL_fgBfYEqeDJ8KN-fR6p_gt0NvpRxumWFM', '2024-12-20 20:50:09', '2024-12-21 20:50:09'),
(6, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI4MDA4LCJleHAiOjE3MzQ4MTQ0MDh9.kFcXT9uYT_I4OjA1rv_HxLf_e8QAQ3Ue4xnC61aZ9OI', '2024-12-20 20:53:28', '2024-12-21 20:53:28'),
(7, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI4Mzg0LCJleHAiOjE3MzQ4MTQ3ODR9.LpTGaCUR8M-r9XuaC8bQIbwVFOH04-yh8-Kk80ClCew', '2024-12-20 20:59:44', '2024-12-21 20:59:44'),
(8, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI4NDAyLCJleHAiOjE3MzQ4MTQ4MDJ9.QW11dCebpxr_4eLQrQEUiK42i8RoVu6nnXYc7DEN-Hk', '2024-12-20 21:00:02', '2024-12-21 21:00:02'),
(9, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnc2IuZnIiLCJuYW1lIjoiQWRtaW4gR1NCIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzM0NzI4NjY3LCJleHAiOjE3MzQ4MTUwNjd9.hb7nQIOgVcQNXnbus10hMDlm9HjK0aFkPEjbfVADRSo', '2024-12-20 21:04:27', '2024-12-21 21:04:27');

--
-- Déclencheurs `active_tokens`
--
DELIMITER $$
CREATE TRIGGER `set_token_expiry` BEFORE INSERT ON `active_tokens` FOR EACH ROW SET NEW.expires_at = DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 24 HOUR)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(2, 'Admin Test', 'admin@gsb.fr', 'admin123', '2024-12-20 18:41:04');

-- --------------------------------------------------------

--
-- Structure de la table `blacklisted_token`
--

CREATE TABLE `blacklisted_token` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `revoked_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Antibiotiques', NULL),
(2, 'Antidouleurs', NULL),
(3, 'Antiinflammatoires', NULL),
(4, 'Vitamines', NULL),
(5, 'Antibiotiques', NULL),
(6, 'Antidouleurs', NULL),
(7, 'Antiinflammatoires', NULL),
(8, 'Vitamines', NULL),
(9, 'Antibiotiques', NULL),
(10, 'Antidouleurs', NULL),
(11, 'Antiinflammatoires', NULL),
(12, 'Vitamines', NULL),
(13, 'Antibiotiques', NULL),
(14, 'Antidouleurs', NULL),
(15, 'Antiinflammatoires', NULL),
(16, 'Vitamines', NULL),
(17, 'Antibiotiques', NULL),
(18, 'Antidouleurs', NULL),
(19, 'Antiinflammatoires', NULL),
(20, 'Vitamines', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `name`, `email`, `password`, `address`, `phone`, `created_at`) VALUES
(2, 'Client Test', 'user@test.fr', 'user123', '123 Rue de Test, 75000 Paris', '0612345678', '2024-12-20 18:41:04'),
(3, 'Admin GSB', 'admin@gsb.fr', 'admin123', 'Paris', NULL, '2024-12-20 20:35:21'),
(5, 'Jean Dupont', 'jean@gsb.fr', 'user123', 'Paris', NULL, '2024-12-20 20:49:39'),
(6, 'Marie Martin', 'marie@gsb.fr', 'user123', 'Lyon', NULL, '2024-12-20 20:49:39'),
(7, 'Pierre Durand', 'pierre@gsb.fr', 'user123', 'Marseille', NULL, '2024-12-20 20:49:39'),
(8, 'Sophie Bernard', 'sophie@gsb.fr', 'user123', 'Bordeaux', NULL, '2024-12-20 20:49:39'),
(9, 'Lucas Petit', 'lucas@gsb.fr', 'user123', 'Lille', NULL, '2024-12-20 20:49:39');

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

CREATE TABLE `command` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `command_details`
--

CREATE TABLE `command_details` (
  `id` int(11) NOT NULL,
  `command_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price_at_time` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT '0',
  `bestseller` tinyint(1) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `active_tokens`
--
ALTER TABLE `active_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `blacklisted_token`
--
ALTER TABLE `blacklisted_token`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `command_details`
--
ALTER TABLE `command_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `command_id` (`command_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `active_tokens`
--
ALTER TABLE `active_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `blacklisted_token`
--
ALTER TABLE `blacklisted_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `command`
--
ALTER TABLE `command`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `command_details`
--
ALTER TABLE `command_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `active_tokens`
--
ALTER TABLE `active_tokens`
  ADD CONSTRAINT `active_tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `client` (`id`);

--
-- Contraintes pour la table `command`
--
ALTER TABLE `command`
  ADD CONSTRAINT `command_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

--
-- Contraintes pour la table `command_details`
--
ALTER TABLE `command_details`
  ADD CONSTRAINT `command_details_ibfk_1` FOREIGN KEY (`command_id`) REFERENCES `command` (`id`),
  ADD CONSTRAINT `command_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Nov 2022 pada 12.15
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prak5`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mhs`
--

CREATE TABLE `mhs` (
  `id` int(11) NOT NULL,
  `nim` varchar(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `prodi` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mhs`
--

INSERT INTO `mhs` (`id`, `nim`, `nama`, `prodi`) VALUES
(1, '120140048', 'Fitra Ilyasa', 'IF'),
(2, '120140180', 'Merysah', 'IF'),
(3, '120130001', 'Haikal', 'EL'),
(4, '120130002', 'Emirsyah', 'EL'),
(5, '120140004', 'Andi', 'GL'),
(6, '120140003', 'Rendi', 'GL'),
(7, '120140038', 'Adi', 'TG'),
(8, '120140001', 'Komar', 'ME'),
(9, '120140005', 'Dodi', 'TG'),
(10, '120140006', 'Jody', 'ME');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mhs`
--
ALTER TABLE `mhs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mhs`
--
ALTER TABLE `mhs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

<?php
$ambil = curl_init ("http://www.sundul.com/jadwal-siaran-bola-iframe/");
curl_setopt($ambil, CURLOPT_RETURNTRANSFER, true);
$halaman = curl_exec($ambil);
preg_match('#<table[^>]*>(.+?)</table>#is', $halaman, $cocok);
foreach ($cocok as &$benar) {
    $benar = $benar;
}
echo '<table>';
    echo $cocok[1];
echo '</table>';
?>
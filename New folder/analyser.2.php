<?php
print_r($http_response_header); // see response headers
set_time_limit(0);
$html = file_get_contents("https://mc.championdata.com/data/10985/109850102.json");



file_put_contents("http://www.lightningdatahub.com/out.json", fopen("https://mc.championdata.com/data/10985/109850102.json"));

?>
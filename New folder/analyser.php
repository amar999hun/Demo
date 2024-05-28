<?php
$context = stream_context_create([
    'http' => [
        'user_agent' => 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)',
    ],
]);
$html = file_get_contents('http://mc.championdata.com/data/10985/109850102.json', false, $context);

print_r($http_response_header); // see response headers

$strJsonFileContents = file_get_contents('http://mc.championdata.com/data/10985/109850102.json'); //get the html returned from the following url

file_put_contents("out.json", file_get_contents("http://mc.championdata.com/data/10985/109850102.json"));

$array = json_decode($strJsonFileContents,true);
/*var_dump($array);*/
foreach ($array as $key => $jsons) { // This will search in the 2 jsons
     foreach($jsons as $key => $value) {
         echo $value; // This will show jsut the value f each key like "var1" will print 9
                       // And then goes print 16,16,8 ...
    }
}


?>
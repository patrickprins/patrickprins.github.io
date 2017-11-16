<?php

function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}
$user_ip = getUserIP();


$to = 'resultaten@patrickprins.nl';
$subject = 'Study2 Order';
$content = $_POST;
$body = '';
$body .= 'Study2 order:

';
$body .= $user_ip;

if ($user_ip == '83.80.229.63') {
    $body .= ' (ben ik zelf)';
}

  $body .= '
  ';
  $body .= '
  ';

for($i=1; $i < $content['itemCount'] + 1; $i++) {
  $name = 'item_name_'.$i;
  $quantity =  'item_quantity_'.$i;
  $price = 'item_price_'.$i;
  $body .= 'item #'.$i.': ';
  $body .= $content[$name].', hoeveelheid = '.$content[$quantity].', prijs = '.$content[$price];
  $body .= '
  ';
}
$headers = 'From: study2@clickandeat.com' . "\r\n" .
          'Reply-To: study2@clickandeat.com' . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $body, $headers);
Header('Location: ../outro2.html');
?>
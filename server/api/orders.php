<?php
$link = get_db_link();


if ($request['method'] === 'POST') {
  $cartIDReturned = getCart();
  $bodyReturned = getBody($request);
  $placeOrderReturned = placeOrder($cartIDReturned, $bodyReturned, $link);
  $response['body'] = $placeOrderReturned;
  send($response);
}

function getCart (){
  if (isset($_SESSION['cartId'])){
    $cartID = $_SESSION['cartId'];
    return $cartID;
  }
  throw new ApiError("No cart exists", 404);
}

function getBody($request){
  if (!isset($request['body']['name'])) throw new ApiError("'name' not received", 400 );
  if (!isset($request['body']['creditCard'])) throw new ApiError("'credit card' not received", 400);
  if (!isset($request['body']['shippingAddress'])) throw new ApiError("'shipping address' not received", 400);

  return [
    'name' => $request['body']['name'],
    'creditCard' => $request['body']['creditCard'],
    'shippingAddress' => $request['body']['shippingAddress']
  ];
}

function placeOrder($cartIDReturned, $bodyReturned, $link){
  $sql = "INSERT INTO `orders`(`cartId`, `name`, `creditCard`, `shippingAddress`) VALUES (?, ?, ? ,?)";

  $statement = mysqli_prepare($link, $sql);
  $name = $bodyReturned['name'];
  $creditCard = $bodyReturned['creditCard'];
  $shippingAddress = $bodyReturned['shippingAddress'];

  mysqli_stmt_bind_param($statement, 'isis', $cartIDReturned, $name, $creditCard, $shippingAddress);
  mysqli_stmt_execute($statement);
  $insertId = $link->insert_id;

  if(empty($insertId)){
    throw new ApiError("Failed to insert", 400);
  } else {
    unset($_SESSION['cartId']);
    return $insertId;
  }
}

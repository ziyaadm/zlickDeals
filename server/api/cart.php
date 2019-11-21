<?php

function check_connection($link)
{
  $sql = 'select 1';
  $link->query($sql);
  return 'Successfully connected to MySQL!';
}
function checkNum($productIdGiven)
{
  if ((is_numeric($productIdGiven) && $productIdGiven > 0 && $productIdGiven == round($productIdGiven))) {
    return TRUE;
  } else {
    throw new ApiError('Please input a valid number', 400);
  }
}
  //if request is GET and cartid is available
if ($request['method'] === 'GET') {
  if ((isset($_SESSION['cartId']))){
    $link = get_db_link();
    $message = check_connection($link);
    $sqlz ="
    SELECT * FROM `cartItems`
    WHERE `cartId` = {$_SESSION['cartId']}
    ";
    $resultz = $link->query($sqlz);
    $productz = $resultz->fetch_all(MYSQLI_ASSOC);
    $response['body'] = [
      $productz
    ];
    send($response);
  }
  //if request is GET and cartid is NOT available (then create empty array)
    if ((!isset($_SESSION['cartId']))) {
      $link = get_db_link();
      $message = check_connection($link);
      $response['body'] = [];
      send($response);
    }
  }
//if request is POST and productId is NOT set or INVALID
if ((!isset($request['body']['productId'])) || checkNum($request['body']['productId'])) {
  throw new ApiError('Please input a valid number', 400);
}
  //if request is POST and productId is set and valid
if ($request['method'] === 'POST') {
  if ((isset($request['body']['productId'])) && checkNum($request['body']['productId'])) {
    $link = get_db_link();
    $message = check_connection($link);

    $matchingProduct = $request['body']['productId'];
    $sql = "
      SELECT  `price`
            FROM `products`
                WHERE `productId`={$matchingProduct}
    ";

    $result = $link->query($sql);
    $products = $result->fetch_all(MYSQLI_ASSOC);
    $matchingProductResult = $products[0];

    // unset($_SESSION['cartId']);
    if(!$_SESSION['cartId']) {
      $sql2 = "
      INSERT INTO `carts`(`createdAt`)
      VALUES (CURRENT_TIMESTAMP)
    ";
      $result2 = $link->query($sql2);
      $_SESSION['cartId'] = mysqli_insert_id($link);
    // $insertResultId2 = mysqli_insert_id($link);
    }

    $cartId = $_SESSION['cartId'];


    $sql3 = "
      INSERT INTO `cartItems` (`cartId`,`price`,`productId`)
      VALUES ($cartId,{$matchingProductResult['price']},{$matchingProduct})
    ";

    $result3 = $link->query($sql3);
    $insertResultId3 = mysqli_insert_id($link);

    $sql4 = "
      SELECT cartItems.cartItemId, products.productId,products.name,products.price,products.image,products.shortDescription
      FROM cartItems
      INNER JOIN products ON cartItems.productId=products.productId
      WHERE `cartItemId` = {$insertResultId3}

    ";
    $result4 = $link->query($sql4);
    $insertResultId4 = $result4->fetch_all(MYSQLI_ASSOC);
    $matchingProductFinal = $insertResultId4;


    $response['body'] = [
      $matchingProductFinal
    ];
    send($response);
  }
}

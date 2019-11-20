<?php

$productIdGiven = ($_GET['productId']);
//Checks ID and returns true if valid
function checkNum($productIdGiven){
  if ((is_numeric($productIdGiven) && $productIdGiven > 0 && $productIdGiven == round($productIdGiven))){
    return TRUE;
  } else {
    throw new ApiError('Please input a valid number', 400);
  }
}
//Returns specific product
if ($request['method'] === 'GET'){
  if ((isset($_GET['productId']))){
    if(checkNum($productIdGiven)) {
      $link = get_db_link();
      $matchingProduct = $request['query']['productId'];
      $sql = "
      SELECT `productId`,
              `name`,
              `price`,
              `image`,
              `shortDescription`,
              `longDescription`
            FROM `products`
                WHERE `productId`={$matchingProduct}
    ";
        $result = $link->query($sql);
        $products = $result->fetch_all(MYSQLI_ASSOC);
        $product = $products[0];
        if(empty($product)){
        throw new ApiError('No matching product', 404);
        } else{
        $response['body'] = $product;
        send($response);
        }
    }
  }
}
//Returns all products if no ID is specified
if ($request['method'] === 'GET') {
  if ((!isset($_GET['productId']))){
  $link = get_db_link();
  $sql = '
      SELECT `productId`,
              `name`,
              `price`,
              `image`,
              `shortDescription`
            FROM `products`
    ';
  $result = $link->query($sql);
  $products = $result->fetch_all(MYSQLI_ASSOC);
  $response['body'] = $products;
  send($response);
  }
}

?>

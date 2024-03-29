export const deliveryOptions = [{
  id: '1',
  delievryDays: 7,
  priceCents: 0
},{
  id: '2',
  delievryDays: 3,
  priceCents: 499
},
{
  id: '3',
  delievryDays: 1,
  priceCents: 999
}
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

    deliveryOptions.forEach((option) => {
      if(option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    return deliveryOption;
}
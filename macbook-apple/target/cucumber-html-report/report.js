$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Order macbook with accessories.feature");
formatter.feature({
  "line": 1,
  "name": "Order macbook with accessories",
  "description": "",
  "id": "order-macbook-with-accessories",
  "keyword": "Feature"
});
formatter.before({
  "duration": 250459400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the url \"https://www.apple.com/uk/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.apple.com/uk/",
      "offset": 9
    }
  ],
  "location": "Stepdefinitions.the_url(String)"
});
formatter.result({
  "duration": 5833504200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "A MacBook \"15\" with accessories can be ordered on the website",
  "description": "",
  "id": "order-macbook-with-accessories;a-macbook-\"15\"-with-accessories-can-be-ordered-on-the-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I choose a MacBook Pro with the following features and accessories",
  "rows": [
    {
      "cells": [
        "Option",
        "Specification"
      ],
      "line": 9
    },
    {
      "cells": [
        "Screen",
        "15"
      ],
      "line": 10
    },
    {
      "cells": [
        "Processor",
        "2.9GHz"
      ],
      "line": 11
    },
    {
      "cells": [
        "Memory RAM",
        "16GB"
      ],
      "line": 12
    },
    {
      "cells": [
        "Colour",
        "Silver"
      ],
      "line": 13
    },
    {
      "cells": [
        "Software",
        "Logic Pro X"
      ],
      "line": 14
    },
    {
      "cells": [
        "Display adapter",
        "USB-C to USB Adapter"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I can place an order for it.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinitions.i_go_to_the_url()"
});
formatter.result({
  "duration": 3102276500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.i_choose_a_MacBook_Pro_with_the_following_features_and_accessories(DataTable)"
});
formatter.result({
  "duration": 26335002600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.i_can_place_an_order_for_it()"
});
formatter.result({
  "duration": 125400,
  "status": "passed"
});
formatter.after({
  "duration": 6048100,
  "status": "passed"
});
formatter.before({
  "duration": 29608600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the url \"https://www.apple.com/uk/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.apple.com/uk/",
      "offset": 9
    }
  ],
  "location": "Stepdefinitions.the_url(String)"
});
formatter.result({
  "duration": 3018400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The correct price and VAT are displayed for a MacBook 15 with accessories",
  "description": "",
  "id": "order-macbook-with-accessories;the-correct-price-and-vat-are-displayed-for-a-macbook-15-with-accessories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "when I choose the following items:",
  "rows": [
    {
      "cells": [
        "Option",
        "Price in £"
      ],
      "line": 21
    },
    {
      "cells": [
        "MacBook Pro and software",
        "3168.99"
      ],
      "line": 22
    },
    {
      "cells": [
        "Display adapter",
        "19.00"
      ],
      "line": 23
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I proceed to the checkout",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "a total price of \"£3,187.99\" will be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "\"£531.34\" will be listed for VAT.VAT",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.when_I_choose_the_following_items(DataTable)"
});
formatter.result({
  "duration": 243168200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinitions.i_proceed_to_the_checkout()"
});
formatter.result({
  "duration": 272200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£3,187.99",
      "offset": 18
    }
  ],
  "location": "Stepdefinitions.a_total_price_of_will_be_displayed(String)"
});
formatter.result({
  "duration": 132485400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£531.34",
      "offset": 1
    }
  ],
  "location": "Stepdefinitions.will_be_listed_for_VAT_VAT(String)"
});
formatter.result({
  "duration": 58131700,
  "status": "passed"
});
formatter.after({
  "duration": 1820400,
  "status": "passed"
});
});
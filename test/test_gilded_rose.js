var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

const tests = require("../test.json");

describe("Gilded Rose", function () {
  for (test of tests) {
    const [name, sellIn, quality, outputSellin, outputQuality] = test;
    const description = {
      name,
      sellIn,
      quality,
      outputSellin,
      outputQuality,
    };
    it(JSON.stringify(description), () => {
      const gildedRose = new Shop([new Item(name, sellIn, quality)]);
      const item = gildedRose.updateQuality();
      expect(item[0].sellIn).to.equal(outputSellin);
      expect(item[0].quality).to.equal(outputQuality);
    });
  }

  // it("generate the expected tests", function () {
  //   const names = [
  //     "Aged Brie",
  //     "Backstage passes to a TAFKAL80ETC concert",
  //     "Sulfuras, Hand of Ragnaros",
  //     "normal item",
  //   ];
  //   const [minQuality, maxQuailty] = [-1, 61];
  //   const [minSellIn, maxSellIn] = [-1, 11];
  //   const tests = [];
  //   for (name of names) {
  //     for (let sellIn = minSellIn; sellIn < maxSellIn; sellIn++) {
  //       for (let quality = minQuality; quality < maxQuailty; quality++) {
  //         const gildedRose = new Shop([new Item(name, sellIn, quality)]);
  //         const item = gildedRose.updateQuality();
  //         const outputSellin = item[0].sellIn;
  //         const outputQuality = item[0].quality;
  //         tests.push([name, sellIn, quality, outputSellin, outputQuality]);
  //       }
  //     }
  //   }
  //   console.log(JSON.stringify(tests));
  // });
});

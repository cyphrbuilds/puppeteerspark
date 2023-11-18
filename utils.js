const { Page } = require("puppeteer");

// helper function to create random delays
const randomDelay = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// helper function to type with random delay
const typeWithRandomDelay = async (page, selector, text) => {
  for (let char of text) {
    await page.type(selector, char, { delay: randomDelay(30, 150) });
  }
};

// helper function to simulate mouse movement
const moveToElement = async (page, selector) => {
  const element = await page.$(selector);
  const boundingBox = await element.boundingBox();
  await page.mouse.move(
    boundingBox.x + boundingBox.width / 2,
    boundingBox.y + boundingBox.height / 2
  );
};

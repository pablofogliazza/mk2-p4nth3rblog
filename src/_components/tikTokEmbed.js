function TikTokEmbed({ url, title }) {
  // the embed URL needs to be in a <p> tag for the youtube plugin!

  // TO DO
  return /* html */ `
    <p class="videoEmbed__cta">${title}</p>
    <div class="videoEmbed__tiktok">
    <p>${url}</p>
    </div>
    `;
}

module.exports = TikTokEmbed;

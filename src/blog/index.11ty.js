const Config = require("../../lib/config.js");
// https://www.npmjs.com/package/markdown-it
var md = require("markdown-it")({
  html: true,
});

const Topics = require("../components/topics");
const Pagination = require("../components/pagination");
const PublishedDate = require("../components/publishedDate");

exports.data = {
  layout: "base.html",
  title: "Posts",
  pagination: {
    data: "postSummaries",
    size: Config.pagination.pageSize,
  },
};

exports.render = function (data) {
  return `<ol>
    ${data.pagination.items
      .map(function (item) {
        return `
        <li>
          <div>
            <a href="/blog/${item.slug}">
              <h2>${item.title}</h2>
            </a>

            ${PublishedDate({
              date: item.date,
              readingTime: item.readingTime,
              isTalk: false,
              updatedDate: item.updatedDate,
            })}
            <p>${md.render(item.excerpt)}</p>
            ${Topics({ topics: item.topicsCollection.items })}
          </div>
        </li>`;
      })
      .join("")}
      ${Pagination({
        previous: data.pagination.href.previous,
        next: data.pagination.href.next,
        currentPage: data.pagination.pageNumber,
        totalPages: data.pagination.pages.length,
      })}
   `;
};

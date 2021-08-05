const STATUS_REG_EXP = /^(Miss.|Mr.|Mrs.|Ms.|Prof.|Dr.)/;

export const getAuthorBooks = (books, authorName) => {
  if (!books) {
    return [];
  }

  if (authorName.search(STATUS_REG_EXP) !== -1) {
    authorName = authorName.replace(STATUS_REG_EXP, '').trim();
  }

  return books.filter((b) => b.author.includes(authorName));
};

//created by: Brett Stoudt (on his birthday).

const makeArticle = (userId, url, title, synopsis, dateOfNews) => {
	const newArticle = {
		userId: userId,
		url: url,
        title: title,
        synopsis: synopsis,
        dateOfNews: dateOfNews

	}

	return newArticle;
}

export default makeArticle;

const getNrOfComments = (posts, id) => {
  let numberCom = 0;

  posts.forEach(post => {
    post.comments.forEach(comment => {
      if (comment.user.toString() === id.toString()) {
        numberCom += 1;
      }
    });
  });

  return numberCom;
};

const getNrOfLikes = posts => {
  let numberLikes = 0;

  posts.forEach(post => {
    post.likes.forEach(like => {
      numberLikes += 1;
    });
  });
  return numberLikes;
};

module.exports = {
  getNrOfComments,
  getNrOfLikes
};

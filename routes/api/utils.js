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

module.exports = {
  getNrOfComments
};

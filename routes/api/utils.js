const UsersOnline = require('../../models/UsersOnline');

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

const isOnline = async id => {
  try {
    let isUserOnline = await UsersOnline.findOne({ user: id });
    if (isUserOnline) {
      // update
      await UsersOnline.findOneAndUpdate(
        { user: id },
        { date: Date.now() },
        { new: true }
      );

      console.log('user updated');
    } else {
      // create
      user = new UsersOnline({ user: id, date: Date.now() });
      await user.save();
      console.log('user created');
    }
  } catch (err) {
    console.error(err);
  }
};

const setOnlineStatusToProfileObject = (profiles, whoIsOnline) => {
  // let profilesWithOnlineStatus = [];

  profiles.forEach(profile => {
    profile.isOnline = false;
    whoIsOnline.forEach(user => {
      if (profile.user._id.toString() === user.user.toString()) {
        profile.isOnline = true;
      }
    });
  });
  return profiles;
};

module.exports = {
  getNrOfComments,
  getNrOfLikes,
  isOnline,
  setOnlineStatusToProfileObject
};

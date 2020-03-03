const { getNrOfComments, setOnlineStatusToProfileObject } = require('./utils');

const mockData = [
  {
    _id: '5e467d3f1ab033e1f8d654ee',
    text: 'this is a new post, yahoo',
    name: 'dhernqvist',
    avatar:
      '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
    user: '5e450eae3c4f95b8e99661f4',
    likes: [
      { _id: '5e53cc218b60286a78311100', user: '5e4e75f54693801828df0c0b' },
      { _id: '5e4a60d0e712b5ea0fda0f11', user: '5e450eae3c4f95b8e99661f4' }
    ],
    comments: [
      {
        date: '2020-02-25T13:29:16.872Z',
        _id: '5e55212caf28ea967e354a51',
        text: 'hej ala',
        name: 'dsan',
        avatar:
          '//www.gravatar.com/avatar/9085c93485f7c1db969600f983a641a2?s=200&r=pg&d=mm',
        user: '5e4e75f54693801828df0c0b'
      },
      {
        date: '2020-02-17T09:55:19.683Z',
        _id: '5e4a6307f23b6beab1b68dfa',
        text: 'And this is another comment',
        name: 'dhernqvist',
        avatar:
          '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
        user: '5e450eae3c4f95b8e99661f4'
      },
      {
        date: '2020-02-17T09:55:03.601Z',
        _id: '5e4a62f7f23b6beab1b68df9',
        text: 'this is a test-comment',
        name: 'dhernqvist',
        avatar:
          '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
        user: '5e450eae3c4f95b8e99661f4'
      }
    ],
    date: '2020-02-14T10:58:07.903Z',
    __v: 25
  },
  {
    _id: '5e467d3f1ab033e1f8d654ee',
    text: 'this is a new post, yahoo',
    name: 'dhernqvist',
    avatar:
      '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
    user: '5e450eae3c4f95b8e99661f4',
    likes: [
      { _id: '5e53cc218b60286a78311100', user: '5e4e75f54693801828df0c0b' },
      { _id: '5e4a60d0e712b5ea0fda0f11', user: '5e450eae3c4f95b8e99661f4' }
    ],
    comments: [
      {
        date: '2020-02-25T13:29:16.872Z',
        _id: '5e55212caf28ea967e354a51',
        text: 'hej ala',
        name: 'dsan',
        avatar:
          '//www.gravatar.com/avatar/9085c93485f7c1db969600f983a641a2?s=200&r=pg&d=mm',
        user: '5e4e75f54693801828df0c0b'
      },
      {
        date: '2020-02-17T09:55:19.683Z',
        _id: '5e4a6307f23b6beab1b68dfa',
        text: 'And this is another comment',
        name: 'dhernqvist',
        avatar:
          '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
        user: '5e450eae3c4f95b8e99661f4'
      },
      {
        date: '2020-02-17T09:55:03.601Z',
        _id: '5e4a62f7f23b6beab1b68df9',
        text: 'this is a test-comment',
        name: 'dhernqvist',
        avatar:
          '//www.gravatar.com/avatar/0838d7c9302e5b8b8bda34decc7772ba?s=200&r=pg&d=mm',
        user: '5e450eae3c4f95b8e99661f4'
      }
    ],
    date: '2020-02-14T10:58:07.903Z',
    __v: 25
  }
];

test('works', () => {
  expect(getNrOfComments(mockData, '5e450eae3c4f95b8e99661f4')).toEqual(4);
});

const mockIsOnline = [
  {
    _id: '5e5e63aa40c14e3122020779',
    user: '5e4e75f54693801828df0c0b',
    date: '2020-03-03T14:16:19.930Z',
    __v: 0
  }
];

const mockProfiles = [
  {
    _id: '5e4e76284693801828df0c0c',
    user: {
      _id: '5e4e75f54693801828df0c0b',
      name: 'dsan',
      avatar:
        '//www.gravatar.com/avatar/9085c93485f7c1db969600f983a641a2?s=200&r=pg&d=mm'
    }
  },
  {
    _id: '5e4e76284693801828df0c0d',
    user: {
      _id: '5e4e75f54693801828df0c0c',
      name: 'dsan',
      avatar:
        '//www.gravatar.com/avatar/9085c93485f7c1db969600f983a641a2?s=200&r=pg&d=mm'
    }
  }
];

test('user has onlinestatus', () => {
  const profilesWithOnlineStatus = setOnlineStatusToProfileObject(
    mockProfiles,
    mockIsOnline
  );

  expect(profilesWithOnlineStatus[0].isOnline).toBe(true);
});

test('user has onlinestatus and returns initial length of profiles', () => {
  const profilesWithOnlineStatus = setOnlineStatusToProfileObject(
    mockProfiles,
    mockIsOnline
  );

  expect(profilesWithOnlineStatus.length).toEqual(2);
});

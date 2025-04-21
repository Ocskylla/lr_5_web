// BEGIN
const getMutualFriends = (user1, user2)=> {
  let friends1 = user1.getFriends();
  let friends2 = user2.getFriends();

  return friends1.filter(friend1 =>friends2.some(friend2 => friend2.id === friend1.id));
};
export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
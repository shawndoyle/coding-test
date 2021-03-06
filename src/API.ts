export interface Comment {
  id: string;
  user: User;
  text: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  profilePictureUrl: string;
}

const Users: User[] = [
  {
    id: "0",
    name: "Homer Simpson",
    profilePictureUrl:
      "https://www.onthisday.com/images/people/homer-simpson-medium.jpg",
  },
  {
    id: "1",
    name: "Carl Carlson",
    profilePictureUrl:
      "https://topicimages.mrowl.com/large/owl/thesimpsons/characters/carlcarlson_1.jpg",
  },
  {
    id: "2",
    name: "Monty Burns",
    profilePictureUrl:
      "https://thumbor.forbes.com/thumbor/280x340/http://images.forbes.com/media/2010/04/12/0412_charles-montgomery-burns_280x340.jpg",
  },
];

const Comments: Comment[] = [
  {
    id: "0",
    createdAt: "Sep 6 5:30AM",
    text: "Carl, have you finished the inspection of the fuel storage area?",
    user: Users[2],
  },
  {
    id: "1",
    createdAt: "Sep 6 6:00AM",
    text:
      "Not yet Mr Burns. I'm waiting for Homer Simpson to finish the safety procedures",
    user: Users[1],
  },
  {
    id: "2",
    createdAt: "Sep 6 6:15AM",
    text: "Simpson eh?",
    user: Users[2],
  },
];

const activeUser = Users[0];

export const getComments = () => Comments;

export const addComment = (text: string) => {
  Comments.push({
    id: Comments.length.toString(),
    user: activeUser,
    createdAt: new Date().toISOString(),
    text,
  });
};

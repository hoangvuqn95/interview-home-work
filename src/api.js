import axios from "axios";

export const loadPostApi = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/posts");
// .then((res) => {
//   const response = res.data;
// });

export const loadDetailApi = async () =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);

// Vi du can get nhieu api

// const fetchData = () => {
//   let posts = "https://jsonplaceholder.typicode.com/posts";
//   let comments = "https://jsonplaceholder.typicode.com/comments";
//   let users = "https://jsonplaceholder.typicode.com/users";

//   const requestPost = axios.get(posts);
//   const requestComments = axios.get(comments);
//   const requestUsers = axios.get(users);

//   axios
//     .all([requestPost, requestComments, requestUsers])
//     .then(
//       axios.spread((...allData) => {
//         const responsePost = allData[0].data;
//         const responseComments = allData[1].data;
//         const responseUsers = allData[2].data;

//         setDataPosts(responsePost);
//       })
//     )
//     .catch((errors) => {
//       console.error(errors);
//     });
// };

// axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//   const run = res.data;
//   console.log("run:", run);
// });

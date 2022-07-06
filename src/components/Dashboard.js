import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import {
  fetchPostCommentData,
  fetchPostData,
  fetchBodyCount,
} from "../redux/action/action";
import Comment from "./Comment";

const Dashboard = () => {
  const posts = useSelector((state) => state?.data?.data);
  const comments = useSelector((state) => state?.data?.comment);
  const dispatch = useDispatch();
  const [postList, setPostList] = useState();

  useEffect(() => {
    dispatch(fetchPostData());
    // dispatch(fetchPostCommentData(1));
  }, []);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const bodyChangeHandler = (e, i) => {
    const { value } = e.target;
    setPostList((post) =>
      post?.map((list, index) =>
        index === i ? { ...list, body: value } : list
      )
    );
    dispatch(fetchBodyCount(value));
  };

  const handleComment = (id, value) => {
    console.log(value);
    dispatch(fetchPostCommentData(id));
    dispatch(fetchBodyCount(value));
  };

  return (
    <div>
      <div className=" px-2 sm:px-6 lg:px-8 flex">
        <div className="w-2/3 scroll-div">
          {postList?.map((post, index) => (
            <div key={index}>
              <p className="flex mt-8">{`key-${index}`}</p>

              <div className="flex mt-4" key={post.id}>
                <Input
                  type="text"
                  name="title"
                  value={post.title}
                  id={`title-${post.id}`}
                  onClick={() => handleComment(index, post.title)}
                />
                <Input
                  type="text"
                  name="body"
                  value={post.body}
                  id={`body-${post.id}`}
                  onChange={(e) => bodyChangeHandler(e, index)}
                  onClick={() => handleComment(post.id, post.body)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/3">
          {comments?.length > 0 &&
            comments.map((postComment, index) => (
              <Comment key={index} comment={postComment} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

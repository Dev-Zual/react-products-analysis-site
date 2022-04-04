import { useEffect, useState } from 'react';

const useComments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('comment.json')
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return [comments, setComments];
};
export default useComments;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/greetings/greetings.actions';

export default function Greeting() {
  const { greetingsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <React.Fragment>
      { greetingsReducer }
    </React.Fragment>
  );
}

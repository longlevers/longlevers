import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { append, selectAdam } from './adamSlice';
import styles from './Adam.module.css';

export function Adam() {
  const adam = useSelector(selectAdam);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Append an X'
          onClick={() => dispatch(append('X'))}
        >
          Append an X
        </button>
        <span className={styles.value}>{adam}</span>
      </div>
    </div>
  );
}

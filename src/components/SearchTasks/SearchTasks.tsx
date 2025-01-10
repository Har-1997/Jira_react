import * as S from './SearchTasks.style';
import React, { JSX, ChangeEvent, useRef } from 'react';
import SearchIcon from '../../pictures/search.png';
import { useAppDispatch } from '../../hooks/useDispatch.ts';
import { tasksAsync } from '../../redux/tasks/tasksSlice.ts';

interface SearchTasksProps {
  title: string;
}

export const SearchTasks = ({title}: SearchTasksProps): JSX.Element=> {	
	const dispatch = useAppDispatch();
	const searchTimerId = useRef<number | undefined>(undefined);

	const searchTask = (e: ChangeEvent<HTMLInputElement>): void => {
		if (searchTimerId.current) {
      clearTimeout(searchTimerId.current);
    }

    searchTimerId.current = window.setTimeout(() => {
      dispatch(tasksAsync(e.target.value));
    }, 300);
  };

	return(
		<S.SearchCont>
			<img src={SearchIcon} alt="Search" />
			<input
				type='text'
				placeholder={title}
				onChange={searchTask}
				aria-label="Search Tasks"
			/>
		</S.SearchCont>
	)
}

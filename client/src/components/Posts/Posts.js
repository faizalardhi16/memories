import React from 'react';
import Post from './Post/Post';
import useStyle from './styles';

export default function Posts() {
	const classes = useStyle();
	return (
		<>
			<h1>POSTS</h1>
			<Post />
			<Post />
		</>
	);
}

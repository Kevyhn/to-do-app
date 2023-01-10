import React, {useRef} from 'react';

export const AlertComponent = ({active}) => {

	const divAlert = useRef();

	return (
		<div className={active ? 'alert alert-active' : 'alert'} ref={divAlert}>
			you need complete details!
		</div>
	);
}
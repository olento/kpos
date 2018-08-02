import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
	You've hit the Route 404! - <Link to="/">Front Page</Link>
    </div>
);

export default NotFoundPage;

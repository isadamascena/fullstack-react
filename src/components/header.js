import React from 'react';

const user = {
    name: 'Isa',
    lastname: 'Damascena',
    age: 24
}
const Header = () => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.lastname}</div>
            <div>{user.age}</div>
        </div>
    );
}

export default Header;
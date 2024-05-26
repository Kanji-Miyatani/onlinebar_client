
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,store} from '/app/store';
import { loginFailure,loginSuccess } from '@/';
import LoginLayout from '../components/layouts/layout-login';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);

    const handleLogin = async () => {
        try {
            const data = await login(username, password);
            dispatch(loginSuccess(data.token));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };

    return (
        <LoginLayout>
            <div>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                {error && <p>{error}</p>}
            </div>
        </LoginLayout>
    );
};

export default Login;

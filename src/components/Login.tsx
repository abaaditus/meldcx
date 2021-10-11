import React, { useState } from 'react';

interface ILoginProps {
    onLogin: (email: string, password: string) => void;
};

const Login: React.FunctionComponent<ILoginProps> = ({
    onLogin
}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const submitHandler = (ev: React.FormEvent) => {
        ev.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="flex items-center justify-center content-center h-full">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                    <div
                        className="text-gray-800 text-2xl flex justify-center border-b py-2 mb-5 uppercase font-bold"
                    >
                        login
                    </div>
                    <div className="mb-4">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="username"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 placeholder-gray-400 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            v-model="form.email"
                            type="email"
                            required
                            autoFocus
                            placeholder="Email"
                            onChange={(e: React.ChangeEvent) => {
                                const target = e.target as HTMLInputElement;
                                setEmail(target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            autoComplete="current-password"
                            onChange={(e: React.ChangeEvent) => {
                                const target = e.target as HTMLInputElement;
                                setPassword(target.value);
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between pb-2">
                        <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 w-full" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
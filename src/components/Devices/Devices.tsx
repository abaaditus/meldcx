import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import MeldcxInstance from '../../axios/meldx-axios';
import { useInterval } from '../../useInterval';
import styles from './Devices.module.css';

interface IDevicesProps {
    onLogout: () => void
};

interface IDeviceResponse {
    devices: [];
}

const getDevices = async () => {
    const { data }: AxiosResponse = await MeldcxInstance.get(`devices`);
    return data;
};

const Devices: React.FunctionComponent<IDevicesProps> = ({
    onLogout
}) => {
    const [devices, setDevices] = useState<[]>([]);

    const logOutHandler = () => {
        onLogout();
    };

    const notifyHandler = async () => {
        await MeldcxInstance.post(`notify`, {
            name: 'Kevin Villarojo',
            email: 'kebvillarojo@gmail.com',
            repoUrl: 'https://github.com/abaaditus/meldcx',
            message: 'Technical Exercise :) -- Please read the markdown file :)',
        });
    };

    useInterval(async () => {
        const deviceList: IDeviceResponse = await getDevices();
        setDevices(deviceList.devices);
    }, 5000);

    useEffect(() => {
        const fetchDevices = async () => {
            const deviceList: IDeviceResponse = await getDevices();
            setDevices(deviceList.devices);
        };
        fetchDevices();
    }, []);

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex flex-grow text-center items-center ">
                <div className="flex-grow">
                    <p className="text-9xl">{devices.length}</p>
                    <p className="text-4xl uppercase">devices online</p>
                    {
                        devices.map((value, index) => {
                            return <div className={styles.orb + " w-12 h-12 bg-red-600 rounded-full m-5"} key={index} id={'orb-' + index}></div>;
                        })
                    }
                </div>
            </div>

            <div className="flex flex-grow-0 justify-center gap-2 py-4 font-bold bg-gray-400 bg-opacity-20">
                <button className="px-4 py-2 rounded text-white inline-block uppercase shadow-lg bg-gray-600 font-bold text-sm shadow hover:bg-gray-500" type="button" onClick={notifyHandler}>notify</button>
                <button className="px-4 py-2 rounded text-white inline-block uppercase shadow-lg bg-blue-600 font-bold text-sm shadow hover:bg-blue-500" type="button" onClick={logOutHandler}>logout</button>
            </div>
        </div>
    );
};

export default Devices;
type TInternet = 'Not required' | 'Required';

interface IGameCard {
    num: number;
    cover: string;
    name: string;
    publisher: string;
    count: number;
    year: number;
    platform: string;
    internet: TInternet;
    genre: string;
    popular: boolean;
};

export default IGameCard;
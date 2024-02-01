import {atom} from "recoil";

export const pageAtom = atom<string>({
    key: 'page',
    default: "Главная страница"
})
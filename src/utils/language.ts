export interface Language {
    code: string;
    label: string;
    labelLong: string;
    icon: string;
    class: string;
}

export const languages: Language[] = [
    {
        code: 'en',
        label: 'EN',
        labelLong: "English",
        icon: './src/assets/flags/gb.svg',
        class: 'rounded-t-lg'
    },
    {
        code: 'lt',
        label: 'LT',
        labelLong: "Lietuviškai",
        icon: './src/assets/flags/lt.svg',
        class: ''
    },
    {
        code: 'bg',
        label: 'BG',
        labelLong: "Български",
        icon: './src/assets/flags/bg.svg',
        class: 'rounded-b-lg'
    },
];

export const getLanguageByCode = (code: string): Language => {
    return languages.find(entry => entry.code === code) ?? languages[0];
}
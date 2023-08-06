// image
import rugbySuperior from '../assets/rugbySuperior.png'
import rugbyJuvenil from '../assets/rugbyJuvenil.png'
import rugbyInfantil from '../assets/rugbyInfantil.png'
import rugbyInclusivo from '../assets/rugbyInclusivo.png'

export const items = [
    {
        id: '0',
        name: 'Juveniles',
        description:
            'Lunes: 20hs-22hs / Martes y Jueves: 20:30hs-22:30hs',
        link: '/rugby',
        cardimage: rugbyJuvenil,
    },
    {
        id: '1',
        name: 'Infantiles',
        description:
            'Martes y Jueves: 20:30hs-22:30hs / Sabados 10hs-12hs',
        link: '/hockey',
        cardimage: rugbyInfantil,
    },
    {
        id: '2',
        name: 'Plantel Superior',
        description:
            'Lunes: 20hs-22hs / Martes y Jueves: 20:30hs-22:30hs',
        link: '/transporte',
        cardimage: rugbySuperior,
    },
    {
        id: '3',
        name:'Inclusivo',
        description: 
        'Sábados 10hs-12hs',
        cardimage: rugbyInclusivo,
    }
];

export  function getContact(id) {
    return items.find((item) => item.id === id);
}
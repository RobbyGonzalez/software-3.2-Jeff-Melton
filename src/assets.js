import posterAoaag from './asset/an-oandag-poster.jpg'
import posterCaddyshack from './asset/caddyshack-poster.jpg'
import posterOfficeSpace from './asset/officespace-poster.jpg'
import posterTitanic from './asset/titanic-poster.jpg'
import iconComedy from './asset/comedy-icon.png'
import iconRomance from './asset/romance-icon.png'

let arrayAssets = [
    {assetType: 'genreIcon',
    genreName: 'Comedy',
    icon: iconComedy},
    {assetType: 'genreIcon',
    genreName: 'Romance',
    icon: iconRomance},
    {assetType: 'poster',
    movieTitle: 'An Officer and a Gentleman',
    poster: posterAoaag},
    {assetType: 'poster',
    movieTitle: 'Caddyshack',
    poster: posterCaddyshack},
    {assetType: 'poster',
    movieTitle: 'Office Space',
    poster: posterOfficeSpace},
    {assetType: 'poster',
    movieTitle: 'Titanic',
    poster: posterTitanic}
]

export default arrayAssets;
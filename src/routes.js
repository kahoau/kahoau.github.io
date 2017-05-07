import ImageGallery from './components/ImageGallery.vue'
import Home from './components/Home.vue'

export const routes = [
    { path: '',
        components: {
            default: Home
        }
    },
    { path: '/image_gallery',
        component: ImageGallery
    }
];

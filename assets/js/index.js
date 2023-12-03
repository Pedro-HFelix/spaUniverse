import { Router } from './router.js'


const router = new Router()
router.add('/', "/assets/pages/home.html")
router.add("/exploitation", "/assets/pages/exploitation.html")
router.add("/universe", "/assets/pages/universe.html")
router.add(404, "/assets/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

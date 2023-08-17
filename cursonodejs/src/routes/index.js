import { Router } from "express"
const router = Router()

router.get('/',(req,res) => res.render('index', { title: 'Bienvenido al Index'}))
router.get('/about',(req,res) => res.render('about', { title: 'Este es el About'}))
router.get('/contact',(req,res) => res.render('contact', { title: 'Aqui el Contact'}))

export default router
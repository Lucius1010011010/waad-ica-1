const express = require('express')
const router = express.Router()

//1xx, information
router.get('/100/100', (req, res) => {
    res.send('get request from /100/100')
})

router.get('/100/101', (req, res) => {
    res.send('get request from /100/101')
})

//2xx, successful
router.get('/200/200', (req, res) => {
    res.send('get request from /200/200')
})

router.get('/200/201', (req, res) => {
    res.send('get request from /200/201')
})

router.get('/200/202', (req, res) => {
    res.send('get request from /200/202')
})

router.get('/200/203', (req, res) => {
    res.send('get request from /200/203')
})

router.get('/200/204', (req, res) => {
    res.send('get request from /200/204')
})

router.get('/200/205', (req, res) => {
    res.send('get request from /200/205')
})

router.get('/200/206', (req, res) => {
    res.send('get request from /200/206')
})

//3xx, redirection
router.get('/300/300', (req, res) => {
    res.send('get request from /300/300')
})

router.get('/300/301', (req, res) => {
    res.send('get request from /300/301')
})

router.get('/300/302', (req, res) => {
    res.send('get request from /300/302')
})

router.get('/300/303', (req, res) => {
    res.send('get request from /300/303')
})

router.get('/300/304', (req, res) => {
    res.send('get request from /300/304')
})

router.get('/300/305', (req, res) => {
    res.send('get request from /300/305')
})

router.get('/300/306', (req, res) => {
    res.send('get request from /300/306')
})

router.get('/300/307', (req, res) => {
    res.send('get request from /300/307')
})

//4xx, client error
router.get('/400/400', (req, res) => {
    res.send('get request from /400/400')
})

router.get('/400/401', (req, res) => {
    res.send('get request from /400/401')
})

router.get('/400/402', (req, res) => {
    res.send('get request from /400/402')
})

router.get('/400/403', (req, res) => {
    res.send('get request from /400/403')
})

router.get('/400/404', (req, res) => {
    res.send('get request from /400/404')
})

router.get('/400/405', (req, res) => {
    res.send('get request from /400/405')
})

router.get('/400/406', (req, res) => {
    res.send('get request from /400/406')
})

router.get('/400/407', (req, res) => {
    res.send('get request from /400/407')
})

router.get('/400/408', (req, res) => {
    res.send('get request from /400/408')
})

router.get('/400/409', (req, res) => {
    res.send('get request from /400/409')
})

router.get('/400/410', (req, res) => {
    res.send('get request from /400/410')
})

router.get('/400/411', (req, res) => {
    res.send('get request from /400/411')
})

router.get('/400/412', (req, res) => {
    res.send('get request from /400/412')
})

router.get('/400/413', (req, res) => {
    res.send('get request from /400/413')
})

router.get('/400/414', (req, res) => {
    res.send('get request from /400/414')
})

router.get('/400/415', (req, res) => {
    res.send('get request from /400/415')
})

router.get('/400/416', (req, res) => {
    res.send('get request from /400/416')
})

router.get('/400/417', (req, res) => {
    res.send('get request from /400/417')
})

router.get('/400/410', (req, res) => {
    res.send('get request from /400/410')
})

//5xx, server error
router.get('/500/500', (req, res) => {
    res.send('get request from /500/500')
})

router.get('/500/501', (req, res) => {
    res.send('get request from /500/501')
})

router.get('/500/502', (req, res) => {
    res.send('get request from /500/502')
})

router.get('/500/503', (req, res) => {
    res.send('get request from /500/503')
})

router.get('/500/504', (req, res) => {
    res.send('get request from /500/504')
})

router.get('/500/505', (req, res) => {
    res.send('get request from /500/505')
})

module.exports = router
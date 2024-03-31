console.clear()

const { v4 : uuidv4 } = require('uuid')
const cors            = require('cors')
const express         = require( 'express')
const { router } = require('./router')



datosWeb = [
    {
        id : 1,
        icono_apple : '/assets/icon-hero.png',
        titulo : 'Triage is first aid for your inbox',
        parrafo : 'Everything you loved about the original Triage is back - only better. Download Triage 2 on the App Store today.',
        download_apple : '/assets/download-hero.png',
        imagen : '/assets/mobile-hero.png',
        alt1 : 'icono-apple',
        alt2 : 'download-apple',
        alt3 : 'mobile-hero'
    },
    {
        id : 2,
        icono : '/assets/archive-icon.png',
        titulo : 'Drag left to archive',
        parrafo : 'Unread messages appear in a stack of cards, like this',
        imagen : '/assets/archive-mobile.png',
        alt1 : 'archive-icon',
        alt2 : 'archive-mobile'

    },
    {
        id : 3,
        icono : '/assets/keep-icon.png',
        titulo : 'Drag right to keep',
        parrafo : 'Or create your own custom workflow.',
        imagen : '/assets/keep-mobile.png',
        alt1 : 'keep-icon',
        alt2 : 'keep-mobile'

    },
    {
        id : 4,
        icono : '/assets/expand-icon.png',
        titulo : 'Tap to expand',
        parrafo : 'Open the message to view the whole thread.',
        imagen : '/assets/expand-mobile.png',
        alt1 : 'expand-icon',
        alt2 : 'expand-mobile'

    },
    {
        id : 5,
        icono : '/assets/context-icon.png',
        titulo : 'Replay in context',
        parrafo : 'Send a quick reply without leaving the app.',
        imagen : '/assets/context-mobile.png',
        alt1 : 'context-icon',
        alt2 : 'context-mobile'

    },
    {
        id : 6,
        boxes : [
            {
                icono: '/assets/mail-icon.png',
                titulo: 'Works woth Gmail, iCloud & IMAP',
                alt1: 'mail-icon'
            },
            {
                icono: '/assets/frame-icon.png',
                titulo: 'All processing happens on device',
                alt1: 'frame-icon'
            },
            {
                icono: '/assets/shield-icon.png',
                titulo: 'Your data is yours to stay',
                alt1: 'shield-icon'
            },
            {
                icono: '/assets/moon-icon.png',
                titulo: 'Supports dark mode',
                alt1: 'moon-icon',
            },
            {
                icono: '/assets/thumbs-icon.png',
                titulo: 'Free to use. Or pay for more features',
                alt1: 'thumbs-icon',
            },
            {
                icono: '/assets/hammer-icon.png',
                titulo: 'Build & maintained by indie developers',
                alt1: 'hammer-icon'
            },
        ]
    },
    {
        id : 7,
        cajas : [
            {
                imagen : '/assets/daring-fireball.png.png',
                titulo : 'Since I ve been using Triage, Im more caught up on my email than I have been in years.',
                alt1 : 'daring-fireball'
            },
            {
                imagen : '/assets/the-verge.svg.png',
                titulo : 'If you re constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.',
                alt1 : 'verge'
            },
            {
                imagen : '/assets/macworld.svg.png',
                titulo : 'Triage makes it feel seamless, and even fun, to achieve — if not Inbox Zero — at least Inbox Zen.',
                alt1 : 'macworld'
            },
            {
                imagen : '/assets/maclife.png.png',
                titulo : 'Triage provides the first aid necessary to get your inbox back in fighting shape.',
                alt1 : 'maclife'
            },
            {
                imagen : '/assets/clean-email.png.png',
                titulo : 'Triage is a boon to those who have struggled to keep their inboxes clean and organized.',
                alt1 : 'clean-email'
            },
            {
                imagen : '/assets/macstories.png.png',
                titulo : 'Triage is my new favorite email app for iPhone.',
                alt1 : 'macstories'
            },
        ],
    },
    {
        id : 8,
        politic : [
            {
                texto : 'FAQ'
            },
            {
                texto : 'Privacy'
            },
            {
                texto : 'Terms'
            },
            {
                texto : 'Security'
            }
        ]
    },
    {
        id : 9,
        rrss : [
            {
                icon : '/assets/mail-svg.png',
                alt : 'mail-svg'
            },
            {
                icon : '/assets/twitter-svg.png',
                alt : 'twitter-svg'
            },
        ]
    },
]

const app = express()

app.use( cors())
app.use( express.json())
app.use( express.urlencoded( { extended : false }))
app.use( router )

app.use( ( req , res ) => {
    res.status(404).json('No se ha encontrado el Endpoint')
})

app.listen( 3000 , () => console.log('Iniciando API'))

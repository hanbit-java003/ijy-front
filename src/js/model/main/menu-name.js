module.exports = [{
    name: 'ABOUT',
    subMenu: [{
        name: 'Greeting',
        id: 'greeting'
    }, {
        name: 'Space',
        id: 'space'
    }, {
        name: 'Location',
        id: 'location'
    }],
    sub: true
}, {
    name: 'EXHIBITION',
    subMenu: [{
        name: 'Current',
        id: 'current'
    }, {
        name: 'Past',
        id: 'exhibitions',
        subId: 'past'
    }, {
        name: 'Upcoming',
        id: 'upcoming'
    }],
    sub: true
}, {
    name: 'ARTIST',
    id: 'artist'
}, {
    name: 'MUSIC',
    subMenu: [{
        name: 'Concert',
        id: 'exhibitions',
        subId: 'concert'
    }, {
        name: 'Artist',
        id: 'artist',
        subId: 'music'
    }],
    sub: true
}, {
    name: 'NEWS',
    subMenu: [{
        name: 'Press',
        id: 'press'
    }, {
        name: 'Notice',
        id: 'notice'
    }],
    sub: true
}, {
    name: 'CONTACT',
    id: 'contact'
}];
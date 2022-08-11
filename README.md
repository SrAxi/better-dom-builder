# better-dom-builder
Simple DOM renderer with Vanilla JS, HTML5 and CSS.
Contains:
- A JS library for creating DOM elements programmatically
- A UI for creating DOM elements

### API
- `addElement()`: Adds the element to the DOM
- `createDiv()`: Creates a `div` DOM element
- `createParagraph()`: Creates a `p` DOM element
- `createButton()`: Creates a `button` DOM element
- `createLink()`: Creates a `a` DOM element
- `removeAll()`: Removes all created DOM elements from `section.result` _(root canvas)_

### Options
- `id`: The `id` of the created element
- `inside`: The query parameter where the element will be inserted, default is `body`
- `events`: The events to be added to the created element
- `style`: The style to be added to the created element
- `href`: The `href` to be added to the created `a` element
- `classes`: An array of classes to be added to the created element


------

### Example of usage:
```html
<script type="application/javascript">
    const db = domBuilder()
    
    // Default div creation
    const myP = db.createParagraph('Some examples of programatically generated DOM elements')
    const myDiv = db.createDiv(myP, {
        id: 'myFirstDiv',
        events: {
            ondblclick: () => alert('I double clicked this'),
        }
    })
    db.addElement(myDiv)

    // Dark div creation
    const myDiv2 = db.createDiv('My Second dark DIV', { classes: ['dark'] })
    db.addElement(myDiv2, {
        inside: '#myFirstDiv',
    })

    // Light div creation
    const myDiv3 = db.createDiv('My Third light DIV', { classes: ['light'] })
    db.addElement(myDiv3, {
        inside: '#myFirstDiv',
    })

    // Nerd div creation
    const myDiv4 = db.createDiv('My Fourth nerd DIV', { classes: ['nerd'] })
    db.addElement(myDiv4, {
        inside: '#myFirstDiv',
    })

    // Custom Button div creation
    const myButton = db.createButton('Custom style btn', {
        events: {
            onclick: () => alert('I clicked the Custom style btn'),
        },
        style: 'color: red; background: black;'
    })
    db.addElement(myButton)

    // Default Button div creation
    const myButton2 = db.createButton('Default btn', {
        events: {
            onclick: () => alert('I clicked the Default btn'),
        },
    })
    db.addElement(myButton2)

    // Default Link creation
    const myLink = db.createLink('Default link', {
        href: '#myFirstDiv',
    })
    db.addElement(myLink)

    // Custom Link creation
    const myLink2 = db.createLink('Custom style link', {
        href: '#myFirstDiv',
        style: 'color: red; font-size: 1.1rem;'
    })
    db.addElement(myLink2)
</script>
```

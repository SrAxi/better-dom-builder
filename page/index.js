window.onload = function () {
    const db = domBuilder()

    /* EXAMPLES */
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

    /* IMPLEMENTATION */

    // Form fields
    const elementType = document.querySelector('#element-type')
    const elementContent = document.querySelector('#element-content')
    const elementID = document.querySelector('#element-id')
    const elementClasses = document.querySelector('#element-classes')
    const elementStyle = document.querySelector('#element-style')
    const elementTargetID = document.querySelector('#target-id')
    const elementTriggerEvent = document.querySelector('#trigger-event')
    const clearAllBtn = document.querySelector('#clearAll')

    const initialElementState = () => ({
        type: elementType.value,
        content: elementContent.value,
        id: elementID.value,
        classes: elementClasses.value,
        style: elementStyle.value,
        targetId: elementTargetID.value,
        triggerEvent: elementTriggerEvent.value
    })

    // State
    let currentElement = initialElementState()

    // Listeners
    elementType.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            type: elementType.value
        }
    })

    elementContent.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            content: elementContent.value
        }
    })

    elementID.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            id: elementID.value
        }
    })

    elementClasses.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            classes: elementClasses.value
        }
    })

    elementStyle.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            style: elementStyle.value
        }
    })

    elementTargetID.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            targetId: elementTargetID.value
        }
    })

    elementTriggerEvent.addEventListener('change', () => {
        currentElement = {
            ...(currentElement || {}),
            triggerEvent: elementTriggerEvent.value
        }
    })

    clearAllBtn.addEventListener('click', () => {
        console.log('clearAllBtn clicked')
        db.removeAll()
    })

    document.addEventListener('submit', e => {
        e.preventDefault()

        if (currentElement) {
            // Building element
            let element = null
            const elementOptions = (function () {
                const elemId = currentElement.id
                return {
                    id: elemId,
                    classes: [currentElement.classes], // TODO: Does it need to be an array?
                    style: currentElement.style,
                    events: currentElement.triggerEvent !== 'None' ? {
                        [currentElement.triggerEvent]: () => alert(`Clicked ${ elemId }`),
                    } : null,
                    href: currentElement.href || '#', // TODO: Add to UI
                }
            })()

            switch (currentElement.type) {
                case 'DIV':
                    element = db.createDiv(currentElement.content, elementOptions)
                    break
                case 'PARAGRAPH':
                    element = db.createParagraph(currentElement.content, elementOptions)
                    break
                case 'BUTTON':
                    element = db.createButton(currentElement.content, elementOptions)
                    break
                case 'LINK':
                    element = db.createLink(currentElement.content, elementOptions)
                    break
            }

            // Adding element to DOM
            const addingOptions = currentElement.targetId ? { inside: currentElement.targetId } : null
            db.addElement(element, addingOptions)
        }

        // clear form
        e.target.reset()
        currentElement = initialElementState()
    })
}

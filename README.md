# Create Your Character

## Story

You are working in an online game developer company that is about to release a new RPG game.
In the developer team, you've got the task to implement the character creation part.

The task is to provide a form that the users can fill up to create their character.
Whenever they fill a character property, next to the form, the character sheet will fill up too.

## What are you going to learn?

- DOM manipulation
- `input` event
- Dynamic page changing

## Tasks

1. Create a form that the user can fill up. A character needs to have a name, a choosable gender, race and class.
    - When we open up the HTML file, a form shows up
    - The form contains an input field for the character name
    - We can choose from dropdown menus for the gender, for the race and for the class

2. Whenever an input changes, the character sheet next to the form will fill up with the change. Use icons or images for the character sheet when you want to display the dropdown menus value.
    - When we change the name or a dropdown menu value,  the value shows up next to the form in a character sheet
    - For the gender, the race and class, the value is represented with an icon or an image

## General requirements

None

## Hints

- Use the `input` event whenever you use an `input` field or a `select` tag for the purpose of catching the tags value change effect.
  Unlike the `change` event, the `input` is triggered whenever the value changed.

## Background materials

- <i class="far fa-exclamation"></i> [Input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- <i class="far fa-video"></i> [Introduction to DOM manipulation](https://www.youtube.com/watch?v=wiozYyXQEVk&ab_channel=DevEd)
- <i class="far fa-exclamation"></i> [DOM manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- <i class="far fa-exclamation"></i> [Javascript if/else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Sample for races and classes](https://5e.tools/)

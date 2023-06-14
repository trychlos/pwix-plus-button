# pwix:plus-button

## What is it

A simple Blaze component for Meteor which provides a circled-'+' button.

Why this package?

Well because we cannot just copy a Blaze component in each and every package or application which would need it:
- first, because this is always a bad idea to just duplicate code, as this obviously also duplicates maintenance efforts and bugs
- second, because Blaze has a single namespace per application, and so refuses to have a duplicated component name.

This is a client-only package.

## Usage

Very simple:

### Include in your HTML template

```
    {{> plusButton }}
```

### Handle the event in your JS code

```
    'click .plusButton'( event, instance ){

    }
```

### Positionning

The `pwix:plus-button` package comes with a default relative positioning:

```
    .plusButton {
        position: relative;
        top: 1em;
        right: 1em;
    }
```

See that as an example. You will most probably override this positioning in your own stylesheet.

## Configuration

None at the moment.

## Provides

### Blaze components

#### `plusButton`

A simple circled-'plus' button.

The component is configurable with an object passed as an argument, which may contain:

- `enabled`:

    A ReactiveVar.

    If provided, then the button will be enabled (resp. disabled) depending of the ReactiveVar evaluates as truthy (resp. falsy).

    When not provided, the button is enabled.

## NPM peer dependencies

This package has no NPM dependencies.

---
P. Wieser
- Last updated on 2023, June 14th

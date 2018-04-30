# icons-toolbar

Generally used in block-controls or inspector. 



## Properties

#### label:

A label for the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### help:

Used to add help text below the field. Should not be used when field goes in block-controls.

- Type: `String`
- Required: No

#### placement:

Defines where you want to show the field. By default a field would be added to the block however it can be added to the sidebar settings by using `inspector` or in the block-controls by using `block-controls`.

- Accepts: `block-controls`, `inspector`
- Type: `String`
- Required: No

#### **mediaType:**

Type of the media to be added.

- Accepts: `image`, `video`, `audio`
- Type: `String`
- Required: No

**Example:**

```js
backgroundImage: {
	type: 'object',
	field: {
		type: 'media-icon',
		mediaType: 'image',
		placement: 'block-controls',
	},
},
```



## Return value in `props.attribute`

Returns media object.

- Type: `Object`



Read more about defining attributes on official Gutenberg [handbook](https://wordpress.org/gutenberg/handbook/block-api/attributes/).
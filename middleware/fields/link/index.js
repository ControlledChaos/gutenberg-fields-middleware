/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

import './editor.scss';
import Field from './../../components/field';

export default function link( props, config, defaultConfig ) {
	const fieldAttributes = _.extend( defaultConfig, config );

	delete fieldAttributes.type;

	return (
		<Field
			config={ config }
			component={ UrlInput }
			{ ...fieldAttributes }
		/>
	);
}

import reactTSTemplate from '../templates/reactTSTemplate.js'
import stylesTemplate from '../templates/stylesTemplate.js'
import typesTemplate from '../templates/typesTemplate.js'

export const argReadPathMap = {
	'reactTSComponent': reactTSTemplate,
	'styles': stylesTemplate,
	'types': typesTemplate
}

export const getWritePathNames = (componentName: string, path: string) => ({
	reactTSComponent: path + '/' + componentName + '.tsx',
	styles: path + '/' + componentName + '.styles.ts',
	types: path + '/' + componentName + '.types.ts',
})
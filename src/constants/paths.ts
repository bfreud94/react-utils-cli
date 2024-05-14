import reactTSTemplate from '../templates/reactTSTemplate.js'
import stylesTemplate from '../templates/stylesTemplate.js'
import typesTemplate from '../templates/typesTemplate.js'

export const getArgReadPathMap = (preReact18String: string) => ({
	'reactTSComponent': reactTSTemplate(preReact18String),
	'styles': stylesTemplate(),
	'types': typesTemplate()
})

const getGenericPath = (componentName: string, fileType: string, path: string) => `${path}/${componentName}/${componentName}${fileType}`

export const getWritePathNames = (componentName: string, path: string) => ({
	reactTSComponent: getGenericPath(componentName, '.tsx', path),
	styles: getGenericPath(componentName, '.styles.ts', path),
	types: getGenericPath(componentName, '.types.ts', path)
})
const BASE_TEMPLATE_PATH = 'src/templates'

const REACT_READ_TS_PATHNAME = BASE_TEMPLATE_PATH + '/react-typescript.txt'
const STYLES_READ_PATHNAME = BASE_TEMPLATE_PATH + '/styles.txt'
const TYPES_READ_PATHNAME = BASE_TEMPLATE_PATH + '/types.txt'

export const argReadPathMap = {
	'reactTSComponent': REACT_READ_TS_PATHNAME,
	'styles': STYLES_READ_PATHNAME,
	'types': TYPES_READ_PATHNAME
}

export const getWritePathNames = (componentName: string, path: string) => ({
	reactTSComponent: path + '/' + componentName + '.tsx',
	styles: path + '/' + componentName + '.styles.ts',
	types: path + '/' + componentName + '.types.ts',
})
export default `import { FC } from 'react'
import makeStyles from './ComponentName.styles'
import { ComponentNameProps } from './ComponentName.types'

const ComponentName: FC<ComponentNameProps> = () => {
	const styles = makeStyles()
	return (
		<div>
			ComponentName
		</div>
	)
}

export default ComponentName
`
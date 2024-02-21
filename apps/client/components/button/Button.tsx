import React from 'react'
import { ButtonBase, ButtonBaseProps } from '../ui/button'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends ButtonBaseProps {
	loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, loading, disabled, ...rest } = props
	return (
		<ButtonBase ref={ref} disabled={disabled || loading} {...rest}>
			{loading ? <Loader2 className="animate-spin" /> : children}
		</ButtonBase>
	)
})

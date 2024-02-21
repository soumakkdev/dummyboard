import { cn } from '@/lib/utils'
import { TooltipArrow, TooltipBase, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export interface ITooltip {
	content: React.ReactNode
	children: React.ReactNode
	delay?: number
	contentClassName?: string
	triggerClassName?: string
	arrowClassName?: string
	arrow?: boolean
	disabled?: boolean
}

export function Tooltip(props: ITooltip) {
	const { content, children, delay = 200, disabled, contentClassName, triggerClassName, arrow, arrowClassName } = props
	return (
		<TooltipProvider delayDuration={delay}>
			<TooltipBase>
				<TooltipTrigger asChild disabled={disabled} className={cn(triggerClassName, 'disabled:opacity-60')} type="button">
					{children}
				</TooltipTrigger>
				<TooltipContent className={contentClassName}>
					{arrow ? <TooltipArrow className={cn('fill-slate-900', arrowClassName)} /> : null}
					{content}
				</TooltipContent>
			</TooltipBase>
		</TooltipProvider>
	)
}

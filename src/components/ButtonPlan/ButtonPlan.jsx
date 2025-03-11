import './ButtonPlan.css'

export default function ButtonPlan({ children, ...props }) {
	return (
		<button className='button_plan' {...props}>{children}</button>
	)
}
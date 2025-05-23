interface IconProps {
	styles: string;
}

export const Icon = ({ styles }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={styles}
			viewBox="0 0 432 432"
		>
			<path d="M216,0C96.71,0,0,96.71,0,216a218,218,0,0,0,3.27,37.63L75.21,140.72,125.81,173,29.23,324.55A215.9,215.9,0,0,0,216,432c119.29,0,216-96.71,216-216S335.29,0,216,0ZM42.67,323.94l92.42-145.07L362.8,323.94Z" />
		</svg>
	);
};

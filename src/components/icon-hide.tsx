import { FunctionComponent, HTMLAttributes } from "react";

export interface IconHideProps extends HTMLAttributes<SVGSVGElement> { }

export const IconHide: FunctionComponent<IconHideProps> = (props) => {
	return (
		<svg {...props} cursor="pointer" fill="#000000" height="20px" width="20px" viewBox="0 0 330 330">
			<path d="M325.607,304.394l-63.479-63.479c38.57-29.035,63.522-64.92,65.247-67.437c3.501-5.11,3.501-11.846,0-16.956 c-2.925-4.269-72.659-104.544-162.371-104.544c-25.872,0-50.075,8.345-71.499,20.313L25.607,4.394 c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l63.478,63.478C29.299,118.12,4.35,154.006,2.625,156.523 c-3.5,5.109-3.5,11.845,0,16.955c2.925,4.268,72.65,104.546,162.378,104.546c25.868,0,50.069-8.345,71.493-20.314l67.897,67.898 C307.323,328.536,311.161,330,315,330c3.839,0,7.678-1.464,10.606-4.394C331.465,319.749,331.465,310.252,325.607,304.394z M165.003,81.977c60.26,0,113.408,60.338,131.257,83.022c-9.673,12.294-29.705,35.629-55.609,54.439L115.673,94.461 C131.079,86.902,147.736,81.977,165.003,81.977z M165.003,248.023c-60.285,0-113.439-60.364-131.273-83.037 c9.651-12.303,29.652-35.658,55.574-54.47l124.99,124.99C198.884,243.084,182.236,248.023,165.003,248.023z" />
		</svg>
	);
};

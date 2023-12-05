import { resetMessage } from "../slices/photoSlice";

export const useResetMessageComponent = (dispatch) => {
	return () => {
		setTimeout(() => {
			dispatch(resetMessage());
		}, 2000);
	};
};

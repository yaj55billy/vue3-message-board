import Swal from "sweetalert2";

export const SwalHandle = {
	showErrorMsg: function (title) {
		Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		}).fire({
			icon: "error",
			title,
		});
	},
	showSuccessMsg: function (title) {
		Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		}).fire({
			icon: "success",
			title,
		});
	},
};

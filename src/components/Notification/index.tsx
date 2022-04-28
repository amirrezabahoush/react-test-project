import { notification } from "antd";
import { NotificationProps } from "./Notification.props";

const Notification = (props: NotificationProps) => {
	const { config, type = "error", ...rest } = props;

	notification.config({
		duration: 5,
		rtl: true,
		placement: "topLeft",
    ...config
	});

	return notification[type](rest);
};

export default (Notification as any);

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Toast } from "primereact/toast";

const Notifications = forwardRef((props, ref) => {
    const toast = useRef(null);

    useImperativeHandle(ref, () => ({
        show: ({ severity = "info", summary = "", detail = "", life = 3000 }) => {
            toast.current.show({ severity, summary, detail, life });
        }
    }));

    return <Toast ref={toast} position="top-right" />;
});

export default Notifications;
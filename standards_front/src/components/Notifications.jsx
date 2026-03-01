import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Toast } from "primereact/toast";

/**
 * Imperative toast notification helper built on top of PrimeReact `Toast`.
 *
 * Parent components can hold a `ref` to this component and call `ref.current.show`
 * with a severity, summary, and detail to display a notification in the top-right
 * corner of the viewport.
 *
 * @param {Object} _props - Unused component props.
 * @param {*} ref
 *  Ref that exposes a `show` method for triggering toasts.
 */
const Notifications = forwardRef((_, ref) => {
    const toast = useRef(null);

    useImperativeHandle(ref, () => ({
        /**
         * Show a toast notification.
         *
         * @param {Object} args - Toast configuration.
         * @param {string} [args.severity="info"] - Severity level (e.g. "success", "info").
         * @param {string} [args.summary=""] - Short summary text.
         * @param {string} [args.detail=""] - Detailed message text.
         * @param {number} [args.life=3000] - Duration in milliseconds.
         */
        show: ({ severity = "info", summary = "", detail = "", life = 3000 }) => {
            toast.current.show({ severity, summary, detail, life });
        }
    }));

    return <Toast ref={toast} position="top-right" />;
});

export default Notifications;
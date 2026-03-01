import React, { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Password } from "primereact/password"; // Add this import

const SendEmail = ({ notify }) => {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ receiver: to, subject, text: message, user, pass }),
            });
            if (response.ok) {
                notify.current.show({
                    severity: "success",
                    summary: "Email",
                    detail: "Email sent successfully!",
                    life: 3000
                });
                setTo("");
                setSubject("");
                setMessage("");
                setUser("");
                setPass("");
            } else {
                notify.current.show({
                    severity: "error",
                    summary: "Email",
                    detail: "Failed to send email.",
                    life: 3000
                });
            }
        } catch (error) {
            notify.current.show({
                severity: "error",
                summary: "Email",
                detail: "Error sending email.",
                life: 3000
            });
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSend} style={{ maxWidth: 400, margin: "0 auto" }}>
            <FloatLabel>
                <InputText id="to" value={to} onChange={(e) => setTo(e.target.value)} />
                <label htmlFor="to">To</label>
            </FloatLabel>
            <br /><br />
            <FloatLabel>
                <InputText id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <label htmlFor="subject">Subject</label>
            </FloatLabel>
            <br /><br />
            <FloatLabel>
                <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
                <label htmlFor="message">Message</label>
            </FloatLabel>
            <br /><br />
            <FloatLabel>
                <InputText id="user" value={user} onChange={(e) => setUser(e.target.value)} />
                <label htmlFor="user">User</label>
            </FloatLabel>
            <br /><br />
            <FloatLabel>
                <Password id="pass" value={pass} onChange={(e) => setPass(e.target.value)} feedback={false} />
                <label htmlFor="pass">Password</label>
            </FloatLabel>
            <br /><br />
            <Button label={loading ? "Sending..." : "Send Email"} type="submit" disabled={loading} />
        </form>
    );
};

export default SendEmail;
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useEffect } from "react";

const WeatherStatus = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        setLoading(true);
        setError("");
        setWeather(null);
        try {
            const response = await fetch(`http://localhost:3000/weather`);
            if (!response.ok) {
                throw new Error("Failed to fetch weather");
            }
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError("Could not fetch weather data.");
        }
        setLoading(false);
    };

    useEffect(() => {
        // Fetch default weather data when component mounts
        fetchWeather();
    }, []);

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            {/* <span className="p-float-label" style={{ width: "100%" }}>
                <InputText
                    id="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    style={{ width: "100%" }}
                />
                <label htmlFor="city">City</label>
            </span>
            <br /><br />
            <Button label={loading ? "Loading..." : "Get Weather"} onClick={fetchWeather} disabled={loading || !city} />
            <br /><br /> */}
            {error && <div style={{ color: "red" }}>{error}</div>}
            {weather && weather.weather && (
                <Card title={weather.name}>
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                        <h3>{weather.weather[0].main}</h3>
                        <p>{weather.weather[0].description}</p>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Feels like: {weather.main.feels_like}°C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Pressure: {weather.main.pressure} hPa</p>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default WeatherStatus;
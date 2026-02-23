import React, { useState, useMemo } from "react";

const STATE_DATA = {
  India: [
    "Andhra Pradesh",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Maharashtra",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "West Bengal",
  ],
  Pakistan: [
    "Balochistan",
    "Gilgit-Baltistan",
    "Islamabad Capital Territory",
    "Khyber Pakhtunkhwa",
    "Punjab",
    "Sindh",
    "Azad Jammu and Kashmir",
  ],
};

export default function CountryStateDropdown() {
  const [country, setCountry] = useState(""); // no country selected by default
  const [state, setState] = useState("");

  // Compute the list of states for the selected country
  const statesForCountry = useMemo(() => {
    return country ? STATE_DATA[country] ?? [] : [];
  }, [country]);

  // When country changes, reset the state selection
  const handleCountryChange = (e) => {
    const nextCountry = e.target.value;
    setCountry(nextCountry);
    setState(""); // clear previous state
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="mx-auto max-w-md font-sans">
      <h2 className="mb-4 text-2xl font-semibold text-slate-800">
        Country &amp; State Selector
      </h2>

      {/* Country Dropdown */}
      <label
        htmlFor="country-select"
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        Country
      </label>
      <select
        id="country-select"
        value={country}
        onChange={handleCountryChange}
        aria-label="Select Country"
        className="mb-4 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="" disabled>
          -- Select Country --
        </option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
      </select>

      {/* State Dropdown */}
      <label
        htmlFor="state-select"
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        State / Province
      </label>
      <select
        id="state-select"
        value={state}
        onChange={handleStateChange}
        aria-label="Select State or Province"
        disabled={!country}
        className={`mb-4 w-full rounded-md border px-3 py-2 shadow-sm outline-none transition
          ${
            country
              ? "border-slate-300 bg-white text-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              : "border-slate-200 bg-slate-50 text-slate-400"
          }`}
      >
        <option value="" disabled>
          {country ? "-- Select State / Province --" : "Select a country first"}
        </option>
        {statesForCountry.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Preview */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-700">
        <strong className="font-semibold">Selection:</strong>{" "}
        {country ? `${country}${state ? " → " + state : ""}` : "None"}
      </div>
    </div>
  );
}

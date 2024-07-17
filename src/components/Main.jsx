import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Main() {
  const { login } = useAuth();
  const [fDate, setFDate] = useState("");
  const [tDate, setTDate] = useState("");
  const [spotNo, setSpotNo] = useState("");
  const [error, setError] = useState("");
  const [parkingSlots, setParkingSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const readSlots = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        setIsLoading(false);
        return;
      }

      const response = await fetch("http://localhost:3005/api/parking", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const slots = await response.json();
        setParkingSlots(slots);
      } else {
        throw new Error("Failed to fetch parking slots");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    readSlots();
  }, []);

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const compareDates = (dateTo) => {
    const currentDate = new Date();
    const slotDate = new Date(dateTo);

    return slotDate >= currentDate;
  };

  const handleUpdateSlot = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      const updatedSlot = {
        reservedBy: "John Doe", // Replace with actual user data
        dateFrom: fDate ? new Date(fDate) : new Date(),
        dateTo: tDate ? new Date(tDate) : new Date(),
      };

      const response = await fetch(`http://localhost:3005/api/slots`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedSlot),
      });

      if (response.ok) {
        const updatedSlotData = await response.json();
        console.log("Updated slot:", updatedSlotData);
        readSlots();
      } else {
        throw new Error("Failed to update slot");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="sContainer">
        <div className="searchContainer">
          <h1 className="homeNoteLogin">Parking No:</h1>
          <div className="search">
          <input
              type="number"
              id="searchInput"
              className="searchText"
              placeholder="Enter spot number"
              onChange={(e) => setSpotNo(e.target.value)}
              value={spotNo}
            />
          </div>

          <h1 className="homeNoteLogin">Date: from</h1>
          <div className="search">
            <input
              type="date"
              id="fDateInput"
              className="searchText"
              onChange={(e) => setFDate(e.target.value)}
              value={fDate}
            />
          </div>

          <h1 className="homeNoteLogin">Date: to</h1>
          <div className="search">
            <input
              type="date"
              id="tDateInput"
              className="searchText"
              onChange={(e) => setTDate(e.target.value)}
              value={tDate}
            />
          </div>

          <div className="btnMain">
            <button className="btn" id="button" onClick={handleUpdateSlot}>
              Book Spot
            </button>
          </div>
        </div>
      </div>
      <div className="MContainer">
        <div>
          <h1 className="mainNoteLogin">Parking Spots</h1>
        </div>
        <div className="slots">
          {parkingSlots.map((slot, index) => (
            <div key={index} className="slot">
              <div className="parkingNum">{slot.spotNo}</div>
              <div>
                <p className="parkingName">
                  {compareDates(slot.dateTo)
                    ? `Reserved by: ${slot.reservedBy}`
                    : "Free"}
                </p>
                <p className="parkingName">
                  {compareDates(slot.dateTo)
                    ? `Until: ${formatDate(slot.dateTo)}`
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

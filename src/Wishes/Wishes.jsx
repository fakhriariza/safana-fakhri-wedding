import React, { useState, useEffect } from "react";
import wishstyle from "./wishes.module.css"; // create a new CSS module
import api from "../api";

function WishPage({ data, invitationId }) {
  const [text, setText] = useState("");
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishes = async () => {
    try {
      const res = await api.get("/guests/wishes");
      setWishList(res.data);
    } catch (err) {
      console.error("Failed to load wishes", err);
      if (err.response?.status === 404) {
        console.warn("API returned 404 - fallback to static data");
        setWishList(data);
      } else {
        console.warn("Unexpected error or no response from server");
        setWishList(data);
      }
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSend = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await api.post(`/guests/wishes/${invitationId}`, {
        wishes: text,
      });

      if (res.status === 200) {
        alert("Wish sent!");
        setText("");
        fetchWishes();
      } else {
        alert("Failed to send wish");
      }
    } catch (err) {
      console.error("Error sending wish", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={wishstyle.background_wish}>
      <h1 className={wishstyle.title_wish}>
        Wishes <br /> & Words of Love
      </h1>

      <textarea
        className={wishstyle.input_wish}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Give Us Your Wish!"
        rows={4}
        style={{ resize: "none", overflow: "hidden" }}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />

      <button
        className={wishstyle.button_send}
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>

      <div className={wishstyle.wish_list}>
        {wishList.map((item) => (
          <div key={item.id} className={wishstyle.wish_item}>
            <h4 className={wishstyle.name_wish}>{item.title}</h4>
            <h4 className={wishstyle.time_wish}>
              {new Date(item.time).toLocaleString()}
            </h4>
            <p className={wishstyle.wish}>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishPage;

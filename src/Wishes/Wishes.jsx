import React, { useState, useEffect } from "react";
import wishstyle from "./wishes.module.css";
import api from "../api";
import AOS from "aos";
import "aos/dist/aos.css";

function WishPage({ data, invitationId }) {
  const [text, setText] = useState("");
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch wishes from API or fallback data
  const fetchWishes = async () => {
    try {
      const res = await api.get("/guests/wishes");
      setWishList(res.data);
    } catch (err) {
      console.error("Failed to load wishes", err);
      if (!wishList.length) setWishList(data); // fallback only if empty
    }
  };

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, easing: "ease-out-cubic" });
    fetchWishes();
  }, []);

  // Refresh AOS whenever wishList changes
  useEffect(() => {
    AOS.refresh();
  }, [wishList]);

  // Handle sending a wish
  const handleSend = async () => {
    if (!text.trim()) return;
    setLoading(true);

    // Optimistic update: show new wish immediately
    const newWish = {
      id: Date.now(), // temporary ID
      title: "You",
      message: text,
      time: new Date(),
    };
    setWishList((prev) => [newWish, ...prev]);
    setText("");

    try {
      const res = await api.post(`/guests/wishes/${invitationId}`, {
        wishes: text,
      });

      if (res.status !== 200) {
        alert("Failed to send wish");
        // Revert optimistic update if API fails
        setWishList((prev) => prev.filter((wish) => wish.id !== newWish.id));
      }
    } catch (err) {
      console.error("Error sending wish", err);
      alert("Something went wrong");
      setWishList((prev) => prev.filter((wish) => wish.id !== newWish.id));
    } finally {
      setLoading(false);
      fetchWishes(); // Sync with server
    }
  };

  return (
    <div className={wishstyle.background_wish}>
      <h1
        data-aos="flip-left"
        data-aos-delay="100"
        data-aos-duration="1000"
        className={wishstyle.title_wish}
      >
        Wishes <br /> & Words of Love
      </h1>

      <textarea
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
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
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        className={wishstyle.button_send}
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>

      <div className={wishstyle.wish_list}>
        {wishList.map((item, index) => (
          <div
            key={item.id}
            className={wishstyle.wish_item}
            data-aos="fade-right"
            data-aos-delay={600 + index * 100}
            data-aos-duration="1000"
          >
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

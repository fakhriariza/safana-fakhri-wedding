import { useState } from "react";
import { Copy } from "lucide-react";
import style from "./gift.module.css";

export default function BankRow({ logo, accountNumber }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={style.bankRow}>
      {/* Bank Logo */}
      <img src={logo} alt="Bank Logo" className={style.bankLogo} />

      {/* Account Number */}
      <span className={style.accountNumber}>{accountNumber}</span>

      {/* Copy Button */}
      <button onClick={handleCopy} className={style.copyBtn} title="Copy">
        <Copy size={18} />
      </button>

      {/* Copy Feedback */}
      {copied && <span className={style.copyFeedback}>Copied!</span>}
    </div>
  );
}

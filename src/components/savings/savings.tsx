import { useState } from "react";
import "./Savings.css";

function Savings() {
  const [savings, setSavings] = useState(48720);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");

  function handleAddSavings() {
    const value = Number(amount);

    if (value > 0) {
      setSavings(savings + value);
      setAmount("");
      setIsModalOpen(false);
    }
  }

  const savings_goal = 70000;

  return (
    <div className="savings">
      <h2>💸 Savings</h2>

      <p>
        Current Savings: {savings} kr / {savings_goal} kr
      </p>

      {savings >= savings_goal && (
        <p className="goal-reached">🎉 Congrats! Goal reached!</p>
      )}

      <button onClick={() => setIsModalOpen(true)} className="savings-button">Add Savings</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add savings</h3>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />

            <div className="modal-buttons">
              <button
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>

              <button className="add-button" onClick={handleAddSavings}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Savings;

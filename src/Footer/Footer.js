import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer-ofpage">
      <p className="terms-conditions">
        By using our website, you are accepting our{" "}
        <button onClick={navigate("/Workouts")}>Terms and Conditions</button>.
      </p>
    </div>
  );
}

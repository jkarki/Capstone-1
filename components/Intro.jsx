import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

// assests
import board from "../assets/board.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Fuel Your Financial Future
        </h1>
        <p>
        Set forth on a path to financial excellence with Finance Frontier. Track your goals forward with our specialized insight.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={board} alt="Person with money" width={600} />
      
    </div>
  )
}
export default Intro
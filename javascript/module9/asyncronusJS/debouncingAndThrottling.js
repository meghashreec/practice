//
// 🧠 Key Difference:
// | Concept   | Debouncing                                                         | Throttling                                                                     |
// | --------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
// | Purpose   | Run the function **after** a delay when the event **stops** firing | Run the function at **regular intervals**, no matter how often the event fires |
// | Use case  | Wait for user to finish typing before triggering search            | Limit how often scroll or resize handlers fire                                 |
// | Frequency | Executes **once after a pause**                                    | Executes **every N ms**                                                        |
// | Control   | Delay after inactivity                                             | Rate limit                                                                     |

// 🔁 Real-Life Analogies
// Debounce: Pressing a doorbell — it rings only after you stop pressing.

// Throttle: A water tap — water flows at a fixed rate, no matter how hard you try to get more.

// 🧪 Examples
// 1️⃣ Debounce Implementation

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Debounced Resize:", new Date());
  }, 300)
);
// Fires only after 300ms of no resize activity.

// 2️⃣ Throttle Implementation

function throttle(func, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

// Usage
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Throttled Scroll:", new Date());
  }, 500)
);
// Fires every 500ms even if you scroll continuously.

// ✅ When to Use What?
// | Use Case                                                | Use Debounce? | Use Throttle? |
// | ------------------------------------------------------- | ------------- | ------------- |
// | Search input box                                        | ✅ Yes         | ❌ No          |
// | Resize event                                            | ✅ Yes         | ✅ Maybe       |
// | Scroll position update (like lazy load or progress bar) | ❌ No          | ✅ Yes         |
// | Auto-save form after inactivity                         | ✅ Yes         | ❌ No          |
// | Click event rate limit                                  | ❌ No          | ✅ Yes         |

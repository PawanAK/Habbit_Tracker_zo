import { useState } from "react";

export default function Home() {
  const [habits, setHabits] = useState({});
  const [habitName, setHabitName] = useState('');
  const [completedHabits, setCompletedHabits] = useState({});

  const addHabit = () => {
    if (habitName.trim() === '') return;
    setHabits({ ...habits, [habitName]: [] });
    setHabitName('');
  };

  const markComplete = (habitName) => {
    const currentDate = new Date().toISOString().split('T')[0];
    setHabits({
      ...habits,
      [habitName]: [...habits[habitName], currentDate],
    });
  };

  const viewProgress = (habitName) => {
    setCompletedHabits(habits[habitName]);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter habit name"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      <div>
        <h2>Habits:</h2>
        <ul>
          {Object.keys(habits).map((habit, index) => (
            <li key={index}>
              {habit}
              <button onClick={() => markComplete(habit)}>Mark Complete</button>
              <button onClick={() => viewProgress(habit)}>View Progress</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Habits:</h2>
        <ul>
          {completedHabits.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

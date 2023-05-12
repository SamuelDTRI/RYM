import "./tasks.css";

function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi Primera Tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>
    </div>
  );
}

export default TaskCard;

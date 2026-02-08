import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function TemperatureChart({ daily }) {
  if (!daily) return null;

  // Transform API data → chart-friendly format
  const data = daily.time.map((date, index) => ({
    date,
    max: daily.temperature_2m_max[index],
    min: daily.temperature_2m_min[index],
  }));

  return (
    <div className="chart-container">
      <h3>📈 Daily Temperature Forecast</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="°C" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="max"
            name="Max Temp"
            stroke="#e53935"
          />
          <Line
            type="monotone"
            dataKey="min"
            name="Min Temp"
            stroke="#1e88e5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;

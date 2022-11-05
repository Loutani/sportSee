import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts"

const renderLegend = (score) => {
    console.log(score)
    return (
      <div className="user-chart-score-legend">
        <p>{score[0].name}</p>
        <p>de votre objectif</p>
      </div>
    );
}

function UserScoreChart({score}) {
    return (
        <div className="user-chart-score">
            <p className="chart-legend">Score</p>
            <ResponsiveContainer height={270}>
                <PieChart>
                    <Legend content={renderLegend(score)} align="center" verticalAlign="middle" />
                    <Pie data={score} cornerRadius={10} innerRadius={90} outerRadius={100} paddingAngle={0} dataKey="x" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserScoreChart
import { LineChart, Tooltip, XAxis, Line, ResponsiveContainer, Legend } from "recharts"

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {

        return (
            <div className="user-line-tool-tip">
                {payload[0].value} min
            </div>
        )
    }
}

const renderLegend = () => {
    return (
      <p className="user-chart-average-session-legend">Durée moyenne des sessions</p>
    );
}

function UserAverageSession({userAverageSession}) {
    return (
        <div className="user-chart-average-session">
            <ResponsiveContainer height={270}>
                <LineChart data={userAverageSession} margin={{ top: 30, right: 0, left: 0, bottom: 30 }}>
                    <Legend content={renderLegend} height={40} verticalAlign="top" align='left' />
                    <XAxis axisLine={false} dy={20} fill='#FFF' padding={{ left: 30, right: 30 }} dataKey="day" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line strokeWidth={2} dot={false} type="monotone" dataKey="sessionLength" stroke="#FFF" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserAverageSession
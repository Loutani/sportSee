import { useContext } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts"
import { UserPerormanceContext } from "../../pages/Profile"

function UserPerformanceChart() {
    const userPerformance = useContext(UserPerormanceContext);
    
    return (
        <div className="user-chart-performance">
            <ResponsiveContainer height='100%'>
                <RadarChart data={userPerformance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserPerformanceChart
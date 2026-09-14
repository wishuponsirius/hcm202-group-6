import { useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'dang', label: 'ĐẢNG', ring: 0, desc: 'Đảng Cộng sản Việt Nam - Hạt nhân lãnh đạo' },
  
  // Inner ring: Gốc cách mạng
  { id: 'cong-nhan', label: 'Công nhân', ring: 1, angle: 180, desc: 'Gốc cách mạng' },
  { id: 'nong-dan', label: 'Nông dân', ring: 1, angle: 0, desc: 'Gốc cách mạng' },
  
  // Middle ring: Liên hiệp
  { id: 'tieu-tu-san', label: 'Tiểu tư sản', ring: 2, angle: 90, desc: 'Liên hiệp' },
  { id: 'tri-thuc', label: 'Trí thức', ring: 2, angle: 210, desc: 'Liên hiệp' },
  { id: 'trung-nong', label: 'Trung nông', ring: 2, angle: 330, desc: 'Liên hiệp' },
  
  // Outer ring: Tranh thủ / Trung lập
  { id: 'tu-san-dt', label: 'Tư sản dân tộc', ring: 3, angle: 45, desc: 'Tranh thủ / Trung lập' },
  { id: 'phu-nong', label: 'Phú nông', ring: 3, angle: 165, desc: 'Tranh thủ / Trung lập' },
  { id: 'trung-tieu-dc', label: 'Trung tiểu địa chủ', ring: 3, angle: 285, desc: 'Tranh thủ / Trung lập' },
];

export default function NetworkDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getCoordinates = (ring: number, angle: number) => {
    if (ring === 0) return { x: 400, y: 400 };
    const radii = [0, 120, 240, 360];
    const r = radii[ring];
    const rad = (angle * Math.PI) / 180;
    return {
      x: 400 + r * Math.cos(rad),
      y: 400 + r * Math.sin(rad)
    };
  };

  const getColors = (ring: number) => {
    switch(ring) {
      case 0: return { fill: '#704214', text: '#FFF8EE', stroke: '#C9A84C' };
      case 1: return { fill: '#C9A84C', text: '#2C1810', stroke: '#704214' };
      case 2: return { fill: '#F5E6C8', text: '#2C1810', stroke: '#704214' };
      case 3: return { fill: '#FAF3E3', text: '#704214', stroke: '#C9A84C' };
      default: return { fill: '#fff', text: '#000', stroke: '#000' };
    }
  };

  const getRadius = (ring: number) => {
    return ring === 0 ? 50 : 45 - ring * 5;
  };

  return (
    <div className="my-10">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold font-heading text-[#2C1810]">Sơ đồ mạng lưới lực lượng theo Cương lĩnh 1930</h3>
        <p className="text-[#704214] italic mt-2">Hạt nhân lãnh đạo và vòng tròn liên minh toàn dân tộc</p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto aspect-square bg-[#F5E6C8]/30 rounded-full border border-[#C9A84C]/20 overflow-hidden">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          {/* Rings */}
          {[120, 240, 360].map((r, i) => (
            <motion.circle
              key={`ring-${i}`}
              cx="400"
              cy="400"
              r={r}
              fill="none"
              stroke="#704214"
              strokeWidth="1"
              strokeDasharray="5,5"
              strokeOpacity="0.3"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            />
          ))}

          {/* Lines to center */}
          {nodes.filter(n => n.ring > 0).map((node) => {
            const { x, y } = getCoordinates(node.ring, node.angle!);
            return (
              <motion.line
                key={`line-${node.id}`}
                x1="400"
                y1="400"
                x2={x}
                y2={y}
                stroke="#C9A84C"
                strokeWidth="2"
                strokeOpacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + node.ring * 0.2, duration: 0.5 }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const coords = node.ring === 0 ? { x: 400, y: 400 } : getCoordinates(node.ring, node.angle!);
            const colors = getColors(node.ring);
            const r = getRadius(node.ring);
            const isHovered = hoveredNode === node.id;

            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.ring * 0.3, type: 'spring' }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={coords.x}
                  cy={coords.y}
                  r={isHovered ? r + 5 : r}
                  fill={colors.fill}
                  stroke={colors.stroke}
                  strokeWidth={isHovered ? 3 : 2}
                  className="transition-all duration-300"
                />
                
                <text
                  x={coords.x}
                  y={coords.y}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill={colors.text}
                  fontSize={node.ring === 0 ? "20" : "14"}
                  fontWeight="bold"
                  pointerEvents="none"
                  className="font-heading"
                >
                  {node.label.split(' ').map((word, idx, arr) => (
                    <tspan 
                      key={idx} 
                      x={coords.x} 
                      dy={idx === 0 ? (arr.length > 1 ? "-0.5em" : "0") : "1.2em"}
                    >
                      {word}
                    </tspan>
                  ))}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Tooltip Overlay */}
        {hoveredNode && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C1810] text-[#FFF8EE] px-4 py-2 rounded-lg text-sm shadow-xl pointer-events-none transition-opacity font-bold">
            {nodes.find(n => n.id === hoveredNode)?.desc}
          </div>
        )}
      </div>
    </div>
  );
}

/* 고급 SVG 일러스트 세트 — 사진 대신 사용 (라이트 카드 배경) */

const C = {
  bg: "#F6F6F7",
  panel: "#FFFFFF",
  line: "#E5E5E5",
  soft: "#EFEFEF",
  accent: "#A92D23",
  accentSoft: "#FBECEA",
  muted: "#C9C9CC",
  ink: "#222222",
};

type ArtProps = { className?: string };

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden
    >
      <rect width="800" height="500" fill={C.bg} />
      {children}
    </svg>
  );
}

/* ─── 대시보드 ─── */
export function ArtDashboard({ className }: ArtProps) {
  const line =
    "M110 400 L175 360 L240 375 L305 310 L370 330 L435 255 L500 220";
  return (
    <Frame className={className}>
      {/* 사이드바 */}
      <rect x="0" y="0" width="56" height="500" fill={C.panel} />
      <rect x="16" y="28" width="24" height="24" rx="4" fill={C.accent} />
      {[90, 130, 170, 210].map((y) => (
        <rect key={y} x="16" y={y} width="24" height="8" rx="2" fill={C.soft} />
      ))}
      {/* 상단 stat 카드 3개 */}
      {[80, 318, 556].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="36"
            width="222"
            height="92"
            rx="8"
            fill={C.panel}
            stroke={C.line}
          />
          <rect x={x + 18} y="58" width="60" height="9" rx="3" fill={C.soft} />
          <rect
            x={x + 18}
            y="80"
            width="104"
            height="20"
            rx="4"
            fill={i === 0 ? C.accent : C.ink}
          />
          <circle cx={x + 192} cy="62" r="14" fill={C.accentSoft} />
          <circle cx={x + 192} cy="62" r="5" fill={C.accent} />
        </g>
      ))}
      {/* 메인 차트 패널 */}
      <rect
        x="80"
        y="152"
        width="460"
        height="312"
        rx="10"
        fill={C.panel}
        stroke={C.line}
      />
      {[210, 270, 330, 390].map((y) => (
        <line
          key={y}
          x1="80"
          x2="540"
          y1={y}
          y2={y}
          stroke={C.soft}
          strokeWidth="1"
        />
      ))}
      <path
        d={`${line} L500 452 L110 452 Z`}
        fill={C.accentSoft}
        opacity="0.7"
      />
      <path
        d={line}
        fill="none"
        stroke={C.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [175, 360],
        [305, 310],
        [435, 255],
        [500, 220],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="5" fill={C.accent} />
      ))}
      {/* 우측 미니 패널 */}
      <rect
        x="556"
        y="152"
        width="222"
        height="312"
        rx="10"
        fill={C.panel}
        stroke={C.line}
      />
      {[180, 232, 284, 336, 388].map((y, i) => (
        <g key={y}>
          <circle cx={580} cy={y + 14} r="9" fill={C.accentSoft} />
          <rect
            x="600"
            y={y + 4}
            width="90"
            height="9"
            rx="3"
            fill={C.soft}
          />
          <rect
            x="600"
            y={y + 19}
            width="54"
            height="7"
            rx="3"
            fill={C.line}
          />
          <rect
            x="710"
            y={y + 8}
            width="44"
            height="16"
            rx="4"
            fill={i % 2 === 0 ? C.accentSoft : C.soft}
          />
        </g>
      ))}
    </Frame>
  );
}

/* ─── 캔들스틱 차트 ─── */
export function ArtChart({ className }: ArtProps) {
  const candles = [
    [90, 250, 120, 70],
    [150, 200, 150, 90],
    [210, 230, 130, 60],
    [270, 160, 200, 110],
    [330, 210, 150, 70],
    [390, 150, 230, 120],
    [450, 190, 170, 80],
    [510, 120, 260, 130],
    [570, 170, 200, 90],
    [630, 100, 290, 140],
    [690, 140, 230, 100],
  ];
  const linePath =
    "M90 280 L150 250 L210 260 L270 200 L330 230 L390 175 L450 205 L510 150 L570 185 L630 120 L690 155";
  return (
    <Frame className={className}>
      <rect
        x="40"
        y="40"
        width="720"
        height="420"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      {[120, 200, 280, 360].map((y) => (
        <line
          key={y}
          x1="60"
          x2="740"
          y1={y}
          y2={y}
          stroke={C.soft}
          strokeWidth="1"
        />
      ))}
      {candles.map(([x, top, mid, h], i) => {
        const up = i % 3 !== 1;
        const col = up ? C.accent : C.muted;
        return (
          <g key={x}>
            <line
              x1={x + 14}
              x2={x + 14}
              y1={top - 24}
              y2={top + h + 24}
              stroke={col}
              strokeWidth="2"
            />
            <rect
              x={x}
              y={top}
              width="28"
              height={h}
              rx="2"
              fill={up ? C.accent : C.panel}
              stroke={col}
              strokeWidth="2"
            />
          </g>
        );
      })}
      <path d={linePath} fill="none" stroke={C.ink} strokeWidth="2.5" strokeDasharray="2 5" opacity="0.5" />
    </Frame>
  );
}

/* ─── 호가창 ─── */
export function ArtOrderbook({ className }: ArtProps) {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <Frame className={className}>
      <rect
        x="40"
        y="40"
        width="350"
        height="420"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      <rect
        x="410"
        y="40"
        width="350"
        height="420"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      {rows.map((r) => {
        const y = 90 + r * 58;
        const w1 = 90 + ((r * 37) % 200);
        const w2 = 110 + ((r * 53) % 190);
        return (
          <g key={r}>
            {/* 매도(좌) */}
            <rect
              x={370 - w1}
              y={y}
              width={w1}
              height="38"
              rx="4"
              fill={C.soft}
            />
            <rect x="60" y={y + 12} width="80" height="14" rx="3" fill={C.muted} />
            <rect
              x="300"
              y={y + 12}
              width="54"
              height="14"
              rx="3"
              fill={C.line}
            />
            {/* 매수(우) */}
            <rect
              x="430"
              y={y}
              width={w2}
              height="38"
              rx="4"
              fill={C.accentSoft}
            />
            <rect
              x="430"
              y={y + 12}
              width="80"
              height="14"
              rx="3"
              fill={C.accent}
            />
            <rect
              x="670"
              y={y + 12}
              width="54"
              height="14"
              rx="3"
              fill={C.line}
            />
          </g>
        );
      })}
    </Frame>
  );
}

/* ─── 리스크 게이지 ─── */
export function ArtRisk({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect
        x="60"
        y="50"
        width="680"
        height="400"
        rx="14"
        fill={C.panel}
        stroke={C.line}
      />
      {/* 반원 게이지 */}
      <path
        d="M220 320 A180 180 0 0 1 580 320"
        fill="none"
        stroke={C.soft}
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M220 320 A180 180 0 0 1 388 198"
        fill="none"
        stroke={C.accent}
        strokeWidth="34"
        strokeLinecap="round"
      />
      {/* 바늘 */}
      <line
        x1="400"
        y1="320"
        x2="330"
        y2="225"
        stroke={C.ink}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="400" cy="320" r="16" fill={C.ink} />
      <circle cx="400" cy="320" r="6" fill={C.panel} />
      {/* 방패 */}
      <path
        d="M400 350 l44 16 v34 c0 30 -22 50 -44 60 c-22 -10 -44 -30 -44 -60 v-34 z"
        fill={C.accentSoft}
        stroke={C.accent}
        strokeWidth="3"
      />
      <path
        d="M384 408 l12 12 l22 -24"
        fill="none"
        stroke={C.accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

/* ─── 설치 / 다운로드 ─── */
export function ArtInstall({ className }: ArtProps) {
  return (
    <Frame className={className}>
      {/* 윈도우 창 */}
      <rect
        x="120"
        y="80"
        width="560"
        height="340"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      <rect x="120" y="80" width="560" height="44" rx="12" fill={C.soft} />
      <rect x="120" y="112" width="560" height="12" fill={C.soft} />
      {[150, 174, 198].map((cx) => (
        <circle key={cx} cx={cx} cy="102" r="6" fill={C.muted} />
      ))}
      {/* 다운로드 아이콘 */}
      <circle cx="400" cy="250" r="76" fill={C.accentSoft} />
      <line
        x1="400"
        y1="206"
        x2="400"
        y2="288"
        stroke={C.accent}
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M362 256 L400 294 L438 256"
        fill="none"
        stroke={C.accent}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 진행 바 */}
      <rect x="220" y="358" width="360" height="14" rx="7" fill={C.soft} />
      <rect x="220" y="358" width="250" height="14" rx="7" fill={C.accent} />
    </Frame>
  );
}

/* ─── API 키 연결 ─── */
export function ArtApiKey({ className }: ArtProps) {
  return (
    <Frame className={className}>
      {/* 좌 노드 (거래소) */}
      <rect
        x="70"
        y="190"
        width="170"
        height="120"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      <rect x="98" y="218" width="114" height="12" rx="4" fill={C.soft} />
      <rect x="98" y="244" width="78" height="10" rx="4" fill={C.line} />
      <circle cx="155" cy="284" r="14" fill={C.accentSoft} />
      {/* 우 노드 (프로그램) */}
      <rect
        x="560"
        y="190"
        width="170"
        height="120"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      <rect x="588" y="218" width="114" height="12" rx="4" fill={C.soft} />
      <rect x="588" y="244" width="78" height="10" rx="4" fill={C.line} />
      <circle cx="645" cy="284" r="14" fill={C.accentSoft} />
      {/* 연결선 */}
      <line
        x1="240"
        y1="250"
        x2="560"
        y2="250"
        stroke={C.accent}
        strokeWidth="3"
        strokeDasharray="4 8"
      />
      {/* 중앙 키 + 자물쇠 */}
      <circle cx="400" cy="250" r="62" fill={C.accent} />
      <circle cx="386" cy="236" r="20" fill="none" stroke={C.panel} strokeWidth="9" />
      <path
        d="M400 250 L432 282 M420 270 L432 258 M432 282 L444 270"
        stroke={C.panel}
        strokeWidth="9"
        strokeLinecap="round"
      />
    </Frame>
  );
}

/* ─── 전략 선택 ─── */
export function ArtStrategy({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect
        x="60"
        y="50"
        width="430"
        height="400"
        rx="14"
        fill={C.panel}
        stroke={C.line}
      />
      {/* 슬라이더 3개 */}
      {[110, 190, 270].map((y, i) => (
        <g key={y}>
          <rect x="100" y={y} width="40" height="10" rx="4" fill={C.soft} />
          <rect x="100" y={y + 30} width="350" height="8" rx="4" fill={C.soft} />
          <rect
            x="100"
            y={y + 30}
            width={[230, 150, 300][i]}
            height="8"
            rx="4"
            fill={C.accent}
          />
          <circle
            cx={100 + [230, 150, 300][i]}
            cy={y + 34}
            r="15"
            fill={C.panel}
            stroke={C.accent}
            strokeWidth="4"
          />
        </g>
      ))}
      {/* 토글 */}
      <rect x="100" y="360" width="70" height="36" rx="18" fill={C.accent} />
      <circle cx="152" cy="378" r="13" fill={C.panel} />
      <rect x="190" y="370" width="160" height="14" rx="4" fill={C.soft} />
      {/* 우측 미니 차트 패널 */}
      <rect
        x="510"
        y="50"
        width="230"
        height="400"
        rx="14"
        fill={C.panel}
        stroke={C.line}
      />
      <path
        d="M540 320 L580 280 L620 300 L660 230 L700 200 L710 190"
        fill="none"
        stroke={C.accent}
        strokeWidth="3.5"
      />
      {[110, 150, 190].map((y) => (
        <rect
          key={y}
          x="540"
          y={y}
          width={y === 110 ? 150 : y === 150 ? 110 : 130}
          height="14"
          rx="4"
          fill={C.soft}
        />
      ))}
      {[372, 400].map((y) => (
        <rect key={y} x="540" y={y} width="170" height="12" rx="4" fill={C.line} />
      ))}
    </Frame>
  );
}

/* ─── 모니터링 ─── */
export function ArtMonitor({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect
        x="90"
        y="70"
        width="620"
        height="360"
        rx="12"
        fill={C.panel}
        stroke={C.line}
      />
      <rect x="90" y="70" width="620" height="40" rx="12" fill={C.soft} />
      <rect x="90" y="98" width="620" height="12" fill={C.soft} />
      <circle cx="118" cy="90" r="6" fill={C.accent} />
      {/* 라인 차트 */}
      <path
        d="M130 320 L210 280 L290 295 L370 230 L450 255 L530 180 L610 210 L670 150"
        fill="none"
        stroke={C.accent}
        strokeWidth="3.5"
      />
      <path
        d="M130 320 L210 280 L290 295 L370 230 L450 255 L530 180 L610 210 L670 150 L670 400 L130 400 Z"
        fill={C.accentSoft}
        opacity="0.6"
      />
      {/* 하단 stat */}
      {[130, 320, 510].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="350"
            width="160"
            height="56"
            rx="8"
            fill={C.bg}
            stroke={C.line}
          />
          <rect x={x + 16} y="364" width="50" height="8" rx="3" fill={C.line} />
          <rect
            x={x + 16}
            y="380"
            width="80"
            height="14"
            rx="4"
            fill={i === 1 ? C.accent : C.ink}
          />
        </g>
      ))}
      {/* 알림 벨 */}
      <circle cx="660" cy="92" r="14" fill={C.accent} />
      <path
        d="M660 84 a7 7 0 0 1 7 7 v4 l2 3 h-18 l2 -3 v-4 a7 7 0 0 1 7 -7z"
        fill={C.panel}
      />
    </Frame>
  );
}

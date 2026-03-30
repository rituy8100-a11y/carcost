interface ResultCardProps {
  label: string;
  value: string;
  unit?: string;
  highlight?: boolean;
}

export default function ResultCard({
  label,
  value,
  unit,
  highlight = false,
}: ResultCardProps) {
  return (
    <div
      className={`rounded-lg p-4 ${
        highlight
          ? 'bg-blue-50 border-2 border-blue-200'
          : 'bg-gray-50 border border-gray-200'
      }`}
    >
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p
        className={`text-2xl font-bold ${
          highlight ? 'text-blue-600' : 'text-gray-900'
        }`}
      >
        {value}
        {unit && (
          <span className="text-sm font-normal text-gray-500 ml-1">
            {unit}
          </span>
        )}
      </p>
    </div>
  );
}

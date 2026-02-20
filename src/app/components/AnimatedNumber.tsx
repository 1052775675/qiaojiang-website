import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedNumber({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: AnimatedNumberProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator=","
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
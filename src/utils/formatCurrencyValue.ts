type Currency = {
  code: string;
  name: string;
};

type FormatCurrencyValue = {
  value: number;
  currency?: Currency;
};

export const formatCurrencyValue = ({
  value,
  currency = { code: 'USD', name: 'US Dollar' },
}: FormatCurrencyValue): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
  }).format(value / 100);
};

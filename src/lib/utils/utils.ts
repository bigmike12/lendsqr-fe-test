export const isNotEmptyArray = (arr: unknown): boolean =>
  Array.isArray(arr) && arr.length > 0;

export const formatDateString = (dateString: Date): string => {
  const dateObj = new Date(dateString);

  const formattedDate = `${dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} ${dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })}`;

  return formattedDate;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleanedNumber = phoneNumber.replace(/[^\d]/g, ""); // Remove all non-digit characters

  // Apply the format (XXX) XXX-XXXX
  const formattedNumber = cleanedNumber.replace(
    /^(\d{3})(\d{3})(\d{4}).*/,
    "($1) $2-$3"
  );

  return formattedNumber;
};

export const formatCurrency = 
Intl.NumberFormat("en-Ng", {
  style: "currency",
  currency: "NGN",
});
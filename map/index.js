//map


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formateDates);

console.log(formattedDates);

function formateDates(elements){
    const parts = elements.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
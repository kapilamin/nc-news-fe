export const timeSinceDate = (date) => {

    const now = new Date();
    const commentDate = new Date(date); 
    const seconds = Math.floor((now - commentDate) / 1000);

    if (seconds < 10) {
        return "just now";
    }
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    let interval = Math.floor(seconds / 3600);
    if (interval < 1) {
        return `${Math.floor(seconds / 60)} ${Math.floor(seconds / 60) === 1 ? "minute" : "minutes"} ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval < 1) {
        return `${Math.floor(seconds / 3600)} ${Math.floor(seconds / 3600) === 1 ? "hour" : "hours"} ago`;
    }
    if (interval < 7) {
        return `${interval} ${interval === 1 ? "day" : "days"} ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval < 1) {
        const weeks = Math.floor(seconds / 604800);
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }
    if (interval < 12) {
        return `${interval} ${interval === 1 ? "month" : "months"} ago`;
    }
    const years = Math.floor(seconds / 31536000);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
}
export function poginate(item, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...item].splice(startIndex, pageSize);
}

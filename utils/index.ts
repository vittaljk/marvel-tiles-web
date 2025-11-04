export function getCategoryName(category: string | string[]): string {
    if (Array.isArray(category)) {
        return category.map(cat => cat.replace(/-/g, " ")).join(", ");
    }
    return category.replace(/-/g, " ");
}
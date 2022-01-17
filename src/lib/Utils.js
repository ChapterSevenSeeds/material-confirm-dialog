export function mergeLeft(left, right) {
    for (const key in right) {
        if (left[key] != null) {
            const rightValueType = typeof(right[key]);
            const leftValueType = typeof(left[key]);
            if (leftValueType !== 'object' && rightValueType !== 'object') {
                left[key] = right[key];
            } else if (leftValueType === 'object' && rightValueType === 'object') {
                mergeLeft(left[key], right[key]);
            }
        }
    }
}
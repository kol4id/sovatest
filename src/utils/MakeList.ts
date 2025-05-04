interface KeyValueItem {
    key: string;
    value: string;
}

// рекурсивный проход по объекту
// разварачиваем все вложенные объекты
// возвращаем какждый параметр объекта как 
// объект {key, value}

/**
 * рекурсивный проход по объекту, разварачивает все вложенные объекты
 * @param obj - объект для развертки
 * @param excludedKeys - сет с ключами для исключения 
 * @returns возвращает какждый параметр объекта как объект {key, value}
 */
const MakeList = (obj: any, excludedKeys: Set<string>): KeyValueItem[] => {
    return Object.entries(obj).flatMap(([key, value]) => {
        if (excludedKeys.has(key)) return [];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return MakeList(value, excludedKeys);
        }
        return [{ key, value: String(value) }];
    });
};

export default MakeList
/**
 * Функция `classNames` предназначена для удобной работы с динамическими классами.
 * Она принимает базовый класс, объект модификаторов и массив дополнительных классов.
 *
 * @param {string} cls - Основной класс.
 * @param {Mods} mods - Объект модификаторов, где ключ - название класса, а значение - boolean, string или undefined.
 *                      Если значение модификатора true, класс добавляется в итоговую строку.
 * @param {string[]} additional - Массив дополнительных классов, которые добавляются в итоговую строку.
 *
 * @returns {string} Итоговая строка с классами, разделенными пробелами.
 */


type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean), // Удаляем пустые строки и false значения
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}

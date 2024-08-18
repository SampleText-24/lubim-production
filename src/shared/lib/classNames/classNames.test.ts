import { classNames } from './classNames';

describe('classNames', () => {
    // Базовый случая с одним основным классом
    it('return the base class if no mods or additional classes are provided', () => {
        // Передаем только основной класс, без модификаторов и дополнительных классов
        const result = classNames('baseClass');
        expect(result).toBe('baseClass');
    });

    // Случай с модификаторами
    it('include mods classes when their values are true', () => {
        // Проверяем, что классы модификаторов добавляются только тогда, когда их значения true
        const result = classNames('baseClass', { active: true, disabled: false });
        expect(result).toBe('baseClass active');
    });

    // Случай с модификаторами и дополнительными классами
    it('include both mods and additional classes in the result', () => {
        // Здесь проверяем, что все типы классов (основной, модификаторы и дополнительные) корректно объединяются
        const result = classNames('baseClass', { active: true, hidden: false }, ['extraClass']);
        expect(result).toBe('baseClass extraClass active');
    });

    // Случай, когда передаются пустые строки в дополнительные классы
    it('ignore false values in the additional classes array', () => {
        // Проверяем, что пустые строки и false значения не включаются в итоговую строку
        const result = classNames('baseClass', {}, ['extraClass', '', undefined]);
        expect(result).toBe('baseClass extraClass');
    });

    // Случай с модификаторами, имеющими строковые значения
    it('include mods with string values in the result', () => {
        // Проверяем, что строковые значения модификаторов также включаются в итоговую строку
        const result = classNames('baseClass', { active: 'true', disabled: '' });
        expect(result).toBe('baseClass active');
    });

    // Случай с undefined в качестве значений модификаторов
    it('ignore mods with undefined values', () => {
        // Проверяем, что модификаторы с undefined значениями не включаются в итоговую строку
        const result = classNames('baseClass', { active: undefined, disabled: false });
        expect(result).toBe('baseClass');
    });
});

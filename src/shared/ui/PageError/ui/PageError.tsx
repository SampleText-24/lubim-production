import cls from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h1>{t('Что - то пошло не так...')}</h1>
            <p>{t('Мы уже работаем над этим. Попробуйте перезагрузить страницу.')}</p>
            <button className={cls.reloadButton} onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </button>
        </div>
    );
};

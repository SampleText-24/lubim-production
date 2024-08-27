import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Используем MiniCssExtractPlugin.loader в продакшене и style-loader в разработке
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Настраиваем css-loader для поддержки CSS Modules
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Включаем модули для файлов, содержащих .module. в названии
                        auto: (resPath: string) => resPath.endsWith('.module.scss'),
                        // Формируем имена классов в зависимости от режима
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                    importLoaders: 1,
                    sourceMap: isDev,
                    esModule: false, // добавляем эту строку для экспорта как default
                }
            },
            // Компилируем Sass в CSS
            'sass-loader',
        ],
    };
}
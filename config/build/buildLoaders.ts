import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

/**
 * Функция buildLoaders возвращает массив правил загрузчиков (loaders) для обработки различных типов файлов в проекте.
 *
 * @param options - Параметры конфигурации сборки, содержащие информацию о режиме сборки (development или production).
 * @returns Массив правил загрузчиков для webpack.
 */
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Используем MiniCssExtractPlugin.loader в продакшене и style-loader в разработке
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Настраиваем css-loader для поддержки CSS Modules
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // Включаем модули для файлов, содержащих .module. в названии
                        auto: (resPath: string) => resPath.endsWith('.module.scss'),
                        // Формируем имена классов в зависимости от режима
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                    importLoaders: 1,
                    sourceMap: options.isDev,
                    esModule: false, // добавляем эту строку для экспорта как default
                }
            },
            // Компилируем Sass в CSS
            'sass-loader',
        ],
    };

    const filesLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        filesLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader
    ];
}

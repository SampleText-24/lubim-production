import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from './loaders/buildCssLoader';

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

    const cssLoader = buildCssLoader(options.isDev)

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
        cssLoader
    ];
}

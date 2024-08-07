import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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

    return [
        typescriptLoader,
        scssLoader
    ];
}

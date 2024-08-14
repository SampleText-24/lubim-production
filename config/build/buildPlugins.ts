import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

/**
 * Создает массив плагинов для Webpack на основе предоставленных параметров сборки.
 *
 * @param {BuildOptions} options - Параметры сборки, содержащие пути и флаг режима разработки
 *
 * @return {webpack.WebpackPluginInstance[]} Массив плагинов Webpack
 */
export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    // Определение режима сборки
    const isProd = !isDev

    // Основной массив плагинов, используемых в обоих режимах сборки
    const plugins = [
        // Плагин для создания HTML-файла с минимизацией в режиме продакшн
        new HtmlWebpackPlugin({
            template: paths.html,
            minify: isProd ? {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : false,
        }),
        // Плагин для отображения прогресса сборки
        new webpack.ProgressPlugin(),
        // Плагин для определения глобальных констант
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ]

    // Добавление плагинов для режима разработки
    if (isDev) {
        // Плагин для горячей перезагрузки модулей
        plugins.push(new webpack.HotModuleReplacementPlugin())
        // Поддержка React Fast Refresh только для новых версий React
        plugins.push(new ReactRefreshPlugin())
    }

    // Добавление плагинов для продакшена
    if (isProd) {
        // Плагин для выноса CSS в отдельные файлы
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    // Возвращает массив плагинов
    return plugins;
}
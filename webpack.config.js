const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');
module.exports={
    devtool:'eval',
    devServer:{
        hot:true,
        port:5033,
        compress:true,
        historyApiFallback:true
    },
    optimization:{
        minimize:false
    },
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test:/\.(ts|tsx)$/,
                use:'ts-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public','index.html')
        })
    ]
}
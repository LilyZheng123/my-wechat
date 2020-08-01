const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueloaderPlugin=require("vue-loader/lib/plugin")
module.exports={
    entry:"./src/index.js",
    output:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js' //用webpack1时需用‘vue/dist/vue.common.js’
        }
    },

       
       plugins:[       
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new VueloaderPlugin()
    ],
    mode:"development",
    devServer:{
        contentBase:"./dist"
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test:/\.js$/,
            use:{
                loader:"babel-loader"
            }
          },
          {
            test:/\.(png|svg|jpg|gif|jpeg)$/,
         
             use:[
                 {
                     loader:"url-loader",
                     options:{
                        limit:150000,
                        //这句要加上不然图片出不来
                        esModule:false
                    }
                     
                 }
             ]
        }
        ]
       } 
       
    
};
      
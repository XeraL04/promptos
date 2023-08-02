/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['lh3.googleusercontent.com']
    },
}


/*
const nextConfig ={
    experimental:{
        appDir:true,
        serverComponentsExternalPackagess:["mongoose"],
    },
    images:{
        domain:['1h3.googleusercontent.com'],
    },
    webpack(config){
        config.experiments={
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}
*/
module.exports = nextConfig
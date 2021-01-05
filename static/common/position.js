 const openPosition = ()=>{
    let system = uni.getSystemInfoSync()
    if(system.platform === 'android'){//判断平台
        var context = plus.android.importClass("android.content.Context")
        var locationManager = plus.android.importClass("android.location.LocationManager")
        var main = plus.android.runtimeMainActivity()
        var mainSvr = main.getSystemService(context.LOCATION_SERVICE)
        console.log('GPS',mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER))
        if(!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)){
            uni.showModal({
                title:'提示',
                content:'请打开定位服务功能',
                showCancel:false,
                success() {
                    if(!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)){
                        let main = plus.android.runtimeMainActivity();
                        let Intent = plus.android.importClass("android.content.Intent");
                        let mIntent = new Intent('android.settings.ACTION_SETTINGS');
                        main.startActivity(mIntent);//打开系统设置GPS服务页面 
                    }else{
                        uni.showToast({
                            title:'定位功能已启动',
                            duration:2000
                        })
                    }
                }
            })
        }
    }
}
module.exports={
	openPosition
}
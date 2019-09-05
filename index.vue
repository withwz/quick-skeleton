<template>
    <view class="controller">
        <view class="container skeleton">
            <view class="userinfo">
                <block>
                    <!--skeleton-radius 绘制圆形-->
                    <image class="userinfo-avatar skeleton-radius" :src="userInfo.avatarUrl" mode="cover"></image>
                     <!--skeleton-rect 绘制矩形-->
                    <text class="userinfo-nickname skeleton-rect">{{userInfo.nickName}}</text>
                </block>
            </view>
            <view style="margin: 20px 0">
                <view v-for="(item,index) in lists" :key="index" class="lists">
                    <text class="skeleton-rect">{{item}}</text>
                </view>
            </view>

            <view class="usermotto">
                <text class="user-motto skeleton-rect">{{motto}}</text>
            </view>
        </view>
        <!--引用组件-->
        <skeleton :show="showSkeleton" ref="skeleton" loading="chiaroscuro" selector="skeleton" bgcolor="#FFF"></skeleton>
    </view>
</template>

<script>
	//引入骨架屏组件(以我本地地址为例，具体地址由自身引用位置决定)
	import mixin from "@/components/quick-skeleton/mixin.js"
	import skeleton from "@/components/quick-skeleton/quick-skeleton.vue";
	export default {
		mixins:[mixin],
		data() {
			return {
				motto: 'Hello World',
				userInfo: {
					avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/s4RzXCAQsVNliaJXtHBvdpAkeRwnK7Jhiaf9mzuVqEhZza3zSYM7tJ1xZCQE9SCoOR8qjVEjDKltw1SQnxyicWq6A/132',
					nickName: 'jayzou'
				},
				lists: [
					'第1行数据',
					'第2行数据',
					'第3行数据',
					'第4行数据',
					'第5行数据',
					'第6行数据'
				],
				showSkeleton: true  //骨架屏显示隐藏
			};
		},
		components: {
			skeleton
		},
		onLoad: function () {
		},
		/**
		 *  页面载入完成后调用子组件的方法生成预加载效果
		 */
		onReady:function(){
			const that = this;

			that.showSkeleton = true;

			setTimeout(() => {
				that.showSkeleton = false;
			}, 2000);
		}
	}
</script>

<style>
.container {
	padding: 20upx 60upx;
}
/**index.wxss**/
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
.userinfo-nickname {
  color: #aaa;
}
.usermotto {
  margin-top: 200px;
}
.lists{
  margin: 10px 0;
}
.list{
  margin-right: 10px;
}
</style>
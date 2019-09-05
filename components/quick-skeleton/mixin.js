const mixin = {
    data() {
        return {
            showSkeleton: true, //骨架屏显示隐藏
            startTime: null,
        }
    },
    onLoad() {
        this.startTime = new Date();
    },
    methods: {
        hideSkeleton() {
            let startTime = this.startTime;
            let nowTime = new Date();
            let timeStamp = 1500 - (nowTime - startTime);
            console.log(timeStamp);
            if (timeStamp > 0) {
                setTimeout(() => {
                    this.showSkeleton = false;
                }, timeStamp);
            } else {
                this.showSkeleton = false;
            }
        }
    }
}
export default mixin
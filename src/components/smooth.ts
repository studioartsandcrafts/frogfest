// by OSUblake from https://codepen.io/osublake/pen/e72106811a34efcccff91a03568cc790.js
// 10/31/2017

interface Options {
  target: HTMLElement | null; // element container to scroll
  wrapper: HTMLElement | null; // element container to scroll
  scrollEase?: number; // scroll speed
  maxOffset?: number; // in px
}
interface scrollItem {
  target: HTMLElement | null;
  depth: number;
  top: number;
  depthRatio: number;
  currentOffset: number;
  endOffset: number;
}

class SmoothScroll {
  private endThreshold: number;
  private requestId: number | null;
  private maxDepth: number;
  private viewHeight: number;
  private halfViewHeight: number;
  private maxDistance: number;
  private scrollHeight: number;
  private endScroll: number;
  private currentScroll: number;
  private resizeRequest: number;
  private scrollRequest: number;
  private scrollItems: scrollItem[];
  private lastTime: number;
  private maxElapsedMS: number;
  private targetFPMS: number;
  private wrapper: HTMLElement | null;

  private target: Element;
  private scrollEase: number;
  private maxOffset: number;

  private _onResize: (e: any) => void;
  private _onScroll: (e: any) => void;
  private _update: (currentTime?: number) => void;

  constructor(options: Options) {
    this.endThreshold = 0.05;
    this.requestId = null;
    this.maxDepth = 10;
    this.viewHeight = 0;
    this.halfViewHeight = 0;
    this.maxDistance = 0;
    this.scrollHeight = 0;
    this.endScroll = 0;
    this.currentScroll = 0;
    this.resizeRequest = 1;
    this.scrollRequest = 0;
    this.scrollItems = [];
    this.lastTime = -1;
    this.maxElapsedMS = 100;
    this.targetFPMS = 0.06;
    this._onResize = (event) => {
      this.resizeRequest++;
      if (!this.requestId) {
        this.lastTime = performance.now();
        this.requestId = requestAnimationFrame(this._update);
      }
    };
    this._onScroll = (event) => {
      this.scrollRequest++;
      if (!this.requestId) {
        this.lastTime = performance.now();
        this.requestId = requestAnimationFrame(this._update);
      }
    };
    this._update = (currentTime = performance.now()) => {
      let elapsedMS = currentTime - this.lastTime;
      if (elapsedMS > this.maxElapsedMS) {
        elapsedMS = this.maxElapsedMS;
      }
      const deltaTime = elapsedMS * this.targetFPMS;
      const dt = 1 - Math.pow(1 - this.scrollEase, deltaTime);
      const resized = this.resizeRequest > 0;
      const scrollY = window.scrollY;
      if (resized) {
        const height = this.target.clientHeight;
        document.body.style.height = height + "px";
        this.scrollHeight = height;
        this.viewHeight = window.innerHeight;
        this.halfViewHeight = this.viewHeight / 2;
        this.maxDistance = this.viewHeight * 2;
        this.resizeRequest = 0;
      }
      this.endScroll = scrollY;
      // this.currentScroll += (scrollY - this.currentScroll) * this.scrollEase;
      this.currentScroll += (scrollY - this.currentScroll) * dt;
      if (
        Math.abs(scrollY - this.currentScroll) < this.endThreshold ||
        resized
      ) {
        this.currentScroll = scrollY;
        this.scrollRequest = 0;
      }
      // const scrollOrigin = scrollY + this.halfViewHeight;
      const scrollOrigin = this.currentScroll + this.halfViewHeight;
      this.target.style.transform = `translate3d(0px,-${this.currentScroll}px,0px)`;
      for (let i = 0; i < this.scrollItems.length; i++) {
        const item = this.scrollItems[i];
        if (!item) continue;
        const distance = scrollOrigin - item.top;
        const offsetRatio = distance / this.maxDistance;
        item.endOffset = Math.round(
          this.maxOffset * item.depthRatio * offsetRatio
        );
        if (Math.abs(item.endOffset - item.currentOffset) < this.endThreshold) {
          item.currentOffset = item.endOffset;
        } else {
          // item.currentOffset += (item.endOffset - item.currentOffset) * this.scrollEase;
          item.currentOffset += (item.endOffset - item.currentOffset) * dt;
        }
        item.target.style.transform = `translate3d(0px,-${item.currentOffset}px,0px)`;
      }
      this.lastTime = currentTime;
      this.requestId =
        this.scrollRequest > 0 ? requestAnimationFrame(this._update) : null;
    };
    this.target = options.target;
    this.wrapper = document.body;
    this.scrollEase = options.scrollEase != null ? options.scrollEase : 0.1;
    this.maxOffset = options.maxOffset != null ? options.maxOffset : 500;
    this.addItems();
    window.addEventListener("resize", this._onResize);
    window.addEventListener("scroll", this._onScroll);
    this._update();
  }
  addItems() {
    this.scrollItems = [];
    const elements = document.querySelectorAll("*[data-depth]");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const depth = +element?.getAttribute("data-depth");
      const rect = element.getBoundingClientRect();
      const item: scrollItem = {
        target: element,
        depth: depth,
        top: rect.top + window.scrollY,
        depthRatio: depth / this.maxDepth,
        currentOffset: 0,
        endOffset: 0,
      };
      this.scrollItems.push(item);
    }
    return this;
  }
}
export default SmoothScroll;

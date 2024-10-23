/**
 * @author 龚慧君  修改 2016年11月2日15:12:02
 * @copyright 2015
 */

/**
 * 此类是panBy和panTo方法的可选参数，没有构造函数，通过对象字面量形式表示。
 */
interface PanOptions {
    /**
     * 是否在平移过程中禁止动画。（自1.2新增）
     */
    noAnimation: boolean;
}

/**
 * 此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface MapOptions {
    /**
     * 地图允许展示的最小级别。(自 1.2 废弃)
     */
    zoomLevelMin: number;
    /**
     * 地图允许展示的最大级别。(自 1.2 废弃)
     */
    zoomLevelMax: number;
    /**
     * 地图允许展示的最小级别。(自 1.2 新增)
     */
    minZoom: number;
    /**
     * 地图允许展示的最大级别。(自 1.2 新增)
     */
    maxZoom: number;
    /**
     * 地图类型，默认为BMAP_NORMAL_MAP。(自 1.1 新增)
     */
    mapType: MapType;
    /**
     * 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态。(自 1.2 新增)
     */
    enableHighResolution: boolean;
    /**
     * 是否自动适应地图容器变化，默认启用。(自 1.2 新增)
     */
    enableAutoResize: boolean;
    /**
     * 是否开启底图可点功能，默认启用。(自 1.5 新增)
     */
    enableMapClick: boolean;
}

/**
 * 此类代表视野，不可实例化，通过对象字面量形式表示。(自 1.1 新增)
 */
interface Viewport {
    /**
     * 视野中心点。
     */
    center: BMap.Point;
    /**
     * 视野级别。
     */
    zoom: number;
}

/**
 * 此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化。
 */
interface ViewportOptions {
    /**
     * 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图。(自 1.1 新增)
     */
    enableAnimation: boolean;
    /**
     * 视野调整的预留边距，例如：
     * margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内。 (自 1.1 新增)
     */
    margins: Array<number>;
    /**
     * 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为 - 1，则最终的地图级别为9。(自 1.1 新增)
     */
    zoomFactor: number;
    /**
     * 改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效。(自 1.1 新增)
     */
    delay: number;
}

/**
 * 此常量表示API版本号，通过字符串进行描述。
 */
interface APIVersion {
    /**
     * 返回当前API版本。例如，1.2版本返回字符串“1.2”。(自 1.2 新增)
     */
    BMAP_API_VERSION: string;
}

/**
 * 该类用于设置地图样式，使用对象字面量形式表示，不可实例化。
 */
interface MapStyle {
    /**
     * 设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）。（自2.0新增）
     */
    features: Array<string>;
    /**
     * 设置地图底图样式，目前支持normal（默认样式）,dark（深色样式）,light（浅色样式）三种。（自2.0新增）
     */
    style: string;
}

//#endregion

//#region 控件类

/**
 * 此类表示NavigationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface NavigationControlOptions {
    /**
     * 控件的停靠位置。
     */
    anchor: ControlAnchor;
    /**
     * 控件的水平偏移值。
     */
    offset: BMap.Size;
    /**
     * 平移缩放控件的类型。
     */
    type: NavigationControlType;
    /**
     * 是否显示级别提示信息。(自 1.1 新增)
     */
    showZoomInfo: boolean;
    /**
     * 控件是否集成定位功能，默认为false。(自 2.0 新增)
     */
    enableGeolocation: boolean;
}

/**
 * 此类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface ScaleControlOptions {
    /**
     * 控件的停靠位置。
     */
    anchor: ControlAnchor;
    /**
     * 控件的偏移值。
     */
    offset: BMap.Size;
}

/**
 * 此类表示CopyrightControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface CopyrightControlOptions {
    /**
     * 控件的停靠位置。
     */
    anchor: ControlAnchor;
    /**
     * 控件的偏移值。
     */
    offset: BMap.Size;
}

/**
 * 此常量表示控件的定位。
 */
declare enum ControlAnchor {
    /**
     * 控件将定位到地图的左上角。
     */
    BMAP_ANCHOR_TOP_LEFT,
    /**
     * 控件将定位到地图的右上角。
     */
    BMAP_ANCHOR_TOP_RIGHT,
    /**
     * 控件将定位到地图的左下角。
     */
    BMAP_ANCHOR_BOTTOM_LEFT,
    /**
     * 控件将定位到地图的右下角。
     */
    BMAP_ANCHOR_BOTTOM_RIGHT,
}

/**
 * 常量表示长度单位制。
 */
declare enum LengthUnit {
    /**
     * 公制单位。
     */
    BMAP_UNIT_METRIC,
    /**
     * 英制单位。
     */
    BMAP_UNIT_IMPERIAL,
}

/**
 * 此类表示OverviewMapControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface OverviewMapControlOptions {
    /**
     * 控件的停靠位置。
     */
    anchor?: ControlAnchor;
    /**
     * 控件的偏移值。
     */
    offset?: BMap.Size;
    /**
     * 缩略地图控件的大小。
     */
    size?: BMap.Size;
    /**
     * 缩略地图添加到地图后的开合状态，默认为关闭。
     */
    isOpen: boolean;
}

/**
 * 此类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示（自 1.2 新增）。
 */
interface MapTypeControlOptions {
    /**
     * 控件样式。
     */
    type: MapTypeControlType;
    /**
     * 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型。
     */
    mapTypes: Array<MapType>;
}

/**
 * 此常量表示平移缩放控件的类型
 */
declare enum NavigationControlType {
    /**
     * 标准的平移缩放控件（包括平移、缩放按钮和滑块）。
     */
    BMAP_NAVIGATION_CONTROL_LARGE,
    /**
     * 仅包含平移和缩放按钮。
     */
    BMAP_NAVIGATION_CONTROL_SMALL,
    /**
     * 仅包含平移按钮。
     */
    BMAP_NAVIGATION_CONTROL_PAN,
    /**
     * 仅包含缩放按钮。
     */
    BMAP_NAVIGATION_CONTROL_ZOOM,
}

/**
 * 此类表示一条版权信息。可作为CopyrightControl.addCopyright()方法的参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface Copyright {
    /**
     * 该版权信息的唯一标识符。
     */
    id: number;
    /**
     * 该版权的文本信息，用于显示在地图上，支持HTML内容。
     */
    content: string;
    /**
     * 该版权信息所适用的地理区域。
     */
    bounds: BMap.Bounds;
}

/**
 * 此常量表示MapTypeControl的外观样式（自 1.2 新增）。
 */
declare enum MapTypeControlType {
    /**
     * 按钮水平方式展示，默认采用此类型展示。
     */
    BMAP_MAPTYPE_CONTROL_HORIZONTAL,
    /**
     * 按钮呈下拉列表方式展示。
     */
    BMAP_MAPTYPE_CONTROL_DROPDOWN,
    /**
     * 以图片方式展示类型控件，设置该类型后无法指定maptypes属性。
     */
    BMAP_MAPTYPE_CONTROL_MAP,
}

/**
 * 此类表示GeolocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。(自 1.4 新增)
 */
interface GeolocationControlOptions {
    /**
     * 控件的停靠位置，默认定位到地图的右下角。
     */
    anchor: ControlAnchor;
    /**
     * 控件的水平偏移值。
     */
    offset: BMap.Size;
    /**
     * 是否显示定位信息面板。默认显示定位信息面板。
     */
    showAddressBar: boolean;
    /**
     * 添加控件时是否进行定位。默认添加控件时不进行定位。
     */
    enableAutoLocation: boolean;
    /**
     * 可自定义定位中心点的Icon样式。
     */
    locationIcon: BMap.Icon;
}

//#endregion

//#region 覆盖物类

interface SymbolShapeType {

}

/**
 * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface PolylineOptions {
    /**
     * 折线颜色
     */
    strokeColor: string;
    /**
     * 折线的宽度，以像素为单位。
     */
    strokeWeight: number;
    /**
     * 折线的透明度，取值范围0 - 1。
     */
    strokeOpacity: number;
    /**
     * 折线的样式，solid或dashed。
     */
    strokeStyle: string;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true。(自 1.1 新增)
     */
    enableMassClear: boolean;
    /**
     * 是否启用线编辑，默认为false。(自 1.1 新增)
     */
    enableEditing: boolean;
    /**
     * 是否响应点击事件，默认为true。(自 1.2 新增)
     */
    enableClicking: boolean;
}

interface GroundOverlayOptions {

}

interface SymbolOptions {

}

interface GroundOverlayOptions {

}

interface IconSequence {

}

interface PointCollection {

}

/**
 * 此类表示Marker构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface MarkerOptions {
    /**
     * 标注的位置偏移值。
     */
    offset?: BMap.Size;
    /**
     * 标注所用的图标对象。
     */
    icon?: BMap.Icon;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true。(自 1.1 新增)
     */
    enableMassClear?: boolean;
    /**
     * 是否启用拖拽，默认为false。(自 1.1 新增)
     */
    enableDragging?: boolean;
    /**
     * 是否响应点击事件。默认为true。(自 1.2 新增)
     */
    enableClicking?: boolean;
    /**
     * 拖拽标注时，标注是否开启离开地图表面效果。默认为false。(自 1.2 新增)
     */
    raiseOnDrag?: boolean;
    /**
     * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范。(自 1.2 新增)
     */
    draggingCursor?: string;
    /**
     * 旋转角度。(自 2.0 新增)
     */
    rotation?: number;
    /**
     * 阴影图标。(自 1.2 新增)
     */
    shadow?: BMap.Icon;
    /**
     * 鼠标移到marker上的显示内容。
     */
    title?: string;
}

interface Polygon {

}

interface PointCollectionOption {

}

interface Animation {

}

/**
 * 此类表示InfoWindow构造函数的可选参数，它没有构造函数，但可通过对象字面量形式表示。
 */
interface InfoWindowOptions {
    /**
     * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整。
     */
    width: number;
    /**
     * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整。
     */
    height: number;
    /**
     * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730。
     */
    maxWidth?: number;
    /**
     * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置。
     */
    offset?: BMap.Size;
    /**
     * 信息窗标题文字，支持HTML内容。
     */
    title?: string;
    /**
     * 是否开启信息窗口打开时地图自动移动（默认开启）。(自 1.1 新增)
     */
    enableAutoPan?: boolean;
    /**
     * 是否开启点击地图关闭信息窗口（默认开启）(自 1.1 新增)
     */
    enableCloseOnClick?: boolean;
    /**
     * 是否在信息窗里显示短信发送按钮（默认开启）（自1.5新增）。
     */
    enableMessage?: boolean;
    /**
     * 自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分 + 位置链接，不设置时，显示默认短信内容。短信内容最长为140个字。（自1.5新增）
     */
    message?: string;
}

interface PolygonOptions {

}

interface ShapeType {

}

interface SizeTypenew {

}

/**
 * 此类表示Icon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface IconOptions {
    /**
     * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值。(自 1.2 废弃)
     */
    offset: BMap.Size;
    /**
     * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值。(自 1.2 新增)
     */
    anchor: BMap.Size;
    /**
     * 图片相对于可视区域的偏移值。
     */
    imageOffset: BMap.Size;
    /**
     * 信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的anchor。(自 1.2 废弃)
     */
    infoWindowOffset: BMap.Size;
    /**
     * 信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的anchor。(自 1.2 新增)
     */
    infoWindowAnchor: BMap.Size;
    /**
     * 用于打印的图片，此属性只适用于IE6，为了解决IE6在包含滤镜的情况下打印样式不正确的问题。(自 1.1 新增)
     */
    printImageUrl: string;
}

/**
 * 此类表示Lable构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface LabelOptions {
    /**
     * 文本标注的位置偏移值。
     */
    offset?: BMap.Size;
    /**
     * 文本标注的坐标点。(自 1.2 废弃)
     */
    point?: BMap.Point;
    /**
     * 文本标注的地理位置。（自1.2新增）
     */
    position?: BMap.Point;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true.(自 1.1 新增)
     */
    enableMassClear?: boolean;
}

/**
 * Circle类构造函数的可选参数（1.1 版本新增）。它没有构造函数，但可通过对象字面量形式表示。
 */
interface CircleOptions {
    /**
     * 圆形边线颜色。
     */
    strokeColor: string;
    /**
     * 圆形填充颜色。当参数为空时，圆形将没有填充效果。
     */
    fillColor: string;
    /**
     * 圆形边线的宽度，以像素为单位。
     */
    strokeWeight: number;
    /**
     * 圆形边线透明度，取值范围0 - 1。
     */
    strokeOpacity: number;
    /**
     * 圆形填充的透明度，取值范围0 - 1。
     */
    fillOpacity: number;
    /**
     * 圆形边线的样式，solid或dashed。
     */
    strokeStyle: string;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true。
     */
    enableMassClear: boolean;
    /**
     * 是否启用线编辑，默认为false。
     */
    enableEditing: boolean;
    /**
     * 是否响应点击事件，默认为true。(自 1.2 新增)
     */
    enableClicking: boolean;
}

interface Hotspot {

}

interface Symbol {

}

interface GroundOverlay {

}

interface HotspotOptions {

}

interface MapPanes {

}

//#endregion

//#region 右键菜单类

/**
 * 此类表示MenuItem构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
interface MenuItemOptions {
    /**
     * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准。
     */
    width: number;
    /**
     * 指定此菜单项dom的id。
     */
    id: string;
    /**
     * 指定此菜单项的icon URL（大小为17px * 17px）。
     */
    iconUrl: string | ContextMenuIcon;
}

/**
 * 此类型表示内置的右键菜单图标
 */
declare enum ContextMenuIcon {
    /**
     * 放大图标。
     */
    BMAP_CONTEXT_MENU_ICON_ZOOMIN,
    /**
     * 缩小图标。
     */
    BMAP_CONTEXT_MENU_ICON_ZOOMOUT,
}

//#endregion

//#region 地图类型类

interface MapType {

}

interface MapTypeOptions {

}

interface Projection {

}

interface MercatorProjection {

}

interface PerspectiveProjection {

}

//#endregion

//#region 地图图层类

interface TileLayer {

}

interface TileLayerOptions {

}

interface TrafficLayer {

}

interface TrafficLayerOptions {

}

interface PredictDate {

}

interface CustomLayer {

}

interface Custompoi {

}

interface PanoramaCoverageLayer {

}

interface CustomLayerOptions {

}

interface PointDensityType {

}

//#endregion

//#region 服务类

interface LocalSearch {

}

interface LineType {

}

interface WalkingRouteResult {

}

interface BusLineSearch {

}

interface LocalSearchOptions {

}

interface DrivingRoute {

}

interface Geocoder {

}

interface BusLineSearchOptions {

}

interface CustomData {

}

interface DrivingRouteOptions {

}

interface GeocoderResult {

}

interface BusListResult {

}

interface RenderOptions {

}

interface DrivingPolicy {

}

interface AddressComponent {

}

interface BusLine {

}

interface LocalResult {

}

interface LocationOptions {

}

interface BusListItem {

}

interface LocalResultPoi {

}

interface TaxiFare {

}

interface LocalCity {

}

interface BusStation {

}

interface PoiType {

}

interface TaxiFareDetail {

}

interface LocalCityOptions {

}

interface Autocomplete {

}

interface TransitRoute {

}

interface RoutePlan {

}

interface LocalCityResult {

}

interface AutocompleteOptions {

}

interface TransitRouteOptions {

}

interface Route {

}

interface TrafficControl {

}

interface AutocompleteResultPoi {

}

interface TransitPolicy {

}

interface RouteType {

}

interface Geolocation {

}

interface AutocompleteResult {

}

interface TransitRouteResult {

}

interface Step {

}

interface GeolocationResult {

}

interface Boundary {

}

interface TransitRoutePlan {

}

interface WalkingRoute {

}

interface PositionOptions {

}

interface Line {

}

interface WalkingRouteOptions {

}

interface HighlightModes {

}

/**
 * 此常量用于描述对象当前状态。
 */
declare enum StatusCode {
    /**
     * 检索成功。对应数值“0”。
     */
    BMAP_STATUS_SUCCESS,
    /**
     * 城市列表。对应数值“1”。
     */
    BMAP_STATUS_CITY_LIST,
    /**
     * 位置结果未知。对应数值“2”。
     */
    BMAP_STATUS_UNKNOWN_LOCATION,
    /**
     * 导航结果未知。对应数值“3”。
     */
    BMAP_STATUS_UNKNOWN_ROUTE,
    /**
     * 非法密钥。对应数值“4”。
     */
    BMAP_STATUS_INVALID_KEY,
    /**
     * 非法请求。对应数值“5”。
     */
    BMAP_STATUS_INVALID_REQUEST,
    /**
     * 没有权限。对应数值“6”。(自 1.1 新增)
     */
    BMAP_STATUS_PERMISSION_DENIED,
    /**
     * 服务不可用。对应数值“7”。(自 1.1 新增)
     */
    BMAP_STATUS_SERVICE_UNAVAILABLE,
    /**
     * 超时。对应数值“8”。(自 1.1 新增)
     */
    BMAP_STATUS_TIMEOUT,
}

//#endregion

//#region 全景类
interface Panorama {

}

interface PanoramaOptions {

}

interface PanoramaLink {

}

interface PanoramaPov {

}

interface PanoramaService {

}

interface PanoramaData {

}

interface PanoramaTileData {

}

interface PanoramaLabel {

}

interface PanoramaLabelOptions {

}

interface AlbumsControlOptions {

}

interface PanoramaSceneType {

}

interface PanoramaPOIType {

}

//#endregion

declare namespace BMap {

    //#region 核心类

    /**
     * 此类是地图API的核心类，用来实例化一个地图。
     */
    class Map {
        /**
         * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作。
         * @param container
         * @param opts
         * @returns {Map}
         */
        constructor(container: string | HTMLElement, opts?: MapOptions);

        // 配置方法 //////////////////

        /**
         * 启用地图拖拽，默认启用。
         */
        enableDragging(): void;

        /**
         * 禁用地图拖拽。
         */
        disableDragging(): void;

        /**
         * 启用滚轮放大缩小，默认禁用。
         */
        enableScrollWheelZoom(enable?: boolean): void;

        /**
         * 禁用滚轮放大缩小。
         */
        disableScrollWheelZoom(): void;

        /**
         * 启用双击放大，默认启用。
         */
        enableDoubleClickZoom(): void;

        /**
         * 禁用双击放大。
         */
        disableDoubleClickZoom(): void;

        /**
         * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级。
         */
        enableKeyboard(): void;

        /**
         * 禁用键盘操作。
         */
        disableKeyboard(): void;

        /**
         * 启用地图惯性拖拽，默认禁用。(自 1.1 新增)
         */
        enableInertialDragging(): void;

        /**
         * 禁用地图惯性拖拽。(自 1.1 新增)
         */
        disableInertialDragging(): void;

        /**
         * 启用连续缩放效果，默认禁用。(自 1.1 新增)
         */
        enableContinuousZoom(): void;

        /**
         * 禁用连续缩放效果。(自 1.1 新增)
         */
        disableContinuousZoom(): void;

        /**
         * 启用双指操作缩放，默认启用。(自 1.1 新增)
         */
        enablePinchToZoom(): void;

        /**
         * 禁用双指操作缩放。(自 1.1 新增)
         */
        disablePinchToZoom(): void;

        /**
         * 启用自动适应容器尺寸变化，默认启用。(自 1.2 新增)
         */
        enableAutoResize(): void;

        /**
         * 禁用自动适应容器尺寸变化。(自 1.2 新增)
         */
        disableAutoResize(): void;

        /**
         * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范。(自 1.1 新增)
         * @param cursor 鼠标
         */
        setDefaultCursor(cursor: string): void;

        /**
         * 返回地图默认的鼠标指针样式。(自 1.1 新增)
         */
        getDefaultCursor(): string;

        /**
         * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范。(自 1.1 新增)
         * @param cursor
         */
        setDraggingCursor(cursor: string): void;

        /**
         * 返回拖拽地图时的鼠标指针样式。(自 1.1 新增)
         */
        getDraggingCursor(): string;

        /**
         * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别。(自 1.2 新增)
         */
        setMinZoom(zoom: number): void;

        /**
         * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别。(自 1.2 新增)
         * @param zoom
         */
        setMaxZoom(zoom: number): void;

        /**
         * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分。（自2.0新增）
         */
        setMapStyle(mapStyle: MapStyle): void;

        /**
         * 将全景实例与Map类进行绑定。（自2.0新增）
         */
        setPanorama(pano: Panorama): void;

        /**
         * 禁用地图的3D楼块展现功能。（自2.0新增）
         */
        disable3DBuilding(): void;

        ////////////////////////////////////////////

        // 地图状态方法 ////////////////////////////////

        /**
         * 返回地图可视区域，以地理坐标表示。
         * @returns {}
         */
        getBounds(): Bounds;

        /**
         * 返回地图当前中心点。
         * @returns {}
         */
        getCenter(): Point;

        /**
         * 返回两点之间的距离，单位是米。(自 1.1 新增)
         * @param start
         * @param end
         * @returns {}
         */
        getDistance(start: Point, end: Point): number;

        /**
         * 返回地图类型。(自 1.1 新增)
         * @returns {}
         */
        getMapType(): MapType;

        /**
         * 返回地图视图的大小，以像素表示。
         * @returns {}
         */
        getSize(): Size;

        /**
         * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上。(自 1.1 新增)
         * @param view
         * @param viewportOptions
         * @returns {}
         */
        getViewport(view: Array<Point>): Viewport;

        getViewport(view: Array<Point>, viewportOptions: ViewportOptions): Viewport;

        /**
         * 返回地图当前缩放级别。
         */
        getZoom(): number;

        /**
         * 获取与Map类绑定的全景实例。（自 2.0新增）
         */
        getPanorama(): Panorama;

        ////////////////////////////////////////////

        // 修改地图状态方法 /////////////////////

        /**
         * 设初始化地图。
         * 如果center类型为Point时，zoom必须赋值，范围3 - 19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3 - 18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别。
         *
         * @param center
         * @param zoom
         * @returns {}
         */
        centerAndZoom(center: Point | string, zoom?: number): void;

        /**
         * 将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果。
         * @param center
         * @param opts
         * @returns {}
         */
        panTo(center: Point): void;

        panTo(center: Point, opts: PanOptions): void;

        /**
         * 将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果。
         */
        panBy(x: number, y: number): void;

        panBy(x: number, y: number, opts: PanOptions): void;

        /**
         * 重新设置地图，恢复地图初始化时的中心点和级别。
         */
        reset(): void;

        /**
         * 设置地图中心点。center除了可以为坐标点以外，还支持城市名。
         * @param center
         * @returns {}
         */
        setCenter(center: Point | string): void;

        /**
         * 设置地图城市，注意当地图初始化时的类型设置为BMAP_PERSPECTIVE_MAP时，需要在调用centerAndZoom之前调用此方法设置地图所在城市。例如：
         * var map = new BMap.Map(“container”, {mapType: BMAP_PERSPECTIVE_MAP}); map.setCurrentCity(“北京市”); map.centerAndZoom(new BMap.Point(116.404, 39.915), 18); 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。如果地图初始化为BMAP_NORMAL_MAP类型，则在调用setMapType切换地图类型时也要调用此方法。(自 1.1 新增)
         * @param city
         * @returns {}
         */
        setCurrentCity(city: string): void;

        /**
         * 设置地图类型。注意，当设置地图类型为BMAP_PERSPECTIVE_MAP时，需要调用map.setCurrentCity方法设置城市。(自 1.1 新增)
         * @param mapType
         * @returns {}
         */
        setMapType(mapType: MapType): void;

        /**
         * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标。(自 1.1 新增)
         * @param view
         * @param viewportOptions
         * @returns {}
         */
        setViewport(view: Array<Point> | Viewport): void;

        setViewport(view: Array<Point> | Viewport, viewportOptions: ViewportOptions): void;

        /**
         * （自1.2废弃）
         */
        zoomTo(zoom: number): void;

        /**
         * 将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动。（自1.2新增）
         */
        setZoom(zoom: number): void;

        /**
         * 是否使用高分辨率底图。仅当mapOptions.enableHighResolution属性为true且设备支持高分辨率时返回true。
         */
        highResolutionEnabled(): boolean;

        /**
         * 放大一级视图。
         */
        zoomIn(): void;

        /**
         * 缩小一级视图。
         */
        zoomOut(): void;

        /**
         * 为地图添加热区。(自 1.2 新增)
         */
        addHotspot(hotspot: Hotspot): void;

        /**
         * 移除某个地图热区。(自 1.2 新增)
         */
        removeHotspot(hotspot: Hotspot): void;

        /**
         * 清空地图所有热区。(自 1.2 新增)
         */
        clearHotspots(): void;

        // 控件方法 //////////////

        /**
         * 将控件添加到地图，一个控件实例只能向地图中添加一次。
         * @param control
         * @returns {}
         */
        addControl(control: Control): void;

        /**
         * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用。
         * @param control
         * @returns {}
         */
        removeControl(control: Control): void;

        /**
         * 返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器。
         * @returns {}
         */
        getContainer(): HTMLElement;

        // 右键菜单方法 /////////////

        /**
         * 添加右键菜单。
         * @param menu
         * @returns {}
         */
        addContextMenu(menu: ContextMenu): void;

        /**
         * 移除右键菜单。
         * @param menu
         * @returns {}
         */
        removeContextMenu(menu: ContextMenu): void;

        // 覆盖物方法 ////////////

        /**
         * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次。
         * @param overlay
         * @returns {}
         */
        addOverlay(overlay: Overlay): void;

        /**
         * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用。
         * @param overlay
         * @returns {}
         */
        removeOverlay(overlay: Overlay): void;

        /**
         * 清除地图上所有覆盖物。
         * @returns {}
         */
        clearOverlays(): void;

        /**
         * 在地图上打开信息窗口。
         * @param infoWnd
         * @param point
         * @returns {}
         */
        openInfoWindow(infoWnd: InfoWindow, point: Point): void;

        /**
         * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭。
         * @returns {}
         */
        closeInfoWindow(): void;

        /**
         * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物。(自 1.1 新增)
         * @param point
         * @returns {}
         */
        pointToOverlayPixel(point: Point): Pixel;

        /**
         * 根据覆盖物容器的坐标获取对应的地理坐标。(自 1.1 新增)
         * @param pixel
         * @returns {}
         */
        overlayPixelToPoint(pixel: Pixel): Point;

        /**
         * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null。(自 1.1 新增)
         * @returns {}
         */
        getInfoWindow(): InfoWindow;

        /**
         * 返回地图上的所有覆盖物。(自 1.1 新增)
         * @returns {}
         */
        getOverlays(): Array<Overlay>;

        /**
         * 返回地图覆盖物容器列表。
         * @returns {}
         */
        getPanes(): MapPanes;

        // 地图图层方法 ////////////////

        /**
         * 添加一个自定义地图图层。
         * @param tileLayer
         * @returns {}
         */
        addTileLayer(tileLayer: TileLayer): void;

        /**
         * 移除一个自定义地图图层。
         * @param tilelayer
         * @returns {}
         */
        removeTileLayer(tilelayer: TileLayer): void;

        /**
         * 通过地图类型得到一个地图图层对象。
         * @param mapType
         * @returns {}
         */
        getTileLayer(mapType: string): TileLayer;

        // 坐标变换 /////////////////

        /**
         * 像素坐标转换为经纬度坐标。
         * @param pixel
         * @returns {}
         */
        pixelToPoint(pixel: Pixel): Point;

        /**
         * 经纬度坐标转换为像素坐标。
         * @param point
         * @returns {}
         */
        pointToPixel(point: Point): Pixel;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: string, handler: Function): void;
    }

    //#endregion

    //#region 基础类

    /**
     * 此类表示一个地理坐标点。
     */
    class Point {
        /**
         * 以指定的经度和纬度创建一个地理点坐标。
         * @param lng
         * @param lat
         * @returns {}
         */
        constructor(lng: number, lat: number);

        /**
         * 地理经度。
         */
        lng: number;
        /**
         * 地理纬度。
         */
        lat: number;

        /**
         * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true。
         * @param other
         * @returns {}
         */
        equals(other: Point): boolean;
    }

    /**
     * 此类表示地图上的一点，单位为像素。
     */
    class Pixel {
        /**
         * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角。
         * @param x
         * @param y
         * @returns {}
         */
        constructor(x: number, y: number);

        /**
         * x坐标。
         */
        x: number;
        /**
         * y坐标。
         */
        y: number;

        /**
         * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true。
         */
        equals(other: Pixel): boolean;
    }

    /**
     * 此类表示地理坐标的矩形区域。
     */
    class Bounds {
        /**
         * 创建一个包含所有给定点坐标的矩形区域。(自 1.2 废弃)
         * @param minX
         * @param minY
         * @param maxX
         * @param maxY
         * @returns {}
         */
        constructor(minX: number, minY: number, maxX: number, maxY: number);

        /**
         * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角。(自 1.2 新增)
         * @param sw
         * @param ne
         * @returns {}
         */
        constructor(sw: Point, ne: Point);

        /**
         * 矩形左下角的x坐标。(自1.2废弃)
         */
        minX: number;
        /**
         * 矩形左下角的y坐标。(自1.2废弃)
         */
        minY: number;
        /**
         * 矩形右上角的x坐标。(自1.2废弃)
         */
        maxX: number;
        /**
         * 矩形右上角的y坐标。(自1.2废弃)
         */
        maxY: number;

        /**
         * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true。
         * @param other
         * @returns {}
         */
        equals(other: Bounds): boolean;

        /**
         * 如果点的地理坐标位于此矩形内，则返回true。
         * @param point
         * @returns {}
         */
        containsPoint(point: Point): boolean;

        /**
         * 传入的矩形区域完全包含于此矩形区域中，则返回true。
         * @param bounds
         * @returns {}
         */
        containsBounds(bounds: Bounds): boolean;

        /**
         * 计算与另一矩形的交集区域。
         * @param other
         * @returns {}
         */
        intersects(other: Bounds): Bounds;

        /**
         * 放大此矩形，使其包含给定的点。
         * @param point
         * @returns {}
         */
        extend(point: Point): void;

        /**
         * 返回矩形的中心点。
         * @returns {}
         */
        getCenter(): Point;

        /**
         * 如果矩形为空，则返回true。
         * @returns {}
         */
        isEmpty(): boolean;

        /**
         * 返回矩形区域的西南角。(自 1.2 新增)
         * @returns {}
         */
        getSouthWest(): Point;

        /**
         * 返回矩形区域的东北角。(自 1.2 新增)
         * @returns {}
         */
        getNorthEast(): Point;

        /**
         * 返回矩形区域的跨度。(自 1.2 新增)
         * @returns {}
         */
        toSpan(): Point;
    }

    /**
     * 此类以像素表示一个矩形区域的大小。
     */
    class Size {
        /**
         * 以指定的宽度和高度创建一个矩形区域大小对象。
         * @param width
         * @param height
         * @returns {}
         */
        constructor(width: number, height: number);

        /**
         * 水平方向数值。
         */
        width: number;
        /**
         * 竖直方向的数值。
         */
        height: number;

        /**
         * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true。
         * @param other
         * @returns {}
         */
        equals(other: Size): boolean;
    }

    //#endregion

    //#region 控件类

    /**
     * 此类是所有控件的基类，您可以通过此类来实现自定义控件。所有控件均包含Control类的属性、方法和事件。通过Map.addControl()方法可将控件添加到地图上。
     */
    class Control {
        /**
         * 创建一个控件原型实例，通过该原型实例可创建自定义控件。
         * @returns {}
         */
        constructor();

        /**
         * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置。
         */
        defaultAnchor: ControlAnchor;
        /**
         * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置。
         */
        defaultOffset: Size;

        /**
         * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素。
         * @param map
         * @returns {}
         */
        initialize(map: Map): HTMLElement;

        /**
         * 设置控件停靠的位置。
         * @param anchor
         * @returns {}
         */
        setAnchor(anchor: ControlAnchor): void;

        /**
         * 返回控件停靠的位置。
         * @returns {}
         */
        getAnchor(): ControlAnchor;

        /**
         * 设置控件停靠的偏移量。
         * @param offset
         * @returns {}
         */
        setOffset(offset: Size): void;

        /**
         * 返回控件停靠的偏移量。
         * @returns {}
         */
        getOffset(): Size;

        /**
         * 显示控件。
         * @returns {}
         */
        show(): void;

        /**
         * 隐藏控件。
         * @returns {}
         */
        hide(): void;

        /**
         * 判断控件的可见性。
         * @returns {}
         */
        isVisible(): boolean;
    }

    /**
     * 此类表示缩略地图控件。
     */
    class OverviewMapControl {
        /**
         * 创建一个缩略地图控件实例。
         * @param opts
         * @returns {}
         */
        constructor(opts?: OverviewMapControlOptions);

        /**
         * 切换缩略地图控件的开合状态。
         * @returns {}
         */
        changeView(): void;

        /**
         * 设置缩略地图的大小。
         * @param size
         * @returns {}
         */
        setSize(size: Size): void;

        /**
         * 返回缩略地图的大小。
         * @returns {}
         */
        getSize(): Size;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'viewchanged', handler: Function): void;

        addEventListener(event: 'viewchanging', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'viewchanged', handler: Function): void;

        removeEventListener(event: 'viewchanging', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类是负责切换地图类型的控件，此类继承Control所有功能。
     */
    class MapTypeControl extends Control {
        /**
         * 创建地图类型控件。(自 1.1 新增)
         * @param opts
         * @returns {}
         */
        constructor(opts?: MapTypeControlOptions);
    }

    /**
     * 此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。
     */
    class NavigationControl extends Control {
        /**
         * 创建一个特定样式的地图平移缩放控件。
         * @param type
         * @returns {}
         */
        constructor(type?: NavigationControlOptions);

        /**
         * 返回平移缩放控件的类型。
         * @returns {}
         */
        getType(): NavigationControlType;

        /**
         * 设置平移缩放控件的类型。
         * @param type
         * @returns {}
         */
        setType(type: NavigationControlType): void;
    }

    /**
     * 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
     */
    class CopyrightControl {
        /**
         * 创建一个版权控件实例。
         * @param opts
         * @returns {}
         */
        constructor(opts?: CopyrightControlOptions);

        /**
         * 添加版权信息。
         * @param copyright
         * @returns {}
         */
        addCopyright(copyright: Copyright): void;

        /**
         * 移除版权信息。
         * @param id
         * @returns {}
         */
        removeCopyright(id: number | string): void;

        /**
         * 返回单个版权信息。
         * @param id
         * @returns {}
         */
        getCopyright(id): Copyright;

        /**
         * 返回版权信息列表。
         * @returns {}
         */
        getCopyrightCollection(): Array<Copyright>;
    }

    /**
     * 此类表示比例尺控件。
     */
    class ScaleControl {
        /**
         * 创建一个比例尺控件。
         * @param opts
         * @returns {}
         */
        constructor(opts?: ScaleControlOptions);

        /**
         * 返回比例尺单位制。
         * @returns {}
         */
        getUnit(): LengthUnit;

        /**
         * 设置比例尺单位制。
         * @param unit
         * @returns {}
         */
        setUnit(unit: LengthUnit): void;
    }

    /**
     * 此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能。(自 1.4 新增)
     */
    class GeolocationControl {
        /**
         * 创建一个特定样式的地图定位控件。
         * @param type
         * @returns {}
         */
        constructor(type?: GeolocationControlOptions);

        /**
         * 开始进行定位。
         * @returns {}
         */
        location(): void;

        /**
         * 返回当前的定位信息。若当前还未定位，则返回null。
         */
        getAddressComponent: AddressComponent;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'locationSuccess', handler: Function): void;

        addEventListener(event: 'locationError', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'locationSuccess', handler: Function): void;

        removeEventListener(event: 'locationError', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类是负责切换至全景地图的控件，此类继承Control所有功能。（自2.0新增）
     */
    class PanoramaControl {
        /**
         * 创建全景控件实例。
         * @returns {}
         */
        constructor();
    }

    //#endregion

    //#region 覆盖物类

    /**
     * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
     */
    abstract class Overlay {
        /**
         * HTMLElement    抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回。(自 1.1 新增)
         * @param map
         * @returns {}
         */
        initialize(map: Map): void;

        /**
         * 判断覆盖物是否可见。
         * @returns {}
         */
        isVisible(): boolean;

        /**
         * 释放覆盖物对象所占用的内存。可在覆盖物被移除后调用此方法，此后该覆盖物将不能再次添加到地图上。自1.1版本开始API会自动管理内存，您不再需要调用此方法。(自 1.2 废弃)
         * @returns {}
         */
        dispose(): void;

        /**
         * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法。(自 1.1 新增)
         * @returns {}
         */
        draw(): void;

        /**
         * 显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空。(自 1.1 更新)
         * @returns {}
         */
        show(): void;

        /**
         * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none。(自 1.1 更新)
         * @returns {}
         */
        hide(): void;

        data: any;
    }

    /**
     * 此类表示地图上一个图像标注。
     */
    class Marker extends Overlay {
        /**
         * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置。
         * @param point
         * @param opts
         * @returns {}
         */
        constructor(point: Point, opts?: MarkerOptions);

        /**
         * 打开信息窗
         * @param infoWnd
         * @returns {}
         */
        openInfoWindow(infoWnd: InfoWindow): void;

        /**
         * 关闭信息窗。
         * @returns {}
         */
        closeInfoWindow(): void;

        /**
         * 设置标注所用的图标对象。
         * @param icon
         * @returns {}
         */
        setIcon(icon: Icon): void;

        /**
         * 返回标注所用的图标对象。
         * @returns {}
         */
        getIcon(): Icon;

        /**
         * 设置标注的地理坐标。(自 1.2 废弃)
         * @param point
         * @returns {}
         */
        setPoint(point: Point): void;

        /**
         * 返回标注的地理坐标。(自 1.2 废弃)
         * @returns {}
         */
        getPoint(): Point;

        /**
         * 设置标注的地理坐标。(自 1.2 新增)
         * @param position
         * @returns {}
         */
        setPosition(position: Point): void;

        /**
         * 返回标注的地理坐标。(自 1.2 新增)
         * @returns {}
         */
        getPosition(): Point;

        /**
         * 设置标注的偏移值。
         * @param offset
         * @returns {}
         */
        setOffset(offset: Size): void;

        /**
         * 返回标注的偏移值。
         * @returns {}
         */
        getOffset(): Size;

        /**
         * 返回标注的文本标注。
         * @returns {}
         */
        getLabel(): Label;

        /**
         * 为标注添加文本标注。
         * @param label
         * @returns {}
         */
        setLabel(label: Label): void;

        /**
         * 设置标注的标题，当鼠标移至标注上时显示此标题。
         * @param title
         * @returns {}
         */
        setTitle(title: string): void;

        /**
         * 返回标注的标题。
         * @returns {}
         */
        getTitle(): string;

        /**
         * 将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果。
         * @param isTop
         * @returns {}
         */
        setTop(isTop: boolean): void;

        /**
         * 开启标注拖拽功能。(自 1.1 新增)
         * @returns {}
         */
        enableDragging(): void;

        /**
         * 关闭标注拖拽功能。(自 1.1 新增)
         * @returns {}
         */
        disableDragging(): void;

        /**
         * 允许覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        enableMassClear(): void;

        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        disableMassClear(): void;

        /**
         * 设置覆盖物的zIndex。(自 1.1 新增)
         * @param zIndex
         * @returns {}
         */
        setZIndex(zIndex: number): void;

        /**
         * 返回覆盖物所在的map对象。(自 1.2 新增)
         * @returns {}
         */
        getMap(): Map;

        /**
         * 添加右键菜单。(自 1.2 新增)
         * @param menu
         * @returns {}
         */
        addContextMenu(menu: ContextMenu): void;

        /**
         * 移除右键菜单。(自 1.2 新增)
         * @param menu
         * @returns {}
         */
        removeContextMenu(menu: ContextMenu): void;

        /**
         * 设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置。(自 1.2 新增)
         * @param animation
         * @returns {}
         */
        setAnimation(): void;

        setAnimation(animation: Animation): void;

        /**
         * 设置点的旋转角度。(自 2.0 新增)
         * @param rotation
         * @returns {}
         */
        setRotation(rotation: number): void;

        /**
         * 获取点的旋转角度。(自 2.0 新增)
         * @returns {}
         */
        getRotation(): number;

        /**
         * 设置标注阴影图标。(自 1.2 新增)
         * @param shadow
         * @returns {}
         */
        setShadow(shadow: Icon): void;

        /**
         * 获取标注阴影图标。(自 1.2 新增)
         * @returns {}
         */
        getShadow(): Icon;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'click', handler: Function): void;

        addEventListener(event: 'dblclick', handler: Function): void;

        addEventListener(event: 'mousedown', handler: Function): void;

        addEventListener(event: 'mouseup', handler: Function): void;

        addEventListener(event: 'mouseout', handler: Function): void;

        addEventListener(event: 'mouseover', handler: Function): void;

        addEventListener(event: 'remove', handler: Function): void;

        addEventListener(event: 'infowindowclose', handler: Function): void;

        addEventListener(event: 'infowindowopen', handler: Function): void;

        addEventListener(event: 'dragstart', handler: Function): void;

        addEventListener(event: 'dragging', handler: Function): void;

        addEventListener(event: 'dragend', handler: Function): void;

        addEventListener(event: 'rightclick', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'click', handler: Function): void;

        removeEventListener(event: 'dblclick', handler: Function): void;

        removeEventListener(event: 'mousedown', handler: Function): void;

        removeEventListener(event: 'mouseup', handler: Function): void;

        removeEventListener(event: 'mouseout', handler: Function): void;

        removeEventListener(event: 'mouseover', handler: Function): void;

        removeEventListener(event: 'remove', handler: Function): void;

        removeEventListener(event: 'infowindowclose', handler: Function): void;

        removeEventListener(event: 'infowindowopen', handler: Function): void;

        removeEventListener(event: 'dragstart', handler: Function): void;

        removeEventListener(event: 'dragging', handler: Function): void;

        removeEventListener(event: 'dragend', handler: Function): void;

        removeEventListener(event: 'rightclick', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类表示地图上包含信息的窗口。
     */
    class InfoWindow {
        /**
         * 创建一个信息窗实例，其中content支持HTML内容。1.2版本开始content参数支持传入DOM结点。
         * @param content
         * @param opts
         * @returns {}
         */
        constructor(content: string | HTMLElement, opts?: InfoWindowOptions);

        /**
         * 设置信息窗口的宽度，单位像素。取值范围：220 - 730。
         * @param width
         * @returns {}
         */
        setWidth(width: number): void;

        /**
         * 设置信息窗口的高度，单位像素。取值范围：60 - 650。
         * @param height
         * @returns {}
         */
        setHeight(height: number): void;

        /**
         * 重绘信息窗口，当信息窗口内容发生变化时进行调用。
         * @returns {}
         */
        redraw(): void;

        /**
         * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点。
         * @param title
         * @returns {}
         */
        setTitle(title: string | HTMLElement): void;

        /**
         * 返回信息窗口标题。(自 1.2 新增)
         * @returns {}
         */
        getTitle(): string | HTMLElement;

        /**
         * 设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点。
         */
        setContent(content: string | HTMLElement): void;

        /**
         * 返回信息窗口内容。(自 1.2 新增)
         */
        getContent(): string | HTMLElement;

        /**
         * 返回信息窗口的位置。
         * @returns {}
         */
        getPosition(): BMap.Point;

        /**
         * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效。
         * @returns {}
         */
        enableMaximize(): void;

        /**
         * 禁用窗口最大化功能。
         * @returns {}
         */
        disableMaximize(): void;

        /**
         * 返回信息窗口的打开状态。
         * @returns {}
         */
        isOpen(): boolean;

        /**
         * 信息窗口最大化时所显示内容，支持HTML内容。
         * @param content
         * @returns {}
         */
        setMaxContent(content: string): void;

        /**
         * 最大化信息窗口(自 1.1 新增)
         * @returns {}
         */
        maximize(): void;

        /**
         * 还原信息窗口(自 1.1 新增)
         * @returns {}
         */
        restore(): void;

        /**
         * 开启打开信息窗口时地图自动平移。(自 1.1 新增)
         * @returns {}
         */
        enableAutoPan(): void;

        /**
         * 关闭打开信息窗口时地图自动平移。(自 1.1 新增)
         * @returns {}
         */
        disableAutoPan(): void;

        /**
         * 开启点击地图时关闭信息窗口。(自 1.1 新增)
         * @returns {}
         */
        enableCloseOnClick(): void;

        /**
         * 关闭点击地图时关闭信息窗口。(自 1.1 新增)
         * @returns {}
         */
        disableCloseOnClick(): void;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'close', handler: Function): void;

        addEventListener(event: 'open', handler: Function): void;

        addEventListener(event: 'maximize', handler: Function): void;

        addEventListener(event: 'restore', handler: Function): void;

        addEventListener(event: 'clickclose', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'close', handler: Function): void;

        removeEventListener(event: 'open', handler: Function): void;

        removeEventListener(event: 'maximize', handler: Function): void;

        removeEventListener(event: 'restore', handler: Function): void;

        removeEventListener(event: 'clickclose', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类表示标注覆盖物所使用的图标。
     */
    class Icon {
        /**
         * 以给定的图像地址和大小创建图标对象实例。
         * @param url
         * @param size
         * @param opts
         * @returns {}
         */
        constructor(url: string, size: Size, opts?: IconOptions);

        /**
         * 图标的定位点相对于图标左上角的偏移值。(自1.2 废弃)请使用anchor
         */
        offset: Size;
        /**
         * 图标的定位点相对于图标左上角的偏移值。(自1.2 新增)
         */
        anchor: Size;
        /**
         * 图标可视区域的大小。
         */
        size: Size;
        /**
         * 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background - position属性。
         */
        imageOffset: Size;
        /**
         * 图标所用的图片的大小，此功能的作用等同于CSS中的background - size属性。可用于实现高清屏的高清效果。(自1.4 新增)
         */
        imageSize: Size;
        /**
         * 图标所用图像资源的位置。
         */
        imageUrl: string;
        /**
         * 信息窗口开启位置相对于图标左上角的偏移值。(自1.2 废弃)
         */
        infoWindowOffset: Size;
        /**
         * 信息窗口开启位置相对于图标左上角的偏移值。(自1.2 新增)
         */
        infoWindowAnchor: Size;
        /**
         * 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置。(自1.1 新增)
         */
        printImageUrl: string;
    }

    /**
     * 此类表示地图上的文本标注。
     */
    class Label extends Overlay {
        /**
         * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置。
         * @param content
         * @param opts
         * @returns {}
         */
        constructor(content: string, opts?: LabelOptions);

        /**
         * 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如：
         * setStyle({ color: "red", fontSize: "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor。
         * @param styles
         * @returns {}
         */
        setStyle(styles: Object): void;

        /**
         * 设置文本标注的内容。支持HTML。
         * @param content
         * @returns {}
         */
        setContent(content: string): void;

        /**
         * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效。(自 1.2 废弃)
         * @param point
         * @returns {}
         */
        setPoint(point: Point): void;

        /**
         * 返回文本标注坐标。(自 1.2 废弃)
         * @returns {}
         */
        getPoint(): Point;

        /**
         * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效。(自 1.2 新增)
         * @param position
         * @returns {}
         */
        setPosition(position: Point): void;

        /**
         * 获取Label的地理坐标.(自 1.2 新增)
         * @returns {}
         */
        getPosition(): Point;

        /**
         * 设置文本标注的偏移值。
         * @param offset
         * @returns {}
         */
        setOffset(offset: Size): void;

        /**
         * 返回文本标注的偏移值。
         * @returns {}
         */
        getOffset(): Size;

        /**
         * 设置文本标注的标题，当鼠标移至标注上时显示此标题。
         * @param title
         * @returns {}
         */
        setTitle(title: string): void;

        /**
         * 返回文本标注的标题。
         * @returns {}
         */
        getTitle(): string;

        /**
         * 允许覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        enableMassClear(): void;

        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        disableMassClear(): void;

        /**
         * 设置覆盖物的zIndex。(自 1.1 新增)
         * @param zIndex
         * @returns {}
         */
        setZIndex(zIndex: number): void;

        /**
         * 设置地理坐标（自1.2新增）
         * @param position
         * @returns {}
         */
        setPosition(position: Point): void;

        /**
         * 返回覆盖物所在的map对象。（自1.2新增)
         * @returns {}
         */
        getMap(): Map;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类表示地图上的圆覆盖物。
     */
    class Circle extends Overlay {
        /**
         * 创建圆覆盖物。(自 1.1 新增)
         * @param center
         * @param radius
         * @param opts
         * @returns {}
         */
        constructor(center: Point, radius: number, opts?: CircleOptions);

        /**
         * 设置圆形的中心点坐标。
         * @param center
         * @returns {}
         */
        setCenter(center: Point): void;

        /**
         * 返回圆形的中心点坐标。
         * @returns {}
         */
        getCenter(): Point;

        /**
         * 设置圆形的半径，单位为米。
         * @param radius
         * @returns {}
         */
        setRadius(radius: number): void;

        /**
         * 返回圆形的半径，单位为米。
         * @returns {}
         */
        getRadius(): number;

        /**
         * 返回圆形的地理区域范围。
         * @returns {}
         */
        getBounds(): Bounds;

        /**
         * 设置圆形的边线颜色，参数为合法的CSS颜色值。
         * @param color
         * @returns {}
         */
        setStrokeColor(color: string): void;

        /**
         * 返回圆形的边线颜色。
         * @returns {}
         */
        getStrokeColor(): string;

        /**
         * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果。
         * @param color
         * @returns {}
         */
        setFillColor(color: string): void;

        /**
         * 返回圆形的填充颜色。
         * @returns {}
         */
        getFillColor(): string;

        /**
         * 设置圆形的边线透明度，取值范围0 - 1。
         * @param opacity
         * @returns {}
         */
        setStrokeOpacity(opacity: number): void;

        /**
         * 返回圆形的边线透明度。
         * @returns {}
         */
        getStrokeOpacity(): number;

        /**
         * 设置圆形的填充透明度，取值范围0 - 1。
         * @param opacity
         * @returns {}
         */
        setFillOpacity(opacity: number): void;

        /**
         * 返回圆形的填充透明度。
         * @returns {}
         */
        getFillOpacity(): number;

        /**
         * 设置圆形边线的宽度，取值为大于等于1的整数。
         * @param weight
         * @returns {}
         */
        setStrokeWeight(weight: number): void;

        /**
         * 返回圆形边线的宽度。
         * @returns {}
         */
        getStrokeWeight(): number;

        /**
         * 设置圆形边线样式为实线或虚线，取值solid或dashed。
         * @param style
         * @returns {}
         */
        setStrokeStyle(style: string): void;

        /**
         * 返回圆形边线样式。
         * @returns {}
         */
        getStrokeStyle(): string;

        /**
         * 开启编辑功能
         * @returns {}
         */
        enableEditing(): void;

        /**
         * 关闭编辑功能
         * @returns {}
         */
        disableEditing(): void;

        /**
         * 允许覆盖物在map.clearOverlays方法中被清除
         * @returns {}
         */
        enableMassClear(): void;

        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除
         * @returns {}
         */
        disableMassClear(): void;

        /**
         * 返回覆盖物所在的map对象。（自1.2新增)
         * @returns {}
         */
        getMap(): Map;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'click', handler: Function): void;

        addEventListener(event: 'dblclick', handler: Function): void;

        addEventListener(event: 'mousedown', handler: Function): void;

        addEventListener(event: 'mouseup', handler: Function): void;

        addEventListener(event: 'mouseout', handler: Function): void;

        addEventListener(event: 'mouseover', handler: Function): void;

        addEventListener(event: 'remove', handler: Function): void;

        addEventListener(event: 'lineupdate', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'click', handler: Function): void;

        removeEventListener(event: 'dblclick', handler: Function): void;

        removeEventListener(event: 'mousedown', handler: Function): void;

        removeEventListener(event: 'mouseup', handler: Function): void;

        removeEventListener(event: 'mouseout', handler: Function): void;

        removeEventListener(event: 'mouseover', handler: Function): void;

        removeEventListener(event: 'remove', handler: Function): void;

        removeEventListener(event: 'lineupdate', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。
     */
    class Polyline {
        /**
         * 创建折线覆盖物对象
         * @param points
         * @param opts
         * @returns {}
         */
        constructor(points: Array<Point>, opts: PolylineOptions);

        /**
         * 设置折线的点数组。(自 1.2 废弃)
         * @param points
         * @returns {}
         */
        setPoints(points: Array<Point>): void;

        /**
         * 返回折线的点数组。(自 1.2 废弃)
         * @returns {}
         */
        getPoints(): Array<Point>;

        /**
         * 设置折线的点数组（自1.2新增）
         * @param path
         * @returns {}
         */
        setPath(path: Array<Point>): void;

        /**
         * 返回折线的点数组（自1.2新增）
         * @returns {}
         */
        getPath(): Array<Point>;

        /**
         * 设置折线的颜色。
         * @param color
         * @returns {}
         */
        setStrokeColor(color: string): void;

        /**
         * 返回折线的颜色。
         * @returns {}
         */
        getStrokeColor(): string;

        /**
         * 设置透明度，取值范围0 - 1。
         * @param opacity
         * @returns {}
         */
        setStrokeOpacity(opacity: number): void;

        /**
         * 返回透明度。
         * @returns {}
         */
        getStrokeOpacity(): number;

        /**
         * 设置线的宽度，范围为大于等于1的整数。
         * @param weight
         * @returns {}
         */
        setStrokeWeight(weight: number): void;

        /**
         * 返回线的宽度。
         * @returns {}
         */
        getStrokeWeight(): number;

        /**
         * 设置是为实线或虚线，solid或dashed。
         * @param style
         * @returns {}
         */
        setStrokeStyle(style: string): void;

        /**
         * 返回当前线样式状态，实线或者虚线。
         * @returns {}
         */
        getStrokeStyle(): string;

        /**
         * 返回覆盖物的地理区域范围。(自 1.1 新增)
         * @returns {}
         */
        getBounds(): Bounds;

        /**
         * 开启编辑功能。(自 1.1 新增)
         * @returns {}
         */
        enableEditing(): void;

        /**
         * 关闭编辑功能。(自 1.1 新增)
         * @returns {}
         */
        disableEditing(): void;

        /**
         * 允许覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        enableMassClear(): void;

        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除。(自 1.1 新增)
         * @returns {}
         */
        disableMassClear(): void;

        /**
         * 修改指定位置的坐标。number从0开始计数。例如setPointAt(2, point2a)代表将折线的第3个点，坐标设为point2a。(自 1.2 废弃)
         * @param index
         * @param point
         * @returns {}
         */
        setPointAt(index: number, point: Point): void;

        /**
         * 修改指定位置的坐标。索引index从0开始计数。例如setPointAt(2, point)代表将折线的第3个点的坐标设为point(自 1.2 新增)
         * @param index
         * @param point
         * @returns {}
         */
        setPositionAt(index: number, point: Point): void;

        /**
         * 返回覆盖物所在的map对象。（自1.2新增)
         * @returns {}
         */
        getMap(): Map;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: string, handler: Function): void;
    }

    //#endregion

    /**
     * 此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单。
     */
    class ContextMenu {
        /**
         * 创建一个右键菜单实例。
         * @returns {}
         */
        constructor();

        /**
         * 添加菜单项。
         * @param item
         * @returns {}
         */
        addItem(item: MenuItem): void;

        /**
         * 返回指定索引位置的菜单项，第一个菜单项的索引为0。
         * @param index
         * @returns {}
         */
        getItem(index: number): MenuItem;

        /**
         * 移除菜单项。
         * @param item
         * @returns {}
         */
        removeItem(item: MenuItem): void;

        /**
         * 添加分隔符。
         * @returns {}
         */
        addSeparator(): void;

        /**
         * 移除指定索引位置的分隔符，第一个分隔符的索引为0。
         * @param index
         * @returns {}
         */
        removeSeparator(index: number): void;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'open', handler: Function): void;

        addEventListener(event: 'close', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'open', handler: Function): void;

        removeEventListener(event: 'close', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 此类表示一个菜单项
     */
    class MenuItem {
        /**
         * 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback。
         * @param text
         * @param callback
         * @param opts
         * @returns {}
         */
        constructor(text: string, callback: Function, opts?: MenuItemOptions);

        /**
         * 设置菜单项显示的文本。
         * @param text
         * @returns {}
         */
        setText(text: string): void;

        /**
         * 设置菜单项的icon。
         * @param iconUrl
         * @returns {}
         */
        setIcon(iconUrl: string): void;

        /**
         * 启用菜单项。
         * @returns {}
         */
        enable(): void;

        /**
         * 禁用菜单项。
         * @returns {}
         */
        disable(): void;
    }

    class Convertor {
        constructor();
    }
}

//#region 工具类

declare module BMapLibOptions {
    interface IconStyle {
        /**
         * 图片的url地址。(必选)
         */
        url: string;
        /**
         * 图片的大小。（必选）
         */
        size: BMap.Size;
        /**
         * 图标定位在地图上的位置相对于图标左上角的偏移值，默认偏移值为图标的中心位置。（可选）
         */
        anchor?: BMap.Size;
        /**
         * 图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background - position属性。（可选）
         */
        offset?: BMap.Size;
        /**
         * 文字的大小。（可选，默认10）
         */
        textSize?: number;
        /**
         * 文字的颜色。（可选，默认black）
         */
        textColor?: string;
    }

    interface MarkerClustererOptions {
        /**
         * 要聚合的标记数组
         */
        markers?: Array<BMap.Marker>;
        /**
         * 聚合计算时网格的像素大小，默认60
         */
        girdSize?: number;
        /**
         * 最大的聚合级别，大于该级别就不进行相应的聚合
         */
        maxZoom?: number;
        /**
         * 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
         */
        minClusterSize?: number;
        /**
         * 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点
         */
        isAverangeCenter?: boolean;
        /**
         * 自定义聚合后的图标风格，请参考TextIconOverlay类
         */
        styles?: Array<IconStyle>;
    }

    interface TextIconOverlayOptions {
        /**
         * 一组图标风格。单个图表风格包括以下几个属性：
         */
        styles: Array<IconStyle>;
    }
}

declare module BMapLib {
    /**
     * 用来解决加载大量点要素到地图上产生覆盖现象的问题，并提高性能
     */
    class MarkerClusterer {
        /**
         *
         * @param map
         * @param options
         * @returns {}
         */
        constructor(map: BMap.Map, options?: BMapLibOptions.MarkerClustererOptions);

        /**
         * 重新生成，比如改变了属性等
         * @returns {}
         */
        _redraw(): void;

        /**
         * 添加一个聚合的标记。
         * @param marker 要聚合的单个标记。
         * @returns {}
         */
        addMarker(marker: BMap.Marker): void;

        /**
         * 添加要聚合的标记数组。
         * @param markers 要聚合的标记数组
         * @returns {}
         */
        addMarkers(markers: Array<BMap.Marker>): void;

        /**
         * 从地图上彻底清除所有的标记
         * @returns {}
         */
        clearMarkers(): void;

        /**
         * 获取聚合的总数量。
         * @returns {number} 聚合的总数量。
         */
        getClustersCount(): number;

        /**
         * 获取网格大小
         * @returns {} 网格大小
         */
        getGridSize(): number;

        /**
         * 获取聚合的Map实例。
         * @returns {} Map的示例。
         */
        getMap(): BMap.Map;

        /**
         * 获取所有的标记数组。
         * @returns {Array<BMap.Marker>} 标记数组。
         */
        getMarkers(): Array<BMap.Marker>;

        /**
         * 获取聚合的最大缩放级别。
         * @returns {} 聚合的最大缩放级别。
         */
        getMaxZoom(): number;

        /**
         * 获取单个聚合的最小数量。
         * @returns {} 单个聚合的最小数量。
         */
        getMinClusterSize(): number;

        /**
         * 获取聚合的样式风格集合
         * @returns {} 聚合的样式风格集合
         */
        getStyles(): Array<BMapLibOptions.IconStyle>;

        /**
         * 获取单个聚合的落脚点是否是聚合内所有标记的平均中心。
         * @returns {} true或false。
         */
        isAverageCenter(): boolean;

        /**
         * 删除单个标记
         * @param marker 需要被删除的marker
         * @returns {} 删除成功返回true，否则返回false
         */
        removeMarker(marker: BMap.Marker): boolean;

        /**
         * 删除一组标记
         * @param markers 需要被删除的marker数组
         * @returns {} 删除成功返回true，否则返回false
         */
        removeMarkers(markers: Array<BMap.Marker>): boolean;

        /**
         * 设置网格大小
         * @param size 网格大小
         * @returns {}
         */
        setGridSize(size: number): void;

        /**
         * 设置聚合的最大缩放级别
         * @param maxZoom 聚合的最大缩放级别
         * @returns {}
         */
        setMaxZoom(maxZoom: number): void;

        /**
         * 设置单个聚合的最小数量。
         * @param size 单个聚合的最小数量。
         * @returns {}
         */
        setMinClusterSize(size: number): void;

        /**
         * 设置聚合的样式风格集合
         * @param styles 样式风格数组
         * @returns {}
         */
        setStyles(styles: Array<BMapLibOptions.IconStyle>): void;
    }

    /**
     * 此类表示地图上的一个覆盖物，该覆盖物由文字和图标组成，从Overlay继承。文字通常是数字（0-9）或字母（A-Z ），而文字与图标之间有一定的映射关系。 该覆盖物适用于以下类似的场景：需要在地图上添加一系列覆盖物，这些覆盖物之间用不同的图标和文字来区分，文字可能表示了该覆盖物的某一属性值，根据该文字和一定的映射关系，自动匹配相应颜色和大小的图标。
     */
    class TextIconOverlay {
        constructor(position: BMap.Point, text: string, options: BMapLibOptions.TextIconOverlayOptions);

        /**
         * 继承Overlay的draw方法，自定义覆盖物时必须。
         * @returns {}
         */
        draw(): void;

        /**
         * 获取该覆盖物的位置。
         * @returns {} 该覆盖物的经纬度坐标。
         */
        getPosition(): BMap.Point;

        /**
         * 由文字信息获取风格数组的对应索引值。 内部默认的对应函数为文字转换为数字除以10的结果，比如文字8返回索引0，文字25返回索引2.
         * @param text
         * @param styles
         * @returns {} 对应的索引值。
         */
        getStyleByText(text: string, styles: Array<BMapLibOptions.IconStyle>): number;

        /**
         * 获取该覆盖物上的文字。
         * @returns {} 该覆盖物上的文字。
         */
        getText(): string;

        /**
         * 继承Overlay的intialize方法，自定义覆盖物时必须。
         * @param map BMap.Map的实例化对象。
         * @returns {} 返回覆盖物对应的HTML元素。
         */
        initialize(map: BMap.Map): HTMLElement;

        /**
         * 设置该覆盖物的位置。
         * @param position 要设置的经纬度坐标。
         * @returns {}
         */
        setPosition(position: BMap.Point): void;

        /**
         * 设置该覆盖物上的文字。
         * @param text 要设置的文字，通常是字母A-Z或数字0-9。
         * @returns {}
         */
        setText(text: string): void;

        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        addEventListener(event: 'click', handler: Function): void;

        addEventListener(event: 'mouseout', handler: Function): void;

        addEventListener(event: 'mouseover', handler: Function): void;

        addEventListener(event: string, handler: Function): void;

        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         * @returns {}
         */
        removeEventListener(event: 'click', handler: Function): void;

        removeEventListener(event: 'mouseout', handler: Function): void;

        removeEventListener(event: 'mouseover', handler: Function): void;

        removeEventListener(event: string, handler: Function): void;
    }

    /**
     * 拉框缩放类，实现拉框缩放效果的入口。 实例化该类后，即可调用该类提供的open 方法开启拉框缩放状态。
     */
    class RectangleZoom {
        /**
         * RectangleZoom类的构造函数
         * @param map
         * @param opts
         * @returns {}
         */
        constructor(map, opts);

        /**
         * 结束拉框放大状态
         * @returns {}
         */
        close(): void;

        /**
         * 获取鼠标样式
         * @returns {}
         */
        getCursor(): void;

        /**
         * 开启拉框缩放状态。 在缩放效果结束的时候，会调用Animation库(见源文件，闭包，不对外开放) 来实现一些小动画
         * @returns {}
         */
        open(): void;

        /**
         * 设置鼠标样式
         * @param cursor
         * @returns {}
         */
        setCursor(cursor): void;

        /**
         * 设置填充色
         * @param color
         * @returns {}
         */
        setFillColor(color): void;

        /**
         * 设置线粗细
         * @param width
         * @returns {}
         */
        setLineStroke(width): void;

        /**
         * 设置线样式
         * @param style
         * @returns {}
         */
        setLineStyle(style): void;

        /**
         * 设置透明度
         * @param opacity
         * @returns {}
         */
        setOpacity(opacity): void;

        /**
         * 设置线颜色
         * @param color
         * @returns {}
         */
        setStrokeColor(color): void;
    }
}

//#endregion

interface MapEvent {
    type;
    target;
}

interface MapMouseEvent extends MapEvent {
    type: string;
    target: EventTarget;
    point: BMap.Point;
    pixel: BMap.Pixel;
    overlay: BMap.Overlay;
}

interface MapEventEventListener {
    (evt: MapEvent): void;
}

import * as Antd from 'ant-design-vue';

// Export تمام exportهای ant-design-vue
//export * from 'ant-design-vue';

// Export خود کتابخانه
//export { default } from 'ant-design-vue';

// Export تمام کامپوننت‌ها تحت یک namespace
export const AButton = Antd.Button;
export const AInput = Antd.Input;
export const ASelect = Antd.Select;
export const AModal = Antd.Modal;
export const AForm = Antd.Form;
export const ATable = Antd.Table;
export const ACard = Antd.Card;
export const AMenu = Antd.Menu;
export const ALayout = Antd.Layout;
export const ADatePicker = Antd.DatePicker;
export const ACheckbox = Antd.Checkbox;
export const ARadio = Antd.Radio;
export const ASwitch = Antd.Switch;
export const ASlider = Antd.Slider;
export const ARate = Antd.Rate;
export const AUpload = Antd.Upload;
export const ABadge = Antd.Badge;
export const AAvatar = Antd.Avatar;
export const AAlert = Antd.Alert;
export const ASpin = Antd.Spin;
export const ASkeleton = Antd.Skeleton;
export const AProgress = Antd.Progress;
export const AEmpty = Antd.Empty;
export const AResult = Antd.Result;
export const APopconfirm = Antd.Popconfirm;
export const ATooltip = Antd.Tooltip;
export const APopover = Antd.Popover;
export const ADrawer = Antd.Drawer;
export const ADropdown = Antd.Dropdown;
export const APagination = Antd.Pagination;
export const ASteps = Antd.Steps;
export const ATabs = Antd.Tabs;
export const ATag = Antd.Tag;
export const ATimeline = Antd.Timeline;
export const ACollapse = Antd.Collapse;
export const AList = Antd.List;
export const AImage = Antd.Image;
export const ACarousel = Antd.Carousel;
export const ACalendar = Antd.Calendar;
export const AConfigProvider = Antd.ConfigProvider;

// Export utilityها
export const message = Antd.message;
export const notification = Antd.notification;

export const modal = {
  confirm: Antd.Modal.confirm,
  info: Antd.Modal.info,
  success: Antd.Modal.success,
  error: Antd.Modal.error,
  warning: Antd.Modal.warning,
};

// Export تمام کامپوننت‌ها به صورت object
export const AllAntdComponents = Antd;

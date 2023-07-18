export const CheckDirection = function (element: {
  target: {
    offsetWidth: number;
    offsetHeight: number;
    offsetLeft: number;
    offsetTop: number;
  };
  clientX: number;
  clientY: number;
}) {
  const w = element.target.offsetWidth,
    h = element.target.offsetHeight,
    x =
      (element.clientX - element.target.offsetLeft - w / 2) *
      (w > h ? h / w : 1),
    y =
      (element.clientY - element.target.offsetTop - h / 2) *
      (h > w ? w / h : 1),
    direction =
      Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
  return direction;
};

// // click-outside.js
// export function clickOutside(
//   node: {
//     contains: (arg0: any) => any;
//     dispatchEvent: (arg0: CustomEvent<unknown>) => void;
//   },
//   p0: () => void
// ) {
//   const handleClick = (event: { target: any }) => {
//     if (!node.contains(event.target)) {
//       node.dispatchEvent(new CustomEvent('clickoutside'));
//     }
//   };

//   document.addEventListener('click', handleClick, true);

//   return {
//     destroy() {
//       document.removeEventListener('click', handleClick, true);
//     },
//   };
// }

// click-outside.js
export function clickOutside(
  node: HTMLDivElement,
  callback: { (): void; (): void }
) {
  const handleClick = (event: { target: Node | null }) => {
    if (!node.contains(event.target)) {
      callback(); // Call the callback function when clicking outside
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}

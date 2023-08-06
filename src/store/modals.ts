import { atom } from "jotai";

const isCartOpenAtom = atom(false);
const isChooseOpenAtom = atom(false);
const isPaymentOpenAtom = atom(false);

const breakpointsAtom = atom({ mobile: 0, tablet: 768, desktop: 1100 });

export { isCartOpenAtom, isChooseOpenAtom, isPaymentOpenAtom, breakpointsAtom };

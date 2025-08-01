/**
 * .a is injected by <GlobalStyles> of MUI
 * .b is injected by inline style
 * .c is injected by component level <link>
 * .d is injected by sync CSS import
 * .e is injected by async CSS import
 */
import React from "react";
export declare const loadCss: () => Promise<void>;
declare const Provider: React.FC;
export default Provider;

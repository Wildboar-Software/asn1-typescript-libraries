/**
 * @description
 *
 * ITU-T Recommendation Q.932 (05/1998), as amended by Amendment 1
 * (06/2000): generic procedures for the control of ISDN supplementary
 * services at the DSS1 user-network interface.
 *
 * The modules cover Facility information element components (ROSE),
 * addressing types imported by the Q.95x-series, explicit
 * network-controlled channel reservation, the VPN networking-extension
 * components (network facility extension and network protocol
 * profile), flow control between a VPN node and a physical PINX,
 * the notification data structure, and an embedded Q.931 information
 * element.
 *
 * ROSE `OPERATION` and `ERROR` are re-exported from `@wildboar/rose`.
 * Amendment 1 says that ROSE module matches Appendix A of ITU-T
 * Rec. X.880, and that bind and unbind are outside the scope of
 * Q.932. `Code` is that ROSE `Code`, exported from the notification
 * indicator module.
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export {
    type OPERATION,
} from "./lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs";
export {
    type ERROR,
} from "./lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs";
export * from "./lib/modules/Addressing-Data-Elements/index.mjs";
export * from "./lib/modules/Embedded-Q931-Types/index.mjs";
export * from "./lib/modules/Explicit-Network-Controlled-Channel-Reservation/index.mjs";
export * from "./lib/modules/Facility-Information-Element-Components/index.mjs";
export * from "./lib/modules/Flow-Control/index.mjs";
export * from "./lib/modules/Network-Facility-Extension/index.mjs";
export * from "./lib/modules/Network-Protocol-Profile-component/index.mjs";
export * from "./lib/modules/Notification-Indicator-IE-Data-Structure/index.mjs";

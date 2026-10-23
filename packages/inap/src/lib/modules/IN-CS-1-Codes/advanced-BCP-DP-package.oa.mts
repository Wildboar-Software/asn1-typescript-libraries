/* eslint-disable */
import { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS-1-Operations/oMidCall.oa.mjs";
import { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS-1-Operations/tMidCall.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary advanced_BCP_DP_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * advanced-BCP-DP-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {oMidCall | tMidCall}
 * 
 * -- supplier is SCF
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const advanced_BCP_DP_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ oMidCall, tMidCall, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

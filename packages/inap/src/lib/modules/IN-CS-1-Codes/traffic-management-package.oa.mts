/* eslint-disable */
import { callGap } from "../IN-CS-1-Operations/callGap.oa.mjs";
// export { callGap } from "../IN-CS-1-Operations/callGap.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary traffic_management_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * traffic-management-package OPERATION-PACKAGE ::= {
 *   --consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {callGap}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const traffic_management_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ callGap, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

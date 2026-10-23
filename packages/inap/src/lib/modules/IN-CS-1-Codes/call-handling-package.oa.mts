/* eslint-disable */
import { holdCallInNetwork } from "../IN-CS-1-Operations/holdCallInNetwork.oa.mjs";
// export { holdCallInNetwork } from "../IN-CS-1-Operations/holdCallInNetwork.oa.mjs";
import { releaseCall } from "../IN-CS-1-Operations/releaseCall.oa.mjs";
// export { releaseCall } from "../IN-CS-1-Operations/releaseCall.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary call_handling_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * call-handling-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {holdCallInNetwork | releaseCall}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const call_handling_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ holdCallInNetwork, releaseCall, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

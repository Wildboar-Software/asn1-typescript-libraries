/* eslint-disable */
import { initiateCallAttempt } from "../IN-CS-1-Operations/initiateCallAttempt.oa.mjs";
// export { initiateCallAttempt } from "../IN-CS-1-Operations/initiateCallAttempt.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary sCF_call_initiation_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCF-call-initiation-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {initiateCallAttempt}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const sCF_call_initiation_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ initiateCallAttempt, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

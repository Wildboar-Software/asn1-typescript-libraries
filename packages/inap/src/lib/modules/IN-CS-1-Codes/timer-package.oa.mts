/* eslint-disable */
import { resetTimer } from "../IN-CS-1-Operations/resetTimer.oa.mjs";
// export { resetTimer } from "../IN-CS-1-Operations/resetTimer.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary timer_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * timer-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF/SRF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {resetTimer}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const timer_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ resetTimer, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

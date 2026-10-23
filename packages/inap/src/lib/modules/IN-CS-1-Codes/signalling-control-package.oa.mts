/* eslint-disable */
import { sendChargingInformation } from "../IN-CS-1-Operations/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-CS-1-Operations/sendChargingInformation.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary signalling_control_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * signalling-control-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {sendChargingInformation}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const signalling_control_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ sendChargingInformation, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

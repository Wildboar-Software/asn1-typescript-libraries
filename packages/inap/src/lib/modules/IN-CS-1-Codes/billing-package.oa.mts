/* eslint-disable */
import { furnishChargingInformation } from "../IN-CS-1-Operations/furnishChargingInformation.oa.mjs";
// export { furnishChargingInformation } from "../IN-CS-1-Operations/furnishChargingInformation.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary billing_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * billing-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {furnishChargingInformation}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const billing_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ furnishChargingInformation, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

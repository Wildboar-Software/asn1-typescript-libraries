/* eslint-disable */
import { applyChargingReport } from "../IN-CS-1-Operations/applyChargingReport.oa.mjs";
// export { applyChargingReport } from "../IN-CS-1-Operations/applyChargingReport.oa.mjs";
import { applyCharging } from "../IN-CS-1-Operations/applyCharging.oa.mjs";
// export { applyCharging } from "../IN-CS-1-Operations/applyCharging.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary charging_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * charging-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {applyChargingReport}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {applyCharging}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const charging_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ applyChargingReport, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ applyCharging, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

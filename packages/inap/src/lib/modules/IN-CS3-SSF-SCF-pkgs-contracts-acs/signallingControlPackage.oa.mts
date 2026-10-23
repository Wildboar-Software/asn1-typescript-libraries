/* eslint-disable */
import { sendChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
// export { sendChargingInformation } from "../IN-CS3-SSF-SCF-ops-args/sendChargingInformation.oa.mjs";
import { id_package_signallingControl } from "../IN-CS3-object-identifiers/id-package-signallingControl.va.mjs";
// export { id_package_signallingControl } from "../IN-CS3-object-identifiers/id-package-signallingControl.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary signallingControlPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * signallingControlPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {sendChargingInformation}
 *   ID                id-package-signallingControl
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const signallingControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ sendChargingInformation, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_signallingControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

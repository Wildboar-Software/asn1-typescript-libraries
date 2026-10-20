/* eslint-disable */
import { sRFCallGap } from "../IN-CS3-SCF-SRF-ops-args/sRFCallGap.oa.mjs";
// export { sRFCallGap } from "../IN-CS3-SCF-SRF-ops-args/sRFCallGap.oa.mjs";
import { id_package_srfManagement } from "../IN-CS3-object-identifiers/id-package-srfManagement.va.mjs";
// export { id_package_srfManagement } from "../IN-CS3-object-identifiers/id-package-srfManagement.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary srfManagementPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srfManagementPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {sRFCallGap}
 *   ID                id-package-srfManagement
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const srfManagementPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ sRFCallGap, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_srfManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

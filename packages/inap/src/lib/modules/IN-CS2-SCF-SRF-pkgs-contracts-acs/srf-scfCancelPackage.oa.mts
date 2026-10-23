/* eslint-disable */
import { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
// export { cancel } from "../IN-CS2-SSF-SCF-ops-args/cancel.oa.mjs";
import { id_package_srf_scfCancel } from "../IN-CS2-object-identifiers/id-package-srf-scfCancel.va.mjs";
// export { id_package_srf_scfCancel } from "../IN-CS2-object-identifiers/id-package-srf-scfCancel.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary srf_scfCancelPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf-scfCancelPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {cancel}
 *   ID                id-package-srf-scfCancel
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const srf_scfCancelPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancel, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_srf_scfCancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

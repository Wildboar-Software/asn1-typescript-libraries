/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
import { id_package_gprsCancel } from "../CAP-object-identifiers/id-package-gprsCancel.va.mjs";
// export { id_package_gprsCancel } from "../CAP-object-identifiers/id-package-gprsCancel.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary gprsCancelPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsCancelPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {cancelGPRS }
 *     ID            id-package-gprsCancel}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsCancelPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancelGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsCancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

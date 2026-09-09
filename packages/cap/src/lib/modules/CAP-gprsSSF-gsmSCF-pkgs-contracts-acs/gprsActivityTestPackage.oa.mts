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
import { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
// export { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
import { id_package_gprsActivityTest } from "../CAP-object-identifiers/id-package-gprsActivityTest.va.mjs";
// export { id_package_gprsActivityTest } from "../CAP-object-identifiers/id-package-gprsActivityTest.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary gprsActivityTestPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsActivityTestPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {activityTestGPRS}
 *     ID            id-package-gprsActivityTest}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsActivityTestPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activityTestGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsActivityTest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

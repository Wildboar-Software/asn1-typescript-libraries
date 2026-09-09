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
import { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";
// export { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";
import { id_package_gprsTimer } from "../CAP-object-identifiers/id-package-gprsTimer.va.mjs";
// export { id_package_gprsTimer } from "../CAP-object-identifiers/id-package-gprsTimer.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary gprsTimerPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsTimerPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {resetTimerGPRS }
 *     ID            id-package-gprsTimer}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsTimerPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ resetTimerGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsTimer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

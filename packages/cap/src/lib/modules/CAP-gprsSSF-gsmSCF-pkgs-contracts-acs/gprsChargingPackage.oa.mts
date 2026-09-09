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
import { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
// export { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
import { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
// export { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
import { id_package_gprsCharging } from "../CAP-object-identifiers/id-package-gprsCharging.va.mjs";
// export { id_package_gprsCharging } from "../CAP-object-identifiers/id-package-gprsCharging.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary gprsChargingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsChargingPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {applyChargingGPRS}
 *     SUPPLIER INVOKES    {applyChargingReportGPRS}
 *     ID            id-package-gprsCharging}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsChargingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ applyChargingGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ applyChargingReportGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsCharging /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

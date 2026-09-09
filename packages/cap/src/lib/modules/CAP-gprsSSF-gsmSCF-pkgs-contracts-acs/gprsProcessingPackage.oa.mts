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
import { continueGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/continueGPRS.oa.mjs";
// export { continueGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/continueGPRS.oa.mjs";
import { id_package_gprsContinue } from "../CAP-object-identifiers/id-package-gprsContinue.va.mjs";
// export { id_package_gprsContinue } from "../CAP-object-identifiers/id-package-gprsContinue.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary gprsProcessingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsProcessingPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {continueGPRS }
 *     ID            id-package-gprsContinue}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsProcessingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ continueGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsContinue /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

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
import { continueSMS } from "../CAP-SMS-ops-args/continueSMS.oa.mjs";
// export { continueSMS } from "../CAP-SMS-ops-args/continueSMS.oa.mjs";
import { id_package_smsContinue } from "../CAP-object-identifiers/id-package-smsContinue.va.mjs";
// export { id_package_smsContinue } from "../CAP-object-identifiers/id-package-smsContinue.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary smsProcessingPackage
 * @description
 * 
 * smsSSF-gsmSCF processing package: gsmSCF (consumer) invokes `continueSMS`.
 * Used in `cap3SMS` and `cap4SMS`. Package ID (`id-package-smsContinue`) same
 * as Rel-5. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsProcessingPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {continueSMS}
 *     ID            id-package-smsContinue}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsProcessingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ continueSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsContinue /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

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
import { releaseSMS } from "../CAP-SMS-ops-args/releaseSMS.oa.mjs";
// export { releaseSMS } from "../CAP-SMS-ops-args/releaseSMS.oa.mjs";
import { id_package_smsRelease } from "../CAP-object-identifiers/id-package-smsRelease.va.mjs";
// export { id_package_smsRelease } from "../CAP-object-identifiers/id-package-smsRelease.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary smsReleasePackage
 * @description
 * 
 * smsSSF-gsmSCF release package: gsmSCF (consumer) invokes `releaseSMS`. Used
 * in `cap3SMS` and `cap4SMS`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsReleasePackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {releaseSMS}
 *     ID            id-package-smsRelease}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsReleasePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ releaseSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsRelease /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

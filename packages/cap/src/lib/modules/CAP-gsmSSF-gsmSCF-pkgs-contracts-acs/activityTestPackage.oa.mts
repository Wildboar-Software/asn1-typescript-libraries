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
import { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
import { id_package_activityTest } from "../CAP-object-identifiers/id-package-activityTest.va.mjs";
// export { id_package_activityTest } from "../CAP-object-identifiers/id-package-activityTest.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary activityTestPackage
 * @description
 * 
 * gsmSSF-gsmSCF activity test package: gsmSCF (consumer) invokes
 * `activityTest`. Used in `capSsfToScfGeneric`, `capAssistHandoffssfToScf`, and
 * `capScfToSsfGeneric`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTestPackage OPERATION-PACKAGE ::= {
 *     CONSUMER INVOKES    {activityTest}
 *     ID            id-package-activityTest}
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const activityTestPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activityTest, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_activityTest /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

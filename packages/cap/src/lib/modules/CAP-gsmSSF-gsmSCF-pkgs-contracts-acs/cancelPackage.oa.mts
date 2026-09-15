import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { id_package_cancel } from "../CAP-object-identifiers/id-package-cancel.va.mjs";

/**
 * @summary cancelPackage
 * @description
 *
 * gsmSSF-gsmSCF cancel package: gsmSCF (consumer) invokes `cancel`. Used in
 * `capSsfToScfGeneric`, `capAssistHandoffssfToScf`, and `capScfToSsfGeneric`.
 * Package ID same as Rel-5. (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{cancel {bound}}
 * 	ID			id-package-cancel}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cancelPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancel, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

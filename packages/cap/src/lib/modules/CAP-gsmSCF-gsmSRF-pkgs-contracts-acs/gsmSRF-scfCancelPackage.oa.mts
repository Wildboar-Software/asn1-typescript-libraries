import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { id_package_gsmSRF_scfCancel } from "../CAP-object-identifiers/id-package-gsmSRF-scfCancel.va.mjs";

/**
 * @summary gsmSRF-scfCancelPackage
 * @description
 *
 * gsmSRF-gsmSCF cancel package: gsmSCF (consumer) invokes `cancel`. Used in
 * `gsmSRF-gsmSCF-contract`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.2.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gsmSRF-scfCancelPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{cancel {bound}}
 * 	ID			id-package-gsmSRF-scfCancel}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gsmSRF_scfCancelPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ cancel, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gsmSRF_scfCancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

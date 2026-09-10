import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { id_package_gsmSRF_scfCancel } from "../CAP-object-identifiers/id-package-gsmSRF-scfCancel.va.mjs";

/**
 * @summary gsmSRF-scfCancelPackage
 * @description
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

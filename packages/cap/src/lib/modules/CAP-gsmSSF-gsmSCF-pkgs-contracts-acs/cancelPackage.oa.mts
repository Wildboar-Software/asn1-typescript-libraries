import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { id_package_cancel } from "../CAP-object-identifiers/id-package-cancel.va.mjs";

/**
 * @summary cancelPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelPackage OPERATION-PACKAGE ::= {
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

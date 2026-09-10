import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { releaseCall } from "../CAP-gsmSSF-gsmSCF-ops-args/releaseCall.oa.mjs";
import { id_package_callHandling } from "../CAP-object-identifiers/id-package-callHandling.va.mjs";

/**
 * @summary callHandlingPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callHandlingPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{releaseCall {bound}}
 * 	ID			id-package-callHandling}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const callHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ releaseCall, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_callHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

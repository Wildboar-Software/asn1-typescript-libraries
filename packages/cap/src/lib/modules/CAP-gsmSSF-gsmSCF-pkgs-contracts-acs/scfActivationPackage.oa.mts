import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initialDP } from "../CAP-gsmSSF-gsmSCF-ops-args/initialDP.oa.mjs";
import { id_package_scfActivation } from "../CAP-object-identifiers/id-package-scfActivation.va.mjs";

/**
 * @summary scfActivationPackage
 * @description
 *
 * gsmSSF-gsmSCF SCF activation package: gsmSSF (consumer) invokes `initialDP`.
 * Used in `capSsfToScfGeneric` (`capssf-scfGenericAC`). Package ID same as
 * Rel-5. (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfActivationPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{initialDP {bound}}
 * 	ID			id-package-scfActivation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const scfActivationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initialDP, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_scfActivation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

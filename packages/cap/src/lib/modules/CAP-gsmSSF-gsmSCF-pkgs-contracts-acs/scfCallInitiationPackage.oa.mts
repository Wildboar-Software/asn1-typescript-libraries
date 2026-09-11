import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { initiateCallAttempt } from "../CAP-gsmSSF-gsmSCF-ops-args/initiateCallAttempt.oa.mjs";
import { id_package_scfCallInitiation } from "../CAP-object-identifiers/id-package-scfCallInitiation.va.mjs";

/**
 * @summary scfCallInitiationPackage
 * @description
 *
 * gsmSSF-gsmSCF SCF call initiation package: gsmSCF (consumer) invokes
 * `initiateCallAttempt`. Used in `capSsfToScfGeneric` (responder) and
 * `capScfToSsfGeneric` (initiator; that dialogue starts with this operation).
 * Package ID same as Rel-5. (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfCallInitiationPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{initiateCallAttempt {bound}}
 * 	ID			id-package-scfCallInitiation}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const scfCallInitiationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initiateCallAttempt, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_scfCallInitiation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

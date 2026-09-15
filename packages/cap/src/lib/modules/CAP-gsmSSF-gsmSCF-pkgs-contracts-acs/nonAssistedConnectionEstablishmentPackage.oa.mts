import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { connectToResource } from "../CAP-gsmSSF-gsmSCF-ops-args/connectToResource.oa.mjs";
import { id_package_nonAssistedConnectionEstablishment } from "../CAP-object-identifiers/id-package-nonAssistedConnectionEstablishment.va.mjs";

/**
 * @summary nonAssistedConnectionEstablishmentPackage
 * @description
 *
 * gsmSSF-gsmSCF non-assisted connection package: gsmSCF (consumer) invokes
 * `connectToResource`. Used in `capSsfToScfGeneric`,
 * `capAssistHandoffssfToScf`, and `capScfToSsfGeneric`. Package ID same as
 * Rel-5. (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonAssistedConnectionEstablishmentPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{connectToResource {bound}}
 * 	ID			id-package-nonAssistedConnectionEstablishment}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const nonAssistedConnectionEstablishmentPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connectToResource, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_nonAssistedConnectionEstablishment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

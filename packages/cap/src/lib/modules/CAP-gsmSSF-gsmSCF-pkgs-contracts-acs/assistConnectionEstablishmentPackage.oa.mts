import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { establishTemporaryConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/establishTemporaryConnection.oa.mjs";
import { id_package_assistConnectionEstablishment } from "../CAP-object-identifiers/id-package-assistConnectionEstablishment.va.mjs";

/**
 * @summary assistConnectionEstablishmentPackage
 * @description
 *
 * gsmSSF-gsmSCF assist connection package: gsmSCF (consumer) invokes
 * `establishTemporaryConnection`. Used in `capSsfToScfGeneric` and
 * `capScfToSsfGeneric`. Package ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * assistConnectionEstablishmentPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{establishTemporaryConnection {bound}}
 * 	ID			id-package-assistConnectionEstablishment}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const assistConnectionEstablishmentPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ establishTemporaryConnection, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_assistConnectionEstablishment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

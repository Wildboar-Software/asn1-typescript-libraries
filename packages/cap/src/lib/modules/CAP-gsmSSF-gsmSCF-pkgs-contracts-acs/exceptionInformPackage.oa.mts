import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { entityReleased } from "../CAP-gsmSSF-gsmSCF-ops-args/entityReleased.oa.mjs";
import { id_package_exceptionInform } from "../CAP-object-identifiers/id-package-exceptionInform.va.mjs";

/**
 * @summary exceptionInformPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * exceptionInformPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{entityReleased {bound}}
 * 	ID			id-package-exceptionInform}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const exceptionInformPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ entityReleased, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_exceptionInform /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

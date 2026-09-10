import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { connect } from "../CAP-gsmSSF-gsmSCF-ops-args/connect.oa.mjs";
import { id_package_connect } from "../CAP-object-identifiers/id-package-connect.va.mjs";

/**
 * @summary connectPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectPackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{connect {bound}}
 * 	ID			id-package-connect}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const connectPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connect, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_connect /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

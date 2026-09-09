import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { connectGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/connectGPRS.oa.mjs";
import { id_package_gprsConnect } from "../CAP-object-identifiers/id-package-gprsConnect.va.mjs";

/**
 * @summary gprsConnectPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gprsConnectPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{connectGPRS {bound}}
 * 	ID			id-package-gprsConnect}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const gprsConnectPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connectGPRS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_gprsConnect /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

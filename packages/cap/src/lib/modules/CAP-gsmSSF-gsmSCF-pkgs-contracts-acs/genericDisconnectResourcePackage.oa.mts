import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
import { disconnectForwardConnectionWithArgument } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
import { id_package_genericDisconnectResource } from "../CAP-object-identifiers/id-package-genericDisconnectResource.va.mjs";

/**
 * @summary genericDisconnectResourcePackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * genericDisconnectResourcePackage {PARAMETERS-BOUND : bound} OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{disconnectForwardConnection |
 * 			disconnectForwardConnectionWithArgument {bound}}
 * 	ID			id-package-genericDisconnectResource}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const genericDisconnectResourcePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ disconnectForwardConnection, disconnectForwardConnectionWithArgument, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_genericDisconnectResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

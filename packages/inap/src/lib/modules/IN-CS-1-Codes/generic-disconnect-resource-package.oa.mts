/* eslint-disable */
import { disconnectForwardConnection } from "../IN-CS-1-Operations/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../IN-CS-1-Operations/disconnectForwardConnection.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary generic_disconnect_resource_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * generic-disconnect-resource-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {disconnectForwardConnection}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const generic_disconnect_resource_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ disconnectForwardConnection, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { establishTemporaryConnection } from "../IN-CS-1-Operations/establishTemporaryConnection.oa.mjs";
// export { establishTemporaryConnection } from "../IN-CS-1-Operations/establishTemporaryConnection.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary assist_connection_establishment_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assist-connection-establishment-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {establishTemporaryConnection}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const assist_connection_establishment_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ establishTemporaryConnection, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

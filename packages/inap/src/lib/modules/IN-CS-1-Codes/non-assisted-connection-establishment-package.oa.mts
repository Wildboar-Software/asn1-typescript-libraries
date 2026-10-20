/* eslint-disable */
import { connectToResource } from "../IN-CS-1-Operations/connectToResource.oa.mjs";
// export { connectToResource } from "../IN-CS-1-Operations/connectToResource.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary non_assisted_connection_establishment_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * non-assisted-connection-establishment-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {connectToResource}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const non_assisted_connection_establishment_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ connectToResource, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

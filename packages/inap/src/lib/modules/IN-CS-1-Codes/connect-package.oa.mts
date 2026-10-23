/* eslint-disable */
import { connect } from "../IN-CS-1-Operations/connect.oa.mjs";
// export { connect } from "../IN-CS-1-Operations/connect.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary connect_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * connect-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {connect}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const connect_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ connect, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

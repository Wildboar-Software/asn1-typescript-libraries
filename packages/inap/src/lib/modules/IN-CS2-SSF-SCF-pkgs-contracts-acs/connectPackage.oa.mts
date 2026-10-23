/* eslint-disable */
import { connect } from "../IN-CS2-SSF-SCF-ops-args/connect.oa.mjs";
// export { connect } from "../IN-CS2-SSF-SCF-ops-args/connect.oa.mjs";
import { id_package_connect } from "../IN-CS2-object-identifiers/id-package-connect.va.mjs";
// export { id_package_connect } from "../IN-CS2-object-identifiers/id-package-connect.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary connectPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * connectPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {connect}
 *   ID                id-package-connect
 * }
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

/* eslint-enable */

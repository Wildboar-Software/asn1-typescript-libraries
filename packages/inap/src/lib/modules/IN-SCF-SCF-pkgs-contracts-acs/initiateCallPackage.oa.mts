/* eslint-disable */
import { initiateCallRequest } from "../IN-SCF-SCF-ops-args/initiateCallRequest.oa.mjs";
// export { initiateCallRequest } from "../IN-SCF-SCF-ops-args/initiateCallRequest.oa.mjs";
import { id_package_initiateCall } from "../IN-object-identifiers/id-package-initiateCall.va.mjs";
// export { id_package_initiateCall } from "../IN-object-identifiers/id-package-initiateCall.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary initiateCallPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiateCallPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {initiateCallRequest}
 *   ID                id-package-initiateCall
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const initiateCallPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initiateCallRequest, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_initiateCall /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

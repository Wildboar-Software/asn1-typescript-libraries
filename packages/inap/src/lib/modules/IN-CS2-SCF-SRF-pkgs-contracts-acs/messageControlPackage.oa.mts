/* eslint-disable */
import { promptAndReceiveMessage } from "../IN-CS2-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
// export { promptAndReceiveMessage } from "../IN-CS2-SCF-SRF-ops-args/promptAndReceiveMessage.oa.mjs";
import { id_package_messageControl } from "../IN-CS2-object-identifiers/id-package-messageControl.va.mjs";
// export { id_package_messageControl } from "../IN-CS2-object-identifiers/id-package-messageControl.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary messageControlPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messageControlPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {promptAndReceiveMessage}
 *   ID                id-package-messageControl
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const messageControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ promptAndReceiveMessage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_messageControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

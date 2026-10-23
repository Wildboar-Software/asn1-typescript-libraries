/* eslint-disable */
import { initialDP } from "../IN-CS-1-Operations/initialDP.oa.mjs";
// export { initialDP } from "../IN-CS-1-Operations/initialDP.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary sCF_activation_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sCF-activation-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {initialDP}
 * 
 * -- supplier is SCF
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const sCF_activation_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initialDP, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { assistRequestInstructions } from "../IN-CS-1-Operations/assistRequestInstructions.oa.mjs";
// export { assistRequestInstructions } from "../IN-CS-1-Operations/assistRequestInstructions.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary f_SRF_activation_of_assist_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * f-SRF-activation-of-assist-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF/SRF
 *   CONSUMER INVOKES  {assistRequestInstructions}
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
const f_SRF_activation_of_assist_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ assistRequestInstructions, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { collectInformation } from "../IN-CS-1-Operations/collectInformation.oa.mjs";
// export { collectInformation } from "../IN-CS-1-Operations/collectInformation.oa.mjs";
import { analyseInformation } from "../IN-CS-1-Operations/analyseInformation.oa.mjs";
// export { analyseInformation } from "../IN-CS-1-Operations/analyseInformation.oa.mjs";
import { selectRoute } from "../IN-CS-1-Operations/selectRoute.oa.mjs";
// export { selectRoute } from "../IN-CS-1-Operations/selectRoute.oa.mjs";
import { selectFacility } from "../IN-CS-1-Operations/selectFacility.oa.mjs";
// export { selectFacility } from "../IN-CS-1-Operations/selectFacility.oa.mjs";
import { continue_ } from "../IN-CS-1-Operations/continue.oa.mjs";
// export { continue_ } from "../IN-CS-1-Operations/continue.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary sSF_Call_Processing_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sSF-Call-Processing-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   -- supplier is SCF
 *   SUPPLIER INVOKES
 *     {collectInformation | analyseInformation | selectRoute | selectFacility |
 *       continue}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const sSF_Call_Processing_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Consumer": [ collectInformation, analyseInformation, selectRoute, selectFacility, continue_, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

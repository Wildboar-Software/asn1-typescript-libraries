/* eslint-disable */
import { oMidCall } from "../IN-CS3-SSF-SCF-ops-args/oMidCall.oa.mjs";
// export { oMidCall } from "../IN-CS3-SSF-SCF-ops-args/oMidCall.oa.mjs";
import { oSuspended } from "../IN-CS3-SSF-SCF-ops-args/oSuspended.oa.mjs";
// export { oSuspended } from "../IN-CS3-SSF-SCF-ops-args/oSuspended.oa.mjs";
import { tMidCall } from "../IN-CS3-SSF-SCF-ops-args/tMidCall.oa.mjs";
// export { tMidCall } from "../IN-CS3-SSF-SCF-ops-args/tMidCall.oa.mjs";
import { tSuspended } from "../IN-CS3-SSF-SCF-ops-args/tSuspended.oa.mjs";
// export { tSuspended } from "../IN-CS3-SSF-SCF-ops-args/tSuspended.oa.mjs";
import { id_package_advancedBCPDP } from "../IN-CS3-object-identifiers/id-package-advancedBCPDP.va.mjs";
// export { id_package_advancedBCPDP } from "../IN-CS3-object-identifiers/id-package-advancedBCPDP.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary advancedBCPDPPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * advancedBCPDPPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {oMidCall | oSuspended | tMidCall |
 *       tSuspended}
 *   ID                id-package-advancedBCPDP
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const advancedBCPDPPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ oMidCall, oSuspended, tMidCall, tSuspended, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_advancedBCPDP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

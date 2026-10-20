/* eslint-disable */
import { specializedResourceReport } from "../IN-CS-1-Operations/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-CS-1-Operations/specializedResourceReport.oa.mjs";
import { playAnnouncement } from "../IN-CS-1-Operations/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-CS-1-Operations/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-CS-1-Operations/promptAndCollectUserInformation.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary specialized_resource_control_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * specialized-resource-control-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF/SRF
 *   CONSUMER INVOKES  {specializedResourceReport}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {playAnnouncement | promptAndCollectUserInformation}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const specialized_resource_control_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ playAnnouncement, promptAndCollectUserInformation, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

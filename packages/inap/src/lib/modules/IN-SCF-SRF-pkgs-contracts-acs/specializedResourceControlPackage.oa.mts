/* eslint-disable */
import { playAnnouncement } from "../IN-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
// export { playAnnouncement } from "../IN-SCF-SRF-ops-args/playAnnouncement.oa.mjs";
import { promptAndCollectUserInformation } from "../IN-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
// export { promptAndCollectUserInformation } from "../IN-SCF-SRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { specializedResourceReport } from "../IN-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../IN-SCF-SRF-ops-args/specializedResourceReport.oa.mjs";
import { id_package_specializedResourceControl } from "../IN-object-identifiers/id-package-specializedResourceControl.va.mjs";
// export { id_package_specializedResourceControl } from "../IN-object-identifiers/id-package-specializedResourceControl.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary specializedResourceControlPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * specializedResourceControlPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {playAnnouncement |
 *       promptAndCollectUserInformation}
 *   SUPPLIER INVOKES  {specializedResourceReport}
 *   ID                id-package-specializedResourceControl
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const specializedResourceControlPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ playAnnouncement, promptAndCollectUserInformation, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_specializedResourceControl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

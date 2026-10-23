/* eslint-disable */
import { provideUserInformation } from "../IN-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
// export { provideUserInformation } from "../IN-SCF-SCF-ops-args/provideUserInformation.oa.mjs";
import { provideAnnouncementRequest } from "../IN-SCF-SCF-ops-args/provideAnnouncementRequest.oa.mjs";
// export { provideAnnouncementRequest } from "../IN-SCF-SCF-ops-args/provideAnnouncementRequest.oa.mjs";
import { runUserScript } from "../IN-SCF-SCF-ops-args/runUserScript.oa.mjs";
// export { runUserScript } from "../IN-SCF-SCF-ops-args/runUserScript.oa.mjs";
import { announcementCompletionReport } from "../IN-SCF-SCF-ops-args/announcementCompletionReport.oa.mjs";
// export { announcementCompletionReport } from "../IN-SCF-SCF-ops-args/announcementCompletionReport.oa.mjs";
import { id_package_userInformation } from "../IN-object-identifiers/id-package-userInformation.va.mjs";
// export { id_package_userInformation } from "../IN-object-identifiers/id-package-userInformation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary userInformationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userInformationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {provideUserInformation | provideAnnouncementRequest |
 *       runUserScript}
 *   SUPPLIER          INVOKES{announcementCompletionReport}
 *   ID                id-package-userInformation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const userInformationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ provideUserInformation, provideAnnouncementRequest, runUserScript, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ announcementCompletionReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_userInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

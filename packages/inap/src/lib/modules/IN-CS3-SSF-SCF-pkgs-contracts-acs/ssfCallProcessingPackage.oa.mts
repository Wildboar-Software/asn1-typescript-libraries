/* eslint-disable */
import { collectInformation } from "../IN-CS3-SSF-SCF-ops-args/collectInformation.oa.mjs";
// export { collectInformation } from "../IN-CS3-SSF-SCF-ops-args/collectInformation.oa.mjs";
import { analyseInformation } from "../IN-CS3-SSF-SCF-ops-args/analyseInformation.oa.mjs";
// export { analyseInformation } from "../IN-CS3-SSF-SCF-ops-args/analyseInformation.oa.mjs";
import { authorizeTermination } from "../IN-CS3-SSF-SCF-ops-args/authorizeTermination.oa.mjs";
// export { authorizeTermination } from "../IN-CS3-SSF-SCF-ops-args/authorizeTermination.oa.mjs";
import { selectRoute } from "../IN-CS3-SSF-SCF-ops-args/selectRoute.oa.mjs";
// export { selectRoute } from "../IN-CS3-SSF-SCF-ops-args/selectRoute.oa.mjs";
import { selectFacility } from "../IN-CS3-SSF-SCF-ops-args/selectFacility.oa.mjs";
// export { selectFacility } from "../IN-CS3-SSF-SCF-ops-args/selectFacility.oa.mjs";
import { continue_ } from "../IN-CS3-SSF-SCF-ops-args/continue.oa.mjs";
// export { continue_ } from "../IN-CS3-SSF-SCF-ops-args/continue.oa.mjs";
import { id_package_ssfCallProcessing } from "../IN-CS3-object-identifiers/id-package-ssfCallProcessing.va.mjs";
// export { id_package_ssfCallProcessing } from "../IN-CS3-object-identifiers/id-package-ssfCallProcessing.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary ssfCallProcessingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssfCallProcessingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {collectInformation | analyseInformation |
 *       authorizeTermination | selectRoute |
 *       selectFacility | continue}
 *   ID                id-package-ssfCallProcessing
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const ssfCallProcessingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ collectInformation, analyseInformation, authorizeTermination, selectRoute, selectFacility, continue_, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_ssfCallProcessing /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

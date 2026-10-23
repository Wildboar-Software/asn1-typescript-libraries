/* eslint-disable */
import { inSsfToScfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { inSsfToScfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfGeneric.oa.mjs";
import { inSsfToScfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfDpSpecific.oa.mjs";
// export { inSsfToScfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfDpSpecific.oa.mjs";
import { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
// export { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
import { inSsfToScfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfServiceManagement.oa.mjs";
// export { inSsfToScfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfServiceManagement.oa.mjs";
import { inSsfToScfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfRouteMonitoring.oa.mjs";
// export { inSsfToScfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfRouteMonitoring.oa.mjs";
import { inScfToSsfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfGeneric.oa.mjs";
// export { inScfToSsfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfGeneric.oa.mjs";
import { inScfToSsfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfDpSpecific.oa.mjs";
// export { inScfToSsfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfDpSpecific.oa.mjs";
import { inScfToSsfINTrafficManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfINTrafficManagement.oa.mjs";
// export { inScfToSsfINTrafficManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfINTrafficManagement.oa.mjs";
import { inScfToSsfTrafficManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfTrafficManagement.oa.mjs";
// export { inScfToSsfTrafficManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfTrafficManagement.oa.mjs";
import { inScfToSsfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfServiceManagement.oa.mjs";
// export { inScfToSsfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfServiceManagement.oa.mjs";
import { inScfToSsfTriggerManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfTriggerManagement.oa.mjs";
// export { inScfToSsfTriggerManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfTriggerManagement.oa.mjs";
import { inScfToSsfStatusReporting } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfStatusReporting.oa.mjs";
// export { inScfToSsfStatusReporting } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfStatusReporting.oa.mjs";
import { inScfToSsfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfRouteMonitoring.oa.mjs";
// export { inScfToSsfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfRouteMonitoring.oa.mjs";
import { id_rosObject_ssf } from "../IN-object-identifiers/id-rosObject-ssf.va.mjs";
// export { id_rosObject_ssf } from "../IN-object-identifiers/id-rosObject-ssf.va.mjs";


/**
 * @summary ssf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inSsfToScfGeneric | inSsfToScfDpSpecific | inAssistHandoffSsfToScf |
 *       inSsfToScfServiceManagement | inSsfToScfRouteMonitoring}
 *   RESPONDS
 *     {inScfToSsfGeneric | inScfToSsfDpSpecific | inScfToSsfINTrafficManagement |
 *       inScfToSsfTrafficManagement | inScfToSsfServiceManagement |
 *       inScfToSsfTriggerManagement | inScfToSsfStatusReporting |
 *       inScfToSsfRouteMonitoring}
 *   ID         id-rosObject-ssf
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const ssf: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ inSsfToScfGeneric, inSsfToScfDpSpecific, inAssistHandoffSsfToScf, inSsfToScfServiceManagement, inSsfToScfRouteMonitoring, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inScfToSsfGeneric, inScfToSsfDpSpecific, inScfToSsfINTrafficManagement, inScfToSsfTrafficManagement, inScfToSsfServiceManagement, inScfToSsfTriggerManagement, inScfToSsfStatusReporting, inScfToSsfRouteMonitoring, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_ssf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

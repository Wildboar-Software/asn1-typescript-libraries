/* eslint-disable */
import { inCs3SsfToScfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { inCs3SsfToScfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfGeneric.oa.mjs";
import { inCs3SsfToScfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfDpSpecific.oa.mjs";
// export { inCs3SsfToScfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfDpSpecific.oa.mjs";
import { inCs3AssistHandoffSsfToScf } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3AssistHandoffSsfToScf.oa.mjs";
// export { inCs3AssistHandoffSsfToScf } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3AssistHandoffSsfToScf.oa.mjs";
import { inCs3SsfToScfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfServiceManagement.oa.mjs";
// export { inCs3SsfToScfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfServiceManagement.oa.mjs";
import { inCs3ScfToSsfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfGeneric.oa.mjs";
// export { inCs3ScfToSsfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfGeneric.oa.mjs";
import { inCs3ScfToSsfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfDpSpecific.oa.mjs";
// export { inCs3ScfToSsfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfDpSpecific.oa.mjs";
import { inCs3ScfToSsfTrafficManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfTrafficManagement.oa.mjs";
// export { inCs3ScfToSsfTrafficManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfTrafficManagement.oa.mjs";
import { inCs3ScfToSsfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfServiceManagement.oa.mjs";
// export { inCs3ScfToSsfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfServiceManagement.oa.mjs";
import { inCs3ScfToSsfTriggerManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfTriggerManagement.oa.mjs";
// export { inCs3ScfToSsfTriggerManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfTriggerManagement.oa.mjs";
import { inCs3ScfToSsfStatusReporting } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfStatusReporting.oa.mjs";
// export { inCs3ScfToSsfStatusReporting } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfStatusReporting.oa.mjs";
import { id_rosObject_ssf } from "../IN-CS3-object-identifiers/id-rosObject-ssf.va.mjs";
// export { id_rosObject_ssf } from "../IN-CS3-object-identifiers/id-rosObject-ssf.va.mjs";


/**
 * @summary ssf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inCs3SsfToScfGeneric | inCs3SsfToScfDpSpecific |
 *       inCs3AssistHandoffSsfToScf | inCs3SsfToScfServiceManagement}
 *   RESPONDS
 *     {inCs3ScfToSsfGeneric | inCs3ScfToSsfDpSpecific |
 *       inCs3ScfToSsfTrafficManagement | inCs3ScfToSsfServiceManagement |
 *       inCs3ScfToSsfTriggerManagement | inCs3ScfToSsfStatusReporting}
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
    "&Initiates": [ inCs3SsfToScfGeneric, inCs3SsfToScfDpSpecific, inCs3AssistHandoffSsfToScf, inCs3SsfToScfServiceManagement, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inCs3ScfToSsfGeneric, inCs3ScfToSsfDpSpecific, inCs3ScfToSsfTrafficManagement, inCs3ScfToSsfServiceManagement, inCs3ScfToSsfTriggerManagement, inCs3ScfToSsfStatusReporting, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_ssf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

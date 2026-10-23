/* eslint-disable */
import { inCs2SsfToScfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { inCs2SsfToScfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfGeneric.oa.mjs";
import { inCs2SsfToScfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfDpSpecific.oa.mjs";
// export { inCs2SsfToScfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfDpSpecific.oa.mjs";
import { inCs2AssistHandoffSsfToScf } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2AssistHandoffSsfToScf.oa.mjs";
// export { inCs2AssistHandoffSsfToScf } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2AssistHandoffSsfToScf.oa.mjs";
import { inCs2SsfToScfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfServiceManagement.oa.mjs";
// export { inCs2SsfToScfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfServiceManagement.oa.mjs";
import { inCs2ScfToSsfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfGeneric.oa.mjs";
// export { inCs2ScfToSsfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfGeneric.oa.mjs";
import { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
// export { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
import { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
// export { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
import { inCs2ScfToSsfStatusReporting } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfStatusReporting.oa.mjs";
// export { inCs2ScfToSsfStatusReporting } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfStatusReporting.oa.mjs";
import { id_rosObject_ssf } from "../IN-CS2-object-identifiers/id-rosObject-ssf.va.mjs";
// export { id_rosObject_ssf } from "../IN-CS2-object-identifiers/id-rosObject-ssf.va.mjs";


/**
 * @summary ssf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inCs2SsfToScfGeneric | inCs2SsfToScfDpSpecific |
 *       inCs2AssistHandoffSsfToScf | inCs2SsfToScfServiceManagement}
 *   RESPONDS
 *     {inCs2ScfToSsfGeneric | inCs2ScfToSsfDpSpecific |
 *       inCs2ScfToSsfTrafficManagement | inCs2SsfToScfServiceManagement |
 *       inCs2ScfToSsfStatusReporting}
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
    "&Initiates": [ inCs2SsfToScfGeneric, inCs2SsfToScfDpSpecific, inCs2AssistHandoffSsfToScf, inCs2SsfToScfServiceManagement, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inCs2ScfToSsfGeneric, inCs2ScfToSsfDpSpecific, inCs2ScfToSsfTrafficManagement, inCs2SsfToScfServiceManagement, inCs2ScfToSsfStatusReporting, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_ssf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

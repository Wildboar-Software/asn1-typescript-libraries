/* eslint-disable */
import { inCs2ScfToSsfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { inCs2ScfToSsfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfGeneric.oa.mjs";
import { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
// export { inCs2ScfToSsfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfDpSpecific.oa.mjs";
import { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
// export { inCs2ScfToSsfTrafficManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTrafficManagement.oa.mjs";
import { inCs2ScfToSsfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfServiceManagement.oa.mjs";
// export { inCs2ScfToSsfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfServiceManagement.oa.mjs";
import { inCs2ScfToSsfTriggerManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTriggerManagement.oa.mjs";
// export { inCs2ScfToSsfTriggerManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfTriggerManagement.oa.mjs";
import { inCs2ScfToSsfStatusReporting } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfStatusReporting.oa.mjs";
// export { inCs2ScfToSsfStatusReporting } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2ScfToSsfStatusReporting.oa.mjs";
import { scf_cusf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/scf-cusf-contract.oa.mjs";
// export { scf_cusf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/scf-cusf-contract.oa.mjs";
import { scf_scfContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/scf-scfContract.oa.mjs";
// export { scf_scfContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/scf-scfContract.oa.mjs";
import { dsspContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
// export { dsspContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { dapContract } from "../IN-CS2-SCF-SDF-Protocol/dapContract.oa.mjs";
// export { dapContract } from "../IN-CS2-SCF-SDF-Protocol/dapContract.oa.mjs";
import { inCs2SsfToScfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfGeneric.oa.mjs";
// export { inCs2SsfToScfGeneric } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfGeneric.oa.mjs";
import { inCs2SsfToScfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfDpSpecific.oa.mjs";
// export { inCs2SsfToScfDpSpecific } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfDpSpecific.oa.mjs";
import { inCs2AssistHandoffSsfToScf } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2AssistHandoffSsfToScf.oa.mjs";
// export { inCs2AssistHandoffSsfToScf } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2AssistHandoffSsfToScf.oa.mjs";
import { inCs2SsfToScfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfServiceManagement.oa.mjs";
// export { inCs2SsfToScfServiceManagement } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/inCs2SsfToScfServiceManagement.oa.mjs";
import { cusf_scf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/cusf-scf-contract.oa.mjs";
// export { cusf_scf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/cusf-scf-contract.oa.mjs";
import { srf_scf_contract } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
// export { srf_scf_contract } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
import { id_rosObject_scf } from "../IN-CS2-object-identifiers/id-rosObject-scf.va.mjs";
// export { id_rosObject_scf } from "../IN-CS2-object-identifiers/id-rosObject-scf.va.mjs";


/**
 * @summary scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inCs2ScfToSsfGeneric | inCs2ScfToSsfDpSpecific |
 *       inCs2ScfToSsfTrafficManagement | inCs2ScfToSsfServiceManagement |
 *       inCs2ScfToSsfTriggerManagement | inCs2ScfToSsfStatusReporting |
 *        -- scf to cusf contracts
 *       scf-cusf-contract |
 *        -- scf to scf contracts
 *       scf-scfContract | dsspContract |
 *        -- sdf to scf contracts
 *       dapContract}
 *   RESPONDS
 *     {inCs2SsfToScfGeneric | inCs2SsfToScfDpSpecific |
 *       inCs2AssistHandoffSsfToScf | inCs2SsfToScfServiceManagement |
 *        -- cusf to scf contracts
 *       cusf-scf-contract |
 *        -- srf to scf contracts
 *       srf-scf-contract |
 *        -- scf to scf contracts
 *       scf-scfContract | dsspContract}
 *   ID         id-rosObject-scf
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const scf: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ inCs2ScfToSsfGeneric, inCs2ScfToSsfDpSpecific, inCs2ScfToSsfTrafficManagement, inCs2ScfToSsfServiceManagement, inCs2ScfToSsfTriggerManagement, inCs2ScfToSsfStatusReporting, scf_cusf_contract, scf_scfContract, dsspContract, dapContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inCs2SsfToScfGeneric, inCs2SsfToScfDpSpecific, inCs2AssistHandoffSsfToScf, inCs2SsfToScfServiceManagement, cusf_scf_contract, srf_scf_contract, scf_scfContract, dsspContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

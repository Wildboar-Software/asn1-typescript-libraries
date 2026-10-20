/* eslint-disable */
import { inCs3ScfToSsfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3ScfToSsfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
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
import { dapContract } from "../IN-CS3-SCF-SDF-Protocol/dapContract.oa.mjs";
// export { dapContract } from "../IN-CS3-SCF-SDF-Protocol/dapContract.oa.mjs";
import { dapExecuteContract } from "../IN-CS3-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
// export { dapExecuteContract } from "../IN-CS3-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
import { scf_scfContract } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/scf-scfContract.oa.mjs";
// export { scf_scfContract } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/scf-scfContract.oa.mjs";
import { dsspContract } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
// export { dsspContract } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { tfcContract } from "../IN-CS3-SCF-SDF-Protocol/tfcContract.oa.mjs";
// export { tfcContract } from "../IN-CS3-SCF-SDF-Protocol/tfcContract.oa.mjs";
import { cs3scfcusfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfDPSpecificContract.oa.mjs";
// export { cs3scfcusfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfDPSpecificContract.oa.mjs";
import { cs3scfcusfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfGenericContract.oa.mjs";
// export { cs3scfcusfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfGenericContract.oa.mjs";
import { inCs3SsfToScfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfGeneric.oa.mjs";
// export { inCs3SsfToScfGeneric } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfGeneric.oa.mjs";
import { inCs3SsfToScfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfDpSpecific.oa.mjs";
// export { inCs3SsfToScfDpSpecific } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfDpSpecific.oa.mjs";
import { inCs3AssistHandoffSsfToScf } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3AssistHandoffSsfToScf.oa.mjs";
// export { inCs3AssistHandoffSsfToScf } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3AssistHandoffSsfToScf.oa.mjs";
import { inCs3SsfToScfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfServiceManagement.oa.mjs";
// export { inCs3SsfToScfServiceManagement } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/inCs3SsfToScfServiceManagement.oa.mjs";
import { srf_scf_contract } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
// export { srf_scf_contract } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
import { cs3cusfscfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfDPSpecificContract.oa.mjs";
// export { cs3cusfscfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfDPSpecificContract.oa.mjs";
import { cs3cusfscfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfGenericContract.oa.mjs";
// export { cs3cusfscfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfGenericContract.oa.mjs";
import { id_rosObject_scf } from "../IN-CS3-object-identifiers/id-rosObject-scf.va.mjs";
// export { id_rosObject_scf } from "../IN-CS3-object-identifiers/id-rosObject-scf.va.mjs";


/**
 * @summary scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inCs3ScfToSsfGeneric | inCs3ScfToSsfDpSpecific |
 *       inCs3ScfToSsfTrafficManagement | inCs3ScfToSsfServiceManagement |
 *       inCs3ScfToSsfTriggerManagement | inCs3ScfToSsfStatusReporting |
 *        -- scf to sdf contracts
 *       dapContract | dapExecuteContract |
 *        -- scf to scf contracts
 *       scf-scfContract | dsspContract |
 *        -- tfc contract (scf to scf)
 *       tfcContract |
 *        -- scf to cusf contracts
 *       cs3scfcusfDPSpecificContract | cs3scfcusfGenericContract}
 *   RESPONDS
 *     {inCs3SsfToScfGeneric | inCs3SsfToScfDpSpecific |
 *       inCs3AssistHandoffSsfToScf | inCs3SsfToScfServiceManagement |
 *        -- srf to scf contracts
 *       srf-scf-contract |
 *        -- tfc contract (scf to scf, sdf to scf)
 *       tfcContract |
 *        -- scf to scf contracts
 *       scf-scfContract | dsspContract |
 *        -- cusf to scf contracts
 *       cs3cusfscfDPSpecificContract | cs3cusfscfGenericContract}
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
    "&Initiates": [ inCs3ScfToSsfGeneric, inCs3ScfToSsfDpSpecific, inCs3ScfToSsfTrafficManagement, inCs3ScfToSsfServiceManagement, inCs3ScfToSsfTriggerManagement, inCs3ScfToSsfStatusReporting, dapContract, dapExecuteContract, scf_scfContract, dsspContract, tfcContract, cs3scfcusfDPSpecificContract, cs3scfcusfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inCs3SsfToScfGeneric, inCs3SsfToScfDpSpecific, inCs3AssistHandoffSsfToScf, inCs3SsfToScfServiceManagement, srf_scf_contract, tfcContract, scf_scfContract, dsspContract, cs3cusfscfDPSpecificContract, cs3cusfscfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

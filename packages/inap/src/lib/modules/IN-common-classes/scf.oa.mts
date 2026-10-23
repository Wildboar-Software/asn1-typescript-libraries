/* eslint-disable */
import { inScfToSsfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inScfToSsfGeneric.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
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
import { dapContract } from "../IN-SCF-SDF-Protocol/dapContract.oa.mjs";
// export { dapContract } from "../IN-SCF-SDF-Protocol/dapContract.oa.mjs";
import { dapExecuteContract } from "../IN-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
// export { dapExecuteContract } from "../IN-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
import { scfc_scfsContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfc-scfsContract.oa.mjs";
// export { scfc_scfsContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfc-scfsContract.oa.mjs";
import { scfs_scfcContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcContract.oa.mjs";
// export { scfs_scfcContract } from "../IN-SCF-SCF-pkgs-contracts-acs/scfs-scfcContract.oa.mjs";
import { dsspContract } from "../IN-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
// export { dsspContract } from "../IN-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { tfcContract } from "../IN-SCF-SDF-Protocol/tfcContract.oa.mjs";
// export { tfcContract } from "../IN-SCF-SDF-Protocol/tfcContract.oa.mjs";
import { scfcusfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/scfcusfDPSpecificContract.oa.mjs";
// export { scfcusfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/scfcusfDPSpecificContract.oa.mjs";
import { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
// export { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
import { inSsfToScfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfGeneric.oa.mjs";
// export { inSsfToScfGeneric } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfGeneric.oa.mjs";
import { inSsfToScfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfDpSpecific.oa.mjs";
// export { inSsfToScfDpSpecific } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfDpSpecific.oa.mjs";
import { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
// export { inAssistHandoffSsfToScf } from "../IN-SSF-SCF-pkgs-contracts-acs/inAssistHandoffSsfToScf.oa.mjs";
import { inSsfToScfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfServiceManagement.oa.mjs";
// export { inSsfToScfServiceManagement } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfServiceManagement.oa.mjs";
import { inSsfToScfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfRouteMonitoring.oa.mjs";
// export { inSsfToScfRouteMonitoring } from "../IN-SSF-SCF-pkgs-contracts-acs/inSsfToScfRouteMonitoring.oa.mjs";
import { srf_scf_contract } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
// export { srf_scf_contract } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
import { cusfscfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/cusfscfDPSpecificContract.oa.mjs";
// export { cusfscfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/cusfscfDPSpecificContract.oa.mjs";
import { cusfscfGenericContract } from "../IN-SCF-CUSF-Protocol/cusfscfGenericContract.oa.mjs";
// export { cusfscfGenericContract } from "../IN-SCF-CUSF-Protocol/cusfscfGenericContract.oa.mjs";
import { id_rosObject_scf } from "../IN-object-identifiers/id-rosObject-scf.va.mjs";
// export { id_rosObject_scf } from "../IN-object-identifiers/id-rosObject-scf.va.mjs";


/**
 * @summary scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {inScfToSsfGeneric | inScfToSsfDpSpecific | inScfToSsfINTrafficManagement |
 *       inScfToSsfTrafficManagement | inScfToSsfServiceManagement |
 *       inScfToSsfTriggerManagement | inScfToSsfStatusReporting |
 *       inScfToSsfRouteMonitoring |
 *        -- scf to sdf contracts
 *       dapContract | dapExecuteContract |
 *        -- scf to scf contracts
 *       scfc-scfsContract | scfs-scfcContract | dsspContract |
 *        -- tfc contract (scf to scf)
 *       tfcContract |
 *        -- scf to cusf contracts
 *       scfcusfDPSpecificContract | scfcusfGenericContract}
 *   RESPONDS
 *     {inSsfToScfGeneric | inSsfToScfDpSpecific | inAssistHandoffSsfToScf |
 *       inSsfToScfServiceManagement | inSsfToScfRouteMonitoring |
 *        -- srf to scf contracts
 *       srf-scf-contract |
 *        -- tfc contract (scf to scf, sdf to scf)
 *       tfcContract |
 *        -- scf to scf contracts
 *       scfc-scfsContract | scfs-scfcContract | dsspContract |
 *        -- cusf to scf contracts
 *       cusfscfDPSpecificContract | cusfscfGenericContract}
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
    "&Initiates": [ inScfToSsfGeneric, inScfToSsfDpSpecific, inScfToSsfINTrafficManagement, inScfToSsfTrafficManagement, inScfToSsfServiceManagement, inScfToSsfTriggerManagement, inScfToSsfStatusReporting, inScfToSsfRouteMonitoring, dapContract, dapExecuteContract, scfc_scfsContract, scfs_scfcContract, dsspContract, tfcContract, scfcusfDPSpecificContract, scfcusfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ inSsfToScfGeneric, inSsfToScfDpSpecific, inAssistHandoffSsfToScf, inSsfToScfServiceManagement, inSsfToScfRouteMonitoring, srf_scf_contract, tfcContract, scfc_scfsContract, scfs_scfcContract, dsspContract, cusfscfDPSpecificContract, cusfscfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { iNTrafficManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/iNTrafficManagementPackage.oa.mjs";
// export { iNTrafficManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/iNTrafficManagementPackage.oa.mjs";
import { id_inScfToSsfINTrafficManagement } from "../IN-object-identifiers/id-inScfToSsfINTrafficManagement.va.mjs";
// export { id_inScfToSsfINTrafficManagement } from "../IN-object-identifiers/id-inScfToSsfINTrafficManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfINTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfINTrafficManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with CallGap
 *   --The inScfToSsfINTrafficManagement contract expresses the form of the service in
 *   --which the SCF, a ROS-object of class scf, initiates the IN Traffic Management related contract.
 *   -- A ROS-object of class ssf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {iNTrafficManagementPackage}
 *   ID                     id-inScfToSsfINTrafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfINTrafficManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ iNTrafficManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfINTrafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

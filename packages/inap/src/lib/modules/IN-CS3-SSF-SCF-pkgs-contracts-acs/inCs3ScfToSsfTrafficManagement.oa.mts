/* eslint-disable */
import { trafficManagementPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
// export { trafficManagementPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
import { id_inCs3ScfToSsfTrafficManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfTrafficManagement.va.mjs";
// export { id_inCs3ScfToSsfTrafficManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfTrafficManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3ScfToSsfTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3ScfToSsfTrafficManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with CallGap
 *   --The inCs3ScfToSsfTrafficManagement contract expresses the form of the service in
 *   --which the SCF, a ROS-object of class scf, initiates the Traffic Management related contract.
 *   -- A ROS-object of class ssf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {trafficManagementPackage}
 *   ID                     id-inCs3ScfToSsfTrafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3ScfToSsfTrafficManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ trafficManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3ScfToSsfTrafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

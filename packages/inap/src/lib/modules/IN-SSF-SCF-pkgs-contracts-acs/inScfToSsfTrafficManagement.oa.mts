/* eslint-disable */
import { trafficManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
// export { trafficManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
import { id_inScfToSsfTrafficManagement } from "../IN-object-identifiers/id-inScfToSsfTrafficManagement.va.mjs";
// export { id_inScfToSsfTrafficManagement } from "../IN-object-identifiers/id-inScfToSsfTrafficManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfTrafficManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with Call Filtering
 *   --The inScfToSsfTrafficManagement contract expresses the form of the service in
 *   --which the SCF, a ROS-object of class scf, initiates the Traffic Management related contract.
 *   -- A ROS-object of class ssf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {trafficManagementPackage}
 *   ID                     id-inScfToSsfTrafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfTrafficManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ trafficManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfTrafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

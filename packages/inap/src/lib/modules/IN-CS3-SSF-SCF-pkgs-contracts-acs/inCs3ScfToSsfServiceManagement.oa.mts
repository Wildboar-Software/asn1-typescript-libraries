/* eslint-disable */
import { serviceManagementActivatePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
// export { serviceManagementActivatePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
import { id_inCs3ScfToSsfServiceManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfServiceManagement.va.mjs";
// export { id_inCs3ScfToSsfServiceManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3ScfToSsfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3ScfToSsfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with ActivateServiceFiltering
 *   --The inCs3ScfToSsfServiceManagement contract expresses the form of the service
 *   -- in which the SCF, a ROS-object of class scf, initiates the Service Management related contract.
 *   -- A ROS-object of class ssf, in the context of a separate contract, responds to this initiation.
 *   INITIATOR CONSUMER OF
 *     {serviceManagementActivatePackage}
 *   ID                     id-inCs3ScfToSsfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3ScfToSsfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementActivatePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3ScfToSsfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

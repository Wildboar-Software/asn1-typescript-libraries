/* eslint-disable */
import { serviceManagementActivatePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
// export { serviceManagementActivatePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
import { id_inScfToSsfServiceManagement } from "../IN-object-identifiers/id-inScfToSsfServiceManagement.va.mjs";
// export { id_inScfToSsfServiceManagement } from "../IN-object-identifiers/id-inScfToSsfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with ActivateServiceFiltering
 *   --The inScfToSsfServiceManagement contract expresses the form of the service
 *   -- in which the SCF, a ROS-object of class scf, initiates the Service Management related contract.
 *   -- A ROS-object of class ssf, in the context of a separate contract, responds to this initiation.
 *   INITIATOR CONSUMER OF
 *     {serviceManagementActivatePackage}
 *   ID                     id-inScfToSsfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementActivatePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

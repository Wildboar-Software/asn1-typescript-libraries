/* eslint-disable */
import { serviceManagementActivatePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
// export { serviceManagementActivatePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/serviceManagementActivatePackage.oa.mjs";
import { id_inCs2ScfToSsfServiceManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfServiceManagement.va.mjs";
// export { id_inCs2ScfToSsfServiceManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2ScfToSsfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2ScfToSsfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with ActivateServiceFiltering
 *   INITIATOR CONSUMER OF
 *     {serviceManagementActivatePackage}
 *   ID                     id-inCs2ScfToSsfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2ScfToSsfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementActivatePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2ScfToSsfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

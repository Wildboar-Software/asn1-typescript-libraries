/* eslint-disable */
import { serviceManagementResponsePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
// export { serviceManagementResponsePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
import { id_inCs3SsfToScfServiceManagement } from "../IN-CS3-object-identifiers/id-inCs3SsfToScfServiceManagement.va.mjs";
// export { id_inCs3SsfToScfServiceManagement } from "../IN-CS3-object-identifiers/id-inCs3SsfToScfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3SsfToScfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3SsfToScfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated/ended by SSF with ServiceFilteringResponse
 *   --The inCs3SsfToScfServiceManagement contract expresses the form of the service in
 *   --which the SSF, a ROS-object of class ssf, initiates the Service Management related contract
 *   -- for reporting Service Management results.
 *   INITIATOR CONSUMER OF
 *     {serviceManagementResponsePackage}
 *   ID                     id-inCs3SsfToScfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3SsfToScfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementResponsePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3SsfToScfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

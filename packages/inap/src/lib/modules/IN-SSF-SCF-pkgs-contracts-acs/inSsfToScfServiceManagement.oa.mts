/* eslint-disable */
import { serviceManagementResponsePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
// export { serviceManagementResponsePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
import { id_inSsfToScfServiceManagement } from "../IN-object-identifiers/id-inSsfToScfServiceManagement.va.mjs";
// export { id_inSsfToScfServiceManagement } from "../IN-object-identifiers/id-inSsfToScfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inSsfToScfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inSsfToScfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated/ended by SSF with ServiceFilteringResponse
 *   --The inSsfToScfServiceManagement contract expresses the form of the service in
 *   --which the SSF, a ROS-object of class ssf, initiates the Service Management related contract
 *   -- for reporting Service Management results.
 *   INITIATOR CONSUMER OF
 *     {serviceManagementResponsePackage}
 *   ID                     id-inSsfToScfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inSsfToScfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementResponsePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inSsfToScfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

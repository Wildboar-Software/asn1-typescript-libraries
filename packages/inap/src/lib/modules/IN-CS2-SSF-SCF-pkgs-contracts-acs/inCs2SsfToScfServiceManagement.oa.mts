/* eslint-disable */
import { serviceManagementResponsePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
// export { serviceManagementResponsePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/serviceManagementResponsePackage.oa.mjs";
import { id_inCs2SsfToScfServiceManagement } from "../IN-CS2-object-identifiers/id-inCs2SsfToScfServiceManagement.va.mjs";
// export { id_inCs2SsfToScfServiceManagement } from "../IN-CS2-object-identifiers/id-inCs2SsfToScfServiceManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2SsfToScfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2SsfToScfServiceManagement CONTRACT ::= {
 *   -- dialogue initiated/ended by SSF with ServiceFilteringResponse
 *   INITIATOR CONSUMER OF
 *     {serviceManagementResponsePackage}
 *   ID                     id-inCs2SsfToScfServiceManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2SsfToScfServiceManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ serviceManagementResponsePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2SsfToScfServiceManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

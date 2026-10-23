/* eslint-disable */
import { statusReportingPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
// export { statusReportingPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
import { id_inScfToSsfStatusReporting } from "../IN-object-identifiers/id-inScfToSsfStatusReporting.va.mjs";
// export { id_inScfToSsfStatusReporting } from "../IN-object-identifiers/id-inScfToSsfStatusReporting.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfStatusReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfStatusReporting CONTRACT ::= {
 *   -- dialogue initiated by SCF with StatusReporting Operations
 *   --The inScfToSsfStatusReporting contract expresses the form of the service
 *   --in which the SCF, a ROS-object of class scf, initiates the Status Reporting related contract.
 *   --A ROS-object of class ssf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {statusReportingPackage}
 *   ID                     id-inScfToSsfStatusReporting
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfStatusReporting: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ statusReportingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfStatusReporting /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

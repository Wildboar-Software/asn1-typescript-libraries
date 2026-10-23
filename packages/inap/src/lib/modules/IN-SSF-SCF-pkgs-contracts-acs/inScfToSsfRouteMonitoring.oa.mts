/* eslint-disable */
import { monitorRoutePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/monitorRoutePackage.oa.mjs";
// export { monitorRoutePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/monitorRoutePackage.oa.mjs";
import { id_inScfToSsfRouteMonitoring } from "../IN-object-identifiers/id-inScfToSsfRouteMonitoring.va.mjs";
// export { id_inScfToSsfRouteMonitoring } from "../IN-object-identifiers/id-inScfToSsfRouteMonitoring.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfRouteMonitoring
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfRouteMonitoring CONTRACT ::= {
 *   -- dialogue initiated by SCF with MonitorRouteRequest
 *   --The inScfToSsfRouteMonitoring contract expresses the form of the service in which the SCF,
 *   -- a ROS-object of class scf, initiates the route monitoring related contract
 *   -- A ROS-object of class ssf, in the context of a separate contract, responds to this initiation.
 *   INITIATOR CONSUMER OF
 *     {monitorRoutePackage}
 *   ID                     id-inScfToSsfRouteMonitoring
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfRouteMonitoring: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ monitorRoutePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfRouteMonitoring /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

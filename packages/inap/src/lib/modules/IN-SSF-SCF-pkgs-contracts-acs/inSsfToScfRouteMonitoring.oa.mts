/* eslint-disable */
import { monitorRoutePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/monitorRoutePackage.oa.mjs";
// export { monitorRoutePackage } from "../IN-SSF-SCF-pkgs-contracts-acs/monitorRoutePackage.oa.mjs";
import { id_inSsfToScfRouteMonitoring } from "../IN-object-identifiers/id-inSsfToScfRouteMonitoring.va.mjs";
// export { id_inSsfToScfRouteMonitoring } from "../IN-object-identifiers/id-inSsfToScfRouteMonitoring.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inSsfToScfRouteMonitoring
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inSsfToScfRouteMonitoring CONTRACT ::= {
 *   -- dialogue initiated by SSF with MonitorRouteResponse
 *   --The inSsfToScfRouteMonitoring contract expresses the form of the service in which the SSF,
 *   -- a ROS-Object of class ssf responds to a MonitorRouteRequest
 *   INITIATOR CONSUMER OF
 *     {monitorRoutePackage}
 *   ID                     id-inSsfToScfRouteMonitoring
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inSsfToScfRouteMonitoring: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ monitorRoutePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inSsfToScfRouteMonitoring /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

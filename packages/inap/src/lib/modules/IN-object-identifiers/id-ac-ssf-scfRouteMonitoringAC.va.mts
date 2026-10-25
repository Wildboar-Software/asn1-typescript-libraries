/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_ssf_scfRouteMonitoringAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-ssf-scfRouteMonitoringAC OBJECT IDENTIFIER ::= {id-ac ssf-scfRouteMonitorinAC(34) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_ssf_scfRouteMonitoringAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssf-scfRouteMonitorinAC */ 34,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */

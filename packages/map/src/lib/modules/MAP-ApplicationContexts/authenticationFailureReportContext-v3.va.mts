/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary authenticationFailureReportContext_v3
 * @description
 *
 * Authentication failure reporting between VLR and HLR or SGSN and HLR.
 * Initiator is VLR or SGSN; responder is HLR. Version 3 only (3GPP TS 29.002
 * V19.1.0 clause 17.3.2.49).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authenticationFailureReportContext-v3  OBJECT IDENTIFIER ::= {map-ac authenticationFailureReport(39) version3(3)}
 * ```
 * 
 * @constant
 */
export
const authenticationFailureReportContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* authenticationFailureReport */ 39,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

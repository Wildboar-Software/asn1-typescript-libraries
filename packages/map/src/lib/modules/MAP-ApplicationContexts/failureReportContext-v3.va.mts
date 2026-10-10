/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary failureReportContext_v3
 * @description
 *
 * Informs that network-requested PDP-context activation has failed, between HLR
 * and GGSN. Initiator is GGSN; responder is HLR. Version 3 only (3GPP TS 29.002
 * V19.1.0 clause 17.3.2.34).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failureReportContext-v3  OBJECT IDENTIFIER ::= {map-ac failureReport(34) version3(3)}
 * ```
 * 
 * @constant
 */
export
const failureReportContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* failureReport */ 34,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

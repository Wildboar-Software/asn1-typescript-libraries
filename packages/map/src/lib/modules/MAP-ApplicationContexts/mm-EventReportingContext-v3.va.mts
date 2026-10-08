/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary mm_EventReportingContext_v3
 * @description
 *
 * Mobility management event notification between VLR and gsmSCF. Initiator is
 * VLR; responder is gsmSCF. Version 3 only (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.46).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mm-EventReportingContext-v3  OBJECT IDENTIFIER ::= {map-ac mm-EventReporting(42) version3(3)}
 * ```
 * 
 * @constant
 */
export
const mm_EventReportingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* mm-EventReporting */ 42,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

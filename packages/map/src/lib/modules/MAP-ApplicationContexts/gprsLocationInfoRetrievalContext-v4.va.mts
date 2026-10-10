/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary gprsLocationInfoRetrievalContext_v4
 * @description
 *
 * GPRS location information retrieval between HLR and GGSN. Initiator is GGSN;
 * responder is HLR. Version 4; a v3 equivalent exists (3GPP TS 29.002 V19.1.0
 * clause 17.3.2.33).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsLocationInfoRetrievalContext-v4  OBJECT IDENTIFIER ::= {map-ac gprsLocationInfoRetrieval(33) version4(4)}
 * ```
 * 
 * @constant
 */
export
const gprsLocationInfoRetrievalContext_v4: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gprsLocationInfoRetrieval */ 33,
    /* version4 */ 4,
], map_ac);

/* eslint-enable */

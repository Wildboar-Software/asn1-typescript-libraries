/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary imsiRetrievalContext_v2
 * @description
 *
 * IMSI retrieval between HLR and VLR. Initiator is VLR; responder is HLR.
 * Version 2 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * imsiRetrievalContext-v2  OBJECT IDENTIFIER ::= {map-ac imsiRetrieval(26) version2(2)}
 * ```
 * 
 * @constant
 */
export
const imsiRetrievalContext_v2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* imsiRetrieval */ 26,
    /* version2 */ 2,
], map_ac);

/* eslint-enable */

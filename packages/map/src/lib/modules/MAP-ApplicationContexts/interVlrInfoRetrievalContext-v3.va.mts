/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary interVlrInfoRetrievalContext_v3
 * @description
 *
 * Information retrieval between VLRs. Initiator is VLR; responder is VLR.
 * Version 3; a v2 equivalent exists. The v1 equivalent uses `infoRetrieval`
 * version 1 (3GPP TS 29.002 V19.1.0 clause 17.3.2.16).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interVlrInfoRetrievalContext-v3  OBJECT IDENTIFIER ::= {map-ac interVlrInfoRetrieval(15) version3(3)}
 * ```
 * 
 * @constant
 */
export
const interVlrInfoRetrievalContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* interVlrInfoRetrieval */ 15,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

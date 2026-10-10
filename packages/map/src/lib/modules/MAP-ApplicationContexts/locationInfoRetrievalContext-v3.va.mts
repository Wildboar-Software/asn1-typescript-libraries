/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary locationInfoRetrievalContext_v3
 * @description
 *
 * Location information retrieval between GMSC and HLR, GMSC and NPLR, or gsmSCF
 * and HLR. Initiator is GMSC (responder HLR or NPLR) or gsmSCF (responder HLR).
 * For GMSC–NPLR, versions 1–3 apply. v2 and v1 equivalents exist (3GPP TS
 * 29.002 V19.1.0 clause 17.3.2.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationInfoRetrievalContext-v3  OBJECT IDENTIFIER ::= {map-ac locInfoRetrieval(5) version3(3)}
 * ```
 * 
 * @constant
 */
export
const locationInfoRetrievalContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* locInfoRetrieval */ 5,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

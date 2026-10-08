/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary infoRetrievalContext_v3
 * @description
 *
 * Authentication information retrieval between HLR and VLR or HLR and SGSN.
 * Initiator is VLR or SGSN; responder is HLR. For HLR–SGSN, versions 1–3 apply.
 * v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause 17.3.2.15).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * infoRetrievalContext-v3  OBJECT IDENTIFIER ::= {map-ac infoRetrieval(14) version3(3)}
 * ```
 * 
 * @constant
 */
export
const infoRetrievalContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* infoRetrieval */ 14,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

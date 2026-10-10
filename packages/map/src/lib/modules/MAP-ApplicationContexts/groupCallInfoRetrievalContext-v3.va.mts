/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary groupCallInfoRetrievalContext_v3
 * @description
 *
 * Group call and broadcast call between group call serving MSC and visited MSC.
 * Either side may be initiator or responder. Version 3 only (3GPP TS 29.002
 * V19.1.0 clause 17.3.2.30A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupCallInfoRetrievalContext-v3  OBJECT IDENTIFIER ::= {map-ac groupCallInfoRetrieval(45) version3(3)}
 * ```
 * 
 * @constant
 */
export
const groupCallInfoRetrievalContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* groupCallInfoRetrieval */ 45,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

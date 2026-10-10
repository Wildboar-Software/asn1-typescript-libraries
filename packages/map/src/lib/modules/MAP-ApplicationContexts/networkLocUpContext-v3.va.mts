/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary networkLocUpContext_v3
 * @description
 *
 * Location updating between HLR and VLR. Initiator is VLR; responder is HLR.
 * Version 3; v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkLocUpContext-v3  OBJECT IDENTIFIER ::= {map-ac networkLocUp(1) version3(3)}
 * ```
 * 
 * @constant
 */
export
const networkLocUpContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* networkLocUp */ 1,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

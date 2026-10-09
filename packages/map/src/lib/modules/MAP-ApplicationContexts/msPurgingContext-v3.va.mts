/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary msPurgingContext_v3
 * @description
 *
 * MS purging between HLR and VLR or HLR and SGSN. Initiator is VLR or SGSN;
 * responder is HLR. For SGSN–HLR only version 3 applies. A v2 equivalent exists
 * (3GPP TS 29.002 V19.1.0 clause 17.3.2.27).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msPurgingContext-v3  OBJECT IDENTIFIER ::= {map-ac msPurging(27) version3(3)}
 * ```
 * 
 * @constant
 */
export
const msPurgingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* msPurging */ 27,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

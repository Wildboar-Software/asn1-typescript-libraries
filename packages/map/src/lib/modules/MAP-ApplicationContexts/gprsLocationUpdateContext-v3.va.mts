/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary gprsLocationUpdateContext_v3
 * @description
 *
 * GPRS location updating between HLR and SGSN. Initiator is SGSN; responder is
 * HLR. Version 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.32).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsLocationUpdateContext-v3  OBJECT IDENTIFIER ::= {map-ac gprsLocationUpdate(32) version3(3)}
 * ```
 * 
 * @constant
 */
export
const gprsLocationUpdateContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gprsLocationUpdate */ 32,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

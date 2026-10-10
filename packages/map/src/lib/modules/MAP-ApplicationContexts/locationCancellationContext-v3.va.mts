/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary locationCancellationContext_v3
 * @description
 *
 * Location cancellation between HLR and VLR or HLR and SGSN. Initiator is HLR;
 * responder is VLR or SGSN. For HLR–SGSN only version 3 applies. v2 and v1
 * equivalents exist (3GPP TS 29.002 V19.1.0 clause 17.3.2.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationCancellationContext-v3  OBJECT IDENTIFIER ::= {map-ac locationCancel(2) version3(3)}
 * ```
 * 
 * @constant
 */
export
const locationCancellationContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* locationCancel */ 2,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

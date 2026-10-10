/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary tracingContext_v3
 * @description
 *
 * Stand-alone tracing control between HLR and VLR or HLR and SGSN. Initiator is
 * HLR; responder is VLR or SGSN. For HLR–SGSN, versions 1–3 apply. v2 and v1
 * equivalents exist (3GPP TS 29.002 V19.1.0 clause 17.3.2.18).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tracingContext-v3  OBJECT IDENTIFIER ::= {map-ac tracing(17) version3(3)}
 * ```
 * 
 * @constant
 */
export
const tracingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tracing */ 17,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

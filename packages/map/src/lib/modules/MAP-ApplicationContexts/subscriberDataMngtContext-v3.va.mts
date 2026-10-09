/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary subscriberDataMngtContext_v3
 * @description
 *
 * Stand-alone subscriber data management between HLR and VLR or HLR and SGSN,
 * and between CSS and VLR or CSS and SGSN. Initiator is HLR or CSS; responder
 * is VLR or SGSN. HLR–SGSN, CSS–VLR and CSS–SGSN: version 3 only. v2 and v1
 * equivalents exist (3GPP TS 29.002 V19.1.0 clause 17.3.2.17).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subscriberDataMngtContext-v3  OBJECT IDENTIFIER ::= {map-ac subscriberDataMngt(16) version3(3)}
 * ```
 * 
 * @constant
 */
export
const subscriberDataMngtContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* subscriberDataMngt */ 16,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

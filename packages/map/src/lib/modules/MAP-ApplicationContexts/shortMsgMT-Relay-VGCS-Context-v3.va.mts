/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgMT_Relay_VGCS_Context_v3
 * @description
 *
 * Mobile terminating short message relay for VGCS between SMS-GMSC and MSC.
 * Initiator is SMS-GMSC; responder is MSC. Version 3 only (3GPP TS 29.002
 * V19.1.0 clause 17.3.2.51).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgMT-Relay-VGCS-Context-v3  OBJECT IDENTIFIER ::= {map-ac shortMsgMT-Relay-VGCS(41) version3(3)}
 * ```
 * 
 * @constant
 */
export
const shortMsgMT_Relay_VGCS_Context_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgMT-Relay-VGCS */ 41,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

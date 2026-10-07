/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgGatewayContext_v3
 * @description
 *
 * Short message gateway procedures. Initiator is GMSC; responder is HLR.
 * Version 3; v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.21).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgGatewayContext-v3  OBJECT IDENTIFIER ::= {map-ac shortMsgGateway(20) version3(3)}
 * ```
 * 
 * @constant
 */
export
const shortMsgGatewayContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgGateway */ 20,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgMT_RelayContext_v3
 * @description
 *
 * Mobile terminating short message relay between GMSC and MSC or GMSC and SGSN.
 * Initiator is GMSC; responder is MSC or SGSN. For GMSC–SGSN, versions 2 and 3
 * and the equivalent v1 AC apply. v2 equivalent exists; v1 uses
 * `shortMsg-Relay` version 1 (3GPP TS 29.002 V19.1.0 clause 17.3.2.26).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgMT-RelayContext-v3  OBJECT IDENTIFIER ::= {map-ac shortMsgMT-Relay(25) version3(3)}
 * ```
 * 
 * @constant
 */
export
const shortMsgMT_RelayContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgMT-Relay */ 25,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

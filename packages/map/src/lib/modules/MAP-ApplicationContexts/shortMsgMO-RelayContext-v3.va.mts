/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgMO_RelayContext_v3
 * @description
 *
 * Mobile originating short message relay between MSC and IWMSC or SGSN and
 * IWMSC. Initiator is MSC or SGSN; responder is IWMSC. For SGSN–IWMSC, versions
 * 1–3 apply. v2 equivalent exists; v1 uses `shortMsg-Relay` version 1 (3GPP TS
 * 29.002 V19.1.0 clause 17.3.2.22).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgMO-RelayContext-v3  OBJECT IDENTIFIER ::= {map-ac shortMsgMO-Relay(21) version3(3)}
 * ```
 * 
 * @constant
 */
export
const shortMsgMO_RelayContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgMO-Relay */ 21,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

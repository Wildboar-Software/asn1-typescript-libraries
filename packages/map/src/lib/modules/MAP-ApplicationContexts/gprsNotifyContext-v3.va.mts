/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary gprsNotifyContext_v3
 * @description
 *
 * Notifies that a GPRS subscriber is present again, between HLR and GGSN.
 * Initiator is HLR; responder is GGSN. Version 3 only (3GPP TS 29.002 V19.1.0
 * clause 17.3.2.35).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsNotifyContext-v3  OBJECT IDENTIFIER ::= {map-ac gprsNotify(35) version3(3)}
 * ```
 * 
 * @constant
 */
export
const gprsNotifyContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gprsNotify */ 35,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

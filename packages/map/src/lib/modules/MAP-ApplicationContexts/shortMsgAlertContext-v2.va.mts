/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary shortMsgAlertContext_v2
 * @description
 *
 * Short message alerting. Initiator is HLR; responder is IWMSC. Version 2; a v1
 * equivalent exists (3GPP TS 29.002 V19.1.0 clause 17.3.2.24).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortMsgAlertContext-v2  OBJECT IDENTIFIER ::= {map-ac shortMsgAlert(23) version2(2)}
 * ```
 * 
 * @constant
 */
export
const shortMsgAlertContext_v2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shortMsgAlert */ 23,
    /* version2 */ 2,
], map_ac);

/* eslint-enable */

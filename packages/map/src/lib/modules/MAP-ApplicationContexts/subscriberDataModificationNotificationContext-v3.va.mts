/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary subscriberDataModificationNotificationContext_v3
 * @description
 *
 * Subscriber data modification notification between HLR and gsmSCF. Initiator
 * is HLR; responder is gsmSCF. Version 3 only (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.48).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subscriberDataModificationNotificationContext-v3  OBJECT IDENTIFIER ::= {map-ac subscriberDataModificationNotification(22) version3(3)}
 * ```
 * 
 * @constant
 */
export
const subscriberDataModificationNotificationContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* subscriberDataModificationNotification */ 22,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

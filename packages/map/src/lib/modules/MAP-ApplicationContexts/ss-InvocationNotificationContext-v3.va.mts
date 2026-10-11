/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary ss_InvocationNotificationContext_v3
 * @description
 *
 * Supplementary service invocation notification between MSC and gsmSCF and
 * between HLR and gsmSCF. Initiator is MSC or HLR; responder is gsmSCF. Version
 * 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.36).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-InvocationNotificationContext-v3  OBJECT IDENTIFIER ::= {map-ac ss-InvocationNotification(36) version3(3)}
 * ```
 * 
 * @constant
 */
export
const ss_InvocationNotificationContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ss-InvocationNotification */ 36,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

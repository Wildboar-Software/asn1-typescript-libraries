/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary istAlertingContext_v3
 * @description
 *
 * IST alerting between MSC (VMSC or GMSC) and HLR. Initiator is VMSC or GMSC;
 * responder is HLR. Version 3 only (3GPP TS 29.002 V19.1.0 clause 17.3.2.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * istAlertingContext-v3  OBJECT IDENTIFIER ::= {map-ac istAlerting(4) version3(3)}
 * ```
 * 
 * @constant
 */
export
const istAlertingContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* istAlerting */ 4,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

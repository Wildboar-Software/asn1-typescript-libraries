/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary subscriberInfoEnquiryContext_v3
 * @description
 *
 * Subscriber information enquiry between HLR and VLR or HLR and SGSN. Initiator
 * is HLR; responder is VLR or SGSN. Version 3 only (3GPP TS 29.002 V19.1.0
 * clause 17.3.2.28).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subscriberInfoEnquiryContext-v3  OBJECT IDENTIFIER ::= {map-ac subscriberInfoEnquiry(28) version3(3)}
 * ```
 * 
 * @constant
 */
export
const subscriberInfoEnquiryContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* subscriberInfoEnquiry */ 28,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

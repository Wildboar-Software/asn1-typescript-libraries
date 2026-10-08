/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { map_ac } from "../MAP-ApplicationContexts/map-ac.va.mjs";


/**
 * @summary roamingNumberEnquiryContext_v3
 * @description
 *
 * Roaming number enquiry between HLR and VLR. Initiator is HLR; responder is
 * VLR. Version 3; v2 and v1 equivalents exist (3GPP TS 29.002 V19.1.0 clause
 * 17.3.2.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roamingNumberEnquiryContext-v3  OBJECT IDENTIFIER ::= {map-ac roamingNbEnquiry(3) version3(3)}
 * ```
 * 
 * @constant
 */
export
const roamingNumberEnquiryContext_v3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* roamingNbEnquiry */ 3,
    /* version3 */ 3,
], map_ac);

/* eslint-enable */

/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedPLMNID
 * @description
 * 
 * Visited PLMN that will terminate the target's communications or tunnel them
 * to the home PLMN.
 * 
 * Annex B.7 says to carry the VisitedPLMNID defined in TS 29.234. Clause 8 does
 * not define the encoding.
 * 
 * 3GPP TS 33.108, table 8.2 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedPLMNID  ::=  OCTET STRING
 * ```
 */
export
type VisitedPLMNID = OCTET_STRING; // OctetStringType
export const _decode_VisitedPLMNID: $.ASN1Decoder<VisitedPLMNID> = $._decodeOctetString;
export const _encode_VisitedPLMNID: $.ASN1Encoder<VisitedPLMNID> = $._encodeOctetString;


/* eslint-enable */

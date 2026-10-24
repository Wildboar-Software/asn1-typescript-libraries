/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedPLMNID
 * @description
 * 
 * Identity of the visited PLMN to which the user is registered.
 * 
 * Conditional for non-home access to the BM-SC or to the MBMS service (tables
 * 9.3 to 9.8).
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8. Clause 9 does not define the
 * character format.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedPLMNID  ::=  UTF8String
 * ```
 */
export
type VisitedPLMNID = UTF8String; // UTF8String
export const _decode_VisitedPLMNID: $.ASN1Decoder<VisitedPLMNID> = $._decodeUTF8String;
export const _encode_VisitedPLMNID: $.ASN1Encoder<VisitedPLMNID> = $._encodeUTF8String;


/* eslint-enable */

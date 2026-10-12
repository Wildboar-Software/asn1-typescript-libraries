/* eslint-disable */
import {
    ASN1Element as _Element,
    UTCTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedAuthorisationInfo
 * @description
 * 
 * Date-time group for the message. National policy chooses whether it is the
 * time the releasing officer officially released the message, or the time it
 * was handed to a communications facility. The originating domain always
 * includes the heading extension. With the originator PLAD it cross-references
 * ACP 127 and MMHS identification. UTC time is as in ITU-T X.411 clause 8.5.4.
 * STANAG 4406 (Ed. 2), Annex A, A1.2 and B.106.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedAuthorisationInfo  ::=  UTCTime
 * ```
 */
export
type ExtendedAuthorisationInfo = UTCTime; // UTCTime
export const _decode_ExtendedAuthorisationInfo: $.ASN1Decoder<ExtendedAuthorisationInfo> = $._decodeUTCTime;
export const _encode_ExtendedAuthorisationInfo: $.ASN1Encoder<ExtendedAuthorisationInfo> = $._encodeUTCTime;


/* eslint-enable */

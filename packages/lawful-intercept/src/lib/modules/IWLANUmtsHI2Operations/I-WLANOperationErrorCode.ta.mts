/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary I_WLANOperationErrorCode
 * @description
 * 
 * Failed access-initiation reason, failed tunnel-establishment reason, or
 * I-WLAN session-termination reason.
 * 
 * Failed tunnel establishment is "Authentication failed" or "Authorization
 * failed". The tunnel-disconnect reason is for further study. TS 33.108 does
 * not define the octet encoding.
 * 
 * 3GPP TS 33.108, table 8.2, tables 8.3 to 8.6, and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type I_WLANOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_I_WLANOperationErrorCode: $.ASN1Decoder<I_WLANOperationErrorCode> = $._decodeOctetString;
export const _encode_I_WLANOperationErrorCode: $.ASN1Encoder<I_WLANOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */

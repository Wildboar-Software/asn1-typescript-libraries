/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionAliveTime
 * @description
 * 
 * Expected maximum duration of the I-WLAN access being initiated.
 * 
 * Annex B.7 says to carry SessionAliveTime as defined in TS 29.234. Clause 8
 * does not define the encoding.
 * 
 * 3GPP TS 33.108, table 8.2 and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionAliveTime  ::=  OCTET STRING
 * ```
 */
export
type SessionAliveTime = OCTET_STRING; // OctetStringType
export const _decode_SessionAliveTime: $.ASN1Decoder<SessionAliveTime> = $._decodeOctetString;
export const _encode_SessionAliveTime: $.ASN1Encoder<SessionAliveTime> = $._encodeOctetString;


/* eslint-enable */

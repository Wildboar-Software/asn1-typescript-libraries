/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionAliveTime
 * @description
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

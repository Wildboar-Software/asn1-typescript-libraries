/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeStamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStamp   ::=  OCTET STRING ( SIZE( 9 ) )
 * ```
 */
export
type TimeStamp = OCTET_STRING; // OctetStringType

export
const _decode_TimeStamp: $.ASN1Decoder<TimeStamp> = $._decodeOctetString;

export
const _encode_TimeStamp: $.ASN1Encoder<TimeStamp> = $._encodeOctetString;

/* eslint-enable */

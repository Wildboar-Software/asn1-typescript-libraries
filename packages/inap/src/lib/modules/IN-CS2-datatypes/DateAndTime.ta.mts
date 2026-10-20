/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DateAndTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DateAndTime  ::=  OCTET STRING(SIZE (6))
 * ```
 */
export
type DateAndTime = OCTET_STRING; // OctetStringType

export
const _decode_DateAndTime: $.ASN1Decoder<DateAndTime> = $._decodeOctetString;

export
const _encode_DateAndTime: $.ASN1Encoder<DateAndTime> = $._encodeOctetString;

/* eslint-enable */

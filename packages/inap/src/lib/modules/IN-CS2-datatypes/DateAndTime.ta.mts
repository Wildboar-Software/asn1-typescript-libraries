/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
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
function _decode_DateAndTime (el: _Element): DateAndTime {
    const value = $._decodeOctetString(el);
    if (value.length !== 6) {
        throw new ASN1SizeError("DateAndTime violates SIZE constraint");
    }
    return value;
}

export
const _encode_DateAndTime: $.ASN1Encoder<DateAndTime> = $._encodeOctetString;

/* eslint-enable */

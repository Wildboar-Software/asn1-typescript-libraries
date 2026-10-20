/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_TimeStamp = (el: _Element): TimeStamp => {
    const value = $._decodeOctetString(el);
    if (value.length !== 9) {
        throw new ASN1SizeError("TimeStamp violates SIZE constraint");
    }
    return value;
};

export
const _encode_TimeStamp: $.ASN1Encoder<TimeStamp> = $._encodeOctetString;

/* eslint-enable */

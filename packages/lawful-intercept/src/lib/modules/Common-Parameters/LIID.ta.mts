/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIID  ::=  OCTET STRING (SIZE (1..25))
 * ```
 */
export
type LIID = OCTET_STRING; // OctetStringType
export const _decode_LIID: $.ASN1Decoder<LIID> = (el: _Element): LIID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("LIID violates SIZE constraint");
    }
    return value;
};
export const _encode_LIID: $.ASN1Encoder<LIID> = $._encodeOctetString;


/* eslint-enable */

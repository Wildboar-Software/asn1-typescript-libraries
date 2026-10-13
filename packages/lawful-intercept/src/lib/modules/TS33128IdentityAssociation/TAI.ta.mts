/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAI  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type TAI = OCTET_STRING; // OctetStringType
export const _decode_TAI: $.ASN1Decoder<TAI> = (el: _Element): TAI => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("TAI violates SIZE constraint");
    }
    return value;
};
export const _encode_TAI: $.ASN1Encoder<TAI> = $._encodeOctetString;


/* eslint-enable */

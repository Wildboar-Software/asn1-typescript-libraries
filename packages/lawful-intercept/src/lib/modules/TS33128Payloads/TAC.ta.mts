/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAC  ::=  OCTET STRING (SIZE(2..3))
 * ```
 */
export
type TAC = OCTET_STRING; // OctetStringType
export const _decode_TAC: $.ASN1Decoder<TAC> = (el: _Element): TAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("TAC violates SIZE constraint");
    }
    return value;
};
export const _encode_TAC: $.ASN1Encoder<TAC> = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rai
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rai                 ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type Rai = OCTET_STRING; // OctetStringType

export function _decode_Rai (el: _Element): Rai {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("Rai violates the SIZE constraint");
    }
    return value;
}

export const _encode_Rai: $.ASN1Encoder<Rai> = $._encodeOctetString;


/* eslint-enable */

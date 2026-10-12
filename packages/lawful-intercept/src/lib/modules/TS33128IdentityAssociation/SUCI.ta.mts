/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI  ::=  OCTET STRING (SIZE(8..3008))
 * ```
 */
export
type SUCI = OCTET_STRING; // OctetStringType
export const _decode_SUCI: $.ASN1Decoder<SUCI> = (el: _Element): SUCI => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 3008) {
        throw new ASN1SizeError("SUCI violates SIZE constraint");
    }
    return value;
};
export const _encode_SUCI: $.ASN1Encoder<SUCI> = $._encodeOctetString;


/* eslint-enable */

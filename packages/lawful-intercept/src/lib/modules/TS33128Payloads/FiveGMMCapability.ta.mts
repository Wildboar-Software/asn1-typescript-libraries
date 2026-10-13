/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCapability  ::=  OCTET STRING (SIZE(1..13))
 * ```
 */
export
type FiveGMMCapability = OCTET_STRING; // OctetStringType
export const _decode_FiveGMMCapability: $.ASN1Decoder<FiveGMMCapability> = (el: _Element): FiveGMMCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 13) {
        throw new ASN1SizeError("FiveGMMCapability violates SIZE constraint");
    }
    return value;
};
export const _encode_FiveGMMCapability: $.ASN1Encoder<FiveGMMCapability> = $._encodeOctetString;


/* eslint-enable */

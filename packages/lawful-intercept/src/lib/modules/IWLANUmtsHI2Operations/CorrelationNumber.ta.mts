/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type CorrelationNumber = OCTET_STRING; // OctetStringType

export function _decode_CorrelationNumber (el: _Element): CorrelationNumber {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 20) {
        throw new ASN1SizeError("CorrelationNumber violates the SIZE constraint");
    }
    return value;
}

export const _encode_CorrelationNumber: $.ASN1Encoder<CorrelationNumber> = $._encodeOctetString;


/* eslint-enable */

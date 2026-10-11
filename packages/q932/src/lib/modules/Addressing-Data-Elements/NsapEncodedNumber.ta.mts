/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NsapEncodedNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NsapEncodedNumber  ::=  OCTET STRING(SIZE (20))
 * ```
 */
export
type NsapEncodedNumber = OCTET_STRING; // OctetStringType
export function _decode_NsapEncodedNumber (el: _Element): NsapEncodedNumber {
    const value = $._decodeOctetString(el);
    if (value.length !== 20) {
        throw new ASN1SizeError("NsapEncodedNumber violates SIZE constraint");
    }
    return value;
}
export const _encode_NsapEncodedNumber: $.ASN1Encoder<NsapEncodedNumber> = $._encodeOctetString;


/* eslint-enable */

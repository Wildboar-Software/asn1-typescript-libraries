/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardToNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardToNumber  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type ForwardToNumber = OCTET_STRING; // OctetStringType

export const _decode_ForwardToNumber = (el: _Element): ForwardToNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("ForwardToNumber violates SIZE constraint");
    }
    return value;
};

export
const _encode_ForwardToNumber: $.ASN1Encoder<ForwardToNumber> = $._encodeOctetString;

/* eslint-enable */

/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardCallIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCallIndicators  ::=  OCTET STRING(SIZE (2))
 * ```
 */
export
type ForwardCallIndicators = OCTET_STRING; // OctetStringType

export
function _decode_ForwardCallIndicators (el: _Element): ForwardCallIndicators {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ForwardCallIndicators violates SIZE constraint");
    }
    return value;
}

export
const _encode_ForwardCallIndicators: $.ASN1Encoder<ForwardCallIndicators> = $._encodeOctetString;

/* eslint-enable */

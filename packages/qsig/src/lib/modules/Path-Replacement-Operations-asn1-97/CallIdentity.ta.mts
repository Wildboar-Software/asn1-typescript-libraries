/* eslint-disable */
import {
    NumericString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CallIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentity  ::=  NumericString (SIZE(1..4))
 * ```
 */
export
type CallIdentity = NumericString; // NumericString

export
const _decode_CallIdentity = (el: _Element): CallIdentity => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("CallIdentity violates SIZE constraint");
    }
    return value;
};

export
const _encode_CallIdentity: $.ASN1Encoder<CallIdentity> = $._encodeNumericString;

/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentifier  ::=  INTEGER(1..2147483647)
 * ```
 */
export
type CallIdentifier = INTEGER;

export
function _decode_CallIdentifier (el: _Element): CallIdentifier {
    const value = $._decodeInteger(el);
    if (value < 1 || value > 2147483647) {
        throw new ASN1OverflowError("CallIdentifier violates INTEGER constraint");
    }
    return value;
}

export
const _encode_CallIdentifier: $.ASN1Encoder<CallIdentifier> = $._encodeInteger;

/* eslint-enable */

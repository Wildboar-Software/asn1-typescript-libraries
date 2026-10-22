/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedType  ::=  INTEGER(0..127)
 * ```
 */
export
type RequestedType = INTEGER;

export
function _decode_RequestedType (el: _Element): RequestedType {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 127) {
        throw new ASN1OverflowError("RequestedType violates INTEGER constraint");
    }
    return value;
}

export
const _encode_RequestedType: $.ASN1Encoder<RequestedType> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionType  ::=  INTEGER(0..MAX)
 * ```
 */
export
type ExtensionType = INTEGER;

export
function _decode_ExtensionType (el: _Element): ExtensionType {
    const value = $._decodeInteger(el);
    if (value < 0) {
        throw new ASN1OverflowError("ExtensionType violates INTEGER constraint");
    }
    return value;
}

export
const _encode_ExtensionType: $.ASN1Encoder<ExtensionType> = $._encodeInteger;

/* eslint-enable */

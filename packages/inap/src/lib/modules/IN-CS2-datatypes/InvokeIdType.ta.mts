/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeIdType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdType  ::=  INTEGER(-128..127)
 * ```
 */
export
type InvokeIdType = INTEGER;

export
function _decode_InvokeIdType (el: _Element): InvokeIdType {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < -128n || value > 127n) : (value < -128 || value > 127)) {
        throw new ASN1OverflowError("InvokeIdType violates INTEGER constraint");
    }
    return value;
}

export
const _encode_InvokeIdType: $.ASN1Encoder<InvokeIdType> = $._encodeInteger;

/* eslint-enable */

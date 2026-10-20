/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDPAddressPrefixLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPAddressPrefixLength  ::=  INTEGER ( 1 .. 64 )
 * ```
 */
export
type PDPAddressPrefixLength = INTEGER;

export const _decode_PDPAddressPrefixLength = (el: _Element): PDPAddressPrefixLength => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 1 || (typeof value === "bigint" ? Number(value) : value) > 64) {
        throw new ASN1OverflowError("PDPAddressPrefixLength violates INTEGER range");
    }
    return value;
};

export
const _encode_PDPAddressPrefixLength: $.ASN1Encoder<PDPAddressPrefixLength> = $._encodeInteger;

/* eslint-enable */

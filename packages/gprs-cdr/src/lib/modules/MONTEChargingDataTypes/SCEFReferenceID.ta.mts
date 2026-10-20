/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFReferenceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReferenceID  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type SCEFReferenceID = INTEGER;

export const _decode_SCEFReferenceID = (el: _Element): SCEFReferenceID => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 4294967295) {
        throw new ASN1OverflowError("SCEFReferenceID violates INTEGER range");
    }
    return value;
};

export
const _encode_SCEFReferenceID: $.ASN1Encoder<SCEFReferenceID> = $._encodeInteger;

/* eslint-enable */

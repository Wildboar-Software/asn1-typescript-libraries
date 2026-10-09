/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeletexCommonName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexCommonName  ::=  TeletexString (SIZE (1..ub-common-name-length))
 * ```
 */
export
type TeletexCommonName = TeletexString; // TeletexString
export const _decode_TeletexCommonName = (el: _Element): TeletexCommonName => {
    const value = $._decodeTeletexString(el);
    if (value.length < 1) {
        throw new ASN1SizeError("TeletexCommonName violates SIZE constraint");
    }
    return value;
};
export const _encode_TeletexCommonName = $._encodeTeletexString;


/* eslint-enable */

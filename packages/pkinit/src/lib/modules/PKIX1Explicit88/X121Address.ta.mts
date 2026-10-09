/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_x121_address_length } from "../PKIX1Explicit88/ub-x121-address-length.va.mjs";



/**
 * @summary X121Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X121Address  ::=  NumericString (SIZE (1..ub-x121-address-length))
 * ```
 */
export
type X121Address = NumericString; // NumericString
export const _decode_X121Address = (el: _Element): X121Address => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > Number(ub_x121_address_length)) {
        throw new ASN1SizeError("X121Address violates SIZE constraint");
    }
    return value;
};
export const _encode_X121Address = $._encodeNumericString;


/* eslint-enable */

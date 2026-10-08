/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import { ub_x121_address_length } from "./ub-x121-address-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export function _decode_X121Address (el: _Element): X121Address {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > Number(ub_x121_address_length)) {
        throw new ASN1SizeError("X121Address violates SIZE constraint");
    }
    return value;
}
export const _encode_X121Address = $._encodeNumericString;


/* eslint-enable */

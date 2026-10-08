/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import { ub_numeric_user_id_length } from "./ub-numeric-user-id-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumericUserIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString
 *                             (SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export
type NumericUserIdentifier = NumericString; // NumericString
export function _decode_NumericUserIdentifier (el: _Element): NumericUserIdentifier {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > Number(ub_numeric_user_id_length)) {
        throw new ASN1SizeError("NumericUserIdentifier violates SIZE constraint");
    }
    return value;
}
export const _encode_NumericUserIdentifier = $._encodeNumericString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_common_name_length } from "../PKIX1Explicit88/ub-common-name-length.va.mjs";



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
    if (value.length < 1 || value.length > Number(ub_common_name_length)) {
        throw new ASN1SizeError("TeletexCommonName violates SIZE constraint");
    }
    return value;
};
export const _encode_TeletexCommonName = $._encodeTeletexString;


/* eslint-enable */

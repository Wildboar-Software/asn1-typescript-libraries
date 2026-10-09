/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeletexOrganizationName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexOrganizationName  ::= 
 *                 TeletexString (SIZE (1..ub-organization-name-length))
 * ```
 */
export
type TeletexOrganizationName = TeletexString; // TeletexString
export const _decode_TeletexOrganizationName = (el: _Element): TeletexOrganizationName => {
    const value = $._decodeTeletexString(el);
    if (value.length < 1) {
        throw new ASN1SizeError("TeletexOrganizationName violates SIZE constraint");
    }
    return value;
};
export const _encode_TeletexOrganizationName = $._encodeTeletexString;


/* eslint-enable */

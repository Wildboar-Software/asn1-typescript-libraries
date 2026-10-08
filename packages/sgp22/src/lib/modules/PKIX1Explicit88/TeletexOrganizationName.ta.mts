/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import { ub_organization_name_length } from "./ub-organization-name-length.va.mjs";
import { ASN1SizeError } from "@wildboar/asn1";
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
export function _decode_TeletexOrganizationName (el: _Element): TeletexOrganizationName {
    const value = $._decodeTeletexString(el);
    if (value.length < 1 || value.length > Number(ub_organization_name_length)) {
        throw new ASN1SizeError("TeletexOrganizationName violates SIZE constraint");
    }
    return value;
}
export const _encode_TeletexOrganizationName = $._encodeTeletexString;


/* eslint-enable */

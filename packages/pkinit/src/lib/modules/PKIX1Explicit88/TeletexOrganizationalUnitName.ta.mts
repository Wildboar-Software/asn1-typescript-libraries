/* eslint-disable */
import {
    ASN1Element as _Element,
    TeletexString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TeletexOrganizationalUnitName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TeletexOrganizationalUnitName  ::=  TeletexString
 *                   (SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export
type TeletexOrganizationalUnitName = TeletexString; // TeletexString
export const _decode_TeletexOrganizationalUnitName = $._decodeTeletexString;
export const _encode_TeletexOrganizationalUnitName = $._encodeTeletexString;


/* eslint-enable */

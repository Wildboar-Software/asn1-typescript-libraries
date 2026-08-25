/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TeletexOrganizationName
 * @description
 *
 * An organization-name is a standard attribute that identifies an organization. The value
 * of an organization-name is a Printable String, Teletex String, Universal String, or a
 * combination of these types. See ITU-T X.402 (1999), §18.3.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationName  ::=
 *   TeletexString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type TeletexOrganizationName = TeletexString; // TeletexString


export const _decode_TeletexOrganizationName = $._decodeTeletexString;


export const _encode_TeletexOrganizationName = $._encodeTeletexString;


/* eslint-enable */

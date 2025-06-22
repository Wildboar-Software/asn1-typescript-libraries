/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TeletexOrganizationName
 * @description
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

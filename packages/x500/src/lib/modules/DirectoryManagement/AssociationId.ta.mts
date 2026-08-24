/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AssociationId
 * @description
 *
 * Local INTEGER identifier of an application association. MATCHES FOR
 * EQUALITY only. `0` is a valid id, not "none" or unset.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationId  ::=  INTEGER
 * ```
 */
export type AssociationId = INTEGER;


export const _decode_AssociationId = $._decodeInteger;


export const _encode_AssociationId = $._encodeInteger;


/* eslint-enable */

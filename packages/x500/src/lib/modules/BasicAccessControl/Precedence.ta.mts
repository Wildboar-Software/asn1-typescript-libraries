/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Precedence
 * @description
 *
 * INTEGER (0..255,...). Compared numerically; **higher is stronger**. 0 is
 * weakest. Inner `ItemPermission` / `UserPermission` precedence, if present,
 * replaces the enclosing {@link ACIItem} value for those tuples.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precedence  ::=  INTEGER(0..255,...)
 * ```
 */
export type Precedence = INTEGER;


export const _decode_Precedence: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_Precedence: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

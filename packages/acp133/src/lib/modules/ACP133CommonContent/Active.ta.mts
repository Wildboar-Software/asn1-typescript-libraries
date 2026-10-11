/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Active
 * @description
 *
 * Whether a tactical entry is believed to be active.
 * `TRUE` means active. `FALSE` means inactive.
 * ACP 133 SUPP-1(A).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Active  ::=  BOOLEAN
 * ```
 */
export
type Active = BOOLEAN; // BooleanType
export const _decode_Active = $._decodeBoolean;
export const _encode_Active = $._encodeBoolean;


/* eslint-enable */

/* eslint-disable */
import {
    type BOOLEAN
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
export const _decode_Active: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_Active: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */

/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Active
 * @description
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

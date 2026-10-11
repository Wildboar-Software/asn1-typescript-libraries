/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FiveGSInterworkingWithoutN26
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingWithoutN26  ::=  BOOLEAN
 * ```
 */
export
type FiveGSInterworkingWithoutN26 = BOOLEAN; // BooleanType

export const _decode_FiveGSInterworkingWithoutN26: $.ASN1Decoder<FiveGSInterworkingWithoutN26> = $._decodeBoolean;

export const _encode_FiveGSInterworkingWithoutN26: $.ASN1Encoder<FiveGSInterworkingWithoutN26> = $._encodeBoolean;

/* eslint-enable */

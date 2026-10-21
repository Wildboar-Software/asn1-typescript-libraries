/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CanCompute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CanCompute  ::=  NULL
 * ```
 */
export
type CanCompute = NULL; // NullType

export
const _decode_CanCompute: $.ASN1Decoder<CanCompute> = $._decodeNull;

export
const _encode_CanCompute: $.ASN1Encoder<CanCompute> = $._encodeNull;

/* eslint-enable */

/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CanCompute
 * @description
 *
 * NULL. Presence means the Visitor PINX can compute a challenge and/or a
 * response from session-key information (ECMA-306 §6.3.1). Absence causes the
 * Authentication Server PINX to return computed values (§6.5.7.1, §7.5.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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

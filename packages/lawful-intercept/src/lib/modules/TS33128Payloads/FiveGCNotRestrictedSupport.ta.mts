/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGCNotRestrictedSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGCNotRestrictedSupport  ::=  BOOLEAN
 * ```
 */
export
type FiveGCNotRestrictedSupport = BOOLEAN; // BooleanType

export const _decode_FiveGCNotRestrictedSupport: $.ASN1Decoder<FiveGCNotRestrictedSupport> = $._decodeBoolean;

export const _encode_FiveGCNotRestrictedSupport: $.ASN1Encoder<FiveGCNotRestrictedSupport> = $._encodeBoolean;


/* eslint-enable */

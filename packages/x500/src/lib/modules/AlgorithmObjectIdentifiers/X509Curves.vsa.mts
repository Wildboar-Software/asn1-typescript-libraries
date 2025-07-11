/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary X509Curves
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X509Curves OBJECT IDENTIFIER ::= { secp192r1 | sect163k1 | sect163r2 | secp224r1 | sect233k1 |
 *                                    sect233r1 | secp256r1 | sect283k1 | sect283r1 | secp384r1 |
 *                                    sect409k1 | sect409r1 | secp521r1 | sect571k1 | sect571r1 }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type X509Curves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

let _cached_decoder_for_X509Curves: $.ASN1Decoder<X509Curves> | null = null;

export function _decode_X509Curves(el: _Element): OBJECT_IDENTIFIER {
    if (!_cached_decoder_for_X509Curves) {
        _cached_decoder_for_X509Curves = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_X509Curves(el);
}

let _cached_encoder_for_X509Curves: $.ASN1Encoder<X509Curves> | null = null;

export function _encode_X509Curves(
    value: X509Curves,
    elGetter: $.ASN1Encoder<X509Curves>
): _Element {
    if (!_cached_encoder_for_X509Curves) {
        _cached_encoder_for_X509Curves = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_X509Curves(value, elGetter);
}

/* eslint-enable */

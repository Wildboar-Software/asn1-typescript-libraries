/* eslint-disable */
import { ASN1Element as _Element } from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import {
    ScopeRestriction,
    _decode_ScopeRestriction,
    _encode_ScopeRestriction,
} from "../AuthenticationFramework/ScopeRestriction.ta.mjs";

/**
 * @summary ScopeRestrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScopeRestrictions  ::=  SEQUENCE OF ScopeRestriction
 * ```
 */
export type ScopeRestrictions = ScopeRestriction[]; // SequenceOfType

let _cached_decoder_for_ScopeRestrictions: $.ASN1Decoder<ScopeRestrictions> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopeRestrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScopeRestrictions} The decoded data structure.
 */
export function _decode_ScopeRestrictions(el: _Element): ScopeRestrictions {
    if (!_cached_decoder_for_ScopeRestrictions) {
        _cached_decoder_for_ScopeRestrictions =
            $._decodeSequenceOf<ScopeRestriction>(
                () => _decode_ScopeRestriction
            );
    }
    return _cached_decoder_for_ScopeRestrictions(el);
}

let _cached_encoder_for_ScopeRestrictions: $.ASN1Encoder<ScopeRestrictions> | null =
    null;

/**
 * @summary Encodes a(n) ScopeRestrictions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeRestrictions, encoded as an ASN.1 Element.
 */
export function _encode_ScopeRestrictions(value: ScopeRestrictions, elGetter: $.ASN1Encoder<ScopeRestrictions>): _Element) {
    if (!_cached_encoder_for_ScopeRestrictions) {
        _cached_encoder_for_ScopeRestrictions =
            $._encodeSequenceOf<ScopeRestriction>(
                () => _encode_ScopeRestriction,
                $.BER
            );
    }
    return _cached_encoder_for_ScopeRestrictions(value, elGetter);
}


/* eslint-enable */

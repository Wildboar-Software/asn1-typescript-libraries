/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ISO646String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary SchemeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeName  ::=  CHOICE {
 *   string   ISO646String,
 *   oid      OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type SchemeName =
    | { string_: ISO646String } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_SchemeName: $.ASN1Decoder<SchemeName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SchemeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeName} The decoded data structure.
 */
export function _decode_SchemeName(el: _Element) {
    if (!_cached_decoder_for_SchemeName) {
        _cached_decoder_for_SchemeName = $._decode_extensible_choice<SchemeName>(
            {
                'CONTEXT 0': ['string_', $._decodeISO646String],
                'CONTEXT 1': ['oid', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_SchemeName(el);
}


let _cached_encoder_for_SchemeName: $.ASN1Encoder<SchemeName> | null = null;


/**
 * @summary Encodes a(n) SchemeName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeName, encoded as an ASN.1 Element.
 */
export function _encode_SchemeName(
    value: SchemeName,
    elGetter: $.ASN1Encoder<SchemeName>
) {
    if (!_cached_encoder_for_SchemeName) {
        _cached_encoder_for_SchemeName = $._encode_choice<SchemeName>(
            {
                string_: $._encodeISO646String,
                oid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SchemeName(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    PrimaryBodyPart,
    _decode_PrimaryBodyPart,
    _encode_PrimaryBodyPart,
} from '../EDIMSInformationObjects/PrimaryBodyPart.ta.mjs';
/**
 * @summary PrimaryOrRemoved
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryOrRemoved  ::=  CHOICE {
 *   removed-edi-body   [0]  NULL,
 *   primary-body-part  [1] EXPLICIT PrimaryBodyPart
 * }
 * ```
 */
export type PrimaryOrRemoved =
    | { removed_edi_body: NULL } /* CHOICE_ALT_ROOT */
    | { primary_body_part: PrimaryBodyPart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PrimaryOrRemoved: $.ASN1Decoder<PrimaryOrRemoved> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryOrRemoved
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryOrRemoved} The decoded data structure.
 */
export function _decode_PrimaryOrRemoved(el: _Element) {
    if (!_cached_decoder_for_PrimaryOrRemoved) {
        _cached_decoder_for_PrimaryOrRemoved = $._decode_inextensible_choice<PrimaryOrRemoved>(
            {
                'CONTEXT 0': [
                    'removed_edi_body',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'primary_body_part',
                    $._decode_explicit<PrimaryBodyPart>(
                        () => _decode_PrimaryBodyPart
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PrimaryOrRemoved(el);
}

let _cached_encoder_for_PrimaryOrRemoved: $.ASN1Encoder<PrimaryOrRemoved> | null = null;

/**
 * @summary Encodes a(n) PrimaryOrRemoved into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryOrRemoved, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryOrRemoved(
    value: PrimaryOrRemoved,
    elGetter: $.ASN1Encoder<PrimaryOrRemoved>
) {
    if (!_cached_encoder_for_PrimaryOrRemoved) {
        _cached_encoder_for_PrimaryOrRemoved = $._encode_choice<PrimaryOrRemoved>(
            {
                removed_edi_body: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                primary_body_part: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_PrimaryBodyPart,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrimaryOrRemoved(value, elGetter);
}


/* eslint-enable */

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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    CirculationTime,
    _decode_CirculationTime,
    _encode_CirculationTime,
} from '../IPMSHeadingExtensions/CirculationTime.ta.mjs';
import {
    CirculationSignature,
    _decode_CirculationSignature,
    _encode_CirculationSignature,
} from '../IPMSHeadingExtensions/CirculationSignature.ta.mjs';
/**
 * @summary Checkmark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Checkmark  ::=  CHOICE {
 *   simple       NULL,
 *   timestamped  CirculationTime,
 *   signed       CirculationSignature
 * }
 * ```
 */
export type Checkmark =
    | { simple: NULL } /* CHOICE_ALT_ROOT */
    | { timestamped: CirculationTime } /* CHOICE_ALT_ROOT */
    | { signed: CirculationSignature } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Checkmark: $.ASN1Decoder<Checkmark> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Checkmark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Checkmark} The decoded data structure.
 */
export function _decode_Checkmark(el: _Element): Checkmark {
    if (!_cached_decoder_for_Checkmark) {
        _cached_decoder_for_Checkmark = $._decode_inextensible_choice<Checkmark>(
            {
                'UNIVERSAL 5': ['simple', $._decodeNull],
                'UNIVERSAL 24': ['timestamped', _decode_CirculationTime],
                'UNIVERSAL 16': ['signed', _decode_CirculationSignature],
            }
        );
    }
    return _cached_decoder_for_Checkmark(el);
}

let _cached_encoder_for_Checkmark: $.ASN1Encoder<Checkmark> | null = null;

/**
 * @summary Encodes a(n) Checkmark into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Checkmark, encoded as an ASN.1 Element.
 */
export function _encode_Checkmark(
    value: Checkmark,
    elGetter: $.ASN1Encoder<Checkmark>
): _Element {
    if (!_cached_encoder_for_Checkmark) {
        _cached_encoder_for_Checkmark = $._encode_choice<Checkmark>(
            {
                simple: $._encodeNull,
                timestamped: _encode_CirculationTime,
                signed: _encode_CirculationSignature,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Checkmark(value, elGetter);
}


/* eslint-enable */

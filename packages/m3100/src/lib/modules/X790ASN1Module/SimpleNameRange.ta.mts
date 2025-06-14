/* eslint-disable */
import {
    INTEGER,
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
    GraphicString64,
    _decode_GraphicString64,
    _encode_GraphicString64,
} from '../X790ASN1Module/GraphicString64.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SimpleNameRange */
/**
 * @summary SimpleNameRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleNameRange  ::=  CHOICE {number  INTEGER,
 *                             string  GraphicString64,
 *                             ...
 * }
 * ```
 */
export type SimpleNameRange =
    | { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: GraphicString64 } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SimpleNameRange */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleNameRange */
let _cached_decoder_for_SimpleNameRange: $.ASN1Decoder<SimpleNameRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleNameRange */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleNameRange */
/**
 * @summary Decodes an ASN.1 element into a(n) SimpleNameRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleNameRange} The decoded data structure.
 */
export function _decode_SimpleNameRange(el: _Element) {
    if (!_cached_decoder_for_SimpleNameRange) {
        _cached_decoder_for_SimpleNameRange = $._decode_extensible_choice<SimpleNameRange>(
            {
                'UNIVERSAL 2': ['number_', $._decodeInteger],
                'UNIVERSAL 25': ['string_', _decode_GraphicString64],
            }
        );
    }
    return _cached_decoder_for_SimpleNameRange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SimpleNameRange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleNameRange */
let _cached_encoder_for_SimpleNameRange: $.ASN1Encoder<SimpleNameRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleNameRange */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleNameRange */
/**
 * @summary Encodes a(n) SimpleNameRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleNameRange, encoded as an ASN.1 Element.
 */
export function _encode_SimpleNameRange(
    value: SimpleNameRange,
    elGetter: $.ASN1Encoder<SimpleNameRange>
) {
    if (!_cached_encoder_for_SimpleNameRange) {
        _cached_encoder_for_SimpleNameRange = $._encode_choice<SimpleNameRange>(
            {
                number_: $._encodeInteger,
                string_: _encode_GraphicString64,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SimpleNameRange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SimpleNameRange */

/* eslint-enable */

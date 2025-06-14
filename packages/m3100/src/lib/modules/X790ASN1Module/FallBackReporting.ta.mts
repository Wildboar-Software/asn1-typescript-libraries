/* eslint-disable */
import {
    NULL,
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION FallBackReporting */
/**
 * @summary FallBackReporting
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FallBackReporting  ::=  CHOICE {null       NULL,
 *                               reporting  GraphicString,
 *                               ...
 * }
 * ```
 */
export type FallBackReporting =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { reporting: GraphicString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION FallBackReporting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FallBackReporting */
let _cached_decoder_for_FallBackReporting: $.ASN1Decoder<FallBackReporting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FallBackReporting */

/* START_OF_SYMBOL_DEFINITION _decode_FallBackReporting */
/**
 * @summary Decodes an ASN.1 element into a(n) FallBackReporting
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FallBackReporting} The decoded data structure.
 */
export function _decode_FallBackReporting(el: _Element) {
    if (!_cached_decoder_for_FallBackReporting) {
        _cached_decoder_for_FallBackReporting = $._decode_extensible_choice<FallBackReporting>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 25': ['reporting', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_FallBackReporting(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FallBackReporting */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FallBackReporting */
let _cached_encoder_for_FallBackReporting: $.ASN1Encoder<FallBackReporting> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FallBackReporting */

/* START_OF_SYMBOL_DEFINITION _encode_FallBackReporting */
/**
 * @summary Encodes a(n) FallBackReporting into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FallBackReporting, encoded as an ASN.1 Element.
 */
export function _encode_FallBackReporting(
    value: FallBackReporting,
    elGetter: $.ASN1Encoder<FallBackReporting>
) {
    if (!_cached_encoder_for_FallBackReporting) {
        _cached_encoder_for_FallBackReporting = $._encode_choice<FallBackReporting>(
            {
                null_: $._encodeNull,
                reporting: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_FallBackReporting(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FallBackReporting */

/* eslint-enable */

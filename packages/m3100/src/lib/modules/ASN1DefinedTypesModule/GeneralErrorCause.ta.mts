/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION GeneralErrorCause */
/**
 * @summary GeneralErrorCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralErrorCause  ::=  CHOICE {
 *   globalValue  OBJECT IDENTIFIER,
 *   localValue   INTEGER
 * }
 * ```
 */
export type GeneralErrorCause =
    | { globalValue: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localValue: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION GeneralErrorCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralErrorCause */
let _cached_decoder_for_GeneralErrorCause: $.ASN1Decoder<GeneralErrorCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralErrorCause */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralErrorCause */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralErrorCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralErrorCause} The decoded data structure.
 */
export function _decode_GeneralErrorCause(el: _Element) {
    if (!_cached_decoder_for_GeneralErrorCause) {
        _cached_decoder_for_GeneralErrorCause = $._decode_inextensible_choice<GeneralErrorCause>(
            {
                'UNIVERSAL 6': ['globalValue', $._decodeObjectIdentifier],
                'UNIVERSAL 2': ['localValue', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_GeneralErrorCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralErrorCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralErrorCause */
let _cached_encoder_for_GeneralErrorCause: $.ASN1Encoder<GeneralErrorCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralErrorCause */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralErrorCause */
/**
 * @summary Encodes a(n) GeneralErrorCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralErrorCause, encoded as an ASN.1 Element.
 */
export function _encode_GeneralErrorCause(
    value: GeneralErrorCause,
    elGetter: $.ASN1Encoder<GeneralErrorCause>
) {
    if (!_cached_encoder_for_GeneralErrorCause) {
        _cached_encoder_for_GeneralErrorCause = $._encode_choice<GeneralErrorCause>(
            {
                globalValue: $._encodeObjectIdentifier,
                localValue: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_GeneralErrorCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralErrorCause */

/* eslint-enable */

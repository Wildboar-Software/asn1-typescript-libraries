/* eslint-disable */
import {
    INTEGER,
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


/**
 * @summary ResetLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResetLevel  ::=  CHOICE {completeReset  NULL,
 *                        partialReset   INTEGER
 * }
 * ```
 */
export type ResetLevel =
    | { completeReset: NULL } /* CHOICE_ALT_ROOT */
    | { partialReset: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ResetLevel: $.ASN1Decoder<ResetLevel> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ResetLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResetLevel} The decoded data structure.
 */
export function _decode_ResetLevel(el: _Element): ResetLevel {
    if (!_cached_decoder_for_ResetLevel) {
        _cached_decoder_for_ResetLevel = $._decode_inextensible_choice<ResetLevel>(
            {
                'UNIVERSAL 5': ['completeReset', $._decodeNull],
                'UNIVERSAL 2': ['partialReset', $._decodeInteger],
            }
        );
    }
    return _cached_decoder_for_ResetLevel(el);
}


let _cached_encoder_for_ResetLevel: $.ASN1Encoder<ResetLevel> | null = null;


/**
 * @summary Encodes a(n) ResetLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResetLevel, encoded as an ASN.1 Element.
 */
export function _encode_ResetLevel(
    value: ResetLevel,
    elGetter: $.ASN1Encoder<ResetLevel>
): _Element {
    if (!_cached_encoder_for_ResetLevel) {
        _cached_encoder_for_ResetLevel = $._encode_choice<ResetLevel>(
            {
                completeReset: $._encodeNull,
                partialReset: $._encodeInteger,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResetLevel(value, elGetter);
}


/* eslint-enable */

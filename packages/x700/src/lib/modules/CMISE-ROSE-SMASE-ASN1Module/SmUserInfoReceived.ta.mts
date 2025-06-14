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

/* START_OF_SYMBOL_DEFINITION SmUserInfoReceived */
/**
 * @summary SmUserInfoReceived
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SmUserInfoReceived  ::=  CHOICE {
 *   nothingReceived      NULL,
 *   informationReceived  GraphicString
 * }
 * ```
 */
export type SmUserInfoReceived =
    | { nothingReceived: NULL } /* CHOICE_ALT_ROOT */
    | { informationReceived: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SmUserInfoReceived */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SmUserInfoReceived */
let _cached_decoder_for_SmUserInfoReceived: $.ASN1Decoder<SmUserInfoReceived> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SmUserInfoReceived */

/* START_OF_SYMBOL_DEFINITION _decode_SmUserInfoReceived */
/**
 * @summary Decodes an ASN.1 element into a(n) SmUserInfoReceived
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SmUserInfoReceived} The decoded data structure.
 */
export function _decode_SmUserInfoReceived(el: _Element) {
    if (!_cached_decoder_for_SmUserInfoReceived) {
        _cached_decoder_for_SmUserInfoReceived = $._decode_inextensible_choice<SmUserInfoReceived>(
            {
                'UNIVERSAL 5': ['nothingReceived', $._decodeNull],
                'UNIVERSAL 25': ['informationReceived', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_SmUserInfoReceived(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SmUserInfoReceived */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SmUserInfoReceived */
let _cached_encoder_for_SmUserInfoReceived: $.ASN1Encoder<SmUserInfoReceived> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SmUserInfoReceived */

/* START_OF_SYMBOL_DEFINITION _encode_SmUserInfoReceived */
/**
 * @summary Encodes a(n) SmUserInfoReceived into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmUserInfoReceived, encoded as an ASN.1 Element.
 */
export function _encode_SmUserInfoReceived(
    value: SmUserInfoReceived,
    elGetter: $.ASN1Encoder<SmUserInfoReceived>
) {
    if (!_cached_encoder_for_SmUserInfoReceived) {
        _cached_encoder_for_SmUserInfoReceived = $._encode_choice<SmUserInfoReceived>(
            {
                nothingReceived: $._encodeNull,
                informationReceived: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SmUserInfoReceived(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SmUserInfoReceived */

/* eslint-enable */

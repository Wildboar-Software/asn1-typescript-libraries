/* eslint-disable */
import {
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
    DisconnectResult_Item,
    _decode_DisconnectResult_Item,
    _encode_DisconnectResult_Item,
} from '../ASN1DefinedTypesModule/DisconnectResult-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DisconnectResult */
/**
 * @summary DisconnectResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisconnectResult  ::=
 *   SEQUENCE OF CHOICE {failed        Failed,
 *                       disconnected  ObjectInstance}
 * ```
 */
export type DisconnectResult = DisconnectResult_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DisconnectResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DisconnectResult */
let _cached_decoder_for_DisconnectResult: $.ASN1Decoder<DisconnectResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DisconnectResult */

/* START_OF_SYMBOL_DEFINITION _decode_DisconnectResult */
/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisconnectResult} The decoded data structure.
 */
export function _decode_DisconnectResult(el: _Element) {
    if (!_cached_decoder_for_DisconnectResult) {
        _cached_decoder_for_DisconnectResult = $._decodeSequenceOf<DisconnectResult_Item>(
            () => _decode_DisconnectResult_Item
        );
    }
    return _cached_decoder_for_DisconnectResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DisconnectResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DisconnectResult */
let _cached_encoder_for_DisconnectResult: $.ASN1Encoder<DisconnectResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DisconnectResult */

/* START_OF_SYMBOL_DEFINITION _encode_DisconnectResult */
/**
 * @summary Encodes a(n) DisconnectResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectResult, encoded as an ASN.1 Element.
 */
export function _encode_DisconnectResult(
    value: DisconnectResult,
    elGetter: $.ASN1Encoder<DisconnectResult>
) {
    if (!_cached_encoder_for_DisconnectResult) {
        _cached_encoder_for_DisconnectResult = $._encodeSequenceOf<DisconnectResult_Item>(
            () => _encode_DisconnectResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_DisconnectResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DisconnectResult */

/* eslint-enable */

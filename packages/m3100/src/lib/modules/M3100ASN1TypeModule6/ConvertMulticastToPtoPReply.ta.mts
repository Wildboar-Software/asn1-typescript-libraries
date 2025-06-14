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
    ConvertMulticastToPtoPReply_Item,
    _decode_ConvertMulticastToPtoPReply_Item,
    _encode_ConvertMulticastToPtoPReply_Item,
} from '../M3100ASN1TypeModule6/ConvertMulticastToPtoPReply-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply */
/**
 * @summary ConvertMulticastToPtoPReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertMulticastToPtoPReply  ::=
 *   SEQUENCE OF CHOICE {failed   Failed,
 *                       success  ObjectInstance}
 * ```
 */
export type ConvertMulticastToPtoPReply = ConvertMulticastToPtoPReply_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply */
let _cached_decoder_for_ConvertMulticastToPtoPReply: $.ASN1Decoder<ConvertMulticastToPtoPReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertMulticastToPtoPReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertMulticastToPtoPReply} The decoded data structure.
 */
export function _decode_ConvertMulticastToPtoPReply(el: _Element) {
    if (!_cached_decoder_for_ConvertMulticastToPtoPReply) {
        _cached_decoder_for_ConvertMulticastToPtoPReply = $._decodeSequenceOf<ConvertMulticastToPtoPReply_Item>(
            () => _decode_ConvertMulticastToPtoPReply_Item
        );
    }
    return _cached_decoder_for_ConvertMulticastToPtoPReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply */
let _cached_encoder_for_ConvertMulticastToPtoPReply: $.ASN1Encoder<ConvertMulticastToPtoPReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply */
/**
 * @summary Encodes a(n) ConvertMulticastToPtoPReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertMulticastToPtoPReply, encoded as an ASN.1 Element.
 */
export function _encode_ConvertMulticastToPtoPReply(
    value: ConvertMulticastToPtoPReply,
    elGetter: $.ASN1Encoder<ConvertMulticastToPtoPReply>
) {
    if (!_cached_encoder_for_ConvertMulticastToPtoPReply) {
        _cached_encoder_for_ConvertMulticastToPtoPReply = $._encodeSequenceOf<ConvertMulticastToPtoPReply_Item>(
            () => _encode_ConvertMulticastToPtoPReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertMulticastToPtoPReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply */

/* eslint-enable */

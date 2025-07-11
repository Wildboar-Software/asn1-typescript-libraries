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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ConvertPtoPToMulticastReply_Item,
    _decode_ConvertPtoPToMulticastReply_Item,
    _encode_ConvertPtoPToMulticastReply_Item,
} from '../M3100ASN1TypeModule6/ConvertPtoPToMulticastReply-Item.ta.mjs';

/**
 * @summary ConvertPtoPToMulticastReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastReply  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             success  [1]  SEQUENCE {mpXC  ObjectInstance,
 *                                     xC    ObjectInstance}}
 * ```
 */
export type ConvertPtoPToMulticastReply = ConvertPtoPToMulticastReply_Item[]; // SequenceOfType


let _cached_decoder_for_ConvertPtoPToMulticastReply: $.ASN1Decoder<ConvertPtoPToMulticastReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastReply} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastReply(el: _Element): ConvertPtoPToMulticastReply {
    if (!_cached_decoder_for_ConvertPtoPToMulticastReply) {
        _cached_decoder_for_ConvertPtoPToMulticastReply = $._decodeSequenceOf<ConvertPtoPToMulticastReply_Item>(
            () => _decode_ConvertPtoPToMulticastReply_Item
        );
    }
    return _cached_decoder_for_ConvertPtoPToMulticastReply(el);
}


let _cached_encoder_for_ConvertPtoPToMulticastReply: $.ASN1Encoder<ConvertPtoPToMulticastReply> | null = null;


/**
 * @summary Encodes a(n) ConvertPtoPToMulticastReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastReply, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastReply(
    value: ConvertPtoPToMulticastReply,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply>
): _Element {
    if (!_cached_encoder_for_ConvertPtoPToMulticastReply) {
        _cached_encoder_for_ConvertPtoPToMulticastReply = $._encodeSequenceOf<ConvertPtoPToMulticastReply_Item>(
            () => _encode_ConvertPtoPToMulticastReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertPtoPToMulticastReply(value, elGetter);
}


/* eslint-enable */

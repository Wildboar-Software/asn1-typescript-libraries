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
    SplitXCReply_Item,
    _decode_SplitXCReply_Item,
    _encode_SplitXCReply_Item,
} from '../M3100ASN1TypeModule6/SplitXCReply-Item.ta.mjs';

/**
 * @summary SplitXCReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCReply  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   Failed,
 *             success  CoincidentUnidirectionalConnections}
 * ```
 */
export type SplitXCReply = SplitXCReply_Item[]; // SequenceOfType


let _cached_decoder_for_SplitXCReply: $.ASN1Decoder<SplitXCReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCReply} The decoded data structure.
 */
export function _decode_SplitXCReply(el: _Element) {
    if (!_cached_decoder_for_SplitXCReply) {
        _cached_decoder_for_SplitXCReply = $._decodeSequenceOf<SplitXCReply_Item>(
            () => _decode_SplitXCReply_Item
        );
    }
    return _cached_decoder_for_SplitXCReply(el);
}


let _cached_encoder_for_SplitXCReply: $.ASN1Encoder<SplitXCReply> | null = null;


/**
 * @summary Encodes a(n) SplitXCReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCReply, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCReply(
    value: SplitXCReply,
    elGetter: $.ASN1Encoder<SplitXCReply>
) {
    if (!_cached_encoder_for_SplitXCReply) {
        _cached_encoder_for_SplitXCReply = $._encodeSequenceOf<SplitXCReply_Item>(
            () => _encode_SplitXCReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SplitXCReply(value, elGetter);
}


/* eslint-enable */

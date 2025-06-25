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
    BridgeRollReply_Item,
    _decode_BridgeRollReply_Item,
    _encode_BridgeRollReply_Item,
} from '../M3100ASN1TypeModule5/BridgeRollReply-Item.ta.mjs';

/**
 * @summary BridgeRollReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollReply  ::=
 *   SEQUENCE OF
 *     CHOICE {bridgeFailed      [0]  Failed,
 *             bridgeRollResult  [1]  PointerOrNull}
 * ```
 */
export type BridgeRollReply = BridgeRollReply_Item[]; // SequenceOfType


let _cached_decoder_for_BridgeRollReply: $.ASN1Decoder<BridgeRollReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollReply} The decoded data structure.
 */
export function _decode_BridgeRollReply(el: _Element): BridgeRollReply {
    if (!_cached_decoder_for_BridgeRollReply) {
        _cached_decoder_for_BridgeRollReply = $._decodeSequenceOf<BridgeRollReply_Item>(
            () => _decode_BridgeRollReply_Item
        );
    }
    return _cached_decoder_for_BridgeRollReply(el);
}


let _cached_encoder_for_BridgeRollReply: $.ASN1Encoder<BridgeRollReply> | null = null;


/**
 * @summary Encodes a(n) BridgeRollReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollReply, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollReply(
    value: BridgeRollReply,
    elGetter: $.ASN1Encoder<BridgeRollReply>
): _Element {
    if (!_cached_encoder_for_BridgeRollReply) {
        _cached_encoder_for_BridgeRollReply = $._encodeSequenceOf<BridgeRollReply_Item>(
            () => _encode_BridgeRollReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BridgeRollReply(value, elGetter);
}


/* eslint-enable */

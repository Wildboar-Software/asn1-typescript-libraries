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
    MultipleConnections_Item,
    _decode_MultipleConnections_Item,
    _encode_MultipleConnections_Item,
} from '../ASN1DefinedTypesModule/MultipleConnections-Item.ta.mjs';

/**
 * @summary MultipleConnections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleConnections  ::=
 *   SET OF
 *     CHOICE {downstreamNotConnected  [0]  ObjectInstance,
 *             downstreamConnected     [1]  ObjectInstance,
 *             upstreamNotConnected    [2]  ObjectInstance,
 *             upstreamConnected       [3]  ObjectInstance}
 * ```
 */
export type MultipleConnections = MultipleConnections_Item[]; // SetOfType


let _cached_decoder_for_MultipleConnections: $.ASN1Decoder<MultipleConnections> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MultipleConnections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleConnections} The decoded data structure.
 */
export function _decode_MultipleConnections(el: _Element): MultipleConnections {
    if (!_cached_decoder_for_MultipleConnections) {
        _cached_decoder_for_MultipleConnections = $._decodeSetOf<MultipleConnections_Item>(
            () => _decode_MultipleConnections_Item
        );
    }
    return _cached_decoder_for_MultipleConnections(el);
}


let _cached_encoder_for_MultipleConnections: $.ASN1Encoder<MultipleConnections> | null = null;


/**
 * @summary Encodes a(n) MultipleConnections into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleConnections, encoded as an ASN.1 Element.
 */
export function _encode_MultipleConnections(
    value: MultipleConnections,
    elGetter: $.ASN1Encoder<MultipleConnections>
): _Element {
    if (!_cached_encoder_for_MultipleConnections) {
        _cached_encoder_for_MultipleConnections = $._encodeSetOf<MultipleConnections_Item>(
            () => _encode_MultipleConnections_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleConnections(value, elGetter);
}


/* eslint-enable */

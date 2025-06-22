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
    ActivityDuration_Item,
    _decode_ActivityDuration_Item,
    _encode_ActivityDuration_Item,
} from '../X790ASN1Module/ActivityDuration-Item.ta.mjs';

/**
 * @summary ActivityDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityDuration  ::=
 *   SET OF
 *     SEQUENCE {duration  [0]  TimeInterval,
 *               billable  [1]  BOOLEAN DEFAULT TRUE, -- OPTIONAL,
 *               type      [2]  ActivityType OPTIONAL,
 *               ...}
 * ```
 */
export type ActivityDuration = ActivityDuration_Item[]; // SetOfType


let _cached_decoder_for_ActivityDuration: $.ASN1Decoder<ActivityDuration> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActivityDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityDuration} The decoded data structure.
 */
export function _decode_ActivityDuration(el: _Element) {
    if (!_cached_decoder_for_ActivityDuration) {
        _cached_decoder_for_ActivityDuration = $._decodeSetOf<ActivityDuration_Item>(
            () => _decode_ActivityDuration_Item
        );
    }
    return _cached_decoder_for_ActivityDuration(el);
}


let _cached_encoder_for_ActivityDuration: $.ASN1Encoder<ActivityDuration> | null = null;


/**
 * @summary Encodes a(n) ActivityDuration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityDuration, encoded as an ASN.1 Element.
 */
export function _encode_ActivityDuration(
    value: ActivityDuration,
    elGetter: $.ASN1Encoder<ActivityDuration>
) {
    if (!_cached_encoder_for_ActivityDuration) {
        _cached_encoder_for_ActivityDuration = $._encodeSetOf<ActivityDuration_Item>(
            () => _encode_ActivityDuration_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ActivityDuration(value, elGetter);
}


/* eslint-enable */

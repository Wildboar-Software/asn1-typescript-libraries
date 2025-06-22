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
import * as $ from '@wildboar/asn1/functional';
import {
    RevertInfo_Item,
    _decode_RevertInfo_Item,
    _encode_RevertInfo_Item,
} from '../SWMF/RevertInfo-Item.ta.mjs';
/**
 * @summary RevertInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertInfo  ::=
 *   SEQUENCE OF
 *     CHOICE {patchId       GraphicString, -- system specific identifier
 *             patchPointer  ObjectInstance}
 * ```
 */
export type RevertInfo = RevertInfo_Item[]; // SequenceOfType

let _cached_decoder_for_RevertInfo: $.ASN1Decoder<RevertInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevertInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertInfo} The decoded data structure.
 */
export function _decode_RevertInfo(el: _Element) {
    if (!_cached_decoder_for_RevertInfo) {
        _cached_decoder_for_RevertInfo = $._decodeSequenceOf<RevertInfo_Item>(
            () => _decode_RevertInfo_Item
        );
    }
    return _cached_decoder_for_RevertInfo(el);
}

let _cached_encoder_for_RevertInfo: $.ASN1Encoder<RevertInfo> | null = null;

/**
 * @summary Encodes a(n) RevertInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertInfo, encoded as an ASN.1 Element.
 */
export function _encode_RevertInfo(
    value: RevertInfo,
    elGetter: $.ASN1Encoder<RevertInfo>
) {
    if (!_cached_encoder_for_RevertInfo) {
        _cached_encoder_for_RevertInfo = $._encodeSequenceOf<RevertInfo_Item>(
            () => _encode_RevertInfo_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RevertInfo(value, elGetter);
}


/* eslint-enable */

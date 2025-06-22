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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/**
 * @summary TimeAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAttributeIdentifier  ::=  AttributeId
 * ```
 */
export type TimeAttributeIdentifier = AttributeId; // DefinedType

let _cached_decoder_for_TimeAttributeIdentifier: $.ASN1Decoder<TimeAttributeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeAttributeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeAttributeIdentifier} The decoded data structure.
 */
export function _decode_TimeAttributeIdentifier(el: _Element) {
    if (!_cached_decoder_for_TimeAttributeIdentifier) {
        _cached_decoder_for_TimeAttributeIdentifier = _decode_AttributeId;
    }
    return _cached_decoder_for_TimeAttributeIdentifier(el);
}

let _cached_encoder_for_TimeAttributeIdentifier: $.ASN1Encoder<TimeAttributeIdentifier> | null = null;

/**
 * @summary Encodes a(n) TimeAttributeIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeAttributeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_TimeAttributeIdentifier(
    value: TimeAttributeIdentifier,
    elGetter: $.ASN1Encoder<TimeAttributeIdentifier>
) {
    if (!_cached_encoder_for_TimeAttributeIdentifier) {
        _cached_encoder_for_TimeAttributeIdentifier = _encode_AttributeId;
    }
    return _cached_encoder_for_TimeAttributeIdentifier(value, elGetter);
}


/* eslint-enable */

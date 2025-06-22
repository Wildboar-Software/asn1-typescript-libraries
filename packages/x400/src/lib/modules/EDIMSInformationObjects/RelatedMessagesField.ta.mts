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
    RelatedMessageReference,
    _decode_RelatedMessageReference,
    _encode_RelatedMessageReference,
} from '../EDIMSInformationObjects/RelatedMessageReference.ta.mjs';
/**
 * @summary RelatedMessagesField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedMessagesField  ::=  SEQUENCE OF RelatedMessageReference
 * ```
 */
export type RelatedMessagesField = RelatedMessageReference[]; // SequenceOfType

let _cached_decoder_for_RelatedMessagesField: $.ASN1Decoder<RelatedMessagesField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedMessagesField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedMessagesField} The decoded data structure.
 */
export function _decode_RelatedMessagesField(el: _Element) {
    if (!_cached_decoder_for_RelatedMessagesField) {
        _cached_decoder_for_RelatedMessagesField = $._decodeSequenceOf<RelatedMessageReference>(
            () => _decode_RelatedMessageReference
        );
    }
    return _cached_decoder_for_RelatedMessagesField(el);
}

let _cached_encoder_for_RelatedMessagesField: $.ASN1Encoder<RelatedMessagesField> | null = null;

/**
 * @summary Encodes a(n) RelatedMessagesField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedMessagesField, encoded as an ASN.1 Element.
 */
export function _encode_RelatedMessagesField(
    value: RelatedMessagesField,
    elGetter: $.ASN1Encoder<RelatedMessagesField>
) {
    if (!_cached_encoder_for_RelatedMessagesField) {
        _cached_encoder_for_RelatedMessagesField = $._encodeSequenceOf<RelatedMessageReference>(
            () => _encode_RelatedMessageReference,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedMessagesField(value, elGetter);
}


/* eslint-enable */

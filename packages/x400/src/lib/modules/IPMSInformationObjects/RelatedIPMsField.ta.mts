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
    RelatedIPMsSubfield,
    _decode_RelatedIPMsSubfield,
    _encode_RelatedIPMsSubfield,
} from '../IPMSInformationObjects/RelatedIPMsSubfield.ta.mjs';
/**
 * @summary RelatedIPMsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedIPMsField  ::=  SEQUENCE OF RelatedIPMsSubfield
 * ```
 */
export type RelatedIPMsField = RelatedIPMsSubfield[]; // SequenceOfType

let _cached_decoder_for_RelatedIPMsField: $.ASN1Decoder<RelatedIPMsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedIPMsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedIPMsField} The decoded data structure.
 */
export function _decode_RelatedIPMsField(el: _Element) {
    if (!_cached_decoder_for_RelatedIPMsField) {
        _cached_decoder_for_RelatedIPMsField = $._decodeSequenceOf<RelatedIPMsSubfield>(
            () => _decode_RelatedIPMsSubfield
        );
    }
    return _cached_decoder_for_RelatedIPMsField(el);
}

let _cached_encoder_for_RelatedIPMsField: $.ASN1Encoder<RelatedIPMsField> | null = null;

/**
 * @summary Encodes a(n) RelatedIPMsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedIPMsField, encoded as an ASN.1 Element.
 */
export function _encode_RelatedIPMsField(
    value: RelatedIPMsField,
    elGetter: $.ASN1Encoder<RelatedIPMsField>
) {
    if (!_cached_encoder_for_RelatedIPMsField) {
        _cached_encoder_for_RelatedIPMsField = $._encodeSequenceOf<RelatedIPMsSubfield>(
            () => _encode_RelatedIPMsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedIPMsField(value, elGetter);
}


/* eslint-enable */

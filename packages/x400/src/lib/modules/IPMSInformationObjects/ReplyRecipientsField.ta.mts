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
    ReplyRecipientsSubfield,
    _decode_ReplyRecipientsSubfield,
    _encode_ReplyRecipientsSubfield,
} from '../IPMSInformationObjects/ReplyRecipientsSubfield.ta.mjs';
/**
 * @summary ReplyRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyRecipientsField  ::=  SEQUENCE OF ReplyRecipientsSubfield
 * ```
 */
export type ReplyRecipientsField = ReplyRecipientsSubfield[]; // SequenceOfType

let _cached_decoder_for_ReplyRecipientsField: $.ASN1Decoder<ReplyRecipientsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyRecipientsField} The decoded data structure.
 */
export function _decode_ReplyRecipientsField(el: _Element) {
    if (!_cached_decoder_for_ReplyRecipientsField) {
        _cached_decoder_for_ReplyRecipientsField = $._decodeSequenceOf<ReplyRecipientsSubfield>(
            () => _decode_ReplyRecipientsSubfield
        );
    }
    return _cached_decoder_for_ReplyRecipientsField(el);
}

let _cached_encoder_for_ReplyRecipientsField: $.ASN1Encoder<ReplyRecipientsField> | null = null;

/**
 * @summary Encodes a(n) ReplyRecipientsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_ReplyRecipientsField(
    value: ReplyRecipientsField,
    elGetter: $.ASN1Encoder<ReplyRecipientsField>
) {
    if (!_cached_encoder_for_ReplyRecipientsField) {
        _cached_encoder_for_ReplyRecipientsField = $._encodeSequenceOf<ReplyRecipientsSubfield>(
            () => _encode_ReplyRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_ReplyRecipientsField(value, elGetter);
}


/* eslint-enable */

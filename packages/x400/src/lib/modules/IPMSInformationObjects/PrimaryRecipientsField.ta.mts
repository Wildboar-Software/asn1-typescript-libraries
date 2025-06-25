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
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';
/**
 * @summary PrimaryRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryRecipientsField  ::=  SEQUENCE OF PrimaryRecipientsSubfield
 * ```
 */
export type PrimaryRecipientsField = PrimaryRecipientsSubfield[]; // SequenceOfType

let _cached_decoder_for_PrimaryRecipientsField: $.ASN1Decoder<PrimaryRecipientsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryRecipientsField} The decoded data structure.
 */
export function _decode_PrimaryRecipientsField(el: _Element): PrimaryRecipientsField {
    if (!_cached_decoder_for_PrimaryRecipientsField) {
        _cached_decoder_for_PrimaryRecipientsField = $._decodeSequenceOf<PrimaryRecipientsSubfield>(
            () => _decode_PrimaryRecipientsSubfield
        );
    }
    return _cached_decoder_for_PrimaryRecipientsField(el);
}

let _cached_encoder_for_PrimaryRecipientsField: $.ASN1Encoder<PrimaryRecipientsField> | null = null;

/**
 * @summary Encodes a(n) PrimaryRecipientsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryRecipientsField(
    value: PrimaryRecipientsField,
    elGetter: $.ASN1Encoder<PrimaryRecipientsField>
): _Element {
    if (!_cached_encoder_for_PrimaryRecipientsField) {
        _cached_encoder_for_PrimaryRecipientsField = $._encodeSequenceOf<PrimaryRecipientsSubfield>(
            () => _encode_PrimaryRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_PrimaryRecipientsField(value, elGetter);
}


/* eslint-enable */

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
    BlindCopyRecipientsSubfield,
    _decode_BlindCopyRecipientsSubfield,
    _encode_BlindCopyRecipientsSubfield,
} from '../IPMSInformationObjects/BlindCopyRecipientsSubfield.ta.mjs';
/**
 * @summary BlindCopyRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BlindCopyRecipientsField  ::=  SEQUENCE OF BlindCopyRecipientsSubfield
 * ```
 */
export type BlindCopyRecipientsField = BlindCopyRecipientsSubfield[]; // SequenceOfType

let _cached_decoder_for_BlindCopyRecipientsField: $.ASN1Decoder<BlindCopyRecipientsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlindCopyRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BlindCopyRecipientsField} The decoded data structure.
 */
export function _decode_BlindCopyRecipientsField(el: _Element) {
    if (!_cached_decoder_for_BlindCopyRecipientsField) {
        _cached_decoder_for_BlindCopyRecipientsField = $._decodeSequenceOf<BlindCopyRecipientsSubfield>(
            () => _decode_BlindCopyRecipientsSubfield
        );
    }
    return _cached_decoder_for_BlindCopyRecipientsField(el);
}

let _cached_encoder_for_BlindCopyRecipientsField: $.ASN1Encoder<BlindCopyRecipientsField> | null = null;

/**
 * @summary Encodes a(n) BlindCopyRecipientsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlindCopyRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_BlindCopyRecipientsField(
    value: BlindCopyRecipientsField,
    elGetter: $.ASN1Encoder<BlindCopyRecipientsField>
) {
    if (!_cached_encoder_for_BlindCopyRecipientsField) {
        _cached_encoder_for_BlindCopyRecipientsField = $._encodeSequenceOf<BlindCopyRecipientsSubfield>(
            () => _encode_BlindCopyRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_BlindCopyRecipientsField(value, elGetter);
}


/* eslint-enable */

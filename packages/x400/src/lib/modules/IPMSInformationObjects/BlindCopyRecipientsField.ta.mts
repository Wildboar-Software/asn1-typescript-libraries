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
    BlindCopyRecipientsSubfield,
    _decode_BlindCopyRecipientsSubfield,
    _encode_BlindCopyRecipientsSubfield,
} from '../IPMSInformationObjects/BlindCopyRecipientsSubfield.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BlindCopyRecipientsField */
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
/* END_OF_SYMBOL_DEFINITION BlindCopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BlindCopyRecipientsField */
let _cached_decoder_for_BlindCopyRecipientsField: $.ASN1Decoder<BlindCopyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BlindCopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _decode_BlindCopyRecipientsField */
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
/* END_OF_SYMBOL_DEFINITION _decode_BlindCopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BlindCopyRecipientsField */
let _cached_encoder_for_BlindCopyRecipientsField: $.ASN1Encoder<BlindCopyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BlindCopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _encode_BlindCopyRecipientsField */
/**
 * @summary Encodes a(n) BlindCopyRecipientsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_BlindCopyRecipientsField */

/* eslint-enable */

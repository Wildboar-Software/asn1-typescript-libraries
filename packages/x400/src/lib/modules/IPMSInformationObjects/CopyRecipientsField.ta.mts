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
    CopyRecipientsSubfield,
    _decode_CopyRecipientsSubfield,
    _encode_CopyRecipientsSubfield,
} from '../IPMSInformationObjects/CopyRecipientsSubfield.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CopyRecipientsField */
/**
 * @summary CopyRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CopyRecipientsField  ::=  SEQUENCE OF CopyRecipientsSubfield
 * ```
 */
export type CopyRecipientsField = CopyRecipientsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CopyRecipientsField */
let _cached_decoder_for_CopyRecipientsField: $.ASN1Decoder<CopyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _decode_CopyRecipientsField */
/**
 * @summary Decodes an ASN.1 element into a(n) CopyRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CopyRecipientsField} The decoded data structure.
 */
export function _decode_CopyRecipientsField(el: _Element) {
    if (!_cached_decoder_for_CopyRecipientsField) {
        _cached_decoder_for_CopyRecipientsField = $._decodeSequenceOf<CopyRecipientsSubfield>(
            () => _decode_CopyRecipientsSubfield
        );
    }
    return _cached_decoder_for_CopyRecipientsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CopyRecipientsField */
let _cached_encoder_for_CopyRecipientsField: $.ASN1Encoder<CopyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CopyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _encode_CopyRecipientsField */
/**
 * @summary Encodes a(n) CopyRecipientsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CopyRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_CopyRecipientsField(
    value: CopyRecipientsField,
    elGetter: $.ASN1Encoder<CopyRecipientsField>
) {
    if (!_cached_encoder_for_CopyRecipientsField) {
        _cached_encoder_for_CopyRecipientsField = $._encodeSequenceOf<CopyRecipientsSubfield>(
            () => _encode_CopyRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_CopyRecipientsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CopyRecipientsField */

/* eslint-enable */

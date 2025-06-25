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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
/**
 * @summary TransferRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferRecipientField  ::=  MTAName
 * ```
 */
export type TransferRecipientField = MTAName; // DefinedType

let _cached_decoder_for_TransferRecipientField: $.ASN1Decoder<TransferRecipientField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferRecipientField} The decoded data structure.
 */
export function _decode_TransferRecipientField(el: _Element): TransferRecipientField {
    if (!_cached_decoder_for_TransferRecipientField) {
        _cached_decoder_for_TransferRecipientField = _decode_MTAName;
    }
    return _cached_decoder_for_TransferRecipientField(el);
}

let _cached_encoder_for_TransferRecipientField: $.ASN1Encoder<TransferRecipientField> | null = null;

/**
 * @summary Encodes a(n) TransferRecipientField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_TransferRecipientField(
    value: TransferRecipientField,
    elGetter: $.ASN1Encoder<TransferRecipientField>
): _Element {
    if (!_cached_encoder_for_TransferRecipientField) {
        _cached_encoder_for_TransferRecipientField = _encode_MTAName;
    }
    return _cached_encoder_for_TransferRecipientField(value, elGetter);
}


/* eslint-enable */

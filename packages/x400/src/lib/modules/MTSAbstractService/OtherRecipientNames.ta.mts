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
    OtherRecipientName,
    _decode_OtherRecipientName,
    _encode_OtherRecipientName,
} from '../MTSAbstractService/OtherRecipientName.ta.mjs';
/**
 * @summary OtherRecipientNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRecipientNames  ::=  SEQUENCE SIZE (1..ub-recipients) OF OtherRecipientName
 * ```
 */
export type OtherRecipientNames = OtherRecipientName[]; // SequenceOfType

let _cached_decoder_for_OtherRecipientNames: $.ASN1Decoder<OtherRecipientNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRecipientNames} The decoded data structure.
 */
export function _decode_OtherRecipientNames(el: _Element) {
    if (!_cached_decoder_for_OtherRecipientNames) {
        _cached_decoder_for_OtherRecipientNames = $._decodeSequenceOf<OtherRecipientName>(
            () => _decode_OtherRecipientName
        );
    }
    return _cached_decoder_for_OtherRecipientNames(el);
}

let _cached_encoder_for_OtherRecipientNames: $.ASN1Encoder<OtherRecipientNames> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientNames, encoded as an ASN.1 Element.
 */
export function _encode_OtherRecipientNames(
    value: OtherRecipientNames,
    elGetter: $.ASN1Encoder<OtherRecipientNames>
) {
    if (!_cached_encoder_for_OtherRecipientNames) {
        _cached_encoder_for_OtherRecipientNames = $._encodeSequenceOf<OtherRecipientName>(
            () => _encode_OtherRecipientName,
            $.BER
        );
    }
    return _cached_encoder_for_OtherRecipientNames(value, elGetter);
}


/* eslint-enable */

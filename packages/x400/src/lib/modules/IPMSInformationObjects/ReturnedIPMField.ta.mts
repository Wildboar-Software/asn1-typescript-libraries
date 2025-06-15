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
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';
/**
 * @summary ReturnedIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnedIPMField  ::=  IPM
 * ```
 */
export type ReturnedIPMField = IPM; // DefinedType

let _cached_decoder_for_ReturnedIPMField: $.ASN1Decoder<ReturnedIPMField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnedIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnedIPMField} The decoded data structure.
 */
export function _decode_ReturnedIPMField(el: _Element) {
    if (!_cached_decoder_for_ReturnedIPMField) {
        _cached_decoder_for_ReturnedIPMField = _decode_IPM;
    }
    return _cached_decoder_for_ReturnedIPMField(el);
}

let _cached_encoder_for_ReturnedIPMField: $.ASN1Encoder<ReturnedIPMField> | null = null;

/**
 * @summary Encodes a(n) ReturnedIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnedIPMField, encoded as an ASN.1 Element.
 */
export function _encode_ReturnedIPMField(
    value: ReturnedIPMField,
    elGetter: $.ASN1Encoder<ReturnedIPMField>
) {
    if (!_cached_encoder_for_ReturnedIPMField) {
        _cached_encoder_for_ReturnedIPMField = _encode_IPM;
    }
    return _cached_encoder_for_ReturnedIPMField(value, elGetter);
}


/* eslint-enable */

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
    NNExtensionsSubField,
    _decode_NNExtensionsSubField,
    _encode_NNExtensionsSubField,
} from '../EDIMSInformationObjects/NNExtensionsSubField.ta.mjs';
/**
 * @summary NNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNExtensionsField  ::=  SET OF NNExtensionsSubField
 * ```
 */
export type NNExtensionsField = NNExtensionsSubField[]; // SetOfType

let _cached_decoder_for_NNExtensionsField: $.ASN1Decoder<NNExtensionsField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNExtensionsField} The decoded data structure.
 */
export function _decode_NNExtensionsField(el: _Element): NNExtensionsField {
    if (!_cached_decoder_for_NNExtensionsField) {
        _cached_decoder_for_NNExtensionsField = $._decodeSetOf<NNExtensionsSubField>(
            () => _decode_NNExtensionsSubField
        );
    }
    return _cached_decoder_for_NNExtensionsField(el);
}

let _cached_encoder_for_NNExtensionsField: $.ASN1Encoder<NNExtensionsField> | null = null;

/**
 * @summary Encodes a(n) NNExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NNExtensionsField(
    value: NNExtensionsField,
    elGetter: $.ASN1Encoder<NNExtensionsField>
): _Element {
    if (!_cached_encoder_for_NNExtensionsField) {
        _cached_encoder_for_NNExtensionsField = $._encodeSetOf<NNExtensionsSubField>(
            () => _encode_NNExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_NNExtensionsField(value, elGetter);
}


/* eslint-enable */

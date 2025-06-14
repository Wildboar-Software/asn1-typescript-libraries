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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NRNExtensionsField */
/**
 * @summary NRNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NRNExtensionsField  ::=  SET OF IPMSExtension{{NRNExtensions}}
 * ```
 */
export type NRNExtensionsField = IPMSExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NRNExtensionsField */
let _cached_decoder_for_NRNExtensionsField: $.ASN1Decoder<NRNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_NRNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) NRNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NRNExtensionsField} The decoded data structure.
 */
export function _decode_NRNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_NRNExtensionsField) {
        _cached_decoder_for_NRNExtensionsField = $._decodeSetOf<IPMSExtension>(
            () => _decode_IPMSExtension
        );
    }
    return _cached_decoder_for_NRNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NRNExtensionsField */
let _cached_encoder_for_NRNExtensionsField: $.ASN1Encoder<NRNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NRNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_NRNExtensionsField */
/**
 * @summary Encodes a(n) NRNExtensionsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NRNExtensionsField(
    value: NRNExtensionsField,
    elGetter: $.ASN1Encoder<NRNExtensionsField>
) {
    if (!_cached_encoder_for_NRNExtensionsField) {
        _cached_encoder_for_NRNExtensionsField = $._encodeSetOf<IPMSExtension>(
            () => _encode_IPMSExtension,
            $.BER
        );
    }
    return _cached_encoder_for_NRNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NRNExtensionsField */

/* eslint-enable */

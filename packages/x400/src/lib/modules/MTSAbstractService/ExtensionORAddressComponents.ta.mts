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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.mjs';
/**
 * @summary ExtensionORAddressComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionORAddressComponents  ::=  PDSParameter
 * ```
 */
export type ExtensionORAddressComponents = PDSParameter; // DefinedType

let _cached_decoder_for_ExtensionORAddressComponents: $.ASN1Decoder<ExtensionORAddressComponents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionORAddressComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionORAddressComponents} The decoded data structure.
 */
export function _decode_ExtensionORAddressComponents(el: _Element) {
    if (!_cached_decoder_for_ExtensionORAddressComponents) {
        _cached_decoder_for_ExtensionORAddressComponents = _decode_PDSParameter;
    }
    return _cached_decoder_for_ExtensionORAddressComponents(el);
}

let _cached_encoder_for_ExtensionORAddressComponents: $.ASN1Encoder<ExtensionORAddressComponents> | null = null;

/**
 * @summary Encodes a(n) ExtensionORAddressComponents into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionORAddressComponents, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionORAddressComponents(
    value: ExtensionORAddressComponents,
    elGetter: $.ASN1Encoder<ExtensionORAddressComponents>
) {
    if (!_cached_encoder_for_ExtensionORAddressComponents) {
        _cached_encoder_for_ExtensionORAddressComponents = _encode_PDSParameter;
    }
    return _cached_encoder_for_ExtensionORAddressComponents(value, elGetter);
}


/* eslint-enable */

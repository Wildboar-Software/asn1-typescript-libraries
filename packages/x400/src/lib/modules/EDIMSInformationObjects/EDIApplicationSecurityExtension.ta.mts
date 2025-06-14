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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EDIApplicationSecurityExtension */
/**
 * @summary EDIApplicationSecurityExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityExtension  ::=  ExtensionField
 * ```
 */
export type EDIApplicationSecurityExtension = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION EDIApplicationSecurityExtension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityExtension */
let _cached_decoder_for_EDIApplicationSecurityExtension: $.ASN1Decoder<EDIApplicationSecurityExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIApplicationSecurityExtension */

/* START_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityExtension */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIApplicationSecurityExtension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIApplicationSecurityExtension} The decoded data structure.
 */
export function _decode_EDIApplicationSecurityExtension(el: _Element) {
    if (!_cached_decoder_for_EDIApplicationSecurityExtension) {
        _cached_decoder_for_EDIApplicationSecurityExtension = _decode_ExtensionField;
    }
    return _cached_decoder_for_EDIApplicationSecurityExtension(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIApplicationSecurityExtension */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityExtension */
let _cached_encoder_for_EDIApplicationSecurityExtension: $.ASN1Encoder<EDIApplicationSecurityExtension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIApplicationSecurityExtension */

/* START_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityExtension */
/**
 * @summary Encodes a(n) EDIApplicationSecurityExtension into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIApplicationSecurityExtension, encoded as an ASN.1 Element.
 */
export function _encode_EDIApplicationSecurityExtension(
    value: EDIApplicationSecurityExtension,
    elGetter: $.ASN1Encoder<EDIApplicationSecurityExtension>
) {
    if (!_cached_encoder_for_EDIApplicationSecurityExtension) {
        _cached_encoder_for_EDIApplicationSecurityExtension = _encode_ExtensionField;
    }
    return _cached_encoder_for_EDIApplicationSecurityExtension(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIApplicationSecurityExtension */

/* eslint-enable */
